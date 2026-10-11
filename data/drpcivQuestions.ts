import { DRPCIVQuestion } from '@/types/driving';

export const OFFICIAL_DRPCIV_QUESTIONS: DRPCIVQuestion[] = [
  {
    id: 'drp-01',
    category: 'priority',
    question: 'În ce ordine vor trece prin intersecție cele trei autovehicule, dacă semafoarele nu funcționează, iar intersecția este nedirijată prin indicatoare?',
    options: [
      { id: 'A', text: 'Autoturismul roșu, autoturismul verde, autoturismul albastru' },
      { id: 'B', text: 'Autovehiculul care vine din dreapta fiecăruia, conform regulii priorității de dreapta' },
      { id: 'C', text: 'Toate autovehiculele trec simultan dacă au spațiu suficient' }
    ],
    correctAnswers: ['B'],
    explanation: 'În intersecțiile nedirijate (fără polițist, semafoare sau indicatoare de prioritate), se aplică strict regula priorității de dreapta: conducătorul de vehicul este obligat să acorde prioritate de trecere vehiculelor care vin din partea sa dreaptă.',
    legalReference: 'Art. 57 alin. (1) din OUG 195/2002',
    eloRating: 950,
    blunderSeverity: 'critical',
    imageType: 'intersection',
    imageData: {
      type: 'right_hand_crossroad',
      description: 'Intersecție nedirijată în cruce cu 3 autoturisme'
    },
    ciaMemoryAnchor: {
      peg: 'Chess Pawn Guard: The right flank is always guarded first.',
      cognitiveRule: 'Right-Hand Anchor: Scanează întotdeauna de la ora 12 spre ora 3 (în sensul acelor de ceasornic).',
      neuroFact: 'Cortexul parietal procesează orientarea spațială mai rapid când folosești ancore unghiulare constante.'
    }
  },
  {
    id: 'drp-02',
    category: 'priority',
    question: 'Când este obligat conducătorul unui autovehicul să acorde prioritate de trecere într-o intersecție cu sens giratoriu?',
    options: [
      { id: 'A', text: 'Vehiculelor care urmează să pătrundă în sensul giratoriu' },
      { id: 'B', text: 'Vehiculelor care circulă deja în interiorul sensului giratoriu' },
      { id: 'C', text: 'Tuturor vehiculelor care vin din partea dreaptă, indiferent de poziția lor' }
    ],
    correctAnswers: ['B'],
    explanation: 'În sensul giratoriu, regula generală de dreapta este inversată prin lege: vehiculele care se află deja în interiorul sensului giratoriu au prioritate față de vehiculele care urmează să intre.',
    legalReference: 'Art. 57 alin. (2) din OUG 195/2002',
    eloRating: 900,
    blunderSeverity: 'critical',
    imageType: 'roundabout',
    ciaMemoryAnchor: {
      peg: 'King inside the Castle: Cine este deja pe cerc controlează centrul.',
      cognitiveRule: 'Sens giratoriu = Inelul are drept de viață și de moarte. Prioritate de stânga față de cel care intră.',
      neuroFact: 'Inversiunea regulii implică inhibiție frontală: frânezi impulsul de a căuta dreapta.'
    }
  },
  {
    id: 'drp-03',
    category: 'road_signs',
    question: 'Ce obligații aveți la întâlnirea indicatorului „Oprire” (STOP)?',
    options: [
      { id: 'A', text: 'Să opriți obligatoriu în locul cu vizibilitate maximă fără a depăși colțul intersecției' },
      { id: 'B', text: 'Să acordați prioritate de trecere tuturor vehiculelor care circulă pe drumul prioritar' },
      { id: 'C', text: 'Să reduceți viteza și să opriți numai dacă se apropie alt vehicul' }
    ],
    correctAnswers: ['A', 'B'],
    explanation: 'Indicatorul „Oprire” (STOP) impune OPRIREA COMPLETĂ (viteza 0 km/h) a vehiculului, indiferent dacă vin sau nu alte mașini, și acordarea priorității tuturor vehiculelor de pe drumul prioritar. Opțiunea C este o capcană tipică DRPCIV!',
    legalReference: 'Indicatorul STOP - Anexa nr. 2 Regulament OUG 195/2002',
    eloRating: 1100,
    blunderSeverity: 'critical',
    imageType: 'road_sign',
    imageData: { signCode: 'STOP' },
    ciaMemoryAnchor: {
      peg: 'Octagon Deadstop: 8 laturi = 8 secunde de atenție absolută.',
      cognitiveRule: 'STOP = Roțile înghețate complet + Dublă verificare stânga/dreapta.',
      neuroFact: 'Oprirea vestibulară completă elimină fenomenul de "motion blur" și erorile de saccadă optică.'
    }
  },
  {
    id: 'drp-04',
    category: 'circulation_rules',
    question: 'Care este viteza maximă admisă pentru categoria B pe autostradă în România?',
    options: [
      { id: 'A', text: '130 km/h' },
      { id: 'B', text: '110 km/h pentru conducătorii cu mai puțin de un an vechime' },
      { id: 'C', text: '140 km/h dacă traficul este redus' }
    ],
    correctAnswers: ['A', 'B'],
    explanation: 'Pe autostrăzi, viteza maximă legală pentru categoria B este 130 km/h. Însă, pentru conducătorii începători (cu mai puțin de 1 an de experiență), viteza maximă este cu 20 km/h mai mică decât viteza maximă admisă (130 - 20 = 110 km/h). Astfel, ambele opțiuni A și B sunt corecte!',
    legalReference: 'Art. 50 alin. (1) și (4) din OUG 195/2002',
    eloRating: 1250,
    blunderSeverity: 'major',
    ciaMemoryAnchor: {
      peg: 'Chess Pawn vs Queen: Începătorul este un pion (-20 km/h handicap pe orice drum).',
      cognitiveRule: 'Autostradă: 130 / 110 novice. Drum Expres: 120 / 100. European: 100 / 80. Național: 90 / 70.',
      neuroFact: 'Memorarea perechilor numerice simetrice (-20 peste tot) reduce sarcina cognitivă de 4 ori.'
    }
  },
  {
    id: 'drp-05',
    category: 'overtaking_parking',
    question: 'În care dintre următoarele situații este interzisă manevra de depășire?',
    options: [
      { id: 'A', text: 'Pe trecerile pentru pietoni semnalizate' },
      { id: 'B', text: 'Pe poduri, sub poduri și în tuneluri (cu excepția vehiculelor cu tracțiune animală, motocicletelor fără ataș, mopedelor și bicicletelor, dacă vizibilitatea este asigurată)' },
      { id: 'C', text: 'La mai puțin de 50 m de trecerea la nivel cu calea ferată curentă' }
    ],
    correctAnswers: ['A', 'C'],
    explanation: 'Depășirea este strict interzisă pe trecerile de pietoni semnalizate și la mai puțin de 50 m înainte de trecerile la nivel cu calea ferată. Pe poduri, depășirea vehiculelor lente/înguste menționate la B poate fi permisă prin excepție, deci enunțul absolut de la B nu este o interdicție totală fără excepții.',
    legalReference: 'Art. 120 din Regulamentul de aplicare a OUG 195/2002',
    eloRating: 1400,
    blunderSeverity: 'critical',
    ciaMemoryAnchor: {
      peg: '50-Meter Danger Zone: Calea ferată este un zid de netrecut pe 50 de metri.',
      cognitiveRule: 'Pieton + Cale Ferată (50m) = Depășire interzisă fără nicio excepție.',
      neuroFact: 'Ancorarea pe consecințe fatale activează amigdala și cimentează memoria episodică.'
    }
  },
  {
    id: 'drp-06',
    category: 'mechanics',
    question: 'Ce indică aprinderea în mers a martorului de bord de culoare roșie cu simbolul unei lămpi de ulei?',
    options: [
      { id: 'A', text: 'Presiunea uleiului în motor este critic de scăzută' },
      { id: 'B', text: 'Nivelul combustibilului a atins rezerva minimă' },
      { id: 'C', text: 'Trebuie să opriți imediat autovehiculul în condiții de siguranță și să opriți motorul' }
    ],
    correctAnswers: ['A', 'C'],
    explanation: 'Martorul roșu cu cana de ulei semnalizează scăderea presiunii de ungere a motorului. Continuarea rulării duce la calarea motorului în câteva zeci de secunde. Conducătorul trebuie să oprească imediat pe dreapta și să taie contactul.',
    legalReference: 'Noțiuni de mecanică auto și exploatare a autovehiculului',
    eloRating: 1050,
    blunderSeverity: 'major',
    imageType: 'mechanics',
    ciaMemoryAnchor: {
      peg: 'Red Alert = Checkmate iminent. Roșu = STOP IMEDIAT.',
      cognitiveRule: 'Galben = Atenție/Service curând. Roșu = Oprire de urgență.',
      neuroFact: 'Sistemul de semaforizare a culorilor este codat evolutiv în recunoașterea pericolului.'
    }
  },
  {
    id: 'drp-07',
    category: 'first_aid',
    question: 'Cum se procedează corect la acordarea primului ajutor unei victime inconștiente care respiră normal?',
    options: [
      { id: 'A', text: 'Se așază în poziția laterală de siguranță (PLS) pentru a preveni asfixia cu limba sau secreții' },
      { id: 'B', text: 'Se administrează imediat apă și calmante pe cale orală' },
      { id: 'C', text: 'Se monitorizează continuu respirația și pulsul până la sosirea echipajelor specializate' }
    ],
    correctAnswers: ['A', 'C'],
    explanation: 'O persoană inconștientă dar care respiră se așază în poziția laterală de siguranță pentru a menține căile aeriene libere. Nu se administrează NICIODATĂ lichide sau medicamente pe gură unei persoane inconștiente din cauza riscului mortal de aspirație pulmonară!',
    legalReference: 'Ghidul European de Resuscitare și Prim Ajutor Rutier',
    eloRating: 1150,
    blunderSeverity: 'critical',
    ciaMemoryAnchor: {
      peg: 'Side Recovery Shield: Niciun lichid pe gură unui inconștient!',
      cognitiveRule: 'Respiră + Inconștient = PLS (Poziție Laterală de Siguranță). Nu respiră = RCR (30 compresii : 2 ventilații).',
      neuroFact: 'Regula binară de decizie (Dacă A -> fă B) previne paralizia prin analiză în criză.'
    }
  },
  {
    id: 'drp-08',
    category: 'offenses_penalties',
    question: 'La ce nivel al alcoolemiei fapta conducătorului auto trece de la contravenție la infracțiune în România?',
    options: [
      { id: 'A', text: 'La o îmbibație alcoolică de peste 0,80 g/l alcool pur în sânge' },
      { id: 'B', text: 'La o concentrație de peste 0,40 mg/l alcool pur în aerul expirat' },
      { id: 'C', text: 'La orice valoare peste 0,10 mg/l alcool pur în aerul expirat' }
    ],
    correctAnswers: ['A', 'B'],
    explanation: 'Conform Codului Penal și Codului Rutier: peste 0,80 g/l alcool pur în sânge (corespunzător în aer expirat la peste 0,40 mg/l) fapta este INFRACȚIUNE pedepsită cu închisoare de la 1 la 5 ani sau amendă penală. Sub aceste valori (0,01 - 0,40 mg/l aer expirat) este contravenție cu suspendarea permisului pe 90 zile.',
    legalReference: 'Art. 336 din Codul Penal & Art. 102 OUG 195/2002',
    eloRating: 1350,
    blunderSeverity: 'critical',
    ciaMemoryAnchor: {
      peg: '0.40 Air / 0.80 Blood: Pragul dublului magic.',
      cognitiveRule: 'Sub 0.40 aer = Contravenție (permis suspendat). Peste 0.40 aer (0.80 sânge) = Cătușe / Infracțiune.',
      neuroFact: 'Ancorarea proporției de 1 la 2 (0.40 aer vs 0.80 sânge) fixează cifra definitiv în memorie.'
    }
  },
  {
    id: 'drp-09',
    category: 'priority',
    question: 'Polițistul rutier se află în intersecție cu brațul drept întins orizontal. Ce semnifică acest semnal?',
    options: [
      { id: 'A', text: 'Oprire pentru vehiculele care vin din spatele polițistului' },
      { id: 'B', text: 'Oprire pentru vehiculele care vin din fața polițistului' },
      { id: 'C', text: 'Liberă trecere pentru vehiculele care vin din stânga polițistului' }
    ],
    correctAnswers: ['A'],
    explanation: 'Brațul drept întins orizontal al polițistului rutier înseamnă oprire pentru vehiculele și pietonii care vin DIN SPATELE acestuia. Brațul stâng întins orizontal înseamnă oprire pentru cei care vin DIN FAȚĂ.',
    legalReference: 'Art. 88 din Regulamentul de aplicare OUG 195/2002',
    eloRating: 1550,
    blunderSeverity: 'major',
    imageType: 'police_signal',
    ciaMemoryAnchor: {
      peg: 'Right Hand Guard Back: Brațul drept apără spatele.',
      cognitiveRule: 'Braț Drept = Oprire din Spate. Braț Stâng = Oprire din Față. Ambele brațe = Oprire din ambele părți.',
      neuroFact: 'Asocierea motorie proprioceptivă (ridică mâna dreaptă și privește înapoi) folosește neuroni oglindă.'
    }
  },
  {
    id: 'drp-10',
    category: 'ecological_driving',
    question: 'Care dintre următoarele comportamente conduc la reducerea consumului de carburant și uzurii autovehiculului?',
    options: [
      { id: 'A', text: 'Folosirea frânei de motor și anticiparea traficului pentru evitarea frânărilor bruște' },
      { id: 'B', text: 'Rularea cu presiunea din pneuri sub limita recomandată de producător' },
      { id: 'C', text: 'Schimbarea treptelor de viteză la turații optime (2000-2500 rpm la benzină, 1800-2200 la diesel)' }
    ],
    correctAnswers: ['A', 'C'],
    explanation: 'Conducerea ecologică se bazează pe anticipare, utilizarea frânei de motor (decelerație cu consum 0 de carburant) și schimbarea vitezelor în plaja de cuplu optim. Rularea cu presiune scăzută crește rezistența la rulare și CONSUMUL!',
    legalReference: 'Principii de conducere ecologică și preventivă',
    eloRating: 1000,
    blunderSeverity: 'minor',
    ciaMemoryAnchor: {
      peg: 'Smooth Flow: Ca mutarea unui nebun pe diagonală deschisă.',
      cognitiveRule: 'Presiune scăzută = frecare mai mare = benzină risipită.',
      neuroFact: 'Înțelegerea cauzalității fizice stimulează retenția logică mai bine decât memorarea pasivă.'
    }
  },
  {
    id: 'drp-11',
    category: 'priority',
    question: 'La o intersecție nedirijată, un tramvai virează la stânga, iar dumneavoastră circulați drept înainte, venind din partea dreaptă a tramvaiului. Cine are prioritate?',
    options: [
      { id: 'A', text: 'Dumneavoastră, deoarece veniți din partea dreaptă a tramvaiului' },
      { id: 'B', text: 'Tramvaiul, deoarece are întotdeauna prioritate absolută față de autoturisme indiferent de viraj' },
      { id: 'C', text: 'Dumneavoastră, deoarece tramvaiul pierde prioritatea când virează la stânga față de vehiculele care vin din sens opus' }
    ],
    correctAnswers: ['A', 'C'],
    explanation: 'Tramvaiele pierd prioritatea în două cazuri fundamentale: 1) când virează la stânga și intersectează un vehicul care vine din sens opus și merge înainte sau la dreapta; 2) în intersecții nedirijate când li se aplică regula priorității de dreapta față de vehiculele care vin din dreapta lor. Ambele formulări reflectă motivele legale!',
    legalReference: 'Art. 59 alin. (1) și Art. 135 din Regulament',
    eloRating: 1700,
    blunderSeverity: 'critical',
    imageType: 'intersection',
    ciaMemoryAnchor: {
      peg: 'Taming the Tram: Tramvaiul care taie calea la stânga se înclină în fața ta!',
      cognitiveRule: 'Viraj la stânga tramvai = Dă prioritate celor din sens opus și celor din dreapta.',
      neuroFact: 'Combaterea prejudecății populare false ("tramvaiul are mereu prioritate") necesită "unlearning" deliberat.'
    }
  },
  {
    id: 'drp-12',
    category: 'circulation_rules',
    question: 'La ce distanță minimă de calea ferată, de trecerea de pietoni și de stația de tramvai este interzisă oprirea voluntară?',
    options: [
      { id: 'A', text: 'La mai puțin de 50 m de trecerea la nivel cu calea ferată' },
      { id: 'B', text: 'La mai puțin de 25 m înainte și după trecerea pentru pietoni' },
      { id: 'C', text: 'La mai puțin de 25 m de indicatorul de stație pentru mijloacele de transport public' }
    ],
    correctAnswers: ['A', 'B', 'C'],
    explanation: 'Toate cele trei distanțe sunt exacte conform Codului Rutier: Oprirea este interzisă la sub 50 m de calea ferată, la sub 25 m de trecerea de pietoni (și înainte și după), și la sub 25 m de stația mijloacelor de transport în comun!',
    legalReference: 'Art. 142 lit. b), f), g) din Regulament OUG 195/2002',
    eloRating: 1600,
    blunderSeverity: 'major',
    ciaMemoryAnchor: {
      peg: 'The CIA 50-25 Matrix: 50m pentru tren, 25m pentru pietoni și autobuz.',
      cognitiveRule: 'Cale Ferată = 50m. Pieton / Stație / Intersecție = 25m.',
      neuroFact: 'Gruparea prin numere cheie (50 și 25) elimină confuzia din 90% din întrebările de staționare.'
    }
  },
  {
    id: 'drp-13',
    category: 'road_signs',
    question: 'Ce semnifică indicatorul triunghiular cu vârful în jos cu bordură roșie și fond alb?',
    options: [
      { id: 'A', text: '„Cedează trecerea”' },
      { id: 'B', text: 'Obligă la oprire completă în orice condiții' },
      { id: 'C', text: 'Obligă conducătorul să acorde prioritate vehiculelor care circulă pe drumul prioritar' }
    ],
    correctAnswers: ['A', 'C'],
    explanation: 'Indicatorul triunghiular cu vârful în jos este „Cedează trecerea”. El obligă conducătorul să reducă viteza și să acorde prioritate tuturor vehiculelor care circulă pe drumul prioritar. Oprirea este necesară NUMAI dacă se apropie alt vehicul!',
    legalReference: 'Indicatorul „Cedează trecerea” - Cod Rutier',
    eloRating: 900,
    blunderSeverity: 'critical',
    imageType: 'road_sign',
    imageData: { signCode: 'YIELD' },
    ciaMemoryAnchor: {
      peg: 'Inverted Triangle = Bow down and yield.',
      cognitiveRule: 'Triunghi cu vârful în jos = Cedează. NU impune oprire dacă drumul este gol!',
      neuroFact: 'Discriminarea optică de formă geometrică este prima etapă în analiza reflexă a șoselei.'
    }
  },
  {
    id: 'drp-14',
    category: 'mechanics',
    question: 'Ce este fenomenul de aquaplanare (acvaplanare) și cum trebuie să reacționeze conducătorul auto?',
    options: [
      { id: 'A', text: 'Pierderea aderenței pneurilor din cauza unei pelicule de apă între anvelopă și carosabil' },
      { id: 'B', text: 'Trebuie să frânați violent și să virați brusc în direcția opusă' },
      { id: 'C', text: 'Trebuie să eliberați accelerația fără frânare bruscă și să țineți volanul drept până la recăpătarea contactului' }
    ],
    correctAnswers: ['A', 'C'],
    explanation: 'Acvaplanarea survine când profilul pneurilor nu mai poate evacua apa, mașina plutind pe peliculă. Frânarea violentă sau virarea bruscă declanșează răsucirea necontrolată a mașinii! Manevra corectă: piciorul luat de pe accelerație, volanul ferm și drept.',
    legalReference: 'Dinamica autovehiculului și aderența carosabilului',
    eloRating: 1300,
    blunderSeverity: 'critical',
    ciaMemoryAnchor: {
      peg: 'Ice Skate Defense: Fără mișcări bruște când ești pe peliculă.',
      cognitiveRule: 'Acvaplanare = 0 accelerație, 0 frână bruscă, volan ferm.',
      neuroFact: 'Repetarea mentală a procedurii de urgență "îngheață" reacțiile de panică distructive.'
    }
  },
  {
    id: 'drp-15',
    category: 'circulation_rules',
    question: 'Care este limita legală de viteză în localități pentru toate categoriile de autovehicule, dacă nu este indicat altfel?',
    options: [
      { id: 'A', text: '50 km/h' },
      { id: 'B', text: 'Pe anumite sectoare de drum, administratorul poate stabili limite mai mari, dar nu mai mult de 80 km/h' },
      { id: 'C', text: '60 km/h pentru autoturisme și 50 km/h pentru camioane' }
    ],
    correctAnswers: ['A', 'B'],
    explanation: 'Viteza maximă în localități este de 50 km/h. Pe anumite artere cu fluență sporită și fără treceri periculoase, viteza poate fi ridicată până la maximum 80 km/h (sau coborâtă până la 30 km/h).',
    legalReference: 'Art. 49 din OUG 195/2002',
    eloRating: 950,
    blunderSeverity: 'major',
    ciaMemoryAnchor: {
      peg: 'City Grid 50/80: Baza e 50, plafonul de lux este 80.',
      cognitiveRule: 'Localitate = 50 km/h standard. Max permisiune locală = 80 km/h.',
      neuroFact: 'Cifrele rotunde devin puncte de sprijin pentru calculul spațiului de oprire.'
    }
  },
  {
    id: 'drp-16',
    category: 'priority',
    question: 'Doi conducători auto se apropie simultan de o intersecție nedirijată din sensuri opuse. Ambii efectuează virajul la stânga. Cum se efectuează trecerea?',
    options: [
      { id: 'A', text: 'Prin ocolirea centrului imaginar al intersecției prin stânga lor, fără intersectarea traiectoriilor' },
      { id: 'B', text: 'Prin ocolirea centrului intersecției prin dreapta lor, trecând unul prin spatele celuilalt' },
      { id: 'C', text: 'Trece primul cel care a semnalizat mai repede intenția de viraj' }
    ],
    correctAnswers: ['A'],
    explanation: 'Conform Regulamentului, la virajul la stânga efectuat simultan din sensuri opuse, conducătorii auto trec unul pe lângă celălalt prin stânga lor (centrul intersecției rămâne la dreapta vehiculului), permițând fluidizarea traficului fără intersectarea traiectoriilor.',
    legalReference: 'Art. 110 alin. (2) din Regulament OUG 195/2002',
    eloRating: 1450,
    blunderSeverity: 'major',
    imageType: 'intersection',
    ciaMemoryAnchor: {
      peg: 'Left-to-Left Tango: Dansul celor două mașini fără să se atingă.',
      cognitiveRule: 'Viraj stânga simultan = Treceți prin stânga reciproc, fără ocolirea centrului prin spate.',
      neuroFact: 'Simularea traiectoriilor cinematice paralele activează cortexul premotor.'
    }
  },
  {
    id: 'drp-17',
    category: 'overtaking_parking',
    question: 'Ce distanță laterală minimă trebuie să lase conducătorul unui autovehicul la depășirea unei biciclete sau a unei trotinete electrice?',
    options: [
      { id: 'A', text: 'Cel puțin 1,5 metri, sau călcarea marcajului longitudinal discontinuu dacă drumul permite' },
      { id: 'B', text: 'Cel puțin 0,5 metri dacă viteza este sub 30 km/h' },
      { id: 'C', text: 'La viteze mai mari de 50 km/h, autovehiculul va trece peste axul drumului cu cel puțin jumătate din lățimea sa' }
    ],
    correctAnswers: ['A', 'C'],
    explanation: 'Legislația actualizată protejează bicicliștii: la viteze de peste 50 km/h se depășește încălecând axul drumului cu cel puțin jumătate din mașină, iar la viteze sub 50 km/h se lasă o distanță laterală de minimum 1,5 m!',
    legalReference: 'HG 1075/2021 de modificare a Regulamentului OUG 195/2002',
    eloRating: 1500,
    blunderSeverity: 'major',
    ciaMemoryAnchor: {
      peg: 'The 1.5 Meter Invisible Knight Shield around cyclists.',
      cognitiveRule: 'Bicicletă = 1.5m spațiu lateral sau trecere generoasă peste ax.',
      neuroFact: 'Păstrarea distanței devine un reflex somatic când vizualizezi o aripă invizibilă pe lateral.'
    }
  },
  {
    id: 'drp-18',
    category: 'road_signs',
    question: 'Ce semnifică indicatorul circular cu bordură roșie și fond alb pe care este înscris numărul „60”?',
    options: [
      { id: 'A', text: '„Viteză minimă obligatorie”' },
      { id: 'B', text: '„Limitare de viteză” la maximum 60 km/h' },
      { id: 'C', text: 'Interzice circulația cu o viteză superioară celei înscrise pe indicator' }
    ],
    correctAnswers: ['B', 'C'],
    explanation: 'Cercul alb cu contur roșu este un indicator de INTERZICERE / RESTRICȚIE. În cazul numărului 60, semnifică „Limitare de viteză” și interzice depășirea a 60 km/h. Indicatorul de viteză minimă obligatorie este rotund pe fond ALBASTRU!',
    legalReference: 'Indicatoare de restricție - Anexa 2 OUG 195/2002',
    eloRating: 850,
    blunderSeverity: 'minor',
    imageType: 'road_sign',
    imageData: { signCode: 'SPEED_LIMIT_60' },
    ciaMemoryAnchor: {
      peg: 'Red Border = Restriction Ceiling. Blue = Obligation Floor.',
      cognitiveRule: 'Cerc Roșu = Plafon maxim. Cerc Albastru = Podea minimă.',
      neuroFact: 'Dihotomia culorilor calde vs reci mapează natural oprirea vs acțiunea continuă.'
    }
  },
  {
    id: 'drp-19',
    category: 'mechanics',
    question: 'Ce rol are sistemul ABS (Anti-lock Braking System) montat pe autovehicule?',
    options: [
      { id: 'A', text: 'Previne blocarea roților la frânarea violentă, păstrând manevrabilitatea direcției' },
      { id: 'B', text: 'Reduce întotdeauna și pe orice suprafață distanța de frânare cu 50%' },
      { id: 'C', text: 'Permite ocolirea obstacolelor în timp ce pedala de frână este apăsată la maximum' }
    ],
    correctAnswers: ['A', 'C'],
    explanation: 'ABS-ul nu garantează scurtarea distanței de frânare (pe pietriș sau zăpadă afânată poate chiar să o lungească ușor!), dar marele său rol salvator este că împiedică blocarea roților, permițând mașinii să răspundă la comanda volanului!',
    legalReference: 'Sisteme de siguranță activă a autovehiculelor',
    eloRating: 1200,
    blunderSeverity: 'major',
    imageType: 'mechanics',
    ciaMemoryAnchor: {
      peg: 'Steer While Braking: ABS = Roți care se rotesc = Volan care ascultă.',
      cognitiveRule: 'ABS = Nu reduce magic frânarea, ci SALVEAZĂ DIRECȚIA.',
      neuroFact: 'Demontarea mitului "ABS frânează pe loc" salvează vieți în condiții de aderență scăzută.'
    }
  },
  {
    id: 'drp-20',
    category: 'first_aid',
    question: 'Care este raportul corect între compresiile toracice și ventilațiile artificiale la resuscitarea cardio-pulmonară (RCR) la un adult?',
    options: [
      { id: 'A', text: '30 de compresii toracice urmate de 2 ventilații' },
      { id: 'B', text: '15 compresii toracice urmate de 5 ventilații' },
      { id: 'C', text: 'Ritmul compresiilor trebuie să fie de 100-120 pe minut, cu o adâncime de 5-6 cm' }
    ],
    correctAnswers: ['A', 'C'],
    explanation: 'Standardul internațional de resuscitare pentru adult este: 30 de compresii sternale alternate cu 2 insuflații (30:2), aplicate la o frecvență de 100-120 bătăi pe minut (pe ritmul melodiei "Stayin Alive") și adâncime de 5-6 cm.',
    legalReference: 'Ghidul European de Resuscitare ERC 2021-2025',
    eloRating: 1100,
    blunderSeverity: 'critical',
    ciaMemoryAnchor: {
      peg: '30 to 2 Rhythm: 30 bătăi de inimă, 2 sufluri de viață.',
      cognitiveRule: 'RCR = 30 : 2 la 100-120 bpm (ritmul Stayin Alive).',
      neuroFact: 'Ancorarea ritmului motor la un stimul muzical cunoscut asigură constanța frecvenței.'
    }
  },
  {
    id: 'drp-21',
    category: 'priority',
    question: 'La o intersecție semnalizată cu semafor electric funcțional care afișează culoarea VERDE, dar există și indicatorul „Cedează trecerea”, cum procedați?',
    options: [
      { id: 'A', text: 'Respectați semnificația culorii verzi a semaforului și treceți' },
      { id: 'B', text: 'Respectați indicatorul „Cedează trecerea” deoarece este mai restrictiv' },
      { id: 'C', text: 'Acordați prioritate numai vehiculelor care vin din dreapta' }
    ],
    correctAnswers: ['A'],
    explanation: 'Ierarhia semnalizării rutiere este strictă: 1. Polițist > 2. Semnale speciale (girofar/sirenă) > 3. Semafor > 4. Indicatoare rutiere > 5. Marcaje > 6. Regula de dreapta. Când semaforul funcționează, indicatoarele de prioritate sunt ANULATE!',
    legalReference: 'Art. 31 din OUG 195/2002',
    eloRating: 1000,
    blunderSeverity: 'critical',
    ciaMemoryAnchor: {
      peg: 'Hierarchy Ladder: Polițist > Semafor > Tablă > Dreapta.',
      cognitiveRule: 'Semaforul bate indicatorul. Indicatorul "Cedează" se aplică doar dacă semaforul e stins/galben intermitent.',
      neuroFact: 'Ierarhiile stricte previn ezitarea decizională de tip conflictual în cortexul cingulat anterior.'
    }
  },
  {
    id: 'drp-22',
    category: 'offenses_penalties',
    question: 'La acumularea a câte puncte de penalizare se suspendă dreptul de a conduce autovehicule pe drumurile publice?',
    options: [
      { id: 'A', text: 'La acumularea a cel puțin 15 puncte de penalizare' },
      { id: 'B', text: 'Permisul se suspendă pentru o perioadă de 30 de zile' },
      { id: 'C', text: 'La acumularea a 10 puncte de penalizare pentru o perioadă de 60 de zile' }
    ],
    correctAnswers: ['A', 'B'],
    explanation: 'Acumularea a 15 puncte de penalizare atrage suspendarea exercitării dreptului de a conduce pe o perioadă de 30 de zile (sau 60 de zile dacă s-au acumulat din nou 15 puncte în mai puțin de 12 luni de la prima suspendare). Punctele se anulează la 6 luni de la comiterea faptei.',
    legalReference: 'Art. 103 alin. (1) lit. a) din OUG 195/2002',
    eloRating: 1200,
    blunderSeverity: 'major',
    ciaMemoryAnchor: {
      peg: '15 Points = 30 Days Penalty Box.',
      cognitiveRule: '15 puncte de penalizare -> 30 zile pe tușă.',
      neuroFact: 'Numerele rotunde asociate cu durate temporale se memorează ca pereche modulară.'
    }
  },
  {
    id: 'drp-23',
    category: 'circulation_rules',
    question: 'Ce obligație are conducătorul auto când observă lumina galbenă intermitentă a unui semafor într-o intersecție?',
    options: [
      { id: 'A', text: 'Să oprească obligatoriu înainte de intersecție' },
      { id: 'B', text: 'Să reducă viteza și să circule cu atenție sporită, respectând indicatoarele de prioritate instalate' },
      { id: 'C', text: 'Dacă nu există indicatoare, să aplice regula priorității de dreapta' }
    ],
    correctAnswers: ['B', 'C'],
    explanation: 'Lumina galbenă intermitentă permite trecerea cu viteză redusă și atenție sporită. Ea semnalizează că semaforul este deconectat de la dirijare, obligând la respectarea indicatoarelor de prioritate sau a priorității de dreapta în absența acestora.',
    legalReference: 'Art. 54 din Regulament OUG 195/2002',
    eloRating: 1050,
    blunderSeverity: 'major',
    ciaMemoryAnchor: {
      peg: 'Flashing Amber = Sleep Mode. Trece la nivelul următor din ierarhie.',
      cognitiveRule: 'Galben intermitent = Semafor inactiv -> Privește indicatoarele sau dreapta.',
      neuroFact: 'Semnalul intermitent comută atenția de la un stimul automatizat la un protocol euristic.'
    }
  },
  {
    id: 'drp-24',
    category: 'overtaking_parking',
    question: 'Care este diferența legală între „oprire” și „staționare” conform legislației rutiere din România?',
    options: [
      { id: 'A', text: 'Oprirea este imobilizarea voluntară a vehiculului pe o durată de cel mult 5 minute' },
      { id: 'B', text: 'Staționarea este imobilizarea voluntară a vehiculului pe o durată mai mare de 5 minute' },
      { id: 'C', text: 'Oprirea nu poate fi făcută pe partea carosabilă, pe când staționarea da' }
    ],
    correctAnswers: ['A', 'B'],
    explanation: 'Conform OUG 195/2002: Oprirea voluntară durează maximum 5 minute. Orice imobilizare voluntară ce depășește 5 minute se consideră legal STAȚIONARE. Acolo unde este interzisă oprirea, este interzisă automat și staționarea!',
    legalReference: 'Art. 63 din OUG 195/2002',
    eloRating: 950,
    blunderSeverity: 'minor',
    ciaMemoryAnchor: {
      peg: 'The 5-Minute Borderline: 0-5 min = Oprire. 5+ min = Staționare.',
      cognitiveRule: 'Oprirea interzisă interzice și staționarea. Staționarea interzisă PERMITE oprirea sub 5 minute.',
      neuroFact: 'Distingerea clară a termenilor juridici reduce erorile de semantică la examen.'
    }
  },
  {
    id: 'drp-25',
    category: 'priority',
    question: 'Vă apropiați de o cale ferată curentă nepăzită. Înainte de trecere întâlniți indicatorul „Crucea Sfântului Andrei” (Oprire la trecerea la nivel cu calea ferată). Unde opriți?',
    options: [
      { id: 'A', text: 'În locul cu vizibilitate maximă asupra căii ferate, fără a depăși indicatorul sau marcajul transversal de oprire' },
      { id: 'B', text: 'La 1 metru înaintea primei șine de cale ferată' },
      { id: 'C', text: 'Numai dacă auziți semnalul sonor al trenului care se apropie' }
    ],
    correctAnswers: ['A'],
    explanation: 'La calea ferată fără bariere și fără semnale luminoase, oprirea este OBLIGATORIE înainte de indicator sau de linia transversală continuă de oprire, în locul cu vizibilitate maximă spre ambele sensuri de cale ferată.',
    legalReference: 'Art. 138 din Regulament OUG 195/2002',
    eloRating: 1100,
    blunderSeverity: 'critical',
    imageType: 'road_sign',
    ciaMemoryAnchor: {
      peg: 'St. Andrew Cross = Zero tolerance stop.',
      cognitiveRule: 'Crucea Sf. Andrei = Oprești obligatoriu înainte de indicator, chiar dacă linia pare părăsită.',
      neuroFact: 'Instinctul de conservare activat de imagistica feroviară fixează regula de oprire.'
    }
  },
  {
    id: 'drp-26',
    category: 'road_signs',
    question: 'Ce indică panoul adițional montat sub un indicator de prioritate, care prezintă o linie groasă curbă și două linii subțiri?',
    options: [
      { id: 'A', text: 'Traseul drumului cu prioritate (linia groasă)' },
      { id: 'B', text: 'Drumurile secundare fără prioritate (liniile subțiri)' },
      { id: 'C', text: 'Obligația de a reduce viteza la 30 km/h în curbă' }
    ],
    correctAnswers: ['A', 'B'],
    explanation: 'Panoul adițional „Direcția drumului cu prioritate” indică prin linia îngroșată continuitatea drumului prioritar prin intersecție. Liniile subțiri reprezintă drumurile fără prioritate (secundare).',
    legalReference: 'Panouri adiționale - Anexa 2 OUG 195/2002',
    eloRating: 1300,
    blunderSeverity: 'critical',
    imageType: 'road_sign',
    imageData: { signCode: 'PRIORITY_BEND' },
    ciaMemoryAnchor: {
      peg: 'Thick Line = Royal Highway. Thin Line = Peasant Crossway.',
      cognitiveRule: 'Linia groasă = Cine circulă pe ea păstrează prioritatea. Cine o părăsește sau intră pe ea dă prioritate.',
      neuroFact: 'Diferențierea grosimii liniilor folosește canalele de contrast magnocelulare ale vederii.'
    }
  }
];
