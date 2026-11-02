/**
 * ============================================================
 *  A Little Birthday Journey — Configuration File
 *  Semua nama, pesan, foto, lelucon, dan surat bisa diubah di sini!
 *  Kompatibel 100% untuk GitHub Pages & Vercel.
 * ============================================================
 */

const CONFIG = {

  // ── Identitas ──────────────────────────────────────────────
  recipientName : "Kamu",            // Nama penerima
  senderName    : "Someone Special", // Nama kamu (pengirim)
  pageTitle     : "A Little Birthday Journey 🎂",

  // ── Scene 1 — Pembuka ──────────────────────────────────────
  openingMessage: "Kayaknya ada sesuatu yang spesial dan rahasia buat kamu hari ini...",

  // ── Scene 2 — Age / Face Scanner Konyol ─────────────────────
  // Hasil scan wajah yang akan muncul secara acak / bergantian
  scannerResults: [
    "Mendeteksi kadar keimutan: 99.8% (Kelebihan dosis) 🥰",
    "Scanning usia mental: Error 404, terlalu sering begadang 🦉",
    "Hasil scan: Sah bertambah usia, makin glowing & mempesona! ✨",
    "Analisis wajah: 100% manis, 0% gagal jadi orang keren! 🌟"
  ],

  // ── Scene 3 — Mini Game: Whack-a-Bintang Usil ────────────────
  whackGame: {
    targetStars: 7, // Target bintang untuk menang
    cheekyLines: [
      "Eits, gak kena! 😜",
      "Terlalu lambat wlee! 🏃💨",
      "Sini tangkap kalau bisa! ✨",
      "Aduh ampun ketangkap! 😭",
      "Jago amat jempolnya! 👏"
    ],
    zonkLine: "Aduh, kena overthinking berlebih! 🧠 (-1)",
    catBonusLine: "Meoow! Bonus Kucing Ultah! 🐱 (+2)"
  },

  // ── Scene 4 — Foto Kenangan (Polaroid 3D Flip) ─────────────
  // Ganti path foto dengan file asli di folder assets/images/
  // Contoh: "./assets/images/foto1.jpg"
  memoryPhotos: [
    "./assets/images/memory-1.svg",
    "./assets/images/memory-2.svg",
    "./assets/images/memory-3.svg"
  ],

  // Caption depan foto polaroid
  memoryCaptions: [
    "One little moment, one beautiful memory. ✨",
    "Terima kasih sudah menjadi bagian dari cerita ini. 🌸",
    "Semoga selalu ada alasan untuk tersenyum. 💫"
  ],

  // Pesan RAHASIA di belakang foto (muncul saat kartu di-flip / dibalik)
  secretNotes: [
    "Psst... foto ini saksi betapa berharganya momen waktu itu. Jangan pernah lupa cara tertawa lepas ya! 📸",
    "Setiap detik yang terlewat selalu punya arti tersendiri. Terima kasih sudah selalu hadir dan bertahan. 💌",
    "Dunia ini jauh lebih hangat dan menyenangkan karena ada kamu di dalamnya. Tetaplah jadi dirimu sendiri! 🌟"
  ],

  // ── Scene 5 — Prank Zonk Sebelum Hadiah Utama ───────────────
  zonkPrize: {
    badge   : "🎉 SELAMAT! KAMU MENANG:",
    title   : "Voucher Gratis Overthinking 1 Tahun! 🧠",
    subtitle: "Berlaku setiap jam 2 pagi sambil scroll medsos dan mikirin hal random.",
    fakeButton: "Ambil Voucher",
    realNotice: "Eits, bercanda ding! Mana mungkin kadonya cuma begituan... 😜",
    realButton: "🎀 Buka Kado yang Aslinya!"
  },

  // ── Scene 6 — Lentera Harapan (Make a Wish) ────────────────
  // Pilihan doa/harapan cepat jika penerima tidak ingin mengetik manual
  suggestedWishes: [
    "Semoga selalu diberikan kesehatan, ketenangan, dan bahagia lahir batin ✨",
    "Semoga semua impian dan rencana baikmu perlahan menemukan jalannya 🌸",
    "Semoga selalu dikelilingi oleh orang-orang tulus yang menyayangimu 💫"
  ],

  // ── Scene 6 — Surat Emosional Penutup ──────────────────────
  finalLetter: `Happy Birthday!

Hari ini bukan sekadar tentang bertambahnya usia, tetapi juga tentang perjalanan panjang yang sudah kamu lewati.

Mungkin tidak semua hari berjalan sesuai harapan. Ada hari yang menyenangkan, ada juga hari yang terasa begitu berat dan melelahkan. Tapi lihatlah dirimu hari ini — kamu berhasil melewatinya, dan kamu sudah sampai sejauh ini.

Terima kasih sudah bertahan. Terima kasih sudah terus berusaha, dan terima kasih sudah tetap menjadi dirimu sendiri sampai detik ini.

Di usia yang baru ini, semoga semakin banyak hal-hal baik yang datang menghampiri langkahmu. Semoga doa-doa yang selama ini kamu bisikkan dalam hening perlahan menemukan jawabannya.

Semoga kamu selalu diberikan kesehatan, ketenangan hati, kebahagiaan yang tulus, dan selalu dikelilingi oleh orang-orang yang tulus menyayangimu apa adanya.

Jangan terlalu keras pada dirimu sendiri, ya.

Kamu berhak beristirahat saat lelah. Kamu berhak bahagia tanpa rasa bersalah. Dan kamu pantas mendapatkan hal-hal paling indah di dunia ini.

Tidak harus selalu menjadi yang paling hebat, tidak harus selalu terlihat kuat di mata semua orang. Cukup terus melangkah dengan caramu sendiri, dan jangan lupa menikmati setiap proses kecilnya.

Semoga tahun ini menjadi salah satu bab paling membahagiakan dalam buku perjalanan hidupmu.

Sekali lagi, Selamat Ulang Tahun!

Teruslah tumbuh, teruslah bersinar, dan jangan pernah merasa bahwa kehadiranmu tidak berarti.

The world is truly a little better with you in it.`,

  closingMessage: "With love,",

  // ── Pengaturan Audio & Efek ────────────────────────────────
  musicPath      : "./assets/audio/bgm.mp3",
  musicVolume    : 0.25,   // Volume musik latar (0.0 – 1.0)
  soundEffects   : true,   // Efek suara sintesis (Web Audio API lokal)
  hapticFeedback : true    // Getaran pelukan di smartphone Android (Vibration API)

};
