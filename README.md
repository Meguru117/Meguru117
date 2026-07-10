# ✨ Personal Website — Designer & Creator

Website "about me" sederhana dengan tampilan minimalis & clean, siap di-deploy ke GitHub Pages. Dibangun murni dengan HTML, CSS, dan JavaScript — tanpa framework, tanpa build tools.

**Live demo:** `https://megumegu.web.id`

---

## 🧩 Fitur

- 🌗 Dark / light mode toggle (preferensi tersimpan otomatis di browser)
- 📍 Navigasi aktif otomatis mengikuti section saat scroll
- ✨ Animasi masuk yang halus di hero & tiap section
- 💼 Daftar karya yang bisa langsung diklik menuju link proyek
- 💬 Section testimoni untuk kredibilitas
- 📱 Responsif penuh — rapi di desktop maupun HP

---

## 📁 Struktur File

```
├── index.html         → Struktur & konten halaman
├── style.css           → Semua styling, warna, dan animasi
├── script.js           → Dark mode, scrollspy, dan interaksi lainnya
├── README.md           → Dokumen ini
├── CNAME                → Konfigurasi custom domain
└── assets/
    ├── favicon.ico       → Ikon tab browser
    ├── og-image.png      → Gambar preview saat link dibagikan
    ├── site.webmanifest  → Konfigurasi PWA/metadata situs
    └── icons/
        ├── icon-192.png  → Ikon ukuran 192x192
        └── icon-512.png  → Ikon ukuran 512x512
```

---

## ✍️ Cara Kustomisasi

Semua yang perlu diganti ada di **`index.html`**:

| Bagian | Cari di HTML | Ganti dengan |
|---|---|---|
| Nama & inisial | `Nama Kamu`, `NK.` | Nama dan inisial kamu |
| Bio singkat | Section `id="tentang"` | Ceritamu sendiri |
| Skill/tools | `<div class="tags">` | Skill yang kamu kuasai |
| Karya | Section `id="karya"` | Judul, tahun, kategori, dan `href` link proyek |
| Testimoni | Section `id="testimoni"` | Kutipan dan nama klien |
| Kontak | Section `id="kontak"` | Email dan link sosial media |

Mau ganti warna aksen? Buka **`style.css`**, edit variabel di paling atas (`:root`):

```css
--accent: #2F4B7C;     /* warna aksen utama */
--highlight: #F2B705;  /* warna highlight kecil */
```

---

## 🚀 Cara Upload ke GitHub Pages

1. Buat repository baru di GitHub (misalnya `username.github.io` untuk domain utama, atau nama bebas untuk sub-path).
2. Upload keempat file di atas ke root repo.
3. Buka **Settings → Pages**.
4. Pada **Source**, pilih branch `main` (folder `/root`) → **Save**.
5. Tunggu 1-2 menit, situs akan live di:
   - `https://username.github.io` (jika nama repo `username.github.io`), atau
   - `https://username.github.io/nama-repo` (repo biasa).

---

## 🛠️ Dibangun dengan

- HTML5 & CSS3 (custom properties, grid, animasi native)
- JavaScript (vanilla, tanpa dependency)
- Font: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans), [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) via Google Fonts

---

## 📄 Lisensi

Bebas dipakai, diedit, dan disebarluaskan untuk kebutuhan pribadi maupun komersial.
