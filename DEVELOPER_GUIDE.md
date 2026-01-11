# Social Brain - Developer Guide & Lessons Learned

Bu fayl layihə üzərində işləyərkən qarşılaşılan texniki çətinlikləri və onların həll yollarını sənədləşdirmək üçün yaradılıb. Gələcək inkişaf mərhələlərində bu qeydləri nəzərə almaq vaxt itkisinin qarşısını alacaq.

## 1. Backendless və SSR Problemləri
**Problem:** `backendless` SDK-sı birbaşa import ediləndə Next.js-in Server-Side Rendering (SSR) mərhələsində `self is not defined` və ya `window is not defined` xətaları verir.
**Həll:**
- `lib/backendless.ts` faylında xüsusi yoxlama (`typeof window === 'undefined'`) qurulb.
- Server tərəfində boş "mock" obyekt qaytarılır.
- Real Backendless kitabxanası yalnız müştəri tərəfində (client-side) yüklənir.
- **Qayda:** Backendless funksiyalarını (məs: `Backendless.Data.of(...)`) heç vaxt birbaşa komponentin gövdəsində çağırmayın, yalnız `useEffect` və ya hadisə (onClick) daxilində istifadə edin.

## 2. Turbopack Uyğunsuzluğu
**Problem:** `npm run dev --turbopack` istifadə edərkən bəzi köhnə modul formatları ilə uyğunsuzluq yaranır və tətbiq çökür.
**Həll:**
- `package.json` faylında dev skripti sadəcə `next dev` olaraq saxlanılıb.
- **Qayda:** Turbopack-i hələlik aktivləşdirməyin.

## 3. Terminal və Git Əmrləri (Agent/Windows)
**Problem:** Windows PowerShell mühitində zəncirvari əmrlər (`git add . && git commit...`) bəzən düzgün işləmir və ya xəta verəndə proses dayanmır.
**Həll:**
- Git əmrlərini **bir-bir** və **ardıcıl** icra etmək ən etibarlı yoldur.
- Eyni anda push, commit və remote əlavə etməyə çalışmayın.

## 4. UI/UX "Gotchas" (Diqqət edilməli məqamlar)
- **Mətn Formatlama:** Tətbiqdəki təsvirlər (description) sadə `string` kimi saxlanılır. `**qalın**` və ya `*kursiv*` yazıları render etmək üçün React daxilində xüsusi `split/map` funksiyası yazılıb. Sadəcə mətni ekrana basmaq (rendering text directly) formatı pozacaq.
- **SOS Düyməsi:** `fixed` mövqedədir (`z-index: 100`). Mobil versiyada "Mövzu Əlavə Et" düyməsi ilə toqquşmaması üçün yeri `left-6` (sol tərəf) olaraq təyin edilib.
- **Aktiv Xatırlama (Shuffle):** Əgər istifadəçinin öz qeydləri yoxdursa, düymə sönməməli, əvəzində `INSPIRATION_TOPICS` (hazır faktlar) bazasından istifadə etməlidir.

## 5. İkonlar və Dizayn
- Kateqoriyalar üçün `lucide-react` ikonları (Atom, History, Tent və s.) xüsusi `Record` obyektində saxlanılır. Yeni kateqoriya əlavə edərkən bu siyahıya ikon əlavə etməyi unutmayın.


---

## 6. Son Sessiya Qeydləri (11 Yanvar 2026)

### URL Oxuma Xətaları (403 Forbidden)
**Problem:** `read_url_content` aləti bəzi saytlarda (məs: `eksiseyler.com`, `wikipedia.org`) "403 Forbidden" xətası verir və məzmunu oxuya bilmir. Bu, saytların bot qoruması ilə əlaqəlidir.
**Həll/Yanaşma:** 
- Belə hallarda istifadəçinin verdiyi qısa məlumat (başlıq və ya təsvir) əsasında yaradıcı təxəyyüldən istifadə edərək playlist yaratmaq lazımdır.
- Alət xəta versə belə, dayanmaq lazım deyil; alternativ məlumat mənbəyi (istifadəçinin yazdığı) istifadə edilməlidir.

### Yeni UI Komponentləri: Searchable Dropdown
**Yenilik:** Mobil versiyada yerə qənaət etmək üçün üfüqi sürüşdürmə (horizontal scroll) filtrləri **Axtarış edilə bilən Dropdown** (Searchable Dropdown) ilə əvəz edildi.
**Qeyd:** Bu komponent üçün `app/page.tsx` daxilində aşağıdakı `state`-lər idarə olunur:
- `isFilterCatOpen` / `isFilterVibeOpen`: Açılıb-bağlanma statusu.
- `filterCatSearch` / `filterVibeSearch`: Dropdown daxilindəki axtarış mətni.

### Yeni Kateqoriya Əlavə Etmə Çeklisti
Tətbiqə yeni kateqoriya (məs: 'Filmlər/Seriallar', 'Gülməli') əlavə edərkən 3 yerdə dəyişiklik edilməlidir:
1.  **`app/page.tsx` -> `categoryIcons`**: Yeni ikonu `lucide-react`-dan import edib bura əlavə etmək.
2.  **`app/page.tsx` -> `categories`**: Siyahıya kateqoriyanın adını əlavə etmək.
3.  **`components/TopicCard.tsx` -> `getGradient`**: Yeni kateqoriyanın hansı rəng qrupuna aid olacağını təyin etmək (məs: *red/rose* qrupu).

### İş Axını (Workflow) Effektivliyi
`/playlist` iş axını çox uğurlu işləyir. İstifadəçi link və ya mövzu atır, agent bunu analiz edib dərhal 3 hissəli struktura (Topic, Vibe, Opening Question) çevirir. Bu standartlaşdırma prosesi sürətləndirir.

### Mənbə Linkləri
**Qayda:** İstifadəçi hər hansı veb link təqdim etdikdə və həmin linkdən məlumat çıxarıb mövzu yaratdıqda, `Topic` strukturundakı `source` sahəsinə **tam URL-i (Full URL)** yazmaq mütləqdir. Məsələn: `source: 'BuzzFeed'` əvəzinə `source: 'https://buzzfeed.com/...'`. Bu, istifadəçinin sonradan mənbəyə keçid etməsini asanlaşdırır.

---
*Son Yenilənmə: 11 Yanvar 2026*
