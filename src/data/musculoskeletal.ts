export interface MusculoskeletalEntry {
  id: string;
  name: string;
  etymology: string;
  aliases: string[];
  definition: string;
  anatomy?: string;
  action: string[];
  innervation?: string;
  clinicalRelevance: string[];
  boardsPearls: string[];
  distinguishFrom?: string[];
  pediatrics?: string;
}

export const MUSCULOSKELETAL: MusculoskeletalEntry[] = [
  {
    id: "rotator-cuff",
    name: "Rotator Cuff",
    etymology: "Latin rotare = turn + cuff = encircling band",
    aliases: [
      "rotator cuff",
      "rotator cuff muscles",
      "rotator cuff musculature",
      "rc muscles",
    ],
    definition:
      "Group of four muscles and their tendons that originate on the scapula and insert on the humeral head, stabilizing the glenohumeral joint and enabling controlled shoulder motion.",
    anatomy:
      "SITS muscles: supraspinatus (supraspinous fossa → superior facet of greater tuberosity), infraspinatus (infraspinous fossa → greater tuberosity), teres minor (lateral scapular border → greater tuberosity), subscapularis (subscapular fossa → lesser tuberosity). Tendons pass under the coracoacromial arch.",
    action: [
      "Dynamic stabilization of the humeral head in the glenoid during arm elevation",
      "Supraspinatus — initiates abduction; infraspinatus/teres minor — external rotation; subscapularis — internal rotation",
      "Counterbalance deltoid superior pull to prevent superior humeral migration",
    ],
    innervation: "All four muscles: suprascapular nerve (supraspinatus, infraspinatus) and upper/lower subscapular nerves (subscapularis, teres minor)",
    clinicalRelevance: [
      "Rotator cuff tears and tendinopathy are leading causes of shoulder pain in adults",
      "Supraspinatus tendon most vulnerable to subacromial impingement and attritional tear",
      "Chronic cuff dysfunction → superior humeral migration and secondary subacromial impingement",
      "MRI and ultrasound diagnose partial vs full-thickness tears",
    ],
    boardsPearls: [
      "SITS mnemonic: Supraspinatus, Infraspinatus, Teres minor, Subscapularis",
      "Supraspinatus — most commonly torn; passes under acromion in subacromial space",
      "Subscapularis inserts on lesser tuberosity; other three on greater tuberosity",
      "Massive cuff tear → positive drop-arm test and inability to maintain abduction",
    ],
    distinguishFrom: [
      "Deltoid — prime mover for abduction, not primary glenohumeral stabilizer",
      "Biceps long head — anterior shoulder pain, Speed/Yergason tests",
      "Glenohumeral osteoarthritis — older patient, decreased ROM, crepitus",
      "Adhesive capsulitis — global loss of passive and active ROM",
    ],
    pediatrics:
      "Acute rotator cuff tears are uncommon in children; shoulder pain more often Little League shoulder (proximal humeral physeal stress) or instability.",
  },
  {
    id: "supraspinatus",
    name: "Supraspinatus",
    etymology: "Latin supra = above + spina = spine",
    aliases: ["supraspinatus", "supraspinatus muscle", "supraspinatus tendon"],
    definition:
      "Rotator cuff muscle occupying the supraspinous fossa of the scapula; its tendon passes beneath the acromion through the subacromial space to insert on the superior facet of the greater tuberosity.",
    anatomy:
      "Origin: supraspinous fossa. Insertion: superior facet of greater tuberosity of humerus. Passes under coracoacromial arch.",
    action: [
      "Initiates arm abduction (first ~15°)",
      "Assists deltoid in abduction to ~90°",
      "Depresses humeral head during elevation to maintain glenohumeral alignment",
    ],
    innervation: "Suprascapular nerve (C5–C6)",
    clinicalRelevance: [
      "Most commonly injured rotator cuff tendon (impingement and degenerative tear)",
      "Painful arc syndrome (60–120° abduction) suggests supraspinatus tendinopathy",
      "Empty can (Jobe) test assesses supraspinatus function",
      "Full-thickness tear → weakness with abduction and positive drop-arm sign",
    ],
    boardsPearls: [
      "#1 rotator cuff tendon torn — passes under acromion",
      "Empty can test — thumb down, resist abduction at ~90° with scapular plane elevation",
      "Drop-arm test — cannot slowly lower arm from 90° abduction (full tear)",
      "Impingement compresses supraspinatus tendon against acromion with forward flexion/abduction",
    ],
    distinguishFrom: [
      "Infraspinatus — external rotation, infraspinous fossa",
      "Deltoid — primary abductor after initiation; no subacromial impingement pathology",
      "Subscapularis — internal rotation, lesser tuberosity insertion",
    ],
    pediatrics:
      "Isolated supraspinatus tears rare in pediatrics; overuse shoulder pain in throwers — consider physeal injury before cuff tear.",
  },
  {
    id: "infraspinatus",
    name: "Infraspinatus",
    etymology: "Latin infra = below + spina = spine",
    aliases: ["infraspinatus", "infraspinatus muscle", "infraspinatus tendon"],
    definition:
      "Rotator cuff muscle filling the infraspinous fossa of the scapula; tendon inserts on the posterior facet of the greater tuberosity and is the primary external rotator of the shoulder.",
    anatomy:
      "Origin: infraspinous fossa below scapular spine. Insertion: posterior facet of greater tuberosity.",
    action: [
      "Primary external (lateral) rotation of the humerus",
      "Posterior stabilization of glenohumeral joint",
      "Assists with shoulder extension and horizontal abduction",
    ],
    innervation: "Suprascapular nerve (C5–C6)",
    clinicalRelevance: [
      "Tears cause weakness of external rotation (hand behind back difficulty)",
      "Often involved with posterosuperior cuff tears alongside supraspinatus",
      "Posterior shoulder pain with resisted external rotation",
      "Assessed with resisted external rotation at side with elbow flexed 90°",
    ],
    boardsPearls: [
      "Main external rotator of the rotator cuff",
      "Same nerve as supraspinatus — suprascapular nerve (watch for ganglion cyst compression at spinoglenoid notch → isolated infraspinatus atrophy)",
      "External rotation lag sign — cannot maintain passive external rotation (tendon tear)",
      "SITS: second S is Supraspinatus, I is Infraspinatus",
    ],
    distinguishFrom: [
      "Teres minor — also external rotation; separate muscle on lateral scapular border",
      "Supraspinatus — abduction, supraspinous fossa",
      "Teres major — adduction/internal rotation, not rotator cuff",
    ],
  },
  {
    id: "teres-minor",
    name: "Teres Minor",
    etymology: "Latin teres = rounded + Latin minor = smaller",
    aliases: ["teres minor", "teres minor muscle", "teres minor tendon"],
    definition:
      "Smallest rotator cuff muscle arising from the lateral border of the scapula; assists infraspinatus with external rotation and posterior glenohumeral stabilization.",
    anatomy:
      "Origin: upper two-thirds of lateral border of scapula. Insertion: inferior facet of greater tuberosity (with infraspinatus).",
    action: [
      "External (lateral) rotation of the humerus",
      "Posterior-inferior glenohumeral stabilization",
      "Assists adduction and extension of the arm",
    ],
    innervation: "Axillary nerve (C5–C6) — lower subscapular branch pattern; classically axillary nerve",
    clinicalRelevance: [
      "Less commonly torn in isolation than supraspinatus",
      "Involved in larger posteroinferior cuff tears",
      "Axillary nerve injury (anterior shoulder dislocation, surgical trauma) can affect teres minor and deltoid",
      "Hornblower sign — inability to externally rotate arm with elbow flexed (posterior cuff tear)",
    ],
    boardsPearls: [
      "External rotator with infraspinatus — T in SITS",
      "Axillary nerve also innervates deltoid — shoulder dislocation can injure both",
      "Do not confuse with teres major (adductor, latissimus dorsi companion, not rotator cuff)",
      "Posterior cuff tears may involve infraspinatus + teres minor",
    ],
    distinguishFrom: [
      "Teres major — adduction and internal rotation; innervated by lower subscapular nerve",
      "Infraspinatus — larger primary external rotator from infraspinous fossa",
      "Deltoid — axillary nerve, abduction, not rotator cuff",
    ],
    pediatrics:
      "Same axillary nerve vulnerability with anterior shoulder dislocation in adolescents; teres minor injury uncommon in isolation.",
  },
  {
    id: "subscapularis",
    name: "Subscapularis",
    etymology: "Latin sub = under + scapula = shoulder blade",
    aliases: ["subscapularis", "subscapularis muscle", "subscapularis tendon"],
    definition:
      "Largest rotator cuff muscle on the anterior scapula (subscapular fossa); the primary internal rotator, inserting on the lesser tuberosity of the humerus.",
    anatomy:
      "Origin: subscapular fossa (anterior scapula). Insertion: lesser tuberosity of humerus. Separated from supraspinatus by bicipital groove.",
    action: [
      "Primary internal (medial) rotation of the humerus",
      "Anterior glenohumeral stabilization — prevents anterior humeral translation",
      "Assists with adduction and extension",
    ],
    innervation: "Upper and lower subscapular nerves (C5–C6, C5–C7)",
    clinicalRelevance: [
      "Tear → weakness of internal rotation and anterior shoulder instability",
      "Lift-off test (hand behind back) and belly-press (Napoleon) test assess subscapularis",
      "Often injured with anterior dislocation and in massive cuff tears",
      "Isolated tear less common than supraspinatus but under-recognized",
    ],
    boardsPearls: [
      "Only rotator cuff muscle inserting on lesser tuberosity (others on greater tuberosity)",
      "Primary internal rotator — S in SITS (Subscapularis)",
      "Belly-press test — cannot keep hand flat on abdomen when pressing (upper subscapularis)",
      "Lift-off test — cannot lift hand off lower back (lower subscapularis)",
      "Anterior shoulder pain + internal rotation weakness → think subscapularis tear",
    ],
    distinguishFrom: [
      "Pectoralis major — powerful internal rotator/adductor, not rotator cuff",
      "Latissimus dorsi — internal rotation and adduction from thoracic origin",
      "Supraspinatus — abduction, greater tuberosity insertion",
    ],
    pediatrics:
      "Subscapularis tears rare in children; anterior instability more often labral (Bankart) injury than cuff tear.",
  },
  {
    id: "biceps-brachii",
    name: "Biceps Brachii",
    etymology:
      "Latin biceps = two-headed + brachium = arm — two-headed muscle of the upper arm",
    aliases: [
      "biceps brachii",
      "biceps brachii muscle",
      "biceps brachii muscles",
      "biceps",
      "biceps muscle",
      "biceps muscles",
      "biceps brachialis",
      "biceps of arm",
      "bb muscle",
    ],
    definition:
      "Two-headed muscle of the anterior upper arm — long head from the supraglenoid tubercle (intracapsular) and short head from the coracoid process — flexing the elbow and supinating the forearm (especially when elbow is flexed).",
    anatomy:
      "Long head: supraglenoid tubercle of scapula → passes through bicipital groove → joins short head. Short head: coracoid process. Common insertion: radial tuberosity and bicipital aponeurosis into deep forearm fascia.",
    action: [
      "Primary elbow flexor (with brachialis and brachioradialis)",
      "Supinates the forearm when elbow is flexed (works with supinator muscle)",
      "Long head assists shoulder flexion and stabilizes humeral head in glenoid",
      "Short head assists shoulder flexion and horizontal adduction",
    ],
    innervation: "Musculocutaneous nerve (C5–C6)",
    clinicalRelevance: [
      "Proximal biceps tendon rupture — Popeye deformity (bulging distal muscle belly)",
      "Bicipital tendinopathy — anterior shoulder pain in bicipital groove",
      "Speed test and Yergason test assess long head of biceps",
      "Musculocutaneous nerve injury → weak elbow flexion and ↓ biceps reflex (C5–C6)",
    ],
    boardsPearls: [
      "Two heads — long (supraglenoid, intracapsular) and short (coracoid)",
      "Musculocutaneous nerve (C5–C6) — also supplies brachialis and lateral forearm sensation",
      "Biceps reflex tests C5–C6 (musculocutaneous)",
      "Popeye sign — proximal long head rupture → retracted tendon, bunched muscle belly",
      "vs brachialis — deeper pure elbow flexor; also musculocutaneous nerve",
      "vs triceps — posterior arm, elbow extension, radial nerve (C7–C8)",
    ],
    distinguishFrom: [
      "Brachialis — deep elbow flexor; primary flexor at all elbow angles",
      "Brachioradialis — forearm flexor at mid-pronation; radial nerve",
      "Triceps brachii — posterior arm; elbow extension; radial nerve",
      "Coracobrachialis — medial arm; musculocutaneous nerve; shoulder flexion/adduction",
      "Biceps femoris — posterior thigh hamstring; sciatic nerve; not arm muscle",
    ],
    pediatrics:
      "Isolated biceps rupture uncommon in children; shoulder pain in throwers more often Little League shoulder (proximal humeral physeal injury) than biceps tendon tear.",
  },
  {
    id: "deltoid",
    name: "Deltoid",
    etymology:
      "Greek delta = triangular (Δ shape) + Latin -oid = resembling — triangular shoulder muscle",
    aliases: [
      "deltoid",
      "deltoid muscle",
      "deltoid muscles",
      "deltoids",
      "deltoideus",
      "shoulder deltoid",
    ],
    definition:
      "Large triangular muscle covering the shoulder joint — with anterior, middle, and posterior fibers — serving as the primary abductor of the arm and contributing to flexion, extension, and rotation depending on fiber region.",
    anatomy:
      "Origin: lateral third of clavicle (anterior), acromion (middle), spine of scapula (posterior). Insertion: deltoid tuberosity of humerus. Overlies surgical neck of humerus where axillary nerve wraps.",
    action: [
      "Middle fibers — primary abductor of arm (15°–90°; supraspinatus initiates first 15°)",
      "Anterior fibers — shoulder flexion and internal rotation",
      "Posterior fibers — shoulder extension and external rotation",
      "Dynamic stabilizer during arm elevation",
    ],
    innervation: "Axillary nerve (C5–C6)",
    clinicalRelevance: [
      "Axillary nerve injury (anterior shoulder dislocation, surgical neck humerus fracture) → flat deltoid, weak abduction",
      "Regimental badge area — axillary nerve sensory loss over lateral shoulder",
      "Deltoid atrophy with chronic axillary neuropathy",
      "Massive rotator cuff tear — deltoid may compensate partially for abduction",
    ],
    boardsPearls: [
      "Axillary nerve (C5–C6) — motor to deltoid and teres minor; sensation lateral shoulder",
      "Anterior shoulder dislocation → axillary nerve injury — check abduction and lateral sensation",
      "Middle deltoid = main abductor after supraspinatus initiates",
      "Surgical neck of humerus fracture — axillary nerve at risk",
      "vs supraspinatus — initiates abduction; deltoid continues to 90°",
      "vs rotator cuff — deltoid is prime mover; cuff stabilizes glenohumeral joint",
    ],
    distinguishFrom: [
      "Supraspinatus — initiates abduction; suprascapular nerve; rotator cuff",
      "Teres minor — external rotation; axillary nerve; not primary abductor",
      "Pectoralis major — anterior chest; flexion/adduction/internal rotation",
      "Trapezius — scapular elevation and rotation; accessory nerve (CN XI)",
      "Axillary nerve — innervates deltoid; nerve vs muscle distinction",
    ],
    pediatrics:
      "Anterior shoulder dislocation in adolescents can injure axillary nerve — assess deltoid contour, abduction strength, and lateral shoulder sensation after reduction.",
  },
  {
    id: "levator-scapulae",
    name: "Levator Scapulae",
    etymology:
      "Latin levare = to lift + scapula = shoulder blade — muscle elevating the scapula",
    aliases: [
      "levator scapulae",
      "levator scapulae muscle",
      "levator scapulae muscles",
      "levator scapula",
      "levator scapula muscle",
      "levator scapula muscles",
      "levator scapulae muscle group",
    ],
    definition:
      "Posterior neck muscle originating from the transverse processes of C1–C4 vertebrae and inserting on the superior angle and medial border of the scapula — elevating the scapula and assisting downward rotation and neck extension/lateral flexion.",
    anatomy:
      "Origin: transverse processes of C1–C4. Insertion: superior angle and medial border of scapula (between superior angle and spine). Deep to trapezius and sternocleidomastoid; overlies scalene muscles.",
    action: [
      "Elevates the scapula (shoulder shrug component with trapezius upper fibers)",
      "Downwardly rotates scapula (with rhomboids)",
      "Assists ipsilateral neck extension and lateral flexion when scapula is fixed",
      "Stabilizes scapula during arm movement",
    ],
    innervation: "Dorsal scapular nerve (C4–C5; sometimes C3 contribution)",
    clinicalRelevance: [
      "Chronic neck stiffness and pain — levator scapulae trigger point common in desk workers",
      "Dorsal scapular nerve entrapment — weakness elevating scapula, scapula slightly displaced inferiorly/laterally",
      "Scalene syndrome — compression of brachial plexus and dorsal scapular nerve between scalene muscles",
      "Whiplash and cervical strain — levator scapulae spasm and tenderness",
    ],
    boardsPearls: [
      "Dorsal scapular nerve (C4–C5) — also innervates rhomboid major and minor",
      "Elevates scapula with upper trapezius; downward rotation with rhomboids",
      "vs trapezius — accessory nerve (CN XI); broader scapular and neck actions",
      "vs serratus anterior — protraction and upward rotation; long thoracic nerve",
      "Scalene triangle — brachial plexus and subclavian artery pass between anterior and middle scalenes",
    ],
    distinguishFrom: [
      "Trapezius — CN XI; upper/middle/lower fibers; broader scapular motion",
      "Rhomboid major/minor — retract scapula; same dorsal scapular nerve",
      "Serratus anterior — protracts scapula; long thoracic nerve; winged scapula if injured",
      "Scalene muscles — neck flexion/lateral flexion; not primary scapular elevator",
      "Sternocleidomastoid — CN XI; head rotation; anterior neck",
    ],
    pediatrics:
      "Congenital muscular torticollis involves SCM, not levator scapulae — but chronic neck posture in adolescents can cause levator scapulae strain mimicking cervical radiculopathy.",
  },
  {
    id: "serratus-anterior",
    name: "Serratus Anterior",
    etymology:
      "Latin serratus = saw-toothed + anterior = front — saw-edged muscle on the anterior chest wall",
    aliases: [
      "serratus anterior",
      "serratus anterior muscle",
      "serratus anterior muscles",
      "serratus anterior muscle group",
      "serratus",
      "boxer's muscle",
      "boxers muscle",
      "big swing muscle",
    ],
    definition:
      "Broad, saw-toothed muscle on the lateral chest wall arising from the upper eight or nine ribs and inserting on the medial border of the scapula — protracting and upwardly rotating the scapula and holding it against the thoracic wall during arm elevation.",
    anatomy:
      "Origin: external surfaces of ribs 1–8 (or 9). Insertion: anterior/medial border of scapula (costal surface). Courses deep to pectoralis major along mid-axillary line; innervated superficially by long thoracic nerve along its length.",
    action: [
      "Protracts scapula (pulls scapula around rib cage anteriorly)",
      "Upwardly rotates scapula for full overhead arm elevation",
      "Holds medial scapular border firmly against thoracic wall",
      "Assists forced inspiration when scapula is fixed (accessory respiratory muscle)",
    ],
    innervation: "Long thoracic nerve (C5–C7 roots)",
    clinicalRelevance: [
      "Long thoracic nerve injury → serratus anterior paralysis → medial winged scapula",
      "Classic after axillary lymph node dissection (mastectomy)",
      "Wall push-up test — medial border of scapula lifts off chest (winging)",
      "Viral neuritis (Parsonage-Turner), heavy backpacks, repetitive overhead sports",
    ],
    boardsPearls: [
      "Long thoracic nerve (C5–C7) → serratus anterior — winged scapula if injured",
      "Medial winging on wall push-up — vs lateral winging from trapezius/accessory nerve injury",
      "Required for full overhead elevation — without it scapula cannot upwardly rotate",
      "Axillary node dissection classic iatrogenic cause",
      "vs rhomboids — retract scapula; dorsal scapular nerve",
      "vs pectoralis minor — protraction from coracoid; medial pectoral nerve",
    ],
    distinguishFrom: [
      "Long thoracic nerve — innervates serratus anterior; nerve vs muscle",
      "Trapezius — accessory nerve; elevation/retraction; lateral winging if paralyzed",
      "Rhomboid major/minor — retraction; dorsal scapular nerve",
      "Pectoralis minor — coracoid attachment; protraction assist; medial pectoral nerve",
      "Latissimus dorsi — humeral adduction/extension; thoracodorsal nerve",
    ],
    pediatrics:
      "Winged scapula from long thoracic nerve injury is rare in children; consider Parsonage-Turner syndrome after viral illness if acute painful medial winging. Facioscapulohumeral dystrophy causes bilateral scapular winging with facial weakness.",
  },
  {
    id: "axillary-nerve",
    name: "Axillary Nerve",
    etymology: "Latin axilla = armpit + Greek neuron = sinew/nerve",
    aliases: ["axillary nerve", "circumflex nerve"],
    definition:
      "Terminal branch of the posterior cord of the brachial plexus that innervates the deltoid and teres minor and provides sensation over the lateral shoulder.",
    anatomy:
      "Exits axilla posterior to humerus through the quadrangular space with the posterior circumflex humeral artery; wraps around the surgical neck of the humerus deep to deltoid.",
    action: [
      "Motor — deltoid (arm abduction, especially middle deltoid past initiation), teres minor (external rotation)",
      "Sensory — skin over lateral shoulder (\"regimental badge\" area)",
    ],
    innervation: "C5–C6 fibers from posterior cord of brachial plexus",
    clinicalRelevance: [
      "Anterior shoulder dislocation — classic cause of axillary nerve neuropraxia",
      "Fracture of surgical neck of humerus",
      "Iatrogenic injury during shoulder surgery or axillary nerve block",
      "Flat deltoid with weakness of abduction and loss of lateral shoulder sensation",
    ],
    boardsPearls: [
      "Anterior dislocation → axillary nerve injury — check deltoid sensation and abduction",
      "Regimental badge area numbness = axillary nerve sensory loss",
      "Passes through quadrangular space with posterior circumflex humeral artery",
      "Teres minor also supplied — external rotation may be weak",
    ],
    distinguishFrom: [
      "Suprascapular nerve — supraspinatus/infraspinatus only; no deltoid or lateral shoulder numbness",
      "Musculocutaneous nerve — biceps/brachialis weakness, lateral forearm sensation",
      "Radial nerve — wrist/finger extension, posterior arm; spiral groove fracture",
      "Long thoracic nerve — serratus anterior, winged scapula",
    ],
    pediatrics:
      "Anterior shoulder dislocation in adolescents can injure axillary nerve; assess deltoid function and sensation after reduction.",
  },
  {
    id: "suprascapular-nerve",
    name: "Suprascapular Nerve",
    etymology: "Latin supra = above + scapula = shoulder blade + Greek neuron = sinew/nerve",
    aliases: ["suprascapular nerve"],
    definition:
      "Branch of the upper trunk of the brachial plexus that innervates the supraspinatus and infraspinatus rotator cuff muscles as it courses across the posterior scapula.",
    anatomy:
      "Passes through the suprascapular notch (under superior transverse scapular ligament) to supraspinatus; motor branch to infraspinatus continues through spinoglenoid notch to infraspinous fossa.",
    action: [
      "Motor — supraspinatus (initiates abduction), infraspinatus (external rotation)",
      "Sensory — minimal; mainly articular branches to glenohumeral and AC joints",
    ],
    innervation: "C5–C6 fibers from upper trunk of brachial plexus",
    clinicalRelevance: [
      "Compression at suprascapular notch — weakness of both supraspinatus and infraspinatus",
      "Spinoglenoid notch ganglion cyst — isolated infraspinatus atrophy and external rotation weakness (supraspinatus spared)",
      "Traction or repetitive overhead sports injury (volleyball, baseball)",
      "Visible wasting of supraspinatus and/or infraspinatus fossae",
    ],
    boardsPearls: [
      "Innervates supraspinatus + infraspinatus — both rotator cuff external rotation/abduction muscles",
      "Spinoglenoid ganglion cyst → isolated infraspinatus atrophy — boards favorite",
      "Passes under superior transverse scapular ligament at suprascapular notch",
      "vs axillary nerve — deltoid and lateral shoulder sensation unaffected",
    ],
    distinguishFrom: [
      "Axillary nerve — deltoid paralysis and regimental badge numbness",
      "Upper subscapular nerve — subscapularis (internal rotation)",
      "Dorsal scapular nerve — rhomboids, levator scapulae",
      "Long thoracic nerve — serratus anterior, winged scapula",
    ],
    pediatrics:
      "Overhead youth athletes may develop suprascapular neuropathy from repetitive traction; consider if posterior cuff weakness without trauma.",
  },
  {
    id: "accessory-nerve",
    name: "Accessory Nerve",
    etymology: "Latin accessorius = additional/helper + Greek neuron = sinew/nerve",
    aliases: [
      "accessory nerve",
      "accessory nerves",
      "cranial nerve xi",
      "cn xi",
      "cn11",
      "spinal accessory nerve",
      "spinal accessory nerves",
      "nervus accessorius",
      "eleventh cranial nerve",
    ],
    definition:
      "Cranial nerve XI with cranial and spinal components — the cranial root joins the vagus to supply pharyngeal and laryngeal muscles (except cricothyroid); the spinal root innervates sternocleidomastoid and trapezius for head rotation and shoulder elevation.",
    anatomy:
      "Cranial root arises from nucleus ambiguus (medulla), briefly joins vagus, then distributes via pharyngeal and superior laryngeal branches. Spinal root arises from C1–C5 spinal segments, ascends through foramen magnum, exits skull via jugular foramen, descends in posterior cervical triangle, and innervates sternocleidomastoid then trapezius.",
    action: [
      "Cranial root (with vagus) — palatal and pharyngeal muscles; laryngeal muscles except cricothyroid",
      "Spinal root — sternocleidomastoid (ipsilateral head turn to opposite side), trapezius (shoulder shrug and scapular rotation)",
      "Sensory — minimal; proprioceptive afferents from SCM/trapezius",
    ],
    innervation: "Cranial root from medulla (nucleus ambiguus); spinal root from C1–C5 anterior horn cell columns",
    clinicalRelevance: [
      "Jugular foramen (glomus jugulare) syndrome — CN IX, X, XI palsies",
      "Iatrogenic injury during radical neck dissection or posterior triangle lymph node biopsy",
      "Weakness turning head to opposite side (SCM) and shoulder shrug (trapezius atrophy)",
      "Often tested with CN IX and X at jugular foramen",
    ],
    boardsPearls: [
      "CN XI = accessory nerve — cranial + spinal parts",
      "Spinal accessory → SCM + trapezius; cranial root travels with vagus",
      "Jugular foramen lesion triad: CN IX (gag), X (hoarseness), XI (SCM/trapezius weakness)",
      "Turn head against resistance + shoulder shrug test spinal accessory function",
      "vs long thoracic nerve — serratus anterior winged scapula, not trapezius atrophy",
    ],
    distinguishFrom: [
      "Long thoracic nerve — serratus anterior, medial winged scapula",
      "Dorsal scapular nerve — rhomboids and levator scapulae",
      "Vagus nerve (CN X) — parasympathetic and laryngeal innervation without trapezius",
      "Cervical radiculopathy — dermatomal pain/weakness, not isolated SCM/trapezius",
    ],
    pediatrics:
      "Congenital sternocleidomastoid torticollis is muscular, not accessory neuropathy; still assess SCM bulk and head rotation if postoperative neck mass excision.",
  },
  {
    id: "long-thoracic-nerve",
    name: "Long Thoracic Nerve",
    etymology: "Latin longus = long + Greek thorax = chest + neuron = sinew/nerve",
    aliases: [
      "long thoracic nerve",
      "long thoracic nerves",
      "lateral thoracic nerve",
      "external respiratory nerve of bell",
      "nervus thoracicus longus",
      "ltn",
    ],
    definition:
      "Purely motor nerve formed from C5–C7 (and sometimes C4) roots of the brachial plexus that courses along the lateral chest wall to innervate serratus anterior — stabilizing the scapula against the thoracic wall during arm elevation and pushing movements.",
    anatomy:
      "Roots arise directly from C5–C7 (not a named cord/trunk branch); passes deep to clavicle, descends along mid-axillary line superficial to serratus anterior on the chest wall, vulnerable along its long superficial course.",
    action: [
      "Motor — serratus anterior (protracts and upwardly rotates scapula; holds medial scapular border against rib cage)",
      "Required for full overhead arm elevation and wall push-ups",
      "Injury → medial scapular winging when pushing against resistance",
    ],
    innervation: "C5–C7 roots (classically); occasionally C4 contribution",
    clinicalRelevance: [
      "Axillary lymph node dissection (mastectomy) — iatrogenic traction injury",
      "Heavy backpacks, repetitive overhead sports, viral neuritis",
      "Winged scapula — medial border lifts off thorax with wall push-up or resisted protraction",
      "May mimic or coexist with other brachial plexus injuries",
    ],
    boardsPearls: [
      "Winged scapula = long thoracic nerve → serratus anterior",
      "C5–C7 roots, not posterior cord branch",
      "Medial winging (vs lateral winging from trapezius/accessory nerve injury)",
      "Axillary node dissection classic iatrogenic cause",
      "Test — push against wall; scapula wings medially",
    ],
    distinguishFrom: [
      "Accessory nerve (spinal) — trapezius paralysis, lateral winging, weak shoulder shrug",
      "Dorsal scapular nerve — rhomboid weakness, scapula closer to midline at rest",
      "Axillary nerve — deltoid weakness, regimental badge numbness",
      "Facioscapulohumeral muscular dystrophy — bilateral scapular winging, facial weakness",
    ],
    pediatrics:
      "Rare in children; consider viral brachial neuritis (Parsonage-Turner) if acute painful scapular winging after upper respiratory infection.",
  },
  {
    id: "phrenic-nerve",
    name: "Phrenic Nerve",
    etymology: "Greek phren = diaphragm/mind + neuron = sinew/nerve",
    aliases: [
      "phrenic nerve",
      "phrenic nerves",
      "nervus phrenicus",
      "c3-c5 phrenic",
      "c3 c4 c5 keeps diaphragm alive",
    ],
    definition:
      "Mixed nerve arising chiefly from C3–C5 spinal roots that descends through the neck and mediastinum to provide the sole motor innervation to each hemidiaphragm and sensory fibers to the central diaphragm, pericardium, and mediastinal pleura.",
    anatomy:
      "Formed from ventral rami of C3–C5; right phrenic passes anterior to right subclavian artery, along right atrium/pericardium to diaphragm; left phrenic crosses aortic arch and descends beside pericardium to diaphragm. Each pierces central tendon of its hemidiaphragm.",
    action: [
      "Motor — diaphragm contraction (primary muscle of inspiration)",
      "Sensory — central diaphragmatic pleura, pericardium, mediastinal structures",
      "Referred pain to ipsilateral shoulder (C3–C4 dermatomes) with diaphragmatic or pericardial irritation",
    ],
    innervation: "C3–C5 ventral rami (mnemonic: C3, C4, C5 keeps the diaphragm alive)",
    clinicalRelevance: [
      "Phrenic nerve palsy — elevated hemidiaphragm on CXR, paradoxical upward diaphragm movement on sniff test",
      "Neck surgery, mediastinal tumor, cardiac surgery, viral neuritis",
      "Hiccups — irritation of phrenic or vagus pathways",
      "Referred shoulder pain with subphrenic abscess, splenic rupture, or pericarditis",
    ],
    boardsPearls: [
      "C3–C4–C5 keeps the diaphragm alive",
      "Sole motor supply to each hemidiaphragm",
      "Left phrenic nerve loops over aortic arch",
      "Diaphragmatic irritation → referred pain to shoulder (C3–C4)",
      "Elevated hemidiaphragm + sniff test paradoxical motion = phrenic palsy",
    ],
    distinguishFrom: [
      "Vagus nerve — parasympathetic; does not motor innervate diaphragm",
      "Intercostal nerves — external intercostals/accessory muscles, not hemidiaphragm",
      "Recurrent laryngeal nerve — laryngeal muscles, hoarseness not diaphragm paralysis",
      "Diaphragmatic eventration — congenital thinning, not nerve injury",
    ],
    pediatrics:
      "Congenital diaphragmatic hernia (Bochdalek) is a defect, not phrenic palsy — neonatal respiratory distress with scaphoid abdomen and bowel sounds in chest.",
  },
  {
    id: "recurrent-laryngeal-nerve",
    name: "Recurrent Laryngeal Nerve",
    etymology: "Latin recurrere = to run back + laryngeal = of the larynx + Greek neuron = sinew/nerve",
    aliases: [
      "recurrent laryngeal nerve",
      "recurrent laryngeal nerves",
      "rln",
      "rlns",
      "inferior laryngeal nerve",
      "inferior laryngeal nerves",
      "nervus laryngeus recurrens",
    ],
    definition:
      "Branch of the vagus nerve (CN X) that loops under the right subclavian artery or left aortic arch before ascending in the tracheoesophageal groove to innervate all intrinsic laryngeal muscles except cricothyroid — controlling vocal cord abduction/adduction and voice.",
    anatomy:
      "Right RLN branches from vagus at root of neck, hooks under right subclavian artery, ascends in tracheoesophageal groove. Left RLN hooks under aortic arch (ligamentum arteriosum remnant) then ascends similarly. Enters larynx posterior to cricothyroid joint.",
    action: [
      "Motor — all intrinsic laryngeal muscles except cricothyroid (superior laryngeal nerve branch)",
      "Abductors (posterior cricoarytenoid) and adductors (others) for vocal cord position",
      "Unilateral injury — hoarseness; bilateral injury — stridor and airway compromise",
      "Sensory — inferior laryngeal mucosa below vocal cords",
    ],
    innervation: "Branch of vagus (CN X); right loops subclavian artery, left loops aortic arch",
    clinicalRelevance: [
      "Thyroidectomy — most common iatrogenic cause of hoarseness",
      "Left hilar lung cancer (Pancoast) compressing left RLN",
      "Aortic aneurysm, mediastinal mass, neck trauma",
      "Unilateral palsy — breathy hoarseness; bilateral — inspiratory stridor, may need airway",
    ],
    boardsPearls: [
      "All intrinsic laryngeal muscles except cricothyroid",
      "Left RLN loops under aortic arch — left hilar mass → hoarseness",
      "Right RLN loops under right subclavian artery",
      "Post-thyroidectomy hoarseness → RLN injury until proven otherwise",
      "Bilateral RLN injury → stridor emergency",
    ],
    distinguishFrom: [
      "Superior laryngeal nerve — cricothyroid only; may affect pitch, less hoarseness",
      "Vagus trunk lesion — broader autonomic and pharyngeal deficits",
      "Laryngeal inflammation/edema — reversible, not nerve palsy",
      "Accessory nerve cranial root — overlaps laryngeal supply via vagus but not classic RLN injury pattern",
    ],
    pediatrics:
      "Recurrent laryngeal nerve injury is uncommon in children; hoarseness after neck surgery warrants laryngoscopy. Congenital vocal cord paralysis may mimic RLN palsy.",
  },
  {
    id: "trigeminal-nerve",
    name: "Trigeminal Nerve",
    etymology: "Latin tri = three + geminus = twin/double + Greek neuron = sinew/nerve",
    aliases: [
      "trigeminal nerve",
      "trigeminal nerves",
      "trigeminal",
      "cn v",
      "cn5",
      "cranial nerve v",
      "cranial nerve 5",
      "fifth cranial nerve",
      "nervus trigeminus",
      "trigeminus",
    ],
    definition:
      "Cranial nerve V — the principal sensory nerve of the face and motor nerve to the muscles of mastication; divides into ophthalmic (V1), maxillary (V2), and mandibular (V3) divisions with distinct exit foramina and dermatomal territories.",
    anatomy:
      "Large sensory ganglion (trigeminal ganglion, Gasser ganglion) in Meckel cave. Sensory nuclei: mesencephalic (proprioception from masticatory muscles), chief sensory (pons — touch/pressure), spinal tract nucleus (medulla — pain/temperature from face). Motor nucleus in pons supplies muscles of mastication via V3.",
    action: [
      "Sensory — face, scalp, cornea, nasal/oral mucosa, teeth, dura (tentorium)",
      "Motor (V3 only) — temporalis, masseter, medial/lateral pterygoids, mylohyoid, anterior digastric, tensor tympani, tensor veli palatini",
      "Corneal reflex — afferent V1 (ophthalmic), efferent VII (orbicularis oculi)",
      "Mastication and jaw proprioception",
    ],
    innervation: "CN V — sensory to face; motor via V3 to muscles of mastication",
    clinicalRelevance: [
      "Trigeminal neuralgia — paroxysmal lancinating V2/V3 distribution pain; carbamazepine first-line",
      "Herpes labialis — HSV-1 latency in trigeminal ganglion",
      "Trigeminal schwannoma and cavernous sinus lesions",
      "Corneal reflex loss — V1 afferent or VII efferent lesion",
      "Jaw deviation toward weak side with V3 motor lesion",
    ],
    boardsPearls: [
      "CN V = face sensation + mastication (motor only in V3)",
      "V1 ophthalmic — forehead, cornea, via superior orbital fissure",
      "V2 maxillary — cheek, upper teeth, via foramen rotundum",
      "V3 mandibular — lower face, tongue general sensation, via foramen ovale",
      "Trigeminal neuralgia — electric shock pain, trigger zones; carbamazepine",
      "HSV-1 latency in trigeminal ganglion → herpes labialis",
    ],
    distinguishFrom: [
      "Facial nerve (CN VII) — facial expression, taste anterior 2/3 tongue, not general face sensation",
      "Glossopharyngeal (CN IX) — posterior 1/3 tongue and pharynx",
      "Greater occipital nerve — C2 posterior scalp, not trigeminal territory",
      "Bell palsy — VII motor; corneal reflex tests V1 afferent with VII efferent",
    ],
    pediatrics:
      "Trigeminal neuralgia is rare in children; pediatric facial pain more often dental, sinus, or migraine. HSV-1 primary infection and herpes labialis occur in children with same trigeminal ganglion latency.",
  },
  {
    id: "maxillary-division",
    name: "Maxillary Division (V2)",
    etymology: "Latin maxilla = jaw (upper jaw) + Latin divisio = division",
    aliases: [
      "maxillary division",
      "maxillary divisions",
      "maxillary nerve",
      "maxillary nerves",
      "v2",
      "cn v2",
      "second division trigeminal",
      "second division of trigeminal nerve",
      "maxillary branch trigeminal",
      "maxillary branch of trigeminal nerve",
    ],
    definition:
      "Second division of the trigeminal nerve (CN V2) — purely sensory — supplying the midface, cheek, upper lip, palate, maxillary teeth, and maxillary sinus mucosa; exits the skull through the foramen rotundum.",
    anatomy:
      "Leaves trigeminal ganglion, passes through foramen rotundum into pterygopalatine fossa. Major branches: zygomatic (zygomaticofacial, zygomaticotemporal), infraorbital nerve (via infraorbital foramen — lower eyelid, cheek, upper lip, upper teeth), nasopalatine, greater/lesser palatine nerves.",
    action: [
      "Sensory — cheek, upper lip, lateral nose, upper gingiva and teeth",
      "Palatal sensation via greater/lesser palatine nerves",
      "Maxillary sinus and nasal cavity mucosa",
      "Lower eyelid and side of nose via infraorbital nerve",
    ],
    innervation: "Sensory branch of CN V (V2); no motor fibers",
    clinicalRelevance: [
      "Trigeminal neuralgia often involves V2 distribution",
      "Infraorbital nerve block for upper lip/cheek anesthesia",
      "Maxillary sinusitis — referred V2 facial pain/pressure",
      "Zygomatic fracture may injure infraorbital nerve → cheek numbness",
      "V2 anesthesia after pterygopalatine fossa tumor or cavernous sinus lesion",
    ],
    boardsPearls: [
      "V2 = maxillary division — sensory only; foramen rotundum",
      "Infraorbital nerve — cheek, upper lip, upper teeth (V2)",
      "vs V1 — forehead/cornea; vs V3 — lower face and motor mastication",
      "Pterygopalatine fossa — V2, maxillary artery, pterygopalatine ganglion",
      "Trigeminal neuralgia V2 — carbamazepine",
    ],
    distinguishFrom: [
      "Mandibular division (V3) — lower face, motor mastication, foramen ovale",
      "Ophthalmic division (V1) — forehead, cornea, superior orbital fissure",
      "Facial nerve (CN VII) — motor to face, not V2 sensory territory",
      "Maxillary artery — vascular supply, not V2 nerve itself",
    ],
    pediatrics:
      "Infraorbital nerve hypesthesia after midface trauma warrants imaging; primary trigeminal neuralgia uncommon in pediatrics.",
  },
  {
    id: "mandibular-division",
    name: "Mandibular Division (V3)",
    etymology: "Latin mandibula = jaw (lower jaw) + Latin divisio = division",
    aliases: [
      "mandibular division",
      "mandibular divisions",
      "mandibular nerve",
      "mandibular nerves",
      "v3",
      "cn v3",
      "third division trigeminal",
      "third division of trigeminal nerve",
      "mandibular branch trigeminal",
      "mandibular branch of trigeminal nerve",
    ],
    definition:
      "Third division of the trigeminal nerve (CN V3) — the only division with motor fibers — innervating muscles of mastication and providing sensory supply to the lower face, anterior two-thirds of the tongue (general sensation), and mandibular teeth; exits via the foramen ovale.",
    anatomy:
      "Motor root joins sensory root in foramen ovale. Branches: motor to temporalis, masseter, medial/lateral pterygoids; sensory — buccal, auriculotemporal, lingual (general sensation anterior 2/3 tongue), inferior alveolar → mental nerve (lower lip/chin). Chorda tympani (CN VII) joins lingual nerve in infratemporal fossa.",
    action: [
      "Motor — muscles of mastication (temporalis, masseter, medial/lateral pterygoid), mylohyoid, anterior digastric, tensor tympani, tensor veli palatini",
      "Sensory — lower face, chin, lower teeth, anterior 2/3 tongue (touch/pain, not taste)",
      "Proprioception from masticatory muscles via mesencephalic nucleus",
      "Jaw closure and chewing",
    ],
    innervation: "Motor and sensory branch of CN V (V3); foramen ovale exit",
    clinicalRelevance: [
      "Jaw deviates toward side of V3 motor lesion on opening",
      "Lingual nerve injury — anterior tongue numbness (dental/third molar surgery)",
      "Auriculotemporal syndrome (Frey syndrome) — gustatory sweating after parotid surgery",
      "Trigeminal neuralgia V3 distribution",
      "Foramen ovale mass (meningioma, perineural spread) affects V3",
    ],
    boardsPearls: [
      "V3 = only trigeminal division with motor fibers — mastication",
      "Foramen ovale exit; lingual nerve carries general sensation anterior 2/3 tongue",
      "Chorda tympani (VII taste/parasympathetic) joins lingual nerve (V3)",
      "Jaw deviates toward weak side — unilateral pterygoid weakness",
      "Inferior alveolar → mental nerve — lower lip/chin anesthesia",
    ],
    distinguishFrom: [
      "Maxillary division (V2) — sensory only, upper face/teeth, foramen rotundum",
      "Facial nerve (CN VII) — facial expression; chorda tympani rides with lingual nerve but is VII",
      "Hypoglossal (CN XII) — tongue motor, not sensation",
      "Glossopharyngeal (CN IX) — posterior 1/3 tongue taste and sensation",
    ],
    pediatrics:
      "Pediatric jaw weakness is uncommon from isolated V3 lesions; consider myopathy or neuromuscular disease if bilateral. Lingual nerve injury after third molar extraction can occur in adolescents.",
  },
  {
    id: "median-nerve",
    name: "Median Nerve",
    etymology: "Latin medius = middle + Greek neuron = sinew/nerve",
    aliases: [
      "median nerve",
      "median nerves",
      "nervus medianus",
      "median n",
    ],
    definition:
      "Major mixed nerve of the upper limb formed from the lateral and medial cords of the brachial plexus — supplying thenar muscles, most forearm flexors, and sensation to the lateral palm and radial three and a half digits.",
    anatomy:
      "C5–T1 roots → lateral cord (C6–C7) + medial cord (C8–T1) → median nerve. Courses medial to brachial artery in arm (no motor branches in arm), through cubital fossa, between two heads of pronator teres, deep to flexor digitorum superficialis. Anterior interosseous branch in forearm. Enters hand through carpal tunnel (bounded by carpal bones and flexor retinaculum) with flexor tendons.",
    action: [
      "Motor — pronator teres, flexor carpi radialis, palmaris longus, flexor digitorum superficialis (index/middle), flexor pollicis longus, pronator quadratus (anterior interosseous); thenar muscles (LOAF: lateral two lumbricals, opponens pollicis, abductor pollicis brevis, flexor pollicis brevis)",
      "Sensory — lateral palm, palmar thumb, index, middle, and radial half of ring finger",
      "Palmar cutaneous branch arises proximal to carpal tunnel — supplies thenar skin sensation, spared in carpal tunnel syndrome",
    ],
    innervation: "Lateral cord (C6–C7) + medial cord (C8–T1) of brachial plexus",
    clinicalRelevance: [
      "Carpal tunnel syndrome — compression at wrist; nocturnal paresthesias, Phalen/Tinel positive",
      "Pronator teres syndrome — proximal compression at elbow; forearm pain, no nocturnal pattern",
      "Anterior interosseous nerve syndrome — motor branch palsy; inability to make OK sign (FPL + FDP index)",
      "Supracondylar humerus fracture (children) — median or anterior interosseous nerve injury",
      "Wrist laceration — median nerve injury at carpal tunnel",
      "C6/C7 radiculopathy mimics median sensory symptoms but has neck pain and reflex changes",
    ],
    boardsPearls: [
      "LOAF — median thenar muscles: Lateral two lumbricals, Opponens pollicis, Abductor pollicis brevis, Flexor pollicis brevis",
      "Carpal tunnel — median nerve compression at wrist; thumb, index, middle finger paresthesias",
      "Palmar cutaneous branch spared in CTS — thenar eminence sensation preserved",
      "Anterior interosseous palsy — cannot flex IP joint of thumb or DIP of index (OK sign test)",
      "vs ulnar nerve — claw hand, ring/little finger, hypothenar muscles, interossei",
      "vs C6 radiculopathy — neck pain, Spurling positive, biceps reflex changes",
      "Supracondylar fracture in child — check median nerve and brachial artery",
    ],
    distinguishFrom: [
      "Ulnar nerve — ring/little finger sensation, interossei/ulnar lumbricals, claw hand",
      "Radial nerve — wrist/finger extension, posterior arm/forearm sensation",
      "Musculocutaneous nerve — biceps/brachialis, lateral forearm sensation",
      "C6 or C7 radiculopathy — dermatomal pattern with neck symptoms and reflex loss",
      "Carpal tunnel syndrome — entrapment at wrist, not the nerve anatomy itself",
    ],
    pediatrics:
      "Supracondylar humerus fracture is the classic pediatric median nerve (or anterior interosseous) injury — assess radial pulse and distal motor function after reduction. Carpal tunnel syndrome is uncommon in children; consider metabolic or inherited neuropathy if bilateral hand numbness.",
  },
  {
    id: "chorda-tympani",
    name: "Chorda Tympani",
    etymology: "Latin chorda = string/cord + Latin tympanum = drum (eardrum/middle ear)",
    aliases: [
      "chorda tympani",
      "chordae tympani",
      "chorda tympani nerve",
      "chordae tympani nerve",
      "chorda tympani branch",
      "nervus chorda tympani",
    ],
    definition:
      "Branch of the facial nerve (CN VII) that crosses the middle ear (medial to malleus, lateral to incus long process) and joins the lingual nerve (V3) — carrying taste from the anterior two-thirds of the tongue and parasympathetic fibers to the submandibular and sublingual salivary glands.",
    anatomy:
      "Originates from CN VII in facial canal, enters middle ear via petrotympanic fissure, crosses tympanic cavity, exits via petrotympanic fissure to infratemporal fossa, joins lingual nerve (V3). Preganglionic parasympathetics synapse in submandibular ganglion → submandibular/sublingual glands.",
    action: [
      "Special visceral afferent — taste from anterior 2/3 tongue (sweet, salt, sour, bitter, umami)",
      "Parasympathetic secretomotor — submandibular and sublingual salivary glands",
      "Travels with lingual nerve for sensory distribution to anterior tongue",
    ],
    innervation: "Branch of CN VII (facial); joins lingual nerve (V3) in infratemporal fossa",
    clinicalRelevance: [
      "Middle ear surgery (mastoidectomy) — chorda tympani injury → dry mouth, taste loss anterior tongue",
      "Ramsay Hunt syndrome — CN VII palsy with vesicles; taste and salivation affected",
      "Submandibular ganglion block/surgery — ↓ salivation",
      "Bell palsy — may include hyperacusis (stapedius) and taste disturbance if chorda involved",
    ],
    boardsPearls: [
      "Chorda tympani = CN VII branch — taste anterior 2/3 tongue + submandibular/sublingual saliva",
      "Crosses middle ear — vulnerable in mastoid surgery",
      "Joins lingual nerve (V3) — general tongue sensation is V3, taste is VII via chorda",
      "Submandibular ganglion — parasympathetic relay for submandibular/sublingual glands",
      "vs glossopharyngeal (IX) — posterior 1/3 tongue taste",
    ],
    distinguishFrom: [
      "Lingual nerve (V3) — general sensation anterior 2/3 tongue, not taste",
      "Glossopharyngeal (CN IX) — posterior 1/3 tongue taste and sensation",
      "Greater petrosal nerve — CN VII parasympathetic to lacrimal gland via pterygopalatine ganglion",
      "Tympanic membrane — structure named tympani, not the nerve",
    ],
    pediatrics:
      "Acute otitis media rarely injures chorda tympani; taste and salivation testing is not routine in children. Facial nerve palsy in Lyme disease or Bell palsy in pediatrics may affect taste similarly to adults.",
  },
  {
    id: "glossopharyngeal-nerve",
    name: "Glossopharyngeal Nerve",
    etymology: "Greek glossa = tongue + pharynx = throat + Greek neuron = sinew/nerve",
    aliases: [
      "glossopharyngeal nerve",
      "glossopharyngeal nerves",
      "glossopharyngeal",
      "cn ix",
      "cn9",
      "cranial nerve ix",
      "cranial nerve 9",
      "ninth cranial nerve",
      "nervus glossopharyngeus",
    ],
    definition:
      "Cranial nerve IX — mixed nerve supplying sensory and taste fibers to the posterior one-third of the tongue and pharynx, motor innervation to stylopharyngeus, parasympathetic secretomotor fibers to the parotid gland via the otic ganglion, and afferent limbs for the gag reflex and carotid body/sinus baroreceptor and chemoreceptor reflexes.",
    anatomy:
      "Emerges from medulla (rostrolateral sulcus), exits skull via jugular foramen with vagus and accessory. Nuclei: nucleus ambiguus (motor stylopharyngeus), solitary nucleus (taste/sensory), spinal trigeminal nucleus (pain/temp). Tympanic branch (Jacobson) → tympanic plexus → lesser petrosal nerve → otic ganglion → parotid.",
    action: [
      "Taste and general sensation — posterior 1/3 tongue, oropharynx, tonsillar pillars",
      "Motor — stylopharyngeus (elevates pharynx during swallowing)",
      "Parasympathetic — parotid gland secretion via otic ganglion",
      "Afferent — gag reflex; carotid sinus baroreceptors and carotid body chemoreceptors",
    ],
    innervation: "CN IX — exits jugular foramen; tympanic branch to otic ganglion for parotid",
    clinicalRelevance: [
      "Glossopharyngeal neuralgia — severe paroxysmal throat/ear pain; carbamazepine",
      "Gag reflex afferent — IX; efferent X (and XI to pharynx)",
      "Carotid sinus massage — IX afferent → vagal bradycardia/hypotension",
      "Jugular foramen syndrome (Vernet) — IX, X, XI palsy",
      "Posterior tongue/oropharyngeal cancer — IX dysfunction",
    ],
    boardsPearls: [
      "CN IX — posterior 1/3 tongue taste + pharynx; stylopharyngeus motor",
      "Gag reflex afferent = IX; efferent = X",
      "Parotid secretion — CN IX → tympanic branch → lesser petrosal → otic ganglion",
      "Carotid sinus/baroreceptor afferent via CN IX (and X)",
      "vs chorda tympani (VII) — anterior 2/3 tongue taste",
    ],
    distinguishFrom: [
      "Vagus nerve (CN X) — broader pharyngeal/laryngeal motor and visceral parasympathetic",
      "Chorda tympani (CN VII) — anterior 2/3 tongue taste",
      "Hypoglossal (CN XII) — tongue motor protrusion",
      "Trigeminal (CN V) — anterior 2/3 tongue general sensation via lingual nerve",
    ],
    pediatrics:
      "Gag reflex present in infants; CN IX/X assessment part of cranial nerve exam in neonates. Glossopharyngeal neuralgia rare in children.",
  },
  {
    id: "vagus-nerve",
    name: "Vagus Nerve",
    etymology: "Latin vagus = wandering (extensive course through thorax and abdomen)",
    aliases: [
      "vagus nerve",
      "vagus nerves",
      "vagus",
      "cn x",
      "cn10",
      "cranial nerve x",
      "cranial nerve 10",
      "tenth cranial nerve",
      "nervus vagus",
      "pneumogastric nerve",
      "pneumogastric nerves",
    ],
    definition:
      "Cranial nerve X — the principal parasympathetic nerve of the thorax and abdomen and major motor nerve of the palate, pharynx, and larynx (via superior laryngeal and recurrent laryngeal branches) — with sensory fibers to the external ear, larynx, trachea, bronchi, and abdominal viscera.",
    anatomy:
      "Emerges medulla, exits jugular foramen. Superior ganglion (sensory); inferior ganglion (visceral afferent). Right vagus loops around subclavian → right recurrent laryngeal nerve; left vagus loops under aortic arch → left recurrent laryngeal nerve. Cardiac branches to SA/AV nodes; pulmonary and esophageal plexuses; celiac/superior mesenteric ganglia input.",
    action: [
      "Parasympathetic — ↓ heart rate, ↑ GI motility/secretions, bronchoconstriction",
      "Motor — palate (except tensor veli palatini), pharynx (with IX/XI), larynx via RLN and superior laryngeal nerve",
      "Sensory — external auditory meatus, dura, larynx, trachea, bronchi, GI tract to splenic flexure",
      "Gag reflex efferent; cough reflex afferent/efferent component",
    ],
    innervation: "CN X — jugular foramen exit; parasympathetic to heart, lungs, GI proximal to splenic flexure",
    clinicalRelevance: [
      "Recurrent laryngeal nerve injury — hoarseness (thyroidectomy, thoracic malignancy)",
      "Vagotomy (historical peptic ulcer treatment) — ↓ gastric acid; truncal vs selective",
      "Hiccups — irritation of phrenic/vagus pathways",
      "CN X lesion — uvula deviates away from lesion; hoarse voice, dysphagia, ↓ gag",
      "Carotid sinus hypersensitivity — vagal syncope with pressure",
    ],
    boardsPearls: [
      "CN X = wanderer — parasympathetic to thoracoabdominal viscera to splenic flexure",
      "RLN branch — all intrinsic laryngeal muscles except cricothyroid",
      "Uvula deviates away from CN X lesion",
      "Gag efferent = X; afferent = IX",
      "Left RLN loops under aortic arch — left hilar mass → hoarseness",
      "SA node — sympathetic ↑ rate; vagal ↓ rate",
    ],
    distinguishFrom: [
      "Glossopharyngeal (CN IX) — posterior tongue, gag afferent, parotid secretomotor",
      "Phrenic nerve — diaphragm motor (C3–C5), not CN X",
      "Sympathetic trunk — fight-or-flight, not vagal rest-and-digest",
      "Accessory nerve (CN XI) — SCM/trapezius; cranial root joins vagus briefly",
    ],
    pediatrics:
      "Congenital vocal cord paralysis may involve CN X/recurrent laryngeal; stridor in neonate warrants laryngoscopy. Vagal stimulation devices used in refractory epilepsy (not Step 1 detail).",
  },
  {
    id: "sympathetic-trunk",
    name: "Sympathetic Trunk",
    etymology: "Greek sympathein = to feel with + Latin truncus = trunk/stem",
    aliases: [
      "sympathetic trunk",
      "sympathetic trunks",
      "sympathetic chain",
      "sympathetic chains",
      "paravertebral ganglia",
      "paravertebral ganglion chain",
      "sympathetic ganglion chain",
    ],
    definition:
      "Paired paravertebral chain of sympathetic ganglia and connecting fibers running from the superior cervical ganglion to the coccygeal ganglion — relaying preganglionic sympathetic fibers from T1–L2 to postganglionic neurons that innervate viscera, vessels, sweat glands, and ocular smooth muscle.",
    anatomy:
      "Three cervical, 11 thoracic, 4 lumbar, and 4–5 sacral ganglia linked by ascending/descending fibers alongside vertebral bodies. Preganglionic fibers exit IML horn T1–L2, enter chain via white rami communicantes; postganglionic fibers exit via gray rami to spinal nerves.",
    action: [
      "Sympathetic outflow — fight-or-flight: ↑ heart rate/contractility, bronchodilation, pupillary dilation, vasoconstriction, sweat secretion, ↓ GI motility",
      "Preganglionic (ACh, nicotinic) → postganglionic (usually NE, except sweat glands → ACh)",
      "Head/neck sympathetic fibers ascend from T1 via superior cervical ganglion",
    ],
    innervation: "Preganglionic origin T1–L2 intermediolateral cell column; postganglionic neurons in chain ganglia",
    clinicalRelevance: [
      "Horner syndrome — interruption anywhere along oculosympathetic pathway (central, preganglionic, postganglionic)",
      "Stellate ganglion block — ipsilateral Horner (miosis, ptosis, anhidrosis)",
      "Pheochromocytoma — catecholamine surge mimics sympathetic overactivity",
      "Spinal/epidural anesthesia ascending sympathetic block → hypotension",
    ],
    boardsPearls: [
      "Sympathetic preganglionic: T1–L2 IML horn; short preganglionic, long postganglionic",
      "Horner syndrome = sympathetic chain interruption → miosis, ptosis, anhidrosis",
      "Preganglionic lesion — anhidrosis of entire face; postganglionic — partial facial anhidrosis",
      "Sweat glands are sympathetically innervated but use ACh (not NE)",
      "Superior cervical ganglion — pupillary dilator and eyelid smooth muscle",
    ],
    distinguishFrom: [
      "Parasympathetic chain — craniosacral outflow, long preganglionic/short postganglionic",
      "Adrenal medulla — receives preganglionic sympathetic fibers but releases epinephrine into blood",
      "Vagus nerve — parasympathetic to thoracoabdominal viscera",
      "Somatic motor neurons — voluntary striated muscle, not autonomic ganglia",
    ],
    pediatrics:
      "Neuroblastoma arises from sympathetic ganglia/adrenal medulla — may present with cord compression or opsoclonus-myoclonus; distinct from trunk anatomic description but same lineage.",
  },
  {
    id: "cn-i",
    name: "CN I (Olfactory Nerve)",
    etymology: "Latin olfacere = to smell + Greek neuron = sinew/nerve + Roman numeral I",
    aliases: [
      "cn i",
      "cn1",
      "cn 1",
      "cranial nerve i",
      "cranial nerve 1",
      "first cranial nerve",
      "olfactory nerve",
      "olfactory nerves",
      "nervus olfactorius",
      "cn i olfactory nerve",
    ],
    definition:
      "Cranial nerve I — purely sensory nerve carrying smell (olfaction) from olfactory receptor neurons in the nasal mucosa through the cribriform plate to the olfactory bulb and primary olfactory cortex.",
    anatomy:
      "Olfactory receptor neurons in superior nasal mucosa → fila olfactoria through cribriform plate of ethmoid bone → olfactory bulb (cranial extension of CNS) → olfactory tract → piriform cortex, amygdala, entorhinal cortex. No thalamic relay for conscious smell (unique among senses).",
    action: [
      "Sensory — olfaction (odor detection)",
      "Contributes to flavor perception with CN VII (taste) and trigeminal (texture/temperature)",
      "Olfactory reflexes — nausea with foul odors, appetite stimulation",
    ],
    innervation: "Sensory only; receptor neurons with cell bodies in nasal mucosa; CNS processing in olfactory bulb (telencephalon)",
    clinicalRelevance: [
      "Anosmia — COVID-19, head trauma (cribriform fracture), chronic rhinosinusitis",
      "Kallmann syndrome — anosmia + hypogonadotropic hypogonadism (failed GnRH neuron migration)",
      "Frontal lobe tumor compressing olfactory tract — unilateral anosmia",
      "Parkinson and Alzheimer disease — early hyposmia",
      "Meningioma of olfactory groove — anosmia, personality change",
    ],
    boardsPearls: [
      "CN I = only sensory cranial nerve tested by nostril identification (coffee, cloves)",
      "Passes through cribriform plate — fracture → anosmia ± CSF rhinorrhea",
      "Olfactory bulb is CNS — not a ganglion",
      "Kallmann syndrome — anosmia + delayed puberty",
      "Preganglionic parasympathetic CN VII to lacrimal via greater petrosal — not CN I",
    ],
    distinguishFrom: [
      "Trigeminal (V1) — nasal mucosa general sensation/touch, not smell",
      "CN VII chorda tympani — taste anterior 2/3 tongue, not olfaction",
      "CN IX/X — posterior tongue/pharynx taste and sensation",
      "Rhinitis with congested nose — conductive smell loss, not CN I lesion",
    ],
    pediatrics:
      "Congenital anosmia in Kallmann syndrome; cleft palate syndromes may affect olfaction. Pediatric head trauma can shear fila olfactoria.",
  },
  {
    id: "cn-ii",
    name: "CN II (Optic Nerve)",
    etymology: "Latin nervus = sinew/nerve + Latin opticus = of sight + Roman numeral II = second cranial nerve",
    aliases: [
      "cn ii",
      "cn2",
      "cn 2",
      "cranial nerve ii",
      "cranial nerve 2",
      "second cranial nerve",
      "optic nerve",
      "optic nerves",
      "nervus opticus",
      "cn ii optic nerve",
    ],
    definition:
      "Cranial nerve II — paired sensory nerve carrying action potentials from retinal ganglion cells through the optic nerve, chiasm, and tract to the lateral geniculate nucleus; mediates vision and the afferent limb of the pupillary light reflex.",
    anatomy:
      "Formed by ~1 million retinal ganglion cell axons; exits globe at optic disc; travels intraorbitally, through optic canal, forms optic chiasm (nasal fibers decussate), continues as optic tract to LGN and superior colliculus (reflexes). Myelinated by oligodendrocytes (CN II is CNS white matter).",
    action: [
      "Sensory — vision (photoreceptor → bipolar → ganglion cell → optic nerve)",
      "Afferent pupillary light reflex — CN II to pretectal nuclei → bilateral Edinger-Westphal → CN III",
      "Nasal retinal fibers cross at chiasm; temporal fibers remain ipsilateral",
    ],
    innervation: "Sensory only; cell bodies in retinal ganglion layer; central processes form optic nerve",
    clinicalRelevance: [
      "Optic neuritis — painful monocular vision loss, RAPD, demyelinating plaque (MS)",
      "Papilledema — bilateral disc swelling from ↑ ICP (not primary CN II inflammation)",
      "Glaucoma — progressive optic neuropathy with cupping",
      "Ischemic optic neuropathy — sudden painless vision loss (GCA, atherosclerosis)",
      "Optic nerve glioma — NF1 association in children",
    ],
    boardsPearls: [
      "CN II = optic nerve — afferent vision + pupillary light reflex",
      "RAPD (Marcus Gunn pupil) = CN II or severe retinal lesion",
      "Nasal fibers cross at chiasm → bitemporal loss with chiasm compression",
      "Post-chiasmal lesion → homonymous hemianopia",
      "CN II is CNS — oligodendrocyte myelin (MS can affect optic nerve)",
    ],
    distinguishFrom: [
      "CN III — motor to extraocular muscles; efferent pupil constriction",
      "Retina — neural layer of eye; CN II is the nerve exiting the globe",
      "Optic chiasm — crossing point of fibers, not the nerve itself",
      "Optic tract — post-chiasmal continuation to LGN",
    ],
    pediatrics:
      "Optic nerve glioma in NF1 and optic neuritis in pediatric MS affect CN II; amblyopia is cortical/visual pathway deprivation, not primary optic nerve transection.",
  },
  {
    id: "cn-iii",
    name: "CN III (Oculomotor Nerve)",
    etymology: "Latin oculus = eye + motor = mover + Greek neuron = sinew/nerve + Roman numeral III",
    aliases: [
      "cn iii",
      "cn3",
      "cn 3",
      "cranial nerve iii",
      "cranial nerve 3",
      "third cranial nerve",
      "oculomotor nerve",
      "oculomotor nerves",
      "nervus oculomotorius",
      "cn iii oculomotor nerve",
    ],
    definition:
      "Cranial nerve III — motor nerve to four extraocular muscles (superior, inferior, medial recti; inferior oblique) and levator palpebrae superioris, plus parasympathetic fibers to the pupillary sphincter and ciliary muscle via the ciliary ganglion.",
    anatomy:
      "Nucleus in midbrain (oculomotor complex: somatic columns + Edinger-Westphal parasympathetic nucleus). Exits interpeduncular fossa, passes through cavernous sinus, enters orbit via superior orbital fissure. Splits into superior (levator, superior rectus) and inferior divisions (remaining muscles + parasympathetic to ciliary ganglion).",
    action: [
      "Motor — elevation, depression, adduction of eye; eyelid elevation (levator palpebrae)",
      "Parasympathetic — pupillary constriction (sphincter pupillae) and accommodation (ciliary muscle)",
      "Efferent limb of pupillary light reflex (from Edinger-Westphal)",
    ],
    innervation: "Somatic motor to extraocular muscles (except LR, SO) + levator; parasympathetic preganglionic to ciliary ganglion",
    clinicalRelevance: [
      "CN III palsy — ptosis, 'down and out' eye (unopposed LR/SO), diplopia",
      "Pupil-involving III palsy — compressive lesion (PCom aneurysm, uncal herniation) until proven otherwise",
      "Pupil-sparing III palsy — microvascular ischemia (diabetes, HTN) more common",
      "Cavernous sinus thrombosis — CN III/IV/VI palsies",
      "Mydriasis with blown pupil — CN III compression emergency",
    ],
    boardsPearls: [
      "CN III = SR, IR, MR, IO + levator palpebrae",
      "Down and out + ptosis; pupil often dilated if compressive",
      "Painful III palsy + headache → posterior communicating artery aneurysm",
      "Uncal herniation compresses CN III → blown pupil",
      "Parasympathetic via Edinger-Westphal → ciliary ganglion",
      "vs CN IV — superior oblique; vs CN VI — lateral rectus",
    ],
    distinguishFrom: [
      "CN IV — superior oblique; head tilt, vertical diplopia",
      "CN VI — lateral rectus; cannot abduct",
      "Horner syndrome — miosis/ptosis but no 'down and out' eye",
      "Myasthenia gravis — fatigable ptosis/diplopia, pupils spared",
    ],
    pediatrics:
      "Congenital CN III palsy rare; ophthalmoplegic migraine in children can mimic transient III palsy.",
  },
  {
    id: "cn-iv",
    name: "CN IV (Trochlear Nerve)",
    etymology: "Latin trochlea = pulley + Greek neuron = sinew/nerve + Roman numeral IV",
    aliases: [
      "cn iv",
      "cn4",
      "cn 4",
      "cranial nerve iv",
      "cranial nerve 4",
      "fourth cranial nerve",
      "trochlear nerve",
      "trochlear nerves",
      "nervus trochlearis",
      "cn iv trochlear nerve",
    ],
    definition:
      "Cranial nerve IV — the only cranial nerve to exit dorsally from the brainstem and the only one to decussate completely — innervating the superior oblique muscle for intorsion, depression (especially in adduction), and abduction assistance.",
    anatomy:
      "Nucleus in midbrain at level of inferior colliculus; fascicles decussate in superior medullary velum, exit dorsally, wrap around brainstem, enter cavernous sinus, passes through superior orbital fissure to superior oblique in superomedial orbit.",
    action: [
      "Motor — superior oblique (intorts eye, depresses when adducted, abducts when depressed)",
      "Clinical testing — head tilt away from lesion compensates for diplopia (Bielschowsky head tilt test)",
    ],
    innervation: "Somatic motor to superior oblique only",
    clinicalRelevance: [
      "CN IV palsy — vertical diplopia worse going downstairs, reading, looking down",
      "Compensatory head tilt to opposite shoulder",
      "Trauma — CN IV vulnerable due to long intracranial course",
      "Microvascular CN IV palsy in diabetes/hypertension",
      "Congenital CN IV palsy — large vertical fusional amplitude",
    ],
    boardsPearls: [
      "CN IV = superior oblique only",
      "Only CN to exit dorsally and decussate",
      "Vertical diplopia + head tilt → CN IV palsy",
      "Bielschowsky head tilt test — worsens with tilt toward affected side",
      "Long intracranial course — trauma-sensitive",
    ],
    distinguishFrom: [
      "CN III — multiple EOM + ptosis + pupil",
      "CN VI — horizontal diplopia, lateral rectus",
      "Skew deviation — vertical misalignment from brainstem/vestibular lesion, not isolated SO weakness",
      "Myasthenia gravis — variable, not classic head tilt pattern",
    ],
    pediatrics:
      "Congenital CN IV palsy may present with head tilt in infancy; torticollis workup includes ocular causes.",
  },
  {
    id: "ophthalmic-division",
    name: "Ophthalmic Division (V1)",
    etymology: "Greek ophthalmos = eye + Latin divisio = division",
    aliases: [
      "ophthalmic division",
      "ophthalmic divisions",
      "ophthalmic nerve",
      "ophthalmic nerves",
      "v1",
      "cn v1",
      "first division trigeminal",
      "first division of trigeminal nerve",
      "ophthalmic branch trigeminal",
      "ophthalmic branch of trigeminal nerve",
    ],
    definition:
      "First division of the trigeminal nerve (CN V1) — purely sensory — supplying the forehead, upper eyelid, cornea, dorsum of nose, and dura of anterior cranial fossa; exits via the superior orbital fissure.",
    anatomy:
      "Smallest division from trigeminal ganglion; enters orbit via superior orbital fissure as frontal, lacrimal, and nasociliary nerves. Nasociliary gives long ciliary nerves (cornea), infratrochlear, anterior ethmoidal. Frontal nerve → supraorbital and supratrochlear.",
    action: [
      "Sensory — forehead, scalp anteriorly, upper eyelid, cornea, dorsum of nose",
      "Corneal reflex afferent limb (with CN VII efferent)",
      "Dural sensation anterior cranial fossa",
    ],
    innervation: "Sensory branch of CN V (V1); no motor fibers",
    clinicalRelevance: [
      "Herpes zoster ophthalmicus — V1 dermatomal vesicles; risk of ocular involvement",
      "Corneal abrasion anesthesia — V1 intact reflex unless neuropathy",
      "Trigeminal neuralgia may involve V1",
      "Cavernous sinus lesion — V1 numbness with CN III/IV/VI palsies",
      "Ophthalmic artery aneurysm or tumor in superior orbital fissure",
    ],
    boardsPearls: [
      "V1 = ophthalmic — sensory only; superior orbital fissure",
      "Corneal reflex afferent = V1; efferent = VII",
      "HZV V1 — Hutchinson sign (tip of nose) → ocular involvement",
      "vs V2 — cheek/maxilla; vs V3 — mandible + motor mastication",
      "Supraorbital foramen — V1 exit landmark",
    ],
    distinguishFrom: [
      "Maxillary division (V2) — cheek, upper teeth, foramen rotundum",
      "Mandibular division (V3) — lower face, motor mastication",
      "Facial nerve (CN VII) — motor to face, not V1 sensation",
      "Greater occipital nerve (C2) — posterior scalp",
    ],
    pediatrics:
      "HZV ophthalmicus in children usually milder than adults but still warrants ophthalmology referral if Hutchinson sign present.",
  },
  {
    id: "cn-vi",
    name: "CN VI (Abducens Nerve)",
    etymology: "Latin abducere = to lead away + Greek neuron = sinew/nerve + Roman numeral VI",
    aliases: [
      "cn vi",
      "cn6",
      "cn 6",
      "cranial nerve vi",
      "cranial nerve 6",
      "sixth cranial nerve",
      "abducens nerve",
      "abducens nerves",
      "nervus abducens",
      "cn vi abducens nerve",
    ],
    definition:
      "Cranial nerve VI — motor nerve to the lateral rectus muscle, abducting the eye; has the longest intracranial course of the ocular motor nerves and is vulnerable to ↑ ICP.",
    anatomy:
      "Nucleus in pons (facial colliculus region). Fascicles travel ventrally through pontine tegmentum, exit at pontomedullary junction, ascends along clivus and cavernous sinus, enters orbit via superior orbital fissure to lateral rectus.",
    action: [
      "Motor — lateral rectus (abduction of eye)",
      "Tested by having patient look laterally; diplopia worse at distance (more abduction needed)",
    ],
    innervation: "Somatic motor to lateral rectus only",
    clinicalRelevance: [
      "CN VI palsy — esotropia, cannot abduct eye, horizontal diplopia",
      "↑ ICP — false localizing CN VI palsy (stretch along clivus)",
      "Cavernous sinus thrombosis — CN VI often affected early",
      "Microvascular VI palsy — diabetes, hypertension",
      "Dorello canal — CN VI vulnerable at petrous apex",
    ],
    boardsPearls: [
      "CN VI = lateral rectus abduction",
      "Long intracranial course — ↑ ICP can cause bilateral VI palsy",
      "Cavernous sinus — VI runs centrally, often involved with III/IV/V1",
      "vs CN III — multiple muscles; vs CN IV — superior oblique/vertical diplopia",
      "Internuclear ophthalmoplegia — VI nucleus/MLF, not peripheral VI only",
    ],
    distinguishFrom: [
      "CN III palsy — 'down and out,' not isolated abduction failure",
      "Internuclear ophthalmoplegia — impaired adduction with abducting nystagmus",
      "Restrictive strabismus — mechanical limitation, not nerve palsy",
      "Myasthenia gravis — fatigable, may mimic any ocular motor palsy",
    ],
    pediatrics:
      "Bilateral CN VI palsy in infant raises intracranial pressure (hydrocephalus, tumor); acute otitis with petrous osteomyelitis (Gradenigo syndrome) → VI palsy.",
  },
  {
    id: "cn-vii",
    name: "CN VII (Facial Nerve)",
    etymology: "Latin facies = face + Greek neuron = sinew/nerve + Roman numeral VII",
    aliases: [
      "cn vii",
      "cn7",
      "cn 7",
      "cranial nerve vii",
      "cranial nerve 7",
      "seventh cranial nerve",
      "facial nerve",
      "facial nerves",
      "nervus facialis",
      "cn vii facial nerve",
    ],
    definition:
      "Cranial nerve VII — motor nerve to muscles of facial expression, plus taste (chorda tympani), lacrimal/submandibular salivation, stapedius reflex, and external ear sensation — exiting the stylomastoid foramen.",
    anatomy:
      "Motor nucleus in pons; fibers loop around abducens nucleus (facial colliculus). Exits internal auditory meatus with CN VIII, travels in facial canal, gives greater petrosal (parasympathetic lacrimation), nerve to stapedius, chorda tympani (taste + submandibular/sublingual salivation), exits stylomastoid foramen, branches to facial muscles.",
    action: [
      "Motor — muscles of facial expression (frontalis, orbicularis oculi/oris, etc.)",
      "Taste — anterior 2/3 tongue via chorda tympani",
      "Parasympathetic — lacrimal gland (greater petrosal), submandibular/sublingual glands (chorda tympani)",
      "Sensory — external auditory canal skin; efferent corneal reflex (blink)",
      "Stapedius — dampens loud sounds",
    ],
    innervation: "Branchial motor + special visceral afferent (taste) + parasympathetic secretomotor",
    clinicalRelevance: [
      "Bell palsy — acute LMN VII palsy, entire ipsilateral face including forehead",
      "Ramsay Hunt — HZV geniculate ganglion, vesicles in ear",
      "UMN stroke — contralateral lower face weakness, forehead spared",
      "Parotid tumor/surgery — facial nerve injury",
      "Lyme disease — bilateral facial palsy",
    ],
    boardsPearls: [
      "CN VII = facial expression + taste ant 2/3 + lacrimation/salivation",
      "LMN lesion — whole face; UMN — forehead spared",
      "Chorda tympani — taste + submandibular/sublingual",
      "Greater petrosal — lacrimal gland via pterygopalatine ganglion",
      "Exits stylomastoid foramen",
      "Bell palsy — steroids ± antivirals; eye protection",
    ],
    distinguishFrom: [
      "Trigeminal (CN V) — face sensation, not expression",
      "Chorda tympani — branch of VII, not whole nerve",
      "Glossopharyngeal (CN IX) — posterior 1/3 tongue",
      "Facial palsy symptom — clinical finding; CN VII is the nerve",
    ],
    pediatrics:
      "Bell palsy in children; Möbius syndrome — congenital bilateral VII palsy with mask-like face.",
  },
  {
    id: "cn-viii",
    name: "CN VIII (Vestibulocochlear Nerve)",
    etymology: "Latin vestibulum = entrance hall + cochlea = snail shell + Greek neuron = sinew/nerve + Roman numeral VIII",
    aliases: [
      "cn viii",
      "cn8",
      "cn 8",
      "cranial nerve viii",
      "cranial nerve 8",
      "eighth cranial nerve",
      "vestibulocochlear nerve",
      "vestibulocochlear nerves",
      "vestibular nerve",
      "cochlear nerve",
      "acoustic nerve",
      "acoustic nerves",
      "nervus vestibulocochlearis",
      "cn viii vestibulocochlear nerve",
    ],
    definition:
      "Cranial nerve VIII — special sensory nerve with vestibular (balance, head position) and cochlear (hearing) divisions — traveling from inner ear through internal auditory meatus to brainstem vestibular and cochlear nuclei.",
    anatomy:
      "Cochlear division — organ of Corti hair cells → spiral ganglion → cochlear nuclei (ventral/dorsal) → superior olivary complex, lateral lemniscus, inferior colliculus, medial geniculate → auditory cortex. Vestibular division — semicircular canals/utricle/saccule → vestibular ganglion → vestibular nuclei → cerebellum, MLF, ocular motor nuclei.",
    action: [
      "Cochlear — hearing (sound transduction)",
      "Vestibular — balance, head position sense, vestibulo-ocular reflex",
      "Vestibular input to CN III/IV/VI nuclei for gaze stabilization",
    ],
    innervation: "Special somatic afferent (hearing) and special proprioceptive afferent (vestibular)",
    clinicalRelevance: [
      "Sensorineural hearing loss — CN VIII or cochlear lesion",
      "Vestibular neuritis — acute vertigo, horizontal nystagmus",
      "Ménière disease — episodic vertigo, hearing loss, tinnitus",
      "Acoustic neuroma (vestibular schwannoma) — unilateral SNHL, tinnitus, imbalance",
      "Ototoxicity — aminoglycosides, cisplatin",
    ],
    boardsPearls: [
      "CN VIII = hearing + balance",
      "Travels with CN VII in internal auditory meatus",
      "Acoustic neuroma — unilateral SNHL, cerebellopontine angle mass",
      "Weber lateralizes to conductive loss ear; Rinne BC>AC conductive, AC>BC sensorineural",
      "Vestibular neuritis — vertigo after URI, positive head impulse test",
    ],
    distinguishFrom: [
      "CN VII — facial motor/taste, shares meatus but different function",
      "Conductive hearing loss — middle ear, not CN VIII",
      "Central vertigo — brainstem/cerebellar, not isolated peripheral VIII",
      "Malingering — inconsistent audiometry",
    ],
    pediatrics:
      "Congenital SNHL — TORCH, genetic (connexin 26); acoustic neuroma rare in children (NF2).",
  },
  {
    id: "cn-xii",
    name: "CN XII (Hypoglossal Nerve)",
    etymology: "Greek hypo = under + glossa = tongue + Greek neuron = sinew/nerve + Roman numeral XII",
    aliases: [
      "cn xii",
      "cn12",
      "cn 12",
      "cranial nerve xii",
      "cranial nerve 12",
      "twelfth cranial nerve",
      "hypoglossal nerve",
      "hypoglossal nerves",
      "nervus hypoglossus",
      "cn xii hypoglossal nerve",
    ],
    definition:
      "Cranial nerve XII — motor nerve to all intrinsic and extrinsic tongue muscles except palatoglossus (CN X) — controlling tongue protrusion, shape, and movement for speech and swallowing.",
    anatomy:
      "Nucleus in medulla (hypoglossal nucleus, midline). Exits anterolaterally between pyramid and olive via hypoglossal canal. Descends in neck, passes between internal carotid and internal jugular vein, curves anterior to hyoid, distributes to tongue muscles.",
    action: [
      "Motor — genioglossus (protrusion/deviation toward lesion), hyoglossus, styloglossus, intrinsic tongue muscles",
      "Tongue deviates toward side of lesion on protrusion (weak genioglossus pushes tongue toward weak side)",
      "Speech and swallowing coordination",
    ],
    innervation: "Somatic motor to tongue muscles (except palatoglossus = CN X)",
    clinicalRelevance: [
      "CN XII palsy — tongue deviation toward lesion, atrophy/fasciculations ipsilateral",
      "Medullary stroke — lateral medullary (Wallenberg) may involve nucleus",
      "Tumor at skull base/hypoglossal canal",
      "Carotid endarterectomy or neck surgery injury",
      "Motor neuron disease — tongue fasciculations and atrophy",
    ],
    boardsPearls: [
      "CN XII = tongue motor (except palatoglossus)",
      "Tongue deviates toward lesion",
      "LMN XII — atrophy, fasciculations, deviation",
      "UMN lesion — spastic tongue, deviates away from lesion (contralateral UMN)",
      "Exits hypoglossal canal",
      "vs CN IX/X — pharyngeal/laryngeal, not tongue protrusion",
    ],
    distinguishFrom: [
      "CN IX/X — swallowing and palate, not intrinsic tongue motor",
      "Trigeminal (V3 lingual) — general sensation anterior tongue",
      "Chorda tympani (VII) — taste anterior tongue",
      "Dysarthria from other causes — tongue strength normal",
    ],
    pediatrics:
      "Hypoglossal palsy in neonate may follow birth trauma or congenital anomaly; tongue tie (ankyloglossia) is mechanical, not CN XII palsy.",
  },
  {
    id: "cerebellopontine-angle",
    name: "Cerebellopontine Angle",
    etymology:
      "Latin cerebellum = little brain + pons = bridge + angulus = corner — cistern at the junction of pons, cerebellum, and medulla",
    aliases: [
      "cerebellopontine angle",
      "cerebellopontine angles",
      "cerebello-pontine angle",
      "cerebello-pontine angles",
      "cpa",
      "cp angle",
      "cp angles",
      "cerebellopontine angle cistern",
      "cerebellopontine cistern",
    ],
    definition:
      "CSF-filled cistern at the lateral junction of the pons and cerebellum where cranial nerves VII and VIII enter the brainstem from the internal auditory meatus — common site of extra-axial skull-base tumors.",
    anatomy:
      "Bounded by the pons medially, cerebellum laterally, and petrous temporal bone anteriorly. CN VII (facial) and CN VIII (vestibulocochlear) pass from internal auditory meatus into the CPA cistern before entering the brainstem. Anterior inferior cerebellar artery (AICA) courses through the region.",
    action: [
      "CSF cistern allowing CN VII/VIII passage from temporal bone to brainstem",
      "Anatomic corridor for vessels including AICA and veins of the petrosal surface",
    ],
    innervation: "CN VII and CN VIII traverse the CPA; adjacent to CN V root entry zone",
    clinicalRelevance: [
      "Vestibular schwannoma (acoustic neuroma) — unilateral sensorineural hearing loss, tinnitus, imbalance",
      "Meningioma at CPA — may involve multiple cranial nerves",
      "Epidermoid cyst at CPA",
      "Facial weakness or trigeminal sensory loss with large CPA mass",
    ],
    boardsPearls: [
      "CPA = cerebellopontine angle — classic site of acoustic neuroma (CN VIII schwannoma)",
      "Unilateral SNHL + tinnitus → CPA mass until proven otherwise",
      "CN VII and VIII travel together through internal auditory meatus into CPA",
      "Large CPA tumor may affect CN V (facial numbness) and brainstem compression",
      "vs internal auditory meatus — canal within temporal bone; CPA is cistern just medial to it",
    ],
    distinguishFrom: [
      "Internal auditory meatus — bony canal in petrous temporal bone housing CN VII/VIII",
      "Pineal region — dorsal midbrain, not CPA",
      "Meckel cave — trigeminal ganglion in middle cranial fossa",
      "Cholesteatoma — middle ear disease, not CPA cistern mass",
      "Bilateral SNHL — usually not CPA schwannoma (except NF2)",
    ],
    pediatrics:
      "Acoustic neuroma is rare in children except with NF2; unilateral SNHL in an adolescent warrants MRI of internal auditory meatus and CPA.",
  },
  {
    id: "foramen-magnum",
    name: "Foramen Magnum",
    etymology:
      "Latin foramen = opening + magnum = great — largest skull opening transmitting medulla and upper cervical structures",
    aliases: [
      "foramen magnum",
      "foramen magnums",
      "occipital foramen",
      "great foramen",
      "cranial foramen magnum",
      "skull foramen magnum",
    ],
    definition:
      "Large opening in the occipital bone through which the medulla oblongata becomes the spinal cord and through which vertebral arteries, spinal accessory nerve roots, and meninges pass between skull and vertebral canal.",
    anatomy:
      "Medulla and meninges continue as spinal cord and thecal sac. Vertebral arteries ascend through foramen magnum. Spinal roots of CN XI ascend from cervical cord through foramen magnum to join cranial accessory root. Apical ligament of dens and alar ligaments anchor odontoid near anterior margin.",
    action: [
      "Major conduit between posterior cranial fossa and vertebral canal",
      "Passage for vertebral arteries to posterior circulation",
      "Meningeal continuity between intracranial and spinal subarachnoid space",
    ],
    innervation: "Spinal roots of CN XI ascend through foramen magnum; C1 nerve roots adjacent",
    clinicalRelevance: [
      "Chiari malformation — cerebellar tonsils herniate through foramen magnum → syringomyelia, headache",
      "Foramen magnum meningioma — lower CN palsies, upper motor neuron signs",
      "Basilar invagination / odontoid abnormalities compressing medulla",
      "Vertebrobasilar insufficiency from vertebral artery pathology at skull base",
    ],
    boardsPearls: [
      "Foramen magnum = medulla → spinal cord + vertebral arteries + spinal CN XI roots",
      "Chiari I — tonsillar herniation >5 mm below foramen magnum",
      "Chiari II — associated with myelomeningocele and aqueductal malformation",
      "Foramen magnum tumor — progressive lower cranial nerve deficits and long-tract signs",
      "vs jugular foramen — lateral skull base; CN IX/X/XI exit, not medullary transition",
    ],
    distinguishFrom: [
      "Jugular foramen — lateral exit for CN IX, X, XI (cranial part); not medulla/spinal cord junction",
      "Hypoglossal canal — anterolateral occipital canal for CN XII only",
      "Foramen ovale — middle cranial fossa for V3, not posterior fossa",
      "Central canal of spinal cord — tiny ependymal canal, not skull foramen",
      "Cardiac foramen ovale — interatrial fetal shunt, unrelated skull opening",
    ],
    pediatrics:
      "Chiari II with myelomeningocele presents in neonates; Chiari I may cause syringomyelia and scoliosis in older children. Foramen magnum decompression is neurosurgical treatment for symptomatic Chiari.",
  },
  {
    id: "foramen-ovale",
    name: "Foramen Ovale (Skull)",
    etymology:
      "Latin foramen = opening + ovale = oval — oval foramen in sphenoid bone of middle cranial fossa",
    aliases: [
      "foramen ovale",
      "foramen ovales",
      "skull foramen ovale",
      "cranial foramen ovale",
      "sphenoid foramen ovale",
      "mandibular foramen ovale",
    ],
    definition:
      "Oval opening in the greater wing of the sphenoid bone in the middle cranial fossa — exit point of the mandibular division of the trigeminal nerve (CN V3) into the infratemporal fossa.",
    anatomy:
      "Located posterolateral to foramen rotundum and anteromedial to foramen spinosum. Transmits mandibular nerve (V3), motor root to muscles of mastication, sensory branches to lower face and anterior tongue (general sensation), and occasionally lesser petrosal nerve and accessory meningeal artery.",
    action: [
      "Skull base passage for CN V3 from middle cranial fossa to infratemporal fossa",
      "Motor exit for mastication muscles; sensory exit for lower face and mandibular teeth",
    ],
    innervation: "CN V3 (mandibular division of trigeminal nerve) — only trigeminal division with motor fibers",
    clinicalRelevance: [
      "Trigeminal neuralgia involving V3 distribution",
      "Perineural spread of head and neck malignancy through foramen ovale",
      "Skull base fracture involving sphenoid",
      "Otic ganglion and parotid innervation nearby via mandibular nerve branches",
    ],
    boardsPearls: [
      "Skull foramen ovale = CN V3 exit (motor + sensory mandibular division)",
      "V3 innervates muscles of mastication + anterior 2/3 tongue general sensation + lower face",
      "vs cardiac foramen ovale — interatrial shunt in fetal heart / PFO, NOT skull",
      "Foramen rotundum = V2; foramen ovale = V3; superior orbital fissure = V1",
      "Lesser petrosal nerve may pass through to reach otic ganglion (parasympathetic to parotid)",
    ],
    distinguishFrom: [
      "Patent foramen ovale (heart) — interatrial right-to-left shunt; unrelated to skull",
      "Foramen rotundum — V2 maxillary division exit",
      "Foramen spinosum — middle meningeal artery, not CN V3",
      "Mandibular foramen — on mandible bone for inferior alveolar nerve entry, not skull base",
      "Oval window (fenestra vestibuli) — inner ear, not skull base foramen",
    ],
    pediatrics:
      "Skull foramen ovale anatomy is the same in children; patent foramen ovale (cardiac) is a separate neonatal/childhood concept for right-to-left shunting.",
  },
  {
    id: "foramen-rotundum",
    name: "Foramen Rotundum",
    etymology:
      "Latin foramen = opening + rotundum = round — round foramen in sphenoid bone for maxillary nerve passage",
    aliases: [
      "foramen rotundum",
      "foramen rotundums",
      "rotundum foramen",
      "sphenoid foramen rotundum",
      "maxillary foramen",
      "v2 foramen",
    ],
    definition:
      "Round opening in the greater wing of the sphenoid bone connecting the middle cranial fossa to the pterygopalatine fossa — exit route of the maxillary division of the trigeminal nerve (CN V2).",
    anatomy:
      "Located anteromedial to foramen ovale. Maxillary nerve (V2) passes into pterygopalatine fossa and gives rise to infraorbital, zygomatic, palatine, and nasopalatine branches. Purely sensory division — midface, maxillary teeth, palate, maxillary sinus.",
    action: [
      "Skull base passage for CN V2 from middle cranial fossa to pterygopalatine fossa",
      "Sensory distribution to midface, upper teeth, palate, and maxillary sinus mucosa",
    ],
    innervation: "CN V2 (maxillary division of trigeminal) — sensory only",
    clinicalRelevance: [
      "Trigeminal neuralgia V2 distribution",
      "Maxillary sinusitis pain via V2 branches",
      "Infraorbital nerve block for upper lip/cheek anesthesia",
      "Skull base tumor spread through pterygopalatine fossa",
    ],
    boardsPearls: [
      "Foramen rotundum = CN V2 (maxillary, sensory only)",
      "V2 → pterygopalatine fossa → infraorbital nerve (via infraorbital foramen), palatine nerves",
      "Trigeminal foramina: V1 superior orbital fissure, V2 rotundum, V3 ovale",
      "Midface numbness → V2 lesion or pterygopalatine fossa pathology",
      "vs foramen ovale — V3 mandibular with motor fibers",
    ],
    distinguishFrom: [
      "Foramen ovale — V3 mandibular exit with motor fibers",
      "Superior orbital fissure — V1 ophthalmic division",
      "Infraorbital foramen — facial exit of infraorbital nerve (branch of V2), not skull base foramen",
      "Foramen spinosum — middle meningeal artery",
      "Cardiac foramen ovale — unrelated heart structure",
    ],
    pediatrics:
      "V2 anesthesia after midface trauma or dental procedures follows same foramen rotundum anatomy in all ages.",
  },
  {
    id: "infraorbital-foramen",
    name: "Infraorbital foramen",
    etymology: "Latin infra = below + orbita = eye socket + foramen = opening",
    aliases: [
      "infraorbital foramen",
      "infraorbital foramina",
      "infra-orbital foramen",
      "infra orbital foramen",
      "io foramen",
    ],
    definition:
      "Facial opening in the maxillary bone on the anterior surface below the orbit — exit point of the infraorbital nerve (terminal branch of CN V2) from the infraorbital groove/canal.",
    anatomy:
      "Located ~1 cm below the orbital rim on the maxilla, usually in line with the supraorbital notch/foramen. Infraorbital nerve (from maxillary nerve V2 via pterygopalatine fossa and infraorbital canal) exits here with infraorbital artery and vein.",
    action: [
      "Facial exit for infraorbital nerve sensory branches",
      "Sensory supply to lower eyelid, cheek, lateral nose, upper lip, and maxillary gingiva",
      "Landmark for infraorbital nerve block in midface anesthesia",
    ],
    innervation: "Infraorbital nerve — branch of CN V2 (maxillary division of trigeminal)",
    clinicalRelevance: [
      "Infraorbital nerve block — upper lip, cheek, and maxillary teeth anesthesia",
      "Midface trauma or Le Fort fractures involving infraorbital canal",
      "Trigeminal neuralgia or neuropathy in V2 distribution",
      "Orbital floor blowout fracture — infraorbital nerve paresthesia of cheek/upper lip",
    ],
    boardsPearls: [
      "Infraorbital foramen = V2 (infraorbital nerve) facial exit",
      "Sensory: lower eyelid, cheek, upper lip, maxillary teeth",
      "Foramen rotundum → pterygopalatine fossa → infraorbital canal → infraorbital foramen",
      "Blowout fracture → infraorbital nerve numbness + enophthalmos risk",
      "vs supraorbital foramen — V1 supraorbital nerve, forehead/scalp",
    ],
    distinguishFrom: [
      "Foramen rotundum — skull base exit of V2 into pterygopalatine fossa, not facial foramen",
      "Supraorbital foramen/notch — V1 frontal nerve exit, forehead sensation",
      "Inferior orbital fissure — gap between maxilla and sphenoid; conduit to orbit, not infraorbital nerve exit",
      "Mental foramen — V3 mental nerve exit on mandible, lower lip/chin",
      "Infraorbital canal — intramaxillary course before exiting at foramen",
    ],
    pediatrics:
      "Infraorbital nerve block used for pediatric midface laceration repair and dental procedures; same landmark anatomy as adults.",
  },
  {
    id: "mandibular-foramen",
    name: "Mandibular foramen",
    etymology: "Latin mandibula = jaw + foramen = opening",
    aliases: [
      "mandibular foramen",
      "mandibular foramina",
      "mandible foramen",
      "inferior alveolar foramen",
    ],
    definition:
      "Opening on the medial surface of the mandibular ramus — entry point for the inferior alveolar nerve (branch of CN V3), inferior alveolar artery, and vein into the mandibular canal.",
    anatomy:
      "Located on the medial ramus of the mandible, opposite the lingula (small bony projection). Inferior alveolar nerve enters mandibular canal here, runs within the mandible supplying mandibular teeth, then exits anteriorly as the mental nerve through the mental foramen.",
    action: [
      "Mandibular entry for inferior alveolar neurovascular bundle",
      "Target landmark for inferior alveolar nerve block — anesthetizes lower teeth, lower lip, and chin (via mental nerve)",
      "Conduit for sensory innervation of mandibular teeth and gingiva",
    ],
    innervation: "Inferior alveolar nerve — branch of CN V3 (mandibular division of trigeminal)",
    clinicalRelevance: [
      "Inferior alveolar nerve block — main technique for mandibular dental anesthesia",
      "Mandibular fracture involving ramus may injure inferior alveolar nerve",
      "Numbness of lower lip/chin after mandibular surgery or trauma",
      "Odontogenic infection spread along mandibular canal (rare)",
    ],
    boardsPearls: [
      "Mandibular foramen = entry of inferior alveolar nerve (V3) into mandible",
      "Inferior alveolar nerve block anesthetizes ipsilateral lower teeth + lower lip/chin",
      "Mental nerve exits mental foramen anteriorly — terminal branch of inferior alveolar nerve",
      "vs foramen ovale — skull base V3 exit, not mandibular bone opening",
      "Lingula marks medial ramus near mandibular foramen",
    ],
    distinguishFrom: [
      "Mental foramen — anterior mandible exit of mental nerve, not ramus entry",
      "Foramen ovale — skull sphenoid opening for CN V3 trunk, not mandible",
      "Mandibular canal — bony tunnel within mandible, not the foramen itself",
      "Incisive foramen — maxillary midline, nasopalatine nerve (V2), not mandible",
      "Carotid canal — internal carotid artery, unrelated jaw foramen",
    ],
    pediatrics:
      "Inferior alveolar nerve block dosing and technique adjusted for pediatric mandible size; same mandibular foramen anatomy.",
  },
  {
    id: "mental-foramen",
    name: "Mental foramen",
    etymology: "Latin mentum = chin + foramen = opening",
    aliases: [
      "mental foramen",
      "mental foramina",
      "mental nerve foramen",
    ],
    definition:
      "Opening on the lateral surface of the mandible, usually between the first and second premolars — exit point of the mental nerve (terminal branch of the inferior alveolar nerve, CN V3).",
    anatomy:
      "Mental nerve exits here with mental artery and vein after traversing the mandibular canal from the mandibular foramen. Provides sensory innervation to the lower lip, chin, and gingiva of the mandibular anterior teeth.",
    action: [
      "Facial exit for mental nerve — terminal branch of inferior alveolar nerve (V3)",
      "Sensory supply to lower lip, chin, and anterior mandibular gingiva",
      "Landmark for mental nerve block (local anesthesia of chin/lower lip)",
    ],
    innervation: "Mental nerve — terminal branch of inferior alveolar nerve (CN V3)",
    clinicalRelevance: [
      "Mental nerve block — anesthesia of lower lip and chin",
      "Lower lip/chin numbness after mandibular fracture or dental implant surgery",
      "Perineural spread of oral squamous cell carcinoma along mental nerve",
      "Palpable landmark on mandible in clinical exam",
    ],
    boardsPearls: [
      "Mental foramen = exit of mental nerve (V3 branch)",
      "Lower lip + chin sensation — mental nerve",
      "Inferior alveolar nerve enters mandibular foramen → mandibular canal → exits mental foramen",
      "vs infraorbital foramen — V2 upper lip/cheek, maxilla",
      "Bilateral mental nerve injury → numb chin syndrome",
    ],
    distinguishFrom: [
      "Mandibular foramen — medial ramus entry of inferior alveolar nerve, not facial exit",
      "Infraorbital foramen — V2 upper lip and cheek exit on maxilla",
      "Incisive foramen — maxillary midline, nasopalatine nerve",
      "Foramen ovale — skull V3 trunk exit, not mandibular surface opening",
      "Submandibular duct opening — Wharton duct at floor of mouth, not mental foramen",
    ],
    pediatrics:
      "Mental foramen position relative to tooth buds shifts with mandibular growth; pediatric dental nerve blocks account for smaller mandible and variable foramen position.",
  },
  {
    id: "stylomastoid-foramen",
    name: "Stylomastoid foramen",
    etymology: "Greek stylos = pillar + mastos = breast (mastoid) + Latin foramen = opening — between styloid and mastoid processes",
    aliases: [
      "stylomastoid foramen",
      "stylomastoid foramina",
      "stylomastoid opening",
      "facial nerve foramen",
      "cn vii foramen",
    ],
    definition:
      "Opening between the styloid and mastoid processes of the temporal bone — exit point of cranial nerve VII (facial nerve) from the facial canal to the parotid region and face.",
    anatomy:
      "CN VII completes its course through the facial canal (with chorda tympani, nerve to stapedius, and greater petrosal branching earlier), then exits stylomastoid foramen. Immediately gives posterior auricular branch, then enters parotid gland to form the pes anserinus (temporal, zygomatic, buccal, mandibular, cervical branches) for muscles of facial expression.",
    action: [
      "Skull exit for CN VII motor fibers to muscles of facial expression",
      "Posterior auricular branch to occipitalis and auricular muscles",
      "Nerve to posterior belly of digastric and stylohyoid exits nearby",
      "Chorda tympani and greater petrosal branch off before stylomastoid exit",
    ],
    innervation: "CN VII (facial nerve) — motor to facial expression muscles; chorda tympani (taste anterior 2/3 tongue) and greater petrosal (lacrimation) branch earlier",
    clinicalRelevance: [
      "Bell palsy — acute peripheral CN VII palsy distal to nucleus (including stylomastoid region)",
      "Parotidectomy or mastoid surgery — risk of CN VII injury at stylomastoid foramen",
      "Facial nerve laceration in temporal bone fracture",
      "Post-auricular pain before Bell palsy (nerve swelling in canal/foramen region)",
    ],
    boardsPearls: [
      "Stylomastoid foramen = CN VII exit to face",
      "Peripheral VII palsy — entire ipsilateral face including forehead (vs UMN spares forehead)",
      "Chorda tympani joins lingual nerve (V3) in infratemporal fossa — taste + submandibular/sublingular salivation",
      "Greater petrosal nerve — parasympathetic lacrimation (before exit)",
      "vs internal auditory meatus — CN VII/VIII enter temporal bone, not exit to face",
      "LMN VII lesion at stylomastoid foramen — loss of taste anterior 2/3 tongue if chorda tympani involved proximally",
    ],
    distinguishFrom: [
      "Internal auditory meatus — CN VII and VIII enter temporal bone from posterior fossa",
      "Jugular foramen — CN IX, X, XI exit, not CN VII",
      "Foramen ovale — V3 mandibular nerve, not facial nerve",
      "Parotid duct — Stensen duct opens in buccal mucosa, not stylomastoid foramen",
      "Chorda tympani — branches in middle ear before VII exits stylomastoid foramen",
    ],
    pediatrics:
      "Bell palsy occurs in children; peripheral facial weakness with forehead involvement distinguishes from central stroke. Congenital facial palsy from forceps or Möbius syndrome presents at birth — distinguish from acquired Bell palsy.",
  },
  {
    id: "superior-orbital-fissure",
    name: "Superior orbital fissure",
    etymology: "Latin superior = above + orbita = eye socket + fissura = cleft — gap between sphenoid wings leading to orbit",
    aliases: [
      "superior orbital fissure",
      "superior orbital fissures",
      "superior orbital fissure of sphenoid",
      "so fissure",
      "orbital fissure superior",
    ],
    definition:
      "Cleft between the greater and lesser wings of the sphenoid bone connecting the middle cranial fossa to the orbit — major conduit for oculomotor (III), trochlear (IV), abducens (VI), and ophthalmic (V1) nerves plus ophthalmic veins and sympathetic fibers.",
    anatomy:
      "Lateral to the optic canal and superomedial to the inferior orbital fissure. CN III, IV, V1, and VI pass from cavernous sinus region into orbit (VI runs through cavernous sinus lumen; III/IV/V1 in lateral wall). Ophthalmic veins drain to cavernous sinus through this fissure. Sympathetic fibers from internal carotid plexus accompany nerves to orbit.",
    action: [
      "Orbital entry for CN III, IV, VI, and V1 after exiting cavernous sinus region",
      "Passage for ophthalmic veins connecting orbit to cavernous sinus",
      "Sympathetic innervation to dilator pupillae and orbital vessels",
      "Site of communication between middle cranial fossa and orbit",
    ],
    innervation: "CN III (oculomotor), CN IV (trochlear), CN VI (abducens), CN V1 (ophthalmic), sympathetic fibers — not a nerve itself",
    clinicalRelevance: [
      "Superior orbital fissure syndrome — ophthalmoplegia (III/IV/VI), V1 sensory loss, proptosis; vision may be spared if optic canal uninvolved",
      "Orbital apex syndrome — combines superior orbital fissure and optic canal involvement → vision loss",
      "Cavernous sinus thrombosis spreads via ophthalmic veins through fissure",
      "Skull base fracture, sphenoid wing tumor, or carotid-cavernous fistula",
    ],
    boardsPearls: [
      "Superior orbital fissure = CN III, IV, V1, VI + ophthalmic veins + sympathetic fibers",
      "Trigeminal foramina: V1 = superior orbital fissure; V2 = rotundum; V3 = ovale",
      "Superior orbital fissure syndrome — ophthalmoplegia + V1 loss; vision spared",
      "Orbital apex syndrome — above plus CN II optic nerve involvement → ↓ vision",
      "vs inferior orbital fissure — V2 (infraorbital), zygomatic branches; not III/IV/VI",
      "vs optic canal — CN II and ophthalmic artery only",
    ],
    distinguishFrom: [
      "Inferior orbital fissure — maxilla-sphenoid gap; V2 maxillary branches and infraorbital canal access, not primary CN III/IV/VI passage",
      "Optic canal — CN II and ophthalmic artery within lesser wing of sphenoid",
      "Foramen rotundum — V2 skull exit to pterygopalatine fossa, not direct orbital entry",
      "Supraorbital notch/foramen — V1 branch exit on forehead, distal to fissure",
      "Cavernous sinus — venous sinus lateral to sella; nerves course here before entering superior orbital fissure",
    ],
    pediatrics:
      "Superior orbital fissure and orbital apex syndromes are rare in children but may follow skull base trauma, orbital cellulitis with cavernous sinus spread, or sphenoid wing meningioma; same cranial nerve anatomy applies.",
  },
  {
    id: "cavernous-sinus",
    name: "Cavernous Sinus",
    etymology: "Latin cavernosus = full of hollows/caves + Latin sinus = bay/channel",
    aliases: [
      "cavernous sinus",
      "cavernous sinuses",
      "cavernous venous sinus",
      "cavernous venous sinuses",
      "paired cavernous sinus",
      "dural cavernous sinus",
    ],
    definition:
      "Paired dural venous sinuses on either side of the sella turcica — a clinically critical neurovascular crossroads where cranial nerves III, IV, V1, V2, and VI course alongside the internal carotid artery and postganglionic sympathetic fibers.",
    anatomy:
      "Located in the middle cranial fossa lateral to the body of the sphenoid and pituitary fossa, between layers of dura; trabeculated venous channels receive blood from superior and inferior ophthalmic veins and sphenoparietal sinus, then drain via superior and inferior petrosal sinuses to sigmoid sinus/internal jugular vein. Connects across the intercavernous sinuses anterior/posterior to pituitary and communicates with pterygoid venous plexus (valveless — facial/orbital infection can spread). CN III, IV, V1, and V2 run in the lateral wall; CN VI and internal carotid artery traverse the sinus lumen.",
    action: [
      "Venous drainage conduit for orbit, meninges, and midface",
      "Passage for oculomotor (III), trochlear (IV), abducens (VI), and ophthalmic/maxillary (V1/V2) nerves to orbit and face",
      "Internal carotid artery courses through sinus with surrounding sympathetic plexus fibers to orbit",
      "Valveless connections allow bidirectional venous flow — route for septic thrombosis from midface infections",
    ],
    innervation:
      "Not a nerve — transmits CN III, IV, V1, V2, VI and sympathetic fibers from internal carotid plexus; CN VI is uniquely within the sinus (not confined to lateral wall)",
    clinicalRelevance: [
      "Cavernous sinus thrombosis — fever, severe headache, proptosis, chemosis, ophthalmoplegia (III/IV/VI), V1/V2 facial numbness",
      "Spread from sinusitis, orbital cellulitis, facial infection (danger triangle), or otitis",
      "Carotid-cavernous fistula — traumatic or spontaneous; pulsatile exophthalmos, conjunctival arterialization, bruit",
      "Pituitary macroadenoma or meningioma invasion → CN palsies",
      "Internal carotid aneurysm within cavernous segment — painful ophthalmoplegia",
    ],
    boardsPearls: [
      "Cavernous sinus contents: CN III, IV, V1, V2, VI + internal carotid artery + sympathetic fibers",
      "CN VI runs through the sinus; III/IV/V1/V2 in lateral dural wall",
      "Cavernous sinus thrombosis — fever + headache + proptosis + ophthalmoplegia + V1/V2 loss",
      "Valveless venous drainage from face/orbit → cavernous sinus thrombosis from midface infection",
      "Carotid-cavernous fistula — pulsatile proptosis and cranial bruit",
      "vs prostatic cavernous nerves — pelvic autonomic erection nerves; unrelated cranial structure",
      "vs sphenoid sinus — air-filled paranasal sinus in sphenoid bone, not dural venous sinus",
    ],
    distinguishFrom: [
      "Sphenoid sinus — paranasal air sinus; sinusitis can spread to cavernous sinus but is distinct structure",
      "Superior sagittal sinus — midline dural sinus on falx cerebri, not lateral sellar sinus",
      "Pterygoid venous plexus — infratemporal venous network communicating with cavernous sinus",
      "Cavernous nerves (prostatic plexus) — pelvic parasympathetic fibers for erection, not cranial sinus",
      "Superior orbital fissure — orbital entry for III/IV/V1/V2/VI after exiting cavernous region",
    ],
    pediatrics:
      "Cavernous sinus thrombosis occurs in children from complicated sinusitis or orbital cellulitis — same cranial nerve findings as adults; urgent antibiotics and evaluation for septic thrombosis.",
  },
  {
    id: "sagittal-sinus",
    name: "Sagittal Sinus",
    etymology:
      "Latin sagitta = arrow + sinus = bay/channel — midline dural venous channels running along the falx cerebri in the sagittal plane",
    aliases: [
      "sagittal sinus",
      "sagittal sinuses",
      "superior sagittal sinus",
      "superior sagittal sinuses",
      "sss",
      "inferior sagittal sinus",
      "inferior sagittal sinuses",
      "dural sagittal sinus",
      "sagittal venous sinus",
      "sagittal venous sinuses",
    ],
    definition:
      "Midline dural venous sinuses coursing within the falx cerebri — the superior sagittal sinus along the attached convex margin and the inferior sagittal sinus along the free edge — draining cerebral cortex and receiving CSF from arachnoid granulations before converging toward the confluence of sinuses and straight sinus.",
    anatomy:
      "Superior sagittal sinus (SSS) runs in the attached margin of the falx cerebri from the crista galli anteriorly to the confluence of sinuses (torcula Herophili) posteriorly; receives superior cerebral veins and arachnoid granulations (Pacchionian bodies) for CSF reabsorption. Inferior sagittal sinus runs in the free edge of the falx and drains posteriorly to the straight sinus, which joins the confluence with the great cerebral vein (vein of Galen). Both lie between periosteal and meningeal layers of dura.",
    action: [
      "Venous drainage of cerebral cortex and superior midline falx",
      "CSF reabsorption — arachnoid granulations protrude into superior sagittal sinus",
      "Confluence of sinuses directs venous blood toward transverse/sigmoid sinuses and internal jugular vein",
      "Midline anatomic landmark for falx cerebri and parasagittal meningiomas",
    ],
    innervation:
      "Not innervated — venous structure; pain from thrombosis or meningitis reflects meningeal irritation and ↑ ICP rather than sinus innervation",
    clinicalRelevance: [
      "Superior sagittal sinus thrombosis — headache, papilledema, seizures, focal deficits; risk with hypercoagulability, OCP, pregnancy, dehydration, infection",
      "Arachnoid granulation dysfunction → impaired CSF absorption and communicating hydrocephalus",
      "Parasagittal/falcine meningioma may invade or compress superior sagittal sinus",
      "Vertex epidural hematoma or skull fracture can injure adjacent sinus",
      "Post-meningitic or post-SAH scarring at granulations impairs CSF drainage",
    ],
    boardsPearls: [
      "Superior sagittal sinus runs in attached margin of falx cerebri — midline on vertex",
      "Arachnoid granulations drain CSF into superior sagittal sinus",
      "Inferior sagittal sinus → straight sinus → confluence of sinuses",
      "Cerebral venous sinus thrombosis can affect superior sagittal sinus → ↑ ICP, headache, papilledema, seizures",
      "vs cavernous sinus — lateral to sella; CN III/IV/V1/V2/V6 palsies with thrombosis, not midline vertex drainage",
      "Confluence of sinuses (torcula) = SSS + straight sinus + transverse sinuses meet posteriorly",
    ],
    distinguishFrom: [
      "Cavernous sinus — paired lateral sinuses at sella with CN III/IV/V1/V2/V6 and ICA",
      "Straight sinus — single midline channel at tentorial apex receiving inferior sagittal sinus and vein of Galen",
      "Transverse/sigmoid sinuses — lateral posterior drainage toward jugular bulb",
      "Sphenoid sinus — paranasal air cavity, not dural venous channel",
      "Emissary veins — extracranial connections to sinuses, not the sinuses themselves",
      "Arachnoid granulations — CSF reabsorption structures protruding into superior sagittal sinus",
    ],
    pediatrics:
      "Superior sagittal sinus thrombosis is rare in children but reported with dehydration, sepsis, and congenital thrombophilia; neonatal meningitis can impair arachnoid granulation function at the superior sagittal sinus.",
  },
  {
    id: "hypoglossal-canal",
    name: "Hypoglossal Canal",
    etymology:
      "Greek hypo = under + glossa = tongue + Latin canalis = channel — bony canal for hypoglossal nerve exit",
    aliases: [
      "hypoglossal canal",
      "hypoglossal canals",
      "canalis hypoglossi",
      "hypoglossal foramen",
      "cn xii canal",
      "cranial nerve xii canal",
    ],
    definition:
      "Paired canal in the occipital bone anterolateral to the foramen magnum through which cranial nerve XII (hypoglossal nerve) exits the posterior cranial fossa to the neck.",
    anatomy:
      "CN XII exits between pyramid and olive of medulla, traverses hypoglossal canal to emerge lateral to occipital condyle. Nerve then descends between internal carotid artery and internal jugular vein, hooks around occipital artery, and passes to tongue muscles.",
    action: [
      "Skull exit for CN XII motor fibers to intrinsic and extrinsic tongue muscles",
      "Allows hypoglossal nerve passage from posterior fossa to upper neck",
    ],
    innervation: "CN XII (hypoglossal nerve) — motor to tongue except palatoglossus (CN X)",
    clinicalRelevance: [
      "CN XII palsy — tongue deviation toward lesion, atrophy, fasciculations",
      "Skull base tumor or metastasis compressing hypoglossal canal",
      "Occipital condyle fracture or post-surgical injury",
      "Combined lower cranial neuropathies with jugular foramen lesions",
    ],
    boardsPearls: [
      "Hypoglossal canal = CN XII exit from skull",
      "Tongue deviates toward side of LMN XII lesion",
      "Canal lies anterolateral to foramen magnum in occipital bone",
      "vs jugular foramen — IX, X, XI exit laterally; XII has own canal",
      "UMN tongue lesion — deviates away from lesion (contralateral weakness)",
    ],
    distinguishFrom: [
      "Jugular foramen — CN IX, X, XI; not CN XII",
      "Foramen magnum — medulla/spinal cord and vertebral arteries, not CN XII canal",
      "Olfactory foramina — CN I cribriform plate",
      "Stylomastoid foramen — CN VII exit to face, not tongue",
      "Lingual nerve (V3 branch) — general sensation anterior tongue, not motor CN XII",
    ],
    pediatrics:
      "Hypoglossal palsy from birth trauma or skull base anomaly is rare; tongue-tie is mechanical restriction, not CN XII canal pathology.",
  },
  {
    id: "jugular-foramen",
    name: "Jugular Foramen",
    etymology:
      "Latin jugularis = of the throat/yoke + foramen = opening — gap between temporal and occipital bones for jugular vein and lower cranial nerves",
    aliases: [
      "jugular foramen",
      "jugular foramina",
      "jugular foramen syndrome",
      "posterolateral foramen",
    ],
    definition:
      "Large irregular opening between the temporal and occipital bones in the posterior cranial fossa — transmits internal jugular vein, sigmoid sinus continuation, and cranial nerves IX, X, and XI (cranial root of accessory).",
    anatomy:
      "Divided conceptually into pars nervosa (anteromedial — CN IX) and pars vascularis (posterolateral — CN X, XI, IJV). Glossopharyngeal (IX), vagus (X), and accessory (XI cranial portion joining XI spinal roots) exit here. Tympanic branch of IX (Jacobson) and auricular branch of X (Arnold) arise nearby.",
    action: [
      "Venous drainage of brain via internal jugular vein from sigmoid sinus",
      "Exit for CN IX, X, and XI to neck and thoracoabdominal viscera",
      "Spinal accessory nerve joins after XI spinal roots ascend through foramen magnum",
    ],
    innervation: "CN IX (glossopharyngeal), CN X (vagus), CN XI (accessory — cranial and spinal roots unite)",
    clinicalRelevance: [
      "Jugular foramen syndrome (Vernet syndrome) — IX, X, XI palsy",
      "Glomus jugulare (paraganglioma) at skull base",
      "Schwannoma of CN IX/X/XI",
      "Basilar skull fracture with lower CN deficits",
      "IJV thrombosis or central venous catheter complications",
    ],
    boardsPearls: [
      "Jugular foramen = CN IX + X + XI + internal jugular vein",
      "Vernet syndrome — jugular foramen lesion → hoarseness (X), absent gag (IX), SCM/trapezius weakness (XI)",
      "CN IX — taste posterior 1/3 tongue, parotid (via otic ganglion), stylopharyngeus",
      "CN X — larynx/pharynx, heart, lungs, GI to splenic flexure parasympathetics",
      "CN XI — SCM and trapezius (spinal roots ascend foramen magnum, exit jugular foramen)",
      "vs hypoglossal canal — CN XII only, separate anterolateral opening",
    ],
    distinguishFrom: [
      "Hypoglossal canal — CN XII exit only",
      "Foramen magnum — medulla, spinal cord, vertebral arteries, spinal XI roots ascending",
      "Carotid canal — internal carotid artery, not lower CNs",
      "Stylomastoid foramen — CN VII facial nerve exit",
      "Jugular vein (neck) — venous structure distally; jugular foramen is skull opening",
    ],
    pediatrics:
      "Lower cranial nerve palsies in children may follow skull base infection, trauma, or tumor (glomus tumors rare); jugular foramen syndrome presents with dysphagia, hoarseness, and weak shoulder shrug.",
  },
  {
    id: "acromion",
    name: "Acromion",
    etymology: "Greek akros = highest + omos = shoulder",
    aliases: ["acromion", "acromial process"],
    definition:
      "Lateral extension of the scapular spine that forms the anterolateral roof of the shoulder and articulates with the clavicle at the acromioclavicular (AC) joint.",
    anatomy:
      "Projects anterolaterally over the humeral head; together with the coracoid process and coracoacromial ligament forms the coracoacromial arch. Subacromial bursa and supraspinatus tendon course beneath it.",
    action: [
      "Provides origin for deltoid (acromial portion)",
      "Forms superior boundary of subacromial space during shoulder elevation",
      "Transmits force from clavicle via AC joint during arm movement",
    ],
    clinicalRelevance: [
      "Subacromial impingement — supraspinatus tendon compressed against acromion with elevation",
      "Acromioclavicular joint osteoarthritis — inferior osteophytes narrow subacromial space",
      "Os acromiale (unfused acromial apophysis) — may contribute to impingement symptoms",
      "Target of acromioplasty in refractory impingement surgery",
    ],
    boardsPearls: [
      "Coracoacromial arch = coracoid + acromion + coracoacromial ligament",
      "Supraspinatus passes underneath — impingement with overhead motion",
      "AC joint separates acromion from clavicle — separate from glenohumeral joint",
      "Hooked acromion (type III) associated with rotator cuff tears on imaging studies",
    ],
    distinguishFrom: [
      "Coracoid process — anterior scapular projection; pectoralis minor, coracobrachialis, short head biceps attach",
      "Clavicle — articulates with acromion at AC joint; not part of scapula",
      "Glenoid fossa — scapular socket for humeral head, inferior to acromion",
    ],
    pediatrics:
      "Os acromiale may present in adolescents with overhead shoulder pain; unfused acromial center on imaging.",
  },
  {
    id: "humerus",
    name: "Humerus",
    etymology: "Latin humerus = upper arm",
    aliases: ["humerus", "humeral", "upper arm bone"],
    definition:
      "Long bone of the brachium connecting the shoulder (glenohumeral joint) to the elbow; site of rotator cuff insertion proximally and major upper-extremity nerve crossings.",
    anatomy:
      "Proximal: head (glenohumeral articulation), anatomical neck, greater and lesser tuberosities (rotator cuff insertions), surgical neck, intertubercular (bicipital) groove. Shaft: spiral (radial) groove posteriorly. Distal: medial/lateral epicondyles, trochlea, capitulum.",
    action: [
      "Articulates with scapula at glenohumeral joint and with radius/ulna at elbow",
      "Serves as attachment for rotator cuff, deltoid, pectoralis major, latissimus dorsi, and arm muscles",
      "Provides lever arm for shoulder and elbow motion",
    ],
    clinicalRelevance: [
      "Surgical neck fracture — elderly fall; axillary nerve injury risk",
      "Humeral shaft fracture — radial nerve injury in spiral groove (wrist drop)",
      "Supracondylar fracture (children) — brachial artery and median/anterior interosseous nerve at risk",
      "Greater/lesser tuberosity fractures with rotator cuff avulsion",
      "Proximal humeral physeal stress injury (Little League shoulder) in young throwers",
    ],
    boardsPearls: [
      "Axillary nerve wraps surgical neck — anterior dislocation or surgical neck fracture",
      "Radial nerve in spiral groove — mid-shaft fracture → wrist/finger extension loss",
      "Supracondylar fracture in child — check distal pulses and anterior interosseous nerve (OK sign)",
      "Rotator cuff inserts on greater tuberosity (SITS except subscapularis on lesser)",
      "Anatomical neck vs surgical neck — surgical neck is common fracture site below tuberosities",
    ],
    distinguishFrom: [
      "Femur — thigh bone; hip and knee articulation",
      "Scapula — shoulder blade; glenoid and acromion are scapular, not humeral",
      "Clavicle — strut between sternum and acromion; no elbow articulation",
      "Radius/ulna — forearm bones articulating with distal humerus",
    ],
    pediatrics:
      "Supracondylar humerus fracture — most common pediatric elbow fracture; vascular and nerve exam mandatory. Little League shoulder = proximal humeral physeal widening in throwers.",
  },
  {
    id: "brachial-artery",
    name: "Brachial Artery",
    etymology:
      "Latin brachium = arm + Greek arteria = artery — major arterial supply of the upper arm",
    aliases: [
      "brachial artery",
      "brachial arteries",
      "brachial trunk",
      "brachial trunks",
      "arm brachial artery",
    ],
    definition:
      "Continuation of the axillary artery beyond the lower border of teres major — the sole major artery of the arm — coursing medially with the median nerve and bifurcating into the radial and ulnar arteries at the cubital fossa.",
    anatomy:
      "Begins at lower border of teres major (axillary → brachial transition). Descends medial to humerus in anterior compartment with median nerve (crosses from lateral to medial side in arm). Gives deep brachial (profunda brachii) branch. Terminates in cubital fossa at neck of radius by dividing into radial and ulnar arteries. Collateral circulation via nutrient and muscular branches.",
    action: [
      "Supplies arm flexor compartment muscles and humerus via direct and deep brachial branches",
      "Provides collateral anastomoses around elbow via deep brachial and terminal branches",
      "Bifurcates into radial and ulnar arteries for forearm and hand perfusion",
      "Clinical pulse palpation site in antecubital fossa",
    ],
    clinicalRelevance: [
      "Supracondylar humerus fracture (children) — brachial artery compression or injury → absent radial pulse, hand ischemia",
      "Brachial artery laceration or compartment syndrome in trauma",
      "Blood pressure measurement and arterial blood gas sampling (radial/brachial access)",
      "Median nerve relationship — supracondylar fracture can injure both vessel and nerve",
      "Tourniquet and IV drug use complications in antecubital region",
    ],
    boardsPearls: [
      "Axillary becomes brachial at lower border of teres major",
      "Bifurcates into radial + ulnar at cubital fossa (neck of radius level)",
      "Supracondylar fracture → check radial pulse and hand perfusion",
      "Deep brachial artery = profunda brachii — largest branch in arm",
      "Median nerve crosses brachial artery from lateral to medial in arm",
      "vs axillary artery — proximal in axilla before teres major",
    ],
    distinguishFrom: [
      "Axillary artery — proximal continuation before teres major; becomes brachial distally",
      "Deep brachial artery — major branch in arm; not the main trunk",
      "Radial artery — terminal branch for lateral forearm/hand; not whole arm supply",
      "Ulnar artery — terminal branch for medial forearm/hand",
      "Subclavian artery — proximal upper limb supply before axilla",
    ],
    pediatrics:
      "Supracondylar humerus fracture is the classic pediatric brachial artery injury — absent radial pulse, pale/cool hand, urgent reduction and vascular assessment; compartment syndrome if missed.",
  },
  {
    id: "deep-brachial-artery",
    name: "Deep Brachial Artery",
    etymology:
      "Latin profundus = deep + brachium = arm + arteria = artery — also called profunda brachii",
    aliases: [
      "deep brachial artery",
      "deep brachial arteries",
      "profunda brachii",
      "profunda brachii artery",
      "profunda brachii arteries",
      "deep brachial",
      "profunda brachial artery",
      "profunda brachial arteries",
    ],
    definition:
      "Largest branch of the brachial artery — arising proximally in the arm and accompanying the radial nerve in the radial (spiral) groove — supplying posterior arm muscles and forming collateral anastomoses around the elbow.",
    anatomy:
      "Arises from brachial artery in proximal arm; courses posteriorly with radial nerve through radial/spiral groove of humerus. Divides into radial collateral, middle collateral, and ascending/recurrent branches that anastomose with radial recurrent and interosseous recurrent arteries around the elbow.",
    action: [
      "Perfusion of triceps brachii and posterior arm muscles",
      "Nutrient supply to humerus via nutrient branch",
      "Collateral circulation around elbow joint via collateral branches",
      "Anastomosis with radial recurrent artery at lateral epicondylar region",
    ],
    clinicalRelevance: [
      "Mid-shaft humerus fracture — radial nerve and deep brachial artery course in spiral groove",
      "Elbow collateral circulation maintains hand perfusion if brachial injury is distal to deep brachial origin",
      "Posterior compartment bleeding in arm trauma",
    ],
    boardsPearls: [
      "Profunda brachii = deep brachial artery — largest brachial branch",
      "Travels with radial nerve in spiral groove of humerus",
      "Mid-shaft humerus fracture → radial nerve palsy (wrist drop) + posterior arm vessel injury risk",
      "Radial collateral + radial recurrent = lateral elbow anastomosis",
      "vs brachial artery — main trunk; deep brachial is branch in posterior arm",
      "vs anterior/posterior interosseous — forearm branches of ulnar/common interosseous, not arm",
    ],
    distinguishFrom: [
      "Brachial artery — main arm trunk bifurcating at elbow",
      "Radial artery — terminal forearm branch of brachial",
      "Anterior interosseous artery — forearm branch on interosseous membrane",
      "Radial nerve — companion in spiral groove; nerve not artery",
      "Posterior circumflex humeral artery — axillary branch in quadrangular space",
    ],
    pediatrics:
      "Same spiral groove relationships in children — mid-shaft humeral fractures less common than supracondylar but radial nerve injury remains classic association.",
  },
  {
    id: "radial-artery",
    name: "Radial Artery",
    etymology:
      "Latin radius = spoke/ray + arteria = artery — lateral forearm artery toward the radius side of the wrist",
    aliases: [
      "radial artery",
      "radial arteries",
      "radial trunk",
      "radial trunks",
      "arteria radialis",
    ],
    definition:
      "Terminal branch of the brachial artery (usually the smaller terminal branch) — descending along the lateral forearm with the superficial branch of the radial nerve and passing superficial to the flexor retinaculum at the wrist to form the deep palmar arch and supply the lateral hand.",
    anatomy:
      "Originates in cubital fossa at bifurcation of brachial artery. Descends lateral forearm deep to brachioradialis, medial to radial styloid. Gives radial recurrent branch near elbow. Passes through anatomical snuff box (between extensor pollicis longus and brevis tendons) to enter palm. Forms deep palmar arch (usually) with deep branch of ulnar artery.",
    action: [
      "Perfusion of lateral forearm muscles and radial side of hand",
      "Radial recurrent artery anastomoses with radial collateral around elbow",
      "Forms deep palmar arch — perfusion of palm and digits",
      "Accessible superficial pulse at wrist (anatomical snuff box)",
    ],
    clinicalRelevance: [
      "Arterial blood gas sampling and cardiac catheterization access (after Allen test)",
      "Coronary artery bypass graft conduit (radial artery harvest)",
      "Radial pulse palpation — vital sign and supracondylar fracture perfusion check",
      "Allen test — ulnar collateral perfusion before radial artery cannulation",
      "Anatomical snuff box tenderness — scaphoid fracture",
    ],
    boardsPearls: [
      "Terminal branch of brachial (with ulnar) at cubital fossa",
      "Pulse palpated at wrist lateral to flexor carpi radialis tendon",
      "Allen test — compress both arteries, release ulnar only; hand should reperfuse from ulnar collateral",
      "Radial recurrent + radial collateral = elbow anastomosis",
      "Deep palmar arch — radial artery contribution (dominant pattern variable)",
      "vs ulnar artery — medial forearm; superficial palmar arch contributor",
    ],
    distinguishFrom: [
      "Ulnar artery — medial forearm terminal branch; superficial palmar arch",
      "Brachial artery — proximal trunk before bifurcation",
      "Radial nerve — lateral forearm nerve; not the pulse at wrist",
      "Radial recurrent artery — branch ascending to elbow anastomosis",
      "Deep palmar arch — formed in palm; not forearm artery itself",
    ],
    pediatrics:
      "Supracondylar fracture perfusion checked via radial pulse at wrist. Allen test principles apply if arterial access needed in older children.",
  },
  {
    id: "ulnar-artery",
    name: "Ulnar Artery",
    etymology:
      "Latin ulna = elbow bone + arteria = artery — medial forearm artery toward the ulna side of the wrist",
    aliases: [
      "ulnar artery",
      "ulnar arteries",
      "ulnar trunk",
      "ulnar trunks",
      "arteria ulnaris",
    ],
    definition:
      "Terminal branch of the brachial artery (usually the larger terminal branch) — descending along the medial forearm with the ulnar nerve and passing into the hand superficial to the flexor retinaculum to form the superficial palmar arch and contribute to the deep palmar arch.",
    anatomy:
      "Originates at brachial bifurcation in cubital fossa. Descends medial forearm with ulnar nerve (initially lateral, then medial to nerve). Gives common interosseous branch proximally. Enters hand via Guyon canal (superficial to flexor retinaculum, ulnar to pisiform). Forms superficial palmar arch and deep branch for deep palmar arch.",
    action: [
      "Perfusion of medial forearm flexor muscles via muscular branches",
      "Common interosseous branch supplies anterior and posterior interosseous arteries",
      "Superficial palmar arch — perfusion of palm and fingers (dominant pattern variable)",
      "Deep branch contributes to deep palmar arch and thumb/index perfusion",
    ],
    clinicalRelevance: [
      "Guyon canal compression — ulnar artery and nerve at wrist (cycling, ganglion)",
      "Hypothenar hammer syndrome — ulnar artery thrombosis from repetitive palm trauma",
      "Allen test — assess ulnar collateral flow before radial artery cannulation",
      "Hand lacerations at wrist — ulnar artery bleeding in hypothenar region",
    ],
    boardsPearls: [
      "Larger terminal branch of brachial at cubital fossa (usual pattern)",
      "Common interosseous artery from ulnar → anterior + posterior interosseous",
      "Superficial palmar arch — mainly ulnar; anastomoses with radial branches",
      "Guyon canal — ulnar artery + nerve superficial to flexor retinaculum",
      "Allen test confirms ulnar collateral adequacy before radial A-line",
      "vs radial artery — lateral forearm; deep palmar arch contributor",
    ],
    distinguishFrom: [
      "Radial artery — lateral forearm terminal branch; snuff box pulse",
      "Anterior interosseous artery — branch via common interosseous; deep forearm flexors",
      "Ulnar nerve — runs with artery in forearm; motor/sensory nerve not vessel",
      "Common interosseous artery — proximal ulnar branch dividing into interosseous pair",
      "Superficial palmar arch — formed in palm; not forearm artery trunk",
    ],
    pediatrics:
      "Same forearm/hand vascular anatomy; hypothenar hammer syndrome rare in children. Ulnar collateral perfusion critical if radial artery injured after supracondylar fracture.",
  },
  {
    id: "anterior-interosseous-artery",
    name: "Anterior Interosseous Artery",
    etymology:
      "Latin anterior = front + inter = between + os = bone + arteria = artery — artery on anterior surface of interosseous membrane",
    aliases: [
      "anterior interosseous artery",
      "anterior interosseous arteries",
      "aia",
      "anterior interosseous",
      "anterior interosseous branch",
      "anterior interosseous branches",
    ],
    definition:
      "Artery descending on the anterior interosseous membrane of the forearm — typically a branch of the common interosseous artery from the ulnar artery — accompanying the anterior interosseous nerve and supplying deep flexor compartment muscles and the carpal arch.",
    anatomy:
      "Usually arises from common interosseous branch of ulnar artery in proximal forearm; common interosseous also gives posterior interosseous artery. AIA descends with anterior interosseous nerve (motor branch of median nerve) between flexor digitorum profundus and flexor pollicis longus on anterior interosseous membrane. Contributes palmar interosseous branch to carpal anastomoses.",
    action: [
      "Perfusion of deep flexor compartment (FDP, FPL, pronator quadratus)",
      "Anastomoses with posterior interosseous and palmar carpal arches",
      "Companion vessel to anterior interosseous nerve in forearm",
      "Contributes to wrist collateral circulation",
    ],
    clinicalRelevance: [
      "Anterior interosseous nerve syndrome — nerve palsy (OK sign) with same anatomic compartment as AIA",
      "Forearm compartment syndrome — deep flexor compartment ischemia",
      "Supracondylar fracture can injure proximal brachial vasculature affecting downstream forearm perfusion",
    ],
    boardsPearls: [
      "Branch of common interosseous (from ulnar artery) — not direct brachial branch",
      "Runs with anterior interosseous nerve (median nerve motor branch) on interosseous membrane",
      "Supplies FPL, FDP (index/middle), pronator quadratus",
      "Anterior interosseous nerve palsy — cannot make OK sign; artery in same compartment",
      "vs posterior interosseous artery — dorsal forearm/extensor compartment supply",
      "vs radial artery — main lateral forearm trunk; AIA is deep on membrane",
    ],
    distinguishFrom: [
      "Anterior interosseous nerve — motor branch of median; OK sign test; not the artery",
      "Posterior interosseous artery — dorsal forearm; extensor compartment",
      "Common interosseous artery — proximal ulnar branch giving both interosseous arteries",
      "Ulnar artery — main medial forearm trunk; AIA is branch",
      "Radial recurrent artery — elbow anastomosis from radial artery",
    ],
    pediatrics:
      "Supracondylar fracture may compromise brachial inflow to forearm interosseous branches — check radial/ulnar pulses and deep flexor function (anterior interosseous nerve).",
  },
  {
    id: "radial-recurrent-artery",
    name: "Radial Recurrent Artery",
    etymology:
      "Latin recurrere = to run back + radius = ray + arteria = artery — ascending branch of radial artery near elbow",
    aliases: [
      "radial recurrent artery",
      "radial recurrent arteries",
      "radial recurrent",
      "radial recurrent branch",
      "radial recurrent branches",
      "recurrent radial artery",
      "recurrent radial arteries",
    ],
    definition:
      "Ascending branch of the radial artery near the elbow that anastomoses with the radial collateral artery from the deep brachial (profunda brachii) — forming an important collateral pathway around the lateral elbow.",
    anatomy:
      "Arises from radial artery shortly after brachial bifurcation in cubital fossa/proximal forearm. Ascends between brachialis and brachioradialis toward lateral epicondyle. Anastomoses with radial collateral branch of deep brachial artery and other elbow collaterals (middle collateral, interosseous recurrent).",
    action: [
      "Collateral perfusion around elbow when distal brachial or proximal radial flow is compromised",
      "Anastomosis with deep brachial collateral system",
      "Maintains forearm/hand perfusion via elbow vascular arcade",
    ],
    clinicalRelevance: [
      "Elbow collateral circulation after brachial artery injury distal to deep brachial origin",
      "Supracondylar fracture — distal brachial injury may still preserve some flow via collaterals if proximal brachial intact",
      "Surgical approaches to elbow must respect recurrent vascular anastomoses",
    ],
    boardsPearls: [
      "Branch of radial artery ascending to elbow — anastomoses with radial collateral (from profunda brachii)",
      "Key part of elbow collateral arcade with middle collateral and interosseous recurrent arteries",
      "Deep brachial + radial recurrent = lateral elbow anastomosis (boards classic pair)",
      "vs radial artery — main forearm trunk; recurrent is ascending elbow branch",
      "vs anterior interosseous artery — deep forearm on membrane; not elbow collateral",
      "Profunda brachii collateral + radial recurrent — know paired anastomosis",
    ],
    distinguishFrom: [
      "Radial collateral artery — branch of deep brachial; descends to meet radial recurrent",
      "Deep brachial artery — proximal arm branch in spiral groove",
      "Radial artery — main lateral forearm artery; parent of recurrent branch",
      "Interosseous recurrent artery — part of elbow collateral from posterior interosseous system",
      "Ulnar recurrent arteries — medial elbow collateral branches from ulnar artery",
    ],
    pediatrics:
      "Collateral elbow circulation may preserve hand perfusion in some supracondylar fractures — still treat absent pulse as emergency; collaterals are variable.",
  },
  {
    id: "subluxation",
    name: "Subluxation",
    etymology: "Latin sub = partial + luxare = dislocate",
    aliases: [
      "subluxation",
      "subluxations",
      "joint subluxation",
      "partial dislocation",
      "partial dislocations",
    ],
    definition:
      "Partial displacement of articulating joint surfaces with incomplete loss of congruity — more than normal joint play but less than full dislocation; may spontaneously reduce or remain malaligned.",
    anatomy:
      "Results from capsuloligamentous laxity, trauma, or structural joint abnormality; the joint partially escapes its normal alignment without complete separation of articular surfaces.",
    action: [
      "Produces pain, instability, and reduced function during episodes of partial malalignment",
      "May damage labrum, capsule, or articular cartilage with repeated episodes",
      "Can impinge or stretch adjacent nerves/vessels depending on joint and direction",
    ],
    clinicalRelevance: [
      "Glenohumeral subluxation/instability — anterior shoulder pain, apprehension test positive; may progress to dislocation",
      "Patellar subluxation — lateral knee pain, especially in adolescent females with valgus alignment",
      "Atlantoaxial subluxation — rheumatoid arthritis (pannus), Down syndrome (ligamentous laxity); cord compression risk",
      "Lens subluxation (ectopia lentis) — Marfan syndrome, homocystinuria, trauma; inferior/temporal displacement in Marfan",
      "Temporomandibular joint subluxation — jaw locks open",
    ],
    boardsPearls: [
      "Subluxation = partial dislocation; dislocation = complete loss of articular contact",
      "Anterior shoulder dislocation/subluxation → axillary nerve injury; check deltoid sensation",
      "Atlantoaxial subluxation in RA — screen with cervical spine films before surgery; cord compression",
      "Marfan — upward lens subluxation (superotemporal) vs homocystinuria — downward",
      "Recurrent shoulder subluxation → Bankart lesion (anterior labrum), Hill-Sachs defect (humeral head)",
    ],
    distinguishFrom: [
      "Dislocation — complete separation of articular surfaces; usually requires reduction",
      "Joint laxity/hypermobility — excessive ROM without frank subluxation episode",
      "Fracture-dislocation — fracture with associated dislocation, not isolated subluxation",
      "Subluxation vs luxation — luxation often used synonymously with dislocation; subluxation is partial",
    ],
    pediatrics:
      "Nursemaid's elbow (radial head subluxation) in toddlers — axial traction injury; reduced by supination-flexion maneuver. Patellar subluxation common in adolescent athletes.",
  },
  {
    id: "atlantoaxial",
    name: "Atlantoaxial Joint (C1–C2)",
    etymology: "Atlas = C1 vertebra + axis = C2 vertebra + joint = articulation",
    aliases: [
      "atlantoaxial",
      "atlanto-axial",
      "atlantoaxial joint",
      "atlantoaxial subluxation",
      "atlanto-axial subluxation",
      "atlantoaxial instability",
      "c1-c2 subluxation",
      "c1 c2 subluxation",
    ],
    definition:
      "Articulation between the atlas (C1) and axis (C2) that permits ~50% of cervical rotation; stability depends on the odontoid process (dens) of C2 and the transverse ligament holding it against C1.",
    anatomy:
      "C1 (atlas) — ring-shaped, no vertebral body; articulates with occiput above and C2 below. C2 (axis) — odontoid process (dens) projects into C1 ring. Transverse ligament secures dens to anterior C1 arch; alar and apical ligaments provide additional stability.",
    action: [
      "Primary site of cervical rotation (head turning)",
      "Allows flexion/extension at occipitoatlantal joint separately from rotation at C1–C2",
      "Protects spinal cord as it transitions through the cervical canal",
    ],
    innervation:
      "Spinal cord at risk with instability; upper cervical nerve roots C1–C2 contribute to suboccipital sensation",
    clinicalRelevance: [
      "Atlantoaxial subluxation — C1 slides anteriorly on C2 → spinal cord compression",
      "Rheumatoid arthritis — pannus erodes transverse ligament and dens → instability",
      "Down syndrome — ligamentous laxity → ↑ atlantoaxial instability",
      "Trauma — dens fracture (type II most unstable), Jefferson fracture (C1 ring)",
      "Screen cervical spine before intubation/surgery in RA with neck symptoms",
    ],
    boardsPearls: [
      "Atlantoaxial = C1 on C2; transverse ligament holds dens — failure → cord compression",
      "RA complication — atlantoaxial subluxation; get cervical films before anesthesia",
      "Down syndrome — screen for atlantoaxial instability especially before sports",
      "Jefferson fracture (C1 burst) vs hangman fracture (C2 pedicles) — trauma distinctions",
      "Type II odontoid fracture — high nonunion risk; unstable",
    ],
    distinguishFrom: [
      "Occipitoatlantal joint (C0–C1) — flexion/extension of head nodding, not primary rotation",
      "Subaxial cervical spine (C3–C7) — different injury patterns (facet dislocation, burst fractures)",
      "Glenohumeral subluxation — shoulder, not cervical spine",
      "Central cord syndrome — weakness in upper > lower extremities after hyperextension injury (different mechanism)",
    ],
    pediatrics:
      "Down syndrome patients need atlantoaxial instability screening; contact sports may be restricted if instability present. Odontoid fractures and ligamentous injuries in pediatric cervical trauma require careful imaging.",
  },
  {
    id: "sarcomere",
    name: "Sarcomere",
    etymology: "Greek sarx = flesh + meros = part",
    aliases: [
      "sarcomere",
      "sarcomeres",
      "muscle sarcomere",
      "contractile unit",
      "sarcomere structure",
      "striated muscle sarcomere",
    ],
    definition:
      "Functional contractile unit of striated (skeletal and cardiac) muscle — the segment between two adjacent Z lines containing interdigitating thick (myosin) and thin (actin) filaments whose sliding produces contraction.",
    anatomy:
      "Z line (Z disc) — protein boundary anchoring thin filaments at each end of the sarcomere. M line — central anchor for thick myosin filaments. A band (anisotropic) — full length of thick filaments; width stays constant during contraction. I band (isotropic) — thin filaments only (plus overlap region at edges); shortens with contraction. H zone — central A-band region with thick filaments only; disappears when fully contracted. Titin spans Z line to M line stabilizing the lattice.",
    action: [
      "Sliding filament theory — myosin heads bind actin, power stroke pulls thin filaments toward M line",
      "Contraction shortens I band and H zone; A band length unchanged (myosin filaments do not shorten)",
      "ATP required for cross-bridge detachment; absence of ATP → rigor (rigor mortis)",
      "Tropomyosin/troponin regulate actin–myosin binding in response to Ca²⁺",
    ],
    clinicalRelevance: [
      "Hypertrophic cardiomyopathy — autosomal dominant sarcomere gene mutations (MYH7, MYBPC3, troponins)",
      "Muscular dystrophies — dystrophin links sarcolemma to Z disc; loss → membrane instability",
      "Rigor mortis — postmortem ATP depletion locks cross-bridges",
      "Delayed-onset muscle soreness — eccentric contraction microinjury to sarcomere structures",
    ],
    boardsPearls: [
      "Sarcomere = Z line to Z line",
      "A band = myosin (thick) filament length — constant during contraction",
      "I band and H zone shorten; Z lines move closer together",
      "M line — mid-sarcomere myosin anchor; Z line — actin anchor",
      "Troponin C binds Ca²⁺ → tropomyosin shifts → cross-bridge cycling",
      "Cardiac vs skeletal sarcomere — same band nomenclature; cardiac has intercalated discs between cells",
    ],
    distinguishFrom: [
      "Myofibril — long chain of many sarcomeres in series",
      "Neuromuscular junction — motor neuron to muscle signaling site, not contractile lattice",
      "Smooth muscle — lacks striated sarcomere organization (no Z lines/bands)",
      "Titin — giant elastic protein within sarcomere, not the sarcomere itself",
    ],
    pediatrics:
      "Same sarcomere band anatomy in pediatric skeletal and cardiac muscle. Sarcomere gene mutations (e.g., MYH7, MYBPC3) cause familial hypertrophic cardiomyopathy that may present in adolescents with syncope or sudden death.",
  },
  {
    id: "trabeculae",
    name: "Trabeculae",
    etymology:
      "Latin trabecula = small beam — lattice-like bony struts in cancellous bone",
    aliases: [
      "trabeculae",
      "trabecula",
      "trabecular bone",
      "trabecular bones",
      "trabecular structure",
      "trabecular structures",
      "bone trabeculae",
      "bone trabecula",
      "trabecular lattice",
      "trabecular lattices",
      "cancellous trabeculae",
    ],
    definition:
      "Thin interconnecting plates and struts of bone that form the porous lattice of cancellous (spongy) bone — providing high surface area for metabolic turnover while maintaining structural support in vertebrae, epiphyses, and metaphyses.",
    anatomy:
      "Trabeculae align along lines of mechanical stress (Wolff law); enclose marrow spaces filled with hematopoietic or fatty marrow. Found in vertebral bodies, metaphyses, epiphyses, and flat bones; absent from dense cortical shell of diaphysis.",
    action: [
      "Distribute mechanical load within cancellous bone regions",
      "Provide high surface area for osteoblast/osteoclast remodeling",
      "Support overlying articular cartilage in epiphyses",
      "Surround and protect marrow cavities",
    ],
    clinicalRelevance: [
      "Osteoporosis — trabecular bone lost first (vertebral compression fractures)",
      "DEXA lumbar spine — trabecular-rich site for BMD measurement",
      "Multiple myeloma — punched-out lytic lesions in trabecular bone of vertebrae/skull",
      "Paget disease — thickened disorganized trabeculae (mosaic pattern)",
      "Stress fractures in trabecular-rich metaphyses in athletes",
    ],
    boardsPearls: [
      "Trabecular (cancellous/spongy) bone — high turnover; lost first in osteoporosis",
      "Vertebrae and femoral neck metaphysis are trabecular-rich — common fracture sites",
      "vs cortical (compact) bone — dense outer shell of long bone diaphysis; lower turnover",
      "Wolff law — trabeculae orient along stress lines",
      "Trabecular bone mineral density measured at lumbar spine on DEXA",
    ],
    distinguishFrom: [
      "Spongiosa — cancellous bone region containing trabeculae and marrow; trabeculae are the structural struts",
      "Cortical bone — compact lamellar bone of diaphysis; not trabecular lattice",
      "Arachnoid trabeculae — delicate strands in subarachnoid space; not skeletal",
      "Periosteum — fibrous membrane covering bone surface; not internal lattice",
      "Osteoid — unmineralized matrix layer; trabeculae are mineralized bone structure",
    ],
    pediatrics:
      "Pediatric bone has higher trabecular turnover than adult cortical bone — metaphyseal fractures common. Osteogenesis imperfecta and rickets affect trabecular architecture and mineralization at growth plates.",
  },
  {
    id: "spongiosa",
    name: "Spongiosa",
    etymology:
      "Latin spongia = sponge — porous interior bone resembling a sponge",
    aliases: [
      "spongiosa",
      "spongiosa bone",
      "spongiosa bones",
      "spongy bone",
      "spongy bones",
      "cancellous bone",
      "cancellous bones",
      "trabecular bone",
      "trabecular bones",
      "os spongiosum",
      "spongiosa osseous tissue",
    ],
    definition:
      "Cancellous (trabecular) bone — the porous, metabolically active interior of bones composed of trabecular struts surrounding marrow spaces — found in vertebral bodies, epiphyses, metaphyses, and flat bones, enclosed by a cortical shell.",
    anatomy:
      "Lies internal to cortical (compact) bone; trabeculae form lattice enclosing red or yellow marrow. Vertebral bodies are predominantly spongiosa; long bone diaphysis is mostly cortical with spongiosa at metaphyses.",
    action: [
      "High-surface-area site for bone remodeling and calcium exchange",
      "Houses hematopoietic marrow (red marrow) in axial skeleton and proximal long bones",
      "Distributes load from articular surfaces through trabecular network",
      "Provides structural support with less mass than equivalent solid cortical bone",
    ],
    clinicalRelevance: [
      "Osteoporosis — preferential loss of spongiosa (vertebral crush fractures)",
      "Metastatic disease — breast, lung, myeloma often affect spongiosa-rich vertebrae",
      "Red marrow conversion to yellow marrow with age — spongiosa in distal limbs becomes fatty",
      "Renal osteodystrophy — affects spongiosa and growth plates in children",
    ],
    boardsPearls: [
      "Spongy = cancellous = trabecular bone — porous interior with marrow spaces",
      "High metabolic turnover — affected first in osteoporosis and hyperparathyroidism",
      "vs cortical (compact) bone — dense outer layer of long bone shaft",
      "Red marrow in spongiosa of vertebrae, pelvis, sternum, proximal humerus/femur in adults",
      "DEXA spine reflects spongiosa-rich trabecular bone density",
    ],
    distinguishFrom: [
      "Trabeculae — individual bony struts forming spongiosa lattice; spongiosa is the whole region",
      "Cortical bone — compact lamellar bone forming diaphyseal shell",
      "Corpus spongiosum — erectile spongy tissue of penile urethra; not skeletal bone",
      "Bone marrow — soft tissue within spongiosa spaces; not the bony lattice itself",
      "Periosteum — outer fibrous membrane on bone surface",
    ],
    pediatrics:
      "Pediatric spongiosa contains more red marrow than adults; marrow converts to yellow fat distally with age. Rickets widens metaphyseal spongiosa at growth plates; leukemia and metastatic neuroblastoma infiltrate spongiosa-rich marrow.",
  },
  {
    id: "periosteum",
    name: "Periosteum",
    etymology:
      "Greek peri = around + osteon = bone — fibrous membrane enveloping bone",
    aliases: [
      "periosteum",
      "periostea",
      "periosteal membrane",
      "periosteal membranes",
      "periosteal layer",
      "periosteal layers",
      "bone periosteum",
      "periosteal covering",
    ],
    definition:
      "Dual-layered fibrous membrane covering the outer surface of bones (except at articular cartilage and sesamoid surfaces) — providing blood supply, nociception, attachment for tendons/ligaments via Sharpey fibers, and osteoprogenitor cells in its inner cambium layer for fracture healing and appositional growth.",
    anatomy:
      "Outer fibrous layer — dense collagen with blood vessels and nerves. Inner cambium layer — osteogenic cells (osteoprogenitors, osteoblasts). Continuous with joint capsule at metaphyses; absent over articular cartilage. Sharpey fibers anchor periosteum and tendons into underlying bone.",
    action: [
      "Supplies blood and sensory innervation to outer cortex",
      "Provides osteoprogenitor cells for fracture callus and appositional bone growth",
      "Anchors tendons and ligaments via Sharpey fiber insertions",
      "Participates in circumferential (appositional) growth of long bones in children",
    ],
    clinicalRelevance: [
      "Fracture healing — periosteal callus formation is key to bone repair",
      "Osteomyelitis — subperiosteal abscess elevates periosteum (pain, periosteal reaction on X-ray)",
      "Ewing sarcoma — layered \"onion-skin\" periosteal reaction on imaging",
      "Osteosarcoma — aggressive sunburst/spiculated periosteal reaction",
      "Periostitis — inflammation of periosteum (shin splints, hypertrophic pulmonary osteoarthropathy)",
      "Hyperparathyroidism — subperiosteal bone resorption (especially radial aspect of middle phalanges)",
    ],
    boardsPearls: [
      "Periosteum absent on articular cartilage surfaces",
      "Inner cambium layer — osteoprogenitor source for fracture healing",
      "Subperiosteal abscess — classic for osteomyelitis in children",
      "Onion-skin periosteal reaction — Ewing sarcoma; sunburst — osteosarcoma",
      "Subperiosteal resorption — hyperparathyroidism (salt-and-pepper skull, phalangeal tufts)",
      "vs endosteum — lines internal marrow cavity; periosteum covers external surface",
    ],
    distinguishFrom: [
      "Endosteum — thin cellular lining of medullary cavity and Haversian canals",
      "Articular cartilage — avascular hyaline cartilage; no periosteum over joint surfaces",
      "Synovium — joint lining membrane; not the same as periosteum",
      "Periostitis — inflammation of periosteum; clinical condition not the membrane itself",
      "Cortical bone — mineralized bone tissue beneath periosteum",
    ],
    pediatrics:
      "Acute hematogenous osteomyelitis in children often produces subperiosteal abscess before cortical breakthrough — fever, localized bone pain, and periosteal elevation on imaging. Periosteum contributes to fracture callus in pediatric greenstick and buckle fractures.",
  },
  {
    id: "synovium",
    name: "Synovium",
    etymology:
      "Greek syn = together + ovum = egg (synovial fluid) + -ium = membrane — inner lining of synovial joints",
    aliases: [
      "synovium",
      "synovia",
      "synovial membrane",
      "synovial membranes",
      "synovial lining",
      "synovial linings",
      "joint synovium",
      "synovial tissue",
      "synovial tissues",
    ],
    definition:
      "Specialized connective tissue membrane lining the inner surface of the joint capsule (except where articular cartilage covers bone) — secreting viscous synovial fluid rich in hyaluronan and lubricating diarthrodial joints while providing nourishment to avascular articular cartilage.",
    anatomy:
      "Intima — type A (macrophage-like) and type B (fibroblast-like) synoviocytes. Subintima — vascularized connective tissue. Does not cover articular cartilage surfaces. Continuous with joint capsule; reflects onto intra-articular ligaments and menisci (synovial coverage varies).",
    action: [
      "Produces synovial fluid (hyaluronan, lubricin) for joint lubrication and shock absorption",
      "Nutrifies avascular articular cartilage via diffusion from synovial fluid",
      "Phagocytosis of debris and immune surveillance within joint cavity",
      "Inflammatory response in synovitis — effusion, cytokines, pannus formation in RA",
    ],
    clinicalRelevance: [
      "Rheumatoid arthritis — hypertrophic synovium (pannus) erodes cartilage and bone",
      "Septic arthritis — bacterial invasion of synovium and joint space",
      "Synovial fluid analysis — cell count, crystals, culture for diagnosis",
      "Pigmented villonodular synovitis (PVNS) — proliferative synovial lesion",
      "Synovectomy in refractory inflammatory arthropathy",
    ],
    boardsPearls: [
      "Synovium lines joint capsule; articular cartilage has no synovial cover",
      "Synovitis = inflamed synovium → effusion, warmth, swelling (RA, gout, septic)",
      "Pannus — invasive RA synovium destroying cartilage",
      "Synovial fluid is ultrafiltrate + hyaluronan from type B cells",
      "vs synovitis — synovium is normal tissue; synovitis is inflammation",
      "vs periosteum — outer bone membrane; synovium is intra-articular lining",
    ],
    distinguishFrom: [
      "Synovitis — inflammation of synovium; pathologic state not the membrane itself",
      "Articular cartilage — avascular joint surface; not synovial lining",
      "Periosteum — covers bone exterior outside joint cavity",
      "Bursa — separate synovial-lined sac outside joint; bursitis not synovitis",
      "Tendon sheath (tenosynovium) — synovial lining around tendons, not joint synovium",
    ],
    pediatrics:
      "Transient synovitis of the hip — self-limited synovial inflammation after viral illness. Septic arthritis requires urgent synovial fluid aspiration — synovial WBC often >50,000/µL with positive Gram stain/culture.",
  },
  {
    id: "cartilage",
    name: "Cartilage",
    etymology:
      "Latin cartilago = gristle — avascular connective tissue with chondrocytes in extracellular matrix rich in collagen and proteoglycans",
    aliases: [
      "cartilage",
      "cartilages",
      "cartilaginous tissue",
      "cartilaginous tissues",
      "cartilaginous matrix",
    ],
    definition:
      "Flexible avascular connective tissue composed of chondrocytes embedded in extracellular matrix — classified as hyaline, elastic, or fibrocartilage — serving structural, shock-absorbing, and developmental roles in the skeleton and airways.",
    anatomy:
      "Chondrocytes in lacunae produce matrix. Hyaline — type II collagen + aggrecan (articular surfaces, costal cartilages, growth plate, tracheal rings). Elastic — elastin fibers (pinna, epiglottis). Fibrocartilage — type I + II collagen (menisci, intervertebral discs, pubic symphysis). No nerves or blood vessels in mature matrix.",
    action: [
      "Provides smooth low-friction surfaces (hyaline articular cartilage)",
      "Shock absorption and tensile strength (fibrocartilage discs and menisci)",
      "Maintains airway patency (tracheal/bronchial rings)",
      "Growth plate cartilage template for endochondral ossification",
      "Elastic recoil in external ear and epiglottis",
    ],
    clinicalRelevance: [
      "Osteoarthritis — hyaline articular cartilage degeneration",
      "Achondroplasia — FGFR3 mutation impairs endochondral ossification at growth plate cartilage",
      "Rickets — defective mineralization at growth plate hypertrophic cartilage",
      "Meniscal tear — fibrocartilage injury in knee",
      "Relapsing polychondritis — autoimmune inflammation of cartilaginous structures (ear, nose, trachea)",
      "RA synovial pannus — erodes articular cartilage at joint margins",
    ],
    boardsPearls: [
      "Three types: hyaline, elastic, fibrocartilage",
      "Hyaline articular cartilage — type II collagen; avascular, limited repair",
      "Fibrocartilage — meniscus, IVD, pubic symphysis; tougher than hyaline",
      "Growth plate = hyaline cartilage undergoing endochondral ossification",
      "vs bone — cartilage unmineralized (except calcified zone); bone has osteocytes and vessels",
      "Achondroplasia — cartilage matrix OK but ossification impaired → short limbs, normal-sized head",
    ],
    distinguishFrom: [
      "Joint cartilage — hyaline articular cartilage subset on joint surfaces",
      "Bone — mineralized tissue with osteocytes, Haversian systems, marrow",
      "Epiphyseal plate — specialized growth plate cartilage, not general cartilage type",
      "Synovium — joint lining membrane; not cartilaginous tissue",
      "Osteoid — unmineralized bone matrix, not cartilage",
    ],
    pediatrics:
      "Growth plate cartilage drives pediatric height via endochondral ossification. Achondroplasia and rickets are classic pediatric cartilage/growth plate disorders. Costochondral junction swelling (rachitic rosary) in rickets.",
  },
  {
    id: "joint-cartilage",
    name: "Joint Cartilage",
    etymology:
      "Latin junctura = joint + Latin cartilago = gristle — articular hyaline cartilage covering bone ends in synovial joints",
    aliases: [
      "joint cartilage",
      "joint cartilages",
      "articular cartilage",
      "articular cartilages",
      "hyaline joint cartilage",
      "cartilage of joint",
      "cartilage of joints",
      "articular hyaline cartilage",
      "joint surface cartilage",
    ],
    definition:
      "Avascular hyaline cartilage covering the articulating surfaces of bones in diarthrodial joints — composed primarily of type II collagen and proteoglycans — providing low-friction load-bearing and shock absorption, nourished by synovial fluid diffusion.",
    anatomy:
      "Superficial tangential zone (collagen parallel to surface), middle transitional zone, deep radial zone, calcified zone anchored to subchondral bone via tidemark. No blood vessels or nerves in cartilage matrix — chondrocytes in lacunae. Thickest at weight-bearing regions (knee, hip).",
    action: [
      "Provides smooth, low-friction articulation (coefficient of friction lower than ice on ice)",
      "Distributes compressive loads across joint surfaces",
      "Shock absorption via proteoglycan water content (aggrecan)",
      "Slow turnover — limited intrinsic repair capacity after injury",
    ],
    clinicalRelevance: [
      "Osteoarthritis — progressive cartilage loss, subchondral sclerosis, osteophytes",
      "Traumatic chondral/osteochondral injury — joint pain, locking, early OA risk",
      "Osteochondritis dissecans — subchondral bone and overlying cartilage fragment (knee, elbow in adolescents)",
      "RA pannus — synovial invasion destroys articular cartilage",
      "Autologous chondrocyte implantation / microfracture for focal defects",
    ],
    boardsPearls: [
      "Articular cartilage = hyaline cartilage with type II collagen (not type I)",
      "Avascular — nutrition from synovial fluid; poor intrinsic healing",
      "OA = cartilage degeneration; RA destroys cartilage via pannus",
      "vs meniscus — fibrocartilage in knee; not hyaline articular cartilage",
      "vs growth plate cartilage — hypertrophic zone for endochondral ossification, not joint surface",
      "Periosteum and synovium do not cover articular cartilage",
    ],
    distinguishFrom: [
      "Meniscus — fibrocartilage shock absorber within knee; not articular surface cartilage",
      "Fibrocartilage — intervertebral disc, pubic symphysis; type I and II collagen mix",
      "Synovium — joint lining membrane; produces fluid nourishing cartilage",
      "Growth plate (physis) — epiphyseal cartilage for bone lengthening, not articular surface",
      "Costal cartilage — hyaline but not articular; rib attachments",
    ],
    pediatrics:
      "Osteochondritis dissecans affects adolescents with repetitive joint loading (knee, capitellum). Slipped capital femoral epiphysis involves physeal failure, not primary articular cartilage disease, but secondary hip cartilage damage can follow.",
  },
  {
    id: "femoral-epiphysis",
    name: "Femoral Epiphysis",
    etymology:
      "Latin femur = thigh + Greek epi = upon + physis = growth — ossified end of the femur separated from the shaft by the growth plate",
    aliases: [
      "femoral epiphysis",
      "femoral epiphyses",
      "capital femoral epiphysis",
      "capital femoral epiphyses",
      "cfe",
      "proximal femoral epiphysis",
      "proximal femoral epiphyses",
      "femoral head epiphysis",
      "femoral head epiphyses",
      "head of femur epiphysis",
    ],
    definition:
      "Secondary ossification center at the proximal (capital) or distal end of the femur — the femoral head epiphysis articulates with the acetabulum and is separated from the femoral neck (metaphysis) by the physeal growth plate during skeletal growth.",
    anatomy:
      "Capital (proximal) femoral epiphysis forms the femoral head; physis (growth plate) lies between epiphysis and metaphysis (femoral neck). Blood supply primarily via lateral epiphyseal artery (branch of medial circumflex femoral artery) — watershed vulnerability in Legg-Calvé-Perthes. Distal femoral epiphysis at knee contributes to longitudinal growth of femur.",
    action: [
      "Capital epiphysis — hip joint articulation and acetabular development in childhood",
      "Physeal endochondral ossification — longitudinal bone growth at femoral growth plate",
      "Distal femoral epiphysis — knee articulation and femoral length contribution",
      "Appositional growth at metaphysis contributes to neck/shaft remodeling",
    ],
    clinicalRelevance: [
      "Slipped capital femoral epiphysis (SCFE) — displacement of capital epiphysis on femoral neck in obese adolescent",
      "Legg-Calvé-Perthes disease — idiopathic avascular necrosis of capital femoral epiphysis in children 4–10",
      "Salter-Harris fractures through proximal femoral physis — orthopedic emergency",
      "Developmental dysplasia of the hip — abnormal acetabular coverage of femoral head epiphysis",
      "Distal femoral physeal fractures — growth plate injury risk in adolescents",
    ],
    boardsPearls: [
      "SCFE — obese adolescent, hip/knee pain, Klein line on X-ray; orthopedic emergency",
      "Perthes — capital femoral epiphysis AVN; boys 4–10; insidious limp",
      "Lateral epiphyseal artery supplies femoral head — vulnerable in trauma and Perthes",
      "Physis = growth plate between epiphysis and metaphysis",
      "Salter-Harris classification for physeal fractures — type II most common",
      "vs femoral head — epiphysis is the ossification center; head is anatomic structure including cartilage",
    ],
    distinguishFrom: [
      "Femoral metaphysis — bone shaft region adjacent to physis; site of SCFE slip plane",
      "Femoral head — includes articular cartilage and epiphyseal bone; epiphysis is ossification center",
      "Growth plate (physis) — cartilaginous layer between epiphysis and metaphysis",
      "Acetabulum — pelvic socket; not femoral epiphysis",
      "Greater trochanter apophysis — separate secondary ossification center for abductor attachment",
    ],
    pediatrics:
      "SCFE peak in obese adolescents during growth spurt — avoid weight-bearing until surgically stabilized. Perthes presents with painless or mildly painful limp. DDH screening (Ortolani/Barlow) evaluates femoral head coverage in infancy.",
  },
  {
    id: "epiphyseal-plate",
    name: "Epiphyseal Plate",
    etymology:
      "Greek epi = upon + physis = growth + Latin plate = flat layer — cartilaginous growth plate (physis) between epiphysis and metaphysis",
    aliases: [
      "epiphyseal plate",
      "epiphyseal plates",
      "epiphysial plate",
      "epiphysial plates",
      "epiphesial plate",
      "epiphesial plates",
      "growth plate",
      "growth plates",
      "physis",
      "physes",
      "physeal plate",
      "physeal plates",
      "epiphyseal growth plate",
      "epiphyseal growth plates",
      "cartilaginous growth plate",
    ],
    definition:
      "Cartilaginous plate (physis) between the epiphysis and metaphysis in growing long bones — site of endochondral ossification and longitudinal bone growth until fusion (physeal closure) at skeletal maturity.",
    anatomy:
      "Zones from epiphysis to metaphysis: resting (reserve) → proliferative (chondrocyte columns) → hypertrophic (matrix calcification, vascular invasion) → zone of ossification (primary spongiosa). Separated from epiphysis by epiphyseal side of plate; metaphysis forms trabecular bone distally. Weakest zone in trauma often hypertrophic/metaphyseal junction.",
    action: [
      "Longitudinal bone growth via chondrocyte proliferation and hypertrophy followed by ossification",
      "Epiphyseal side contributes to articular shape; metaphyseal side adds trabecular bone",
      "Physeal closure (fusion) when growth completes — epiphyseal line remains on radiograph",
      "Injury disrupts growth → limb length discrepancy or angular deformity if partial arrest",
    ],
    clinicalRelevance: [
      "Salter-Harris fractures — physeal fracture classification (I–V); type II most common",
      "Rickets — widened, irregular epiphyseal plate from failed mineralization",
      "Achondroplasia — impaired proliferative/hypertrophic zone function",
      "SCFE — slip through proximal femoral growth plate in adolescent",
      "Growth plate injuries in pediatric sports — distal radius, phalanges, tibia",
      "Precocious puberty — early physeal closure → reduced adult height",
    ],
    boardsPearls: [
      "Epiphyseal plate = physis = growth plate — cartilage undergoing endochondral ossification",
      "Salter-Harris: I slip, II metaphysis fragment (common), III intra-articular epiphysis, IV both, V crush",
      "Rickets — widened growth plate on X-ray; rachitic rosary at costochondral plates",
      "Weakest link in pediatric bone is physis, not ligament — fractures often physeal",
      "vs epiphysis — epiphysis is ossification center; plate is cartilaginous growth layer between epiphysis and metaphysis",
      "Physeal arrest bar — bridge after injury → angular deformity or shortening",
    ],
    distinguishFrom: [
      "Epiphysis — bony ossification center at bone end; plate lies between epiphysis and metaphysis",
      "Metaphysis — trabecular bone region adjacent to physis toward diaphysis",
      "Articular cartilage — joint surface hyaline cartilage; not the growth plate",
      "Apophysis — traction epiphysis at tendon insertion (e.g., tibial tubercle), not length-growth physis",
      "Epiphyseal line — remnant after physeal fusion; no longer growth plate",
    ],
    pediatrics:
      "Salter-Harris fractures are the pediatric long-bone injury pattern — open physes through adolescence. SCFE occurs at proximal femoral physis. Vitamin D prevents rachitic widening of epiphyseal plates. Growth hormone deficiency causes delayed physeal closure and short stature.",
  },
  {
    id: "cortical-bone",
    name: "Cortical Bone",
    etymology:
      "Latin cortex = bark/shell + Old English ban = bone — dense compact bone forming the outer shell of most bones",
    aliases: [
      "cortical bone",
      "cortical bones",
      "compact bone",
      "compact bones",
      "cortical bone tissue",
      "cortical osseous tissue",
      "compact osseous tissue",
      "cortical shell",
      "cortical layer",
    ],
    definition:
      "Dense lamellar bone forming the thick outer shell (cortex) of long bones and the surface of flat bones — organized into osteons (Haversian systems) with central canals containing blood vessels and nerves — providing mechanical strength with lower metabolic turnover than trabecular bone.",
    anatomy:
      "Osteons (Haversian systems) — concentric lamellae around central (Haversian) canal with osteocytes in lacunae connected by canaliculi. Volkmann canals connect Haversian systems. Periosteum covers outer surface; endosteum lines inner boundary with marrow cavity. Predominates in diaphysis of long bones.",
    action: [
      "Provides torsional and bending strength to long bone shafts",
      "Protects marrow cavity and supports trabecular bone at metaphyses/epiphyses",
      "Appositional growth via periosteal osteoblasts in children",
      "Remodeling via osteoclast cutting cones and osteoblast refilling (coupled turnover)",
    ],
    clinicalRelevance: [
      "Diaphyseal fractures — cortical bone failure (humerus, femur, tibia shaft)",
      "Osteopetrosis — defective osteoclast resorption → excessively dense brittle cortical bone",
      "Osteomyelitis — subperiosteal abscess elevates periosteum from cortex",
      "Stress fractures — repetitive loading of cortical bone (metatarsal, tibia in runners)",
      "DEXA femoral neck — mixed cortical and trabecular site for BMD",
    ],
    boardsPearls: [
      "Cortical (compact) vs trabecular (cancellous/spongy) bone — cortex is dense outer shell",
      "Osteons = Haversian systems with central artery/nerve",
      "Lower turnover than trabecular bone — osteoporosis affects trabeculae first",
      "Osteopetrosis — too much dense cortical bone, brittle, marrow failure",
      "vs spongiosa — trabecular interior; cortical is compact exterior",
      "Mid-shaft humerus fracture — radial nerve in spiral groove of cortical shaft",
    ],
    distinguishFrom: [
      "Spongiosa (cancellous bone) — trabecular lattice inside epiphyses/metaphyses",
      "Trabeculae — individual struts within spongiosa, not compact cortex",
      "Periosteum — fibrous membrane covering cortical surface",
      "Osteoid — unmineralized matrix before mineralization",
      "Woven bone — immature disorganized bone in fracture callus, not mature lamellar cortex",
    ],
    pediatrics:
      "Pediatric cortical bone is more porous and resilient — greenstick and buckle fractures occur instead of complete transverse breaks. Osteopetrosis presents in infancy with dense bones, anemia, and cranial nerve compression.",
  },
  {
    id: "tendinopathy",
    name: "Tendinopathy",
    etymology:
      "Greek tenon = tendon + pathos = suffering — chronic tendon disorder from overuse and degenerative change",
    aliases: [
      "tendinopathy",
      "tendinopathies",
      "tendinitis",
      "tendinitides",
      "tendonitis",
      "tendonitides",
      "tendinosis",
      "tendinoses",
      "chronic tendon injury",
      "chronic tendon injuries",
      "overuse tendinopathy",
    ],
    definition:
      "Chronic tendon disorder — often from repetitive overload — characterized by collagen disorganization, neovascularization, and pain without acute inflammatory infiltrate (tendinosis) or with overlapping tendinitis; distinct from acute tendon rupture though chronic degeneration predisposes to tear.",
    anatomy:
      "Affected tendon shows mucoid degeneration, collagen fiber disarray, and angiofibroblastic hyperplasia (common at enthesis or hypovascular watershed zones — supraspinatus, Achilles, patellar, lateral epicondyle). Enthesis = tendon–bone insertion site.",
    action: [
      "Pain with loading and resisted movement of attached muscle",
      "Reduced tendon stiffness and load tolerance with chronic degeneration",
      "May progress to partial-thickness or full-thickness tear if overloaded",
      "Healing via fibroblastic remodeling (eccentric loading protocols in rehab)",
    ],
    clinicalRelevance: [
      "Rotator cuff tendinopathy — supraspinatus most common; painful arc 60–120°",
      "Lateral epicondylitis (tennis elbow) — extensor carpi radialis brevis origin tendinopathy",
      "Achilles tendinopathy — midportion or insertional; fluoroquinolone and steroid injection increase rupture risk",
      "Patellar tendinopathy (jumper's knee) — inferior pole of patella in athletes",
      "De Quervain tenosynovitis — first dorsal compartment tendinopathy/tenosynovitis",
    ],
    boardsPearls: [
      "Tendinopathy = chronic degenerative tendon disorder; acute inflammation is tendinitis (terms often overlap clinically)",
      "Supraspinatus tendinopathy — empty can test, painful arc, subacromial impingement",
      "Achilles tendinopathy — avoid corticosteroid injection (rupture risk); fluoroquinolones also ↑ rupture risk",
      "Lateral epicondylitis — resisted wrist extension with elbow extended",
      "vs tendon rupture — acute loss of function, gap/positive special test (e.g., drop arm for cuff tear)",
      "Eccentric exercise — mainstay rehab for Achilles and patellar tendinopathy",
    ],
    distinguishFrom: [
      "Tendon rupture — acute complete or high-grade tear; surgical repair often needed",
      "Tenosynovitis — inflammation of tendon sheath (De Quervain, infectious flexor tenosynovitis)",
      "Bursitis — inflammation of bursa adjacent to tendon (subacromial bursitis with cuff disease)",
      "Enthesitis — inflammation at tendon/bone insertion (spondyloarthropathy), not purely tendinopathy",
      "Myopathy — muscle disease; weakness without focal tendon pain on loading",
    ],
    pediatrics:
      "Osgood-Schlatter and Sever disease are apophysitis (traction at growth centers), not classic tendinopathy. Adolescent athletes develop patellar tendinopathy (jumper's knee). Little League elbow involves physeal injury more than adult-style tendinopathy.",
  },
  {
    id: "metacarpophalangeal-joint",
    name: "Metacarpophalangeal Joint",
    etymology: "Greek meta = after + karpos = wrist + phalanx = finger bone + joint = articulation",
    aliases: [
      "metacarpophalangeal joint",
      "metacarpophalangeal joints",
      "metacarpophalangeal",
      "mcp joint",
      "mcp joints",
      "metacarpal phalangeal joint",
      "knuckle joint",
      "knuckle joints",
    ],
    definition:
      "Synovial hinge-condyloid joints between the metacarpal heads and proximal phalanges of the fingers — the \"knuckles\" — allowing flexion/extension and limited abduction/adduction.",
    anatomy:
      "Metacarpal head articulates with base of proximal phalanx; reinforced by radial and ulnar collateral ligaments (tight in flexion, loose in extension — avoid hyperextending MCP when testing collateral integrity). Palmar plate (fibrocartilaginous) resists hyperextension. Thumb MCP is functionally key for opposition.",
    action: [
      "Flexion and extension of fingers at the knuckles",
      "Slight abduction/adduction when MCP extended",
      "Power grip and grasp initiated at MCP flexion",
    ],
    clinicalRelevance: [
      "Rheumatoid arthritis — symmetric MCP swelling and tenderness (early target joint)",
      "Boxer's fracture — metacarpal neck fracture (classically 5th) with MCP prominence",
      "Gamekeeper's/skier's thumb — ulnar collateral ligament tear at thumb MCP",
      "Swan-neck and boutonnière deformities involve MCP, PIP, and DIP balance",
      "Subluxation of MCPs in advanced RA (ulnar drift)",
    ],
    boardsPearls: [
      "MCP = knuckle; RA affects MCP and PIP, spares DIP",
      "Collateral ligaments of MCP tested with finger flexed ~90°",
      "OA less prominent at MCP than at DIP/PIP — MCP inflammation suggests inflammatory arthritis",
      "Thumb MCP UCL injury — stress with valgus; Stener lesion if aponeurosis interposed",
      "vs carpometacarpal (CMC) — thumb base (trapeziometacarpal) is CMC, not MCP",
    ],
    distinguishFrom: [
      "Proximal interphalangeal (PIP) — distal to MCP, between proximal and middle phalanges",
      "Carpometacarpal joint — metacarpal to carpus (thumb CMC = saddle joint for opposition)",
      "Metatarsophalangeal (MTP) — analogous joint in the foot, not hand",
      "Distal interphalangeal (DIP) — more distal; OA Heberden nodes at DIP, not MCP",
    ],
    pediatrics:
      "Metacarpal fractures and MCP ligament injuries occur in sports; thumb UCL (gamekeeper's thumb) in skiers and children catching falls. Juvenile idiopathic arthritis can involve MCPs like adult RA.",
  },
  {
    id: "interphalangeal-joint",
    name: "Interphalangeal Joint",
    etymology: "Latin inter = between + Greek phalanx = finger bone + joint = articulation",
    aliases: [
      "interphalangeal joint",
      "interphalangeal joints",
      "interphalangeal",
      "ip joint",
      "ip joints",
      "proximal interphalangeal joint",
      "proximal interphalangeal joints",
      "distal interphalangeal joint",
      "distal interphalangeal joints",
      "pip joint",
      "pip joints",
      "dip joint",
      "dip joints",
      "pip",
      "dip",
    ],
    definition:
      "Hinge synovial joints between phalanges — proximal interphalangeal (PIP) between proximal and middle phalanges, and distal interphalangeal (DIP) between middle and distal phalanges; the thumb has a single interphalangeal joint (no separate PIP/DIP nomenclature).",
    anatomy:
      "Hinge joints with strong collateral ligaments and volar plates; extensor mechanism (central slip, lateral bands) crosses PIP and inserts at distal phalanx base — disruption causes boutonnière (PIP flexion) or swan-neck (PIP hyperextension) deformities.",
    action: [
      "PIP and DIP flexion and extension for fine finger motion and grip",
      "Coordination with MCP for power vs precision pinch",
    ],
    clinicalRelevance: [
      "Osteoarthritis — DIP (Heberden nodes) and PIP (Bouchard nodes) osteophytes",
      "Rheumatoid arthritis — PIP involvement; DIP typically spared",
      "Psoriatic arthritis — DIP involvement, dactylitis, pencil-in-cup deformity",
      "Boutonnière deformity — central slip rupture → PIP flexed, DIP extended",
      "Swan-neck deformity — volar plate/ligament imbalance → PIP hyperextended, DIP flexed",
      "Mallet finger — extensor tendon avulsion at DIP",
    ],
    boardsPearls: [
      "PIP vs DIP: fingers have both; thumb has one IP joint only",
      "OA → DIP (Heberden) and PIP (Bouchard); RA → PIP/MCP, spares DIP",
      "Psoriatic arthritis — classic DIP involvement (vs RA)",
      "Boutonnière = PIP flexion + DIP extension; swan-neck = opposite",
      "Mallet finger — DIP droop from extensor avulsion",
      "vs MCP — MCP is metacarpal–proximal phalanx (knuckle), more proximal",
    ],
    distinguishFrom: [
      "Metacarpophalangeal (MCP) — proximal knuckle joint, not between phalanges",
      "Metatarsophalangeal — foot equivalent at toes",
      "Interphalangeal of thumb — single IP, not labeled PIP/DIP",
      "Carpometacarpal — wrist level, not finger interphalangeal",
    ],
    pediatrics:
      "PIP/DIP fractures and mallet injuries in sports; juvenile arthritis may involve PIPs. Trigger finger (stenosing tenosynovitis) can lock a digit in flexion at A1 pulley (not IP joint itself but affects flexion).",
  },
  {
    id: "pelvic-floor",
    name: "Pelvic Floor",
    etymology: "Latin pelvis = basin + Old English flor = floor",
    aliases: [
      "pelvic floor",
      "pelvic floors",
      "pelvic floor muscles",
      "pelvic floor musculature",
      "pelvic diaphragm",
      "pelvic diaphragm muscles",
      "levator ani",
      "levator ani muscle",
      "levator ani muscles",
    ],
    definition:
      "Muscular sling at the base of the pelvis — primarily levator ani and coccygeus — that supports the bladder, uterus/prostate, and rectum and contributes to urinary and fecal continence.",
    anatomy:
      "Levator ani (pubococcygeus, puborectalis, iliococcygeus) and coccygeus form the pelvic diaphragm spanning the pubic symphysis to coccyx; puborectalis creates the anorectal angle; external urethral and anal sphincters coordinate with pelvic floor for continence.",
    action: [
      "Supports pelvic viscera against intra-abdominal pressure",
      "Maintains urethral and anal continence via tonic contraction and coordinated relaxation during voiding/defecation",
      "Puborectalis contraction maintains anorectal angle for fecal continence",
      "Relaxes during micturition and defecation under coordinated neural control",
    ],
    innervation:
      "Levator ani — pudendal nerve (S2–S4) and direct sacral ventral rami; external urethral/anal sphincters — pudendal nerve (S2–S4); parasympathetic pelvic splanchnic nerves (S2–S4) drive detrusor contraction for voiding",
    clinicalRelevance: [
      "Pelvic floor weakness → stress urinary incontinence and pelvic organ prolapse",
      "Obstetric trauma, chronic straining, and aging weaken pelvic floor support",
      "Kegel exercises strengthen levator ani for stress incontinence",
      "Denervation (pudendal nerve injury, cauda equina) impairs continence and support",
    ],
    boardsPearls: [
      "Pelvic floor = levator ani + coccygeus — supports bladder, uterus, rectum",
      "Stress incontinence — leakage with cough/sneeze from pelvic floor/sphincter incompetence",
      "Pudendal nerve (S2–S4) innervates external sphincters and much of pelvic floor",
      "Parasympathetic S2–S4 → detrusor contraction; sympathetic hypogastric → storage",
      "vs transverse perineal muscles — superficial perineal layer, not primary pelvic diaphragm",
    ],
    distinguishFrom: [
      "Transverse perineal muscles — superficial perineal pouch, not primary pelvic diaphragm",
      "Detrusor muscle — bladder wall smooth muscle; pelvic floor supports continence externally",
      "Internal anal sphincter — smooth muscle; pelvic floor includes external sphincter (skeletal)",
      "Abdominal wall — rectus/obliques; pelvic floor is separate continence/support layer",
    ],
    pediatrics:
      "Pediatric enuresis and voiding dysfunction may involve pelvic floor dyssynergia; congenital anomalies (epispadias, cloaca) disrupt normal pelvic floor anatomy.",
  },
  {
    id: "external-urethral-sphincter",
    name: "External Urethral Sphincter",
    etymology: "Latin externus = outward + Greek ouron = urine + thraúō = to rub/wear + Greek sphinktēr = that which binds tight",
    aliases: [
      "external urethral sphincter",
      "external urethral sphincters",
      "eus",
      "external sphincter",
      "external sphincters",
      "urethral rhabdosphincter",
      "urethral rhabdosphincters",
      "rhabdosphincter",
      "rhabdosphincters",
      "striated urethral sphincter",
    ],
    definition:
      "Skeletal (striated) muscle sphincter encircling the membranous urethra — under voluntary somatic control via the pudendal nerve — that maintains urinary continence during bladder storage and relaxes during coordinated voiding.",
    anatomy:
      "Rhabdosphincter of circular skeletal muscle fibers surrounding the membranous urethra in the deep perineal pouch; in females it is a primary continence mechanism at the mid-urethra; in males it lies distal to the prostate and internal (smooth muscle) sphincter at the bladder neck; works with levator ani and pelvic floor for urethral closure pressure.",
    action: [
      "Tonic contraction during bladder storage to maintain continence against intra-abdominal pressure",
      "Voluntary relaxation during micturition when pontine micturition center permits voiding",
      "Coordinates with detrusor contraction and internal sphincter relaxation for efficient emptying",
      "Contributes urethral closure pressure — deficiency causes stress urinary incontinence",
    ],
    innervation:
      "Pudendal nerve (S2–S4) — somatic motor innervation; voluntary cortical control via pontine micturition center; distinct from parasympathetic detrusor control and sympathetic internal sphincter tone",
    clinicalRelevance: [
      "Stress urinary incontinence — sphincter/pelvic floor weakness with cough, sneeze, or Valsalva",
      "Intrinsic sphincter deficiency after radical prostatectomy — post-prostatectomy incontinence",
      "Detrusor-sphincter dyssynergia — external sphincter contracts against detrusor in spinal cord injury",
      "Pudendal nerve injury or cauda equina syndrome — impaired voluntary sphincter control",
      "Epispadias and severe pelvic trauma — anatomic disruption of sphincter mechanism",
    ],
    boardsPearls: [
      "External urethral sphincter = skeletal muscle + pudendal nerve (S2–S4) + voluntary control",
      "Internal urethral sphincter = smooth muscle at bladder neck + sympathetic α1 tone",
      "Storage: external sphincter contracted; voiding: external sphincter relaxes + detrusor contracts",
      "Stress incontinence — leakage with ↑ intra-abdominal pressure from sphincter/pelvic floor failure",
      "Post-prostatectomy incontinence — intrinsic sphincter deficiency (external mechanism)",
      "Detrusor-sphincter dyssynergia in SCI — both contract → high bladder pressure, hydronephrosis risk",
      "vs internal sphincter — smooth vs skeletal; sympathetic vs pudendal somatic",
    ],
    distinguishFrom: [
      "Internal urethral sphincter — smooth muscle at bladder neck; sympathetic α1-mediated tone; not voluntary",
      "Detrusor muscle — bladder wall smooth muscle that contracts to expel urine, not a sphincter",
      "Pelvic floor (levator ani) — broader support sling; external sphincter is distinct circular rhabdosphincter",
      "External anal sphincter — skeletal continence for anus; same pudendal innervation pattern but separate structure",
      "Urethral stricture — fibrotic luminal narrowing, not neuromuscular sphincter dysfunction",
    ],
    pediatrics:
      "Toilet training reflects maturation of voluntary external sphincter control over the micturition reflex. Epispadias and cloacal anomalies disrupt normal sphincter anatomy. Voiding dysfunction in children may involve failure to relax pelvic floor/sphincter during voiding (dyssynergia).",
  },
  {
    id: "s2-s4-sacral-segments",
    name: "S2–S4 Sacral Segments",
    etymology: "S = sacral + 2–4 = second through fourth sacral spinal cord segments",
    aliases: [
      "s2-s4",
      "s2–s4",
      "s2 - s4",
      "s2 to s4",
      "s2 through s4",
      "sacral segments s2-s4",
      "sacral segments s2–s4",
      "sacral nerve roots s2-s4",
      "s2-s4 sacral segments",
      "s2-s4 spinal segments",
      "s2-s4 spinal level",
      "s2-s4 spinal levels",
      "s2, s3, s4",
      "s2 s3 s4",
      "pelvic splanchnic nerves s2-s4",
    ],
    definition:
      "Second through fourth sacral spinal cord segments and nerve roots — the sacral micturition/defecation/erection center and origin of pelvic splanchnic (parasympathetic) and pudendal somatic innervation to the bladder, rectum, and external sphincters.",
    anatomy:
      "Sacral spinal cord segments S2–S4 give rise to ventral rami forming pelvic splanchnic nerves (parasympathetic) and contributing to the pudendal nerve; cauda equina below conus medullaris (~L1–L2) contains S2–S4 nerve roots as individual filaments.",
    action: [
      "Parasympathetic (pelvic splanchnic, S2–S4) → detrusor contraction and internal sphincter relaxation for voiding",
      "Pudendal nerve (S2–S4) → external urethral and anal sphincter tone and perineal sensation",
      "Sacral reflex arcs — anal wink (S2–S4), bulbocavernosus reflex, micturition reflex",
      "Parasympathetic S2–S4 → penile/clitoral erection via NO/cGMP pathway",
    ],
    innervation:
      "Not a muscle — sacral spinal segments S2, S3, S4; parasympathetic outflow via pelvic splanchnic nerves; somatic outflow via pudendal nerve to external sphincters and pelvic floor",
    clinicalRelevance: [
      "Cauda equina syndrome — compression of S2–S4 roots → saddle anesthesia, urinary retention, overflow incontinence, ↓ anal wink",
      "Spinal cord injury above sacral center → spastic neurogenic bladder; sacral root injury → areflexic bladder",
      "Pudendal nerve block (S2–S4) for perineal procedures and obstetric analgesia",
      "Diabetic neuropathy can affect sacral autonomic fibers → neurogenic bladder dysfunction",
    ],
    boardsPearls: [
      "S2–S4 = sacral spinal segments — NOT heart sounds S2/S4",
      "Parasympathetic micturition and erection = pelvic splanchnic nerves (S2–S4)",
      "Pudendal nerve (S2–S4) — external urethral/anal sphincters, perineal sensation",
      "Anal wink reflex tests S2–S4 integrity",
      "Cauda equina — bilateral leg pain/weakness, saddle anesthesia, bladder/bowel dysfunction",
      "vs S2/S4 heart sounds — semilunar/atrial gallop sounds on auscultation, not spinal levels",
    ],
    distinguishFrom: [
      "S2 (second heart sound) — aortic/pulmonic valve closure at end of systole",
      "S4 (fourth heart sound) — atrial kick into stiff ventricle in late diastole",
      "Lumbosacral plexus — broader nerve network; S2–S4 are specific sacral segment levels",
      "Conus medullaris — terminal spinal cord at ~L1–L2; S2–S4 roots are cauda equina below",
    ],
    pediatrics:
      "Sacral agenesis and tethered cord can impair S2–S4 function → neurogenic bladder and constipation; posterior urethral valves cause bladder outlet obstruction independent of sacral cord but chronic retention damages upper tracts.",
  },
  {
    id: "pudendal-nerve",
    name: "Pudendal Nerve",
    etymology: "Latin pudendum = external genitals + Latin nervus = nerve",
    aliases: [
      "pudendal nerve",
      "pudendal nerves",
      "nervus pudendus",
      "pudendal canal nerve",
      "alcock nerve",
    ],
    definition:
      "Major somatic nerve of the perineum formed from S2–S4 ventral rami — providing motor innervation to the external urethral and anal sphincters and perineal muscles and sensory innervation to the perineum and external genitalia.",
    anatomy:
      "Formed from S2–S4 ventral rami; exits pelvis through greater sciatic foramen, passes posterior to ischial spine/sacrospinous ligament, re-enters pelvis via lesser sciatic foramen, and courses in the pudendal (Alcock) canal on the medial surface of the ischium. Terminal branches: inferior rectal nerve, perineal nerve (muscular branches to superficial perineal pouch and external urethral sphincter), and dorsal nerve of the penis or clitoris.",
    action: [
      "Motor — external urethral sphincter, external anal sphincter, bulbospongiosus, ischiocavernosus, and other perineal striated muscles",
      "Sensory — perineal skin, posterior scrotum or labia, and glans penis/clitoris (via dorsal nerve)",
      "Voluntary continence of urine and stool via tonic sphincter contraction",
      "Coordinated relaxation during voiding and defecation under central (pontine) control",
    ],
    innervation:
      "S2–S4 somatic nerve — motor and sensory; distinct from parasympathetic pelvic splanchnic nerves (S2–S4) that mediate detrusor contraction and erection via autonomic pathways",
    clinicalRelevance: [
      "Pudendal nerve block — obstetric perineal analgesia and anorectal/perineal surgery anesthesia",
      "Pudendal neuralgia — chronic perineal pain worse with sitting; entrapment at ischial spine or Alcock canal",
      "Obstetric perineal trauma or prolonged cycling may injure pudendal nerve",
      "Cauda equina syndrome — S2–S4 root compression → saddle anesthesia, sphincter weakness, ↓ anal wink",
      "Fourth-degree obstetric laceration involving anal sphincter — pudendal branch injury risk",
    ],
    boardsPearls: [
      "Pudendal nerve = S2–S4 somatic — external urethral/anal sphincters + perineal sensation",
      "vs pelvic splanchnic nerves — parasympathetic autonomic (detrusor, erection), not pudendal somatic",
      "Course: greater sciatic foramen → ischial spine → lesser sciatic foramen → Alcock canal",
      "Dorsal nerve of penis/clitoris — glans sensation branch of pudendal",
      "Anal wink reflex tests S2–S4 pudendal integrity",
      "Cauda equina — saddle anesthesia + urinary retention + ↓ anal wink",
      "vs prostatic plexus — autonomic cavernous nerves for erection; pudendal is somatic sphincter/perineum",
    ],
    distinguishFrom: [
      "Pelvic splanchnic nerves (S2–S4) — parasympathetic autonomic to detrusor and erectile tissue",
      "Prostatic plexus / cavernous nerves — autonomic erection fibers, not somatic sphincter control",
      "Inferior gluteal nerve — motor to gluteus maximus; exits greater sciatic foramen but not perineal",
      "Pudendal canal (Alcock canal) — fascial tunnel housing the nerve, not the nerve itself",
      "Internal urethral sphincter — smooth muscle with sympathetic innervation, not pudendal somatic",
    ],
    pediatrics:
      "Pudendal nerve block used for obstetric delivery analgesia. Perineal trauma and sphincter injury in childbirth can affect pudendal branches; anal wink and sphincter tone assess S2–S4 integrity in suspected cauda equina or sacral dysraphism.",
  },
  {
    id: "bulbospongiosus",
    name: "Bulbospongiosus",
    etymology: "Latin bulbus = bulb + spongiosus = sponge-like + Latin musculus = little mouse/muscle",
    aliases: [
      "bulbospongiosus",
      "bulbospongiosus muscle",
      "bulbospongiosus muscles",
      "bulbospongiosi",
      "bulbocavernosus",
      "bulbocavernosus muscle",
      "bulbocavernosus muscles",
      "bulbocavernosi",
      "bulbo-spongiosus",
      "bulbo-cavernosus",
    ],
    definition:
      "Paired superficial perineal skeletal muscles that cover the bulb of the corpus spongiosum in males (and homologous structures in females) — contracting to expel urine or semen from the urethra and to stabilize the base of the erect penis.",
    anatomy:
      "Arises from the perineal body and median raphe; wraps the bulb of the corpus spongiosum at the penile root and extends along the ventral shaft; in females, homologous fibers surround the vestibular bulb and vaginal introitus. Lies in the superficial perineal pouch (urogenital triangle) superficial to the urogenital diaphragm.",
    action: [
      "Rhythmic contraction during ejaculation and post-voiding to expel residual urine or semen from the urethra",
      "Compresses the deep (spongiosal) artery venous outflow during erection to aid engorgement of corpus spongiosum and glans",
      "Stabilizes the erect penis at its base during intercourse",
      "Contributes to perineal support with other pelvic floor muscles",
    ],
    innervation: "Perineal branch of the pudendal nerve (S2–S4) — somatic motor",
    clinicalRelevance: [
      "Obstetric perineal laceration or episiotomy can injure bulbospongiosus and pudendal branches",
      "Pudendal nerve entrapment or cauda equina syndrome → weak bulbospongiosus and impaired ejaculatory expulsion",
      "Perineal trauma and Fournier gangrene involve superficial perineal muscles including bulbospongiosus",
      "Pelvic floor rehabilitation targets perineal musculature after childbirth",
    ],
    boardsPearls: [
      "Bulbospongiosus = skeletal muscle over bulb of corpus spongiosum; pudendal nerve (S2–S4)",
      "Expels last drops of urine/semen — somatic muscle, not autonomic erection pathway",
      "vs ischiocavernosus — compresses crura of corpora cavernosa for penile rigidity, not spongiosum",
      "vs prostatic plexus — autonomic cavernous nerves mediate erection; bulbospongiosus is somatic expulsion",
      "Old synonym bulbocavernosus — same muscle",
      "Superficial perineal pouch muscles — bulbospongiosus, ischiocavernosus, superficial transverse perineal",
    ],
    distinguishFrom: [
      "Ischiocavernosus — covers crura of corpora cavernosa; increases cavernosal rigidity",
      "Corpus spongiosum — erectile tissue structure, not skeletal muscle",
      "External urethral sphincter — encircles membranous urethra; continence, not bulb compression",
      "Prostatic plexus — autonomic innervation for erection and emission, not somatic perineal muscle",
      "Bulbourethral (Cowper) gland — mucus-secreting gland at bulb; not muscle",
    ],
    pediatrics:
      "Muscle develops with perineal anatomy; clinically relevant in obstetric perineal trauma rather than pediatric disease. Sacral dysraphism or cauda equina affecting S2–S4 impairs pudendal-innervated perineal muscles.",
  },
  {
    id: "prostatic-plexus",
    name: "Prostatic Plexus",
    etymology: "Greek prostatēs = one standing before + Latin plexus = braid/network",
    aliases: [
      "prostatic plexus",
      "prostatic plexuses",
      "plexus prostaticus",
      "prostate plexus",
      "prostate plexuses",
      "pelvic prostatic plexus",
    ],
    definition:
      "Autonomic nerve network on the posterolateral prostate formed from the inferior hypogastric (pelvic) plexus — containing sympathetic and parasympathetic fibers that innervate the prostate, seminal vesicles, ejaculatory ducts, bladder neck, and corpora cavernosa (via cavernous nerves in the neurovascular bundles).",
    anatomy:
      "Arises from the inferior hypogastric (pelvic) plexus flanking the rectum and bladder base; receives sympathetic fibers via the hypogastric nerves (from superior hypogastric plexus, T10–L2) and parasympathetic fibers via pelvic splanchnic nerves (S2–S4); neurovascular bundles course posterolateral to the prostate carrying cavernous nerves (parasympathetic) alongside prostatic vessels — critical landmark in radical prostatectomy.",
    action: [
      "Parasympathetic (pelvic splanchnic) fibers → vasodilation and erection via cavernous nerves and nitric oxide in corpora cavernosa",
      "Sympathetic fibers → smooth muscle contraction of seminal tract and bladder neck during emission phase of ejaculation",
      "Innervates prostate gland, seminal vesicles, ejaculatory ducts, and distal urethra",
      "Coordinates with somatic pudendal innervation for ejaculation and continence",
    ],
    innervation:
      "Mixed autonomic plexus — sympathetic preganglionic (T10–L2) via hypogastric nerves; parasympathetic preganglionic (S2–S4) via pelvic splanchnic nerves; postganglionic fibers distributed to prostate and erectile tissue; distinct from pudendal somatic motor supply to external sphincter",
    clinicalRelevance: [
      "Radical prostatectomy — injury to neurovascular bundles/prostatic plexus causes erectile dysfunction",
      "Nerve-sparing radical prostatectomy preserves cavernous nerves when oncologically feasible",
      "Diabetic autonomic neuropathy can impair prostatic plexus function → erectile dysfunction",
      "Pelvic surgery, radiation, or extensive lymph node dissection may damage pelvic plexus branches",
      "Alpha-adrenergic drugs (e.g., phenylephrine) constrict prostatic/trigonal smooth muscle via sympathetic fibers",
    ],
    boardsPearls: [
      "Prostatic plexus = part of inferior hypogastric (pelvic) plexus on posterolateral prostate",
      "Parasympathetic S2–S4 (pelvic splanchnic) → erection via cavernous nerves in neurovascular bundles",
      "Sympathetic hypogastric → emission/ejaculation and bladder neck contraction",
      "Radical prostatectomy ED risk — damage to prostatic plexus / neurovascular bundle cavernous nerves",
      "vs pudendal nerve — somatic (external sphincter, perineum), not autonomic prostatic plexus",
      "vs superior hypogastric plexus — presynaptic sympathetic only; prostatic plexus is distal mixed autonomic network",
    ],
    distinguishFrom: [
      "Inferior hypogastric (pelvic) plexus — parent plexus; prostatic plexus is prostate-focused subdivision",
      "Superior hypogastric plexus — presynaptic sympathetic at aortic bifurcation; not mixed parasympathetic",
      "Pudendal nerve — somatic S2–S4 motor/sensory to perineum and external sphincters",
      "Pelvic splanchnic nerves — parasympathetic fibers that join pelvic plexus; not the plexus itself",
      "Cavernous nerves — parasympathetic branches from prostatic plexus to penis for erection",
    ],
    pediatrics:
      "Prostatic plexus anatomy is relevant only in adults for prostate surgery and autonomic sexual function. Pediatric pelvic neuroanatomy matters for imperforate anus, cloacal malformations, and sacral agenesis affecting S2–S4 outflow.",
  },
  {
    id: "tunica-vaginalis",
    name: "Tunica Vaginalis",
    etymology: "Latin tunica = coat + Latin vagina = sheath (covering)",
    aliases: [
      "tunica vaginalis",
      "tunica vaginalises",
      "tunica vaginalis testis",
      "tunica vaginalis of testis",
      "tunica vaginalis of the testis",
      "serous tunica vaginalis",
      "visceral tunica vaginalis",
      "parietal tunica vaginalis",
      "processus vaginalis remnant",
      "processus vaginalis remnants",
    ],
    definition:
      "Serous membrane investing the testis — with visceral and parietal layers derived from the processus vaginalis of the peritoneum during testicular descent — enclosing a potential cavity where hydrocele fluid can accumulate between the layers external to the fibrous tunica albuginea.",
    anatomy:
      "During fetal descent the testis drags a peritoneal diverticulum (processus vaginalis) through the inguinal canal into the scrotum. The visceral layer of tunica vaginalis covers the tunica albuginea of the testis and epididymis; the parietal layer lines the inner scrotal wall. The cavity between layers normally contains only a thin film of serous fluid. The processus vaginalis normally obliterates after descent — patent remnant allows communicating hydrocele or indirect inguinal hernia.",
    action: [
      "Provides a smooth serous-lined pouch permitting testicular mobility and thermoregulation within the scrotum",
      "Potential space between visceral and parietal layers can accumulate fluid (hydrocele) or blood (hematocele)",
      "High investment of tunica vaginalis around testis without posterior fixation contributes to bell-clapper deformity and torsion risk",
    ],
    clinicalRelevance: [
      "Hydrocele — serous fluid between visceral and parietal layers; transilluminates",
      "Communicating hydrocele — patent processus vaginalis; fluctuates with intra-abdominal pressure",
      "Indirect inguinal hernia — bowel in persistent processus vaginalis",
      "Hematocele — blood in tunica vaginalis space after trauma; may not transilluminate",
      "Bell-clapper deformity — abnormally high attachment of tunica vaginalis; testicular torsion risk",
      "Post-orchiopexy or hydrocele repair — ligation of patent processus vaginalis",
    ],
    boardsPearls: [
      "Tunica vaginalis = serous pouch from processus vaginalis; visceral + parietal layers",
      "Hydrocele fluid collects between tunica vaginalis layers — outside tunica albuginea",
      "Patent processus vaginalis → communicating hydrocele and indirect inguinal hernia",
      "vs tunica albuginea — fibrous white capsule directly on testis parenchyma",
      "vs dartos fascia — scrotal wall smooth muscle superficial to tunica vaginalis",
      "Transillumination positive for hydrocele (serous fluid); negative if hematocele or mass",
      "Bell-clapper — high tunica vaginalis investment → testis can rotate → torsion",
      "Infant hydrocele often resolves as processus vaginalis closes",
    ],
    distinguishFrom: [
      "Tunica albuginea — dense fibrous testicular capsule deep to visceral tunica vaginalis",
      "Dartos muscle/fascia — scrotal thermoregulatory layer outside tunica vaginalis",
      "Processus vaginalis — embryologic peritoneal diverticulum; becomes tunica vaginalis when patent portion persists",
      "Hydrocele — fluid collection in tunica vaginalis cavity, not the membrane itself",
      "Epididymis — structure on posterolateral testis covered by visceral tunica vaginalis",
      "Peritoneum — abdominal serosa; tunica vaginalis is evaginated peritoneal derivative in scrotum",
    ],
    pediatrics:
      "Communicating hydrocele is common in newborns from patent processus vaginalis; most close spontaneously by 12–24 months. Distinguish from inguinal hernia (bowel sounds, reducibility). Neonatal testicular torsion can involve extravaginal torsion of the tunica vaginalis investment.",
  },
  {
    id: "tunica-albuginea",
    name: "Tunica Albuginea",
    etymology: "Latin tunica = coat + Latin albus = white",
    aliases: [
      "tunica albuginea",
      "tunica albugineas",
      "testicular tunica albuginea",
      "penile tunica albuginea",
      "fibrous tunica albuginea",
      "albuginea",
    ],
    definition:
      "Dense fibrous connective tissue capsule — in the testis it forms the tough white inelastic envelope deep to the tunica vaginalis; in the penis it surrounds each corpus cavernosum and enables veno-occlusive erection (rupture causes penile fracture).",
    anatomy:
      "Testis — tunica albuginea is the inner fibrous capsule directly investing seminiferous tubules, rete testis, and mediastinum; septa extend inward dividing lobules; covered externally by serous tunica vaginalis (visceral layer) within the processus vaginalis remnant. Penis — bilayered fibroelastic sheath encasing each corpus cavernosum (thinner over corpus spongiosum); trabeculae extend inward; expansion during erection compresses subtunical emissary veins against the rigid tunica.",
    action: [
      "Testicular tunica albuginea — structural containment and compartmentalization of seminiferous tubules; anchors testis within scrotum (incomplete fixation → bell-clapper deformity and torsion risk)",
      "Penile tunica albuginea — limits outward expansion of engorged corpora cavernosa → raises intracavernosal pressure → veno-occlusive mechanism sustaining erection",
      "Fibrous strength of penile tunica — sudden buckling force during intercourse can tear tunica → penile fracture",
    ],
    clinicalRelevance: [
      "Testicular torsion — bell-clapper deformity with high investment of tunica vaginalis and inadequate posterior fixation of testis to tunica albuginea/scrotal wall",
      "Penile fracture — rupture of tunica albuginea of corpus cavernosum with hematoma, pain, detumescence",
      "Hydrocele — fluid between visceral and parietal tunica vaginalis (outside tunica albuginea)",
      "Testicular trauma — contusion or rupture through tunica albuginea",
      "Peyronie disease — fibrous plaque in penile tunica albuginea causing curvature",
    ],
    boardsPearls: [
      "Tunica albuginea = dense white fibrous capsule (testis and corpus cavernosum)",
      "Testis — tunica albuginea (fibrous) deep to tunica vaginalis (serous)",
      "Bell-clapper deformity — testis not fixed to scrotal wall via tunica albuginea → torsion",
      "Penile erection — expansion against tunica albuginea compresses emissary veins (veno-occlusion)",
      "Penile fracture — tear of tunica albuginea of corpus cavernosum, not a bone fracture",
      "vs tunica vaginalis — serous pouch from processus vaginalis; hydrocele fluid collects here",
      "vs dartos fascia — scrotal smooth muscle layer superficial to tunica vaginalis",
      "Peyronie — fibrous plaque in penile tunica albuginea",
    ],
    distinguishFrom: [
      "Tunica vaginalis — serous membrane derived from processus vaginalis; separate dedicated entry for visceral/parietal layers and hydrocele cavity",
      "Dartos muscle/fascia — scrotal wall smooth muscle; thermoregulation of testis",
      "Corpora cavernosa — erectile sinusoidal tissue enclosed by tunica albuginea, not the capsule itself",
      "Corpus spongiosum — ventral erectile body with thinner tunica; surrounds urethra",
      "Gerota fascia — perirenal fascia around kidney, unrelated",
    ],
    pediatrics:
      "Testicular torsion peaks in neonates and adolescents — bell-clapper anatomy is congenital. Neonatal hydrocele involves tunica vaginalis (not albuginea). Penile fracture is rare in children.",
  },
  {
    id: "corpora-cavernosa",
    name: "Corpora Cavernosa",
    etymology: "Latin corpus = body + cavernosus = full of hollows/caves",
    aliases: [
      "corpora cavernosa",
      "corpus cavernosum",
      "corpus cavernosa",
      "corpora cavernosum",
      "cavernous bodies",
      "cavernous body",
      "erectile bodies",
      "erectile body",
      "penile corpora cavernosa",
      "penile corpus cavernosum",
      "crura of corpora cavernosa",
      "cavernosal tissue",
      "cavernosal tissues",
    ],
    definition:
      "Paired cylindrical erectile tissues in the penis (and homologous erectile bodies in the clitoris) composed of trabecular smooth muscle and endothelial-lined cavernous sinusoids surrounded by the tough tunica albuginea — the primary structures that engorge with blood to produce penile erection.",
    anatomy:
      "Two corpora cavernosa lie dorsolaterally in the penile shaft, united distally at the glans and proximally splitting into crura that attach to the ischial tuberosities (ischiocavernosus muscles overlie the crura). Each corpus is enclosed by tunica albuginea; inner trabeculae divide cavernous spaces. The single corpus spongiosum surrounds the urethra ventrally and does not contribute the same rigid erectile column. Deep (cavernous) arteries supply sinusoids; emissary veins drain to the dorsal vein.",
    action: [
      "Flaccid state — tonic smooth muscle contraction limits arterial inflow and permits venous drainage",
      "Erection — parasympathetic (S2–S4) and cavernous nerve stimulation → endothelial nitric oxide (NO) → ↑ cGMP → smooth muscle relaxation → arterial inflow exceeds outflow → sinusoidal engorgement",
      "Expansion against tunica albuginea compresses subtunical emissary veins → veno-occlusive mechanism maintains rigidity",
      "Ischiocavernosus muscle contraction during erection further compresses crura and increases rigidity",
      "Sympathetic emission phase — contraction of smooth muscle in seminal tract and bladder neck (separate from erection maintenance)",
    ],
    innervation:
      "Parasympathetic cavernous nerves (from prostatic plexus / pelvic splanchnic S2–S4) mediate erection via NO–cGMP pathway; sympathetic fibers contribute to emission; somatic pudendal branches innervate ischiocavernosus and bulbospongiosus; dorsal nerve of penis provides glans sensation",
    clinicalRelevance: [
      "Erectile dysfunction — impaired NO/cGMP signaling, vascular insufficiency, neuropathy (diabetes, prostatectomy), or low testosterone",
      "PDE5 inhibitors (sildenafil, tadalafil) — block cGMP breakdown → prolong erection",
      "Priapism — prolonged painful erection from trapped cavernosal blood (sickle cell, trazodone, PDE5 overdose, leukemia)",
      "Penile fracture — traumatic rupture of tunica albuginea during intercourse with sudden pop, pain, and detumescence",
      "Intracavernosal alprostadil (prostaglandin E1) — direct cavernosal smooth muscle relaxation for ED",
      "Radical prostatectomy — cavernous nerve injury in neurovascular bundles impairs cavernosal filling",
    ],
    boardsPearls: [
      "Corpora cavernosa = paired dorsal erectile bodies; corpus spongiosum = ventral urethral body",
      "Erection = NO → cGMP → cavernosal smooth muscle relaxation → ↑ inflow + veno-occlusion against tunica albuginea",
      "Parasympathetic cavernous nerves (S2–S4) drive erection; pudendal nerve is somatic (sphincter/perineum)",
      "PDE5 inhibitors work by preserving cGMP in cavernosal tissue",
      "Priapism — ischemic cavernosal blood; sickle cell disease classic cause; emergent decompression if prolonged",
      "Penile fracture — tear of tunica albuginea of corpus cavernosum, not a true bone fracture",
      "vs corpus spongiosum — surrounds urethra; engorges less and prevents urethral compression during erection",
      "Clitoris has homologous corpus cavernosum erectile tissue",
    ],
    distinguishFrom: [
      "Corpus spongiosum — single ventral erectile body surrounding urethra; separate dedicated entry",
      "Tunica albuginea — fibrous envelope of each corpus cavernosum; separate dedicated entry for testicular and penile capsule",
      "Glans penis — expanded distal fusion of corpora cavernosa with separate spongiosal tip",
      "Bulbospongiosus — skeletal muscle around bulb of spongiosum, not cavernosal sinusoids",
      "Prostatic plexus / cavernous nerves — innervation to corpora cavernosa, not the erectile tissue structure",
      "Dorsal vein of penis — drainage pathway compressed during erection; not erectile tissue",
    ],
    pediatrics:
      "Corpora cavernosa enlarge with androgen-dependent pubertal development; micropenis reflects inadequate cavernosal and spongiosal growth. Priapism occurs in children with sickle cell disease and requires urgent evaluation. Penile fracture is rare in pediatrics.",
  },
  {
    id: "corpus-spongiosum",
    name: "Corpus Spongiosum",
    etymology: "Latin corpus = body + spongiosus = sponge-like",
    aliases: [
      "corpus spongiosum",
      "corpora spongiosum",
      "corpus spongiosa",
      "corpora spongiosa",
      "spongiosum",
      "spongiosal body",
      "spongiosal bodies",
      "penile corpus spongiosum",
      "urethral corpus spongiosum",
      "bulb of corpus spongiosum",
      "bulb of the corpus spongiosum",
      "glans penis spongiosum",
    ],
    definition:
      "Single midline ventral erectile body of the penis that surrounds the spongy (penile) urethra from the bulb at the root through the shaft to the glans — engorging during erection but remaining more compressible than the corpora cavernosa to keep the urethra open for semen passage.",
    anatomy:
      "Bulb of the corpus spongiosum at the penile root in the superficial perineal pouch (expanded proximal portion); cylindrical body runs ventral to the paired corpora cavernosa in the shaft; distally expands into the glans penis, which caps the tips of the corpora cavernosa. Invested by a thinner tunica albuginea than the corpora cavernosa. Supplied by branches of the internal pudendal artery (bulbourethral and urethral arteries). Homologous to the female vestibular bulbs and part of the clitoral erectile complex.",
    action: [
      "Surrounds and supports the urethra along its penile course",
      "Mild engorgement during erection — protects urethral patency while corpora cavernosa achieve high-pressure rigidity dorsally",
      "Glans engorgement contributes to sensation and sealing during intercourse",
      "Conducts urine and semen through the urethral lumen within its erectile tissue",
    ],
    innervation:
      "Parasympathetic cavernous/spongiosal vasodilation via pelvic splanchnic nerves (S2–S4) through prostatic plexus branches; somatic sensation via dorsal nerve of penis (pudendal); bulbospongiosus muscle (pudendal motor) compresses bulb for expulsion",
    clinicalRelevance: [
      "Hypospadias and epispadias — abnormal urethral opening relative to spongiosal urethral development",
      "Urethral stricture or traumatic urethral injury along spongy urethra",
      "Priapism primarily affects corpora cavernosa; isolated spongiosal involvement less common",
      "Penile fracture usually involves tunica albuginea of corpus cavernosum; urethral injury may accompany severe trauma",
      "Fournier gangrene can involve perineal soft tissues including corpus spongiosum region",
    ],
    boardsPearls: [
      "Corpus spongiosum = single ventral erectile body surrounding urethra",
      "Corpora cavernosa = paired dorsal rigid erectile columns; spongiosum stays more compressible",
      "Thinner tunica albuginea over spongiosum — prevents urethral compression during full cavernosal erection",
      "Bulb at root + glans distally — body in penile shaft ventral to cavernosa",
      "vs corpus cavernosum — dorsal paired bodies with thick tunica for veno-occlusive erection",
      "Bulbospongiosus muscle covers bulb — expels urine/semen (somatic, pudendal)",
      "Internal pudendal artery — bulbourethral branches supply spongiosum",
    ],
    distinguishFrom: [
      "Corpora cavernosa — paired dorsolateral erectile bodies with thick tunica albuginea for rigidity",
      "Tunica albuginea — fibrous capsule; thinner over spongiosum than cavernosa",
      "Corpus spongiosum vs spongy urethra — urethra is the lumen; spongiosum is surrounding erectile tissue",
      "Bulbourethral (Cowper) gland — pea-sized gland opening into spongy urethra; not erectile body",
      "Bulbospongiosus — skeletal muscle over bulb, not erectile sinusoidal tissue",
      "Female vestibular bulbs — homologous erectile tissue flanking vaginal introitus",
    ],
    pediatrics:
      "Hypospadias reflects abnormal urethral canalization within the spongiosum/urethral plate. Corpus spongiosum grows with androgen-dependent pubertal development; micropenis may reflect inadequate penile erectile tissue growth overall.",
  },
  {
    id: "fontanelle",
    name: "Fontanelle",
    etymology: "French fontaine = spring/fountain; soft spot where skull sutures meet",
    aliases: [
      "fontanelle",
      "fontanel",
      "fontanelles",
      "fontanels",
      "anterior fontanelle",
      "anterior fontanel",
      "posterior fontanelle",
      "posterior fontanel",
      "soft spot",
      "soft spots",
      "cranial fontanelle",
      "cranial fontanel",
    ],
    definition:
      "Membrane-covered gaps at intersections of fetal/neonatal cranial sutures where ossification is incomplete — allow skull molding during birth and accommodate rapid brain growth in infancy.",
    anatomy:
      "Anterior fontanelle (bregmatic) — junction of coronal and sagittal sutures; diamond-shaped, closes ~12–18 months. Posterior fontanelle (lambdoid) — junction of sagittal and lambdoid sutures; triangular, closes ~2–3 months. Patency reflects normal skull growth; delayed closure suggests pathology.",
    action: [
      "Permits skull deformation during vaginal delivery",
      "Expands with increasing intracranial volume during brain growth",
      "Bulges with ↑ intracranial pressure or crying; sinks with dehydration",
      "Palpation assesses hydration status and intracranial pressure in infants",
    ],
    clinicalRelevance: [
      "Bulging fontanelle — meningitis, hydrocephalus, intracranial hemorrhage, hypervitaminosis A",
      "Sunken fontanelle — dehydration, malnutrition",
      "Delayed closure — hypothyroidism, Down syndrome, rickets, achondroplasia",
      "Premature closure (craniosynostosis) — abnormal head shape, ↑ intracranial pressure risk",
      "Large anterior fontanelle — hypothyroidism, osteogenesis imperfecta, trisomy 21",
    ],
    boardsPearls: [
      "Anterior fontanelle closes ~12–18 months; posterior ~2–3 months",
      "Bulging + fever + lethargy in infant → meningitis until proven otherwise",
      "Sunken fontanelle + dry mucosa + ↓ urine output → dehydration",
      "Delayed fontanelle closure + hypotonia → congenital hypothyroidism",
      "Craniosynostosis — premature suture fusion, not enlarged fontanelle",
      "vs open suture — fontanelle is membrane-filled gap; suture is fibrous joint between bones",
    ],
    distinguishFrom: [
      "Cranial suture — fibrous joint line between skull bones, not soft membranous gap",
      "Craniosynostosis — premature suture fusion with ridging and abnormal head shape",
      "Caput succedaneum — soft tissue scalp swelling from birth trauma, not fontanelle bulging",
      "Cephalohematoma — subperiosteal hemorrhage limited by suture lines",
    ],
    pediatrics:
      "Fontanelle examination is central to neonatal and infant assessment; bulging fontanelle with meningitis signs warrants urgent lumbar puncture and antibiotics. Congenital hypothyroidism screening is separate but delayed fontanelle closure is a classic physical clue.",
  },
  {
    id: "l1-l2-spinal-level",
    name: "L1–L2 Spinal Level",
    etymology: "L = lumbar + 1–2 = first and second lumbar vertebrae/segments",
    aliases: [
      "l1-l2",
      "l1–l2",
      "l1 - l2",
      "l1 to l2",
      "l1 through l2",
      "l1 l2",
      "l1, l2",
      "l1-l2 level",
      "l1-l2 levels",
      "l1-l2 spinal level",
      "l1-l2 spinal levels",
      "l1-l2 vertebral level",
      "l1-l2 vertebral levels",
      "l1-l2 segment",
      "l1-l2 segments",
      "first and second lumbar vertebrae",
      "lumbar 1-2",
      "lumbar 1–2",
    ],
    definition:
      "First and second lumbar vertebral and spinal cord segment levels — landmark for termination of the spinal cord (conus medullaris) and upper lumbar neurologic/reflex testing.",
    anatomy:
      "Vertebral bodies L1 and L2 lie below the thoracic spine; spinal cord segments L1–L2 correspond to lower abdominal wall and upper leg dermatomes/myotomes. Conus medullaris (terminal spinal cord) typically ends at the L1–L2 vertebral level in adults; nerve roots of the cauda equina continue inferiorly within the lumbar and sacral canal.",
    action: [
      "Landmark for conus medullaris — cord ends ~L1–L2; cauda equina (individual nerve roots) lies below",
      "Cremaster reflex arc — afferent/efferent fibers via genitofemoral nerve (L1–L2); ipsilateral testicular elevation with inner thigh stroke",
      "Upper limit of sympathetic preganglionic outflow — IML horn T1–L2 (L2 is most caudal sympathetic segment)",
      "Lateral sacral branches of abdominal aorta typically arise at L1–L2 vertebral level",
    ],
    innervation:
      "L1 — iliopsoas (partial), abdominal wall; L2 — iliopsoas, hip adductors, anterior thigh sensation; cremaster reflex L1–L2 via genitofemoral nerve",
    clinicalRelevance: [
      "Lumbar puncture performed at L3–L4 or L4–L5 interspace — below conus to avoid cord injury",
      "Conus medullaris syndrome — injury at L1–L2 cord level → early bladder dysfunction, symmetric leg weakness, saddle anesthesia variable",
      "Cauda equina syndrome — compression of roots below conus (often L4–S1) → bilateral radiculopathy, saddle anesthesia, urinary retention",
      "L1–L2 disc herniation — less common than L4–L5/L5–S1; can affect upper lumbar roots",
    ],
    boardsPearls: [
      "Conus medullaris ends ~L1–L2 — LP below this at L3–L4 or L4–L5",
      "Cremaster reflex = L1–L2 (genitofemoral nerve)",
      "Sympathetic preganglionic neurons originate T1–L2 IML horn",
      "Conus syndrome = cord termination injury; cauda equina = root injury below conus",
      "Lateral sacral arteries branch at L1–L2 — renal artery anatomy boards tie-in",
    ],
    distinguishFrom: [
      "L3–L4 / L4–L5 — standard lumbar puncture levels below conus",
      "T11–L2 — broader dermatomal band for ureteral referred pain (not same as conus landmark)",
      "S2–S4 — sacral parasympathetic/pudendal segments below cauda equina",
      "Chlamydia L1–L3 serovars — lymphogranuloma venereum designation, not spinal levels",
    ],
    pediatrics:
      "Conus medullaris may terminate slightly lower (L2–L3) in neonates before ascending with growth; LP level selection still uses palpable iliac crest (L4) landmarks.",
  },
  {
    id: "lumbosacral-spinal-nerve-roots",
    name: "Lumbosacral Spinal Nerve Roots",
    etymology:
      "Latin lumbus = loin + sacrum = sacred bone + Latin radix = root — ventral and dorsal nerve rootlets forming lumbar and sacral spinal nerves",
    aliases: [
      "lumbosacral spinal nerve roots",
      "lumbosacral nerve root",
      "lumbar and sacral nerve roots",
      "lumbar sacral nerve roots",
      "l2-s3 nerve roots",
      "l4-s3 nerve roots",
      "lumbosacral roots",
      "cauda equina roots",
    ],
    definition:
      "Individual motor (ventral) and sensory (dorsal) nerve roots arising from the conus medullaris and cauda equina (L1–S5) that merge to form lumbosacral spinal nerves — the anatomic substrate for lumbar and sacral plexuses and lower extremity radiculopathy.",
    anatomy:
      "Below conus medullaris (~L1–L2), roots descend in thecal sac as cauda equina; each segment has dorsal (sensory) and ventral (motor) roots uniting at the intervertebral foramen to form mixed spinal nerves. Lumbar roots (L1–L5) contribute to lumbar plexus and lumbosacral trunk; sacral roots (S1–S5) form sacral plexus. Sciatic nerve derives from L4–S3 roots; femoral from L2–L4.",
    action: [
      "Motor — ventral root fibers to lower extremity, pelvic floor, and perineal muscles via plexus branches",
      "Sensory — dorsal root ganglia and fibers carry dermatomal sensation from legs, perineum, and saddle area",
      "Reflex arcs — patellar (L3–L4), Achilles (S1), anal wink (S2–S4)",
      "Autonomic — preganglionic sympathetic exit T1–L2; parasympathetic pelvic outflow S2–S4",
    ],
    innervation:
      "Not a single nerve — segmental roots L1–S5; clinically high-yield levels L4, L5, S1 for sciatica and foot weakness patterns",
    clinicalRelevance: [
      "Lumbar disc herniation compresses single or adjacent roots → radiculopathy (L5 foot drop pattern, S1 absent ankle reflex)",
      "Cauda equina syndrome — multilevel root compression → bilateral leg symptoms, saddle anesthesia, urinary retention",
      "Conus medullaris syndrome — cord termination injury at L1–L2 with early bladder dysfunction",
      "SLR stretches L5/S1 roots in radiculopathy",
    ],
    boardsPearls: [
      "L4 — knee extension (quads); L5 — dorsiflexion/hip abduction; S1 — plantarflexion/ankle reflex",
      "Sciatic nerve = L4–S3 roots; femoral nerve = L2–L4",
      "Cauda equina = bundle of lumbosacral roots below conus — not the cord itself",
      "Radiculopathy = root lesion; plexopathy = multiple nerves; mononeuropathy = single peripheral nerve",
      "Saddle anesthesia + urinary retention → cauda equina until proven otherwise",
    ],
    distinguishFrom: [
      "Cauda equina (organ) — anatomic horse-tail bundle of roots within thecal sac",
      "Sciatic nerve — peripheral nerve formed from L4–S3 roots after plexus convergence",
      "Lumbosacral plexus — nerve network formed by root rami, not roots themselves",
      "Conus medullaris — terminal spinal cord segment, not individual nerve roots",
      "Filum terminale — fibrous anchor of cord, not functional nerve roots",
    ],
    pediatrics:
      "Tethered cord traction on lumbosacral roots causes progressive leg weakness and bladder dysfunction; conus lies lower in infants (L2–L3) before ascending with growth.",
  },
  {
    id: "femoral-nerve",
    name: "Femoral Nerve",
    etymology: "Latin femur = thigh + Greek neuron = sinew/nerve",
    aliases: [
      "femoral nerve",
      "femoral nerves",
      "nervus femoralis",
      "femoral n",
    ],
    definition:
      "Major branch of the lumbar plexus (L2–L4) that innervates the anterior thigh muscles and provides sensation to the anterior thigh and medial leg via the saphenous nerve.",
    anatomy:
      "Formed from posterior divisions of L2–L4 ventral rami in psoas major; descends lateral to psoas, passes deep to inguinal ligament lateral to femoral artery in femoral triangle; divides into motor branches to iliacus (separate branch), pectineus, sartorius, and quadriceps femoris, and sensory saphenous nerve continuing medially with great saphenous vein.",
    action: [
      "Motor — knee extension (quadriceps femoris), hip flexion (iliacus, sartorius, partial pectineus)",
      "Sensory — anterior and medial thigh (femoral cutaneous branches); medial leg and foot via saphenous nerve",
      "Reflex — patellar (knee-jerk) reflex via L3–L4 arc through femoral nerve to quadriceps",
    ],
    innervation: "L2–L4 spinal nerve fibers from lumbar plexus",
    clinicalRelevance: [
      "Femoral nerve injury — inability to extend knee, weak hip flexion, numbness anterior thigh/medial leg",
      "Retroperitoneal hematoma, psoas abscess, pelvic surgery, or hip arthroplasty can injure nerve in psoas or under inguinal ligament",
      "Diabetic amyotrophy (proximal neuropathy) can affect femoral distribution",
      "Loss of patellar reflex localizes to L3–L4 root or femoral nerve",
    ],
    boardsPearls: [
      "Femoral nerve = L2–L4 — quads (knee extension) + anterior thigh sensation",
      "Saphenous nerve = sensory branch — medial leg/foot (only femoral territory below knee)",
      "Patellar reflex tests L3–L4 via femoral nerve",
      "vs obturator nerve — hip adduction and medial thigh sensation, not knee extension",
      "vs L3/L4 radiculopathy — back pain and SLR; femoral neuropathy is peripheral pattern without root tension signs",
    ],
    distinguishFrom: [
      "Obturator nerve (L2–L4) — hip adduction, medial thigh sensation",
      "Genitofemoral nerve (L1–L2) — cremaster reflex, scrotal/labial sensation",
      "Lateral femoral cutaneous nerve (L2–L3) — meralgia paresthetica, lateral thigh numbness only",
      "Sciatic nerve — posterior thigh/leg; knee flexors and foot, not knee extension",
      "Femoral artery — vascular structure in femoral triangle, not nerve",
    ],
    pediatrics:
      "Femoral nerve injury is rare in children; consider iatrogenic injury after hip surgery or compartment syndrome. Patellar reflex is obtainable in older children for L3–L4 testing.",
  },
  {
    id: "sciatic-nerve",
    name: "Sciatic Nerve",
    etymology: "Greek ischion = hip + Latin -aticus = pertaining to + Greek neuron = nerve",
    aliases: [
      "sciatic nerve",
      "sciatic nerves",
      "nervus ischiadicus",
      "ischiadic nerve",
    ],
    definition:
      "Largest peripheral nerve in the body — formed from L4–S3 lumbosacral plexus roots — supplying the posterior thigh and, via its tibial and common fibular divisions, the entire leg and foot below the knee.",
    anatomy:
      "Exits pelvis through greater sciatic foramen, usually inferior to piriformis; descends posterior thigh between long head of biceps femoris and semimembranosus/semitendinosus; at superior popliteal fossa bifurcates into tibial nerve (medial) and common fibular nerve (lateral). Hamstring muscles (except short head biceps) receive branches from tibial division.",
    action: [
      "Motor — hamstrings (semitendinosus, semimembranosus, long head biceps femoris); all distal leg/foot muscles via tibial (plantarflexion, inversion, toe flexion) and common fibular (dorsiflexion, eversion, toe extension) branches",
      "Sensory — posterior thigh; all leg/foot except medial strip (saphenous) and isolated territories of cutaneous branches",
      "Reflex — ankle jerk (S1) via tibial component",
    ],
    innervation: "L4–S3 spinal nerve roots converging in sacral plexus",
    clinicalRelevance: [
      "Landmark for gluteal IM injection — superolateral quadrant avoids nerve",
      "Posterior hip dislocation stretches/compresses sciatic nerve",
      "Piriformis syndrome — entrapment near greater sciatic foramen",
      "Bifurcation at popliteal fossa explains tibial vs common fibular injury patterns",
    ],
    boardsPearls: [
      "Sciatic nerve = tibial nerve + common fibular (peroneal) nerve",
      "L4–S3 roots; exits inferior to piriformis (usual anatomy)",
      "Foot drop reflects common fibular component; weak plantarflexion reflects tibial component",
      "vs L5/S1 radiculopathy — root compression has back pain/SLR; sciatic neuropathy follows nerve distribution",
      "See sciatic nerve injury entry for traumatic palsy patterns",
    ],
    distinguishFrom: [
      "Sciatic nerve injury — pathologic damage to the nerve, not normal anatomy",
      "Lumbosacral radiculopathy — single root dermatomal pattern with spinal level signs",
      "Femoral nerve — anterior thigh, knee extension",
      "Common fibular nerve — lateral division only; foot drop without hamstring weakness",
      "Tibial nerve — medial division only; plantarflexion weakness and sole sensory loss",
    ],
    pediatrics:
      "Sciatic nerve anatomy is the same in children; posterior hip dislocation after trauma warrants sciatic function testing (dorsiflexion, plantar sensation).",
  },
  {
    id: "common-fibular-nerve",
    name: "Common Fibular Nerve",
    etymology:
      "Latin fibula = clasp/brooch (the bone) + Greek koinos = common + Greek neuron = nerve — lateral terminal branch of the sciatic nerve",
    aliases: [
      "common fibular nerve",
      "common fibular nerves",
      "common peroneal nerve",
      "common peroneal nerves",
      "common fibular n",
      "common peroneal n",
      "lateral popliteal nerve",
      "external popliteal nerve",
    ],
    definition:
      "Lateral terminal branch of the sciatic nerve (L4–S5, predominantly L5) that wraps around the fibular neck and divides into superficial and deep fibular nerves — controlling dorsiflexion and eversion of the foot.",
    anatomy:
      "Arises at superior popliteal fossa as lateral division of sciatic nerve; courses along lateral leg, wraps superficially around fibular neck/neck of fibula just below knee (vulnerable to compression); divides into superficial fibular nerve (lateral compartment muscles, dorsum of foot sensation) and deep fibular nerve (anterior compartment, first web space sensation). Gives lateral sural cutaneous nerve before bifurcation.",
    action: [
      "Superficial fibular branch — eversion of foot; sensation to anterolateral leg and dorsum of foot (except first web space)",
      "Deep fibular branch — dorsiflexion of ankle and extension of toes; sensation to first dorsal web space",
      "Combined common fibular lesion → foot drop with steppage gait",
    ],
    innervation: "L4–S5 fibers (predominantly L5) from sciatic nerve",
    clinicalRelevance: [
      "Most common compressive neuropathy of lower limb at fibular neck",
      "Fibular fracture, leg crossing, cast pressure, weight loss",
      "Foot drop — inability to dorsiflex; steppage gait",
      "See peroneal nerve compression entry for clinical palsy vignettes",
    ],
    boardsPearls: [
      "Common fibular = common peroneal — same nerve, two names",
      "Wraps fibular neck — superficial and vulnerable",
      "Foot drop + preserved ankle inversion (tibial) → common fibular palsy",
      "vs L5 radiculopathy — weak hip abduction, back pain, positive SLR",
      "Bifurcates into superficial and deep fibular nerves",
    ],
    distinguishFrom: [
      "Peroneal nerve compression — clinical syndrome of common fibular injury",
      "Deep fibular nerve — anterior compartment branch only",
      "Superficial fibular nerve — lateral compartment branch only",
      "Tibial nerve — medial sciatic division; plantarflexion and sole sensation",
      "Lateral sural cutaneous nerve — sensory branch given off before bifurcation",
    ],
    pediatrics:
      "Common fibular compression uncommon in children; consider cast pressure or fibular fracture after trauma; bilateral foot drop suggests hereditary neuropathy (CMT).",
  },
  {
    id: "deep-fibular-nerve",
    name: "Deep Fibular Nerve",
    etymology:
      "Latin fibula + Latin profundus = deep + Greek neuron = nerve — anterior compartment branch of the common fibular nerve",
    aliases: [
      "deep fibular nerve",
      "deep fibular nerves",
      "deep peroneal nerve",
      "deep peroneal nerves",
      "anterior tibial nerve",
      "deep fibular n",
      "deep peroneal n",
    ],
    definition:
      "Motor branch of the common fibular nerve supplying the anterior compartment of the leg — primary dorsiflexor of the ankle and extensor of the toes — with sensory innervation to the first dorsal web space.",
    anatomy:
      "Continues from common fibular nerve after it pierces the anterior intermuscular septum; descends on anterior surface of interosseous membrane with anterior tibial artery; innervates tibialis anterior, extensor hallucis longus, extensor digitorum longus, and peroneus tertius; becomes cutaneous at ankle as medial and intermediate dorsal cutaneous nerves supplying first web space.",
    action: [
      "Motor — dorsiflexion of ankle (tibialis anterior); extension of great toe (EHL) and lesser toes (EDL); weak foot inversion (tibialis anterior)",
      "Sensory — first dorsal web space between great toe and second toe (only cutaneous territory of deep fibular)",
      "Isolated deep fibular injury → foot drop with preserved eversion (superficial fibular) and normal dorsum of foot sensation except first web space",
    ],
    innervation: "L4–L5 fibers via common fibular nerve",
    clinicalRelevance: [
      "Anterior compartment syndrome — deep fibular nerve dysfunction with anterior leg pain and foot drop",
      "Tight lateral leg cast or anterior tibial artery injury in fracture settings",
      "Isolated first web space numbness localizes to deep fibular sensory territory",
      "Foot drop from common fibular compression affects both deep and superficial branches",
    ],
    boardsPearls: [
      "Deep fibular = deep peroneal — dorsiflexion + toe extension",
      "First dorsal web space sensation = deep fibular nerve (high-yield localization)",
      "Tibialis anterior is primary dorsiflexor — deep fibular innervation",
      "vs superficial fibular — eversion and dorsum of foot sensation (except first web space)",
      "Anterior compartment muscles = dorsiflexors; lateral compartment = evertors (superficial fibular)",
    ],
    distinguishFrom: [
      "Superficial fibular nerve — peroneus longus/brevis (eversion); dorsum of foot sensation",
      "Common fibular nerve — parent nerve before bifurcation; both deep and superficial deficits",
      "Tibial nerve — plantarflexion and sole sensation, opposite compartment",
      "Saphenous nerve — medial leg/foot sensation from femoral nerve",
    ],
    pediatrics:
      "Anterior compartment syndrome can occur after pediatric tibial fractures or reperfusion injury; foot drop and anterior leg pain warrant urgent fasciotomy evaluation.",
  },
  {
    id: "tibial-nerve",
    name: "Tibial Nerve",
    etymology: "Latin tibia = shin/flute bone + Greek neuron = nerve — medial terminal branch of the sciatic nerve",
    aliases: [
      "tibial nerve",
      "tibial nerves",
      "nervus tibialis",
      "medial popliteal nerve",
      "posterior tibial nerve",
    ],
    definition:
      "Medial terminal branch of the sciatic nerve (L4–S3, predominantly S1–S2) supplying the posterior compartment of the leg and all intrinsic foot muscles — controlling plantarflexion, inversion, and toe flexion.",
    anatomy:
      "Continues through popliteal fossa as medial division of sciatic nerve; descends in deep posterior compartment with posterior tibial artery; gives medial sural cutaneous nerve in popliteal fossa; passes posterior to medial malleolus in tarsal tunnel; divides into medial and lateral plantar nerves in sole of foot (equivalent to ulnar/median hand pattern).",
    action: [
      "Motor — gastrocnemius, soleus (plantarflexion); tibialis posterior (inversion); toe flexors; all intrinsic foot muscles via medial/lateral plantar nerves",
      "Sensory — sole of foot (medial and lateral plantar nerves); medial sural cutaneous branch contributes to sural nerve (lateral calf)",
      "Reflex — ankle jerk (Achilles reflex, S1) via gastrocnemius–soleus arc",
    ],
    innervation: "L4–S3 fibers (predominantly S1–S2) from sciatic nerve",
    clinicalRelevance: [
      "Tarsal tunnel syndrome — compression behind medial malleolus → plantar pain/numbness",
      "Knee dislocation or popliteal fossa trauma can injure tibial nerve",
      "Isolated tibial injury — inability to plantarflex, sole sensory loss, dorsiflexion preserved",
      "Achilles reflex tests S1 via tibial nerve",
    ],
    boardsPearls: [
      "Tibial nerve = medial sciatic division — plantarflexion + sole sensation",
      "Ankle reflex (S1) travels via tibial nerve to gastrocnemius–soleus",
      "Tarsal tunnel = carpal tunnel of the foot — tibial nerve under flexor retinaculum",
      "Medial + lateral plantar nerves = sole innervation (like ulnar/median in hand)",
      "vs common fibular — dorsiflexion/eversion vs plantarflexion/inversion",
      "Medial sural cutaneous nerve from tibial joins lateral sural cutaneous to form sural nerve",
    ],
    distinguishFrom: [
      "Common fibular nerve — dorsiflexion, eversion, dorsum of foot",
      "Sural nerve — formed from sural cutaneous branches; lateral foot/ankle sensation",
      "Saphenous nerve — medial leg from femoral nerve",
      "Posterior femoral cutaneous nerve — posterior thigh skin only",
    ],
    pediatrics:
      "Tarsal tunnel syndrome is uncommon in children; absent ankle reflex in pediatric exam may reflect S1 radiculopathy or tibial neuropathy — interpret with growth and exam cooperation in mind.",
  },
  {
    id: "lateral-sural-cutaneous-nerve",
    name: "Lateral Sural Cutaneous Nerve",
    etymology:
      "Latin lateralis = side + sura = calf + Latin cutis = skin + Greek neuron = nerve — sensory branch from the common fibular nerve",
    aliases: [
      "lateral sural cutaneous nerve",
      "lateral sural cutaneous nerves",
      "lateral cutaneous nerve of calf",
      "lateral cutaneous nerves of calf",
      "sural communicating branch",
      "peroneal communicating branch",
      "lateral sural nerve",
    ],
    definition:
      "Purely sensory branch arising from the common fibular nerve in the popliteal fossa — supplying skin over the upper lateral calf and joining the medial sural cutaneous nerve (from tibial nerve) to form the sural nerve.",
    anatomy:
      "Arises from common fibular nerve before its bifurcation into superficial and deep fibular nerves; descends between the two heads of gastrocnemius; joins medial sural cutaneous branch of tibial nerve (variable anatomy — sural nerve may form from lateral only, medial only, or both) to become sural nerve, which runs subcutaneously along lateral malleolus to supply lateral foot and fifth toe.",
    action: [
      "Sensory — skin of upper lateral calf via lateral sural cutaneous branch",
      "Contributes to sural nerve — lateral ankle, lateral foot, and fifth toe sensation after joining medial sural cutaneous branch",
      "No motor function — pure cutaneous nerve",
    ],
    innervation: "Sensory only — L5–S1 fibers via common fibular nerve origin",
    clinicalRelevance: [
      "Sural nerve graft harvest — uses sural nerve (formed partly from lateral sural cutaneous)",
      "Popliteal fossa surgery or varicose vein procedures can injure sural nerve complex",
      "Lateral calf/ankle numbness after knee surgery suggests sural nerve branch injury",
      "Sural nerve block — ankle/foot procedures along lateral malleolus",
    ],
    boardsPearls: [
      "Lateral sural cutaneous = from common fibular; medial sural cutaneous = from tibial",
      "Together (usually) form sural nerve — lateral foot sensation",
      "Pure sensory — no motor deficit with isolated injury",
      "vs superficial fibular nerve — motor to evertors plus broader dorsum of foot sensation",
      "Sural nerve runs subcutaneously behind lateral malleolus — vulnerable in lateral ankle surgery",
    ],
    distinguishFrom: [
      "Medial sural cutaneous nerve — tibial nerve branch from popliteal fossa",
      "Sural nerve — distal continuation along lateral ankle to foot",
      "Superficial fibular nerve — motor + sensory to anterolateral leg and dorsum of foot",
      "Lateral femoral cutaneous nerve — lateral thigh (meralgia paresthetica), not calf",
      "Saphenous nerve — medial leg from femoral nerve",
    ],
    pediatrics:
      "Sural nerve anatomy is consistent in children; sural nerve graft harvest is occasionally used in pediatric nerve reconstruction procedures.",
  },
  {
    id: "piriformis",
    name: "Piriformis",
    etymology: "Latin pirum = pear + forma = shape — pear-shaped muscle",
    aliases: [
      "piriformis",
      "piriformis muscle",
      "piriformis muscles",
      "musculus piriformis",
    ],
    definition:
      "Pear-shaped external rotator of the hip originating on the anterior sacrum, exiting the pelvis through the greater sciatic foramen, and inserting on the greater trochanter of the femur — the sciatic nerve usually passes inferior to it.",
    anatomy:
      "Origin: pelvic surface of sacrum (S2–S4), sacrotuberous ligament. Insertion: superior aspect of greater trochanter. Exits pelvis via greater sciatic foramen; in ~10–20% of individuals the sciatic nerve pierces the muscle (variant associated with piriformis syndrome).",
    action: [
      "External (lateral) rotation of the thigh at the hip",
      "Abduction of the hip when hip is flexed",
      "Stabilizes femoral head in acetabulum during gait",
    ],
    innervation: "Nerve to piriformis (S1–S2) — branch of sacral plexus",
    clinicalRelevance: [
      "Piriformis syndrome — muscle spasm or hypertrophy compresses sciatic nerve → buttock pain radiating down leg mimicking radiculopathy",
      "Landmark for sciatic nerve course — nerve typically exits inferior to piriformis",
      "Sciatic nerve variant through piriformis increases entrapment risk",
      "Deep gluteal injection approaches must avoid sciatic nerve inferior to piriformis",
    ],
    boardsPearls: [
      "Piriformis — external rotator; sciatic nerve passes inferior to muscle (usual anatomy)",
      "Piriformis syndrome mimics sciatica but pain reproduced with hip internal rotation/stretch",
      "FA favorite — sciatic nerve relationship to piriformis at greater sciatic foramen",
      "vs gluteus medius/minimus — abductors, not primary external rotators in boards vignettes",
      "Sacrospinous and sacrotuberous ligaments border greater sciatic foramen with piriformis",
    ],
    distinguishFrom: [
      "Gluteus maximus — superficial; extends and externally rotates hip but does not entrap sciatic nerve at foramen",
      "Obturator internus — also external rotator exiting lesser sciatic foramen",
      "Quadratus femoris — external rotator inferior to sciatic nerve in gluteal region",
      "Sciatic nerve — neural structure passing near piriformis, not a muscle",
    ],
    pediatrics:
      "Piriformis syndrome is uncommon in children; pediatric sciatica-like leg pain warrants evaluation for disc herniation, spondylolysis, or hip pathology.",
  },
  {
    id: "sciatic-nerve-injury",
    name: "Sciatic Nerve Injury",
    etymology: "Greek ischion = hip + Latin -aticus = pertaining to + Greek neuron = nerve + Latin injuria = wrong/harm",
    aliases: [
      "sciatic nerve injury",
      "sciatic nerve injuries",
      "sciatic nerve palsy",
      "sciatic nerve palsies",
      "sciatic neuropathy",
      "sciatic neuropathies",
      "sciatic nerve damage",
    ],
    definition:
      "Damage to the sciatic nerve (L4–S3 roots coalescing in the pelvis/thigh) — the largest peripheral nerve in the body — causing weakness and sensory loss in the posterior thigh, leg, and foot; the nerve bifurcates into tibial and common peroneal components.",
    anatomy:
      "Formed from lumbosacral plexus (L4–S3); exits pelvis through greater sciatic foramen inferior to piriformis (usually); descends posterior thigh between long head of biceps femoris and semimembranosus/semitendinosus; bifurcates into tibial and common peroneal nerves at superior popliteal fossa.",
    action: [
      "Motor — hamstrings (partial, via tibial division), all muscles below knee via tibial (plantarflexion, toe flexion) and common peroneal (dorsiflexion, eversion) branches",
      "Sensory — posterior thigh, entire leg below knee except medial aspect (saphenous, femoral)",
      "Reflex — ankle jerk (S1, tibial component)",
    ],
    innervation: "L4–S3 spinal roots; tibial and common peroneal divisions below knee",
    clinicalRelevance: [
      "Posterior hip dislocation — sciatic nerve stretched or compressed",
      "IM gluteal injection (if placed too low/medial)",
      "Pelvic fracture, hip arthroplasty, prolonged lithotomy position",
      "Complete injury — foot drop (peroneal), weak plantarflexion (tibial), absent ankle reflex",
      "Piriformis syndrome — entrapment without full sciatic division injury",
    ],
    boardsPearls: [
      "Sciatic nerve = tibial nerve + common peroneal nerve",
      "Posterior hip dislocation → check sciatic nerve function (ankle dorsiflexion, sensation)",
      "Foot drop may reflect peroneal component even with partial sciatic injury",
      "IM injection site — superolateral gluteus to avoid sciatic nerve",
      "SLR positive in radiculopathy; sciatic nerve injury is peripheral neuropathy pattern",
      "vs L5/S1 radiculopathy — root lesion is dermatomal with back pain; sciatic injury follows nerve distribution after bifurcation anatomy",
    ],
    distinguishFrom: [
      "L5 or S1 radiculopathy — back pain, positive SLR, dermatomal pattern from disc herniation",
      "Common peroneal nerve compression — isolated foot drop at fibular head, knee flexion preserved",
      "Tibial nerve injury — plantarflexion weakness, sole sensory loss, dorsiflexion spared",
      "Femoral nerve injury — knee extension weakness, anterior thigh sensory loss",
      "Cauda equina syndrome — bilateral symptoms, saddle anesthesia, bladder dysfunction",
    ],
    pediatrics:
      "Sciatic nerve injury is uncommon in children; consider posterior hip dislocation after trauma, iatrogenic injury during hip procedures, or compartment syndrome with nerve ischemia.",
  },
  {
    id: "peroneal-nerve-compression",
    name: "Peroneal Nerve Compression",
    etymology: "Greek perone = fibula/clasp + Greek neuron = nerve + Latin compressio = pressing together",
    aliases: [
      "peroneal nerve compression",
      "common peroneal nerve compression",
      "common peroneal nerve palsy",
      "common peroneal nerve palsies",
      "fibular nerve compression",
      "fibular nerve palsy",
      "fibular nerve palsies",
      "foot drop",
      "foot drops",
      "peroneal neuropathy",
      "peroneal neuropathies",
    ],
    definition:
      "Compression or injury of the common peroneal (fibular) nerve as it wraps around the fibular neck — the most common mononeuropathy of the lower extremity — causing foot drop and sensory loss over the dorsum of the foot.",
    anatomy:
      "Common peroneal nerve is the lateral division of the sciatic nerve; courses superficially around the fibular neck just below the knee (vulnerable to external compression); divides into deep peroneal (dorsiflexion, toe extension, first web space sensation) and superficial peroneal (eversion, dorsum of foot sensation) branches.",
    action: [
      "Deep peroneal — dorsiflexion of ankle and extension of toes",
      "Superficial peroneal — eversion of foot",
      "Combined lesion → foot drop with steppage gait to clear toes",
      "Sensory loss over anterolateral leg and dorsum of foot (except first web space = deep peroneal)",
    ],
    innervation: "L4–S5 (predominantly L5); superficial and deep peroneal branches",
    clinicalRelevance: [
      "Fibular neck fracture or lateral knee trauma",
      "Prolonged leg crossing, squatting, or cast pressure at fibular head",
      "Weight loss with loss of protective fat pad over fibular neck",
      "Foot drop — inability to dorsiflex ankle; steppage gait",
      "Differentiate from L5 radiculopathy (back pain, SLR, hip abduction weakness)",
    ],
    boardsPearls: [
      "Most common compressive neuropathy of the lower limb",
      "Foot drop + fibular head tenderness → common peroneal nerve palsy",
      "Steppage gait — hip flexion exaggerated to clear dropped foot",
      "vs L5 radiculopathy — L5 root also weakens hip abduction and has back pain/SLR; peroneal palsy is isolated at fibular neck",
      "Ankle inversion (tibial nerve) preserved in isolated peroneal palsy",
      "First dorsal web space sensation = deep peroneal nerve",
    ],
    distinguishFrom: [
      "L5 radiculopathy — back pain, positive SLR, weak hip abduction (gluteus medius)",
      "Sciatic nerve injury — hamstring weakness, broader sensory loss below knee",
      "Tibial nerve injury — plantarflexion weakness, sole sensory loss",
      "Stroke — UMN pattern with hyperreflexia, not isolated foot drop at fibular neck",
      "Compartment syndrome — acute pain, tense compartment, not isolated chronic compression",
    ],
    pediatrics:
      "Peroneal nerve compression is uncommon in children; consider fibular fracture after trauma, cast immobilization pressure, or hereditary neuropathy (CMT) if bilateral or recurrent foot drop.",
  },
];

const musculoskeletalById = new Map(
  MUSCULOSKELETAL.map((entry) => [entry.id, entry]),
);

export function getMusculoskeletalById(
  id: string,
): MusculoskeletalEntry | undefined {
  return musculoskeletalById.get(id);
}

export interface MusculoskeletalAliasMatch {
  alias: string;
  musculoskeletalId: string;
}

export function buildMusculoskeletalAliasIndex(): MusculoskeletalAliasMatch[] {
  const matches: MusculoskeletalAliasMatch[] = [];
  for (const entry of MUSCULOSKELETAL) {
    for (const alias of entry.aliases) {
      matches.push({
        alias: alias.toLowerCase(),
        musculoskeletalId: entry.id,
      });
    }
  }
  return matches.sort((a, b) => b.alias.length - a.alias.length);
}
