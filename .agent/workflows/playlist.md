---
description: Bu workflow, verilmiş mənbədən (mətn, link və ya fayl) avtomatik olaraq bir 'Playlist' yaradır və data/inspiration.ts faylına əlavə edir.
---

# Playlist Yaradılma Prosesi (/playlist)

İstifadəçi `/playlist` əmrini verdikdə bu addımları izlə:

1.  **Mənbəni Analiz Et:**
    *   İstifadəçinin təqdim etdiyi linki, mətni və ya aktiv faylı oxu.
    *   Əgər mənbə böyükdürsə, əsas ana xətti müəyyən et (**Playlist Başlığı**).
    *   Məzmundan bir-biri ilə əlaqəli, ardıcıllıq təşkil edən 3-5 maraqlı "fakt" və ya "fəsil" çıxart.

2.  **Məlumatları Strukturlaşdır (Topic Obyekti):**
    *   Hər bir fakt üçün aşağıdakı şablonu doldur:
        *   `id`: `data/inspiration.ts` faylındakı son ID-dən davam et (məsələn, `fact-153`...).
        *   `title`: Qısa və cəlbedici başlıq.
        *   `description`: Məzmunun qısa xülasəsi. Vacib yerləri **qalın** yaz.
        *   `category`: Uyğun kateqoriya (məs: Psixologiya, Tarix, Ünsiyyət və s.).
        *   `source`: Mənbənin linki (URL) və ya adı. (Əgər link varsa, mütləq bura yaz, `http` ilə başlamalıdır).
        *   `opener`: Bu mövzunu açmaq üçün bir cümlə (buzqıran).
        *   `question`: Qarşı tərəfə veriləcək düşündürücü sual.
        *   `vibes`: Mövzuya uyğun 2 emoji/vibe seç.
        *   `playlist`:
            *   `id`: Playlist üçün unikal ingiliscə slug (məs: `eros-psyche`).
            *   `title`: Playlistin əsas adı (məs: 'Eros və Psykhe: Ruhun Səyahəti').
            *   `order`: Sıra nömrəsi (1, 2, 3...).
            *   `total`: Cəmi neçə dənə olduğunu qeyd et.

3.  **Təsdiq Al (Opsional):**
    *   Əgər əmin deyilsənsə, istifadəçiyə "Bu başlıqlarla 5 maddəlik playlist yaradıram, uyğundurmu?" deyə soruş. Əks halda birbaşa keç.

4.  **Koda Yaz:**
    *   `data/inspiration.ts` faylını oxu.
    *   Massivin sonuna yeni obyektləri əlavə et.
    *   Sintaksisin (vergüllər, mötərizələr) düzgün olduğuna əmin ol.

5.  **Məlumat Ver:**
    *   İstifadəçiyə playlistin hazır olduğunu və mövzuların qısa siyahısını təqdim et.
