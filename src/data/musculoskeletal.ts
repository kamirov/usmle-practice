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
