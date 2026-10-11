import { RoadSign } from '@/types/driving';

export const ROAD_SIGNS_DATABASE: RoadSign[] = [
  // --- PRIORITATE ---
  {
    id: 'sign-stop',
    name: 'Oprire (STOP)',
    code: 'A01',
    category: 'priority',
    description: 'Obligă la oprirea completă a vehiculului (viteza 0 km/h) în locul cu vizibilitate maximă, fără a depăși colțul intersecției sau marcajul transversal, și acordarea priorității tuturor vehiculelor de pe drumul prioritar.',
    legalRule: 'Oprirea roților pe loc este necondiționată, chiar dacă drumul este complet pustiu. Nerespectarea atrage suspendarea permisului!',
    chessAnalogy: 'Ca o piesă imobilizată de un șah absolut: ești obligat să te oprești și să rezolvi amenințarea înainte de orice mișcare.',
    iconName: 'Octagon',
    colorScheme: 'red_white',
    commonExamTrap: 'Capcana DRPCIV: „Opriți numai dacă se apropie alt vehicul” -> FALS! Oprirea este OBLIGATORIE în toate situațiile.',
    svgType: 'stop',
    ciaMemoryAnchor: {
      shapeMeaning: 'OCTOGON ROȘU: Singurul semn din lume cu 8 laturi (recunoscut instantaneu chiar și acoperit de zăpadă din spate)',
      mnemonicPeg: 'Ancora Stop: 8 colțuri = 8 secunde de atenție maximă; viteza roții este zero absolut.',
      quickReflexRule: 'Oprește roata complet -> Asigură stânga-dreapta -> Pleacă doar când drumul e liber.'
    }
  },
  {
    id: 'sign-yield',
    name: 'Cedează trecerea',
    code: 'A02',
    category: 'priority',
    description: 'Obligă la reducerea vitezei și acordarea priorității tuturor vehiculelor care circulă pe drumul prioritar. Oprirea pe loc se face doar dacă se apropie vehicule.',
    legalRule: 'Triunghi cu vârful în jos. Dacă drumul prioritar este complet liber, ai voie să treci prin intersecție fără să oprești complet roata.',
    chessAnalogy: 'Câmp controlat de adversar: înaintezi doar dacă nu ești amenințat cu captura.',
    iconName: 'Triangle',
    colorScheme: 'red_white',
    commonExamTrap: 'Confundarea cu STOP: La Cedează NU ești obligat să oprești mașina dacă nu vine nimeni din lateral!',
    svgType: 'yield',
    ciaMemoryAnchor: {
      shapeMeaning: 'TRIUNGHI CU VÂRFUL ÎN JOS: Arată spre pământ (subordonare față de traficul prioritar)',
      mnemonicPeg: 'Vârful ascuțit în jos = lasă-i pe alții să treacă mai întâi.',
      quickReflexRule: 'Redu viteza -> Dacă e liber, treci -> Dacă vine cineva, oprești.'
    }
  },
  {
    id: 'sign-priority-road',
    name: 'Drum cu prioritate',
    code: 'A03',
    category: 'priority',
    description: 'Conferă prioritate de trecere în toate intersecțiile succesive, până la întâlnirea indicatorului „Sfârșitul drumului cu prioritate”.',
    legalRule: 'Romb galben cu bordură albă. În absența polițistului sau a semaforului funcțional, vehiculul tău trece primul.',
    chessAnalogy: 'Coloană deschisă dominată de Turnul tău: deții inițiativa deplină pe tot traseul.',
    iconName: 'Diamond',
    colorScheme: 'yellow_black',
    commonExamTrap: 'Dacă semaforul arată lumina ROȘIE, indicatorul de drum cu prioritate este anulat! Semaforul bate indicatorul!',
    svgType: 'priority_road',
    ciaMemoryAnchor: {
      shapeMeaning: 'ROMB GALBEN: Simbolul suveranității și al coroanei regale pe traseu.',
      mnemonicPeg: 'Galben ca aurul = ești regele drumului până la semnul tăiat.',
      quickReflexRule: 'Ai prioritate, dar reduci viteza preventiv și observi unghiurile laterale.'
    }
  },
  {
    id: 'sign-end-priority',
    name: 'Sfârșitul drumului cu prioritate',
    code: 'A04',
    category: 'priority',
    description: 'Semnalizează că segmentul prioritar s-a încheiat. La următoarea intersecție se revine la regula priorității de dreapta sau la alte indicatoare.',
    legalRule: 'Romb galben tăiat cu linii negre paralele.',
    chessAnalogy: 'Egalizarea poziției: pierderea avantajului de tempo și revenirea la luptă egală.',
    iconName: 'Slash',
    colorScheme: 'yellow_black',
    commonExamTrap: 'Mulți cred că devii automat drum secundar. Fals: dacă nu există alt semn, se aplică regula priorității de DREAPTA!',
    svgType: 'end_priority',
    ciaMemoryAnchor: {
      shapeMeaning: 'ROMB TĂIAT: Anularea privilegiului imperial de trecere.',
      mnemonicPeg: 'Dungile negre = sfârșitul luxului; reintră în vigoare prioritatea de dreapta.',
      quickReflexRule: 'Atenție sporită: în următoarea intersecție acorzi prioritate celor din dreapta ta!'
    }
  },
  {
    id: 'sign-priority-to-oncoming',
    name: 'Prioritate pentru circulația din sens invers',
    code: 'A05',
    category: 'priority',
    description: 'Pe sectoare de drum îngustat (lucrări, poduri înguste), ești obligat să acorzi prioritate vehiculelor care vin din față.',
    legalRule: 'Cerc alb cu contur roșu, săgeată neagră în jos și săgeată roșie în sus. Săgeata ta e roșie, deci pierzi prioritatea.',
    chessAnalogy: 'Pion blocat de o piesă superioară: trebuie să aștepți ca drumul să se elibereze.',
    iconName: 'Circle',
    colorScheme: 'red_white',
    commonExamTrap: 'Confundarea cu semnul pătrat albastru: cercul roșu îți INTERZICE trecerea dacă vine cineva din sens opus!',
    svgType: 'priority_to_oncoming',
    ciaMemoryAnchor: {
      shapeMeaning: 'CERC ROȘU = Restricție; săgeata ta este roșie și trebuie să cedeze.',
      mnemonicPeg: 'Săgeata roșie = STOP pentru tine dacă din față vine orice vehicul.',
      quickReflexRule: 'Aștepți înainte de îngustare până trec toți cei din față.'
    }
  },
  {
    id: 'sign-priority-over-oncoming',
    name: 'Prioritate față de circulația din sens invers',
    code: 'A06',
    category: 'priority',
    description: 'Pe sectoare de drum îngustate, ai dreptul să treci primul în fața celor care vin din sens opus.',
    legalRule: 'Pătrat albastru cu săgeată albă în sus (a ta) și săgeată roșie în jos (a lor).',
    chessAnalogy: 'Contraatac prioritar cu șah: forțezi adversarul să aștepte.',
    iconName: 'Square',
    colorScheme: 'blue_white',
    commonExamTrap: 'Dacă un vehicul din sens opus a pătruns deja pe sectorul îngust, nu îl forțezi să dea înapoi!',
    svgType: 'priority_over_oncoming',
    ciaMemoryAnchor: {
      shapeMeaning: 'PĂTRAT ALBASTRU = Drept pozitiv; săgeata ta este albă și are trecere.',
      mnemonicPeg: 'Săgeata albă mare = înaintezi primul cu atenție.',
      quickReflexRule: 'Ai prioritate, dar te asiguri că celălalt a observat indicatorul.'
    }
  },

  // --- INTERZICERE SAU RESTRICȚIE ---
  {
    id: 'sign-no-entry',
    name: 'Accesul interzis',
    code: 'C01',
    category: 'prohibition',
    description: 'Interzice accesul tuturor vehiculelor pe sensul de drum respectiv (de obicei intrarea pe o stradă cu sens unic din capătul opus).',
    legalRule: 'Cerc roșu cu bară orizontală albă (cunoscut ca „sens interzis”). Pătrunderea este contravenție gravă.',
    chessAnalogy: 'Câmp controlat de regele advers: pătrunderea pe el constituie o mutare ilegală.',
    iconName: 'MinusCircle',
    colorScheme: 'red_white',
    commonExamTrap: 'Nu confunda cu „Circulația interzisă în ambele sensuri”. Acest semn este valabil doar pentru sensul tău de intrare!',
    svgType: 'no_entry',
    ciaMemoryAnchor: {
      shapeMeaning: 'BARĂ ALBĂ ÎN CERC ROȘU: Zidul de netrecut al legii.',
      mnemonicPeg: 'Bara orizontală = barieră fizică închisă.',
      quickReflexRule: 'Niciun metru înainte pe această stradă!'
    }
  },
  {
    id: 'sign-closed-both-ways',
    name: 'Circulația interzisă în ambele sensuri',
    code: 'C02',
    category: 'prohibition',
    description: 'Interzice circulația oricărui vehicul în ambele direcții de mers (stradă pietonală sau închisă complet).',
    legalRule: 'Cerc alb gol cu contur roșu. Se aplică ambelor sensuri de circulație.',
    chessAnalogy: 'Pătrat scos complet din joc.',
    iconName: 'Circle',
    colorScheme: 'red_white',
    commonExamTrap: 'Întrebare DRPCIV: „Se poate intra pe o stradă cu acest semn dacă locuiești acolo?” -> Doar dacă există panou adițional cu „Cu excepția riveranilor”.',
    svgType: 'closed_both_directions',
    ciaMemoryAnchor: {
      shapeMeaning: 'CERC ALB GOL = Gol absolut; niciun vehicul pe niciun sens.',
      mnemonicPeg: 'Gaura albă = drum închis complet.',
      quickReflexRule: 'Nu intra decât dacă ai dispensă marcată pe panou adițional.'
    }
  },
  {
    id: 'sign-no-overtaking',
    name: 'Depășirea autovehiculelor interzisă',
    code: 'C03',
    category: 'prohibition',
    description: 'Interzice depășirea tuturor autovehiculelor (cu excepția motocicletelor fără ataș și a mopedelor).',
    legalRule: 'Cerc alb cu contur roșu, mașină roșie în stânga și mașină neagră în dreapta.',
    chessAnalogy: 'Pioni blocați cap în cap: nu poți sări peste piesa din față.',
    iconName: 'Ban',
    colorScheme: 'red_white',
    commonExamTrap: 'Întrebare capcană: „Ai voie să depășești o căruță, un moped sau o bicicletă pe sectorul cu acest semn?” Răspuns: DA, dacă nu încalci linia continuă!',
    svgType: 'no_overtaking',
    ciaMemoryAnchor: {
      shapeMeaning: 'MAȘINA ROȘIE PE CONTRASENS = Interzisă trecerea pe lângă alt autovehicul.',
      mnemonicPeg: 'Roșu în stânga = rămâi pe banda ta în spatele mașinii din față.',
      quickReflexRule: 'Nu depăși mașini, camioane sau tractoare până la semnul de sfârșit de restricție.'
    }
  },
  {
    id: 'sign-speed-limit-50',
    name: 'Limitare de viteză (50 km/h)',
    code: 'C04',
    category: 'prohibition',
    description: 'Fixează viteza maximă absolută admisă pe sectorul de drum la 50 km/h.',
    legalRule: 'Cerc alb cu bordură roșie și cifra 50. Își pierde valabilitatea la prima intersecție nedirijată!',
    chessAnalogy: 'Cadru de timp fix: control strict al vitezei de joc.',
    iconName: 'Gauge',
    colorScheme: 'red_white',
    commonExamTrap: 'Dacă după acest semn treci printr-o intersecție nedirijată și semnul nu se repetă, restricția de 50 încetează automat!',
    svgType: 'speed_limit_50',
    ciaMemoryAnchor: {
      shapeMeaning: 'CERC ROȘU CU CIFRĂ: Plafonul maxim legal de viteză.',
      mnemonicPeg: '50 în cerc roșu = acul vitezometrului nu are voie să treacă de 50.',
      quickReflexRule: 'Adaptează viteza sub valoarea indicată în cerc.'
    }
  },
  {
    id: 'sign-speed-limit-30',
    name: 'Limitare de viteză (30 km/h)',
    code: 'C05',
    category: 'prohibition',
    description: 'Impune viteza maximă de 30 km/h în zone rezidențiale aglomerate, curbe periculoase sau școli.',
    legalRule: 'Cerc alb cu bordură roșie și cifra 30.',
    chessAnalogy: 'Joc pozițional lent: prudență extremă.',
    iconName: 'Gauge',
    colorScheme: 'red_white',
    commonExamTrap: 'Depășirea cu peste 50 km/h a limitei (adică peste 80 km/h aici) suspendă permisul pentru 90 de zile!',
    svgType: 'speed_limit_30',
    ciaMemoryAnchor: {
      shapeMeaning: 'CERC ROȘU CU 30 = Prudență extremă în treapta a 2-a de viteză.',
      mnemonicPeg: '30 km/h = oprire instantanee la apariția unui pieton.',
      quickReflexRule: 'Rulează în treapta a 2-a cu piciorul pregătit deasupra frânei.'
    }
  },
  {
    id: 'sign-speed-limit-90',
    name: 'Limitare de viteză (90 km/h)',
    code: 'C06',
    category: 'prohibition',
    description: 'Indică viteza maximă admisă de 90 km/h pe un sector de drum în afara localităților.',
    legalRule: 'Cerc alb cu contur roșu și cifra 90.',
    chessAnalogy: 'Ritm dinamic controlat.',
    iconName: 'Gauge',
    colorScheme: 'red_white',
    commonExamTrap: 'Pentru începători în primul an de permis, viteza maximă este cu 20 km/h mai mică (deci 70 km/h)!',
    svgType: 'speed_limit_90',
    ciaMemoryAnchor: {
      shapeMeaning: 'CERC ROȘU CU 90 = Limita pe drumuri naționale.',
      mnemonicPeg: '90 km/h = viteză de croazieră în afara localității.',
      quickReflexRule: 'Păstrează cel puțin 50-60 metri distanță față de vehiculul din față.'
    }
  },
  {
    id: 'sign-no-stopping',
    name: 'Oprirea interzisă',
    code: 'C07',
    category: 'prohibition',
    description: 'Interzice orice imobilizare voluntară a vehiculului (fie chiar și pentru 5 secunde pentru a lăsa pe cineva jos).',
    legalRule: 'Cerc albastru cu contur roșu și două linii roșii în X. Unde oprirea este interzisă, ESTE AUTOMAT INTERZISĂ ȘI STAȚIONAREA!',
    chessAnalogy: 'Șah mat pe bordură: orice popas este sancționat imediat.',
    iconName: 'XCircle',
    colorScheme: 'red_white',
    commonExamTrap: 'Capcană DRPCIV: „Aveți voie să opriți 1 minut pentru a coborî un pasager?” Răspuns: NU! Nicio secundă de oprire voluntară.',
    svgType: 'no_stopping',
    ciaMemoryAnchor: {
      shapeMeaning: 'X ROȘU DUBLU: Interdicție absolută de contact cu solul pe loc.',
      mnemonicPeg: 'X = interzisă și oprirea (sub 5 min) și staționarea (peste 5 min).',
      quickReflexRule: 'Nu opri roata pe loc sub nicio formă!'
    }
  },
  {
    id: 'sign-no-parking',
    name: 'Staționarea interzisă',
    code: 'C08',
    category: 'prohibition',
    description: 'Interzice imobilizarea mașinii pe o durată mai mare de 5 minute. Oprirea scurtă sub 5 minute ESTE PERMISĂ!',
    legalRule: 'Cerc albastru cu contur roșu și o singură linie diagonală roșie.',
    chessAnalogy: 'Șah intermediar temporar: nu poți rămâne parcat pe câmp.',
    iconName: 'ParkingCircle',
    colorScheme: 'red_white',
    commonExamTrap: 'Diferența cheie: La acest semn AI VOIE să oprești mașina 2-3 minute pentru a urca un pasager sau a descărca bagaje!',
    svgType: 'no_parking',
    ciaMemoryAnchor: {
      shapeMeaning: 'O SINGURĂ DIAGONALĂ: Permite oprirea scurtă sub 5 minute.',
      mnemonicPeg: 'O dungă = ai voie să oprești (sub 5 min), dar nu să lași mașina parcată.',
      quickReflexRule: 'Poți descărca rapid în sub 5 minute, dar nu părăsești mașina.'
    }
  },
  {
    id: 'sign-parking-alternate-odd',
    name: 'Staționare alternantă (Zile impare - I)',
    code: 'C09',
    category: 'prohibition',
    description: 'Interzice staționarea mașinilor în zilele impare ale lunii (1, 3, 5, 7 etc.) pe partea străzii unde este montat.',
    legalRule: 'Cerc albastru cu contur roșu, dungă diagonală și cifra romană I.',
    chessAnalogy: 'Regulă de mutare condiționată de paritatea mutării.',
    iconName: 'ParkingCircle',
    colorScheme: 'red_white',
    commonExamTrap: 'Cifra romană I înseamnă ZILE IMPARE, nu o oră sau o singură mașină!',
    svgType: 'parking_alternate_odd',
    ciaMemoryAnchor: {
      shapeMeaning: 'CIFRA I TĂIATĂ: Interzis în zilele impare ale lunii.',
      mnemonicPeg: 'I = 1 = zile impare (1, 3, 5, 7...).',
      quickReflexRule: 'Verifică data din calendar pe telefon înainte de a parca.'
    }
  },

  // --- OBLIGARE ---
  {
    id: 'sign-roundabout',
    name: 'Intersecție cu sens giratoriu',
    code: 'B01',
    category: 'mandatory',
    description: 'Obligă la parcurgerea intersecției în sensul indicat de săgeți (invers acelor de ceasornic) și acordarea priorității vehiculelor aflate deja în inel.',
    legalRule: 'Cerc albastru cu 3 săgeți albe curbate. Banda 1 (exterioară) are protecție la părăsirea giratoriului conform noului Cod Rutier!',
    chessAnalogy: 'Controlul cercului central (d4, d5, e4, e5): cine ocupă centrul are prioritate strategică.',
    iconName: 'RotateCw',
    colorScheme: 'blue_white',
    commonExamTrap: 'La intrare semnalizezi doar dacă ieși la prima ieșire; dar la IEȘIRE semnalizezi OBLIGATORIU la dreapta!',
    svgType: 'roundabout',
    ciaMemoryAnchor: {
      shapeMeaning: 'CERC ALBASTRU CU 3 SĂGEȚI: Ordin direct de mișcare circulară.',
      mnemonicPeg: '3 săgeți = cedează celor din sens și semnalizează la ieșire.',
      quickReflexRule: 'Cedează trecerea la intrare -> Păstrează banda -> Semnalizează dreapta la ieșire.'
    }
  },
  {
    id: 'sign-straight-ahead',
    name: 'Înainte',
    code: 'B02',
    category: 'mandatory',
    description: 'Obligă vehiculele să continue deplasarea exclusiv înainte prin intersecție. Virajul la stânga și la dreapta sunt interzise.',
    legalRule: 'Cerc albastru cu săgeată albă verticală.',
    chessAnalogy: 'Turn care înaintează pe coloană fără deviații laterale.',
    iconName: 'ArrowUp',
    colorScheme: 'blue_white',
    commonExamTrap: 'Dacă semnul este instalat pe un scuar înainte de intersecție, interzice categoric orice viraj la stânga sau întoarcere!',
    svgType: 'straight_ahead',
    ciaMemoryAnchor: {
      shapeMeaning: 'SĂGEATĂ DREAPTĂ ÎN SUS: Ordin direct de înaintare fără ezitare.',
      mnemonicPeg: 'Doar înainte; nu întoarce și nu vira.',
      quickReflexRule: 'Mergi drept pe banda ta.'
    }
  },
  {
    id: 'sign-turn-right',
    name: 'La dreapta',
    code: 'B03',
    category: 'mandatory',
    description: 'Obligă vehiculele să vireze la dreapta la prima intersecție întâlnită.',
    legalRule: 'Cerc albastru cu săgeată albă orientată spre dreapta.',
    chessAnalogy: 'Deviere forțată de piesă.',
    iconName: 'CornerUpRight',
    colorScheme: 'blue_white',
    commonExamTrap: 'Mersul înainte este STRICT interzis de acest indicator de obligare!',
    svgType: 'turn_right',
    ciaMemoryAnchor: {
      shapeMeaning: 'SĂGEATĂ LA DREAPTA: Canalizare obligatorie a fluxului.',
      mnemonicPeg: 'Semnalizează din timp și virează exclusiv pe prima stradă la dreapta.',
      quickReflexRule: 'Semnalizează dreapta cu 50 m înainte și încadrează-te lângă bordură.'
    }
  },

  // --- AVERTIZARE ---
  {
    id: 'sign-children',
    name: 'Copii (Zonă școlară)',
    code: 'E01',
    category: 'warning',
    description: 'Avertizează apropierea de un sector de drum frecventat de copii (școli, grădinițe, terenuri de joacă).',
    legalRule: 'Triunghi alb cu contur roșu și doi copii alergând. Viteza maximă obligatorie este de 30 km/h în localitate între 07:00 - 22:00!',
    chessAnalogy: 'Risc de mutare neașteptată a pieselor adverse: profilaxie și vigilență.',
    iconName: 'AlertTriangle',
    colorScheme: 'red_white',
    commonExamTrap: 'Întrebare clasică: „Care este viteza obligatorie între 07:00 și 22:00 în dreptul acestui semn?” Răspuns: Maximum 30 km/h în localitate (50 km/h în afara ei)!',
    svgType: 'children',
    ciaMemoryAnchor: {
      shapeMeaning: 'TRIUNGHI ROȘU CU COPII: Alertă maximă de imprevizibilitate.',
      mnemonicPeg: 'Copii = 30 km/h între orele 07 și 22.',
      quickReflexRule: 'Redu viteza la 30 km/h și scanează trotuarele și mașinile parcate.'
    }
  },
  {
    id: 'sign-curve-right',
    name: 'Curbă deosebit de periculoasă la dreapta',
    code: 'E02',
    category: 'warning',
    description: 'Avertizează apropierea de o curbă strânsă spre dreapta cu rază mică sau vizibilitate redusă.',
    legalRule: 'Triunghi alb cu bordură roșie și săgeată neagră curbată spre dreapta. Depășirea, oprirea și întoarcerea sunt interzise dacă vizibilitatea e sub 50 m.',
    chessAnalogy: 'Schimbare bruscă de axă tactică.',
    iconName: 'AlertTriangle',
    colorScheme: 'red_white',
    commonExamTrap: 'Dacă vizibilitatea este sub 50 m, sunt interzise absolut toate manevrele (oprire, staționare, întoarcere, mers înapoi, depășire)!',
    svgType: 'curve_right',
    ciaMemoryAnchor: {
      shapeMeaning: 'SĂGEATĂ ÎN CURBĂ: Forța centrifugă te va împinge spre exteriorul curbei.',
      mnemonicPeg: 'Frânează ÎNAINTE de curbă, nu în timp ce virezi!',
      quickReflexRule: 'Redu viteza din timp și accelerează lin doar după ieșirea din curbă.'
    }
  },
  {
    id: 'sign-curve-left',
    name: 'Curbă deosebit de periculoasă la stânga',
    code: 'E03',
    category: 'warning',
    description: 'Avertizează apropierea de o curbă strânsă spre stânga.',
    legalRule: 'Triunghi alb cu bordură roșie și săgeată neagră spre stânga.',
    chessAnalogy: 'Cotitură pe flancul opus.',
    iconName: 'AlertTriangle',
    colorScheme: 'red_white',
    commonExamTrap: 'Atenție la tendința de a tăia curba pe contrasens; păstrează-te ferm pe banda ta!',
    svgType: 'curve_left',
    ciaMemoryAnchor: {
      shapeMeaning: 'SĂGEATĂ SPRE STÂNGA: Atenție la vehiculele mari din sens opus care pot călca axul drumului.',
      mnemonicPeg: 'Păstrează marginea dreaptă a benzii.',
      quickReflexRule: 'Frânează înainte și păstrează banda fără a călca linia mediană.'
    }
  },
  {
    id: 'sign-road-narrows',
    name: 'Drum îngustat pe ambele părți',
    code: 'E04',
    category: 'warning',
    description: 'Avertizează că lățimea părții carosabile se reduce simetric pe ambele părți.',
    legalRule: 'Triunghi alb cu contur roșu și două linii paralele care se apropie.',
    chessAnalogy: 'Coloană îngustată: strangulare tactică a spațiului de manevră.',
    iconName: 'AlertTriangle',
    colorScheme: 'red_white',
    commonExamTrap: 'Oprirea, staționarea și întoarcerea sunt interzise pe sectorul îngustat!',
    svgType: 'road_narrows',
    ciaMemoryAnchor: {
      shapeMeaning: 'LINII STRÂNSE: Spațiul lateral se micșorează.',
      mnemonicPeg: 'Îngustare = redu viteza și sporește atenția la gabaritul celorlalți.',
      quickReflexRule: 'Redu viteza și verifică dacă ai spațiu suficient pentru încrucișare.'
    }
  },
  {
    id: 'sign-railway-cross',
    name: 'Trecere la nivel cu o cale ferată simplă fără bariere',
    code: 'E05',
    category: 'warning',
    description: 'Cunoscută ca Crucea Sfântului Andrei simplă. Obligă la OPRIRE totală în locul cu vizibilitate maximă.',
    legalRule: 'Cruce albă în X cu contur roșu. Oprirea pe loc este obligatorie fără a depăși indicatorul.',
    chessAnalogy: 'Șah mortal de la distanță: trenul nu poate opri în timp util.',
    iconName: 'Crosshair',
    colorScheme: 'red_white',
    commonExamTrap: 'Oprirea și staționarea sunt interzise la mai puțin de 50 m înainte de calea ferată!',
    svgType: 'railway_cross',
    ciaMemoryAnchor: {
      shapeMeaning: 'CRUCEA ÎN X: Bariera nevăzută a trenului.',
      mnemonicPeg: 'X = oprire totală; trenul are 1.000 metri distanță de frânare!',
      quickReflexRule: 'Oprești la indicator -> Privești stânga-dreapta -> Treci doar pe șine libere.'
    }
  },
  {
    id: 'sign-traffic-lights',
    name: 'Semafoare (Avertizare)',
    code: 'E06',
    category: 'warning',
    description: 'Avertizează apropierea de o intersecție dirijată prin semafoare luminoase pe un drum rapid unde nu te-ai aștepta să existe.',
    legalRule: 'Triunghi alb cu bordură roșie și simbolul semaforului tricolor (roșu, galben, verde).',
    chessAnalogy: 'Schimbare iminentă a regimului de joc.',
    iconName: 'AlertTriangle',
    colorScheme: 'red_white',
    commonExamTrap: 'Indicatorul te avertizează din timp să nu fii surprins de culoarea roșie!',
    svgType: 'traffic_lights_ahead',
    ciaMemoryAnchor: {
      shapeMeaning: 'SEMAFOR ÎN TRIUNGHI: Pregătire pentru oprire la lumina roșie.',
      mnemonicPeg: 'Apare de regulă după curbe sau pe drumuri naționale.',
      quickReflexRule: 'Fii pregătit să frânezi dacă se schimbă faza semaforului.'
    }
  },

  // --- INFORMARE ȘI ORIENTARE ---
  {
    id: 'sign-pedestrian-crossing',
    name: 'Trecere pentru pietoni',
    code: 'D01',
    category: 'information',
    description: 'Semnalizează locul exact unde pietonii au drept de traversare prioritar pe carosabil.',
    legalRule: 'Pătrat albastru cu triunghi alb și pieton pe zebră. Viteza obligatorie sub 30 km/h în localitate dacă sunt pietoni în apropiere.',
    chessAnalogy: 'Pion advers apărat care înaintează cu prioritate.',
    iconName: 'UserCheck',
    colorScheme: 'blue_white',
    commonExamTrap: 'Depășirea pe trecerea de pietoni este STRICT interzisă! Oprirea la mai puțin de 25 m înainte și după trecere este de asemenea interzisă!',
    svgType: 'pedestrian_crossing',
    ciaMemoryAnchor: {
      shapeMeaning: 'PĂTRAT ALBASTRU CU OM PE ZEBRĂ: Sanctuarul pietonilor.',
      mnemonicPeg: 'Pietonul are prioritate din secunda în care a coborât de pe bordură.',
      quickReflexRule: 'Redu viteza sub 30 km/h și acordă prioritate dacă pietonul a pus pasul pe carosabil.'
    }
  },
  {
    id: 'sign-motorway',
    name: 'Autostradă',
    code: 'D02',
    category: 'information',
    description: 'Indică intrarea pe o autostradă destinată exclusiv autovehiculelor rapide.',
    legalRule: 'Dreptunghi verde mare cu pasaj superior. Viteză maximă 130 km/h (110 începător). Viteză minimă 50 km/h.',
    chessAnalogy: 'Rocadă mare: spațiu de mare viteză și manevrabilitate.',
    iconName: 'Milestone',
    colorScheme: 'blue_white',
    commonExamTrap: 'Pe autostradă sunt interzise cu desăvârșire: întoarcerea, mersul înapoi, mersul pe contrasens și oprirea pe banda de urgență fără motiv de forță majoră!',
    svgType: 'motorway',
    ciaMemoryAnchor: {
      shapeMeaning: 'DREPTUNGHI VERDE: Regatul vitezei maxime.',
      mnemonicPeg: 'Banda 1 este pentru mers; banda 2 este exclusiv pentru depășire.',
      quickReflexRule: 'Mergi pe banda 1; folosește banda 2 doar când depășești.'
    }
  },
  {
    id: 'sign-one-way',
    name: 'Sens unic',
    code: 'D03',
    category: 'information',
    description: 'Semnalizează că pe strada respectivă toate benzile circulă într-o singură direcție.',
    legalRule: 'Dreptunghi albastru cu săgeată albă orizontală.',
    chessAnalogy: 'Flux unidirecțional fără risc de contraatac frontal.',
    iconName: 'ArrowRight',
    colorScheme: 'blue_white',
    commonExamTrap: 'Pe strada cu sens unic, ÎNTOARCEREA este STRICT interzisă! În schimb, mersul înapoi pe maximum 50 m este permis.',
    svgType: 'one_way',
    ciaMemoryAnchor: {
      shapeMeaning: 'SĂGEATĂ LUNGĂ PE ALB: Toată lumea merge în aceeași direcție.',
      mnemonicPeg: 'Sens unic = nu poți întoarce mașina, dar poți opri pe ambele părți dacă rămâne o bandă liberă.',
      quickReflexRule: 'Te poți încadra pe banda din stânga dacă virezi la stânga la finalul străzii.'
    }
  },
  {
    id: 'sign-parking',
    name: 'Parcare (P)',
    code: 'D04',
    category: 'information',
    description: 'Semnalizează un spațiu special amenajat și autorizat pentru parcarea vehiculelor.',
    legalRule: 'Pătrat albastru cu litera P mare albă.',
    chessAnalogy: 'Câmp de siguranță pentru odihnă strategică.',
    iconName: 'Square',
    colorScheme: 'blue_white',
    commonExamTrap: 'Fii atent la panourile adiționale de sub P (ele arată modul de așezare al mașinii: paralel cu bordura sau perpendicular pe trotuar)!',
    svgType: 'parking',
    ciaMemoryAnchor: {
      shapeMeaning: 'P MARE ALB: Loc autorizat legal pentru staționare îndelungată.',
      mnemonicPeg: 'P = poți parca fără frica de amendă sau ridicare.',
      quickReflexRule: 'Respectă marcajele de delimitare dintre mașini.'
    }
  },

  // --- PRIORITATE EXTRA ---
  {
    id: 'sign-crossroad-minor',
    name: 'Intersecție cu un drum fără prioritate',
    code: 'B05',
    category: 'priority',
    description: 'Avertizează apropierea de o intersecție în afara localităților în care drumul pe care circuli are prioritate de trecere în raport cu drumul secundar.',
    legalRule: 'Triunghi de avertizare cu cruce neagră. Ai prioritate față de vehiculele care vin de pe drumul lateral (care au STOP sau Cedează trecerea).',
    chessAnalogy: 'Poziție centrală consolidată: controlezi diagonala fără risc de blocaj.',
    iconName: 'Plus',
    colorScheme: 'red_white',
    commonExamTrap: 'Capcană DRPCIV: Deși este triunghi cu vârful în sus, el NU îți cere să cedezi trecerea! Îți confirmă că TU ai prioritate de trecere!',
    svgType: 'crossroad_minor',
    ciaMemoryAnchor: {
      shapeMeaning: 'TRIUNGHI CU CRUCE GROASĂ: Linia groasă ești tu; linia subțire transversală sunt cei fără prioritate.',
      mnemonicPeg: 'Drumul gros trece primul.',
      quickReflexRule: 'Ai prioritate, dar fii atent la șoferii neatenți de pe drumul secundar.'
    }
  },

  // --- AVERTIZARE EXTRA ---
  {
    id: 'sign-railway-barrier',
    name: 'Trecere la nivel cu o cale ferată cu bariere',
    code: 'A15',
    category: 'warning',
    description: 'Semnalizează apropierea de o trecere la nivel cu calea ferată prevăzută cu bariere sau semibariere.',
    legalRule: 'Se instalează la 150 m în afara localității și la 50 m în localitate. Viteza maximă recomandată/legală redusă.',
    chessAnalogy: 'Barieră de pioni de netrecut până la ridicarea blocajului.',
    iconName: 'Shield',
    colorScheme: 'red_white',
    commonExamTrap: 'Simbolul „gard” înseamnă CU BARIERE! Simbolul „locomotivă” înseamnă FĂRĂ BARIERE! Nu le confunda la examen!',
    svgType: 'railway_barrier',
    ciaMemoryAnchor: {
      shapeMeaning: 'GARD ÎN TRIUNGHI: Gardul este chiar bariera fizică ce coboară.',
      mnemonicPeg: 'Gard = Baricadă = Cu bariere.',
      quickReflexRule: 'Dacă barierele sunt coborâte sau semnalul roșu clipește, oprești obligatoriu în fața barierei.'
    }
  },
  {
    id: 'sign-railway-no-barrier',
    name: 'Trecere la nivel cu o cale ferată fără bariere',
    code: 'A16',
    category: 'warning',
    description: 'Semnalizează o trecere la nivel cu calea ferată industrială sau normală care nu este dotată cu bariere.',
    legalRule: 'Obligă la oprirea completă (la Crucea Sf. Andrei sau indicatorul Oprire) în locul cu vizibilitate maximă și asigurare temeinică stânga-dreapta.',
    chessAnalogy: 'Regelui i se cere vigilență supremă: atac iminent pe linie liberă.',
    iconName: 'Flame',
    colorScheme: 'red_white',
    commonExamTrap: 'La calea ferată FĂRĂ bariere, oprirea este OBLIGATORIE la indicatorul STOP sau Crucea Sfântului Andrei! La cea CU bariere deschise, treci fără să oprești!',
    svgType: 'railway_no_barrier',
    ciaMemoryAnchor: {
      shapeMeaning: 'LOCOMOTIVĂ ÎN TRIUNGHI: Vine trenul direct, nu există gard de protecție.',
      mnemonicPeg: 'Locomotivă = Fără bariere = Oprire la Cruce garantată.',
      quickReflexRule: 'Oprești la marcaj / cruce -> Asiguri stânga-dreapta -> Treci doar pe cale sigură.'
    }
  },
  {
    id: 'sign-railway-cross-double',
    name: 'Trecere la nivel cu o cale ferată dublă fără bariere',
    code: 'A18',
    category: 'warning',
    description: 'Avertizează că linia ferată conține două sau mai multe fire paralele de circulație feroviară.',
    legalRule: 'Crucea Sf. Andrei dublă. Oprirea completă este obligatorie. Atenție: după trecerea unui tren, poate veni imediat un alt tren pe al doilea fir din sens opus!',
    chessAnalogy: 'Dublu atac pe două coloane feroviare paralele.',
    iconName: 'Plus',
    colorScheme: 'red_white',
    commonExamTrap: 'Capcana DRPCIV: „Puteți demara imediat după trecerea trenului” -> FALS! Asigură-te că nu vine un al doilea tren pe firul 2!',
    svgType: 'railway_cross_double',
    ciaMemoryAnchor: {
      shapeMeaning: 'DOUĂ CRUCI SUPRAPUSE: 2 sau mai multe linii feroviare.',
      mnemonicPeg: 'Doi X = două linii; pericol dublu de tren ascuns.',
      quickReflexRule: 'Oprești la 5 m de prima șină dacă nu există marcaj și asiguri ambele sensuri.'
    }
  },
  {
    id: 'sign-railway-countdown',
    name: 'Panou suplimentar cale ferată (150 m)',
    code: 'A20',
    category: 'warning',
    description: 'Panoul dreptunghiular cu 3 benzi roșii oblice semnalizează distanța de 150 m până la calea ferată.',
    legalRule: '3 benzi = 150 m; 2 benzi = 100 m; 1 bandă = 50 m. Benzile coboară întotdeauna spre partea carosabilă.',
    chessAnalogy: 'Numărătoare inversă la mutare forțată.',
    iconName: 'Clock',
    colorScheme: 'red_white',
    commonExamTrap: 'La examen: 3 dungi = 150 m (în afara localității). La mai puțin de 50 m (de la panoul cu 1 dungă) sunt interzise oprirea, staționarea, depășirea și întoarcerea!',
    svgType: 'railway_countdown_150',
    ciaMemoryAnchor: {
      shapeMeaning: '3 DUNGII ROȘII: 3 x 50 metri = 150 metri până la calea ferată.',
      mnemonicPeg: '3 benzi = 150m, 2 benzi = 100m, 1 bandă = 50m.',
      quickReflexRule: 'Redu treptat viteza și pregătește-te pentru oprire.'
    }
  },
  {
    id: 'sign-slippery-road',
    name: 'Drum alunecos',
    code: 'A22',
    category: 'warning',
    description: 'Avertizează că aderența pneurilor cu partea carosabilă poate scădea brusc din cauza apei, poleiului sau mâzgăi.',
    legalRule: 'Obligă la reducerea vitezei sub 30 km/h în localitate și sub 50 km/h în afara localității. Sunt interzise manevrele bruște de volan sau frânare violentă.',
    chessAnalogy: 'Teren instabil unde orice mișcare forțată duce la pierderea controlului.',
    iconName: 'AlertTriangle',
    colorScheme: 'red_white',
    commonExamTrap: 'Întrebare DRPCIV: „Cum acționați la intrarea pe drumul alunecos?” Răspuns: Reduceți viteza din timp și folosiți frâna de motor, evitând frânarea bruscă!',
    svgType: 'slippery_road',
    ciaMemoryAnchor: {
      shapeMeaning: 'MAȘINĂ CU URME ȘERPUITE: Risc imediat de derapaj lateral.',
      mnemonicPeg: 'Urme curbe = fără frâne bruște, ține ambele mâini pe volan.',
      quickReflexRule: 'Folosește frâna de motor și mărește de 3 ori distanța de siguranță.'
    }
  },
  {
    id: 'sign-speed-bump',
    name: 'Denivelare pentru limitarea vitezei',
    code: 'A23',
    category: 'warning',
    description: 'Avertizează existența unui prag limitator de viteză transversal din cauciuc sau asfalt pe carosabil.',
    legalRule: 'Viteza trebuie redusă la 20-30 km/h pentru a preveni deteriorarea suspensiei și pierderea traiectoriei.',
    chessAnalogy: 'Pion de blocaj care obligă încetinirea tempoului.',
    iconName: 'Activity',
    colorScheme: 'red_white',
    commonExamTrap: 'Pe și în apropierea pragurilor montate la trecerile de pietoni se circulă cu viteză redusă și atenție sporită.',
    svgType: 'speed_bump',
    ciaMemoryAnchor: {
      shapeMeaning: 'DÂMB NEGRU PE CAROSABIL: Obstacol fizic pe asfalt.',
      mnemonicPeg: 'Dâmb în cale = viteza la pas (sub 30 km/h).',
      quickReflexRule: 'Eliberează frâna chiar înainte ca roțile din față să urce pe bump!'
    }
  },
  {
    id: 'sign-wild-animals',
    name: 'Animale sălbatice',
    code: 'A24',
    category: 'warning',
    description: 'Semnalizează sectoare de drum împădurite unde este probabilă traversarea neașteptată a animalelor sălbatice (căprioare, mistreți).',
    legalRule: 'Obligă la reducerea vitezei și scanarea marginilor drumului (a acostamentului și vegetației). Noaptea comută din timp faza lungă.',
    chessAnalogy: 'Atac surpriză din afara cadrului de joc.',
    iconName: 'Eye',
    colorScheme: 'red_white',
    commonExamTrap: 'Dacă un animal sare în fața mașinii, nu trage violent de volan spre contrasens sau copaci! Frânează în linie dreaptă.',
    svgType: 'wild_animals',
    ciaMemoryAnchor: {
      shapeMeaning: 'CERB ÎN SĂRITURĂ: Apariție instantanee din pădure.',
      mnemonicPeg: 'Ochii pe marginea drumului; unde e un cerb, de obicei urmează o turmă.',
      quickReflexRule: 'Redu viteza sub limita legală pe sectoarele de pădure noaptea.'
    }
  },
  {
    id: 'sign-road-works',
    name: 'Lucrări (Semnalizare temporară)',
    code: 'A25',
    category: 'warning',
    description: 'Semnalizează prezența muncitorilor, utilajelor sau materialelor de construcție pe carosabil sau acostament.',
    legalRule: 'Fondul GALBEN semnifică caracterul temporar. Semnalizarea temporară are prioritate și anulează semnalizarea permanentă!',
    chessAnalogy: 'Teren de luptă reconfigurat de evenimente neprevăzute.',
    iconName: 'Wrench',
    colorScheme: 'red_yellow',
    commonExamTrap: 'Regulă capitală DRPCIV: Semnalizarea temporară pe fond galben ANULEAZĂ semnalizarea permanentă pe fond alb!',
    svgType: 'road_works',
    ciaMemoryAnchor: {
      shapeMeaning: 'FOND GALBEN CU OM CU LOPATĂ: Lucrări active pe carosabil.',
      mnemonicPeg: 'Galbenul bate albul: semnele galbene au întotdeauna prioritate legală.',
      quickReflexRule: 'Redu viteza, fii pregătit să oprești sau să ocolești obstacolele dirijat.'
    }
  },
  {
    id: 'sign-other-dangers',
    name: 'Alte pericole',
    code: 'A26',
    category: 'warning',
    description: 'Avertizează apropierea de un sector de drum cu pericol ce nu poate fi simbolizat printr-un semn dedicat.',
    legalRule: 'Este însoțit aproape întotdeauna de un panou adițional care specifică natura pericolului (ex: ceață, ieșire utilaje agricole, carosabil degradat).',
    chessAnalogy: 'Amenințare tactică ascunsă ce necesită verificare precisă.',
    iconName: 'AlertCircle',
    colorScheme: 'red_white',
    commonExamTrap: 'La examen: Semnul exclamării obligă la atenție sporită și citirea panoului adițional de dedesubt.',
    svgType: 'other_dangers',
    ciaMemoryAnchor: {
      shapeMeaning: 'SEMNUL EXCLAMĂRII: Atenție generală!',
      mnemonicPeg: 'Exclamare = verifică panoul adițional montat dedesubt.',
      quickReflexRule: 'Mărește distanța față de vehiculul din față și redu viteza.'
    }
  },
  {
    id: 'sign-double-curve-left',
    name: 'Curbă dublă, prima la stânga',
    code: 'A27',
    category: 'warning',
    description: 'Semnalizează o succesiune de două sau mai multe curbe periculoase, din care prima este spre stânga.',
    legalRule: 'Viteza redusă sub 30 km/h în localitate și sub 50 km/h în afara localității dacă raza curbei este mică sau vizibilitatea sub 50 m.',
    chessAnalogy: 'Manevră în zig-zag prin centrul tablei.',
    iconName: 'RotateCcw',
    colorScheme: 'red_white',
    commonExamTrap: 'Dacă vizibilitatea este sub 50 m în curbe deosebit de periculoase: oprirea, staționarea, depășirea și întoarcerea sunt INTERZISE!',
    svgType: 'double_curve_left',
    ciaMemoryAnchor: {
      shapeMeaning: 'ȘARPE ÎN TRIUNGHI: Prima buclă este la stânga.',
      mnemonicPeg: 'Urmărește direcția primei îndoituri: viraj stânga apoi dreapta.',
      quickReflexRule: 'Frânează înainte de curbă, nu în mijlocul ei!'
    }
  },

  // --- INTERZICERE EXTRA ---
  {
    id: 'sign-no-left-turn',
    name: 'Interzis virajul la stânga',
    code: 'C08',
    category: 'prohibition',
    description: 'Interzice efectuarea virajului la stânga în intersecția în fața căreia este instalat.',
    legalRule: 'Atenție supremă: Interzicerea virajului la stânga INTERZICE AUTOMAT ȘI ÎNTOARCEREA (manevra de întoarcere presupune două viraje la stânga)!',
    chessAnalogy: 'Blocaj pe flancul stâng: nu poți pătrunde pe această diagonală.',
    iconName: 'Slash',
    colorScheme: 'red_white',
    commonExamTrap: 'CAPCANA #1 LA DRPCIV: „Indicatorul Interzis virajul la stânga permite întoarcerea?” RĂSPUNS: NU! Întoarcerea este STRICT INTERZISĂ!',
    svgType: 'no_left_turn',
    ciaMemoryAnchor: {
      shapeMeaning: 'SĂGEATĂ LA STÂNGA TĂIATĂ: Nicio manevră spre stânga.',
      mnemonicPeg: 'Dacă nu ai voie stânga, nu ai voie NICI să întorci mașina!',
      quickReflexRule: 'Mergi înainte sau virează la dreapta.'
    }
  },
  {
    id: 'sign-no-right-turn',
    name: 'Interzis virajul la dreapta',
    code: 'C09',
    category: 'prohibition',
    description: 'Interzice efectuarea virajului la dreapta în intersecția respectivă.',
    legalRule: 'Vehiculele pot continua înainte sau pot efectua virajul la stânga/întoarcerea, dacă nu există alte restricții.',
    chessAnalogy: 'Flancul drept inaccesibil pentru piese.',
    iconName: 'Slash',
    colorScheme: 'red_white',
    commonExamTrap: 'Permite mersul înainte sau la stânga, interzice exclusiv virarea pe prima stradă la dreapta.',
    svgType: 'no_right_turn',
    ciaMemoryAnchor: {
      shapeMeaning: 'SĂGEATĂ LA DREAPTA TĂIATĂ: Virajul la dreapta este blocat.',
      mnemonicPeg: 'Dreapta este interzisă; folosește celelalte direcții permise.',
      quickReflexRule: 'Încadrează-te pe benzile de mers înainte sau stânga.'
    }
  },
  {
    id: 'sign-no-u-turn',
    name: 'Întoarcerea interzisă (U-Turn interzis)',
    code: 'C10',
    category: 'prohibition',
    description: 'Interzice efectuarea manevrei de întoarcere a autovehiculului.',
    legalRule: 'Zona de acțiune se întinde până la prima intersecție. Atenție: Virajul la stânga RĂMÂNE PERMIS dacă nu este alt semn!',
    chessAnalogy: 'Piesă ce nu se poate retrage direct pe căsuța anterioară.',
    iconName: 'RotateCcw',
    colorScheme: 'red_white',
    commonExamTrap: 'Capcană DRPCIV inversă: „Dacă întoarcerea este interzisă, aveți voie să virați la stânga?” RĂSPUNS: DA! Virajul simplu la stânga este permis!',
    svgType: 'no_u_turn',
    ciaMemoryAnchor: {
      shapeMeaning: 'BUCLĂ DE 180 GRADE TĂIATĂ: Nu poți face rocadă înapoi pe același sens.',
      mnemonicPeg: 'Întoarcere interzisă NU înseamnă viraj la stânga interzis.',
      quickReflexRule: 'Continuă traseul până la o intersecție permisă pentru întoarcere.'
    }
  },
  {
    id: 'sign-end-no-overtaking',
    name: 'Sfârșitul interzicerii de a depăși',
    code: 'C11',
    category: 'prohibition',
    description: 'Semnalizează sfârșitul sectorului pe care depășirea autovehiculelor a fost interzisă prin indicator.',
    legalRule: 'Depășirea redevine permisă, cu condiția respectării marcajelor rutiere (linie discontinuă) și asigurării din sens opus.',
    chessAnalogy: 'Deblocare de pioni: mobilitatea revine pe coloană.',
    iconName: 'CheckCircle2',
    colorScheme: 'red_white',
    commonExamTrap: 'Chiar dacă apare acest indicator, dacă linia mediană este CONTINUĂ, depășirea rămâne interzisă! Marcajul bate indicatorul de sfârșit!',
    svgType: 'end_no_overtaking',
    ciaMemoryAnchor: {
      shapeMeaning: 'CERC ALB CU MAȘINI GRI ȘI DUNGI NEGRE: Restricția a expirat.',
      mnemonicPeg: 'Grisat = restricție ștearsă; ai voie să depășești dacă linia permite.',
      quickReflexRule: 'Verifică marcajul și contrasensul înainte de manevră.'
    }
  },
  {
    id: 'sign-end-all-restrictions',
    name: 'Sfârșitul tuturor restricțiilor',
    code: 'C12',
    category: 'prohibition',
    description: 'Anulează toate restricțiile de viteză, depășire sau claxonare instituite anterior prin indicatoare succesive.',
    legalRule: 'Vitezele revin la cele generale ale categoriei de drum (50 în localitate, 90/100 în afara localității).',
    chessAnalogy: 'Resetare de poziție: piesele își recapătă raza de acțiune standard.',
    iconName: 'CheckCircle2',
    colorScheme: 'red_white',
    commonExamTrap: 'Acest indicator NU anulează regulile generale din Codul Rutier (de exemplu, prioritatea de dreapta sau obligația centurii rămân în vigoare)!',
    svgType: 'end_all_restrictions',
    ciaMemoryAnchor: {
      shapeMeaning: '5 DUNGI NEGRE OBLICE PE FOND ALB: Tabula rasa pentru restricțiile anterioare.',
      mnemonicPeg: 'Șterge cu buretele: restricțiile particulare s-au încheiat.',
      quickReflexRule: 'Revii la limitele legale standard ale drumului.'
    }
  },
  {
    id: 'sign-no-horn',
    name: 'Claxonarea interzisă',
    code: 'C13',
    category: 'prohibition',
    description: 'Interzice folosirea semnalului sonor al autovehiculului pe sectorul de drum respectiv.',
    legalRule: 'Excepție vitală: Claxonarea RĂMÂNE PERMISĂ în caz de pericol iminent de accident pentru avertizarea celorlalți participanți!',
    chessAnalogy: 'Joc în liniște deplină fără zgomot de fond.',
    iconName: 'Slash',
    colorScheme: 'red_white',
    commonExamTrap: 'Întrebare DRPCIV: „Când este permisă folosirea claxonului pe sectorul Claxonarea interzisă?” Răspuns: Exclusiv pentru evitarea unui pericol imediat de accident!',
    svgType: 'no_horn',
    ciaMemoryAnchor: {
      shapeMeaning: 'TRÂMBIȚĂ TĂIATĂ: Liniște pe sectorul de drum (spitale, sanatorii).',
      mnemonicPeg: 'Fără claxon, cu excepția salvării unei vieți.',
      quickReflexRule: 'Folosește flash-urile optice în locul avertizorului sonor.'
    }
  },
  {
    id: 'sign-no-motor-vehicles',
    name: 'Accesul interzis autovehiculelor',
    code: 'C14',
    category: 'prohibition',
    description: 'Interzice accesul tuturor vehiculelor cu motor (autoturisme, motociclete, camioane, autobuze).',
    legalRule: 'Bicicletele și vehiculele trase de cai au voie să circule (deoarece nu sunt autovehicule).',
    chessAnalogy: 'Piese grele excluse de pe această diagonală; doar pionii simpli pot pătrunde.',
    iconName: 'Slash',
    colorScheme: 'red_white',
    commonExamTrap: 'Cerc roșu cu autoturism ȘI motocicletă = interzice TOATE autovehiculele, inclusiv motocicletele fără ataș!',
    svgType: 'no_motor_vehicles',
    ciaMemoryAnchor: {
      shapeMeaning: 'MAȘINĂ ȘI MOTOCICLETĂ ÎN CERC ROȘU: Niciun motor nu are acces.',
      mnemonicPeg: 'Mașină + Moto = Interzis tuturor motoarelor.',
      quickReflexRule: 'Nu intra pe strada respectivă cu automobilul.'
    }
  },
  {
    id: 'sign-customs',
    name: 'Vama (DOUANE / VAMA)',
    code: 'C15',
    category: 'prohibition',
    description: 'Obligă la oprirea completă la postul vamal de frontieră pentru efectuarea controlului.',
    legalRule: 'Viteza 0 km/h la bariera sau ghereta vamală. Continuarea deplasării se face doar la semnalul agentului vamal.',
    chessAnalogy: 'Control de frontieră înainte de a trece pe jumătatea adversă a tablei.',
    iconName: 'Shield',
    colorScheme: 'red_white',
    commonExamTrap: 'Oprirea este OBLIGATORIE chiar dacă bariera pare deschisă; trebuie așteptată autorizarea de trecere.',
    svgType: 'customs',
    ciaMemoryAnchor: {
      shapeMeaning: 'BARĂ NEAGRĂ CU TEXT DOUANE / VAMA: Punct vamal de trecere.',
      mnemonicPeg: 'Vama = oprire necondiționată a mașinii.',
      quickReflexRule: 'Oprești motorul sau mașina pe linia de control.'
    }
  },

  // --- OBLIGARE EXTRA ---
  {
    id: 'sign-turn-left',
    name: 'La stânga (Direcție obligatorie)',
    code: 'E03',
    category: 'mandatory',
    description: 'Obligă conducătorul de vehicul să vireze exclusiv pe direcția indicată de săgeată (la stânga) în intersecție.',
    legalRule: 'Mersul înainte sau virajul la dreapta sunt strict interzise.',
    chessAnalogy: 'Mutare forțată a Calului pe singura căsuță permisă.',
    iconName: 'ArrowRight',
    colorScheme: 'blue_white',
    commonExamTrap: 'Cerc albastru cu săgeată la stânga OBLIGĂ la viraj stânga! Nu permite mersul înainte!',
    svgType: 'turn_left',
    ciaMemoryAnchor: {
      shapeMeaning: 'CERC ALBASTRU CU SĂGEATĂ LA STÂNGA: Singura traiectorie legală este spre stânga.',
      mnemonicPeg: 'Albastru = ești OBLIGAT să urmezi direcția săgeții.',
      quickReflexRule: 'Semnalizează stânga și respectă prioritatea la viraj.'
    }
  },
  {
    id: 'sign-straight-or-right',
    name: 'Înainte sau la dreapta',
    code: 'E04',
    category: 'mandatory',
    description: 'Permite circulația doar pe două direcții posibile: înainte sau viraj la dreapta.',
    legalRule: 'Virajul la stânga și întoarcerea sunt interzise în acea intersecție.',
    chessAnalogy: 'Bifurcație tactică permisă doar pe două linii deschise.',
    iconName: 'ArrowRight',
    colorScheme: 'blue_white',
    commonExamTrap: 'La examen: Indicatorul Înainte sau la dreapta INTERZICE virajul la stânga și întoarcerea!',
    svgType: 'straight_or_right',
    ciaMemoryAnchor: {
      shapeMeaning: 'SĂGEATĂ DUBLĂ ÎNAINTE ȘI DREAPTA: Nicio manevră la stânga.',
      mnemonicPeg: 'Alege una dintre cele două căi: drept sau dreapta.',
      quickReflexRule: 'Încadrează-te pe banda corespunzătoare direcției alese.'
    }
  },
  {
    id: 'sign-cycle-track',
    name: 'Pistă pentru biciclete',
    code: 'E05',
    category: 'mandatory',
    description: 'Semnalizează o pistă special amenajată, destinată circulației exclusive a bicicletelor și trotinetelor electrice.',
    legalRule: 'Autovehiculele nu au voie să circule sau să staționeze pe pistă. Bicicliștii sunt obligați să folosească pista dacă ea există!',
    chessAnalogy: 'Culoar special dedicat pieselor ușoare.',
    iconName: 'Zap',
    colorScheme: 'blue_white',
    commonExamTrap: 'Dacă există pistă de biciclete pe direcția de mers, bicicliștii NU au voie să circule pe carosabil!',
    svgType: 'cycle_track',
    ciaMemoryAnchor: {
      shapeMeaning: 'BICICLETĂ PE CERC ALBASTRU: Cale obligatorie pentru bicicliști.',
      mnemonicPeg: 'Pista de biciclete protejează carosabilul de traficul lent.',
      quickReflexRule: 'Nu opri și nu parca mașina pe pista de biciclete.'
    }
  },
  {
    id: 'sign-min-speed-30',
    name: 'Viteză minimă obligatorie (30 km/h)',
    code: 'E06',
    category: 'mandatory',
    description: 'Obligă conducătorul să circule cu o viteză egală sau mai mare decât cifra înscrisă pe indicator (30 km/h).',
    legalRule: 'Vehiculele care nu pot dezvolta din construcție această viteză nu au voie să circule pe sectorul respectiv.',
    chessAnalogy: 'Ritm impus minim: nu poți juca sub un anumit tempo.',
    iconName: 'Gauge',
    colorScheme: 'blue_white',
    commonExamTrap: 'Nu confunda cercul ROȘU cu 30 (viteză MAXIMĂ 30) cu cercul ALBASTRU cu 30 (viteză MINIMĂ 30)!',
    svgType: 'min_speed_30',
    ciaMemoryAnchor: {
      shapeMeaning: 'NUMĂR PE FOND ALBASTRU: Punct de plecare minim pentru vitezometru.',
      mnemonicPeg: 'Roșu = plafon maxim; Albastru = prag minim obligatoriu.',
      quickReflexRule: 'Menține viteza de cel puțin 30 km/h dacă condițiile de drum o permit.'
    }
  },

  // --- INFORMARE & ORIENTARE EXTRA ---
  {
    id: 'sign-expressway',
    name: 'Drum expres',
    code: 'D05',
    category: 'information',
    description: 'Indică accesul pe un drum expres destinat exclusiv circulației autovehiculelor rapide.',
    legalRule: 'Viteza maximă legală pe drum expres este de 120 km/h (100 km/h pentru începători în primul an).',
    chessAnalogy: 'Culoar rapid optimizat fără intersecții de nivel.',
    iconName: 'Compass',
    colorScheme: 'blue_white',
    commonExamTrap: 'Pe drum expres sunt interzise pietonii, căruțele, tractoarele și mopedele. Întoarcerea se face doar prin noduri denivelate!',
    svgType: 'expressway',
    ciaMemoryAnchor: {
      shapeMeaning: 'MAȘINĂ ALBĂ PE DREPTUNGHI: Drum de viteză fără treceri de pietoni la nivel.',
      mnemonicPeg: 'Drum expres = 120 km/h plafon maxim.',
      quickReflexRule: 'Păstrează banda 1 ca bandă de bază; banda 2 e pentru depășire.'
    }
  },
  {
    id: 'sign-hospital',
    name: 'Spital (H)',
    code: 'D06',
    category: 'information',
    description: 'Semnalizează apropierea de o unitate spitalicească sau serviciu de urgență medicală.',
    legalRule: 'Obligă la păstrarea liniștii pe o rază determinată; claxonarea este strict interzisă.',
    chessAnalogy: 'Zonă neutră de asistență și vindecare.',
    iconName: 'Heart',
    colorScheme: 'blue_white',
    commonExamTrap: 'În zona spitalelor conducătorii trebuie să evite accelerările bruște și folosirea avertizorului sonor.',
    svgType: 'hospital',
    ciaMemoryAnchor: {
      shapeMeaning: 'LITERA H SAU CRUCE MEDICALĂ: Asistență spitalicească continuă.',
      mnemonicPeg: 'H = Spital = Liniște deplină.',
      quickReflexRule: 'Redu turația motorului și menține un rulaj silențios.'
    }
  },
  {
    id: 'sign-dead-end',
    name: 'Drum fără ieșire (Fundătură)',
    code: 'D07',
    category: 'information',
    description: 'Semnalizează că strada pe care intri nu are continuare și se închide la capăt.',
    legalRule: 'Pătrat albastru cu bară albă terminată în dreptunghi roșu. Manevra de întoarcere este permisă la capătul străzii.',
    chessAnalogy: 'Coloană închisă de un lanț de pioni advers: fără ieșire.',
    iconName: 'Square',
    colorScheme: 'blue_white',
    commonExamTrap: 'Fundătura NU este o stradă cu sens unic! Poți circula în ambele sensuri și poți întoarce mașina!',
    svgType: 'dead_end',
    ciaMemoryAnchor: {
      shapeMeaning: 'BARĂ CU CAPĂT ROȘU: Drumul se termină în zid/proprietate.',
      mnemonicPeg: 'T roșu = fundătură; intră doar dacă ai treabă acolo.',
      quickReflexRule: 'Pregătește-te pentru manevra de întoarcere în 3 mișcări la capătul străzii.'
    }
  },
  {
    id: 'sign-gas-station',
    name: 'Stație de alimentare cu carburant',
    code: 'D08',
    category: 'information',
    description: 'Semnalizează existența unei benzinării / stații GPL / punct de încărcare energie pe traseu.',
    legalRule: 'La alimentarea mașinii: motorul trebuie oprit obligatoriu, fumatul și folosirea focului deschis sunt interzise prin lege.',
    chessAnalogy: 'Punct de realimentare a pieselor pentru continuarea partidei.',
    iconName: 'Zap',
    colorScheme: 'blue_white',
    commonExamTrap: 'Fumatul sau folosirea telefonului la pompă în timpul alimentării constituie contravenție.',
    svgType: 'gas_station',
    ciaMemoryAnchor: {
      shapeMeaning: 'POMPĂ DE BENZINĂ: Realimentare combustibil.',
      mnemonicPeg: 'Oprește motorul înainte de a introduce pistolul în rezervor.',
      quickReflexRule: 'Oprește motorul, trage frâna de mână și alimentează cu atenție.'
    }
  },

  // --- PANOURI ADIȚIONALE (ADDITIONAL PANELS) ---
  {
    id: 'sign-add-priority-curve-left',
    name: 'Panou adițional: Direcția drumului cu prioritate (Viraj Stânga)',
    code: 'P01',
    category: 'additional',
    description: 'Indică traseul concret pe care îl urmează drumul cu prioritate printr-o intersecție complexă cu mai multe ramificații.',
    legalRule: 'Linia groasă cotită indică drumul cu prioritate. Dacă părăsești drumul prioritar sau intri pe el de pe un drum secundar, se aplică ierarhia legală a priorității.',
    chessAnalogy: 'Diagonala principală cotită: piesele care o urmează dețin întâietate tactică.',
    iconName: 'RotateCcw',
    colorScheme: 'red_white',
    commonExamTrap: 'TOP 3 LA SALĂ: Vehiculul aflat pe drumul prioritar (linia groasă) are prioritate față de toate vehiculele de pe liniile subțiri, indiferent că virează sau merge înainte!',
    svgType: 'add_priority_curve_left',
    ciaMemoryAnchor: {
      shapeMeaning: 'DREPTUNGHI ALB CU LINIE GROASĂ COTITĂ: Traseul cu prioritate maximă.',
      mnemonicPeg: 'Cine este pe linia groasă trece primul; între cei de pe linie groasă se aplică prioritatea de dreapta!',
      quickReflexRule: 'Urmărește linia groasă pentru a ști dacă ai prioritate sau cedezi trecerea.'
    }
  },
  {
    id: 'sign-add-priority-curve-right',
    name: 'Panou adițional: Direcția drumului cu prioritate (Viraj Dreapta)',
    code: 'P02',
    category: 'additional',
    description: 'Indică faptul că drumul cu prioritate își schimbă direcția spre dreapta în interiorul intersecției.',
    legalRule: 'Vehiculele de pe traseul prioritar spre dreapta au întâietate față de drumurile secundare din față sau stânga.',
    chessAnalogy: 'Cotitură prioritară pe aripa regelui.',
    iconName: 'ArrowRight',
    colorScheme: 'red_white',
    commonExamTrap: 'Dacă două vehicule vin ambele de pe drumul cu prioritate (liniile groase), cel care virează la stânga cedează trecerea celui care vine din dreapta sa!',
    svgType: 'add_priority_curve_right',
    ciaMemoryAnchor: {
      shapeMeaning: 'LINIE GROASĂ SPRE DREAPTA: Traseul prioritar curbat la dreapta.',
      mnemonicPeg: 'Linia groasă este coroana regelui.',
      quickReflexRule: 'Identifică cine vine de pe linia groasă înainte de a intra în intersecție.'
    }
  },
  {
    id: 'sign-add-danger-length',
    name: 'Panou adițional: Lungimea sectorului periculos (între săgeți)',
    code: 'P03',
    category: 'additional',
    description: 'Indică lungimea totală a zonei periculoase sau pe care se aplică o restricție (ex: 2 km între două săgeți verticale).',
    legalRule: 'Săgețile verticale orientate în sus înseamnă PE O DISTANȚĂ DE (începe din dreptul indicatorului și ține 2 km).',
    chessAnalogy: 'Zonă de atac prelungită pe 2 coloane întregi.',
    iconName: 'Clock',
    colorScheme: 'red_white',
    commonExamTrap: 'CAPCANA CLASICĂ DRPCIV: Text cu săgeți (↑ 2 km ↑) = LUNGIMEA sectorului pe care ține pericolul! Text fără săgeți (2 km) = DISTANȚA până unde începe pericolul!',
    svgType: 'add_danger_length',
    ciaMemoryAnchor: {
      shapeMeaning: 'SĂGEȚI VERTICALE ÎN CADRU: Delimitează lungimea întregului tronson periculos.',
      mnemonicPeg: 'Săgeți laterale = „Pe o lungime de”; Fără săgeți = „Peste o distanță de”.',
      quickReflexRule: 'Menține vigilența pe toată lungimea specificată.'
    }
  },
  {
    id: 'sign-add-distance-to-danger',
    name: 'Panou adițional: Distanța până la locul periculos (fără săgeți)',
    code: 'P04',
    category: 'additional',
    description: 'Indică distanța exactă de la locul indicatorului până la începutul sectorului periculos sau la intersecție (ex: 300 m).',
    legalRule: 'Indicatorul de deasupra nu se aplică instantaneu, ci peste 300 de metri înainte pe carosabil.',
    chessAnalogy: 'Avertisment prematur cu 3 mutări înainte de declanșarea ofensivei.',
    iconName: 'Clock',
    colorScheme: 'red_white',
    commonExamTrap: 'Nu confunda distanța până la pericol (300 m fără săgeți) cu lungimea pericolului (↑ 300 m ↑ cu săgeți)!',
    svgType: 'add_distance_to_danger',
    ciaMemoryAnchor: {
      shapeMeaning: 'TEXT SIMPLU FĂRĂ SĂGEȚI: Temporizator de distanță.',
      mnemonicPeg: 'Doar cifre = numărătoarea inversă până la apariția pericolului.',
      quickReflexRule: 'Pregătește mașina pentru condiția ce va urma peste distanța indicată.'
    }
  },
  {
    id: 'sign-add-towing',
    name: 'Panou adițional: Ridicare autovehicule parcate neregulamentar',
    code: 'P05',
    category: 'additional',
    description: 'Montat sub indicatoarele de oprire sau staționare interzisă. Avertizează că vehiculele parcate ilegal vor fi ridicate cu platforma.',
    legalRule: 'Ridicarea se realizează prin dispoziția poliției rutiere sau locale, pe cheltuiala proprietarului automobilului.',
    chessAnalogy: 'Captură imediată de către turnul advers a piesei lăsate neapărate.',
    iconName: 'AlertTriangle',
    colorScheme: 'red_white',
    commonExamTrap: 'Ridicarea se aplică pe toată lungimea marcată de săgeți sau până la prima intersecție.',
    svgType: 'add_towing',
    ciaMemoryAnchor: {
      shapeMeaning: 'MACARA RIDICÂND O MAȘINĂ: Risc de confiscare temporară și amendă.',
      mnemonicPeg: 'Macara = mașina ta zboară dacă oprești aici.',
      quickReflexRule: 'Nu opri și nu staționa nici măcar 1 minut pe acest sector.'
    }
  },
  {
    id: 'sign-add-ice-snow',
    name: 'Panou adițional: Polei, gheață sau zăpadă',
    code: 'P06',
    category: 'additional',
    description: 'Precizează că indicatorul de avertizare sau restricție de deasupra este valabil doar în condiții de polei sau zăpadă.',
    legalRule: 'Montat frecvent sub limitările de viteză sau sub indicatorul de drum alunecos.',
    chessAnalogy: 'Regulă specială valabilă doar în condiții climaterice de iarnă.',
    iconName: 'Sparkles',
    colorScheme: 'red_white',
    commonExamTrap: 'Dacă drumul este uscat și afară sunt 20 de grade, restricția condiționată de fulgul de nea NU se aplică!',
    svgType: 'add_ice_snow',
    ciaMemoryAnchor: {
      shapeMeaning: 'FULG DE ZĂPADĂ: Condiții de carosabil înghețat.',
      mnemonicPeg: 'Fulg = activ doar când e gheață, polei sau zăpadă.',
      quickReflexRule: 'Păstrează distanța triplă de oprire când vezi zăpadă pe asfalt.'
    }
  },
  {
    id: 'sign-add-arrow-start',
    name: 'Panou adițional: Începutul zonei de acțiune',
    code: 'P07',
    category: 'additional',
    description: 'Săgeata orientată în sus indică faptul că restricția de oprire/staționare începe chiar din dreptul indicatorului.',
    legalRule: 'Este interzisă oprirea sau staționarea dincolo de indicator, înainte de el fiind permis dacă nu există altă restricție.',
    chessAnalogy: 'Punctul de pornire al blocajului.',
    iconName: 'ArrowRight',
    colorScheme: 'red_white',
    commonExamTrap: 'Săgeată în sus = ÎNCEPE zona de interzicere! Săgeată în jos = SE TERMINĂ zona de interzicere!',
    svgType: 'add_arrow_start',
    ciaMemoryAnchor: {
      shapeMeaning: 'SĂGEATĂ ÎN SUS: Pornire înainte a restricției.',
      mnemonicPeg: 'Vârful sus = începe interdicția spre înainte.',
      quickReflexRule: 'Nu parca dincolo de stâlp.'
    }
  },
  {
    id: 'sign-add-arrow-confirm',
    name: 'Panou adițional: Confirmarea zonei de acțiune',
    code: 'P08',
    category: 'additional',
    description: 'Săgeata dublă cu vârfuri în sus și în jos confirmă continuarea zonei de restricție pe o stradă lungă.',
    legalRule: 'Atenționează că ești în plină zonă de interzicere a opririi sau staționării.',
    chessAnalogy: 'Confirmare că flancul rămâne imobilizat în ambele direcții.',
    iconName: 'RotateCcw',
    colorScheme: 'red_white',
    commonExamTrap: 'Săgeată sus-jos = Ești chiar în mijlocul zonei interzise!',
    svgType: 'add_arrow_confirm',
    ciaMemoryAnchor: {
      shapeMeaning: 'SĂGEATĂ DUBLĂ SUS-JOS: Interdicția continuă și înainte și înapoi.',
      mnemonicPeg: 'Ambele direcții = încă ești în zona interzisă.',
      quickReflexRule: 'Continuă deplasarea fără a opri.'
    }
  },
  {
    id: 'sign-add-arrow-end',
    name: 'Panou adițional: Sfârșitul zonei de acțiune',
    code: 'P09',
    category: 'additional',
    description: 'Săgeata orientată în jos indică sfârșitul sectorului pe care oprirea sau staționarea au fost interzise.',
    legalRule: 'După indicator, oprirea sau staționarea devin permise conform regulilor generale.',
    chessAnalogy: 'Punctul de ieșire din raza de acțiune a turnului advers.',
    iconName: 'CheckCircle2',
    colorScheme: 'red_white',
    commonExamTrap: 'Săgeată orientată în jos = SFÂRȘITUL restricției! Dincolo de indicator ai voie să oprești mașina!',
    svgType: 'add_arrow_end',
    ciaMemoryAnchor: {
      shapeMeaning: 'SĂGEATĂ ÎN JOS: Coborârea barierei de restricție.',
      mnemonicPeg: 'Vârf jos = s-a terminat interdicția, poți parca după el.',
      quickReflexRule: 'După acest semn oprirea devine permisă.'
    }
  }
];
