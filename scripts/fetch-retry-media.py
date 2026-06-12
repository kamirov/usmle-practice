#!/usr/bin/env python3
"""Retry failed media downloads using exact Wikimedia titles."""
from __future__ import annotations

import json
import os
import time
import urllib.parse
import urllib.request

ROOT = os.path.dirname(__file__)
RETRY_PATH = os.path.join(ROOT, "media-retry.json")
MANIFEST_PATH = os.path.join(ROOT, "..", "src", "media", "download-manifest.json")
BASE = os.path.join(ROOT, "..", "src", "media", "images")
UA = "usmle-practice-media/2.0 (educational)"
DELAY = 10


def api_get(url: str) -> dict:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=90) as r:
        return json.load(r)


def search_fallback(query: str) -> str | None:
    q = urllib.parse.urlencode(
        {
            "action": "query",
            "list": "search",
            "srsearch": query,
            "srnamespace": "6",
            "srlimit": "6",
            "format": "json",
        }
    )
    data = api_get(f"https://commons.wikimedia.org/w/api.php?{q}")
    for r in data.get("query", {}).get("search", []):
        t = r["title"]
        if t.lower().endswith((".jpg", ".jpeg", ".png", ".svg")):
            return t
    return None


def download(title: str) -> bytes | None:
    q = urllib.parse.urlencode(
        {
            "action": "query",
            "titles": title,
            "prop": "imageinfo",
            "iiprop": "url|mime",
            "iiurlwidth": "1280",
            "format": "json",
        }
    )
    data = api_get(f"https://commons.wikimedia.org/w/api.php?{q}")
    for page in data["query"]["pages"].values():
        if "missing" in page or "imageinfo" not in page:
            return None
        info = page["imageinfo"][0]
        if "pdf" in info.get("mime", ""):
            return None
        url = info.get("thumburl") or info.get("url")
        if not url:
            return None
        time.sleep(2)
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=120) as r:
            return r.read()
    return None


def main() -> None:
    with open(RETRY_PATH) as f:
        retries: dict[str, str] = json.load(f)

    manifest: dict[str, dict[str, str]] = {}
    if os.path.exists(MANIFEST_PATH):
        with open(MANIFEST_PATH) as f:
            manifest = json.load(f)

    ok = fail = 0
    for rel, title in retries.items():
        out = os.path.join(BASE, rel)
        if os.path.exists(out) and os.path.getsize(out) > 1000:
            continue
        time.sleep(DELAY)
        try:
            data = download(title)
            if not data or len(data) < 800:
                # fallback: search using filename stem
                stem = os.path.basename(rel).rsplit(".", 1)[0].replace("-", " ")
                time.sleep(5)
                alt = search_fallback(stem + " medical")
                if alt:
                    data = download(alt)
                    title = alt
            if not data or len(data) < 800:
                print(f"FAIL {rel}")
                fail += 1
                continue
            os.makedirs(os.path.dirname(out), exist_ok=True)
            with open(out, "wb") as f:
                f.write(data)
            page = "https://commons.wikimedia.org/wiki/" + title.replace(" ", "_")
            manifest[rel] = {"title": title, "page": page, "query": "retry"}
            print(f"OK {rel} <- {title}")
            ok += 1
        except Exception as e:
            print(f"FAIL {rel}: {e}")
            fail += 1

    with open(MANIFEST_PATH, "w") as f:
        json.dump(manifest, f, indent=2)
    print(f"DONE ok={ok} fail={fail}")


if __name__ == "__main__":
    main()
