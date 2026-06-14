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
