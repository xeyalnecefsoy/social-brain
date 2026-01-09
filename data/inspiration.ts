
export interface Topic {
  id: string;
  title: string;
  description: string;
  category: string;
  source?: string;
  opener?: string;
  question?: string;
  vibes?: string[]; // Yeni: Emosional tonlar
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
    id: 'fact-53',
    title: 'Ox və Yay',
    description: 'Hunlar o qədər mahir oxatan idilər ki, at çaparkən **geriyə dönərək** hədəfi vura bilirdilər. Bu bacarıq düşmənləri dəhşətə gətirirdi.',
    category: 'Türk Tarixi',
    source: 'Roman History',
    opener: 'Hunlar atın üstündə tam sürətlə gedərkən geriyə dönüb ox ata bilirdilər.',
    question: 'Hansısa fiziki bacarığa (qaçış, üzgüçülük və s.) mükəmməl yiyələnmək istərdin?',
    vibes: ['🔥 Güc', '� Mədəniyyət']
  }
];
