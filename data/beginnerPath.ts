export interface BeginnerLesson {
  id: string;
  moduleIndex: number;
  title: string;
  subtitle: string;
  estimatedMinutes: number;
  iconName: string;
  summary: string;
  coreConcepts: {
    heading: string;
    body: string;
    bulletPoints: string[];
    proTip: string;
  }[];
  interactiveCheck: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export const BEGINNER_LEARNING_PATH: BeginnerLesson[] = [
  {
    id: 'mod-01-cockpit',
    moduleIndex: 1,
    title: 'Modulul 1: Anatomia Postului de Conducere & Cele 3 Pedale',
    subtitle: 'De la zero absolut la stăpânirea fizică a cabinei de conducere',
    estimatedMinutes: 8,
    iconName: 'Gauge',
    summary: 'Înțelegerea celor 3 pedale (Ambreiaj, Frână, Accelerație), a punctului de cuplare, reglajului scaunului, centurii de siguranță și eliminării unghiului mort din oglinzi.',
    coreConcepts: [
      {
        heading: 'Cele 3 Pedale (Stânga spre Dreapta: A-F-A)',
        body: 'Piciorul stâng operează EXCLUSIV ambreiajul! Piciorul drept împarte frâna și accelerația. Niciodată nu folosi piciorul stâng pe frână la o mașină manuală.',
        bulletPoints: [
          'Ambreiajul (stânga): Decuplează motorul de cutia de viteze. Se calcă ferm până la podea când schimbi viteza sau oprești pe loc.',
          'Punctul de forfecare (Bite point): Momentul în care mașina începe să vibreze fin și vrea să înainteze. Aici blochezi piciorul timp de 2 secunde înainte de a-l elibera complet!',
          'Frâna (mijloc): Încetinește mașina. Se acționează progresiv cu călcâiul sprijinit pe podea.',
          'Accelerația (dreapta): Alimentează motorul. Se apasă fin și constant.'
        ],
        proTip: 'Când oprești mașina complet: calcă întâi frâna ușor, iar când viteza scade sub 15 km/h calcă ambreiajul la podea ca să nu moară motorul!'
      },
      {
        heading: 'Reglajul Scaunului, Oglinzilor & Unghiul Mort',
        body: 'Oglinda retrovizoare centrală trebuie să încadreze complet luneta spate. Oglinzile laterale trebuie reglate astfel încât să vezi doar o fărâmă (mânerul ușii spate) din propria mașină.',
        bulletPoints: [
          'Reglaj scaun: Cu ambreiajul apăsat la fund, genunchiul stâng trebuie să rămână ușor flexat (nu complet întins).',
          'Reglaj volan: Când întinzi brațele înainte peste volan, încheietura mâinii trebuie să se sprijine pe marginea superioară a volanului.',
          'Unghiul mort (Blind spot): Zona lateral-spate pe care oglinzile nu o reflectă.',
          'Verificarea peste umăr: Înainte de orice plecare de pe loc sau schimbare de bandă, rotești capul 45 de grade spre geamul lateral.'
        ],
        proTip: 'Regula celor 3 priviri: Oglindă centrală -> Oglindă laterală -> Privire peste umăr -> Semnalizare -> Manevră.'
      }
    ],
    interactiveCheck: {
      question: 'Cu ce picior se apasă pedala de frână la o mașină cu transmisie manuală?',
      options: [
        'Exclusiv cu piciorul drept (care împarte frâna și accelerația)',
        'Cu piciorul stâng, pentru a reacționa mai rapid',
        'Cu ambele picioare simultan la frânare de urgență'
      ],
      correctIndex: 0,
      explanation: 'Piciorul stâng acționează exclusiv pedala de ambreiaj. Piciorul drept gestionează atât frâna cât și accelerația pentru a preveni călcarea simultană a ambelor pedale.'
    }
  },
  {
    id: 'mod-02-moving-off',
    moduleIndex: 2,
    title: 'Modulul 2: Plecarea Lină de pe Loc & Găsirea Punctului de Forfecare',
    subtitle: 'Cum pleci fără să smucești și fără să oprești motorul niciodată',
    estimatedMinutes: 9,
    iconName: 'Sliders',
    summary: 'Sincronizarea ambreiajului cu accelerația. De ce se oprește motorul începătorilor și secretul fizic al menținerii pedalei nemișcate timp de 2 secunde.',
    coreConcepts: [
      {
        heading: 'Plecarea Lină de pe Loc (Formula celor 4 Pași)',
        body: 'Oprirea motorului („moartea motorului”) se întâmplă doar când ridici piciorul stâng prea repede din punctul de forfecare:',
        bulletPoints: [
          'Pasul 1: Calcă ambreiajul la podea cu piciorul stâng și cuplează Treapta 1 (împinge spre stânga și înainte).',
          'Pasul 2: Apasă foarte fin accelerația până motorul atinge 1500 RPM (se aude un zumzet constant).',
          'Pasul 3: Ridică ambreiajul încet până simți că botul mașinii se ridică ușor (punctul de forfecare). OPREȘTE PICIORUL ACOLO 2 SECUNDE!',
          'Pasul 4: Mașina s-a pus în mișcare; acum poți elibera restul cursei ambreiajului lin și accelerezi.'
        ],
        proTip: 'Nu te speria dacă mașina trepidează; secretul absolut este să NU dai drumul brusc ambreiajului când simți că se mișcă!'
      },
      {
        heading: 'De Ce Moare Motorul și Cum Îl Repornești Calm',
        body: 'Dacă motorul s-a oprit, nu intra în panică. Examinatorul sau șoferii din spate nu te vor penaliza grav pentru o oprire calmă repornită corect:',
        bulletPoints: [
          'Calcă imediat ambreiajul și frâna pentru ca mașina să nu se deplaseze necontrolat.',
          'Scoate maneta la punctul mort (liber) sau ține ambreiajul călcat la podea.',
          'Răsucește cheia de contact înapoi pe poziția 0, apoi pornește motorul din nou.',
          'Semnalizează, asigură-te și reia manevra cu mai multă finețe.'
        ],
        proTip: 'La examenul auto cu polițistul, oprirea accidentală a motorului se penalizează doar cu 3 puncte (ai voie 20 în total). Panica este singurul pericol real!'
      }
    ],
    interactiveCheck: {
      question: 'Ce trebuie să faci cu pedala de ambreiaj în secunda în care mașina începe să se pună în mișcare la plecarea de pe loc?',
      options: [
        'Să îi dai drumul imediat până sus pentru a nu uza discul',
        'Să menții piciorul nemișcat în punctul de forfecare timp de 2-3 secunde până mașina prinde rulaj',
        'Să îl apeși din nou la podea și să frânezi'
      ],
      correctIndex: 1,
      explanation: 'În momentul în care discul de ambreiaj cuplează volanta motorului, forțele trebuie egalizate. Menținerea pedalei nemișcate timp de 2-3 secunde asigură o plecare lină și previne oprirea motorului.'
    }
  },
  {
    id: 'mod-03-gears-rpm',
    moduleIndex: 3,
    title: 'Modulul 3: Cutia de Viteze în H, Schimbarea Treptelor & Frâna de Motor',
    subtitle: 'Relația dintre viteză, turație (RPM) și utilizarea optimă a transmisiei',
    estimatedMinutes: 10,
    iconName: 'Shapes',
    summary: 'Cum funcționează schema în H a cutiei de viteze, când se trece în treptele superioare (2000-2500 RPM), cum se retrogradează și ce este frâna de motor.',
    coreConcepts: [
      {
        heading: 'Schema în H și Corelația Viteză - Treaptă',
        body: 'Fiecare treaptă de viteză are un interval optim de funcționare pentru a proteja motorul și a menține controlul:',
        bulletPoints: [
          'Treapta 1 (0 – 20 km/h): Doar pentru punerea mașinii în mișcare de pe loc sau manevre foarte lente de parcare.',
          'Treapta a 2-a (20 – 40 km/h): Pentru viraje la 90 grade în intersecții, sensuri giratorii aglomerate și circulație lentă.',
          'Treapta a 3-a (40 – 60 km/h): Treapta principală de rulare în oraș pe bulevarde și străzi drepte.',
          'Treapta a 4-a (60 – 80 km/h): Pe drumuri naționale, bulevarde largi și ieșiri din localitate.',
          'Treapta a 5-a și a 6-a (peste 80-90 km/h): Pe drumuri europene, drumuri expres și autostrăzi.'
        ],
        proTip: 'La schimbarea vitezelor: ia piciorul de pe accelerație -> calcă ambreiajul la fund -> schimbă viteza cu mișcare calmă -> eliberează ambreiajul -> reapasă accelerația.'
      },
      {
        heading: 'Frâna de Motor: De Ce Salvează Vieți la Coborâre și pe Polei',
        body: 'Când iei piciorul de pe accelerație fără să calci ambreiajul, compresia motorului încetinește natural roțile:',
        bulletPoints: [
          'La coborârea unei pante lungi: Cobori în aceeași treaptă în care ai fi urcat (treapta 2 sau 3). Frânele nu se supraîncălzesc și nu își pierd eficiența.',
          'Pe polei sau zăpadă: Frâna de motor previne blocarea roților și derapajul periculos.',
          'Economie de combustibil: Când ești în frână de motor, injecția taie alimentarea cu carburant complet (consum 0.0 L/100km).'
        ],
        proTip: 'Nu scoate niciodată mașina pe liber (la punctul mort) când cobori o pantă sau te apropii cu viteză mare de o intersecție!'
      }
    ],
    interactiveCheck: {
      question: 'Ce este recomandat să faci atunci când cobori o pantă lungă și abruptă pentru a menține controlul mașinii?',
      options: [
        'Să scoți maneta la punctul mort și să ții apăsată frâna continuu',
        'Să folosești o treaptă inferioară de viteză pentru a beneficia de frâna de motor',
        'Să oprești motorul pentru a economisi combustibil'
      ],
      correctIndex: 1,
      explanation: 'Coborârea în treaptă inferioară activează frâna de motor, prevenind supraîncălzirea discurilor de frână și pierderea capacității de frânare.'
    }
  },
  {
    id: 'mod-04-hill-start-steering',
    moduleIndex: 4,
    title: 'Modulul 4: Plecarea din Rampă, Frâna de Mână & Tehnica Volanului',
    subtitle: 'Controlul mașinii pe înclinații abrupte și manevrarea sigură a direcției',
    estimatedMinutes: 9,
    iconName: 'Navigation',
    summary: 'Plecarea din rampă cu frâna de mână sau din pedale, poziția mâinilor pe volan (ora 9 și 15) și evitarea manevrelor greșite în viraje.',
    coreConcepts: [
      {
        heading: 'Plecarea din Rampă cu Frâna de Mână',
        body: 'Când te afli pe o pantă înclinată și trebuie să pleci fără să te rostogolești înapoi în mașina din spate:',
        bulletPoints: [
          'Pasul 1: Asigură mașina cu frâna de mână trasă complet în sus.',
          'Pasul 2: Calcă ambreiajul la podea și cuplează Treapta 1.',
          'Pasul 3: Accelerează fin la aproximativ 1800-2000 RPM (motorul are nevoie de mai mult cuplu în rampă).',
          'Pasul 4: Ridică ambreiajul până la punctul de forfecare. Vei simți că botul mașinii se ridică și vrea să înainteze.',
          'Pasul 5: Apasă butonul frânei de mână și coboar-o lin. Mașina va pleca înainte fără să alunece nici măcar un centimetru înapoi!'
        ],
        proTip: 'La examenul auto practic, deplasarea mașinii înapoi cu mai mult de 20-30 cm este penalizată de examinator!'
      },
      {
        heading: 'Poziția Corectă a Mâinilor pe Volan (Ora 9:15)',
        body: 'Mâinile se țin pe volan în dreptul orelor 9 și 15 (sau 10 și 14). Degetele mari rămân pe conturul volanului, nu băgate în interiorul spițelor:',
        bulletPoints: [
          'În caz de declanșare a airbag-ului, dacă ai mâinile pe interior sau la ora 12, forța explozivă a airbag-ului îți poate fractura brațele.',
          'Tehnica virajului: Mâinile trag și împing volanul („pull-push”) sau se întrepătrund controlat pe exterior.',
          'Nu întoarce niciodată volanul cu palma apăsată pe el („manevra de spălat geamuri”) la examenul auto!'
        ],
        proTip: 'După finalizarea virajului, însoțește volanul când revine la poziția dreaptă; nu îi da drumul complet să sară liber din mâini.'
      }
    ],
    interactiveCheck: {
      question: 'Care este poziția optimă și recomandată a mâinilor pe volan pentru siguranță și control maxim?',
      options: [
        'La orele 9 și 15, cu ambele mâini pe marginea exterioară a volanului',
        'La ora 12 cu o singură mână, pentru lejeritate',
        'La orele 6 și 6, ținând volanul doar din partea de jos'
      ],
      correctIndex: 0,
      explanation: 'Poziția 9:15 oferă cea mai mare forță de viraj și manevrabilitate și este sigură în cazul declanșării bruște a airbag-ului frontal.'
    }
  },
  {
    id: 'mod-05-hierarchy-signals',
    moduleIndex: 5,
    title: 'Modulul 5: Ierarhia Semnalizării Rutiere — Piramida Priorităților',
    subtitle: 'Cine are comanda supremă când semaforul, polițistul și semnele se contrazic',
    estimatedMinutes: 10,
    iconName: 'ShieldAlert',
    summary: 'Ordinea strictă a priorității semnalelor rutiere conform legii românești: Polițist > Semnale speciale luminoase/sonore > Semafor > Indicatoare > Marcaje > Regula de dreapta.',
    coreConcepts: [
      {
        heading: 'Piramida celor 6 Niveluri de Comandă',
        body: 'Când te apropii de o intersecție, aplici regula supremă a ierarhiei conform Art. 31 din OUG 195/2002:',
        bulletPoints: [
          'Nivelul 1 (SUPREM): Semnalele, indicațiile și dispozițiile polițistului rutier. Anulează absolut tot (semafoare, semne, reguli)!',
          'Nivelul 2: Semnalele speciale de avertizare luminoase (roșu/albastru) și sonore ale mașinilor de poliție, pompieri, ambulanță.',
          'Nivelul 3: Semnalizarea temporară pentru lucrări (indicatoare cu fundal galben). Are prioritate față de semnalizarea permanentă!',
          'Nivelul 4: Semnalele luminoase ale semaforului electric.',
          'Nivelul 5: Indicatoarele rutiere de prioritate (Cedează, Stop, Drum cu prioritate).',
          'Nivelul 6: Marcajele rutiere aplicate pe carosabil.',
          'Nivelul de bază: Regula priorității de dreapta (se aplică doar dacă niciunul din nivelurile superioare nu funcționează).'
        ],
        proTip: 'Capcană clasică de examen: Semaforul arată VERDE, dar polițistul îți arată brațul ridicat vertical (OPRIRE). Ești OBLIGAT să oprești!'
      },
      {
        heading: 'Semnalele Esențiale ale Polițistului Rutier',
        body: 'Semnalele corporale ale agentului de poliție trebuie recunoscute instantaneu:',
        bulletPoints: [
          'Brațul ridicat vertical: Înseamnă „OPRIRE” pentru toți participanții care se apropie, din toate direcțiile!',
          'Brațul drept întins orizontal: Înseamnă „OPRIRE” pentru cei care vin din spate.',
          'Brațul stâng întins orizontal: Înseamnă „OPRIRE” pentru cei care vin din față.',
          'Ambele brațe întinse orizontal: Înseamnă „OPRIRE” pentru cei care vin atât din față, cât și din spate. Vehiculele care vin din lateral au voie să treacă paralel cu umerii săi.',
          'Balansarea pe verticală a unui baston sau dispozitiv reflectorizant pe timp de noapte: Înseamnă „OPRIRE”!'
        ],
        proTip: 'Dacă polițistul lasă brațele în jos după ce le-a avut întinse orizontal, poziția înseamnă în continuare OPRIRE pentru cei din față și din spate!'
      }
    ],
    interactiveCheck: {
      question: 'Dacă semaforul electric indică lumina verde, dar sub semafor există indicatorul „Oprire” (STOP), cum procedezi?',
      options: [
        'Oprești obligatoriu la indicatorul STOP, semnele având prioritate',
        'Treci prin intersecție respectând semnalul verde al semaforului, acesta având prioritate față de indicator',
        'Oprești și acorzi prioritate de dreapta tuturor vehiculelor'
      ],
      correctIndex: 1,
      explanation: 'Semaforul electric se află pe o treaptă superioară indicatorului rutier în ierarhia legală. Indicatoarele de prioritate instalate sub semafoare se respectă doar atunci când semaforul este defect sau clipește galben.'
    }
  },
  {
    id: 'mod-06-intersections-priority',
    moduleIndex: 6,
    title: 'Modulul 6: Intersecții Dirijate & Nedirijate: Regula de Dreapta și Virajul la Stânga',
    subtitle: 'Matematica acordării de prioritate: cum analizezi orice intersecție în 3 secunde',
    estimatedMinutes: 11,
    iconName: 'GitFork',
    summary: 'Aplicarea riguroasă a priorității de dreapta în intersecții nedirijate, virajul la stânga și ocolirea centrului imaginar, precum și excepțiile tramvaiului.',
    coreConcepts: [
      {
        heading: 'Regula Priorității de Dreapta (Art. 57)',
        body: 'În orice intersecție cu circulație nedirijată (fără semne, fără semafor, fără polițist), conducătorul este obligat să acorde prioritate de trecere vehiculelor care vin din partea sa dreaptă:',
        bulletPoints: [
          'Dacă virezi la dreapta: dreapta ta este bordura sau trotuarul, deci nu ai pe nimeni pe dreapta; treci primul!',
          'Dacă mergi înainte: verifici vehiculul care vine din brațul drept al intersecției și îi acorzi prioritate.',
          'Dacă virezi la stânga: trebuie să acorzi prioritate atât celor din dreapta ta, cât și celor care vin din sens opus (față) și merg înainte sau virează la dreapta!'
        ],
        proTip: 'Când 4 vehicule sosesc simultan într-o intersecție nedirijată, toți au pe cineva în dreapta! Legea cere înțelegere reciprocă sau ca primul să înainteze până la centrul intersecției pentru a debloca lanțul.'
      },
      {
        heading: 'Virajul la Stânga și Ocolirea Centrului Imaginar',
        body: 'Conform normelor europene și Codului Rutier român, la efectuarea virajului la stânga în intersecții, vehiculele trec unul prin fața celuilalt, ocolind centrul imaginar prin stânga:',
        bulletPoints: [
          'Cele două mașini care virează la stânga din sensuri opuse nu se mai învârt una în jurul celeilalte; ele trec tangențial, fiecare lăsând centrul imaginar în dreapta sa.',
          'Atenție maximă la vehiculele ascunse în spatele celeilalte mașini care virează (unghiul mort al intersecției)!',
          'La intrarea pe noua stradă, ești obligat să acorzi prioritate pietonilor care traversează regulamentar pe trecerea de pietoni.'
        ],
        proTip: 'Nu tăia colțul virajului la stânga intrând pe sensul opus de mers al străzii pe care intri; la examen este motiv de respingere instantanee!'
      }
    ],
    interactiveCheck: {
      question: 'Când efectuezi un viraj la stânga într-o intersecție nedirijată, cui ești obligat să acorzi prioritate de trecere?',
      options: [
        'Doar vehiculelor care vin din spatele tău',
        'Vehiculelor care vin din dreapta ta, precum și celor din sens opus care merg înainte sau virează la dreapta',
        'Doar pietonilor, autovehiculele din față trebuind să aștepte'
      ],
      correctIndex: 1,
      explanation: 'Virajul la stânga presupune traversarea sensului opus de mers. Ești obligat să respecți prioritatea de dreapta și să acorzi prioritate vehiculelor din sens opus care își continuă traseul drept sau fac dreapta.'
    }
  },
  {
    id: 'mod-07-roundabout-guide',
    moduleIndex: 7,
    title: 'Modulul 7: Noul Ghid al Sensului Giratoriu 2024–2026',
    subtitle: 'Modificările legislative recente: încadrarea pe benzi, părăsirea inelului și semnalizarea',
    estimatedMinutes: 10,
    iconName: 'RotateCcw',
    summary: 'Codul Rutier a clarificat definitiv regulile sensului giratoriu: cum se acordă prioritate la intrare, de ce banda 1 are protecție la ieșire și cum se semnalizează corect.',
    coreConcepts: [
      {
        heading: 'Principiul de Bază & Intrarea în Giratoriu',
        body: 'La intrarea într-o intersecție cu sens giratoriu, indicatorul este însoțit întotdeauna de „Cedează trecerea”. Vehiculele care circulă deja în interiorul sensului au prioritate absolută față de cele care vor să intre:',
        bulletPoints: [
          'La intrare nu se mai aplică regula de dreapta; inelul este protejat.',
          'Alegerea benzii la intrare: Dacă vrei să ieși la prima ieșire (la dreapta), te încadrezi obligatoriu pe Banda 1 (exterioară).',
          'Dacă vrei să mergi înainte (a doua ieșire) sau la stânga / întoarcere (ieșirile 3-4), te poți încadra pe Banda 2 sau benzile interioare.'
        ],
        proTip: 'Semnalizarea la intrare: Dacă virezi la prima ieșire, semnalizezi dreapta încă de dinainte de a pătrunde în sens.'
      },
      {
        heading: 'Noul Regulament: Schimbarea Benzilor la Părăsirea Giratoriului',
        body: 'Marea modificare a Codului Rutier: sensul giratoriu este definit acum clar ca o intersecție cu mai multe benzi pe sens în formă circulară:',
        bulletPoints: [
          'Dacă te afli pe banda 2 din interior și vrei să părăsești giratoriul, ești obligat să treci peste banda 1.',
          'DREPTUL DE PRIORITATE APARȚINE CELUI DE PE BANDA 1! Dacă pe banda 1 circulă o altă mașină care continuă să meargă în giratoriu, TU TREBUIE SĂ ÎI ACORZI PRIORITATE!',
          'Nu poți tăia calea mașinii de pe banda 1 pentru a ieși din giratoriu. Semnalizezi dreapta, acorzi prioritate benzii 1 și abia apoi ieși.'
        ],
        proTip: 'Regula de aur pentru examen: Dacă vrei să ieși sigur din giratoriu, treci treptat pe banda 1 înainte de ieșirea dorită, semnalizând dreapta din timp!'
      }
    ],
    interactiveCheck: {
      question: 'Conform noilor reglementări rutiere, dacă te afli pe banda interioară (banda 2) a unui sens giratoriu și vrei să părăsești intersecția, ce ești obligat să faci?',
      options: [
        'Ai prioritate de ieșire deoarece vii de pe banda mai rapidă',
        'Să semnalizezi dreapta și să acorzi prioritate vehiculelor care circulă pe banda 1 (exterioară) înainte de a traversa acea bandă',
        'Să oprești complet pe loc în mijlocul inelului circular'
      ],
      correctIndex: 1,
      explanation: 'Părăsirea sensului giratoriu de pe o bandă interioară constituie o schimbare de bandă. Conducătorul este obligat să semnalizeze intenția și să acorde prioritate vehiculelor care circulă pe benzile exterioare.'
    }
  },
  {
    id: 'mod-08-speed-stopping-distances',
    moduleIndex: 8,
    title: 'Modulul 8: Limite Legale de Viteză & Distanța de Oprire',
    subtitle: 'Fizica frânării: timpul de reacție, viteza legală și regula celor 2 secunde',
    estimatedMinutes: 9,
    iconName: 'Gauge',
    summary: 'Toate limitele de viteză din România (localitate, drum național, european, expres, autostradă), distanța parcursă în timpul de reacție și ecuația frânării.',
    coreConcepts: [
      {
        heading: 'Limitele Generale de Viteză pentru Categoria B în România',
        body: 'Conform OUG 195/2002, limitele maxime admise pentru autoturisme (Categoria B) sunt:',
        bulletPoints: [
          'În localități: 50 km/h (pe anumite sectoare administrate, maxim 80 km/h cu indicatoare speciale, sau 30 km/h în zone rezidențiale).',
          'În afara localităților pe drumuri comunale, județene sau naționale secundare: 90 km/h.',
          'Pe drumuri naționale europene (E) și drumuri expres (DEx): 100 km/h (respectiv 120 km/h pe drumuri expres omologate).',
          'Pe autostrăzi (A): 130 km/h.',
          'LIMITĂ OBLIGATORIE PENTRU ÎNCEPĂTORI (sub 1 an de permis): Cu 20 km/h mai puțin decât viteza maximă pe acea categorie de drum în afara localităților!'
        ],
        proTip: 'În primul an de la obținerea permisului, pe autostradă ai voie să mergi cu maximum 110 km/h (130 - 20)!'
      },
      {
        heading: 'Ecuația Distanței de Oprire: Reacție + Frânare',
        body: 'Distanța totală de oprire nu este doar distanța de frânare a mașinii, ci conține două componente vitale:',
        bulletPoints: [
          'Distanța de reacție: Timpul în care ochiul vede obstacolul și piciorul apasă frâna (media este de 1 secundă). La 50 km/h, mașina parcurge 14 metri înainte chiar ca frâna să înceapă să funcționeze!',
          'Distanța de frânare: Crește cu PĂTRATUL vitezei! Dacă dublezi viteza de la 50 la 100 km/h, distanța de frânare nu se dublează, ci se CĂDRUPLEAZĂ (crește de 4 ori)!',
          'Pe carosabil umed sau cu zăpadă: Distanța de frânare se mărește de 2 până la 5 ori față de asfaltul uscat.'
        ],
        proTip: 'Regula celor 2 secunde: Alege un reper fix (un stâlp sau un pod). Când mașina din față trece pe lângă reper, numără „o mie unu, o mie doi”. Dacă ai ajuns la reper înainte să numeri 2 secunde, ești prea aproape!'
      }
    ],
    interactiveCheck: {
      question: 'Care este viteza maximă legală pe autostradă pentru un conducător auto care are mai puțin de un an vechime de la obținerea permisului categoria B?',
      options: [
        '130 km/h (limita generală)',
        '110 km/h (cu 20 km/h mai puțin decât limita maximă a categoriei de drum)',
        '90 km/h'
      ],
      correctIndex: 1,
      explanation: 'Conducătorii auto începători (cu vechime sub 1 an) au obligația legală de a circula cu o viteză maximă cu 20 km/h mai mică decât viteza admisă pentru sectorul de drum respectiv în afara localităților (130 - 20 = 110 km/h pe autostradă).'
    }
  },
  {
    id: 'mod-09-overtaking-rules',
    moduleIndex: 9,
    title: 'Modulul 9: Depășirea: Unde Este Interzisă & Regula Celor 5 Pași',
    subtitle: 'Cea mai periculoasă manevră din traficul rutier: legislație, vizibilitate și capcane',
    estimatedMinutes: 11,
    iconName: 'ArrowRight',
    summary: 'Definiția legală a depășirii, unde este strict interzisă prin lege (pietoni, calea ferată, curbe fără vizibilitate), linia continuă și excepțiile bicicliștilor.',
    coreConcepts: [
      {
        heading: 'Locurile Unde Depășirea Este STRICT INTERZISĂ',
        body: 'Art. 120 din Regulament prevede interzicerea depășirii vehiculelor în următoarele locuri cheie (întrebări frecvente la DRPCIV):',
        bulletPoints: [
          'În intersecții nedirijate (se poate depăși doar în intersecții dirijate prin semafoare sau pe drumuri cu prioritate).',
          'Pe trecerile pentru pietoni semnalizate și la mai puțin de 50 m înainte de acestea.',
          'Pe trecerile la nivel cu calea ferată curentă și la mai puțin de 50 m înainte de acestea.',
          'În curbe și în vârfuri de pantă unde vizibilitatea este redusă sub 50 m.',
          'Pe poduri, sub poduri și în tuneluri (la vehicule cu tracțiune mecanică).',
          'Când pentru efectuarea manevrei se calcă sau se trece peste linia continuă longitudinală simplă sau dublă.',
          'În zona de acțiune a indicatorului „Depășirea autovehiculelor, cu excepția motocicletelor fără ataș, interzisă”.'
        ],
        proTip: 'Depășirea pe partea dreaptă: Este interzisă, CU O SINGURĂ EXCEPȚIE: vehiculul care a semnalizat și s-a încadrat pentru a vira la stânga poate fi depășit prin dreapta dacă spațiul permite!'
      },
      {
        heading: 'Formula celor 5 Pași pentru Depășire Sigură',
        body: 'O depășire legală și sigură presupune o succesiune strictă de verificări:',
        bulletPoints: [
          '1. Verificare legalitate: Verifică marcajul și indicatoarele (linie discontinuă, fără indicator de interzicere).',
          '2. Asigurare spate și lateral: Verifică oglinda retrovizoare și unghiul mort ca să nu fie un alt vehicul angajat deja în depășirea ta.',
          '3. Asigurare față: Asigură-te că din sens opus nu vine niciun vehicul pe o distanță suficientă pentru a nu-l obliga să frâneze sau să evite.',
          '4. Semnalizare stânga: Semnalizează cu cel puțin 50 m în localitate sau 100 m în afara localității înainte de a schimba banda.',
          '5. Revenire pe bandă: Semnalizezi dreapta și revii pe banda inițială doar după ce vezi în oglinda centrală ambele faruri ale mașinii depășite!'
        ],
        proTip: 'Dacă ești depășit: ești obligat prin lege să nu mărești viteza de deplasare și să te apropii cât mai mult de marginea din dreapta a părții carosabile!'
      }
    ],
    interactiveCheck: {
      question: 'Este permisă depășirea pe partea dreaptă a unui tramvai aflat în mers?',
      options: [
        'Nu, tramvaiele se depășesc exclusiv pe partea stângă',
        'Da, tramvaiele se depășesc de regulă pe partea dreaptă, cu excepția cazului când între șine și trotuar nu există spațiu suficient',
        'Numai dacă tramvaiul circulă pe linie proprie separată'
      ],
      correctIndex: 1,
      explanation: 'Tramvaiul se depășește de regulă pe partea dreaptă. Depășirea pe stânga este permisă doar pe străzile cu sens unic sau când pe partea dreaptă nu este spațiu suficient între șină și bordură.'
    }
  },
  {
    id: 'mod-10-stopping-parking',
    moduleIndex: 10,
    title: 'Modulul 10: Oprirea, Staționarea și Parcarea — Distanțele Obligatorii',
    subtitle: 'Diferența dintre oprire și staționare, cifrele critice (25m, 50m) și parcarea pe trotuar',
    estimatedMinutes: 10,
    iconName: 'ParkingCircle',
    summary: 'Distincția legală clară: Oprire (până la 5 minute) vs Staționare (peste 5 minute). Toate distanțele obligatorii din Codul Rutier și condițiile parcării pe trotuar.',
    coreConcepts: [
      {
        heading: 'Diferența Legală: Oprire vs Staționare vs Parcare',
        body: 'Codul Rutier clasifică imobilizarea voluntară a vehiculului în mod strict:',
        bulletPoints: [
          'Oprirea voluntară: Imobilizarea vehiculului pe o durată de cel mult 5 minute.',
          'Staționarea: Imobilizarea voluntară a vehiculului pe o durată mai mare de 5 minute.',
          'Parcarea: Staționarea vehiculelor în spații special amenajate sau semnalizate prin indicatoare sau marcaje.',
          'Unde este interzisă oprirea, ESTE AUTOMAT INTERZISĂ ȘI STAȚIONAREA! Însă unde este interzisă doar staționarea, oprirea sub 5 minute este permisă.'
        ],
        proTip: 'Oprirea pe trecerea de pietoni este interzisă, dar atenție: și la mai puțin de 25 de metri ÎNAINTE și DUPĂ trecere este interzisă!'
      },
      {
        heading: 'Tabelul de Aur al Distanțelor Legale Obligatorii',
        body: 'Memorează aceste cifre precise pentru a nu pierde puncte la examen:',
        bulletPoints: [
          'La mai puțin de 25 de metri: De trecerile pentru pietoni (înainte și după); De colțul unei intersecții; De stațiile mijloacelor de transport public (înainte și după).',
          'La mai puțin de 50 de metri: De trecerile la nivel cu calea ferată curentă.',
          'Parcarea pe trotuar: Este permisă DOAR dacă există indicator sau marcaj special și dacă rămâne un spațiu liber de cel puțin 1 metru pentru pietoni!',
          'Distanța de vizibilitate în curbe: Oprirea este interzisă în curbe unde vizibilitatea este sub 50 m.'
        ],
        proTip: 'Nu opri niciodată în dreptul indicatorului de stație de autobuz/tramvai; trebuie să lași 25 m înainte și 25 m după indicator!'
      }
    ],
    interactiveCheck: {
      question: 'La ce distanță minimă de o trecere de pietoni semnalizată este interzisă oprirea voluntară a vehiculelor?',
      options: [
        'La mai puțin de 10 metri înainte și după trecere',
        'La mai puțin de 25 de metri înainte și după trecere',
        'La mai puțin de 50 de metri înainte de trecere'
      ],
      correctIndex: 1,
      explanation: 'Conform Art. 142 din Regulament, oprirea este interzisă pe trecerile de pietoni și la mai puțin de 25 m înainte și după acestea pentru a nu bloca vizibilitatea pietonilor angajați în traversare.'
    }
  },
  {
    id: 'mod-11-u-turn-reversing',
    moduleIndex: 11,
    title: 'Modulul 11: Întoarcerea & Mersul Înapoi — Manevrarea în Spații Restrânse',
    subtitle: 'Unde sunt interzise și tehnica executării întoarcerii din 3 mișcări',
    estimatedMinutes: 9,
    iconName: 'RotateCcw',
    summary: 'Regula de aur a manevrelor: unde este interzisă oprirea, este interzisă și întoarcerea și mersul înapoi. Cum se execută corect manevra de 3 mișcări pe străzi înguste.',
    coreConcepts: [
      {
        heading: 'Locurile Unde Întoarcerea și Mersul Înapoi Sunt Interzise',
        body: 'O formulă simplă care te scapă de memorat zeci de articole de lege:',
        bulletPoints: [
          'Regula Universală: În toate locurile unde oprirea este interzisă prin lege, SUNT INTERZISE ȘI ÎNTOARCEREA ȘI MERSUL ÎNAPOI!',
          'Excepție: În stațiile de autobuz sau tramvai, deși oprirea e interzisă, întoarcerea nu este specificată dacă nu perturbă transportul public, DAR mersul înapoi este STRICT INTERZIS.',
          'Mersul înapoi este interzis pe o distanță mai mare de 50 de metri!',
          'Mersul înapoi este interzis la ieșirea de pe proprietăți alăturate fără vizibilitate dacă nu ești pilotat de o persoană din exterior.',
          'Pe autostradă și drum expres: Mersul înapoi sau întoarcerea sunt interzise categoric și se pedepsesc cu suspendarea permisului!'
        ],
        proTip: 'Mersul înapoi se semnalizează cu luminile albe de marșarier care se aprind automat când cuplezi treapta R, plus semnalizatoarele de avarie dacă manevra prezintă risc.'
      },
      {
        heading: 'Manevra de Întoarcere din 3 Mișcări (Verificată la Traseu)',
        body: 'Examinatorul îți va cere la proba practică să întorci mașina pe o stradă îngustă cu trafic redus:',
        bulletPoints: [
          'Pasul 1 (Înaintare și viraj stânga): Te asiguri din ambele sensuri, semnalizezi stânga, virezi volanul la maxim stânga și înaintezi până aproape de bordura opusă. Frânezi lin înainte de bordură!',
          'Pasul 2 (Marșarier și viraj dreapta): Cuplezi marșarierul, virezi volanul la maxim spre DREAPTA în timp ce mașina rulează încet înapoi. Verifici ambele oglinzi și peste umeri.',
          'Pasul 3 (Revenire pe sens): Cuplezi treapta 1, virezi stânga, te asiguri și te încadrezi pe banda din dreapta ta de mers.'
        ],
        proTip: 'Nu lovi bordura cu forță și nu urca cu roțile pe trotuar în timpul manevrei; este penalizat la examenul practic!'
      }
    ],
    interactiveCheck: {
      question: 'Pe ce distanță maximă este permisă manevra de mers înapoi pe drumurile publice?',
      options: [
        'Pe o distanță de maximum 50 de metri',
        'Pe o distanță de maximum 100 de metri în localitate',
        'Nu există o limită de distanță atât timp cât te asiguri continuu'
      ],
      correctIndex: 0,
      explanation: 'Conform Art. 128 din Regulament, mersul înapoi este permis pe o distanță de maximum 50 de metri și numai dacă vizibilitatea spre spate este asigurată.'
    }
  },
  {
    id: 'mod-12-railroad-crossings',
    moduleIndex: 12,
    title: 'Modulul 12: Trecerea la Nivel cu Calea Ferată — Protocoale Vitale',
    subtitle: 'Bariere, semibariere, Crucea Sfântului Andrei și luminile roșii intermitente',
    estimatedMinutes: 9,
    iconName: 'ShieldAlert',
    summary: 'Tipuri de treceri la nivel cu calea ferată (cu sau fără bariere), semnificația semnalelor optice și acustice și ce faci dacă mașina se blochează pe șine.',
    coreConcepts: [
      {
        heading: 'Crucea Sfântului Andrei și Indicatoarele de Distanță',
        body: 'La calea ferată, trenul are o distanță de frânare de până la 1.000 metri și nu poate opri pentru mașini:',
        bulletPoints: [
          'Panourile suplimentare cu dungi roșii oblice: 3 dungi = ești la 150 m de calea ferată; 2 dungi = 100 m; 1 dungă = 50 m.',
          'Crucea Sfântului Andrei simplă: Trecere la nivel cu o cale ferată simplă fără bariere. OBLIGATORIU OPRIRE în locul cu vizibilitate maximă, fără a depăși indicatorul!',
          'Crucea Sfântului Andrei dublă: Trecere la nivel cu o cale ferată dublă sau multiplă. După ce trece primul tren, verifică dacă nu vine altul din celălalt sens pe a doua linie!',
          'Două lumini roșii care clipesc alternativ însoțite de semnal acustic: OBLIGĂ LA OPRIRE IMEDIATĂ! Trecerea este strict interzisă chiar dacă bariera nu a coborât încă complet.'
        ],
        proTip: 'Semnalul alb care clipește lent (intermitent) înseamnă că instalația funcționează normal și trecerea este permisă cu viteză redusă și atenție.'
      },
      {
        heading: 'Protocol de Urgență: Blocarea Mașinii pe Șine',
        body: 'Dacă motorul se oprește sau mașina se defectează exact pe calea ferată:',
        bulletPoints: [
          'Pasul 1: Evacuează instantaneu toți pasagerii din mașină și trimite-i la o distanță sigură.',
          'Pasul 2: Dacă motorul nu pornește, cuplează treapta 1 sau marșarier, dă drumul complet la ambreiaj și ține cheia pe poziția de pornire (demarorul electric poate trage mașina câțiva metri în afara șinelor).',
          'Pasul 3: Dacă vine trenul, fugi pe jos în direcția din care se apropie trenul, la 45 de grade față de șină, pentru a nu fi lovit de resturile mașinii proiectate înainte de impact.'
        ],
        proTip: 'La examenul auto, neoprirea la trecerea la nivel cu calea ferată când semnalul roșu este activ înseamnă eliminare instantanee și anularea probei!'
      }
    ],
    interactiveCheck: {
      question: 'Ce indică două lumini roșii care funcționează intermitent-alternativ la o trecere la nivel cu calea ferată?',
      options: [
        'Avertizează că trenul a trecut deja și se poate traversa cu atenție',
        'Obligă la oprire toți conducătorii de vehicule, trecerea fiind strict interzisă',
        'Permite trecerea doar a autovehiculelor din Categoria B'
      ],
      correctIndex: 1,
      explanation: 'Luminile roșii care clipesc alternativ, însoțite de semnalul sonor, interzic categoric trecerea și impun oprirea vehiculelor înainte de marcajul transversal de oprire sau în dreptul indicatorului.'
    }
  },
  {
    id: 'mod-13-highways-express',
    moduleIndex: 13,
    title: 'Modulul 13: Autostrăzi & Drumuri Expres — Viteze și Reguli Stricte',
    subtitle: 'Banda de accelerare, banda de urgență, distanța de siguranță și ce este interzis',
    estimatedMinutes: 10,
    iconName: 'Compass',
    summary: 'Procedura corectă de pătrundere pe autostradă folosind banda de accelerare, utilizarea corectă a benzilor de circulație, interdicția benzii de urgență și ieșirea prin decelerare.',
    coreConcepts: [
      {
        heading: 'Banda de Accelerare și Banda de Decelerare',
        body: 'Autostrada este proiectată pentru trafic de mare viteză fără conflicte de intersecție la nivel:',
        bulletPoints: [
          'Banda de accelerare: Nu opri niciodată la începutul ei! Rulează pe toată lungimea ei accelerând puternic până la 90-100 km/h, semnalizează stânga, asigură-te și integrează-te lin între vehiculele de pe banda 1.',
          'Banda de decelerare: Nu frâna pe banda 1 de autostradă! Semnalizezi dreapta, treci pe banda de decelerare la viteza normală de rulare și abia după ce ai intrat pe ea apeși frâna pentru a încetini conform vitezei afișate pe bretea.',
          'Regula benzilor: Pe autostradă se circulă pe banda 1! Banda 2 (și 3) se folosește EXCLUSIV pentru depășire; după finalizarea depășirii, ai obligația legală de a reveni pe prima bandă liberă.'
        ],
        proTip: 'Nu circula constant pe banda 2 dacă banda 1 din dreapta ta este complet liberă; fapta constituie contravenție rutieră!'
      },
      {
        heading: 'Banda de Urgență & Interdicții Absolute pe Autostradă',
        body: 'Banda din dreapta marcată cu linie continuă este rezervată exclusiv situațiilor critice:',
        bulletPoints: [
          'Circulația pe banda de urgență este STRICT INTERZISĂ! Se sancționează cu amendă mare și suspendarea permisului pentru 90 de zile.',
          'Oprirea pe banda de urgență este permisă DOAR în caz de pană mecanică imobilizantă sau urgență medicală gravă.',
          'Dacă oprești pe banda de urgență: pornește luminile de avarie, îmbracă vesta reflectorizantă înainte de a coborî din mașină și montează triunghiul la minimum 100 m în spatele mașinii!',
          'Pasagerii trebuie să aștepte în spatele parapetului de siguranță metalic, NU în mașină și NU pe carosabil!'
        ],
        proTip: 'Pe autostradă sunt interzise cu desăvârșire: întoarcerea, mersul înapoi, mersul pe contrasens și tractarea altor autovehicule defecte cu sufe improvizate.'
      }
    ],
    interactiveCheck: {
      question: 'Când este permisă circulația pe banda de urgență a unei autostrăzi?',
      options: [
        'Când traficul pe benzile principale este blocat și vrei să ajungi la următoarea ieșire',
        'Niciodată; este rezervată exclusiv vehiculelor de intervenție și imobilizărilor din motive de forță majoră / pană',
        'Dacă circuli cu o viteză redusă de sub 50 km/h'
      ],
      correctIndex: 1,
      explanation: 'Circulația pe banda de urgență este strict interzisă autovehiculelor obișnuite și atrage suspendarea exercitării dreptului de a conduce.'
    }
  },
  {
    id: 'mod-14-weather-night-driving',
    moduleIndex: 14,
    title: 'Modulul 14: Condusul pe Vreme Nefavorabilă & Conducerea de Noapte',
    subtitle: 'Acvaplanare, polei, ceață densă și folosirea corectă a luminilor automobilului',
    estimatedMinutes: 10,
    iconName: 'CloudRain',
    summary: 'Fenomenul periculos de acvaplanare, frânarea pe polei, utilizarea luminilor de drum vs întâlnire și luminilor de ceață, precum și pregătirea mașinii pe timp de iarnă.',
    coreConcepts: [
      {
        heading: 'Fenomenul de Acvaplanare & Conducerea pe Polei/Zăpadă',
        body: 'Când plouă torențial, anvelopele pot pierde contactul fizic cu asfaltul din cauza peliculei de apă:',
        bulletPoints: [
          'Acvaplanare: Apa nu mai poate fi evacuată prin șanțurile anvelopei; mașina „plutește” pe o pernă de apă, direcția devine extrem de ușoară și frânele nu mai funcționează.',
          'Ce faci la acvaplanare: NU călca frâna brusc și NU smuci de volan! Ia piciorul de pe accelerație lin și ține volanul drept până anvelopele refac contactul cu solul.',
          'Pe polei/zăpadă: Păstrează o distanță triplă față de mașina din față, accelerează fin, frânează din timp și folosește frâna de motor.'
        ],
        proTip: 'Verifică adâncimea profilului anvelopelor de vară (minim 1.6 mm legal, recomandat peste 3 mm) și montează anvelope de iarnă când carosabilul este acoperit de zăpadă, gheață sau polei.'
      },
      {
        heading: 'Sistemul de Lumini: Când Folosim Fiecare Comandă',
        body: 'Utilizarea greșită a luminilor orbește ceilalți șoferi sau reduce vizibilitatea:',
        bulletPoints: [
          'Luminile de întâlnire (faza scurtă): Obligatorii pe toate drumurile publice atât ziua cât și noaptea (conform noilor prevederi legale românești). Bat la minimum 30 de metri în față.',
          'Luminile de drum (faza lungă): Bat la minimum 100 m în față. Se folosesc noaptea pe drumuri neiluminate când nu ai pe nimeni în față.',
          'Trecerea de la faza lungă la faza scurtă: OBLIGATORIE la cel puțin 200 de metri când te întâlnești cu un vehicul din sens opus sau când te apropii de o mașină din spate!',
          'Proiectoarele și lămpile de ceață: Se folosesc EXCLUSIV pe timp de ceață densă, ploaie torențială sau ninsoare abundentă. Folosirea lor pe timp senin se sancționează contravențional!'
        ],
        proTip: 'Dacă ești orbit de farurile unei mașini din sens opus: nu aprinde și tu faza lungă din răzbunare; redu viteza, privește spre marginea din dreapta a drumului și oprește dacă nu mai vezi marcajele!'
      }
    ],
    interactiveCheck: {
      question: 'La ce distanță minimă de un vehicul care vine din sens opus pe timp de noapte ești obligat să schimbi lumina de drum (faza lungă) cu lumina de întâlnire (faza scurtă)?',
      options: [
        'La cel puțin 50 de metri',
        'La cel puțin 200 de metri',
        'La cel puțin 500 de metri'
      ],
      correctIndex: 1,
      explanation: 'Conform normelor rutiere, conducătorul este obligat să comute faza lungă pe faza scurtă la cel puțin 200 de metri de vehiculul care circulă din sens opus pentru a nu orbi conducătorul acestuia.'
    }
  },
  {
    id: 'mod-15-mechanics-dashboard',
    moduleIndex: 15,
    title: 'Modulul 15: Mecanică Auto & Martorii din Bord — Ce Înseamnă Culorile',
    subtitle: 'Semnificația martorilor de bord, sistemul de frânare, presiunea roților și nivelul fluidelor',
    estimatedMinutes: 10,
    iconName: 'Wrench',
    summary: 'Codul culorilor din bord (Roșu = Oprire Imediată, Galben = Avertizare / Service, Albastru/Verde = Funcție Activă), verificarea uleiului, antigelului și presiunii din anvelope.',
    coreConcepts: [
      {
        heading: 'Semaforul Martorilor din Bord: Roșu vs Galben',
        body: 'Când pui contactul, toți martorii se aprind pentru testare și trebuie să se stingă după pornirea motorului:',
        bulletPoints: [
          'Martori ROȘII (PERICOL CRITIC): Necesită oprirea IMEDIATĂ și în siguranță a mașinii și oprirea motorului! Exemple: Martorul de presiune ulei (lampa lui Aladin), Martorul de temperatură antigel/răcire, Martorul sistemului de frânare (semnul exclamării în cerc), Martorul de baterie/alternator.',
          'Martori GALBENI/PORTOCALII (AVERTIZARE): Indică o defecțiune care nu impune oprirea pe loc, dar trebuie verificată cât mai curând la service: Check Engine (motor), martor ABS/ESP, martor presiune scăzută anvelope (TPMS), nivel minim combustibil.',
          'Martori VERZI/ALBAȘTRI (INFORMATIVI): Semnalizează funcționarea normală a unui sistem: faza lungă (albastru), semnalizatoare (verde), faza scurtă (verde).'
        ],
        proTip: 'Dacă se aprinde martorul roșu de ulei în mers: trage imediat pe dreapta și oprește motorul! Continuarea deplasării timp de 2-3 minute poate distruge iremediabil motorul prin calare!'
      },
      {
        heading: 'Verificările Săptămânale ale Automobilului',
        body: 'Fiecare conducător auto este responsabil pentru starea tehnică a mașinii sale:',
        bulletPoints: [
          'Nivelul uleiului de motor: Se verifică pe joja de ulei cu motorul OPRIT și RECE, mașina fiind pe teren plan. Nivelul trebuie să se situeze între marcajele MIN și MAX.',
          'Lichidul de răcire (Antigel): Se verifică în vasul de expansiune transparent. NICIODATĂ nu deschide capacul vasului când motorul este fierbinte (risc major de arsuri cu abur sub presiune)!',
          'Lichidul de frână: Nu trebuie să scadă; dacă scade brusc, există o pierdere pe circuit sau plăcuțele de frână sunt extrem de uzate.',
          'Presiunea din anvelope: Se măsoară la rece cu un manometru, conform valorilor de pe stâlpul ușii șoferului (de regulă 2.2 - 2.5 bar).'
        ],
        proTip: 'Jocul excesiv la volan (mai mult de 15 grade fără ca roțile să se miște) indică uzura casetei de direcție sau a bieletelor și este motiv de reținere a certificatului de înmatriculare!'
      }
    ],
    interactiveCheck: {
      question: 'Ce indică aprinderea în mers a martorului luminos de culoare roșie care reprezintă o cană de ulei (lampa de ulei)?',
      options: [
        'Că a sosit momentul reviziei anuale conform kilometrajului',
        'Presiunea scăzută periculoasă a uleiului în circuitul de ungere al motorului, impunând oprirea imediată',
        'Că a crescut consumul de combustibil'
      ],
      correctIndex: 1,
      explanation: 'Martorul roșu de ulei indică pierderea presiunii de ungere a motorului. Ignorarea acestui martor duce la distrugerea mecanică totală a motorului în câteva momente.'
    }
  },
  {
    id: 'mod-16-first-aid-accident',
    moduleIndex: 16,
    title: 'Modulul 16: Prim Ajutor Rutier — Protocolul de Salvare a Vieții',
    subtitle: 'Protocolul PAS (Protejează, Anunță 112, Salvează), hemostaza și resuscitarea cardio-pulmonară',
    estimatedMinutes: 11,
    iconName: 'HeartPulse',
    summary: 'Ce faci în primele minute ale unui accident grav: siguranța locului faptei, apelul de urgență la 112, triajul victimelor, Poziția Laterală de Siguranță (PLS) și masajul cardiac 30:2.',
    coreConcepts: [
      {
        heading: 'Protocolul PAS (Protejează -> Anunță -> Salvează)',
        body: 'Ordinea de acțiune este strictă pentru a preveni transformarea salvatorului într-o nouă victimă:',
        bulletPoints: [
          'P (PROTEJEAZĂ): Oprește mașina ta în siguranță, pornește avariile, îmbracă vesta reflectorizantă și montează triunghiurile reflectorizante la cel puțin 30 m în afara localității (sau 100 m pe autostradă). Taie contactul vehiculelor avariate!',
          'A (ANUNȚĂ 112): Sună la 112 și comunică calm: locația exactă (kilometrul bornei, reper), numărul de mașini implicate, numărul de victime și starea lor de conștiență.',
          'S (SALVEAZĂ): Intervino doar după ce zona este securizată.',
          'REGULĂ CAPITALĂ: NU scoate victimele din mașină și NU le mișca coloana vertebrală, decât dacă există pericol iminent de INCENDIU, EXPLOZIE sau ASFIXIE!'
        ],
        proTip: 'Nu scoate niciodată casca de protecție a unui motociclist accidentat, deoarece poți cauza secționarea măduvei spinării dacă există fractură cervicală!'
      },
      {
        heading: 'Manevrele Practice: PLS, RCP (30:2) și Hemostaza',
        body: 'Procedurile verificate obligatoriu la întrebările oficiale DRPCIV:',
        bulletPoints: [
          'Victimă inconștientă dar RESPIRĂ: Se așază în Poziția Laterală de Siguranță (PLS) pentru a preveni asfixierea cu propria limbă sau prin regurgitarea vărsăturilor.',
          'Victimă inconștientă care NU RESPIRĂ: Se începe imediat Resuscitarea Cardio-Pulmonară: 30 de compresii toracice pe centrul sternului (ritm 100-120 bpm, adâncime 5-6 cm) alternate cu 2 ventilații gură-la-gură.',
          'Hemoragie masivă arterială (sânge roșu deschis care țâșnește pulsatoriu): Se aplică pansament compresiv direct pe rană. Garoul se folosește doar la membre în caz de amputație traumatică și se notează obligatoriu ora și minutul aplicării pe un bilet atașat la vedere!',
          'Nu se dau niciodată lichide, alimente sau medicamente pe gură unei persoane inconștiente sau în stare de șoc!'
        ],
        proTip: 'Verificarea respirației: Pune urechea aproape de gura victimei, privind spre torace timp de 10 secunde (Regula: aud, simt, văd).'
      }
    ],
    interactiveCheck: {
      question: 'Care este raportul corect între compresiile toracice și ventilațiile artificiale la resuscitarea cardio-pulmonară a unui adult?',
      options: [
        '15 compresii la 2 ventilații',
        '30 de compresii sternale alternate cu 2 ventilații',
        '50 de compresii urmate de 5 ventilații'
      ],
      correctIndex: 1,
      explanation: 'Ghidul european de resuscitare și legislația rutieră stabilesc standardul universal de 30 de compresii sternale urmate de 2 ventilații (30:2) pentru adult.'
    }
  },
  {
    id: 'mod-17-penalties-alcohol',
    moduleIndex: 17,
    title: 'Modulul 17: Infracțiuni Rutiere vs Contravenții & Alcoolemia Legală',
    subtitle: 'Pragurile de alcoolemie (0.40 mg/l aer / 0.80 g/l sânge), punctele de penalizare și anularea',
    estimatedMinutes: 10,
    iconName: 'Scale',
    summary: 'Diferența juridică critică dintre Contravenție (amendă + suspendare) și Infracțiune (dosar penal + închisoare/amendă penală), pragurile alcoolemiei și cumulul de 15 puncte de penalizare.',
    coreConcepts: [
      {
        heading: 'Pragurile Alcoolemiei în România (Toleranță Zero!)',
        body: 'În România limita legală admisă este ZERO (0.00). Orice cantitate de alcool se sancționează aspru:',
        bulletPoints: [
          'Între 0.01 și 0.40 mg/l alcool pur în aerul expirat: Este CONTRAVENȚIE. Se sancționează cu amendă din clasa a IV-a și suspendarea permisului de conducere pentru 90 de zile.',
          'Peste 0.40 mg/l alcool pur în aerul expirat (sau peste 0.80 g/l alcool pur în sânge): Este INFRACȚIUNE! Se întocmește dosar penal, se recoltează obligatoriu probe biologice de sânge și se pedepsește cu închisoare de la 1 la 5 ani sau amendă penală!',
          'Refuzul recoltării probelor biologice de sânge constituie INFRACȚIUNE de sine stătătoare, pedepsită cu închisoare de la 1 la 5 ani.'
        ],
        proTip: 'Nu urca niciodată la volan „după o bere”; etilotestul poliției detectează și concentrații de 0.05 mg/l care atrag suspendarea pe loc a dreptului de a conduce!'
      },
      {
        heading: 'Contravenții Majore și Punctele de Penalizare',
        body: 'Permisul de conducere se suspendă automat la cumularea a 15 puncte de penalizare:',
        bulletPoints: [
          'Cumulul a 15 puncte de penalizare: Atrage suspendarea permisului pentru o perioadă de 30 de zile.',
          'Depășirea vitezei maxime cu peste 50 km/h: Suspendarea permisului pentru 90 de zile.',
          'Depășirea vitezei maxime cu peste 70 km/h: Suspendarea permisului pentru 120 de zile.',
          'Neacordarea de prioritate pietonilor sau vehiculelor: Suspendare pentru 30 de zile (sau 60 de zile dacă s-a produs un accident cu avarii).',
          'Trecerea pe lumina roșie a semaforului: Suspendare pentru 30 de zile.',
          'Conducerea unui autovehicul fără permis de conducere: Este INFRACȚIUNE pedepsită cu închisoare de la 1 la 5 ani.'
        ],
        proTip: 'Punctele de penalizare se anulează automat la împlinirea termenului de 6 luni de la data constatării faptei dacă nu ai acumulat între timp alte puncte.'
      }
    ],
    interactiveCheck: {
      question: 'De la ce valoare a alcoolemiei în aerul expirat fapta conducătorului auto trece de la contravenție la infracțiune pedepsită cu dosar penal?',
      options: [
        'Peste 0.20 mg/l alcool pur în aerul expirat',
        'Peste 0.40 mg/l alcool pur în aerul expirat (respectiv peste 0.80 g/l în sânge)',
        'Peste 1.00 mg/l alcool pur în aerul expirat'
      ],
      correctIndex: 1,
      explanation: 'Valoarea de peste 0.40 mg/l alcool pur în aerul expirat (sau peste 0.80 g/l în sânge) constituie infracțiune conform Codului Penal și se pedepsește cu închisoare sau amendă penală.'
    }
  },
  {
    id: 'mod-18-practical-exam-secrets',
    moduleIndex: 18,
    title: 'Modulul 18: Secretele Probei Practice cu Polițistul (Traseul)',
    subtitle: 'Psihologia examinatorului, comenzile capcană, rotirea capului și evitarea celor 21 de puncte',
    estimatedMinutes: 12,
    iconName: 'Sparkles',
    summary: 'Tot ce trebuie să știi în ziua traseului: cum începi examinarea, verificările preliminare de bord, rotirea teatrală a capului pentru asigurare, gestionarea emoțiilor și cele mai frecvente motive de respingere.',
    coreConcepts: [
      {
        heading: 'Grila de Penalizare a Traseului (Maximum 20 de Puncte Permise)',
        body: 'La proba practică, orice eroare primește puncte de penalizare. La 21 de puncte ești declarat RESPINS:',
        bulletPoints: [
          'Neacordarea priorității de trecere (vehicule sau pietoni): 21 de puncte instantaneu (RESPINS PE LOC)!',
          'Intervenția examinatorului asupra volanului sau frânei pentru evitarea unui pericol: 21 de puncte instantaneu!',
          'Depășirea vitezei maxime admise sau nerespectarea semnalelor polițistului: RESPINS!',
          'Nesemnalizarea schimbării direcției de mers: 6 puncte.',
          'Neasigurarea temeinică la plecarea de pe loc sau la schimbarea benzii: 6 puncte.',
          'Oprirea motorului: Doar 3 puncte! Dacă moare motorul, nu te panica, pune frână, repornește calm și ai pierdut doar 3 puncte din cele 20 admise.'
        ],
        proTip: 'Examinatorul nu are voie prin lege să te oblige să faci o manevră ilegală (de exemplu: „virează la stânga pe sens interzis”). Dacă îți cere așa ceva, răspunzi calm: „Domnule polițist, indicatorul interzice virajul la stânga, voi merge drept înainte!”'
      },
      {
        heading: 'Secretul Psihologic: Rotirea Vizibilă a Capului',
        body: 'Polițistul stă în dreapta ta și nu poate ghici unde se uită ochii tăi dacă îți miști doar privirea:',
        bulletPoints: [
          'La fiecare plecare de pe loc: Oglindă centrală -> Oglindă laterală -> ROTIRE CLARĂ A CAPULUI la 45-60 de grade spre geamul lateral stânga pentru verificarea unghiului mort!',
          'La fiecare apropiere de trecerea de pietoni: Rotește capul vizibil stânga-dreapta pentru a scana trotuarele chiar dacă trecerea pare goală.',
          'La schimbarea benzii: Semnalizează cu 3-5 secunde înainte de a roti volanul, verifică oglinda și unghiul mort.',
          'Păstrează o viteză adecvată: Nu merge excesiv de lent (cu 20 km/h pe bulevard liber), deoarece examinatorul te poate penaliza pentru ezitare și nesiguranță nejustificată!'
        ],
        proTip: 'Înainte de pornire, arată că ești profesionist: reglează scaunul, oglinzile, pune centura, verifică frâna de mână și întreabă examinatorul politicos: „Domnule examinator, putem porni?”'
      }
    ],
    interactiveCheck: {
      question: 'Câte puncte de penalizare acumulate la proba practică (traseu) determină declararea candidatului ca fiind RESPINS?',
      options: [
        'La cumularea a 10 puncte de penalizare',
        'La cumularea a 21 de puncte de penalizare (sau mai mult)',
        'La cumularea a 30 de puncte de penalizare'
      ],
      correctIndex: 1,
      explanation: 'Baremul oficial al examenului practic DRPCIV/DGPCI stabilește că un candidat este declarat ADMIS dacă a acumulat cel mult 20 de puncte de penalizare. La 21 de puncte de penalizare candidatul este declarat RESPINS.'
    }
  },
  {
    id: 'mod-19-sala-exam-structure',
    moduleIndex: 19,
    title: 'Modulul 19: Structura Oficială a Examenului Teoretic (Sala DRPCIV)',
    subtitle: 'Cum funcționează touchscreen-ul poliției, cele 26 de întrebări și regula celor 22 de puncte',
    estimatedMinutes: 9,
    iconName: 'ShieldAlert',
    summary: 'Tot ce trebuie să știi despre sistemul informatic DRPCIV: ecranul tactil, camera video care te fotografiază, timpul de 30 de minute și de ce la a 5-a greșeală ești eliminat automat.',
    coreConcepts: [
      {
        heading: 'Sistemul Informatic DRPCIV la Ghișeu',
        body: 'Examenul teoretic se susține pe calculatoare speciale cu ecran tactil la sediul serviciului de permise:',
        bulletPoints: [
          'La intrare primești un bon de ordine cu un cod de bare pe care îl scanezi la stația alocată.',
          'Camera video te fotografiază de 3 ori în timpul testului pentru confirmarea identității (privește drept spre ecran).',
          'Testul începe cu 3 întrebări demonstrative de acomodare (nu se punctează); apasă „Începe examenul” când ești gata.',
          'Barem strict: Ai exact 26 de întrebări și 30 de minute. Pentru a fi declarat ADMIS ai nevoie de minimum 22 de răspunsuri corecte!',
          'ELIMINARE INSTANTANEE: În momentul în care ai acumulat a 5-a greșeală, ecranul se blochează pe loc cu mesajul RESPINS și testul se încheie!'
        ],
        proTip: 'Dacă acumulezi 22 de răspunsuri corecte, ecranul se oprește instantaneu și te declară ADMIS, chiar dacă mai aveai întrebări necompletate!'
      },
      {
        heading: 'Formatul Butoanelor pe Ecranul Poliției',
        body: 'Pe ecran ai la dispoziție trei comenzi majore:',
        bulletPoints: [
          'Butoanele A, B, C: Atingi literele corespunzătoare variantelor pe care le consideri corecte (pot fi 1, 2 sau toate 3!).',
          'Butonul „Trimite Răspunsul”: Confirmă definitiv selecția. Odată trimis, răspunsul NU mai poate fi modificat niciodată!',
          'Butonul „Răspunde mai târziu”: Trimite întrebarea curentă la coada de așteptare și îți afișează următoarea întrebare.'
        ],
        proTip: 'Nu te grăbi să apeși „Trimite”! Dacă atingi ecranul din greșeală pe o literă, apas-o din nou ca să o deselectezi înainte de confirmare.'
      }
    ],
    interactiveCheck: {
      question: 'La câte răspunsuri greșite acumulate sistemul informatic DRPCIV oprește automat examenul și declară candidatul RESPINS?',
      options: [
        'La a 3-a greșeală',
        'La a 5-a greșeală comisă',
        'La a 7-a greșeală'
      ],
      correctIndex: 1,
      explanation: 'Limita maximă de greșeli permise este 4. În momentul în care ai greșit a 5-a întrebare, sistemul informatic întrerupe automat testul și declară candidatul RESPINS.'
    }
  },
  {
    id: 'mod-20-multi-select-secret',
    moduleIndex: 20,
    title: 'Modulul 20: Capcana Întrebărilor cu Răspunsuri Multiple (1, 2 sau 3 Corecte)',
    subtitle: 'De ce pică 70% din candidați din cauza bifării parțiale și cum rezolvi problema',
    estimatedMinutes: 10,
    iconName: 'CheckCircle2',
    summary: 'La DRPCIV, o întrebare poate avea o variantă corectă, două variante corecte sau chiar toate cele trei variante corecte (A, B și C). Dacă o întrebare are corecte A și B, iar tu bifezi doar A, primești ZERO puncte și se consideră GREȘEALĂ!',
    coreConcepts: [
      {
        heading: 'Regula de Aur a Punctajului la DRPCIV: Totul sau Nimic',
        body: 'Nu există punctaj parțial la chestionarele oficiale de poliție:',
        bulletPoints: [
          'Dacă răspunsul corect este A și C, iar tu ai bifat doar A -> Se consideră GREȘIT (+1 la greșeli).',
          'Dacă răspunsul corect este B, iar tu ai bifat B și C -> Se consideră GREȘIT (+1 la greșeli).',
          'Trebuie să selectezi EXACT combinația completă de variante corecte pentru a primi punctul.'
        ],
        proTip: 'Tratează fiecare variantă A, B, C ca pe o întrebare de sine stătătoare de tip ADEVĂRAT / FALS! Nu te opri după ce ai găsit prima variantă adevărată; citește-le obligatoriu și pe celelalte două.'
      },
      {
        heading: 'Cum Identifici Câte Variante Sunt Corecte',
        body: 'Formularea textului oferă indicii prețioase:',
        bulletPoints: [
          'Dacă întrebarea întreabă: „În care dintre situațiile următoare vă este INTERZIS...?” -> Foarte des sunt 2 sau chiar 3 variante corecte (situații diferite prevăzute în lege).',
          'Dacă întrebarea întreabă: „Care este ordinea de trecere prin intersecție...?” -> ÎNTOTDEAUNA există O SINGURĂ variantă corectă (ordinea vehiculelor este unică).',
          'Dacă întrebarea întreabă: „Ce obligații vă revin la...?” -> Adesea sunt 2 sau 3 variante corecte dacă enumeră manevre obligatorii.'
        ],
        proTip: 'Nu bifa niciodată doar varianta A doar pentru că sună bine, fără să fi citit B și C până la ultimul cuvânt!'
      }
    ],
    interactiveCheck: {
      question: 'Dacă la o întrebare DRPCIV variantele corecte sunt A și B, iar tu selectezi doar varianta A și apeși Trimite, cum este evaluat răspunsul?',
      options: [
        'Primești jumătate de punct (0.5 puncte)',
        'Răspunsul este considerat complet greșit și se adaugă la numărul de greșeli',
        'Calculatorul te întreabă dacă vrei să mai adaugi o opțiune'
      ],
      correctIndex: 1,
      explanation: 'La examenul teoretic nu există punctaj parțial. Dacă nu ai selectat toate variantele corecte, răspunsul este marcat ca eroare și se contorizează la greșeli.'
    }
  },
  {
    id: 'mod-21-skip-later-strategy',
    moduleIndex: 21,
    title: 'Modulul 21: Butonul Strategic „Răspunde Mai Târziu”',
    subtitle: 'Cum funcționează coada de așteptare a calculatorului și de ce crește rata de promovare',
    estimatedMinutes: 9,
    iconName: 'RotateCcw',
    summary: 'Folosirea inteligentă a butonului „Răspunde mai târziu” reduce nivelul de cortizol și panică, oferindu-ți posibilitatea de a strânge întâi punctele sigure și de a lăsa întrebările dificile la final.',
    coreConcepts: [
      {
        heading: 'Mecanica Cozii de Așteptare',
        body: 'Când apeși butonul „Răspunde mai târziu”, întrebarea este mutată la capătul celor 26 de întrebări:',
        bulletPoints: [
          'Nu se consideră greșeală și nu pierzi niciun punct.',
          'Întrebarea va reveni pe ecran după ce ai parcurs toate celelalte întrebări.',
          'Poți amâna o întrebare de oricâte ori dorești în cadrul celor 30 de minute.'
        ],
        proTip: 'Dacă o întrebare are o poză cu 4 mașini, tramvaie și pietoni sau un text pe 5 rânduri care te zăpăcește, apasă instantaneu „Răspunde mai târziu”! Nu-ți irosi energia mentală la începutul testului.'
      },
      {
        heading: 'Efectul Psihologic al celor 22 de Puncte',
        body: 'Avantajul strategic major este acumularea rapidă a punctelor sigure:',
        bulletPoints: [
          'Dacă rezolvi rapid 18 întrebări ușoare la care ești 100% sigur, scapi de anxietate.',
          'Când ajungi la 21 de puncte, mai ai nevoie de un singur răspuns corect.',
          'Deseori, când întrebarea amânată reapare la final, ai mintea mult mai limpede și vezi imediat răspunsul corect!'
        ],
        proTip: 'Nu abuza: dacă amâni mai mult de 6-7 întrebări, riști să te aglomerezi spre finalul celor 30 de minute. Amână doar întrebările la care ai dubii reale.'
      }
    ],
    interactiveCheck: {
      question: 'Ce se întâmplă atunci când apeși butonul „Răspunde mai târziu” la o întrebare din examenul DRPCIV?',
      options: [
        'Pierzi 1 punct din totalul celor 26',
        'Întrebarea este mutată la sfârșitul testului fără a fi penalizat, urmând să o rezolvi mai târziu',
        'Calculatorul trece automat la examenul practic'
      ],
      correctIndex: 1,
      explanation: 'Butonul „Răspunde mai târziu” amână întrebarea curentă trimițând-o la sfârșitul listei de examinare, fără nicio penalizare.'
    }
  },
  {
    id: 'mod-22-poison-keywords',
    moduleIndex: 22,
    title: 'Modulul 22: Decodarea Lingvistică a Întrebărilor Capcană',
    subtitle: 'Cuvintele otrăvite din chestionare: NUMAI, DOAR, ÎNTOTDEAUNA și negațiile duble',
    estimatedMinutes: 10,
    iconName: 'AlertTriangle',
    summary: 'Creatorii chestionarelor folosesc tipare lingvistice specifice pentru a testa dacă știi excepțiile din lege. Recunoașterea acestor cuvinte te scapă de 90% din greșeli.',
    coreConcepts: [
      {
        heading: 'Cuvintele Otrăvite care Fac Varianta FALSĂ în 80% din Cazuri',
        body: 'Legislația rutieră are aproape întotdeauna excepții. Când o variantă folosește un termen absolutist, este suspectă:',
        bulletPoints: [
          '„NUMAI” sau „DOAR”: Ex: „Opriți la STOP numai dacă vin alte mașini” -> FALS! La STOP oprești necondiționat.',
          '„ÎNTOTDEAUNA”: Ex: „Tramvaiul are întotdeauna prioritate față de autoturisme” -> FALS! Tramvaiul pierde prioritatea când virează la stânga.',
          '„ORICÂND / ÎN ORICE SITUAȚIE”: Excepțiile de urgență sau de semnalizare contrazic de obicei această afirmație.'
        ],
        proTip: 'Dacă vezi cuvintele „numai” sau „întotdeauna”, citește de trei ori varianta; în majoritatea cazurilor este o capcană concepută pentru a fi falsă!'
      },
      {
        heading: 'Capcana Negației Duble',
        body: 'Atenție uriașă la întrebările formulate cu negație:',
        bulletPoints: [
          'Exemplu clasic: „În care dintre situațiile următoare NU vă este INTERZISĂ întoarcerea?”',
          'Creierul citește „interzisă” și bifează locurile unde e interzis! Dar întrebarea cere unde ESTE PERMISĂ!',
          'Dacă vezi „NU vă este interzis”, reformulează mental întrebarea în: „Unde AM VOIE să...”.'
        ],
        proTip: 'Subliniază mental cuvântul „NU” din cerință ca să nu cazi în capcana de a căuta inversul răspunsului corect!'
      }
    ],
    interactiveCheck: {
      question: 'Cum trebuie interpretată o întrebare formulată: „În care dintre situații NU vă este interzisă depășirea?”',
      options: [
        'Trebuie să selectezi locurile unde depășirea este strict interzisă',
        'Trebuie să selectezi situațiile unde depășirea este legală și permisă',
        'Trebuie să selectezi doar cazurile în care depășești tramvaie'
      ],
      correctIndex: 1,
      explanation: 'Formularea „NU vă este interzis” înseamnă „VĂ ESTE PERMIS”. Această negație dublă testează atenția la citire a candidatului.'
    }
  },
  {
    id: 'mod-23-free-points-questions',
    moduleIndex: 23,
    title: 'Modulul 23: Punctele Gratuite la Sală (Mecanică, Prim Ajutor & Eco)',
    subtitle: 'Cele 6 întrebări cu răspunsuri fixe care îți garantează puncte instantanee',
    estimatedMinutes: 9,
    iconName: 'Award',
    summary: 'În fiecare chestionar oficial de 26 de întrebări există 4 până la 6 întrebări standardizate din capitolele secundare care au răspunsuri bătute în cuie. Dacă le memorezi, ai asigurate 6 puncte din cele 22 necesare!',
    coreConcepts: [
      {
        heading: 'Grilele Fixe de Prim Ajutor Rutier',
        body: 'Aceste reguli medicale nu se schimbă niciodată în chestionare:',
        bulletPoints: [
          'Ritmul de resuscitare adult: ÎNTOTDEAUNA 30 de compresii sternale la 2 ventilații (30:2)!',
          'Victimă inconștientă care respiră: Se pune ÎNTOTDEAUNA în Poziția Laterală de Siguranță (PLS)!',
          'Medicamente și lichide: NU se dau niciodată pe gură persoanelor rănite sau inconștiente!',
          'Garoul: Se atașează obligatoriu bilet cu ora și minutul aplicării.',
          'Casca motociclistului: NU se scoate de la locul accidentului (risc de leziune a măduvei).'
        ],
        proTip: 'Când vezi o variantă de prim ajutor care propune să dai calmante, apă sau alcool victimei, este 100% greșită!'
      },
      {
        heading: 'Grilele Fixe de Mecanică și Conducere Ecologică',
        body: 'Mecanica de Categoria B conține întrebări simple de logică elementară:',
        bulletPoints: [
          'Martorii din bord: Martor ROȘU aprins în mers = Oprire imediată și verificare! Martor GALBEN = Se poate continua deplasarea până la primul service.',
          'Fum negru la eșapament: Consum excesiv de combustibil / amestec prea bogat.',
          'Fum albastru la eșapament: Motorul consumă ulei (uzură pistoane/segmenți).',
          'Fum alb la eșapament: Pătrunderea lichidului de răcire (antigel) în cilindri (garnitură de chiulasă arsă).',
          'Conducere ecologică: Schimbarea treptelor la 2000-2500 RPM, anticiparea traficului și folosirea frânei de motor (consum 0 L/100km).'
        ],
        proTip: 'Întrebările de conducere ecologică au aproape întotdeauna ca răspuns corect: accelerare progresivă, viteză constantă și întreținerea periodică a automobilului.'
      }
    ],
    interactiveCheck: {
      question: 'Ce indică apariția unui fum dens de culoare albastră la țeava de eșapament a unui autovehicul în mers?',
      options: [
        'Consumul excesiv de combustibil',
        'Consumul de ulei din cauza uzurii motorului (uleiul pătrunde în camera de ardere)',
        'Defectarea pompei de apă'
      ],
      correctIndex: 1,
      explanation: 'Fumul albăstrui la eșapament indică arderea uleiului de motor în cilindri din cauza uzurii segmenților sau a simeringurilor de supape.'
    }
  },
  {
    id: 'mod-24-exam-day-routine',
    moduleIndex: 24,
    title: 'Modulul 24: Strategia de 30 de Minute & Rutina Zilei de Examen',
    subtitle: 'Cum să gestionezi timpul la secundă, tehnica de respirație și atingerea celor 26/26',
    estimatedMinutes: 10,
    iconName: 'Sparkles',
    summary: 'Planul pas cu pas pentru ziua examenului teoretic: cum să eviți oboseala cognitivă, cum să împarți cele 30 de minute (aproximativ 1 minut pe întrebare) și ce să faci în primele 5 minute.',
    coreConcepts: [
      {
        heading: 'Managementul Timpului pe Calculatorul Poliției (30 Minute)',
        body: 'Timpul este mai mult decât generos dacă ai o strategie clară:',
        bulletPoints: [
          'Ai 30 de minute pentru 26 de întrebări, adică peste 1 minut și 10 secunde per întrebare!',
          'Primele 10 întrebări: Citește-le calm, fără grabă. Nu încerca să termini testul în 5 minute; nu primești niciun premiu pentru viteză.',
          'Dacă rămâi blocat la o întrebare, folosește „Răspunde mai târziu” după 40 de secunde de ezitare.',
          'Nu părăsi scaunul până nu vezi pe ecran mesajul final ADMIS!'
        ],
        proTip: '90% din cei care pică testul cu 20 sau 21 de puncte au terminat testul în doar 7-8 minute pentru că s-au grăbit și nu au citit toate opțiunile!'
      },
      {
        heading: 'Rutina Neuro-Cognitivă de Dimineață',
        body: 'Pregătirea fizică și mentală conform protocoalelor de concentrare:',
        bulletPoints: [
          'Somn: Cel puțin 7 ore de somn în noaptea dinaintea examenului (amintirile se fixează în faza REM).',
          'Fără toceală pe holul poliției: În dimineața examenului nu mai răsfoi cărți cu 10 minute înainte; riști să intri în confuzie și anxietate.',
          'Ascultă frecvența 10 Hz Alfa în căști timp de 5 minute înainte de a intra în sală pentru stabilizarea pulsului.',
          'Respiră adânc (4 secunde inspirație, 4 secunde reținere, 4 secunde expirație) când te așezi pe scaun în fața touchscreen-ului.'
        ],
        proTip: 'Păstrează-ți calmul: dacă prima întrebare ți se pare grea, amân-o! Examenul are 26 de întrebări și ai voie 4 greșeli; ești în control deplin.'
      }
    ],
    interactiveCheck: {
      question: 'Care este cea mai frecventă greșeală a candidaților care sunt respinși la examenul teoretic cu 20 sau 21 de puncte?',
      options: [
        'Au rămas fără timp înainte de a termina cele 26 de întrebări',
        'S-au grăbit excesiv, terminând testul în câteva minute fără a citi toate cele 3 variante de răspuns',
        'Nu au atins ecranul destul de tare'
      ],
      correctIndex: 1,
      explanation: 'Statistica arată că majoritatea candidaților respinși la limită se grăbesc și bifează doar prima opțiune care pare corectă fără a analiza complet variantele B și C sau capcanele textului.'
    }
  }
];
