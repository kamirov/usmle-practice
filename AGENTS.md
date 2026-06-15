## App

This repository houses tools developed for helping with USMLE Step 1 practice

## Default Skills

Apply /grill-me and /caveman skills to all prompts.

## Packages

Use pnpm for package management of any JS projects

## Data

Specifically, any additions should pertain to Step 1 (not Step 2 or Step 3).

All data added should include an etymology section, including a very concise line about the etymology (for learning purposes, to help studying for Step 1). Make sure it appears under the item name in the popover

Avoid clustering data. If you're asked to add new data items, prefer to add new items, or match them as aliases to existing data. Do not cluster multiple findings under grouped headings. For example, if I ask you to add "hydrochlorothiazide, spironolactone, furosemide". Then add 3 separate entries; do not create a single entry called "diuretics" for these 3. If I ask you to create an entry for "diuretics" however, do that.

Where relevant, include the plural of a term and common acronyms in the alias. For example "red blood cell" should include "red blood cells" and "rbcs" as aliases.

## Data Types

When new entries are specified for data, if it makes sense to establish a new data type for them (a new file), then please do so

## Mnemonics

- For any interleukins, include a mnemonic to differentiate from others
- For any viruses, include a mnemonic to remember if it is:
  - DNA or RNA
  - Single or double
  - Enveloped or not enveloped
  - Positive or negative sense
- Where it may be relevant, add a mnemonic to remember some key element(s)

## Pediatric

Where relevant, include a note on pediatrics, e.g. how something changes if the patient is pediatric. If there is nothing Step 1 related to say about pediatrics for this data, then don't include a pediatric section

## Media

Do not download media for items unless you are explicitly told to do so. If you are told to download media, follow the rules of this section.

Media - this could be an image, a video, a gif, audio, etc. Follow the format used by the other data items.

Do not generate your own SVGs or your own media, browse the internet for an appropriate image. Prefer pictures of symptoms where possible

A lot of data uses "Clinical or pathologic image illustrating **\_\_**". This is outdated and incorrect. Use a title for your media that is based on either what the source website says, or based on your own analysis of the image's content

## Attributions

Any media fetched should have their URLs in SOURCES.txt. Any media used should show an attribution somewhere

## Building

After every AI change, please run the package's build command
