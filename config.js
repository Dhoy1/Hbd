/**
 * ============================================================
 *  A Little Birthday Journey — Configuration File
 *  Semua nama, pesan, foto, lelucon, dan surat bisa diubah di sini!
 *  Kompatibel 100% untuk GitHub Pages & Vercel.
 * ============================================================
 */

const CONFIG = {

  // ── Identitas ──────────────────────────────────────────────
  recipientName: "Risti Ariani",            // Nama penerima
  senderName: "Mas Idoy Ganteng Pake Banget", // Nama kamu (pengirim)
  pageTitle: "A Little Birthday Journey 🎂",

  // ── Scene 1 — Pembuka & Surat Mini Amplop ──────────────────
  openingMessage: "Kayaknya ada sesuatu yang spesial dan rahasia buat kamu hari ini...",
  envelopeLetter: {
    badge: "💌 DOKUMEN RAHASIA",
    title: "Happy Birthday, Cantik! 🎂✨",
    content: "Hari ini adalah harinya kamu. Gak boleh cemberut, dilarang overthinking, dan wajib bahagia seharian penuh! Ada sebuah perjalanan kecil penuh kejutan yang udah disiapin spesial buat kamu. Siap melihatnya? 🌸",
    footer: "— Jangan lupa senyum dulu sebelum mulai ya~ ♡"
  },

  // ── Scene 2 — Age / Face Scanner Konyol ─────────────────────
  // Hasil scan wajah yang akan muncul secara acak / bergantian
  scannerResults: [
    "Mendeteksi kadar keimutan: 99.8% (Kelebihan dosis) 🥰",
    "Hasil scan: Sah bertambah usia, makin glowing & mempesona! ✨",
  ],

  // ── Scene 3 — Mini Game: Whack-a-Bintang Usil ────────────────
  whackGame: {
    targetStars: 7, // Target bintang untuk menang
    cheekyLines: [
      "Eits, gak kena! 😜",
      "Terlalu lambat wlee! 🏃💨",
      "Sini tangkap kalau bisa! ✨",
      "Haha meleset! 🙈",
      "Wleee~ 😝"
    ],
    fakeEmoteLine: "Eits, itu cuma emote usil, bukan bintang! 😜 (0)",
    zonkLine: "Aduh, kena overthinking berlebih! 🧠 (-1)"
  },

  // ── Scene 4 — Foto Kenangan (Polaroid 3D Flip) ─────────────
  // Ganti path foto dengan file asli di folder assets/images/
  // Contoh: "./assets/images/foto1.jpg"
  memoryPhotos: [
    "./assets/images/1.jpg",
    "./assets/images/2.jpg",
    "./assets/images/3.JPG"
  ],

  // Caption depan foto polaroid
  memoryCaptions: [
    "One little moment, one beautiful memory. ✨",
    "Terima kasih sudah menjadi bagian dari cerita ini. 🌸",
    "Semoga selalu ada alasan untuk tersenyum. 💫"
  ],

  // Pesan RAHASIA di belakang foto (muncul saat kartu di-flip / dibalik)
  secretNotes: [
    "Udah banyak banget yang kita lewatin bareng, dan aku bersyukur masih bisa sama kamu sampai detik ini. Selamat bertambah umur, kesayanganku, Cintaku, Gendutku😘😘",
    "Masih inget banget gimana excited-nya kamu malam ini. Liat kamu sebahagia itu, rasanya duniaku ikut terang rawrr. masih teringat WIIII",
    "Awal mula dari perjalanan panjang kita. Dari momen ini aku tahu, nemenin kamu jalan ke mana pun rasanya bakal selalu seru dan nyaman AWW."
  ],

  // ── Scene 5 — Prank Zonk Sebelum Hadiah Utama ───────────────
  zonkPrize: {
    badge: "🎉 SELAMAT! KAMU MENANG:",
    title: "Voucher Gratis Overthinking 1 Tahun! 🧠",
    subtitle: "Berlaku setiap aku keluar rumah ye NDUTTTT.",
    fakeButton: "Ambil Voucher",
    realNotice: "Eits, bercanda dong! Mana mungkin kadonya cuma begituan, NANTI NYUSUL KADO BENERANNYA😜",
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

Nggak terasa, sekarang kamu sudah bertambah usia lagi. Semoga di umur yang baru ini, banyak hal baik datang ke hidup kamu.

Aku tahu mungkin nggak semua hal berjalan sesuai rencana. Ada banyak hal yang harus kamu hadapi, ada yang menyenangkan dan mungkin ada juga yang cukup melelahkan. Tapi apa pun itu, aku harap kamu tetap bisa menikmati setiap prosesnya dan nggak terlalu keras sama diri sendiri.

Aku berharap ke depannya kamu bisa lebih banyak bahagia, lebih tenang dalam menjalani hari, dan bisa mencapai hal-hal yang selama ini kamu inginkan. Semoga semua usaha dan doa kamu bisa membuahkan hasil yang baik.

Terima kasih sudah menjadi bagian dari hidup aku. Terima kasih untuk setiap cerita, waktu, dan hal-hal sederhana yang sudah kita lewati bersama. Mungkin aku nggak selalu bisa mengungkapkan semuanya, tapi aku senang bisa mengenal dan menjalani banyak hal bersama kamu.

Aku juga berharap kita masih punya banyak waktu untuk menciptakan cerita-cerita baru, melewati hari baik maupun hari yang kurang baik, dan terus belajar memahami satu sama lain.

Sekali lagi, selamat ulang tahun. Semoga tahun ini membawa banyak kebahagiaan, pengalaman baru, dan hal-hal yang bisa membuat kamu semakin bersyukur.

Enjoy your day. You deserve all the good things coming your way.❤️`,

  closingMessage: "With love,",

  // ── Pengaturan Audio & Efek ────────────────────────────────
  // Lagu 1: Musik Scene 1 s/d Scene 5 (Suasana ceria, manis, playful)
  musicPath: "./assets/audio/1.mp3",

  // Lagu 2: Musik khusus Scene 6 Ending (Suasana emosional, haru, piano lembut)
  endingMusicPath: "./assets/audio/3.mp3",

  musicVolume: 0.50,   // Volume musik latar (0.0 – 1.0)
  soundEffects: true,   // Efek suara sintesis (Web Audio API lokal)
  hapticFeedback: true,   // Getaran pelukan di smartphone Android (Vibration API)

  // Kecepatan ketikan surat di Scene 6 (dalam ms per karakter, default: 55ms)
  // Makin besar angkanya (misal 65 - 75), makin lambat dan syahdu menyesuaikan alunan lagu
  letterTypingSpeed: 55

};
