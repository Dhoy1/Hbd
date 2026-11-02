# 🎂 A Little Birthday Journey (Revamped Edition)

Sebuah website **Happy Birthday interaktif berkonsep emotional rollercoaster** yang dirancang khusus untuk smartphone Android (Google Chrome) dan kompatibel 100% untuk desktop.

Penerima akan diajak melalui perjalanan kecil yang dimulai dari rasa penasaran, diselingi humor dan interaksi lucu yang memancing senyum/tawa, lalu ditutup dengan suasana syahdu, lentera harapan, dan pelukan virtual yang menyentuh hati (*tearjerker*).

---

## ✨ Fitur-Fitur Utama

1. **Scene 1 — Dokumen Rahasia (The Secret Envelope)**:
   - Amplop animasi bertanda *TOP SECRET* dengan efek sparkle dan bunyi kertas terbuka.
2. **Scene 2 — Face & Age Scanner Konyol**:
   - Pemindai digital sci-fi cute dengan animasi sinar laser dan bunyi pemindai retro.
   - Analisis wajah acak yang kocak (*"99.8% Kelebihan dosis imut, 0.2% butuh tidur siang"*).
   - Kuis pertanyaan dengan respons meme dan suara boing saat jawaban salah dipilih.
3. **Scene 3 — Mini Game: Whack-a-Bintang Usil (Eits, Gak Kena!)**:
   - Arena mini game 6 lubang awan interaktif ala Whack-a-Mole.
   - Bintang-bintang usil bermunculan dan suka mengejek (*"Eits, gak kena! 😜"*, *"Kurang cepet! 🏃"*).
   - Mekanisme dodge/menghindar yang seru dan menantang.
   - Ada item zonk (*"Aduh kena overthinking berlebih! 🧠 (-1)"*) dan karakter bonus kucing (*"Meoow! Bonus Kucing Ultah! 🐱 (+2)"*).
   - Animasi selebrasi konfeti dan parade bintang menari saat mencapai target 7 poin.
4. **Scene 4 — Galeri Polaroid 3D Flip & Pesan Rahasia**:
   - Foto bergaya polaroid vintage yang bisa **di-tap untuk membalik kartu (3D Flip)**!
   - Di balik foto terdapat pesan tulisan tangan rahasia (*secret note*).
   - Tombol kirim reaksi emoji langsung di bawah foto.
   - Mendukung gesture swipe kiri-kanan di layar smartphone.
5. **Scene 5 — Prank Hadiah Zonk & Kembang Api Interaktif**:
   - Kotak kado bergetar heboh.
   - **Prank Zonk**: Muncul voucher kocak terlebih dahulu (*"Voucher Gratis Overthinking 1 Tahun!"*).
   - **Real Reveal**: Ledakan konfeti megah + kanvas kembang api interaktif (**ketuk layar di mana saja untuk meledakkan kembang api sendiri!**).
6. **Scene 6 — The Heartfelt Ending (Lentera Harapan & Pelukan Haptic)**:
   - Suasana hening dan lampu meredup ke langit malam bertabur bintang.
   - Surat emosional mendalam dengan efek ketik mesin tik bersuara lembut.
   - **Lentera Harapan (Make a Wish)**: Ketik harapan atau pilih doa baik, lalu terbangkan lentera bercahaya ke langit malam!
   - **Pelukan Virtual Bergetar (Haptic Pulse)**: Tahan tombol selama 3 detik — ponsel Android akan bergetar berdenyut lembut seperti detak jantung (*heartbeat vibration*) dengan ledakan hati hangat di layar.
   - Tombol **Ulangi Perjalanan** untuk memulai kembali kapan saja.

---

## 🗂️ Struktur Folder

```
HBD/
│
├── index.html         ← Halaman utama (semua 6 scene)
├── style.css          ← Style responsif mobile-first & animasi
├── script.js          ← Logika interaktif, Web Audio synth, haptic feedback
├── config.js          ← Konfigurasi konten (EDIT DI SINI)
├── README.md          ← Dokumentasi lengkap ini
├── .nojekyll          ← Mencegah Jekyll di GitHub Pages
│
└── assets/
    ├── audio/
    │   ├── bgm.mp3    ← File musik latar belakang
    │   └── README.md  ← Panduan audio
    │
    └── images/
        ├── memory-1.svg  ← Placeholder foto 1
        ├── memory-2.svg  ← Placeholder foto 2
        └── memory-3.svg  ← Placeholder foto 3
```

---

## ⚙️ Cara Menyesuaikan Konten (`config.js`)

Buka file **`config.js`** untuk mengganti nama, foto, lelucon, dan surat:

```js
const CONFIG = {
  recipientName : "Nama Dia",
  senderName    : "Nama Kamu",
  pageTitle     : "A Little Birthday Journey 🎂",

  openingMessage: "Kayaknya ada sesuatu yang spesial buat kamu hari ini...",

  // Hasil scanner wajah konyol
  scannerResults: [
    "Mendeteksi kadar keimutan: 99.8% (Kelebihan dosis) 🥰",
    "Scanning usia mental: Error 404, terlalu sering begadang 🦉",
    "Hasil scan: Sah bertambah usia, makin glowing & mempesona! ✨"
  ],

  // Foto kenangan (ganti dengan foto asli di assets/images/)
  memoryPhotos: [
    "./assets/images/foto-1.jpg",
    "./assets/images/foto-2.jpg",
    "./assets/images/foto-3.jpg"
  ],

  // Caption depan foto polaroid
  memoryCaptions: [
    "One little moment, one beautiful memory. ✨",
    "Terima kasih sudah menjadi bagian dari cerita ini. 🌸",
    "Semoga selalu ada alasan untuk tersenyum. 💫"
  ],

  // Pesan rahasia di balik polaroid (muncul saat kartu di-tap)
  secretNotes: [
    "Psst... foto ini saksi betapa berharganya momen waktu itu! 📸",
    "Terima kasih sudah selalu hadir dan bertahan sampai hari ini. 💌",
    "Dunia ini jauh lebih ceria karena ada kamu di dalamnya. 🌟"
  ],

  // Mini Game Whack-a-Bintang Usil
  whackGame: {
    targetStars  : 7,
    cheekyLines  : [
      "Eits, gak kena! 😜",
      "Kurang cepet! 🏃",
      "Haha meleset! 🙈",
      "Wleee~ 😝"
    ],
    zonkLine     : "Aduh, kena overthinking berlebih! 🧠 (-1)",
    catBonusLine : "Meoow! Bonus Kucing Ultah! 🐱 (+2)"
  },
    badge   : "🎉 SELAMAT! KAMU MENANG:",
    title   : "Voucher Gratis Overthinking 1 Tahun! 🧠",
    subtitle: "Berlaku setiap jam 2 pagi sambil mikirin hal random.",
    fakeButton: "Klaim Voucher 🛌",
    realNotice: "Eits, bercanda ding! Mana mungkin kadonya cuma begituan... 😜",
    realButton: "🎀 Buka Kado yang Aslinya! ✨"
  },

  // Lentera Harapan (pilihan cepat)
  suggestedWishes: [
    "Semoga selalu diberikan kesehatan, ketenangan, dan bahagia lahir batin ✨",
    "Semoga semua impian dan rencana baikmu perlahan menemukan jalannya 🌸",
    "Semoga selalu dikelilingi oleh orang-orang tulus yang menyayangimu 💫"
  ],

  // Surat penutup emosional
  finalLetter: `Isi surat panjang yang menyentuh hati...`,

  closingMessage: "With love,",

  musicPath      : "./assets/audio/bgm.mp3",
  musicVolume    : 0.25,
  soundEffects   : true,   // Web Audio API lokal tanpa download
  hapticFeedback : true    // Getaran pelukan di smartphone Android
};
```

---

## 🚀 Panduan Hosting (100% Siap Deploy)

Project ini dibangun murni menggunakan **HTML5, CSS3, dan Vanilla JavaScript** dengan seluruh aset bertipe relatif (`./...`). Tidak memerlukan database, server backend, atau proses `npm build`.

### A. Hosting di GitHub Pages (Gratis)

1. **Buat Repository di GitHub**:
   - Beri nama repository, misalnya `birthday-journey`.
   - Pilih *Public*.

2. **Upload / Push Kode**:
   ```bash
   git init
   git add .
   git commit -m "feat: Interactive Birthday Journey Revamped"
   git branch -M main
   git remote add origin https://github.com/USERNAME-KAMU/birthday-journey.git
   git push -u origin main
   ```

3. **Aktifkan GitHub Pages**:
   - Buka halaman repository di GitHub.
   - Masuk ke tab **Settings** → menu **Pages** di bilah kiri.
   - Pada bagian **Build and deployment > Source**, pilih **Deploy from a branch**.
   - Pilih Branch: **`main`** dan Folder: **`/ (root)`**.
   - Klik **Save**.
   - Tunggu 1–2 menit, website kamu akan aktif di:
     `https://USERNAME-KAMU.github.io/birthday-journey/`

> **PENTING**: File `.nojekyll` sudah disertakan di root agar GitHub Pages tidak memfilter aset dengan karakter underscore.

---

### B. Hosting di Vercel (Gratis & Cepat)

1. **Deploy Lewat Dashboard Vercel**:
   - Buka [vercel.com](https://vercel.com) dan login dengan akun GitHub kamu.
   - Klik tombol **"Add New..."** → **"Project"**.
   - Pilih repository `birthday-journey` yang sudah kamu buat.
   - Pada bagian **Framework Preset**, biarkan **Other** (karena ini pure static site).
   - Biarkan semua pengaturan build kosong.
   - Klik **Deploy**.
   - Selesai! Website langsung aktif dengan domain HTTPS (contoh: `https://birthday-journey.vercel.app`).

2. **Deploy Lewat Vercel CLI (Alternatif Terminal)**:
   ```bash
   npm i -g vercel
   vercel
   ```
   Ikuti panduan di layar terminal (tekan Enter untuk pilihan default).

---

## 📱 Panduan Mengganti Foto & Musik

1. **Ganti Foto**:
   - Masukkan foto asli ke folder `assets/images/` (format JPG/PNG/WebP).
   - Buka `config.js`, ubah path `memoryPhotos`:
     ```js
     memoryPhotos: [
       "./assets/images/foto1.jpg",
       "./assets/images/foto2.jpg",
       "./assets/images/foto3.jpg"
     ],
     ```
2. **Ganti Musik Latar**:
   - Letakkan file lagu instrumental favorit dalam format MP3 di: `assets/audio/bgm.mp3`.
   - Jika namanya berbeda, ubah `musicPath` di `config.js`.

---

*Dibuat dengan ❤️ — A Little Birthday Journey*
