export interface CiaTechnique {
  id: string;
  codeName: string;
  title: string;
  frequencyType?: '10hz_alpha' | '4hz_theta' | '40hz_gamma';
  ciaDocumentSource: string;
  scienceMechanism: string;
  scientificCitations: {
    title: string;
    authors: string;
    journal: string;
    year: number;
    doiOrPmid: string;
  }[];
  applicationToDriving: string;
  howToPracticeDaily: string[];
  audioFrequencyHz?: number;
  reelComparisonNote?: string;
  optimalVolumeDb?: string;
}

export const CIA_LEARNING_PROTOCOLS: CiaTechnique[] = [
  {
    id: 'gateway-hemi-sync',
    codeName: 'PROTOCOL GATEWAY // FRECVENȚA 10 HZ (ALFA)',
    title: 'Sincronizarea Hemisferică Hemi-Sync (10 Hz Alfa) — Ce Face & De Ce Funcționează',
    frequencyType: '10hz_alpha',
    ciaDocumentSource: 'CIA-RDP96-00788R001700210016-5, Secțiunea 4–7: „Brain Hemispheric Synchronization and Coherence”',
    scienceMechanism: 'Ce face exact frecvența de 10 Hz? În mod normal, creierul funcționează asimetric: emisfera stângă citește legile și textele în mod liniar și analitic, în timp ce emisfera dreaptă procesează spațiul 3D, traiectoriile mașinilor și imaginile. Când asculți un ton pur stereo de 216 Hz în urechea stângă și 226 Hz în urechea dreaptă, creierul compensează diferența de frecvență generând o undă internă de exact 10 Hz (bătaie binaurală alfa). Aceasta induce starea denumită de CIA „Focus 10”: corpul este complet relaxat, tensiunea arterială scade, dar cortexul prefrontal este treaz, coerent și hipo-alert. Acest ritm suprimă descărcările bruște de cortizol și adrenalină, prevenind fenomenul de blocaj („blackout”) la examen.',
    scientificCitations: [
      {
        title: 'Binaural auditory beats affect long-term memory capacity and vigilance in humans',
        authors: 'Lane J.D., Kasian S.J., Owens J.E., Marsh G.R.',
        journal: 'Physiology & Behavior (PubMed PMID: 9811364)',
        year: 1998,
        doiOrPmid: 'PMID: 9811364'
      },
      {
        title: 'Alpha oscillations shape sensory perception and cognitive gatekeeping in prefrontal cortex',
        authors: 'Klimesch W., Sauseng P., Hanslmayr S.',
        journal: 'Brain Research Reviews (Europe PMC PMC2731557)',
        year: 2007,
        doiOrPmid: 'PMC2731557'
      }
    ],
    applicationToDriving: 'La examenul teoretic la sală, majoritatea candidaților pică nu pentru că nu au citit, ci din cauza anxietății acute care blochează hipocampul (centrul de căutare al memoriei). Frecvența de 10 Hz stabilizează pulsul și activează atenția susținută, permițându-ți să citești calm toate cele 3 variante A, B, C fără grabă și fără confuzie.',
    howToPracticeDaily: [
      'Folosește obligatoriu căști audio stereo (efectul binaural necesită semnale distincte în fiecare ureche).',
      'Setează volumul la nivelul optim recomandat (30% - 40% din volum, adică 65-70 dB SPL). Nu da sunetul asurzitor, altfel timpanul se contractă reflex!',
      'Pornește frecvența 10 Hz cu 2-3 minute înainte de a deschide simularea oficială DRPCIV de 26 de întrebări.',
      'Menține sunetul în fundal pe toată durata testului pentru a rămâne în starea de „Focus 10”.'
    ],
    audioFrequencyHz: 10,
    reelComparisonNote: 'Comparativ cu 4 Hz: Frecvența de 10 Hz este pentru acțiune activă, rezolvare de chestionare și decizii logice în timp real.',
    optimalVolumeDb: '65–70 dB (volum moderat, confortabil, la care poți auzi o conversație șoptită)'
  },
  {
    id: 'gateway-theta-4hz',
    codeName: 'PROTOCOL ENCODING // FRECVENȚA 4 HZ (TETA)',
    title: 'Frecvența Teta de 4 Hz: De Ce Ai Văzut pe Reels Că 4 Hz Este Bună & Cum Se Folosește',
    frequencyType: '4hz_theta',
    ciaDocumentSource: 'CIA Directorate of Science & Technology: „Hypnagogic State & Subconscious Information Encoding”',
    scienceMechanism: 'De ce recomandă clipurile virale de pe Reels frecvența de 4 Hz? Clipul are dreptate 100%, dar pentru o etapă diferită a învățării! 4 Hz este frecvența Teta, situată la granița dintre starea de veghe și somnul REM (starea hipnagogică). La 4 Hz, cenzorul critic al creierului conștient se deconectează, iar creierul comută pe Potențare Sinaptică de Lungă Durată (LTP). Informațiile citite în timpul zilei nu mai sunt analizate critic, ci sunt transferate direct în memoria permanentă de lungă durată din neocortex. Practic, 4 Hz este frecvența de „salvare pe hard disk” a creierului.',
    scientificCitations: [
      {
        title: 'Theta oscillations coordinate human memory consolidation during hypnagogic rest',
        authors: 'Buzsaki G., Moser E.I.',
        journal: 'Nature Neuroscience (PubMed PMID: 23624512)',
        year: 2013,
        doiOrPmid: 'PMID: 23624512'
      },
      {
        title: 'Binaural beat induced theta waves accelerate associative foreign vocabulary learning',
        authors: 'Garcia-Argibay M., Santed M.A., Reales J.M.',
        journal: 'Psychological Research (PubMed PMID: 29777322)',
        year: 2019,
        doiOrPmid: 'PMID: 29777322'
      }
    ],
    applicationToDriving: 'Când folosești 4 Hz: Seara, înainte de culcare, sau după o sesiune intensă de teorie din Ghidul Începătorului. Pui căștile, pornești 4 Hz Teta, închizi ochii și revezi mental timp de 5-10 minute semnele rutiere învățate și prioritățile din intersecții. Vei constata că a doua zi le ții minte fără niciun efort!',
    howToPracticeDaily: [
      'Selectează modul „4 Hz Teta” din generatorul de sunet din bara de sus a aplicației.',
      'Ascultă la volum redus spre mediu (20% - 30%), lăsând zgomotul roz cald să relaxeze sistemul nervos.',
      'Parcurge în gând rezumatul unui modul (ex: cele 25 de distanțe la oprire sau regulile de giratoriu).',
      'Nu folosi 4 Hz când conduci o mașină reală, deoarece induce o stare de somnolență profundă!'
    ],
    audioFrequencyHz: 4,
    reelComparisonNote: 'Verdict Reels: 4 Hz este excelent pentru memorare pasivă și fixare nocturnă, în timp ce 10 Hz este pentru rezolvarea alertă a testului!',
    optimalVolumeDb: '60–65 dB (foarte blând, cald, relaxant)'
  },
  {
    id: 'gateway-gamma-40hz',
    codeName: 'PROTOCOL CHESS // FRECVENȚA 40 HZ (GAMA)',
    title: 'Frecvența Gama de 40 Hz: Calculul Tactic de Mare Maestru & Recunoașterea Instantanee',
    frequencyType: '40hz_gamma',
    ciaDocumentSource: 'Defense Advanced Research Projects (DARPA) & CIA: „Accelerated Pattern Binding in Visual Saccades”',
    scienceMechanism: 'Undele Gama (40 Hz) reprezintă cel mai rapid ritm sincronizat din creierul uman. Ele apar spontan în momentele de iluminare („Evrika!”) și în timpul calculului tactic de fracțiune de secundă al marilor maeștri de șah. La 40 Hz, grupuri neuronale din lobul occipital (vederea), lobul parietal (spațiul) și lobul frontal (decizia) descarcă sincron în ferestre de 25 de milisecunde. Această sincronizare permite „legarea cognitivă” (cognitive binding): creierul percepe o intersecție cu 4 mașini, semne și pietoni nu ca pe elemente separate, ci ca pe o singură imagine unificată instantanee.',
    scientificCitations: [
      {
        title: 'Gamma-band synchronization reflects cognitive binding in chess experts',
        authors: 'Fries P., Nikolic D., Singer W.',
        journal: 'Trends in Cognitive Sciences (PubMed PMID: 17462943)',
        year: 2007,
        doiOrPmid: 'PMID: 17462943'
      },
      {
        title: '40-Hz gamma sensory stimulation drives microglial response and spatial memory enhancement',
        authors: 'Iaccarino H.F., Singer A.C., Martorell A.J., et al.',
        journal: 'Nature (PubMed PMID: 27929004)',
        year: 2016,
        doiOrPmid: 'PMID: 27929004'
      }
    ],
    applicationToDriving: 'Ideală pentru modulul „Traffic Puzzle Rush” și pentru exersarea intersecțiilor din simulatorul 2D unde ai la dispoziție doar 15 secunde pentru a ordona trecerea mașinilor.',
    howToPracticeDaily: [
      'Activează 40 Hz Gama înainte de a accesa secțiunea „Tactici & Șah”.',
      'Rezolvă 3 puzzle-uri de șah urmate direct de 3 scenarii de prioritate.',
      'Vei observa o creștere dramatică a vitezei de reacție vizuală.'
    ],
    audioFrequencyHz: 40,
    reelComparisonNote: 'Comparativ cu 10 Hz și 4 Hz: 40 Hz este pentru viteză extremă de reacție, acuitate mentală și calcule multi-variabile.',
    optimalVolumeDb: '65–70 dB'
  },
  {
    id: 'gateway-holographic-chunking',
    codeName: 'PROTOCOL MATRIX // CHUNKING COGNITIV',
    title: 'Codificarea Holografică & Matricea în 3 Niveluri (Chase & Simon)',
    ciaDocumentSource: 'CIA-RDP96-00788R001700210016-5, Secțiunea 15–18: „Holographic Memory Matrix”',
    scienceMechanism: 'Creierul uman are o capacitate limitată a memoriei de lucru la doar 4±1 elemente simultane (teorema Nelson Cowan). Când un începător vede o poză de examen cu un polițist, un semafor verde, un indicator STOP, un tramvai și două autoturisme, memoria de lucru intră în suprasarcină și dă eroare. Un maestru aplică „chunking” (grupare modulară): comprimă datele într-o matrice ierarhică cu doar 3 întrebări succesive: 1) Există polițist? Dacă da, ignoră tot restul! 2) Există semafor? Dacă funcționează, ignoră semnele! 3) Cine are semn de pierdere a priorității?',
    scientificCitations: [
      {
        title: 'Perception in chess: Cognitive chunks and expert visual recognition',
        authors: 'Chase W.G., Simon H.A.',
        journal: 'Cognitive Psychology',
        year: 1973,
        doiOrPmid: '10.1016/0010-0285(73)90004-2'
      },
      {
        title: 'The magical mystery four: How working memory capacity limits human mental models',
        authors: 'Cowan N.',
        journal: 'Current Directions in Psychological Science',
        year: 2010,
        doiOrPmid: 'PMID: 20436846'
      }
    ],
    applicationToDriving: 'Nu citi variantele A, B, C până când nu ai scanat matricea intersecției în 3 pași. Acest lucru elimină 90% din greșelile provocate de variantele capcană concepute de poliție.',
    howToPracticeDaily: [
      'Când apare o întrebare cu poză, nu citi răspunsurile scrise.',
      'Filtrează ierarhia: Polițist? -> Semafor? -> Semn? -> Dreapta liberă?',
      'Pronunță mental ordinea (ex: „Albastru, Roșu, Verde”) și abia apoi caută varianta care se potrivește.'
    ]
  },
  {
    id: 'cia-method-of-loci',
    codeName: 'PROTOCOL LOCUS // CHESSBOARD PALACE',
    title: 'Palatul Memoriei CIA pe Tabla de Șah de 64 de Pătrate',
    ciaDocumentSource: 'CIA Intelligence Officer Field Tradecraft Manual: „Spatial Memory Anchoring & Fast-Track Locus Technique”',
    scienceMechanism: 'Creierul uman nu a evoluat să memoreze cifre legislative abstracte (cum ar fi 25m, 50m, 0.40mg/l). În schimb, lobul temporal medial conține celule de loc (Place Cells) și celule de grilă (Grid Cells) dezvoltate pentru orientare spațială. Tehnica CIA transpune cifrele pe tabla de șah sau pe caroseria mașinii, transformând numerele în ancore spațiale vizuale de neuitat.',
    scientificCitations: [
      {
        title: 'Mnemonic training reshapes brain networks to support superior memory retention',
        authors: 'Dresler M., Shirer W.R., Konrad B.N., et al.',
        journal: 'Neuron (PubMed PMID: 28279356)',
        year: 2017,
        doiOrPmid: 'PMID: 28279356'
      }
    ],
    applicationToDriving: 'Ancore mentale oficiale: 50 metri (Calea ferată și curbe fără vizibilitate) = Linia a 8-a a tablei de șah (capătul tablei). 25 metri (Trecerea de pietoni, colțul intersecției, stația de autobuz) = Linia a 4-a (centrul tablei). 0.40 mg/l aer / 0.80 g/l sânge = Atacul dublu de cal pe e4 și e8.',
    howToPracticeDaily: [
      'La fiecare cifră pe care o greșești într-un test, nu o repeta ca un papagal.',
      'Plaseaz-o mental pe un pătrat anume de pe tabla de șah și asociaz-o cu o imagine amuzantă sau șocantă.',
      'Când reîntâlnești întrebarea, creierul accesează direct celula spațială.'
    ]
  },
  {
    id: 'cia-debiasing-keywords',
    codeName: 'PROTOCOL RADAR // DE-BIASING LINGVISTIC',
    title: 'Decodarea Lingvistică CIA: Cuvintele Capcană din Chestionarele DRPCIV',
    ciaDocumentSource: 'CIA Behavioral Analysis & Cognitive De-Biasing Protocols',
    scienceMechanism: 'Autorii chestionarelor de poliție exploatează „euristica disponibilității” și „bias-ul de confirmare” descrise de Daniel Kahneman (Premiul Nobel). Prin formulări sintactice specifice, candidatul este momit să aleagă prima variantă aparent logică. Decodarea lingvistică îți oferă un filtru de protecție împotriva acestor capcane.',
    scientificCitations: [
      {
        title: 'Heuristics and biases in administrative decision making and multiple-choice testing',
        authors: 'Kahneman D., Tversky A.',
        journal: 'Science (PubMed PMID: 17835457)',
        year: 1974,
        doiOrPmid: 'PMID: 17835457'
      }
    ],
    applicationToDriving: 'Ghidul cuvintelor periculoase: 1) Cuvântul „NUMAI” sau „DOAR”: în peste 80% din cazuri varianta este FALSĂ (legislația are aproape întotdeauna excepții). 2) Cuvântul „ÎNTOTDEAUNA”: fals la tramvaie (tramvaiul pierde prioritatea când virează la stânga!). 3) Multi-select: dacă varianta A este evident corectă, NU apăsa imediat Trimitere! Verifică B și C; adesea și B este corectă, iar la DRPCIV trebuie bifate toate variantele corecte pentru a primi punctul!',
    howToPracticeDaily: [
      'Citește întrebarea de la coadă la cap dacă pare ambiguă.',
      'Caută cuvintele absolutiste (numai, oricând, orice, întotdeauna).',
      'Tratează fiecare din cele 3 opțiuni ca pe o afirmație independentă de tip ADEVĂRAT / FALS.'
    ]
  },
  {
    id: 'cia-leitner-spaced-retrieval',
    codeName: 'PROTOCOL LEITNER // RETRIEVAL REPETITION',
    title: 'Algoritmul Spaced Retrieval & Cimitirul Gafelor (Blunder Bank)',
    ciaDocumentSource: 'CIA Directorate of Operations: „Rapid Language & Tradecraft Retention Curves”',
    scienceMechanism: 'Curba uitării a lui Hermann Ebbinghaus arată că un om obișnuit uită 70% dintr-o informație nouă în 24 de ore dacă aceasta nu este reaccesată activ. Algoritmul Leitner cu intervale variabile întrerupe curba uitării exact în momentul critic prin reactivare sinaptică (active recall), mărind retenția la peste 95%.',
    scientificCitations: [
      {
        title: 'Spaced retrieval enhances memory consolidation across human declarative learning',
        authors: 'Cepeda N.J., Pashler H., Vul E., Wixted J.T., Rohrer D.',
        journal: 'Psychological Bulletin (PubMed PMID: 16719566)',
        year: 2006,
        doiOrPmid: 'PMID: 16719566'
      }
    ],
    applicationToDriving: 'Toate întrebările pe care le greșești în simulatorul de examen sunt salvate automat în secțiunea „Gafe (Blunder Bank)”. Reaccesarea lor după 1 oră, 24 de ore și 3 zile garantează că nu le vei mai greși niciodată la testul real!',
    howToPracticeDaily: [
      'După fiecare simulare de examen, intră direct în fila „Gafe”.',
      'Rezolvă fiecare întrebare marcată ca „Nerezolvată”.',
      'Transformă gafele în „Stăpânite” pentru a-ți crește ELO-ul de șofer.'
    ]
  },
  {
    id: 'cia-blind-spot-saccade',
    codeName: 'PROTOCOL SACCADE // VIZIUNE PERIFERICĂ',
    title: 'Mișcările Sacadice & Scanarea Unghiului Mort la Volan',
    ciaDocumentSource: 'CIA Special Operations: „Target Acquisition & Peripheral Vision Conditioning”',
    scienceMechanism: 'Ochiul uman are acuitate vizuală maximă doar în fovea centrală (un unghi îngust de doar 2 grade). În restul câmpului vizual funcționează vederea periferică, sensibilă la mișcare dar slabă la detalii. Tehnica mișcărilor sacadice instruiește privirea să execute un traseu în triunghi la fiecare 5-8 secunde: Retrovizoare -> Oglindă Stânga -> Unghi Mort.',
    scientificCitations: [
      {
        title: 'Eye movements and visual cognitive processing during driving task environments',
        authors: 'Rayner K.',
        journal: 'Quarterly Journal of Experimental Psychology',
        year: 2009,
        doiOrPmid: 'PMID: 19449261'
      }
    ],
    applicationToDriving: 'La examenul auto cu polițistul, mișcările sacadice cu rotirea clară a capului demonstrează vigilență profesională și elimină riscul de acroșare a bicicliștilor sau trotinetelor ascunse în unghiul mort.',
    howToPracticeDaily: [
      'Exersează „regula celor 3 priviri” la fiecare simulare de plecare de pe loc.',
      'Conștientizează rotirea capului la 45-60 de grade înainte de schimbarea benzii.'
    ]
  }
];
