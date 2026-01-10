
export interface Topic {
  id: string;
  title: string;
  description: string;
  category: string;
  source?: string;
  opener?: string;
  question?: string;
  vibes?: string[]; // Yeni: Emosional tonlar
  playlist?: {
    id: string;
    title: string;
    order: number;
    total: number;
  };
}

export const INSPIRATION_TOPICS: Topic[] = [
  {
    id: 'fact-1',
    title: 'Balın Ölümsüzlüyü',
    description: 'Arxeoloqlar **2015-ci ildə** Misirdəki qazıntılar zamanı **3000 il** yaşı olan bal küpləri tapdılar. Təəccüblü olan odur ki, bal hələ də tamamilə yeyilə bilən vəziyyətdə idi.',
    category: 'Elm',
    source: 'National Geographic',
    opener: 'Bilirdin ki, dünyada xarab olmayan yeganə qida baldır?',
    question: 'Səncə niyə marketdəki balların üzərində "son istifadə tarixi" yazırlar?',
    vibes: ['🤯 Maraqlı', '🧊 Buzqıran']
  },
  {
    id: 'fact-2',
    title: 'Oktopusların Beyinləri',
    description: 'Oktopusların **9 beyni** var: Biri mərkəzi beyin, digər 8-i isə hər qolun idarəsi üçün mini-beyinlərdir (ganglion). Üstəlik **3 ürəyi** var və qanları mavidir.',
    category: 'Təbiət',
    source: 'Scientific American',
    opener: 'Heç oktopusların 9 beyni olduğunu eşitmişdin?',
    question: 'Əlavə bir beynin olsa, onu hansı iş üçün işlədərdin?',
    vibes: ['🤔 Dərin', '🌊 Təbiət']
  },
  {
    id: 'fact-4',
    title: 'Yuxuda Öyrənmək',
    description: 'Beyin REM yuxusunda olarkən gün ərzində öyrənilən məlumatları "qısa müddətli yaddaşdan" "uzun müddətli yaddaşa" köçürür. Buna **konsolidasiya** prosesi deyilir.',
    category: 'Psixologiya',
    source: 'Harvard Medical School',
    opener: 'Deyirlər yatmazdan əvvəl nə oxusan, səhər daha yaxşı yadda qalır.',
    question: 'Səncə yuxuda xarici dil öyrənmək mümkün olsaydı, hansı dili seçərdin?',
    vibes: ['🎓 Öyrədici', '💤 Chill']
  },
  {
    id: 'fact-7',
    title: 'Kosmosun Qoxusu',
    description: 'Astronavtlar kosmosun qoxusunu "qızardılmış ət", "isti metal" və "qaynaq tüstüsü" kimi təsvir edirlər.',
    category: 'Kosmos',
    source: 'NASA',
    opener: 'Maraqlıdır ki, kosmosun qoxusu qızarmış ətə bənzəyirmiş.',
    question: 'Kosmosa getmək şansın olsa, qorxmadan gedərdin?',
    vibes: ['🚀 Fərqli', '🤔 Dərin']
  },
  {
    id: 'fact-8',
    title: 'Kleopatra və Zaman',
    description: 'Kleopatra (e.ə. 69-30) Böyük Giza Piramidasının tikintisindən (e.ə. 2560) çox, **iPhone-un icadına (2007)** və ya Aya enişə daha yaxın bir zamanda yaşayıb.',
    category: 'Tarix',
    source: 'History Channel',
    opener: 'Bunu biləndə şok oldum: Kleopatra iPhone dövrünə Piramida dövründən daha yaxın yaşayıb.',
    question: 'Səncə 500 il sonra bizim haqqımızda ən qəribə fakt nə olacaq?',
    vibes: ['🤯 Maraqlı', '⏳ Zaman']
  },
  {
    id: 'fact-15',
    title: 'Titanik Proqnozu',
    description: '**Morgan Robertson** 1898-ci ildə (Titanikdən 14 il əvvəl) yazdığı **"Futility"** romanında "Titan" adlı batmaz gəminin aysberqə çırpılaraq batmasını təsvir etmişdi.',
    category: 'Tarix',
    source: 'Time Magazine',
    opener: 'Titanik batmamışdan 14 il əvvəl bir kitabda eynilə yazılıbmış, inanılmazdır.',
    question: 'Səncə gələcəyi proqnozlaşdırmaq mümkündür, yoxsa sadəcə təsadüfdür?',
    vibes: ['👻 Sirli', '🤔 Dərin']
  },
  {
    id: 'fact-20',
    title: 'Gülüşün Faydası',
    description: 'Vanderbilt Universitetinin araşdırmasına görə, gündə **10-15 dəqiqə** gülmək metabolizmi sürətləndirir və təxminən **40 kalori** yandırır.',
    category: 'Sağlamlıq',
    source: 'Mayo Clinic',
    opener: 'Deyirlər 15 dəqiqə gülmək 40 kalori yandırır, idmana ehtiyac qalmır.',
    question: 'Son zamanlar səni ən çox nə güldürüb?',
    vibes: ['😂 Gülməli', '❤️ Pozitiv']
  },
  {
    id: 'fact-21',
    title: 'Makiavelli Effekti',
    description: 'Niccolò Machiavelli məşhur **"Hökmdar" (The Prince)** əsərində "Məqsəd vasitəni haqlı çıxarır" cümləsini heç vaxt işlətməyib. Bu, onun fikirlərinin sonradan edilən xülasəsidir.',
    category: 'Siyasət',
    source: 'The Prince',
    opener: 'Makiavelli haqqında ən böyük yalanı bilirsən? O məşhur sözü əslində deməyib.',
    question: 'Səncə siyasətdə dürüst olmaq mümkündür, yoxsa mütləq hiyləgər olmalısan?',
    vibes: ['🧠 Dərin', '💼 İş']
  },
  {
    id: 'fact-22',
    title: 'Dəvələr və Avstraliya',
    description: 'Səudiyyə Ərəbistanı dəvələri Avstraliyadan idxal edir.',
    category: 'Coğrafiya',
    source: 'BBC News',
    opener: 'Bunu eşidəndə gülməkdən öldüm: Səudiyyə Ərəbistanı dəvəni Avstraliyadan alır.',
    question: 'Səncə bizim ölkədən xaricə satıla biləcək ən qəribə şey nədir?',
    vibes: ['😂 Gülməli', '🤯 Maraqlı']
  },
  {
    id: 'fact-23',
    title: 'Oksford vs Azteklər',
    description: 'Oksford Universiteti Aztek İmperiyasından daha qədimdir.',
    category: 'Tarix',
    source: 'Smithsonian',
    opener: 'Təsəvvür edirsən, Oksford Universiteti Aztek imperiyasından daha yaşlıdır.',
    question: 'Keçmişə səyahət etsəydin, oxumağa gedərdin yoxsa imperiya qurmağa?',
    vibes: ['⏳ Zaman', '🤯 Maraqlı']
  },
  {
    id: 'fact-24',
    title: 'Delfinlər və Top',
    description: 'Delfinlər əyləncə üçün toksik balıqları dişləyərək bir növ "xumar" olurlar.',
    category: 'Təbiət',
    source: 'BBC Earth',
    opener: 'Sən demə delfinlər də əylənmək üçün "narkotik" qəbul edirmiş.',
    question: 'Heyvanların da insanlar kimi "pis vərdişləri" olması sənə qəribə gəlmir?',
    vibes: ['🌊 Təbiət', '😂 Gülməli']
  },
  {
    id: 'fact-25',
    title: 'Şokolad Pulu',
    description: 'Qədim Mayyalılar şokolad dənələrini pul vahidi kimi istifadə edirdilər.',
    category: 'Tarix',
    source: 'History.com',
    opener: 'Vaxtilə şokolad pul kimi işlənirmiş, kaş indi də elə olardı.',
    question: 'Pulun olmasa, nə ilə alış-veriş etmək istərdin?',
    vibes: ['🍫 Dadlı', '⏳ Zaman']
  },
  {
    id: 'fact-26',
    title: 'Yalançı Yaddaş',
    description: 'İnsan beyni hər dəfə xatirəni yada salanda, onu əslində yenidən "yazır" və dəyişdirir.',
    category: 'Psixologiya',
    source: 'Science Daily',
    opener: 'Biz keçmişi xatırlayanda əslində onu hər dəfə biraz dəyişdiririk.',
    question: 'Səncə uşaqlıq xatirələrimiz realdır, yoxsa beynimizin uydurması?',
    vibes: ['🤔 Dərin', '👻 Sirli']
  },
  {
    id: 'fact-27',
    title: 'Prezidentlərin Boyu',
    description: 'ABŞ tarixində ən hündür prezidentlərin seçilmə şansı statistik olaraq daha yüksəkdir.',
    category: 'Siyasət',
    source: 'Presidential Studies',
    opener: 'Statistikaya görə, uzun boylu adamların prezident seçilmə şansı daha çoxdur.',
    question: 'Səncə xarici görünüş karyerada nə qədər rol oynayır?',
    vibes: ['💼 İş', '📊 Statistika']
  },
  {
    id: 'fact-28',
    title: 'Napoleonun Boyu',
    description: 'Napoleon Bonapart əslində qısa boylu deyildi, o, öz dövrünün fransız kişiləri üçün orta boylu idi.',
    category: 'Tarix',
    source: 'History Extra',
    opener: 'Napoleon əslində balaca olmayıb, bu sadəcə ingilislərin propaqandası imiş.',
    question: 'Səncə niyə insanlar haqqında yalanlar həqiqətdən daha tez yayılır?',
    vibes: ['🤯 Maraqlı', '⚖️ Siyasət']
  },
  {
    id: 'fact-29',
    title: 'Ketçup Dərmanı',
    description: '1830-cu illərdə ketçup dərman kimi satılırdı (ishal və həzmsizlik üçün).',
    category: 'Sağlamlıq',
    source: 'Ripley\'s',
    opener: 'İnanmazsan, amma vaxtilə ketçupu aptekdə dərman kimi satıblar.',
    question: 'İndiki hansı qidanın gələcəkdə dərman sayılacağını düşünürsən?',
    vibes: ['😂 Gülməli', '🍔 Yemək']
  },
  {
    id: 'fact-30',
    title: 'Səssiz Otaq',
    description: 'Dünyanın ən səssiz otağı o qədər sakitsdir ki, öz damarlarınızdakı qanın səsini eşidə bilərsiniz.',
    category: 'Elm',
    source: 'Microsoft',
    opener: 'Dünyada elə bir otaq var ki, orada öz qanının axış səsini eşidirsən. Adam dəli olar.',
    question: 'Tam səssizlikdə nə qədər dayana bilərdin?',
    vibes: ['👻 Sirli', '🧠 Psixologiya']
  },
  {
    id: 'fact-31',
    title: 'Filibuster (Uzun Danışıq)',
    description: 'Bəzi parlamentlərdə deputatlar qanunu gecikdirmək üçün fasiləsiz 24 saatdan çox danışa bilərlər.',
    category: 'Siyasət',
    source: 'US Senate History',
    opener: 'Təsəvvür et, bir qanunu gecikdirmək üçün deputat 24 saat dayanmadan danışır. Buna "Filibuster" deyirlər.',
    question: 'Səncə sən hansı mövzuda heç dayanmadan 5 saat danışa bilərsən?',
    vibes: ['🤯 Maraqlı', '⚖️ Siyasət']
  },
  {
    id: 'fact-32',
    title: 'Diplomatik İmmunitet',
    description: 'Diplomatlar xarici ölkədə cinayət törətsələr belə, həbs oluna bilməzlər (çox vaxt).',
    category: 'Siyasət',
    source: 'Vienna Convention',
    opener: 'Diplomatların "super gücü" var: Xarici ölkədə cinayət etsələr də, onları tutmaq olmur.',
    question: 'Səncə bu qayda ədalətlidir, yoxsa ləğv olunmalıdır?',
    vibes: ['💼 İş', '⚖️ Siyasət']
  },
  {
    id: 'fact-33',
    title: 'Ən Qısa Müharibə',
    description: 'Tarixin ən qısa müharibəsi İngiltərə və Zanzibar arasında olub: Cəmi 38 dəqiqə davam edib.',
    category: 'Siyasət',
    source: 'Guinness World Records',
    opener: 'Tarixdə ən qısa müharibə cəmi 38 dəqiqə çəkib. Çay içib qurtarana qədər bitib.',
    question: 'Səncə müasir dövrdə müharibələr niyə bu qədər uzun çəkir?',
    vibes: ['⏳ Zaman', '😂 Gülməli']
  },
  {
    id: 'fact-34',
    title: 'Səsvermə Hüququ',
    description: 'Yeni Zelandiya dünyada qadınlara səsvermə hüququ verən ilk ölkədir (1893).',
    category: 'Siyasət',
    source: 'NZ History',
    opener: 'Bilirdin ki, qadınlara səsvermə hüququ verən ilk ölkə ABŞ yox, Yeni Zelandiya olub?',
    question: 'Səncə 100 il sonra bizə indi normal gələn hansı qadağa qəribə görünəcək?',
    vibes: ['⚖️ Siyasət', '⏳ Zaman']
  },
  {
    id: 'fact-35',
    title: 'Gerrymandering',
    description: 'Siyasətçilər seçkiləri qazanmaq üçün xəritədəki rayon sərhədlərini öz xeyirlərinə dəyişə bilərlər.',
    category: 'Siyasət',
    source: 'Political Science',
    opener: 'Siyasətdə "Gerrymandering" deyilən bir hiylə var: Xəritəni elə cızırlar ki, həmişə onlar qalib gəlir.',
    question: 'Səncə siyasətçilərə inanmaq olar, yoxsa hamısı eyni oyunu oynayır?',
    vibes: ['🧠 Dərin', '⚖️ Siyasət']
  },
  {
    id: 'fact-37',
    title: 'Böyük Emu Müharibəsi',
    description: '1932-ci ildə Avstraliya ordusu Emu quşlarına qarşı müharibə elan etdi və... uduzdu.',
    category: 'Tarix',
    source: 'National Museum Australia',
    opener: 'Tarixin ən gülməli müharibəsini bilirsən? Avstraliya Emu quşlarına müharibə elan edib və uduzub.',
    question: 'Səncə insan təbiətə qalib gələ bilər, yoxsa təbiət həmişə son sözü deyir?',
    vibes: ['😂 Gülməli', '🤯 Maraqlı']
  },
  {
    id: 'fact-38',
    title: 'Mandela Effekti',
    description: 'Böyük insan kütlələrinin eyni hadisəni səhv xatırlaması fenomeni (Məs: Monopoly adamının eynəyi yoxdur).',
    category: 'Psixologiya',
    source: 'Healthline',
    opener: 'Monopoly oyunundakı adamın eynəyini xatırlayırsan? Əslində onun heç vaxt eynəyi olmayıb.',
    question: 'Səncə biz paralel kainatlarda yaşayırıq, yoxsa yaddaşımız bizi aldadır?',
    vibes: ['👻 Sirli', '🧠 Dərin']
  },
  {
    id: 'fact-39',
    title: 'Almaz Yağışı',
    description: 'Neptun və Uran planetlərində atmosfer təzyiqi o qədər yüksəkdir ki, göydən sözün əsl mənasında almaz yağır.',
    category: 'Kosmos',
    source: 'NASA',
    opener: 'Neptunda yaşasaydıq zəngin olardıq, çünki orada göydən yağış əvəzinə almaz yağır.',
    question: 'Səncə dəyərli daşlar göydən yağsa, onların qiyməti yenə də baha olardı?',
    vibes: ['🚀 Fərqli', '💰 Zənginlik']
  },
  {
    id: 'fact-40',
    title: 'Ölümsüz Meduza',
    description: 'Turritopsis dohrnii adlı meduza növü qocalandan sonra yenidən "uşaqlıq" dövrünə qayıdır və bioloji olaraq ölümsüzdür.',
    category: 'Təbiət',
    source: 'National Geographic',
    opener: 'Dünyada ölümsüz tək bir canlı var: Bir meduza növü qocalandan sonra təzədən uşaqlaşır.',
    question: 'Əbədi yaşamaq şansın olsa, qəbul edərdin? Niyə?',
    vibes: ['🤯 Maraqlı', '🤔 Dərin']
  },
  {
    id: 'fact-41',
    title: 'İlk Kompüter "Oşibka"sı',
    description: 'Kompüterdəki ilk "bug" (xəta) əslində sistemin içinə girmiş real bir güvə (həşərat) idi.',
    category: 'Texnologiya',
    source: 'Computer History Museum',
    opener: 'Bilirsən niyə proqram xətasına "bug" (həşərat) deyirlər? Çünki ilk xətanı həqiqətən bir güvə yaradıb.',
    question: 'Texnologiya həyatımızı asanlaşdırır, yoxsa bizi daha asılı edir?',
    vibes: ['😂 Gülməli', '💻 Tech']
  },
  {
    id: 'fact-42',
    title: '3 Saniyə Yaddaş',
    description: 'Qızılbalıqların yaddaşının 3 saniyə olması mifi yalandır; onlar aylarla məlumatı xatırlaya bilirlər.',
    category: 'Təbiət',
    source: 'Live Science',
    opener: 'Hamı elə bilir balıqların yaddaşı 3 saniyədir, amma əslində bu yalandır.',
    question: 'Səncə insanların ən tez unutduğu dəyərli şey nədir?',
    vibes: ['🌊 Təbiət', '🤔 Dərin']
  },
  {
    id: 'fact-43',
    title: 'Voynich Əlyazması',
    description: 'Dünyada hələ də oxuna bilməyən, naməlum dildə və qəribə bitki rəsmləri ilə dolu olan sirli bir kitab var.',
    category: 'Tarix',
    source: 'Yale University',
    opener: 'Dünyada elə bir kitab var ki, heç kim oxuya bilmir. Nə dili məlumdur, nə də içindəki bitkilər.',
    question: 'Səncə bu kitabı yadplanetlilər yazıb, yoxsa sadəcə qədim bir zarafatdır?',
    vibes: ['👻 Sirli', '📚 Kitab']
  },
  {
    id: 'fact-44',
    title: 'Qara Dəliklər',
    description: 'Əgər Qara Dəliyə düşsəniz, zaman sizin üçün dayanar, amma kənardan baxan üçün siz yavaş-yavaş yox olarsınız.',
    category: 'Kosmos',
    source: 'Stephen Hawking',
    opener: 'Qara dəliyə düşsən, sənin üçün zaman dayanır, amma kənardakılar sənin donduğunu görür.',
    question: 'Zamanı idarə etmək (dondurmaq və ya irəli almaq) şansın olsa, hansını seçərdin?',
    vibes: ['🚀 Fərqli', '🤯 Maraqlı']
  },
  {
    id: 'fact-45',
    title: 'Banqkokun Tam Adı',
    description: 'Banqkokun rəsmi adı 163 hərfdən ibarətdir və dünyanın ən uzun şəhər adıdır.',
    category: 'Coğrafiya',
    source: 'Thailand Guide',
    opener: 'Banqkokun əsl adını heç kim deyə bilmir, çünki tam adı 163 hərfdən ibarətdir.',
    question: 'Adını dəyişmək şansın olsa, nə qoyardın?',
    vibes: ['😂 Gülməli', '� Səyahət']
  },
  {
    id: 'fact-47',
    title: 'İlk Yazılı Abidə',
    description: '**Orxon Abidələri** (732-ci il) Türklərin istifadə etdiyi ilk yazılı qaynaqdır. Bilgə Kağan xalqa müraciət edərək deyir: **"Ey Türk milləti, titrə və özünə dön!"**',
    category: 'Türk Tarixi',
    source: 'Gokturk Inscriptions',
    opener: 'Tarixdəki ən təsirli sözlərdən biri Bilgə Kağana aiddir: "Titrə və özünə dön".',
    question: 'Səncə müasir dövrdə biz öz kimliyimizi qoruyub saxlaya bilmişik?',
    vibes: ['🐺 Türk', '📜 Tarix']
  },
  {
    id: 'fact-48',
    title: 'Turan Taktikası',
    description: 'Dünyanın ən məşhur döyüş strategiyası olan **"Hilal"** və ya **"Qurd Qapanı"** taktikası, ordunu geri çəkilibmiş kimi göstərərək düşməni mühasirəyə almaq üzərində qurulub.',
    category: 'Türk Tarixi',
    source: 'Military History',
    opener: 'Türklərin döyüşləri həmişə ağılla udmasının sirri "Qurd Qapanı" taktikası olub. Saxta geri çəkilmə.',
    question: 'Həyatda nə vaxtsa geri çəkilib, sonra daha güclü qayıtmısan?',
    vibes: ['🔥 Güc', '🧠 Strategiya']
  },
  {
    id: 'fact-49',
    title: 'Tomris Xatun',
    description: 'E.ə. 6-cı əsrdə yaşayan **Massaget** hökmdarı **Tomris Xatun**, Əhəməni imperatoru II Kiri məğlub edərək onun başını qanla dolu tuluğa saldırmış ehtimal olunan ilk qadın hökmdardır.',
    category: 'Türk Tarixi',
    source: 'Herodotus',
    opener: 'Tomris Xatunun II Kirin başını kəsib "İndi qana doydunmu" deməsi səhnəsi dəhşətlidir.',
    question: 'Səncə tarix boyu qadın hökmdarlar kişilərdən daha sərt olub?',
    vibes: ['🔥 Güc', '👑 Lider']
  },
  {
    id: 'fact-50',
    title: 'Şalvarın İcadı',
    description: 'Dünyada şalvarı ilk icad edən xalq **Qədim Türklərdir**. Səbəbi isə sadədir: At çaparkən rahat hərəkət etmək üçün.',
    category: 'Türk Tarixi',
    source: 'Archaeology.org',
    opener: 'Bunu bilmirdim: Şalvarı əslində türklər icad edib, at sürmək rahat olsun deyə.',
    question: 'Səncə gündəlik həyatımızda istifadə etdiyimiz ən vacib "icad" nədir?',
    vibes: ['🤯 Maraqlı', '🐎 Mədəniyyət']
  },
  {
    id: 'fact-51',
    title: 'Qadın-Kişi Bərabərliyi',
    description: 'Qədim Türklərdə fərmanlar tək Xaqanın adından yox, **"Xaqan və Xatun buyurur ki..."** sözləri ilə başlayardı. Qadınsız qərar qəbul edilməzdi.',
    category: 'Türk Tarixi',
    source: 'Old Turkic Society',
    opener: 'Qədim türklərdə Xaqan tək qərar verməzdi, hökmən Xatunun da imzası olmalıydı.',
    question: 'Səncə müasir cəmiyyət bərabərlikdə qədim dövrlərdən geri qalıb?',
    vibes: ['❤️ Sevgi', '⚖️ Ədalət']
  },
  {
    id: 'fact-52',
    title: 'Bozqurd Əfsanəsi',
    description: '**Ergenekon Dastanı**na görə, türklərə dəmir dağları əridib çıxış yolunu göstərən və onlara yol göstərən müqəddəs heyvan **Bozqurd** (Asena) olmuşdur.',
    category: 'Türk Tarixi',
    source: 'Turkic Mythology',
    opener: 'Bizim mifologiyada canavar (Bozqurd) pis yox, xilaskar obrazdır.',
    question: 'Səncə niyə bir çox xalqlar özlərini heyvan simvolları (Qartal, Ayı, Qurd) ilə əlaqələndirir?',
    vibes: ['🐺 Türk', '👻 Mif']
  },
  {
    id: 'fact-54',
    title: 'Göz Təması Gücü',
    description: 'Araşdırmalara görə, biri ilə **2 dəqiqə** fasiləsiz göz təması qurmaq qarşılıqlı cazibə və yaxınlıq hissini kəskin şəkildə artırır.',
    category: 'Tanışlıq',
    source: 'Journal of Research in Personality',
    opener: 'Deyirlər biri ilə 2 dəqiqə dayanmadan göz-gözə baxsan, ona aşiq olursan.',
    question: 'Səncə gözlər həqiqətən qəlbin aynasıdır, yoxsa bu sadəcə romantik sözdür?',
    vibes: ['😏 Flirt', '❤️ Romantik']
  },
  {
    id: 'fact-55',
    title: 'Benjamin Franklin Effekti',
    description: 'Birini özünüzə cəlb etmək istəyirsinizsə, ondan **kiçik bir kömək** istəyin. Beyinləri "Mən buna kömək etdim, deməli onu bəyənirəm" siqnalını verir.',
    category: 'Tanışlıq',
    source: 'Psychology Today',
    opener: 'İnsan psixologiyası qəribədir: Kimdənsə kömək istəyəndə, o səni daha çox xoşlamağa başlayır.',
    question: 'Səncə bir insanı sevməyimizin səbəbi ona verdiyimiz əməkdir?',
    vibes: ['🧠 Psixologiya', '✨ Xarizma']
  },
  {
    id: 'fact-56',
    title: 'Asma Körpü Təcrübəsi',
    description: 'Təhlükəli və ya həyəcanlı vəziyyətlərdə (məs: hündür körpüdə) tanış olan insanlar, yaranan adrenalini səhvən **sevgi hissi** kimi yozurlar.',
    category: 'Tanışlıq',
    source: 'Dutton & Aron Study',
    opener: 'Qorxu filmində və ya "Amerikan qorkası"nda tanış olanlar bir-birinə daha tez aşiq olurmuş.',
    question: 'Həyatda ən çox həyəcanlandığın an nə vaxt olub?',
    vibes: ['🤯 Maraqlı', '❤️ Romantik']
  },
  {
    id: 'fact-57',
    title: 'Adın Sehrli Gücü',
    description: 'İnsan üçün dünyadakı ən xoş səs **öz adının** çəkilməsidir. Söhbət zamanı qarşı tərəfin adını tez-tez çəkmək etimad yaradır.',
    category: 'Tanışlıq',
    source: 'Dale Carnegie',
    opener: 'Deyirlər insan üçün dünyada ən gözəl səs öz adının səslənməsidir.',
    question: 'Adını bəyənirsən, yoxsa başqa adın olmasını istərdin?',
    vibes: ['🗣️ Ünsiyyət', '✨ Xarizma']
  },
  {
    id: 'fact-58',
    title: 'Mükəmməl Qüsur',
    description: 'Heç vaxt səhv etməyən insanlar "robot" kimi görünür və soyuqluq yaradır. Kiçik səhvlər etmək (məs: qəhvəni dağıtmaq) sizi daha səmimi və sevilən edir (**Pratfall Effect**).',
    category: 'Tanışlıq',
    source: 'Social Psychology',
    opener: 'Sən demə "sakarlıq" etmək insanı kənardan daha şirin və səmimi göstərirmiş.',
    question: 'Səncə niyə bizə "mükəmməl" görünən insanlardan çəkinirik?',
    vibes: ['🤔 Dərin', '😏 Flirt']
  },
  {
    id: 'fact-59',
    title: 'Açıq Sual Texnikası',
    description: 'Müsahibini danışdırmaq üçün "Hə/Yox" cavabı olan suallar yox, **"Necə?", "Niyə?", "Nə hiss etdin?"** kimi açıq suallar verin.',
    category: 'Tanışlıq',
    source: 'Communication Skills',
    opener: 'Söhbəti öldürməyin ən asan yolu "Hə" və ya "Yox" ilə bitən suallar verməkdir.',
    question: 'Ən çox danışmağı sevdiyin mövzu nədir?',
    vibes: ['🗣️ Ünsiyyət', '✨ Xarizma']
  },
  {
    id: 'fact-60',
    title: 'Sakitlik və Güc',
    description: 'Bioloji olaraq, stress anında **sakit qalan** kişilər lider kimi qəbul edilir. Kortizol səviyyəsi aşağı olan liderlər ətrafa "təhlükəsizlik" hissi yayır.',
    category: 'Kişilik',
    source: 'Evolutionary Psychology',
    opener: 'Bioloji bir faktdı: Stress anında kim sakit qalırsa, hamı ona tabe olur.',
    question: 'Səncə güclü olmaq, fiziki gücdür yoxsa emosional dözümlülük?',
    vibes: ['🗿 Stoik', '🔥 Güc']
  },
  {
    id: 'fact-61',
    title: 'Sözün Sənədi',
    description: 'Qədimlərdə "kişi sözü" müqavilədən daha güclü idi. Bu gün də sözünü tutmaq (inteqrit) ən yüksək maskulin dəyər sayılır.',
    category: 'Kişilik',
    source: 'The Way of Men',
    opener: 'Əvvəllər kağız-qələm yox idi, sadəcə "kişi sözü" var idi və bu yetərli idi.',
    question: 'Verdyin sözü tutmaq üçün hansısa böyük qurban vermisən?',
    vibes: ['⚖️ Şərəf', '💼 İş']
  },
  {
    id: 'fact-62',
    title: 'Bədən Dili - Genişlənmə',
    description: 'Daha çox yer tutmaq (ayaqları aralı, çiyinləri dik saxlamaq) testosteronu artırır və özgüvəni yüksəldir (**Power Posing**).',
    category: 'Kişilik',
    source: 'Amy Cuddy TED Talk',
    opener: 'Bədən dilini dəyişməklə hormonlarını dəyişə biləcəyini bilirdin?',
    question: 'Özgüvənli görünmək üçün istifadə etdiyin xüsusi bir metod var?',
    vibes: ['✨ Xarizma', '💪 Bədən Dili']
  },
  {
    id: 'fact-63',
    title: 'Stoizm və Emosiyalar',
    description: 'Həqiqi stoizm emosiyaları boğmaq deyil, onları idarə etməkdir. Qəzəb anında reaksiya verməmək zəiflik yox, **ali iradə** əlamətidir.',
    category: 'Kişilik',
    source: 'Marcus Aurelius',
    opener: 'Stoiklərə görə, kim səni əsəbiləşdirə bilirsə, o sənin sahibindir.',
    question: 'Ən son nə vaxt çox əsəbi olsan da, özünü sakit saxlaya bilmisən?',
    vibes: ['🗿 Stoik', '🧠 Dərin']
  },
  {
    id: 'fact-64',
    title: 'Qəbilə Zehniyyəti',
    description: 'Kişilər təkamül boyu kiçik qruplarda (ovçu dəstələri) fəaliyyət göstəriblər. Buna görə də "komanda yoldaşlığı" və "qardaşlıq" hissi kişilər üçün həyati önəm daşıyır.',
    category: 'Kişilik',
    source: 'Evolutionary Biology',
    opener: 'Tək canavar olmaq havalı səslənir, amma tarixdə həmişə "dəstələr" qalib gəlib.',
    question: 'Səncə ətrafındakı 5 ən yaxın dostun səni inkişaf etdirir, yoxsa geri salır?',
    vibes: ['🤝 Qardaşlıq', '🔥 Güc']
  },
  {
    id: 'fact-65',
    title: 'Məsuliyyət Yükü',
    description: 'Jordan Petersona görə, yetkinlik yaşla yox, üzərinə götürdüyün **məsuliyyətin ağırlığı** ilə ölçülür. Yük götürdükcə güclənirsən.',
    category: 'Kişilik',
    source: 'Jordan Peterson',
    opener: 'Deyirlər insan çiynindəki yük qədər güclüdür.',
    question: 'Həyatında qəbul etdiyin ən böyük məsuliyyət nə olub?',
    vibes: ['🗿 Stoik', '💼 İş']
  },
  {
    id: 'fact-66',
    title: 'Pre-selection (Seçilmişlik)',
    description: 'Qadınlar digər qadınların bəyəndiyi kişiləri daha cəlbedici tapırlar. Bu, sosial sübut (**Social Proof**) prinsipidir. Ətrafında qadın dostların olması səni daha arzuolunan edir.',
    category: 'Tanışlıq',
    source: 'Evolutionary Psychology',
    opener: 'Qəribədir, amma ətrafında qızlar olanda digər qızlar sənə daha çox maraq göstərir.',
    question: 'Səncə niyə belədir: "Əlçatmaz" olan həmişə daha şirin gəlir?',
    vibes: ['🧠 Psixologiya', '😏 Flirt']
  },
  {
    id: 'fact-67',
    title: 'Sirrli Qalmaq',
    description: 'Hər şeyi dərhal danışmaq marağı öldürür. Özün haqqında məlumatı hissə-hissə vermək (**Zeiqarnik Effekti**) qarşı tərəfi sənin haqqında daha çox düşünməyə vadar edir.',
    category: 'Tanışlıq',
    source: 'The Art of Seduction',
    opener: 'Deyirlər açıq kitab maraqsız olur, gərək həmişə deyilməmiş bir sirrin qalsın.',
    question: 'İnsanların sənin haqqında bilmədiyi ən maraqlı xüsusiyyətin nədir?',
    vibes: ['👻 Sirli', '✨ Xarizma']
  },
  {
    id: 'fact-68',
    title: 'Qırmızı Geyim Effekti',
    description: 'Psixoloji araşdırmalara görə, qırmızı rəng geyinən və ya qırmızı elementləri olan insanlar qarşı cinsə bioloji olaraq daha cəlbedici görünür.',
    category: 'Tanışlıq',
    source: 'Color Psychology',
    opener: 'Sən demə qırmızı rəng geyinmək insanı avtomatik daha cəlbedici göstərirmiş.',
    question: 'Səncə geyim tərzi insanın xarakterini nə qədər əks etdirir?',
    vibes: ['❤️ Romantik', '✨ Xarizma']
  },
  {
    id: 'fact-69',
    title: 'Dinləmə və Validasiya',
    description: 'Qadınlar problemlərini həll etməyinizi yox, sadəcə onları **dinləməyinizi** və hisslərini təsdiqləməyinizi istəyirlər. Məsləhət vermək əvəzinə "Səni başa düşürəm" demək daha güclüdür.',
    category: 'Tanışlıq',
    source: 'Men are from Mars...',
    opener: 'Kişilərin ən böyük səhvi: Qadın dərdini danışanda dərhal həll yolu axtarırıq, əslində sadəcə dinləməliyik.',
    question: 'Səncə yaxşı dinləyici olmaq, yoxsa yaxşı məsləhətçi olmaq daha vacibdir?',
    vibes: ['🗣️ Ünsiyyət', '❤️ Sevgi']
  },
  {
    id: 'fact-70',
    title: 'Səs Tonu',
    description: 'Daha aşağı tonlu və yavaş danışıq tərzi (**Deep Voice**) dominantlıq və sakitlik siqnalı verir ki, bu da qadınlar tərəfindən çox cəlbedici qəbul edilir.',
    category: 'Tanışlıq',
    source: 'Vocal Attractiveness',
    opener: 'Səs tonunun insanlara təsiri inanılmazdır, xüsusilə qalın səs daha güvənli gəlir.',
    question: 'İnsanın səs tonu sənə onun haqqında nə deyir?',
    vibes: ['✨ Xarizma', '🗣️ Ünsiyyət']
  },
  {
    id: 'fact-71',
    title: 'Yetkin Qadınla Qızıl Qayda',
    description: 'Ən böyük səhv: Özünü "uşaq" kimi aparmaq. Onlar yanında oğlan uşağı yox, **özünə güvənən kişi** görmək istəyirlər. Şıltaqlıq etmə, qərarlı ol.',
    category: 'Tanışlıq',
    source: 'Dating Psychology',
    opener: 'Deyirlər qadınlar yaşa dolduqca daha çox "güvən" axtarırlar, nəinki yaraşıq.',
    question: 'Səncə bir kişini yetkin göstərən əsas xüsusiyyət nədir?',
    vibes: ['✨ Xarizma', '😏 Flirt']
  },
  {
    id: 'fact-72',
    title: 'Təhlükəli Kompliment',
    description: 'Heç vaxt **"Yaşına görə çox yaxşı qalmısan"** demə. Bu kompliment yox, təhqirdir. Bunun əvəzinə onun **enerjisini, stilini və aurasını** təriflə.',
    category: 'Tanışlıq',
    source: 'Social Dynamics',
    opener: 'Bir qadına "yaşına görə qəşəngsən" demək, əslində "qocalmısan" deməkdir.',
    question: 'Səncə ən təsirli kompliment xarici görünüşdür, yoxsa xarakter?',
    vibes: ['🗣️ Ünsiyyət', '😏 Flirt']
  },
  {
    id: 'fact-73',
    title: 'Enerji və Macəra Ehtiyacı',
    description: 'Yetkin qadınlar gənc kişilərdə **itirdikləri enerjini və həyəcanı** axtarırlar. Problemlərdən, işdən, borcdan danışma. Onlara "macəra" hiss etdir.',
    category: 'Tanışlıq',
    source: 'Relationship Advice',
    opener: 'Həyatda ən son nə vaxt spontan bir çılğınlıq etmisən?',
    question: 'Rutindən çıxmaq üçün etdiyin ən maraqlı şey nə olub?',
    vibes: ['🔥 Güc', '✨ Xarizma']
  },
  {
    id: 'fact-74',
    title: 'Azadlıq Taktikası',
    description: 'Təcrübəli qadınların öz həyatı, işi və bəlkə uşaqları var. **Yapışqan olma**. Onlara nəfəs almağa imkan verən, amma görüşəndə keyfiyyətli vaxt keçirən biri ol.',
    category: 'Tanışlıq',
    source: 'Attraction Principles',
    opener: 'Münasibətdə ən vacib şey bir-birini boğmamaqdır.',
    question: 'Səncə ideal münasibətdə tərəflər bir-birinə nə qədər vaxt ayırmalıdır?',
    vibes: ['🧠 Psixologiya', '☕ Chill']
  },
  {
    id: 'fact-75',
    title: 'Zombi Komandası',
    description: 'Zombi apokalipsisi olsa, sağ qalmaq üçün komandanda mütləq olmalı olan 3 peşə sahibi kimdir? (Həkim, əsgər... bəs üçüncü?)',
    category: 'Tanışlıq',
    source: 'Icebreaker Questions',
    opener: 'Təsəvvür et zombi apokalipsisi başlayıb və komanda yığmalısan.',
    question: 'Yanına alacağın 3-cü adam kim olardı?',
    vibes: ['🧊 Buzqıran', '🤯 Maraqlı']
  },
  {
    id: 'fact-76',
    title: 'Görünməzlik Gücü',
    description: 'Bir günlüyünə tamamilə görünməz olsan və heç kim səni görməsə, ilk edəcəyin şey nə olardı? (Bank yarmaq yoxsa kimisə izləmək?)',
    category: 'Psixologiya',
    source: 'Hypothetical Scenarios',
    opener: 'Səncə görünməzlik lənətdir yoxsa hədiyyə?',
    question: 'Görünməz olsan, hara gizlicə girərdin?',
    vibes: ['🧊 Buzqıran', '👻 Sirli']
  },
  {
    id: 'fact-77',
    title: 'Pinqvin Gülüşü',
    description: 'Pinqvinlər yıxılanda biz gülürük. Bəs onlar bizim yıxıldığımızı görəndə gülürlər? (Elmi cavab: Yəqin ki yox, amma düşünmək gülməlidir).',
    category: 'Elm',
    source: 'Funny Biology',
    opener: 'Hərdən düşünürəm, heyvanlar da bizə baxıb "bunlar nə axmaqdır" deyirmi?',
    question: 'Başına gələn ən gülməli uğursuzluq nə olub?',
    vibes: ['😂 Gülməli', '☕ Chill']
  },
  {
    id: 'fact-78',
    title: 'Tənbəl Dahilər',
    description: 'Bill Gates deyir: "Mən həmişə çətin işi tənbəl adama tapşırıram. Çünki o, işi həll etməyin ən asan yolunu tapacaq."',
    category: 'Texnologiya',
    source: 'Leadership Quotes',
    opener: 'Tənbəllik əslində inkişafın mühərrikidir deyirlər.',
    question: 'Səncə ağıllı işləmək lazımdır, yoxsa çox işləmək?',
    vibes: ['😂 Gülməli', '💼 İş']
  },
  {
    id: 'fact-79',
    title: 'Amor Fati (Taleyini Sev)',
    description: 'Stoiklərin ən güclü düsturu: Başına gələn hər şeyi nəinki qəbul et, onu **sev**. Çünki o sənin həyatının materialıdır, ondan qaçış yoxdur.',
    category: 'Fəlsəfə',
    source: 'Nietzsche / Stoicism',
    opener: 'Həyatda başına gələn pis hadisələrə "yaxşı ki oldu" deyə bilirsən?',
    question: 'Keçmişdəki hansı "uğursuzluq" sənə ən çox şey öyrətdi?',
    vibes: ['🗿 Stoik', '🤔 Dərin']
  },
  {
    id: 'fact-80',
    title: 'Arxa-Arxaya',
    description: 'Qədim Spartada döyüşçülərin yan-yana düzülməsinin səbəbi "Qardaşlıq" idi. Sənin qalxanın yanındakı dostunu qoruyurdu. Zəncir ən zəif həlqə qədər güclüdür.',
    category: 'Kişilik',
    source: 'Spartan History',
    opener: 'Əsl dost dar gündə tanınar deyirlər, amma əslində yaxşı gündə daha yaxşı tanınır.',
    question: 'Həyatında sənə "arxa" olan dostun var?',
    vibes: ['🤝 Qardaşlıq', '🔥 Güc']
  },
  {
    id: 'fact-81',
    title: '80/20 Qaydası (Pareto)',
    description: 'Həyatda nəticələrin 80%-i, səbəblərin yalnız 20%-indən gəlir. İşdə, pulda və münasibətdə "vacib azlığa" fokuslan.',
    category: 'Kişilik',
    source: 'Productivity',
    opener: 'Bütün günü məşğul olmaq, produktiv olmaq demək deyil.',
    question: 'Sənin həyatında ən çox effekt verən o "20%" nədir?',
    vibes: ['💼 İş', '🧠 Dərin']
  },
  {
    id: 'fact-82',
    title: 'Susmaq Qızıldır',
    description: 'Danışıqlarda və ya mübahisədə ən güclü silah **susmaqdır**. Boşluğu doldurmağa çalışma. Susanda qarşı tərəf narahat olub daha çox məlumat verir.',
    category: 'Kişilik',
    source: 'Negotiation Tactics',
    opener: 'İnsanların çoxu dinləmir, sadəcə danışmaq üçün növbəsini gözləyir.',
    question: 'Son dəfə nə vaxt dilini saxlayıb qazandın?',
    vibes: ['✨ Xarizma', '🗣️ Ünsiyyət']
  },
  {
    id: 'fact-83',
    title: 'Güzgüləmə (Mirroring)',
    description: 'Qarşı tərəfin bədən dilini və səs tonunu incə şəkildə təqlid etmək (güzgüləmək) bilinçaltı olaraq "biz eyniyik" mesajı verir və güvən yaradır.',
    category: 'Psixologiya',
    source: 'FBI Negotiation',
    opener: 'İnsanlar özlərinə bənzəyən adamları daha tez sevir.',
    question: 'Səncə bədən dili yalan danışa bilər?',
    vibes: ['💪 Bədən Dili', '🧠 Psixologiya']
  },
  {
    id: 'fact-89',
    title: 'Femininlik vs Submissivlik',
    description: 'Femininlik **estetik və davranış tərzidir** (zəriflik, qayğı), Submissivlik isə **dinamikadır** (qərarları sənə buraxmaq, liderliyini qəbul etmək). Hər zərif qadın itaətkar deyil.',
    category: 'Psixologiya',
    source: 'Behavioral Psychology',
    opener: 'Zərif görünmək hələ idarə oluna bilmək demək deyil.',
    question: 'Səncə münasibətdə liderlik bir nəfərdə olmalıdır, yoxsa vəziyyətə görə dəyişməlidir?',
    vibes: ['🧠 Psixologiya', '🤔 Dərin']
  },
  {
    id: 'fact-90',
    title: 'Məsuliyyət Cazibəsi',
    description: 'Qadın "Sən necə istəyirsən?" deyirsə, bu tənbəllik deyil. O, sənin **liderliyini yoxlayır**. Səhv qərar vermək belə, qərarsız qıvranmaqdan daha cəlbedicidir.',
    category: 'Kişilik',
    source: 'Leadership Dynamics',
    opener: 'Əksər qadınlar gizlicə idarə olunmaq istəyir, amma yalnız güvəndikləri kişi tərəfindən.',
    question: 'Həyatında verdiyin ən riskli qərar nə olub?',
    vibes: ['🔥 Güc', '✨ Xarizma']
  },
  {
    id: 'fact-91',
    title: 'Qalanın Qapıları',
    description: 'Qadın submissiv tərəfini yalnız tam güvəndiyi, **"Qoruyucu"** kimi gördüyü kişinin yanında açır. Bu zorla alınmır, davranışla qazanılır.',
    category: 'Tanışlıq',
    source: 'Trust Mechanics',
    opener: 'Təslimiyyət zəiflik yox, ən yüksək güvən formasıdır.',
    question: 'İnsanlara güvənmək sənin üçün asandır, yoxsa zaman alır?',
    vibes: ['❤️ Romantik', '🤝 Qardaşlıq']
  },
  {
    id: 'fact-92',
    title: 'Səs Tonunun Sirri',
    description: 'Müşahidə et: Əgər sənin yanında səs tonu **yumşalır, melodikləşir** və ya biraz "uşaqlaşırsa", bu onun sənə qarşı feminin tərəfini açdığının ən böyük siqnalıdır.',
    category: 'Psixologiya',
    source: 'Body Language',
    opener: 'İnsanların səs tonu onların kimin yanında olduğunu ələ verir.',
    question: 'Səncə səs tonu insanın xarakterini əks etdirir?',
    vibes: ['🗣️ Ünsiyyət', '💪 Bədən Dili']
  },
  {
    id: 'fact-84',
    title: 'Qadın Enerjisi (Polarity)',
    description: 'Sən **"Qaya"** olmalısan ki, o **"Okean"** kimi dalğalana bilsin. Sən emosional olaraq sabit və güclü duranda, o özünü təhlükəsiz və daha feminin hiss edir.',
    category: 'Kişilik',
    source: 'Polarity Framework',
    opener: 'Münasibətdə biri sabit, digəri isə hərəkətli olanda tarazlıq yaranır.',
    question: 'Səncə qadını bir kişinin yanında ən çox nə "qadın kimi" hiss etdirir?',
    vibes: ['🗿 Stoik', '❤️ Romantik']
  },
  {
    id: 'fact-85',
    title: 'Liderlik Yükü',
    description: '"Nə istəyirsən edək?" sualı cəlbedici deyil, bu məsuliyyətdən qaçmaqdır. **"Axşam 8-də hazırlaş, səni əla bir yerə aparıram"** cümləsi isə afrodizyakdır. Planlı ol.',
    category: 'Tanışlıq',
    source: 'Leadership Dynamics',
    opener: 'Qərarsız kişi qadının enerjisini öldürür.',
    question: 'Planlı sürprizləri xoşlayırsan, yoxsa spontan qərarları?',
    vibes: ['✨ Xarizma', '🔥 Güc']
  },
  {
    id: 'fact-86',
    title: 'Kiçik Jestlər (Micro-care)',
    description: 'Qapını açmaq, pencəyini vermək, ağır zənbili almaq - bunlar köhnəlməyib. Bu **"Mən səni qoruyuram və qayğı göstərirəm"** deməyin səssiz və güclü yoludur.',
    category: 'Tanışlıq',
    source: 'Gentleman Rules',
    opener: 'Jestlər sözlərdən daha ucadan danışır.',
    question: 'Səncə centlmenlik ölüb, yoxsa sadəcə forması dəyişib?',
    vibes: ['❤️ Romantik', '🤝 Qardaşlıq']
  },
  {
    id: 'fact-87',
    title: 'Dinləmə Sənəti',
    description: 'Qadınlar həll yolu yox, **anlaşılmaq** istəyir. O emosional danışanda "bunu belə həll et" demə, **"bu səni necə hiss etdirdi?"** soruş. Sadəcə dinlə.',
    category: 'Psixologiya',
    source: 'Emotional Intelligence',
    opener: 'Biz kişilər tez həll etməyə çalışırıq, amma bəzən sadəcə "hə" deyib dinləmək lazımdır.',
    question: 'Səncə yaxşı dinləyici olmaq nə deməkdir?',
    vibes: ['🗣️ Ünsiyyət', '🧠 Psixologiya']
  },
  {
    id: 'fact-88',
    title: 'Tərifin Dərinliyi',
    description: 'Sadəcə "Gözəlsən" demə, bu hamının dediyi sözdür. Onun **xarakterini, zəkasını və ya səylərini** təriflə. "Bu vəziyyətdəki yanaşman heyranedicidir" daha güclüdür.',
    category: 'Tanışlıq',
    source: 'Compliment Strategy',
    opener: 'İnsanlar xarici görünüşləri ilə yox, seçimləri ilə təriflənəndə xoşbəxt olurlar.',
    question: 'İndiyə qədər aldığın ən unudulmaz kompliment nə olub?',
    vibes: ['😏 Flirt', '✨ Xarizma']
  },
  {
    id: 'fact-93',
    title: 'Tomris Xatun',
    description: 'Dünya tarixinin ilk qadın hökmdarı olan Tomris, fars hökmdarı Kirin başını "qanla doyuraraq" ona unudulmaz bir dərs vermişdir. Qadın gücünün simvoludur.',
    category: 'Türk Tarixi',
    source: 'Herodotus',
    opener: 'Tarixdə ən güclü qadın fiquru kimdir desələr, Tomrisi xatırlayın.',
    question: 'Səncə qadınlar idarəçilikdə kişilərdən daha rəhimsiz ola bilər?',
    vibes: ['🐺 Türk', '🔥 Güc']
  },
  {
    id: 'fact-94',
    title: 'Bozqurd Əfsanəsi',
    description: 'Bozqurd sadəcə bir heyvan deyil, türklərə yol göstərən **xilaskar ruhdur**. Çətin zamanlarda milləti dardan qurtaran bir bələdçi simvoludur.',
    category: 'Türk Tarixi',
    source: 'Turkic Mythology',
    opener: 'Hər millətin bir simvolu var, amma Qurd yeganə heyvandır ki, sirklərdə əhliləşdirilmir.',
    question: 'Səncə niyə türklər məhz Qurdu özlərinə simvol seçib?',
    vibes: ['🐺 Türk', '👻 Sirli']
  },
  {
    id: 'fact-95',
    title: 'Ergenekon və Dəmir',
    description: 'Türklər dəmirçi millətdir. Ergenekon dastanına görə, dağları əridərək azadlığa çıxıblar. Buna görə də "Dəmir" türklərdə müqəddəs element sayılır.',
    category: 'Türk Tarixi',
    source: 'Ergenekon Epic',
    opener: 'Mart ayında tonqal qalanması əslində Ergenekondan çıxışı - yazın gəlişini simvolizə edir.',
    question: 'Azadlıq üçün nələri qurban verərdin?',
    vibes: ['🐺 Türk', '🏔️ Təbiət']
  },
  {
    id: 'fact-96',
    title: 'Yeddi Sayının Sirri',
    description: 'Türk mifologiyasında "7" müqəddəsdir. Yer 7 qatdır, Göy 7 qatdır. Qədim şamanlar göyün 7-ci qatına qalxaraq Tanrı ilə əlaqə qurardı.',
    category: 'Türk Tarixi',
    source: 'Numerology',
    opener: 'Həftənin günlərindən tutmuş nağıllara qədər niyə hər şey 7-dir?',
    question: 'Sənin də uğurlu rəqəmin var?',
    vibes: ['🐺 Türk', '🤔 Dərin']
  },
  {
    id: 'fact-97',
    title: 'Spotlight Effekti',
    description: 'Utanırsan ki, hamı sənə baxacaq? Həqiqət budur ki, insanlar özləri ilə o qədər məşğuldur ki, sənin "biabırçılığını" cəmi **30 saniyə** xatırlayacaqlar. Rahat ol.',
    category: 'Psixologiya',
    source: 'Social Psychology',
    opener: 'Heç fikir vermisən, küçədə yıxılan adamı 5 dəqiqə sonra heç kim xatırlamır?',
    question: 'Səncə insanlar səni mühakimə edir, yoxsa sadəcə sənə elə gəlir?',
    vibes: ['🧠 Psixologiya', '👻 Sirli']
  },
  {
    id: 'fact-98',
    title: 'Sən yoxsa Siz?',
    description: 'Qızıl qayda: Həmişə **"Siz"** ilə başla. Bu səni mədəni və təhlükəsiz göstərir. Sonra "Çox rəsmi olmasın, sənə keçək?" deyərək məsafəni qısalda bilərsən.',
    category: 'Tanışlıq',
    source: 'Social Etiquette',
    opener: 'İlk cümlədə "Sən" demək bəzən çox aqressiv görünür.',
    question: 'Tanımadığın adam sənə dərhal "sən" deyəndə nə hiss edirsən?',
    vibes: ['🗣️ Ünsiyyət', '🎩 Centlmen']
  },
  {
    id: 'fact-99',
    title: 'Gizli Qalanların Sirri',
    description: 'Qeyri-ciddi münasibət axtarır, amma dram istəmirsən? Nömrəni vermə. **Telegram Username** və ya ikinci bir Instagram profili işlət. Bu, sənin şəxsi həyatını sığortalayır.',
    category: 'Tanışlıq',
    source: 'Privacy Tactics',
    opener: 'Müasir dövrdə anonimlik ən böyük lüksdür.',
    question: 'Sosial şəbəkələrdə hər kəsə açıqsan, yoxsa gizli hesabların var?',
    vibes: ['🕵️ Gizli', '📱 Texnologiya']
  },
  {
    id: 'fact-100',
    title: '3 Saniyə Qaydası',
    description: 'Xoşuna gələn birini gördün? Beynin "qorxu ssenariləri" yazmağa başlamamış, **ilk 3 saniyədə** yaxınlaş. Çox düşünmək tərəddüd yaradır, hərəkət isə qorxunu öldürür.',
    category: 'Psixologiya',
    source: 'Pickup Psychology',
    opener: 'Düşünmək üçün vaxt ayırmaq bəzən ən böyük səhvdir.',
    question: 'Həyatında ani qərar verib etdiyin ən çılğın şey nə olub?',
    vibes: ['🔥 Güc', '⚡ Enerji']
  },
  {
    id: 'fact-101',
    title: 'Özünə Güvən',
    description: 'Qadınlar özünü qiymətləndirən kişiləri sevir. Bahalı maşın yox, **öz dəyərini bilmək** ən böyük cazibədir. Sən özünə inanmasan, o niyə inansın?',
    category: 'Kişilik',
    source: 'Self-Worth',
    opener: 'Güvənli duruş ən bahalı kostyumdan daha cəlbedicidir.',
    question: 'Səncə insan özgüvənini sonradan qazana bilər?',
    vibes: ['🔥 Güc', '✨ Xarizma']
  },
  {
    id: 'fact-102',
    title: 'Baxımlı Olmaq',
    description: 'Baxımlı olmaq "brend geyinmək" deyil. Təmiz olmaq, xoş ətir və səliqəli görünüş qadına **"Mən özümə hörmət edirəm"** mesajını verir.',
    category: 'Tanışlıq',
    source: 'Grooming Basics',
    opener: 'İnsanlar kitabın üz qabığına görə qiymət verir, içini sonra oxuyur.',
    question: 'Xarici görünüşdə ilk diqqət etdiyin detal nədir?',
    vibes: ['🎩 Centlmen', '💪 Bədən Dili']
  },
  {
    id: 'fact-103',
    title: 'Dinləməyin Gücü',
    description: 'Onu sadəcə eşitmə, **anla**. Qadınlar danışarkən həll yolu yox, emosional əlaqə axtarır. Yaxşı dinləyici olmaq, ən yaxşı danışan olmaqdan üstündür.',
    category: 'Psixologiya',
    source: 'Active Listening',
    opener: 'Çox adam cavab vermək üçün dinləyir, anlamaq üçün yox.',
    question: 'Səncə yaxşı dinləyici olmaq fitri istedaddır?',
    vibes: ['🗣️ Ünsiyyət', '❤️ Romantik']
  },
  {
    id: 'fact-104',
    title: 'Yumor Hissi',
    description: 'Lətifə danışmaq lazım deyil. Hadisələrə **əyləncəli tərəfdən baxa bilmək** və gərginliyi gülüşlə azaltmaq qadınları maqnit kimi çəkir.',
    category: 'Tanışlıq',
    source: 'Social Intelligence',
    opener: 'Birlikdə gülə bilmədiyin insanla gələcək qurmaq çətindir.',
    question: 'Səncə yumor hissi zəkanın göstəricisidir?',
    vibes: ['😂 Gülməli', '🧊 Buzqıran']
  },
  {
    id: 'fact-105',
    title: 'Səmimiyyət',
    description: 'Rol oynama. "Bad boy" və ya "milyonçu" kimi davranmağa çalışma. Orijinal olmaq, mükəmməl saxtakarlıqdan daha dəyərlidir.',
    category: 'Kişilik',
    source: 'Authenticity',
    opener: 'Maskalar gec-tez düşür, əsl üz isə həmişə qalır.',
    question: 'İnsanların səmimi olub-olmadığını necə hiss edirsən?',
    vibes: ['🤝 Qardaşlıq', '⚖️ Şərəf']
  },
  {
    id: 'fact-106',
    title: 'Salam, Necəsən? (Qadağan)',
    description: 'Banal "Salam" mesajı əvəzinə, fərdiləşdirilmiş mesaj yaz. Onun şəklindəki detalı və ya paylaşdığı musiqini şərh etmək, cavab almaq şansını **10 qat artırır**.',
    category: 'Tanışlıq',
    source: 'Messaging Dynamics',
    opener: 'Hər kəs salam yazır, sən fərqli ol.',
    question: 'Aldığın ən maraqlı ilk mesaj nə olub?',
    vibes: ['😏 Flirt', '🗣️ Ünsiyyət']
  },
  {
    id: 'fact-107',
    title: 'Sual Sənəti',
    description: '"Nə işləyirsən?" darıxdırıcıdır. "Ən sevdiyin səyahət hansı olub?" və ya "Səni son vaxtlar ən çox nə güldürüb?" kimi **açıq uclu** suallar söhbəti alovlandırır.',
    category: 'Tanışlıq',
    source: 'Conversation Starters',
    opener: 'Yaxşı sual, yaxşı söhbətin açarıdır.',
    question: 'Səncə insanı tanımaq üçün ən yaxşı sual hansıdır?',
    vibes: ['🗣️ Ünsiyyət', '🧊 Buzqıran']
  },
  {
    id: 'fact-108',
    title: 'Yumorlu Mesajlaşma',
    description: 'Mesajlaşarkən çox ciddi olma. Pozitivlik və yüngül zarafat gərginliyi azaldır. Amma diqqətli ol: yazıda tonu tutmaq çətindir, kobud görünmə.',
    category: 'Tanışlıq',
    source: 'Text Game',
    opener: 'Gülüş, mesajlaşmanın ən qısa yoludur.',
    question: 'Mesajlarda emojilərdən istifadə edirsən, yoxsa sözlər kifayətdir?',
    vibes: ['😂 Gülməli', '☁️ Chill']
  },
  {
    id: 'fact-109',
    title: 'Tərifin Hədəfi',
    description: 'Hər kəs "gözəlsən" deyir. Sən onun **bacarığına, zövqünə və ya zəkasına** tərif de. "Bu yazını sən yazmısan? Çox təsiredicidir" cümləsi "Gözlərin qəşəngdir"dən daha güclüdür.',
    category: 'Psixologiya',
    source: 'Compliment Psychology',
    opener: 'Görünüş genetikadır, zövq isə seçimdir. Seçimləri təriflə.',
    question: 'Səncə ən təsirli kompliment nədir?',
    vibes: ['❤️ Romantik', '🧠 Psixologiya']
  },
  {
    id: 'fact-110',
    title: 'Özgüvən vs Lovğalıq',
    description: 'Fərqi bil: Özgüvən sakitdir. Lovğalıq isə səs-küylüdür. **Həqiqi alfa** özünü sübut etməyə çalışmaz, sadəcə otağa girər və varlığı hiss olunar.',
    category: 'Kişilik',
    source: 'Inner Game',
    opener: 'Lovğa adam əslində ən kompleksli adamdır.',
    question: 'Səncə insan niyə özünü öyməyə ehtiyac duyur?',
    vibes: ['🔥 Güc', '🗿 Stoik']
  },
  {
    id: 'fact-111',
    title: 'Bədən Dilinin Sirri',
    description: 'Sözlər yalan deyə bilər, amma bədən dili yox. Dik duruş, açıq qollar və göz teması qarşı tərəfə **"Mən burdayam və qorxmuram"** siqnalını ötürür.',
    category: 'Psixologiya',
    source: 'Non-Verbal Comm',
    opener: 'İnsanların 93%-i sözsüz ünsiyyətə inanır.',
    question: 'İnsanla danışanda gözünün içinə baxmaq çətindir?',
    vibes: ['💪 Bədən Dili', '✨ Xarizma']
  },
  {
    id: 'fact-112',
    title: 'Push & Pull (Gəl-Get)',
    description: 'Söhbəti qızışdır, sonra zarafatla geri çəkil. Həmişə əlçatan olma. Bu dinamika (yaxınlaşma və uzaqlaşma) qadında maraq və **gərginlik (tension)** yaradır.',
    category: 'Tanışlıq',
    source: 'Attraction Dynamics',
    opener: 'Dəniz belə dalğalanmasa maraqsız olar. Münasibət də belədir.',
    question: 'Həddindən artıq qayğıkeşlik səni bezdirir?',
    vibes: ['😏 Flirt', '👻 Sirli']
  },
  {
    id: 'fact-113',
    title: 'Səsin Gücü',
    description: 'Daha yavaş və bir ton aşağı danış. Tələskən danışıq gərginlik, yavaş və dərindən gələn səs isə **güc və intimlik** əlamətidir.',
    category: 'Tanışlıq',
    source: 'Vocal Intelligence',
    opener: 'Bəzən nə dediyin yox, necə dediyin önəmlidir.',
    question: 'Səncə insanın səsi onun xarakterini əks etdirir?',
    vibes: ['🗣️ Ünsiyyət', '❤️ Romantik']
  },
  {
    id: 'fact-114',
    title: 'Qaçma, Cəlb Et',
    description: 'Əgər qarşılıq görmürsənsə, israr etmə. Güclü kişi &quot;niyə məni istəmədi?&quot; deməz, **&quot;deməli uyğun deyildik&quot;** deyib yoluna davam edər. Bu duruş, səni daha dəyərli edir.',
    category: 'Kişilik',
    source: 'Abundance Mindset',
    opener: 'Heç vaxt gedənin arxasınca qaçma, bu səni kiçildir.',
    question: 'Rədd ediləndə buna necə reaksiya verirsən?',
    vibes: ['⚖️ Şərəf', '🗿 Stoik']
  },
  {
    id: 'fact-115',
    title: 'İctimai Aktivlik',
    description: 'Evdə oturaraq əlaqə qurulmur. Şəhərindəki ictimai müzakirələrə, dövlət tədbirlərinə və konfranslara qatıl. Görünmək, tanınmağın yarısıdır.',
    category: 'Siyasət',
    source: 'Networking Strategy',
    opener: 'Böyük qapılar, kiçik tədbirlərdə açılır.',
    question: 'Sonuncu dəfə hansı ictimai tədbirdə iştirak etmisən?',
    vibes: ['🗣️ Ünsiyyət', '💼 İş']
  },
  {
    id: 'fact-116',
    title: 'Konstruktiv İmic',
    description: 'Sosial mediada aqressiv tənqidçi olma. Siyasətçilər və məmurlar **həll yolu təklif edən**, balanslı və intellektual gəncləri axtarır.',
    category: 'Siyasət',
    source: 'Reputation Management',
    opener: 'Qışqıranı hamı eşidir, amma sakit danışanı hamı dinləyir.',
    question: 'Sosial mediada özünü necə təqdim edirsən?',
    vibes: ['⚖️ Şərəf', '✨ Xarizma']
  },
  {
    id: 'fact-117',
    title: 'Ekspert Statusu',
    description: 'Sadəcə "fəal" olma, bir sahənin (məsələn, texnologiya, dizayn) **mütəxəssisi** ol. Güc sahibləri peşəkarlara ehtiyac duyur və onlarla işləməyə can atır.',
    category: 'Siyasət',
    source: 'Value Proposition',
    opener: 'Bilik, ən böyük siyasi kapitaldır.',
    question: 'Hansı sahədə "əvəzolunmaz" ola bilərsən?',
    vibes: ['💼 İş', '✨ Xarizma']
  },
  {
    id: 'fact-118',
    title: 'Kiçik Təmaslar',
    description: 'Böyük əlaqələr kiçik jestlər və təşəkkür məktublarından başlayır. Bir vizitka və ya səmimi bir "Sağ ol", gələcəyin körpüsüdür.',
    category: 'Siyasət',
    source: 'Connection Building',
    opener: 'İnsanlar onlara necə hiss etdirdiyini heç vaxt unutmur.',
    question: 'Yeni tanış olduğun insanla əlaqəni necə saxlayırsan?',
    vibes: ['🤝 Qardaşlıq', '🗣️ Ünsiyyət']
  },
  {
    id: 'fact-119',
    title: 'Uzunmüddətli Marafon',
    description: 'Güclü əlaqələr bir gündə yaranmır. Bu sprint yox, marafondur. Davamlı ol, etibar qazan və dərhal qarşılıq gözləmə.',
    category: 'Siyasət',
    source: 'Strategic Patience',
    opener: 'Səbir, gücün gizli tərkib hissəsidir.',
    question: 'Hədəflərin üçün illərlə gözləməyə hazırsan?',
    vibes: ['🗿 Stoik', '🤔 Dərin']
  },
  {
    id: 'fact-120',
    title: 'Aktiv Dinləmə',
    description: 'Çox adam cavab vermək üçün dinləyir. Sən isə **anlamaq üçün dinlə**. Sözünü kəsmə, göz teması qur və yalnız o bitirdikdən sonra danış.',
    category: 'Psixologiya',
    source: 'Communication Skills',
    opener: 'Yaxşı dinləyici olmaq, yaxşı danışmaqdan daha çətindir.',
    question: 'Səncə insanlar niyə dinləməkdə çətinlik çəkir?',
    vibes: ['🗣️ Ünsiyyət', '🤝 Qardaşlıq']
  },
  {
    id: 'fact-121',
    title: 'Empati Gücü',
    description: 'Mühakimə etməzdən əvvəl özünə sual ver: **"Mən onun yerində olsaydım, nə hiss edərdim?"**. Bu sadə sual, bir çox konflikti başlamadan bitirir.',
    category: 'Psixologiya',
    source: 'Emotional Intelligence',
    opener: 'Başqasının ayaqqabısını geyinmədən yerişini tənqid etmə.',
    question: 'Son dəfə kimin hisslərini tam anladığını hiss etmisən?',
    vibes: ['❤️ Romantik', '🧠 Psixologiya']
  },
  {
    id: 'fact-122',
    title: 'Emosional İdarəetmə',
    description: 'Hirsliykən qərar vermə, xoşbəxtkən vəd vermə. Emosiyalar müvəqqətidir, amma **sözlər və davranışlar qalıcıdır**. Sakit qalmaq ən böyük gücdür.',
    category: 'Kişilik',
    source: 'Stoicism',
    opener: 'Fırtınada kapitan panikaya düşsə, gəmi batar.',
    question: 'Əsəbiləşəndə özünü necə sakitləşdirirsən?',
    vibes: ['🗿 Stoik', '⚖️ Şərəf']
  },
  {
    id: 'fact-123',
    title: 'Qarşılıqlılıq Prinsipi',
    description: 'Münasibət tennis oyununa bənzəyir. Topu heç vaxt qaytarmayanla oynamaq yorucudur. **Sadəcə alan yox, həm də verən ol.** Balansı qoru.',
    category: 'Tanışlıq',
    source: 'Social Dynamics',
    opener: 'Yalnız bir tərəfin avar çəkdiyi qayıq dairəvi fırlanar.',
    question: 'Münasibətlərində daha çox verən tərəfsən, yoxsa alan?',
    vibes: ['🤝 Qardaşlıq', '⚖️ Şərəf']
  },
  {
    id: 'fact-124',
    title: 'Şəxsi Sərhədlər',
    description: 'Kimisə dəyişdirməyə çalışma. Onun sərhədlərinə hörmət et və öz sərhədlərini də qoru. **"Xeyr"** deyə bilmək, sağlam münasibətin təməl daşıdır.',
    category: 'Psixologiya',
    source: 'Boundaries',
    opener: 'Sərhədsiz evə hamı girər, sərhədsiz insana hamı hökm edər.',
    question: 'İnsanlara "yox" deməkdə çətinlik çəkirsən?',
    vibes: ['💪 Bədən Dili', '🧠 Psixologiya']
  },
  {
    id: 'fact-125',
    title: 'Keyfiyyət > Kəmiyyət',
    description: 'Çox danışmaq dəyər qazandırmır. Bir ağıllı cümlə, on boş sözdən daha təsirlidir. İnsanlar **daim danışanı yox, yerində danışanı** xatırlayır.',
    category: 'Ünsiyyət',
    source: 'Communication Strategy',
    opener: 'Söz gümüşdürsə, sükut qızıldır. Amma doğru söz brilyantdır.',
    question: 'Heç az danışıb, amma çox şey deyən birini tanımısan?',
    vibes: ['🗣️ Ünsiyyət', '🤔 Dərin']
  },
  {
    id: 'fact-126',
    title: 'Susqunluq Qorxusu',
    description: 'Söhbətdəki sükutdan qorxma. Bu anlarda özünü "danışmalıyam" deyə məcbur etmə. **Güclü insanlar sükutdan narahat olmaz**, əksinə ondan istifadə edər.',
    category: 'Psixologiya',
    source: 'Social Anxiety',
    opener: 'Sükut boşluq deyil, düşüncə üçün yerdir.',
    question: 'Səncə niyə insanlar sükutdan qorxur?',
    vibes: ['🗿 Stoik', '🧠 Psixologiya']
  },
  {
    id: 'fact-127',
    title: 'Sual Vermək Sənəti',
    description: 'Əgər danışmaq istəmirsənsə, **suallar ver**. İnsanlar özləri haqqında danışmağı sevir. Sən sadəcə "Niyə?" və ya "Necə?" soruşaraq söhbəti idarə edə bilərsən.',
    category: 'Ünsiyyət',
    source: 'Conversation Skills',
    opener: 'Ən yaxşı söhbət, qarşı tərəfi danışdırmaqdır.',
    question: 'Söhbət zamanı daha çox dinləyirsən, yoxsa danışırsan?',
    vibes: ['🗣️ Ünsiyyət', '🧊 Buzqıran']
  },
  {
    id: 'fact-128',
    title: 'Enerji Mübadiləsi',
    description: 'Ünsiyyət təkcə söz deyil, **enerjidir**. Gülümsəmə, mimika və baxışlarla da qarşı tərəfə "mən burdayam" mesajı verə bilərsən. Sözsüz də bağ qurmaq olar.',
    category: 'Psixologiya',
    source: 'Non-Verbal Comm',
    opener: 'Gözlər, dodaqlardan daha çox şey danışır.',
    question: 'Sözsüz anlaşdığın biri olubmu?',
    vibes: ['💪 Bədən Dili', '✨ Xarizma']
  },
  {
    id: 'fact-129',
    title: 'Xilas Cümlələri',
    description: 'Sıxıldığın anlar üçün cibində **2-3 hazır mövzu** saxla: "Bu yaxınlarda bir film izlədim...", "Səncə bu hadisəyə münasibət necədir?". Bu, "məcburi danışıq" hissini azaldır.',
    category: 'Ünsiyyət',
    source: 'Social Hacks',
    opener: 'Hazırlıqlı olmaq, təşvişi azaldır.',
    question: 'Söhbət açmaq üçün standart mövzun varmı?',
    vibes: ['🛠️ Faydalı', '🧊 Buzqıran']
  },
  {
    id: 'fact-130',
    title: 'Arxetip: Aristotel (Analitik)',
    description: 'Hər şeyi məntiqə, fakta və sistemə bağlayan insan tipidir. Onu inandırmaq üçün **dəlil və nəticə** lazımdır. Duyğulara yox, ağla xitab et.',
    category: 'Psixologiya',
    source: 'Personality Types',
    opener: 'Məntiqsiz hiss, təməlsiz binadır.',
    question: 'Qərarlarını daha çox məntiqlə verirsən, yoxsa hisslərlə?',
    vibes: ['🤔 Dərin', '💼 İş']
  },
  {
    id: 'fact-131',
    title: 'Arxetip: Nitşşe (Yaradan)',
    description: 'Qaydalara qarşı çıxan, azad ruhlu üsyankardır. Onu çərçivəyə salma. Ona **fərqlilik və orijinallıq** təklif etsən, səni dinləyər.',
    category: 'Psixologiya',
    source: 'Personality Types',
    opener: 'Öz yolunu tapmaq üçün bəzən yolu itirmək lazımdır.',
    question: 'Cəmiyyət qaydalarına qarşı çıxdığın an olub?',
    vibes: ['🔥 Güc', '✨ Xarizma']
  },
  {
    id: 'fact-132',
    title: 'Arxetip: Kant (Prinsipial)',
    description: 'Doğrunu və yanlışı qanun kimi görən insan. Vicdan və məsuliyyət onun üçün hər şeydir. Ona **etibarlılıq və dürüstlük** göstər.',
    category: 'Psixologiya',
    source: 'Personality Types',
    opener: 'Dürüstlük, kimsə görməyəndə də doğru olanı etməkdir.',
    question: 'Heç vaxt pozmadığın bir prinsip varmı?',
    vibes: ['⚖️ Şərəf', '🗿 Stoik']
  },
  {
    id: 'fact-133',
    title: 'Arxetip: Sartr (Varoluşçu)',
    description: 'Həyatda məna axtaran, dərin düşüncəli tip. Onunla **səmimi və fəlsəfi** söhbətlər qur. Səthi mövzular onu tez sıxır.',
    category: 'Psixologiya',
    source: 'Personality Types',
    opener: 'Biz seçimik. Nəyi seçiriksə, o da oluruq.',
    question: 'Səncə həyatın bir mənası var, yoxsa onu biz yaradırıq?',
    vibes: ['🤔 Dərin', '🧠 Psixologiya']
  },
  {
    id: 'fact-134',
    title: 'Arxetip: Lao Tzu (Axın Ustası)',
    description: 'Sakit, təzyiqsiz, "hər şey olacağına varar" deyən insan. Ona stress yaşatma, **rahatlıq və harmoniya** təklif et.',
    category: 'Psixologiya',
    source: 'Personality Types',
    opener: 'Axına qarşı üzmə, su ol.',
    question: 'Çətin anlarda mübarizə aparırsan, yoxsa axışına buraxırsan?',
    vibes: ['☁️ Chill', '🌿 Təbiət']
  },
  {
    id: 'fact-135',
    title: 'Pauza Gücü',
    description: 'Çətin sual qarşısında dərhal cavab verməyə tələsmə. **"Bu haqda düşünməliyəm"** demək sənə zaman qazandırır və güclü göstərir. Tələskənlik səhvə aparır.',
    category: 'Ünsiyyət',
    source: 'Strategic Thinking',
    opener: 'Sükut bəzən ən güclü cavabdır.',
    question: 'Vacib qərarlar verərkən zaman istəməyi bacarırsan?',
    vibes: ['🗿 Stoik', '🧠 Psixologiya']
  },
  {
    id: 'fact-136',
    title: 'Gələcəkdən İndiyə',
    description: 'Mübahisəyə başlamazdan əvvəl özünə soruş: **"Bu söhbətin sonunda nə əldə etmək istəyirəm?"**. Hədəfi bilmək, lazımsız emosiyaları süzgəcdən keçirir.',
    category: 'Psixologiya',
    source: 'Reverse Engineering',
    opener: 'Sonunu düşünməyən qəhrəman ola bilməz.',
    question: 'Mübahisə edərkən nəticəyə fokuslanırsan, yoxsa haqlı çıxmağa?',
    vibes: ['🎯 Hədəf', '💼 İş']
  },
  {
    id: 'fact-137',
    title: 'Empatiya Xəritəsi',
    description: 'Qarşındakını "oxumaq" üçün iki şeyi tap: **Onun marağı nədir? Onun qorxusu nədir?** Bu ikisini bilsən, onun növbəti addımını proqnozlaşdıra bilərsən.',
    category: 'Psixologiya',
    source: 'Emotional Intelligence',
    opener: 'İnsanların hərəkətləri, gizli qorxularının kölgəsidir.',
    question: 'İnsanların gizli motivlərini oxuya bilirsən?',
    vibes: ['🕵️ Sirli', '🧠 Psixologiya']
  },
  {
    id: 'fact-138',
    title: 'Şəxsi Konstitusiya',
    description: 'Hər dəfə qərar verərkən sıfırdan başlama. **Öz prinsiplərini yarat.** Məsələn: "Hörmətsizlik olan yerdən dərhal gedirəm". Qaydalar qərarverməni sürətləndirir.',
    category: 'Kişilik',
    source: 'Personal Development',
    opener: 'Qanunları olmayan dövlət kimi, prinsipləri olmayan insan da xaos içindədir.',
    question: 'Heç vaxt pozmadığın qızıl qaydan varmı?',
    vibes: ['⚖️ Şərəf', '💪 Bədən Dili']
  },
  {
    id: 'fact-139',
    title: 'Soyuq Analiz',
    description: 'Hərbiçilər döyüşdən sonra analiz edir. Sən də gün bitəndə dialoqlarını təhlil et: **"Nə dedim? Əslində nə deməliydim?"**. Bu, səni gələcək döyüşlərə hazırlayır.',
    category: 'İnkişaf',
    source: 'Post-Mortem Analysis',
    opener: 'Məğlubiyyət yoxdur, yalnız dərslər var.',
    question: 'Günün sonunda öz hərəkətlərini analiz edirsən?',
    vibes: ['📈 İnkişaf', '🤔 Dərin']
  },
  {
    id: 'fact-140',
    title: 'Söhbət Hazırlığı',
    description: 'Məclisə getməzdən əvvəl danışa biləcəyin mövzuları düşün: **filmlər, işdəki gülməli hadisələr və xəbərlər.** Hazırlıqsız getmək sıxıcı olmaq deməkdir. "Parti öldürən" olma.',
    category: 'Ünsiyyət',
    source: 'The Art of Manliness',
    opener: 'Son zamanlar izlədiyin ən yaxşı film hansı olub?',
    question: 'Bura gələrkən yolda ağlına maraqlı bir fikir gəldi?',
    vibes: ['🗣️ Ünsiyyət', '✨ Xarizma']
  },
  {
    id: 'fact-141',
    title: 'Auditoriyanı Tanı',
    description: 'Həmsöhbətinin maraqlarını düşün və ona uyğun suallar hazırla. **Siyasət və din** kimi mübahisəli mövzulardan uzaq durmaq, həm təhlükəsizdir, həm də centlmen qaydasıdır.',
    category: 'Ünsiyyət',
    source: 'The Art of Manliness',
    opener: 'Məncə mübahisəli mövzulardansa, ortaq maraqlarımızdan danışaq.',
    question: 'Səncə insanlar niyə həmişə eyni mübahisəli mövzulara qayıdır?',
    vibes: ['🤝 Qardaşlıq', '⚖️ Şərəf']
  },
  {
    id: 'fact-142',
    title: 'Hekayə Arsenalı',
    description: '"Hekayə arsenalın" dolu olsun. Narahat sükut yarananda **stəkana baxıb durma**, ehtiyatdakı maraqlı hekayələrindən birini danışaraq mühiti canlandır.',
    category: 'Ünsiyyət',
    source: 'The Art of Manliness',
    opener: 'Yeri gəlmişkən, keçən dəfə başıma gələn o qəribə hadisəni danışım...',
    question: 'Həyatında baş verən ən gülməli təsadüf nə olub?',
    vibes: ['🔥 Güc', '🧊 Buzqıran']
  },
  {
    id: 'fact-143',
    title: 'Ruh və Sevgi',
    description: 'Yunan mifologiyasında **Psykhe (Ruh) və Eros (Sevgi)** ayrılmazdır. Əfsanəyə görə, ruh sevgisiz, sevgi isə ruhsuz yaşaya bilməz. Onların qovuşması əbədi xoşbəxtliyi gətirir.',
    category: 'Fəlsəfə',
    source: 'https://eksiseyler.com/yunan-mitolojisinden-psykhe-ve-erosun-sevgi-ile-ruhun-ayrilamayacagini-kanitlayan-hikayesi',
    opener: 'Səncə ruh əkizi anlayışı realdır, yoxsa sadəcə mifdir?',
    question: 'Sevgisiz bir həyatda ruhun sakitlik tapa bilərmi?',
    vibes: ['❤️ Romantik', '✨ Xarizma'],
    playlist: { id: 'eros-psyche', title: 'Eros və Psykhe: Ruhun Səyahəti', order: 1, total: 5 }
  },
  {
    id: 'fact-144',
    title: 'Görmədən Sevmək',
    description: 'Eros Psykhe-dən üzünü gizlətmişdi. Bu, **sevginin gözlə yox, ruhla hiss edilməli olduğunu** simvolizə edir. Fiziki görünüş keçicidir, vacib olan hissdir.',
    category: 'Tanışlıq',
    source: 'https://eksiseyler.com/yunan-mitolojisinden-psykhe-ve-erosun-sevgi-ile-ruhun-ayrilamayacagini-kanitlayan-hikayesi',
    opener: 'İnsan birini görmədən ona aşiq ola bilərmi?',
    question: 'Xarici görünüş sənin üçün sevgidə neçənci dərəcəlidir?',
    vibes: ['🤔 Dərin', '👻 Sirli'],
    playlist: { id: 'eros-psyche', title: 'Eros və Psykhe: Ruhun Səyahəti', order: 2, total: 5 }
  },
  {
    id: 'fact-145',
    title: 'Sevginin Sınaqları',
    description: 'Psykhe sevgisini geri qazanmaq üçün Afroditanın verdiyi dözülməz sınaqlardan keçdi. **Həqiqi sevgi fədakarlıq və cəsarət tələb edir.** Asan əldə edilən sevgi, tez də itirilər.',
    category: 'Münasibət',
    source: 'https://eksiseyler.com/yunan-mitolojisinden-psykhe-ve-erosun-sevgi-ile-ruhun-ayrilamayacagini-kanitlayan-hikayesi',
    opener: 'Sevgi üçün edilən ən böyük çılğınlıq nə olub?',
    question: 'Sevdiyin insan üçün nələri qurban verərdin?',
    vibes: ['🔥 Güc', '⚖️ Şərəf'],
    playlist: { id: 'eros-psyche', title: 'Eros və Psykhe: Ruhun Səyahəti', order: 3, total: 5 }
  },
  {
    id: 'fact-146',
    title: 'Şübhənin Zəhəri',
    description: 'Psykhe bacılarının sözünə qulaq asıb Erosa şübhə etdi və işığı yandırdı. **Güvənsizlik və şübhə ən böyük sevgini belə məhv edə bilər.**',
    category: 'Psixologiya',
    source: 'https://eksiseyler.com/yunan-mitolojisinden-psykhe-ve-erosun-sevgi-ile-ruhun-ayrilamayacagini-kanitlayan-hikayesi',
    opener: 'Münasibətdə ən böyük düşmən üçüncü şəxslərdir, yoxsa şübhə?',
    question: 'Heç səbəbsiz yerə sevdiyin insana şübhə etmisən?',
    vibes: ['💔 Kədər', '🗣️ Ünsiyyət'],
    playlist: { id: 'eros-psyche', title: 'Eros və Psykhe: Ruhun Səyahəti', order: 4, total: 5 }
  },
  {
    id: 'fact-147',
    title: 'Həzzin Doğuşu',
    description: 'Eros (Sevgi) və Psykhe-nin (Ruh) evliliyindən **Hedone (Həzz)** doğuldu. Yəni əsl həzz yalnız ruh və sevginin birləşməsindən yaranır.',
    category: 'Fəlsəfə',
    source: 'https://eksiseyler.com/yunan-mitolojisinden-psykhe-ve-erosun-sevgi-ile-ruhun-ayrilamayacagini-kanitlayan-hikayesi',
    opener: 'Xoşbəxtliklə həzzin fərqi nədir?',
    question: 'Səncə insan yalnız fiziki həzzlə xoşbəxt ola bilər?',
    vibes: ['☕ Chill', '❤️ Romantik'],
    playlist: { id: 'eros-psyche', title: 'Eros və Psykhe: Ruhun Səyahəti', order: 5, total: 5 }
  },
  {
    id: 'fact-148',
    title: 'Bennington Üçgeni',
    description: 'Bermuda Şeytan Üçgeni kimi, Vermontda da insanların izsiz yox olduğu "Bennington Üçgeni" var. 1945-1950-ci illərdə burada 5 nəfər qəribə şəkildə yoxa çıxıb və tapılmayıb.',
    category: 'Mifologiya',
    source: 'https://eksiseyler.com/abdde-aciklanamayan-kayip-vakalarinin-yasandigi-gizemli-bolge-bennington-ucgeni',
    opener: 'Səncə dünyada hələ də kəşf edilməmiş təhlükəli yerlər var?',
    question: 'Meşədə tək gəzməkdən qorxursan?',
    vibes: ['👻 Sirli', '🏕️ Təbiət'],
    playlist: { id: 'bennington-triangle', title: 'Bennington Üçbucağı: İtmiş Ruhlar', order: 1, total: 5 }
  },
  {
    id: 'fact-149',
    title: 'Middie Rivers',
    description: '74 yaşlı təcrübəli bələdçi Middie Rivers, meşəni ovcunun içi kimi bilirdi. Amma bir gün qrupu qabaqlayıb gözden itdi və ondan qalan tək şey bir ədəd güllə gilizi oldu.',
    category: 'Tarix',
    source: 'https://eksiseyler.com/abdde-aciklanamayan-kayip-vakalarinin-yasandigi-gizemli-bolge-bennington-ucgeni',
    opener: 'Təcrübə insanı hər təhlükədən qoruya bilərmi?',
    question: 'Səncə təcrübəli insanlar niyə bəzən sadə səhvlər edir?',
    vibes: ['🤔 Dərin', '👻 Sirli'],
    playlist: { id: 'bennington-triangle', title: 'Bennington Üçbucağı: İtmiş Ruhlar', order: 2, total: 5 }
  },
  {
    id: 'fact-150',
    title: 'Qırmızı Paltarlı Qız',
    description: '18 yaşlı tələbə Paula Welden, "Long Trail" yoluna çıxır. Arxasınca gələn cütlük onu görür, döngəni dönürlər və... Paula yoxdur. Sanki yer yarıldı, içinə girdi.',
    category: 'Mifologiya',
    source: 'https://eksiseyler.com/abdde-aciklanamayan-kayip-vakalarinin-yasandigi-gizemli-bolge-bennington-ucgeni',
    opener: 'Gözünün qabağında biri yoxa çıxsa, nə edərdin?',
    question: 'Paranormal hadisələrə inanırsan?',
    vibes: ['🤯 Şok', '👻 Sirli'],
    playlist: { id: 'bennington-triangle', title: 'Bennington Üçbucağı: İtmiş Ruhlar', order: 3, total: 5 }
  },
  {
    id: 'fact-151',
    title: 'Avtobusdan Yox Olan Adam',
    description: 'James Tedford avtobusda oturmuşdu. 14 şahid onun orada olduğunu təsdiqlədi. Avtobus dayanacağa çatanda James yox idi, amma çantası və qəzeti oturacaqda qalmışdı.',
    category: 'Tarix',
    source: 'https://eksiseyler.com/abdde-aciklanamayan-kayip-vakalarinin-yasandigi-gizemli-bolge-bennington-ucgeni',
    opener: 'Hərəkət edən avtobusdan insan necə yoxa çıxa bilər?',
    question: 'Bu hadisəyə məntiqi bir izah verə bilərsən?',
    vibes: ['🧠 Psixologiya', '👻 Sirli'],
    playlist: { id: 'bennington-triangle', title: 'Bennington Üçbucağı: İtmiş Ruhlar', order: 4, total: 5 }
  },
  {
    id: 'fact-152',
    title: 'Geri Qayıdan Cəsəd',
    description: 'Frieda Langer yoxa çıxdıqdan 7 ay sonra, əvvəllər dəfələrlə axtarılmış yerdə tapıldı. Ən qəribəsi? Cəsədi çürüməmişdi, sanki zaman onun üçün dayanmışdı.',
    category: 'Mifologiya',
    source: 'https://eksiseyler.com/abdde-aciklanamayan-kayip-vakalarinin-yasandigi-gizemli-bolge-bennington-ucgeni',
    opener: 'Zamanın bəzi yerlərdə fərqli işlədiyinə inanırsan?',
    question: 'Elm hər şeyi izah edə bilirmi?',
    vibes: ['🥶 Qorxulu', '✨ Xarizma'],
    playlist: { id: 'bennington-triangle', title: 'Bennington Üçbucağı: İtmiş Ruhlar', order: 5, total: 5 }
  },
  {
    id: 'fact-153',
    title: 'Dəmirbaş Şarl',
    description: 'İsveç Kralı XII Karl, Poltava döyüşündə Ruslara uduzub Osmanlıya sığındı. Misafirlik bir neçə həftə çəkər sandılar, amma o, düz **5 il 3 ay** Osmanlıda qalıb dövlət büdcəsinə "kene kimi" yapışdı. Buna görə ona "Dəmirbaş" ləqəbi verildi.',
    category: 'Tarix',
    source: 'https://twitter.com/karanliktarih/status/1780294283611775112',
    opener: 'Heç evinə gəlib getmək bilməyən qonağın olub?',
    question: 'Səncə qonaqpərvərliyin sərhədi harada bitməlidir?',
    vibes: ['👑 Lider', '🤣 Gülməli'],
    playlist: { id: 'demirbas-sarl', title: 'Dəmirbaş Şarl: Osmanlıda Bir Kral', order: 1, total: 3 }
  },
  {
    id: 'fact-154',
    title: 'Bender Qalmaqalı',
    description: 'Osmanlıların səbri tükənəndə kralı zorla çıxarmaq istədilər. O isə 40 nəfərlik mühafizəsi ilə minlərlə yeniçəriyə qarşı döyüşdü. Bu tarixi hadisə **"Kalabaliken i Bender"** (Benderdəki Qalmaqal) adı ilə İsveç tarixinə düşdü.',
    category: 'Tarix',
    source: 'https://twitter.com/karanliktarih/status/1780294283611775112',
    opener: 'Bir insanın inadkarlığı tarixi necə dəyişə bilər?',
    question: 'Zorla qonaq qalmaq istəyən birini necə yola salardın?',
    vibes: ['⚔️ Döyüş', '🔥 Güc'],
    playlist: { id: 'demirbas-sarl', title: 'Dəmirbaş Şarl: Osmanlıda Bir Kral', order: 2, total: 3 }
  },
  {
    id: 'fact-155',
    title: 'İsveç Köftəsi',
    description: 'Demirbaş Şarl ölkəsinə qayıdarkən təkcə borc yox, həm də Osmanlı mədəniyyətini apardı. **Məşhur İsveç küftəsi** və kələm dolması əslində onun İstanbuldan apardığı reseptlərdir.',
    category: 'Mədəniyyət',
    source: 'https://twitter.com/karanliktarih/status/1780294283611775112',
    opener: 'Bilirdin ki, IKEA-nın məşhur köftəsi əslində türk yeməyidir?',
    question: 'Hansı xarici mətbəxi daha çox sevirsən?',
    vibes: ['🍔 Yemək', '🌍 Səyahət'],
    playlist: { id: 'demirbas-sarl', title: 'Dəmirbaş Şarl: Osmanlıda Bir Kral', order: 3, total: 3 }
  },
  {
    id: 'fact-156',
    title: 'Qayıqlar (Scaphism)',
    description: 'Qədim tarixin ən vəhşi edam üsulu. Qurbanın bədənini iki qayıq arasına bağlayıb, başını və əllərini çöldə qoyurdular. Sonra onu zorla **süd və bal** ilə yedizdirib, üzünə bal sürtüb, bataqlığa atırdılar.',
    category: 'Qorxulu',
    source: 'https://eksiseyler.com/tarihteki-en-korkunc-idam-cezasi-infaz-yontemlerinden-biri-scaphism',
    opener: 'Eşitdiyin ən qorxulu işgəncə üsulu nə olub?',
    question: 'Səncə insan niyə öz növünə qarşı bu qədər qəddar ola bilir?',
    vibes: ['🥶 Qorxulu', '💀 Ölüm'],
    playlist: { id: 'scaphism-torture', title: 'Scaphism: Ən Vəhşi İdam', order: 1, total: 3 }
  },
  {
    id: 'fact-157',
    title: 'Mithridates',
    description: 'Fars əsgəri Mithridates, sərxoşkən kraliçanın sirrini açdığı üçün bu cəzaya məhkum edildi. O, bataqlıqda böcəklər tərəfindən diri-diri yeyilərək düz **17 gün** can çəkişdi.',
    category: 'Tarix',
    source: 'https://eksiseyler.com/tarihteki-en-korkunc-idam-cezasi-infaz-yontemlerinden-biri-scaphism',
    opener: '17 gün əzab çəkərək ölmək... Düşünə bilirsən?',
    question: 'Fiziki ağrı, yoxsa psixoloji işgəncə daha dözülməzdir?',
    vibes: ['😱 Dəhşət', '⏳ Vaxt'],
    playlist: { id: 'scaphism-torture', title: 'Scaphism: Ən Vəhşi İdam', order: 2, total: 3 }
  },
  {
    id: 'fact-158',
    title: 'Süd və Bal',
    description: 'Bu edamda istifadə edilən "şirin" qidalar qurbanı qidalandırmaq üçün yox, **həşəratları cəlb etmək** üçün idi. Arılar və qarışqalar insanı yavaş-yavaş, hüceyrə-hüceyrə yeyirdi.',
    category: 'Elm',
    source: 'https://eksiseyler.com/tarihteki-en-korkunc-idam-cezasi-infaz-yontemlerinden-biri-scaphism',
    opener: 'Balı çox sevirsən? Bu hekayədən sonra fikrin dəyişə bilər.',
    question: 'Təbiətin ən qorxulu canlısı səncə hansıdır?',
    vibes: ['🐝 Təbiət', '🤢 İyrənc'],
    playlist: { id: 'scaphism-torture', title: 'Scaphism: Ən Vəhşi İdam', order: 3, total: 3 }
  },
  {
    id: 'fact-53',
    title: 'Ox və Yay',
    description: 'Hunlar o qədər mahir oxatan idilər ki, at çaparkən **geriyə dönərək** hədəfi vura bilirdilər. Bu bacarıq düşmənləri dəhşətə gətirirdi.',
    category: 'Türk Tarixi',
    source: 'Roman History',
    opener: 'Hunlar atın üstündə tam sürətlə gedərkən geriyə dönüb ox ata bilirdilər.',
    question: 'Hansısa fiziki bacarığa (qaçış, üzgüçülük və s.) mükəmməl yiyələnmək istərdin?',
    vibes: ['🔥 Güc', '🏛️ Mədəniyyət']
  },
  {
    id: 'fact-159',
    title: 'İnsan Zooparkı',
    description: '17-18-ci əsrlərdə Londonlular bazar günləri əylənmək üçün Bedlam xəstəxanasına gələrdi. İnsanlar **bir qəpik** ödəyərək dəliləri qəfəsdəki heyvanlar kimi seyr edir, onları çubuqla dürtükləyirdilər.',
    category: 'Tarix',
    source: 'https://eksiseyler.com/insanlarin-para-verip-akil-hastalarini-izleyebildigi-korkunc-hastane-bedlam',
    opener: 'Səncə keçmişdə insanlar indikindən daha qəddar idi?',
    question: 'Əyləncə xatirinə başqasının əzabını izləmək psixoloji problemdir?',
    vibes: ['🥶 Qorxulu', '😱 Dəhşət'],
    playlist: { id: 'bedlam-asylum', title: 'Bedlam: Dəlilik Sirki', order: 1, total: 3 }
  },
  {
    id: 'fact-160',
    title: 'Fırlanan Müalicə',
    description: 'Həkimlər inanırdı ki, dəliliyi "sarsıtmaq" lazımdır. Xəstələri tavandan asılmış **fırlanan stula** bağlayıb saatlarla fırladırdılar. Məqsəd xəstəni qusdurub "pis ruhları" çıxarmaq idi.',
    category: 'Elm',
    source: 'https://eksiseyler.com/insanlarin-para-verip-akil-hastalarini-izleyebildigi-korkunc-hastane-bedlam',
    opener: 'Tibb tarixinin ən qorxulu səhvi səncə nədir?',
    question: 'Elm adı altında edilən işgəncələrə haqq qazandırmaq olar?',
    vibes: ['🤢 İyrənc', '🤯 Şok'],
    playlist: { id: 'bedlam-asylum', title: 'Bedlam: Dəlilik Sirki', order: 2, total: 3 }
  },
  {
    id: 'fact-161',
    title: 'Bedlam Xaosu',
    description: 'Xəstəxananın adı əslində "Bethlem" idi, amma səs-küy və xaos o qədər böyük idi ki, xalq arasında "Bedlam" (qarışıqlıq) kimi tanındı. Bu söz ingilis dilinə **tam xaos** mənasında daxil oldu.',
    category: 'Dilçilik',
    source: 'https://eksiseyler.com/insanlarin-para-verip-akil-hastalarini-izleyebildigi-korkunc-hastane-bedlam',
    opener: 'Bir sözün tarixçəsi sənə maraqlı gəlir?',
    question: 'Səncə cəmiyyət "dəlilik" anlayışını necə dəyişib?',
    vibes: ['📚 Bilik', '👻 Sirli'],
    playlist: { id: 'bedlam-asylum', title: 'Bedlam: Dəlilik Sirki', order: 3, total: 3 }
  },
  {
    id: 'fact-162',
    title: 'Körpə Ağacları',
    description: 'İndoneziyanın Toraja qəbiləsində, 6 aydan kiçik (dişi çıxmamış) ölən uşaqlar torpağa deyil, **ağac gövdəsinə** dəfn edilir. İnanırlar ki, uşaq ağacla birlikdə böyüməyə davam edəcək.',
    category: 'Mədəniyyət',
    source: 'https://x.com/ifkoparan/status/1945095050414731445',
    opener: 'Ölümün son deyil, yeni bir başlanğıc olduğuna inanan qəbilə haqqında eşitmisən?',
    question: 'Səncə, ölümə bu qədər sakit yanaşmaq cəsarətdir, yoxsa inkar?',
    vibes: ['🌳 Təbiət', '👻 Sirli'],
    playlist: { id: 'toraja-death', title: 'Toraja: Ölümün Başqa Üzü', order: 1, total: 3 }
  },
  {
    id: 'fact-163',
    title: 'Ölülərlə Yaşamaq',
    description: 'Bu qəbilədə ölü basdırılmır, **mummuyalanıb evdə saxlanılır**. İllər sonra belə "Ma\'nene" festivalında cəsədləri çıxarıb, təmizləyib, yeni paltarlar geyindirirlər.',
    category: 'Mədəniyyət',
    source: 'https://x.com/ifkoparan/status/1945095050414731445',
    opener: 'Sevdiyin insan ölsə də, onu illərlə evində saxlaya bilərdin?',
    question: 'Bu adət sənə qorxulu gəlir, yoxsa sevginin bir nümayişi kimi?',
    vibes: ['💀 Ölüm', '🤯 Şok'],
    playlist: { id: 'toraja-death', title: 'Toraja: Ölümün Başqa Üzü', order: 2, total: 3 }
  },
  {
    id: 'fact-164',
    title: 'Ruhun Bələdçisi',
    description: 'Cənazə mərasimləri illərlə çəkə bilər, çünki ailə **camış (buffalo)** almaq üçün pul yığmalıdır. İnanırlar ki, camış ruhu o biri dünyaya aparan vasitədir.',
    category: 'Mədəniyyət',
    source: 'https://x.com/ifkoparan/status/1945095050414731445',
    opener: 'Bir dəfn mərasimi üçün illərlə pul yığmağı təsəvvür edə bilirsən?',
    question: 'Səncə yas mərasimləri niyə bu qədər dəbdəbəli olur?',
    vibes: ['💸 Pul', '⏳ Vaxt'],
    playlist: { id: 'toraja-death', title: 'Toraja: Ölümün Başqa Üzü', order: 3, total: 3 }
  },
  {
    id: 'fact-165',
    title: 'Termit (Thermite)',
    description: 'Almanların 1000 tonluq "Gustav" silahını bombardman belə dağıda bilməzdi. Amma bir paraşütçü, **bir çanta termit** qarışığı ilə o nəhəng polad silahı maye kimi əridə bilərdi. Kimya fiziki gücdən üstündür.',
    category: 'Filmlər/Seriallar',
    source: 'Breaking Bad, S1E7',
    opener: 'Səncə bir çanta toz, 1000 tonluq silahı yox edə bilər?',
    question: 'Bilik, yoxsa fiziki güc? Hansı daha təhlükəlidir?',
    vibes: ['🔥 Güc', '🧪 Elm'],
    playlist: { id: 'breaking-bad-chem', title: 'Breaking Bad: Kimyanın Gücü', order: 1, total: 3 }
  },
  {
    id: 'fact-166',
    title: 'Partlayıcı Civə',
    description: 'Walter White, Tuco-nun ofisinə girir və "Bu met deyil" deyərək bir dənə kristalı yerə çırpır. Nəticə? Bütün mərtəbəni dağıdan partlayış. **Fulminated Mercury** – toxunuşla partlayan güclü kimyəvi maddə.',
    category: 'Filmlər/Seriallar',
    source: 'Breaking Bad, S1E6',
    opener: 'Kino tarixinin ən "havalı" səhnəsi hansıdır?',
    question: 'Risk etmək cəsarətdir, yoxsa axmaqlıq?',
    vibes: ['🤯 Şok', '✨ Xarizma'],
    playlist: { id: 'breaking-bad-chem', title: 'Breaking Bad: Kimyanın Gücü', order: 2, total: 3 }
  },
  {
    id: 'fact-167',
    title: 'Vanna Hadisəsi',
    description: 'Cəsədi yox etmək üçün **Hidroflorik turşu** istifadə etdilər. Amma Jesse səhv edib vannadan istifadə etdi. Turşu təkcə cəsədi yox, vannanı və döşəməni də əridib aşağı mərtəbəyə tökdü. Plastik vacibdir!',
    category: 'Filmlər/Seriallar',
    source: 'Breaking Bad, S1E2',
    opener: 'Məktəbdə kimya dərslərinə qulaq asmısan?',
    question: 'Təfərrüatlara diqqət yetirməmək başına iş açıb?',
    vibes: ['🤢 İyrənc', '🤣 Gülməli'],
    playlist: { id: 'breaking-bad-chem', title: 'Breaking Bad: Kimyanın Gücü', order: 3, total: 3 }
  },
  {
    id: 'fact-168',
    title: '74 GB Məlumat',
    description: 'Müasir insan beyni hər gün ortalama **74 GB** həcmində məlumat emal edir. Bu, TV, telefon, sosial media və ətraf mühitdən gələn siqnalların toplamıdır. Beynimiz dayanmadan işləyən bir superkompüterə dönüb.',
    category: 'Elm',
    source: 'https://www.youtube.com/watch?v=ZHaR721pw4I',
    opener: 'Bu gün beynini nə qədər yorduğunu hiss edirsən?',
    question: 'Səncə bu qədər məlumat bizi daha ağıllı edir, yoxsa diqqətimizi dağıdır?',
    vibes: ['🤯 Şok', '🧠 Psixologiya'],
    playlist: { id: 'info-overload', title: 'Məlumat Yükü: Beynimiz Dözürmü?', order: 1, total: 3 }
  },
  {
    id: 'fact-169',
    title: '1 Gün = 1 Ömür',
    description: '500 il əvvəl yaşayan yüksək səviyyəli bir insan, bütün **ömrü boyu** ancaq bizim **bir gündə** qəbul etdiyimiz qədər məlumat görürdü. Bizim bir günümüz, onların bir ömrünə bərabərdir.',
    category: 'Tarix',
    source: 'https://www.youtube.com/watch?v=ZHaR721pw4I',
    opener: 'Keçmişdə yaşasaydın, həyat daha asan olardı, yoxsa darıxdırıcı?',
    question: 'Səncə insan beyni bu sürətli dəyişikliyə adaptasiya ola bilir?',
    vibes: ['⏳ Vaxt', '📚 Bilik'],
    playlist: { id: 'info-overload', title: 'Məlumat Yükü: Beynimiz Dözürmü?', order: 2, total: 3 }
  },
  {
    id: 'fact-170',
    title: 'Bitməyən Artım',
    description: 'Emal etməli olduğumuz məlumat miqdarı hər il **5% artır**. Bu informasiya selinin qarşısını almaq üçün bəzən "izolyasiya"ya çəkilmək və beyni 4 divar arasında dincəltmək zərurətə çevrilir.',
    category: 'Psixologiya',
    source: 'https://www.youtube.com/watch?v=ZHaR721pw4I',
    opener: 'Heç hər şeyi söndürüb bir həftə heç kimlə danışmamaq istəmisən?',
    question: 'Səncə rəqəmsal detoks (telefonsuz qalmaq) müasir dövrün dərmanıdır?',
    vibes: ['📉 Depressiya', '🧘 Sakitlik'],
    playlist: { id: 'info-overload', title: 'Məlumat Yükü: Beynimiz Dözürmü?', order: 3, total: 3 }
  },
  {
    id: 'fact-171',
    title: 'Kovboyun Mesajı',
    description: 'İnsan qorxanda ağzı quruyur (tüpürcək kəsilir). Kovboyların qarşılaşanda yerə tüpürməsi əslində bir mesaj idi: **"Bax, ağzım qurumayıb, deməli səndən qorxmuram!"**',
    category: 'Bədən Dili',
    source: 'Historical Body Language',
    opener: 'İnsanların bədən dili ilə yalan danışa bilməyəcəyinə inanırsan?',
    question: 'Səncə müasir dövrdə "yerə tüpürmək" qədər iddialı hansı hərəkət var?',
    vibes: ['🤠 Vəhşi Qərb', '🧠 Psixologiya'],
    playlist: { id: 'fear-body-language', title: 'Bədən Dili: Qorxunun Simptomları', order: 1, total: 3 }
  },
  {
    id: 'fact-172',
    title: 'Qorxu İyisi',
    description: 'Qorxanda bədənimiz fərqli tər (apokrin) ifraz edir. İtlər bu kəskin "qorxu iyini" həqiqətən hiss edə bilirlər. Yəni, "itdən qorxsan, səni dişləyər" sözü sadəcə mif deyil.',
    category: 'Elm',
    source: 'Biological Psychology',
    opener: 'Heç kiminsə "qorxduğunu" hiss etmisən? Necə?',
    question: 'Heyvanların insan hisslərini başa düşdüyünə inanırsan?',
    vibes: ['🐶 Heyvanlar', '😱 Dəhşət'],
    playlist: { id: 'fear-body-language', title: 'Bədən Dili: Qorxunun Simptomları', order: 2, total: 3 }
  },
  {
    id: 'fact-173',
    title: 'Ağappaq Kəsilmək',
    description: 'Təhlükə anında qan həyati orqanlara və əzələlərə (qaçmaq üçün) axır. Üzdən qan çəkildiyi üçün insan **ağappaq** olur. Bu, bədənin "qaçmağa hazıram" siqnalıdır.',
    category: 'Elm',
    source: 'Evolutionary Biology',
    opener: 'Ən son nə vaxt bərk qorxmusan?',
    question: 'Səncə qorxu faydalı hissdir, yoxsa sadəcə maneə?',
    vibes: ['👻 Sirli', '🩸 Qan'],
    playlist: { id: 'fear-body-language', title: 'Bədən Dili: Qorxunun Simptomları', order: 3, total: 3 }
  },
  {
    id: 'fact-174',
    title: 'Kevin və Tramp',
    description: '"Evdə Tək 2" (1992) filminin çəkildiyi The Plaza Hotel-in sahibi həmin vaxt **Donald Tramp** idi. O, oteldə çəkiliş aparılmasına ancaq özünün də kiçik bir səhnədə görünməsi qarşılığında icazə vermişdi.',
    category: 'Filmlər/Seriallar',
    source: 'Home Alone 2 Trivia',
    opener: '"Evdə Tək 2" filmində Trampı görmüsən?',
    question: 'Səncə bu eqoizmdir, yoxsa dahi marketinq gedişi?',
    vibes: ['🎬 Kino', '💰 Biznes']
  },
  {
    id: 'fact-175',
    title: 'Trendyol Espri',
    description: '**"Trend yol deyil, trendy ol..."** Bax bunu nə vaxt desəm, mühit buz kəsir. Əsl "soyuducu" zarafat axtarırsansa, bundan istifadə et.',
    category: 'Gülməli',
    source: 'Twitter (X)',
    opener: 'Sənə bir soyuq zarafat edim, amma üşüməyəcəyinə söz ver?',
    question: 'Səncə ən pis "ata zarafatı" (dad joke) hansıdır?',
    vibes: ['😂 Gülməli', '🧊 Buzqıran']
  },
  {
    id: 'fact-176',
    title: '14 Metrlik Milçək',
    description: 'Bir cüt milçəyin sadəcə aprel-may aylarında qoyduğu yumurtaların hamısı sağ qalsaydı, dünyanı **14 metr qalınlığında** milçək təbəqəsi örtərdi. Təbiətin amansız tarazlığı bizi bu fəlakətdən qoruyur.',
    category: 'Təbiət',
    source: 'Science Facts',
    opener: 'Milçəkləri heç bu qədər təhlükəli düşünmüşdün?',
    question: 'Səncə təbiətdəki tarazlıq pozulsa, bəşəriyyətin sonu necə olar?',
    vibes: ['🤢 İyrənc', '🤯 Şok'],
    playlist: { id: 'insect-dominance', title: 'Həşəratların Gizli Gücü', order: 1, total: 3 }
  },
  {
    id: 'fact-177',
    title: 'Qarışqa Ordusu',
    description: 'Statistikaya görə, yer üzündə hər bir insana təxminən **2.5 milyon qarışqa** düşür. Əgər onlar mütəşəkkil şəkildə birləşib bizə hücum etsəydilər, insanların heç bir şansı olmazdı.',
    category: 'Təbiət',
    source: 'Entomology Stats',
    opener: 'Qarışqaların sayı səni qorxutmur ki?',
    question: 'Kəmiyyət (say), yoxsa Keyfiyyət (ağıl)? Hansı qalib gələr?',
    vibes: ['🐜 Təbiət', '⚔️ Döyüş'],
    playlist: { id: 'insect-dominance', title: 'Həşəratların Gizli Gücü', order: 2, total: 3 }
  },
  {
    id: 'fact-178',
    title: 'Başsız Yaşamaq',
    description: 'Tarakanın başını kəssəniz, o dərhal ölməz. **Bir neçə həftə** yaşaya bilər, çünki beyni bədəninə yayılıb və qan təzyiqi aşağıdır. Sonda isə sadəcə aclıqdan (ağzı olmadığı üçün) ölər.',
    category: 'Təbiət',
    source: 'Biology Facts',
    opener: 'Nüvə müharibəsindən sağ çıxacaq tək canlı tarakanlardır deyirlər.',
    question: 'Bu qədər dözümlü olmaq lənətdir, yoxsa hədiyyə?',
    vibes: ['🧟 Zombi', '💪 Güc'],
    playlist: { id: 'insect-dominance', title: 'Həşəratların Gizli Gücü', order: 3, total: 3 }
  },
  {
    id: 'fact-179',
    title: 'Mükəmməl Aldatma',
    description: 'Dr. James Barry Britaniya ordusunun ən hörmətli cərrahlarından biri idi. Amma o öləndə şok həqiqət üzə çıxdı: O, əslində **Margaret Ann Bulkley** adında bir qadın idi və həkim ola bilmək üçün 50 il kişi kimi yaşamışdı.',
    category: 'Tarix',
    source: 'https://en.wikipedia.org/wiki/James_Barry_(surgeon)',
    opener: 'Bir sirri ömrünün sonuna qədər saxlaya bilərsən?',
    question: 'Xəyallarına çatmaq üçün kimliyindən imtina edərdin?',
    vibes: ['🎭 Maskalar', '👻 Sirli'],
    playlist: { id: 'james-barry-secret', title: 'Gizli Cərrah: James Barry', order: 1, total: 3 }
  },
  {
    id: 'fact-180',
    title: 'İlk Qeysəriyyə',
    description: 'Cinsiyyətini gizlətməsinə baxmayaraq, o, tibb tarixinə keçdi. Afrikada ana və uşağın hər ikisinin sağ qaldığı **ilk uğurlu qeysəriyyə əməliyyatını**  məhz o (bir qadın) həyata keçirmişdi.',
    category: 'Elm',
    source: 'https://en.wikipedia.org/wiki/James_Barry_(surgeon)',
    opener: 'Tarixin ən böyük qəhrəmanları bəzən gizli qalır.',
    question: 'Səncə uğur qazanmaq üçün "kim olduğun" vacibdir, yoxsa "nə etdiyin"?',
    vibes: ['👶 Uşaq', '💪 Güc'],
    playlist: { id: 'james-barry-secret', title: 'Gizli Cərrah: James Barry', order: 2, total: 3 }
  },
  {
    id: 'fact-181',
    title: 'Sirrin Qorunması',
    description: 'O, heç vaxt evlənmədi, həmişə qalın paltarlar geyindi və hətta vəsiyyət etdi ki, öləndə onu **yuyundurmada**, paltarları ilə dəfn etsinlər. Sirri yalnız ölümündən sonra xadimə tərəfindən aşkar edildi.',
    category: 'Tarix',
    source: 'https://en.wikipedia.org/wiki/James_Barry_(surgeon)',
    opener: 'Həyatını bir yalan üzərində qura bilərdin?',
    question: 'Cəmiyyətin qaydaları bizi xoşbəxtlikdən məhrum edir?',
    vibes: ['🤐 Sirr', '🤔 Dərin'],
    playlist: { id: 'james-barry-secret', title: 'Gizli Cərrah: James Barry', order: 3, total: 3 }
  },
  {
    id: 'fact-182',
    title: 'Oğlan Rəngi: Çəhrayı',
    description: '19-cu əsrdə çəhrayı rəng **kişilər üçün** nəzərdə tutulurdu. Çünki o, müharibə və güc rəmzi olan qırmızının bir tonu idi. Zərif və sakitləşdirici rəng sayılan **mavi isə qızlara** (Məryəm ana rəngi) aid idi.',
    category: 'Tarix',
    source: 'Gemini AI',
    opener: 'Səncə niyə "kişi adam çəhrayı geyinməz" deyirlər?',
    question: 'Cəmiyyətin bizə sırıdığı başqa hansı "qaydalar" yalandır?',
    vibes: ['🤯 Şok', '🎨 İncəsənət'],
    playlist: { id: 'pink-color-history', title: 'Rənglərin Cinsi: Çəhrayı Yalanı', order: 1, total: 3 }
  },
  {
    id: 'fact-183',
    title: 'Marketinq Oyunu',
    description: '1940-cı illərə qədər uşaq paltarları neytral idi. Marketinq mütəxəssisləri satışları artırmaq üçün rəngləri cinslərə böldülər. Məqsəd valideynləri həm oğlan, həm qız üçün **ayrı-ayrı paltar almağa** məcbur etmək idi.',
    category: 'Tarix',
    source: 'Gemini AI',
    opener: 'Uşaq paltarlarına görə mağazada bölmələri gəzmək səni yorur?',
    question: 'Kapitalizm bizim zövqümüzü formalaşdırır, yoxsa biz onun?',
    vibes: ['💰 Biznes', '🧠 Psixologiya'],
    playlist: { id: 'pink-color-history', title: 'Rənglərin Cinsi: Çəhrayı Yalanı', order: 2, total: 3 }
  },
  {
    id: 'fact-184',
    title: 'Mədəniyyət, yoxsa Təbiət?',
    description: 'Bu rəng ayrımı bioloji deyil, **sırf ticarət** məqsədlidir. Bu gün "qız rəngi" kimi qəbul edilən çəhrayı, cəmi 80 il əvvəl kişilik simvolu idi. Stereotiplər düşündüyümüzdən daha tez dəyişir.',
    category: 'Psixologiya',
    source: 'Gemini AI',
    opener: 'Səncə 50 il sonra kişilər üçün hansı rəng dəbdə olacaq?',
    question: 'Bioloji fərqliliklərimiz cəmiyyətin yaratdıqlarından azdır?',
    vibes: ['🤯 Şok', '🤔 Dərin'],
    playlist: { id: 'pink-color-history', title: 'Rənglərin Cinsi: Çəhrayı Yalanı', order: 3, total: 3 }
  },
  {
    id: 'fact-185',
    title: 'Müharibə Qəhrəmanı',
    description: 'Timoti adlı bu tısbağa, 1854-cü ildə **Krım Müharibəsində** Britaniya hərbi gəmisinin ("HMS Queen") maskotu olaraq xidmət edib. O, top səsləri və barıt qoxusu altında döyüşləri öz gözləri ilə görüb.',
    category: 'Tarix',
    source: 'https://az.wikipedia.org/wiki/Timoti_(t%C4%B1sba%C4%9Fa)',
    opener: 'Bir tısbağanın müharibə veteranı ola biləcəyini bilirdin?',
    question: 'Səncə heyvanlar müharibənin dəhşətini başa düşür?',
    vibes: ['🐢 Heyvanlar', '⚔️ Döyüş'],
    playlist: { id: 'timothy-tortoise', title: 'Timoti: Tarixin Lal Şahidi', order: 1, total: 3 }
  },
  {
    id: 'fact-186',
    title: 'Sonuncu Şahid',
    description: 'Timoti 2004-cü ildə, təxminən **165 yaşında** öldü. O, Krım müharibəsinin (1853-1856) Yer üzündə qalan **ən sonuncu canlı şahidi** idi. Müharibənin bütün insan veteranları ondan onilliklər əvvəl ölmüşdü.',
    category: 'Tarix',
    source: 'https://az.wikipedia.org/wiki/Timoti_(t%C4%B1sba%C4%9Fa)',
    opener: '165 il yaşamaq şans, yoxsa cəzadır?',
    question: 'Tarixi kitablardan oxumaq, yoxsa onu yaşayanla görüşmək?',
    vibes: ['⏳ Vaxt', '👴 Qoca'],
    playlist: { id: 'timothy-tortoise', title: 'Timoti: Tarixin Lal Şahidi', order: 2, total: 3 }
  },
  {
    id: 'fact-187',
    title: 'Cinsiyyət Şoku',
    description: 'Adı "Timoti" (kişi adı) qoyulsa da, 1926-cı ildə (təxminən 80 yaşında) baytarlar onun əslində **dişi** olduğunu kəşf etdilər. O, ömrünün yarısını "kişi" kimi yaşayıb, amma heç kim buna fikir verməyib.',
    category: 'Gülməli',
    source: 'https://az.wikipedia.org/wiki/Timoti_(t%C4%B1sba%C4%9Fa)',
    opener: 'Həyatında heç belə böyük anlaşılmazlıq olub?',
    question: 'Adlar bizim kimliyimizi nə qədər müəyyən edir?',
    vibes: ['😂 Gülməli', '🤯 Şok'],
    playlist: { id: 'timothy-tortoise', title: 'Timoti: Tarixin Lal Şahidi', order: 3, total: 3 }
  },
  {
    id: 'fact-188',
    title: 'Çanakkale İzi',
    description: '"Peaky Blinders" serialında Arthur Shelby-nin Fransada döyüşdüyü bilinir, amma bəzi nəzəriyyələrə görə o, **Çanakkale Savaşında** (Gallipoli) da iştirak edib. Onun tez-tez bəhs etdiyi "tunel qazma" dəhşətləri məhz bu cəbhə ilə əlaqələndirilir.',
    category: 'Filmlər/Seriallar',
    source: 'Eksi Şeyler',
    opener: 'Peaky Blinders-dəki Arthurun niyə bu qədər aqressiv olduğunu bilirsən?',
    question: 'Müharibə travması insanı ömürlük dəyişdirə bilər?',
    vibes: ['🎬 Kino', '🤯 Şok'],
    playlist: { id: 'arthur-gallipoli', title: 'Arthur Shelby: Çanakkale Kabusu', order: 1, total: 3 }
  },
  {
    id: 'fact-189',
    title: 'Yeraltı Kabus',
    description: 'Arthur müharibədə "clay-kicker" (tunel qazan) idi. Çanakkaledə əsgərlər düşmən səngərlərinin altına tunel qazıb partlayıcı yerləşdirirdilər. Bu qaranlıq və klostrofobik mühit onun **psixikasını tamamilə darmadağın etmişdi**.',
    category: 'Filmlər/Seriallar',
    source: 'Eksi Şeyler',
    opener: 'Günlərlə yerin altında, qaranlıqda qalmaq sənə necə təsir edərdi?',
    question: 'Fiziki yara yoxsa ruhi yara? Hansı daha ağrılıdır?',
    vibes: ['🌑 Qaranlıq', '⚔️ Döyüş'],
    playlist: { id: 'arthur-gallipoli', title: 'Arthur Shelby: Çanakkale Kabusu', order: 2, total: 3 }
  },
  {
    id: 'fact-190',
    title: 'Qırılmış Ruh',
    description: 'Arthurun qəfil qəzəb tutmaları və intihara meylliliyi, o dövrdə "Shell Shock" adlanan ağır travmanın nəticəsidir. Çanakkale cəbhəsinin ümidsizliyi və şiddəti, onun xarakterindəki bu **dərin qırılmanın** əsas səbəbi ola bilər.',
    category: 'Filmlər/Seriallar',
    source: 'Eksi Şeyler',
    opener: 'Arthur Shelby sənə güclü görünür, yoxsa zəif?',
    question: 'İnsan ruhu sınırsa, onu yenidən bərpa etmək mümkündür?',
    vibes: ['💔 Kədərli', '🚬 Siqaret'],
    playlist: { id: 'arthur-gallipoli', title: 'Arthur Shelby: Çanakkale Kabusu', order: 3, total: 3 }
  },
  {
    id: 'fact-191',
    title: 'Vahid və Heykəl',
    description: 'Əliağa Vahidə heykəl qoyulacağını və buna **125 rubl** xərcləndiyini deyəndə, şair acı bir təbəssümmlə cavab verir: "Ondansa o pulu verərdilər mənə, acından ölürəm."',
    category: 'Gülməli',
    source: 'Əliağa Vahid lətifələri',
    opener: 'Səncə sənətkara qiymət sağlığında verilməlidir, yoxsa öləndə?',
    question: 'Şöhrət (heykəl) qarın doyururmu?',
    vibes: ['😂 Gülməli', '🎭 İncəsənət']
  },
  {
    id: 'fact-192',
    title: 'Yanan Əlyazmalar',
    description: 'Böyük dramaturq Cəlil Məmmədquluzadə, sərt bir qışda uşaqlarını donmaqdan xilas etmək üçün ən dəyərli xəzinəsini - **öz əlyazmalarını** sobaya atıb yandırmışdır. O, "Övladlarımın donmasındansa, əsərlərimin yanmağı yaxşıdır" demişdi.',
    category: 'İncəsənət',
    source: 'Tarixi Faktlar',
    opener: 'Sən öz yaratdığın bir şeyi (layihə, rəsm, yazı) övladın üçün məhv edərdin?',
    question: 'Həyat sənət üçün, yoxsa sənət həyat üçün?',
    vibes: ['🔥 Güc', '💔 Kədərli']
  },
  {
    id: 'fact-193',
    title: 'Lego Telefon: Project Ara',
    description: 'Google bir vaxtlar istifadəçilərin **"Lego kimi"** yığıb dəyişdirə biləcəyi (kamera, batareya, ekran) **modulyar telefon** projesi üzərində işləyirdi. Amma "Project Ara" 2016-cı ildə qəfil ləğv edildi. İnqilab yarımçıq qaldı.',
    category: 'Texnologiya',
    source: 'Google History',
    opener: 'Telefonunun kamerasını söküb yenisini taxmaq istərdin?',
    question: 'Səncə niyə şirkətlər telefonları tez xarab olan (və ya çətin təmir edilən) düzəldir?',
    vibes: ['📱 Texno', '🔧 Mühəndis']
  }
];
