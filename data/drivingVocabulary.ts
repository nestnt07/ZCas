import { VocabTerm } from '@/types/driving';

export const DRIVING_VOCABULARY: VocabTerm[] = [
  {
    id: 'vocab-acostament',
    term: 'Acostament',
    simpleMeaning: 'Fâșia îngustă de pământ, pietriș sau asfalt de pe marginea drumului, chiar lângă șosea.',
    detailedLegalDefinition: 'Fâșia laterală cuprinsă între limita părții carosabile și marginea platformei drumului (Art. 6 OUG 195/2002).',
    category: 'drum',
    realLifeExample: 'Când ai o pană la mașină în afara localității, tragi mașina pe acostament (pe marginea cu pietriș) ca să nu blochezi banda pe care circulă ceilalți.',
    examQuestionTrap: 'Capcană DRPCIV: „Pietonii au voie să circule pe carosabil dacă există acostament practicabil?” Răspuns: NU! Dacă există acostament, pietonii sunt obligați să meargă pe el, nu pe șosea.',
    synonymsOrSimplerTerms: ['Marginea drumului', 'Buză de pietriș', 'Fâșie laterală']
  },
  {
    id: 'vocab-partea-carosabila',
    term: 'Partea Carosabilă',
    simpleMeaning: 'Asfaltul propriu-zis pe care circulă mașinile (fără trotuare și fără șanțuri).',
    detailedLegalDefinition: 'Porțiunea din platforma drumului destinată circulației vehiculelor. Un drum poate avea una sau mai multe părți carosabile separate prin zone mediane.',
    category: 'drum',
    realLifeExample: 'Dacă strada are o bandă pe sens și trotuar pe stânga și dreapta, „partea carosabilă” este doar asfaltul negru dintre borduri unde merg roțile mașinilor.',
    examQuestionTrap: 'Întrebările fac diferența între „drum public” (care include tot: șosea, trotuar, șanț) și „partea carosabilă” (doar zona mașinilor).',
    synonymsOrSimplerTerms: ['Șoseaua efectivă', 'Banda de asfalt', 'Carosabil']
  },
  {
    id: 'vocab-declivitate',
    term: 'Declivitate',
    simpleMeaning: 'O pantă (drum care urcă) sau o rampă (drum care coboară) — orice drum care nu este drept/orizontal.',
    detailedLegalDefinition: 'Înclinarea longitudinală a drumului față de planul orizontal, exprimată în procente (rampe = urcări, pante = coborâri).',
    category: 'drum',
    realLifeExample: 'Când urci un deal spre Poiana Brașov, drumul are o declivitate accentuată (de exemplu 8% sau 10%).',
    examQuestionTrap: 'În întrebările DRPCIV scrie: „Pe sectoarele de drum cu declivitate pronunțată...”. Înseamnă pur și simplu: la urcare sau la coborâre abruptă!',
    synonymsOrSimplerTerms: ['Pantă', 'Urcare/Coborâre', 'Drum înclinat']
  },
  {
    id: 'vocab-calarea-motorului',
    term: 'Calarea Motorului',
    simpleMeaning: 'Când piesele din metal din interiorul motorului se topesc și se sudează între ele pentru că mașina a rămas fără ulei, iar motorul se distruge definitiv.',
    detailedLegalDefinition: 'Blocarea mecanică ireversibilă a pieselor în mișcare (pistoane, vilbrochen) cauzată de frecare extremă și lipsa ungerii cu ulei.',
    category: 'mecanica',
    realLifeExample: 'Dacă se aprinde martorul roșu cu „lampa de ulei” în bord și tu continui să mergi 3 minute, motorul scoate un zgomot puternic de fier pe fier și se blochează (calează). Reparația costă mii de euro.',
    examQuestionTrap: '„Ce consecințe are scăderea nivelului de ulei sub minim?” Răspuns corect: Calarea și distrugerea totală a motorului.',
    synonymsOrSimplerTerms: ['Griparea motorului', 'Blocarea motorului din lipsă de ulei']
  },
  {
    id: 'vocab-acvaplanare',
    term: 'Acvaplanare',
    simpleMeaning: 'Când mașina trece cu viteză prin bălți mari de apă, iar anvelopele plutesc pe o peliculă de apă în loc să atingă asfaltul. Volanul devine moale și frânele nu mai au efect!',
    detailedLegalDefinition: 'Pierderea aderenței pneurilor la carosabilul acoperit cu apă, cauzată de formarea unei perne de lichid între pneu și sol la viteze mari.',
    category: 'manevre',
    realLifeExample: 'Mergi cu 100 km/h pe ploaie torențială. Intri într-o baltă adâncă, simți că mașina alunecă ca o sanie pe gheață și volanul se învârte fără nicio rezistență.',
    examQuestionTrap: '„Ce trebuie să faceți dacă mașina intră în acvaplanare?” Răspuns: NU călca frâna brusc și NU smuci volanul! Iei piciorul fin de pe accelerație și ții volanul drept până roțile ating din nou asfaltul.',
    synonymsOrSimplerTerms: ['Plutirea mașinii pe apă', 'Pierderea aderenței pe ploaie']
  },
  {
    id: 'vocab-pelicula-de-apa',
    term: 'Peliculă de Apă',
    simpleMeaning: 'Un strat foarte subțire și alunecos de apă de pe suprafața asfaltului (când începe să plouă ușor peste praful de pe drum).',
    detailedLegalDefinition: 'Strat milimetric de lichid care reduce coeficientul de frecare dintre pneu și suprafața de rulare.',
    category: 'drum',
    realLifeExample: 'Primele 10 minute de ploaie sunt cele mai periculoase: apa se amestecă cu praful și uleiul de pe șosea formând o mâzgă extrem de alunecoasă.',
    examQuestionTrap: '„De ce este periculos începutul ploii?” Răspuns: Pelicula subțire de apă formează o mâzgă alunecoasă, mărind considerabil distanța de frânare.',
    synonymsOrSimplerTerms: ['Strat fin de apă', 'Umezeală pe asfalt', 'Mâzgă']
  },
  {
    id: 'vocab-mtma',
    term: 'Masa Totală Maximă Autorizată (MTMA)',
    simpleMeaning: 'Greutatea maximă absolută permisă a mașinii, calculată cu tot cu caroserie, benzină, șofer, 4 pasageri și portbagajul plin. Pentru permisul B, limita este de maximum 3.500 kg (3.5 tone).',
    detailedLegalDefinition: 'Masa maximă a unui vehicul încărcat, declarată admisibilă de către autoritatea competentă (Art. 6 din OUG 195/2002).',
    category: 'juridic',
    realLifeExample: 'Un autoturism obișnuit are o masă proprie de 1.400 kg și o MTMA de 1.900 kg trecută în talon (certificatul de înmatriculare).',
    examQuestionTrap: '„Ce vehicule puteți conduce cu categoria B?” Răspuns: Autovehicule a căror masă totală maximă autorizată NU depășește 3.500 kg și al căror număr de locuri pe scaune (în afara conducătorului) nu este mai mare de 8.',
    synonymsOrSimplerTerms: ['Greutatea maximă legală', 'Masa maximă admisă', 'Limita de 3.5 tone']
  },
  {
    id: 'vocab-remorca-usoara',
    term: 'Remorcă Ușoară',
    simpleMeaning: 'O remorcă mică ce are o greutate maximă autorizată de cel mult 750 kg. Poate fi tractată cu permis categoria B fără a avea nevoie de permis special B+E.',
    detailedLegalDefinition: 'Remorca a cărei masă totală maximă autorizată nu depășește 750 kg.',
    category: 'juridic',
    realLifeExample: 'Remorca mică cu o singură osie pe care o pui în spatele mașinii ca să transporți saci de ciment sau biciclete în concediu.',
    examQuestionTrap: '„Ai voie cu permis B să tragi o remorcă?” Răspuns: DA, dacă este o remorcă ușoară (până în 750 kg) sau dacă ansamblul nu depășește 3.500 kg.',
    synonymsOrSimplerTerms: ['Remorcă sub 750 kg', 'Remorcă mică de bagaje']
  },
  {
    id: 'vocab-catadioptri',
    term: 'Catadioptru / Catadioptri',
    simpleMeaning: '„Ochii de pisică” — acele bucăți de plastic reflectorizant de pe spatele mașinii sau de pe biciclete care luminează puternic când sunt bătute de farurile altei mașini, chiar dacă becurile sunt stinse.',
    detailedLegalDefinition: 'Dispozitiv optic retroreflectorizant destinat să semnalizeze prezența unui vehicul prin reflectarea luminii emanate de la o sursă de lumină exterioară.',
    category: 'mecanica',
    realLifeExample: 'Dacă o mașină este parcată pe o uliță întunecată fără lumini, farurile tale bat în spatele ei și vezi instantaneu două dreptunghiuri roșii reflectorizante.',
    examQuestionTrap: '„Ce culoare trebuie să aibă catadioptrii din spatele autovehiculelor?” Răspuns obligatoriu: ROȘIE! (În față sunt albi, pe lateral sunt galbeni/portocalii).',
    synonymsOrSimplerTerms: ['Ochi de pisică', 'Elemente reflectorizante', 'Reflectorițe']
  },
  {
    id: 'vocab-punct-de-forfecare',
    term: 'Punct de Forfecare (Bite Point)',
    simpleMeaning: 'Momentul când ridici pedala de ambreiaj și simți că mașina începe să vibreze fin și vrea să plece de pe loc. Aici trebuie să ții piciorul nemișcat 2 secunde ca să nu moară motorul!',
    detailedLegalDefinition: 'Zona de cuplare mecanică parțială între discul de ambreiaj și volanta motorului, în care forțele de rotație încep să se transmită către cutia de viteze.',
    category: 'manevre',
    realLifeExample: 'Când stai pe loc la semafor: apeși ambreiajul la fund, pui treapta 1, accelerezi puțin și ridici piciorul stâng. Când simți o vibrație ușoară și botul mașinii se ridică, ai găsit punctul de forfecare.',
    examQuestionTrap: 'Mulți începători dau drumul brusc pedalei după ce simt vibrația, iar motorul se oprește violent. Secretul este blocarea piciorului 2 secunde.',
    synonymsOrSimplerTerms: ['Punctul de cuplare', 'Patinarea ambreiajului', 'Bite point']
  },
  {
    id: 'vocab-frana-de-serviciu',
    term: 'Frâna de Serviciu vs Staționare vs Motor',
    simpleMeaning: 'Frâna de serviciu este pedala normală de frână de picior (oprește toate cele 4 roți). Frâna de staționare este frâna de mână (blochează roțile spate când parchezi). Frâna de motor este când iei piciorul de pe accelerație și motorul încetinește mașina singur.',
    detailedLegalDefinition: 'Frâna de serviciu acționează asupra tuturor roților; frâna de staționare menține vehiculul imobilizat chiar pe o pantă în absența șoferului.',
    category: 'mecanica',
    realLifeExample: 'La coborârea unei pante abrupte: dacă ții pedala (frâna de serviciu) apăsată 5 minute continuu, discurile iau foc și nu mai prind! De aceea bagi în treapta 2 și folosești frâna de motor.',
    examQuestionTrap: 'La DRPCIV nu scrie „pedala de frână”, ci scrie „frâna de serviciu”. Nu te lăsa derutat de denumirea tehnică!',
    synonymsOrSimplerTerms: ['Pedala de frână (serviciu)', 'Frâna de mână (staționare)', 'Frâna din cutie (motor)']
  },
  {
    id: 'vocab-cursa-libera-pedala',
    term: 'Cursa Liberă a Pedalei',
    simpleMeaning: 'Câțiva centimetri pe care îi parcurge pedala de frână sau ambreiaj când o apeși ușor, înainte ca mecanismul efectiv să înceapă să strângă roțile sau discul.',
    detailedLegalDefinition: 'Distanța parcursă de pedală de la poziția de repaus până în momentul în care începe acționarea efectivă a cilindrului principal sau a pârghiei.',
    category: 'mecanica',
    realLifeExample: 'Dacă apeși pedala de frână și ea merge până la fundul podelei ca prin brânză fără să frâneze, înseamnă că ai pierdut lichid de frână sau cursa e dereglată grav.',
    examQuestionTrap: '„O cursă liberă prea mare a pedalei de frână indică:” Răspuns: Uzura excesivă a plăcuțelor sau prezența aerului în instalația hidraulică de frânare.',
    synonymsOrSimplerTerms: ['Jocul pedalei', 'Cursa moartă']
  },
  {
    id: 'vocab-joc-la-volan',
    term: 'Jocul la Volan',
    simpleMeaning: 'Cât de mult poți mișca volanul stânga-dreapta fără ca roțile de pe asfalt să se miște deloc. Legal, este permis un joc de maximum 15 grade.',
    detailedLegalDefinition: 'Unghiul de rotație liberă a volanului înainte ca mecanismul casetei de direcție să transmită mișcarea bieletelor și roților directoare.',
    category: 'mecanica',
    realLifeExample: 'Dacă miști volanul 3-4 centimetri și mașina continuă să meargă drept înainte fără nicio reacție, direcția este uzată și periculoasă.',
    examQuestionTrap: '„Jocul la volan mai mare de 15 grade determină:” Răspuns: Reținerea certificatului de înmatriculare (talonului) de către poliție până la remedierea defecțiunii.',
    synonymsOrSimplerTerms: ['Jocul casetei de direcție', 'Mișcarea liberă a volanului']
  },
  {
    id: 'vocab-vehicul-regim-prioritar',
    term: 'Vehicul cu Regim de Circulație Prioritar',
    simpleMeaning: 'Mașinile speciale de intervenție (Poliție, Pompieri, Salvare/SMURD) când au pornite ambele semnale: și girofarul luminos, și sirena acustică!',
    detailedLegalDefinition: 'Autovehiculele aparținând poliției, serviciilor de ambulanță, pompierilor, jandarmeriei, când se deplasează la intervenții și au în funcțiune semnalele speciale de avertizare luminoase și sonore (Art. 32 OUG 195/2002).',
    category: 'prioritate',
    realLifeExample: 'O ambulanță care are doar girofarul albastru aprins dar NU are sirena pornită NU are prioritate absolută! Are prioritate doar când are și lumina, și sunetul.',
    examQuestionTrap: 'Capcană celebră DRPCIV: „O salvare cu lumini albastre dar fără semnal sonor are voie să treacă pe roșu?” Răspuns: NU! Pentru a fi în regim prioritar trebuie să aibă ambele semnale (lumina + sirena).',
    synonymsOrSimplerTerms: ['Mașină de intervenție', 'Ambulanță/Poliție în misiune', 'Girofar cu sirenă']
  },
  {
    id: 'vocab-contraventie-infractiune',
    term: 'Contravenție vs Infracțiune',
    simpleMeaning: 'Contravenție = o abatere mai ușoară (primești doar amendă, puncte de penalizare sau suspendarea permisului pe 30-90 zile). Infracțiune = faptă foarte gravă care se lasă cu dosar penal, cazier și închisoare!',
    detailedLegalDefinition: 'Contravenția este fapta ilicită sancționată administrativ. Infracțiunea este fapta prevăzută de Codul Penal (cum ar fi alcool peste 0.40 mg/l în aer sau conducere fără permis).',
    category: 'juridic',
    realLifeExample: 'Dacă depășești viteza cu 30 km/h iei amendă (contravenție). Dacă conduci băut cu 0.50 mg/l alcool sau fugi de la un accident cu victime, este infracțiune (dosar penal și riști închisoarea).',
    examQuestionTrap: '„Constituie infracțiune:” Răspunsuri tipice: Conducerea fără permis, refuzul recoltării de sânge, părăsirea locului accidentului cu răniți.',
    synonymsOrSimplerTerms: ['Amendă (contravenție)', 'Dosar penal (infracțiune)']
  },
  {
    id: 'vocab-imobilizare',
    term: 'Imobilizarea Vehiculului',
    simpleMeaning: 'Când polițistul rutier îți oprește mașina pe loc și îți interzice să mai pleci cu ea (îți poate lua cheile, demonta plăcuțele de înmatriculare sau pune blocator pe roată).',
    detailedLegalDefinition: 'Scoaterea forțată a vehiculului din circulație prin aplicarea unor dispozitive tehnice sau reținerea documentelor când starea tehnică sau starea șoferului periclitează grav siguranța.',
    category: 'juridic',
    realLifeExample: 'Dacă ești prins la volan băut sau mașina ta nu are deloc frâne sau anvelopele sunt complet tocite, polițistul imobilizează mașina pe loc.',
    examQuestionTrap: '„Când se dispune imobilizarea vehiculului?” Răspuns: Când conducătorul refuză testarea alcoolscop, nu are permis sau vehiculul prezintă defecțiuni periculoase la frâne/direcție.',
    synonymsOrSimplerTerms: ['Blocarea mașinii', 'Scoaterea forțată din trafic']
  },
  {
    id: 'vocab-centru-imaginar',
    term: 'Centrul Imaginar al Intersecției',
    simpleMeaning: 'Punctul invizibil din mijlocul intersecției. Conform noilor reguli europene, la virajul la stânga ocolești acest centru imaginar prin stânga ta (adică mașinile trec una prin fața celeilalte fără să se mai învârtă în cerc).',
    detailedLegalDefinition: 'Punctul geometric central al suprafeței comune de intersecție a drumurilor publice.',
    category: 'manevre',
    realLifeExample: 'Tu faci stânga, și mașina din sens opus face și ea stânga. Nu vă mai ocoliți pe la spate; vă apropiați și treceți unul prin fața celuilalt bot în bot, lăsând centrul în dreapta voastră.',
    examQuestionTrap: '„Cum se efectuează virajul la stânga într-o intersecție?” Răspuns: Prin stânga centrului imaginar, fără a intersecta traiectoria celuilalt vehicul care virează la stânga din sens opus.',
    synonymsOrSimplerTerms: ['Mijlocul intersecției', 'Punctul central invizibil']
  },
  {
    id: 'vocab-unghi-mort',
    term: 'Unghiul Mort (Blind Spot)',
    simpleMeaning: 'Zona din lateralul și spatele mașinii pe care oglinzile tale retrovizoare NU o pot reflecta. Dacă o mașină, o motocicletă sau o trotinetă se află acolo, nu o vezi în oglindă până nu întorci capul!',
    detailedLegalDefinition: 'Zona din jurul autovehiculului invizibilă pentru conducător atât prin parbriz/geamuri cât și prin sistemul de oglinzi retrovizoare.',
    category: 'manevre',
    realLifeExample: 'Mergi pe banda 1 și vrei să treci pe banda 2. Te uiți în oglinda stângă și pare liber. Rotești capul 45 de grade spre geam și vezi o mașină exact lângă portiera ta din spate!',
    examQuestionTrap: 'La proba practică, polițistul te depunctează aspru dacă nu rotești capul vizibil spre unghiul mort la fiecare plecare de pe loc sau schimbare de bandă.',
    synonymsOrSimplerTerms: ['Zona oarbă', 'Zona invizibilă din oglindă', 'Blind spot']
  },
  {
    id: 'vocab-cale-ferata-curenta-industriala',
    term: 'Cale Ferată Curentă vs Industrială',
    simpleMeaning: 'Cale ferată curentă = liniile pe care merg trenurile normale de călători și marfă cu viteză mare (au bariere sau Crucea Sf. Andrei, trenul are prioritate absolută!). Cale ferată industrială = șine vechi spre depozite sau fabrici unde locomotivele merg cu 5 km/h și adesea trenul dă prioritate mașinilor sau are un om pe jos cu steag roșu!',
    detailedLegalDefinition: 'Calea ferată industrială deservește agenți economici; traversarea acesteia este semnalizată prin indicator specific și adesea pilotată de un agent de cale ferată.',
    category: 'drum',
    realLifeExample: 'În dreptul unei uzine treci peste niște șine de tren. Indicatorul spune „Trecere la nivel cu o cale ferată industrială”. Acolo trenul circulă lent și este însoțit de un om cu steguleț.',
    examQuestionTrap: '„La trecerea la nivel cu calea ferată industrială sunteți obligat să opriți la fel ca la calea ferată curentă?” Răspuns: NU! Respectați semnalele agentului de cale ferată sau ale instalației locale.',
    synonymsOrSimplerTerms: ['Șine de tren obișnuite (curentă)', 'Șine de fabrică/depozit (industrială)']
  },
  {
    id: 'vocab-etilotest-proba-biologica',
    term: 'Etilotest vs Proba Biologică de Sânge',
    simpleMeaning: 'Etilotestul este aparatul portabil în care sufli în stradă când te oprește poliția. Proba biologică este recoltarea de sânge făcută exclusiv la o unitate medicală (spital) de către un medic pentru a stabili alcoolemia exactă.',
    detailedLegalDefinition: 'Testarea cu mijloc tehnic omologat măsoară miligramele de alcool pur per litru de aer expirat. Proba biologică de sânge stabilește gramele de alcool per litru de sânge (valoarea juridică supremă în instanță).',
    category: 'juridic',
    realLifeExample: 'Dacă sufli în etilotest și aparatul arată peste 0.40 mg/l, polițistul te duce obligatoriu la spital pentru recoltarea a două probe de sânge la interval de 1 oră.',
    examQuestionTrap: '„Refuzul conducătorului auto de a se supune recoltării probelor biologice de sânge constituie:” Răspuns: INFRACȚIUNE pedepsită cu închisoare de la 1 la 5 ani!',
    synonymsOrSimplerTerms: ['Aparatul de suflat (etilotest)', 'Analiza de sânge la spital (proba biologică)']
  },
  {
    id: 'vocab-pls',
    term: 'Poziția Laterală de Siguranță (PLS)',
    simpleMeaning: 'Modul în care așezi pe o parte (pe o dungă) o persoană leșinată care respiră, cu capul dat ușor pe spate și un genunchi îndoit, ca să nu se sufoce cu propria limbă sau cu vărsături.',
    detailedLegalDefinition: 'Poziție specifică de prim ajutor pentru victimele inconștiente dar care prezintă respirație spontană, menținând căile aeriene deschise și prevenind aspirarea pulmonară a secrețiilor.',
    category: 'prim_ajutor',
    realLifeExample: 'Găsești o victimă inconștientă după un accident, verifici și vezi că toracele i se mișcă (respiră). O întorci ușor pe o parte, cu cotul sub obraz și piciorul flexat, până sosesc medicii de la SMURD.',
    examQuestionTrap: '„În ce poziție se așază o victimă inconștientă care respiră?” Răspuns corect: În poziția laterală de siguranță (PLS). Nu pe spate și nu pe burtă!',
    synonymsOrSimplerTerms: ['Așezarea pe o parte a victimei', 'Poziție de siguranță anti-asfixiere']
  },
  {
    id: 'vocab-garou',
    term: 'Garou (Hemostază)',
    simpleMeaning: 'O bandă de cauciuc sau o fașă strânsă foarte tare deasupra unei răni la mână sau picior pentru a opri o hemoragie arterială masivă (sânge care țâșnește ca dintr-o fântână arteziană). Se aplică doar la amputații și este obligatoriu să scrii pe un bilet ora exactă când l-ai pus!',
    detailedLegalDefinition: 'Dispozitiv circular constrictor aplicat pe un membru pentru ocluzia fluxului arterial în cazul hemoragiilor cataclismice imposibil de controlat prin pansament compresiv.',
    category: 'prim_ajutor',
    realLifeExample: 'După un accident grav, un pasager are o tăietură profundă la braț și sângele țâșnește pulsatil. Se aplică un garou mai sus de rană și se notează pe bilet atașat la vedere: „Ora 14:25”.',
    examQuestionTrap: '„Ce trebuie atașat obligatoriu la aplicarea unui garou?” Răspuns: Un bilet pe care este notată ora și minutul aplicării (pentru ca medicii să știe când să-l desfacă înainte de necrozarea membrului).',
    synonymsOrSimplerTerms: ['Bandă de oprire a sângerării', 'Dispozitiv compresiv de urgență']
  },
  {
    id: 'vocab-zona-rezidentiala-pietonala',
    term: 'Zonă Rezidențială vs Zonă Pietonală',
    simpleMeaning: 'În zona rezidențială viteza maximă este de 20 km/h, iar pietonii au voie să meargă și să se joace pe toată lățimea străzii. În zona pietonală au voie doar mașinile speciale și riveranii cu maximum 5 km/h!',
    detailedLegalDefinition: 'Zonă semnalizată prin indicator special unde regulile de circulație acordă prioritate deplină pietonilor și impun limite drastice de viteză.',
    category: 'drum',
    realLifeExample: 'Străduțele înguste dintre blocurile noi cu indicatorul albastru cu casă și copil cu minge sunt zone rezidențiale: rulezi cu maxim 20 km/h.',
    examQuestionTrap: '„Care este viteza maximă admisă în zona rezidențială?” Răspuns: 20 km/h! Iar în zona pietonală: 5 km/h!',
    synonymsOrSimplerTerms: ['Zonă cu limita 20 km/h (rezidențială)', 'Zonă cu limita 5 km/h (pietonală)']
  },
  {
    id: 'vocab-stationare-alternanta',
    term: 'Staționare Alternantă (Semnul I și II)',
    simpleMeaning: 'Indicatoarele rotunde albastre tăiate cu o linie roșie care conțin cifrele romane I sau II. Semnul cu I interzice parcarea în zilele impare (1, 3, 5 ale lunii), iar semnul cu II interzice parcarea în zilele pare (2, 4, 6 ale lunii).',
    detailedLegalDefinition: 'Restricție de parcare alternativă pe una dintre părțile străzii pentru a permite curățenia sau accesul utilajelor în funcție de paritatea calendaristică.',
    category: 'manevre',
    realLifeExample: 'Pe o stradă îngustă, marți 14 octombrie (zi pară), ai voie să parchezi doar pe partea cu semnul I; pe partea cu semnul II staționarea e interzisă.',
    examQuestionTrap: 'Cifra I = interzis în zilele impare. Cifra II = interzis în zilele pare. Nu se confundă cu numărul de ore!',
    synonymsOrSimplerTerms: ['Parcare pară/impară', 'Zile pare și impare']
  },
  {
    id: 'vocab-devansare',
    term: 'Devansare (Circulația pe Benzi Paralele)',
    simpleMeaning: 'Când mergi pe banda ta cu 60 km/h și treci pe lângă o mașină de pe banda din dreapta ta care merge cu 40 km/h, FĂRĂ să ieși de pe banda ta. Aceasta NU este o depășire în sens legal!',
    detailedLegalDefinition: 'Trecerea unui vehicul înaintea altui vehicul care circulă pe o bandă alăturată în același sens de mers, fără schimbarea benzii de circulație.',
    category: 'manevre',
    realLifeExample: 'Pe un bulevard cu 3 benzi pe sens, tu mergi pe banda 2 cu viteza legală. Banda 1 merge mai lent din cauza unui autobuz. Trecerea ta pe lângă el pe banda 2 este o simplă devansare, nu depășire.',
    examQuestionTrap: '„Constituie depășire trecerea înainte a unui vehicul care circulă pe o bandă mai lentă dacă nu schimbați banda?” Răspuns: NU! Nu este considerată depășire.',
    synonymsOrSimplerTerms: ['Trecere pe bandă paralelă', 'Devansare fără schimbare de bandă']
  },
  {
    id: 'vocab-banda-stocare',
    term: 'Bandă de Stocare (Preselectare)',
    simpleMeaning: 'Banda special amenajată în mijlocul străzii unde te așezi ca să aștepți să virezi la stânga, fără să blochezi mașinile din spatele tău care vor să meargă drept înainte.',
    detailedLegalDefinition: 'Bandă suplimentară de circulație destinată vehiculelor care urmează să schimbe direcția de mers spre stânga la o intersecție.',
    category: 'drum',
    realLifeExample: 'Vrei să faci stânga peste bulevard într-un supermarket. Intri pe o bandă marcată pe mijloc, oprești acolo, aștepți să treacă cei din sens opus, în timp ce în spatele tău mașinile trec libere pe benzile din dreapta.',
    examQuestionTrap: 'Preselectarea benzii trebuie făcută cu cel puțin 50 de metri înainte de intersecție în localitate!',
    synonymsOrSimplerTerms: ['Banda pentru viraj stânga', 'Banda de refugiu pentru viraj']
  },
  {
    id: 'vocab-refugiu-pietoni',
    term: 'Refugiu pentru Pietoni',
    simpleMeaning: 'Platforma înălțată de beton din mijlocul străzii (de regulă unde este stația de tramvai sau pe trecerile de pietoni foarte late) unde oamenii pot sta în siguranță.',
    detailedLegalDefinition: 'Amenajare rutieră separată de partea carosabilă, destinată așteptării pietonilor sau călătorilor mijloacelor de transport pe șine.',
    category: 'drum',
    realLifeExample: 'Oprești la stația de tramvai. Dacă stația are refugiu de beton, pietonii stau pe refugiu și tu AI VOIE să treci cu mașina pe lângă tramvai cu viteză redusă. Dacă stația NU are refugiu, ești OBLIGAT să oprești mașina în spatele tramvaiului!',
    examQuestionTrap: '„Când sunteți obligat să opriți în spatele tramvaiului oprit în stație?” Răspuns: Oprești doar dacă stația NU are refugiu pentru pietoni! Dacă are refugiu, treci cu atenție redusă la sub 30 km/h.',
    synonymsOrSimplerTerms: ['Insuliță de beton', 'Stația de tramvai protejată']
  }
];
