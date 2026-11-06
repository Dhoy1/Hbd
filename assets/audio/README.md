# 🎵 Folder Audio — A Little Birthday Journey

Website ini mendukung **dua musik latar berbeda** dengan transisi otomatis (*crossfade*):
1. **Lagu Perjalanan (Scene 1 – 5)**: Suasana ceria, manis, dan playful.
2. **Lagu Ending (Scene 6)**: Suasana emosional, romantis, dan menyentuh hati saat membaca surat.

---

## 📁 File yang Perlu Disiapkan

Siapkan 2 file audio berformat **`.mp3`** dan letakkan langsung di dalam folder ini (`assets/audio/`):

| Nama File | Digunakan Pada | Karakter Suasana |
|---|---|---|
| **`bgm-journey.mp3`** | Scene 1 s/d Scene 5 | Akustik manis, cute, cheerful, ukelele/lo-fi romantis |
| **`bgm-ending.mp3`** | Scene 6 (Surat & Ending) | Piano lembut, slow, haru, emosional, hangat |

> [!TIP]
> Jika Anda hanya punya 1 lagu saja, cukup beri nama `bgm-journey.mp3` dan lagu tersebut akan otomatis dipakai di seluruh halaman.

---

## 🎧 Rekomendasi Tempat Unduh Lagu Bebas Royalti (Gratis)

| Sumber | Link | Kata Kunci Pencarian |
|---|---|---|
| **Pixabay Music** | [pixabay.com/music](https://pixabay.com/music/) | `romantic piano`, `cute acoustic`, `birthday melody` |
| **Free Music Archive** | [freemusicarchive.org](https://freemusicarchive.org) | Filter: CC0 / Instrumental |
| **Chosic** | [chosic.com](https://chosic.com) | `soft emotional piano`, `happy background` |

---

## ⚙️ Mengubah Nama File di `config.js`

Jika nama file Anda berbeda (misal: `lagu-kita.mp3` dan `lagu-haru.mp3`), buka file [config.js](file:///c:/laragon/www/HBD/config.js) lalu ubah:

```javascript
musicPath: "./assets/audio/lagu-kita.mp3",
endingMusicPath: "./assets/audio/lagu-haru.mp3",
```

## Catatan Penting

- Website tetap berjalan meskipun file audio belum tersedia.
- Tombol Play/Pause akan tetap muncul tetapi tidak akan memutar audio jika file belum ada.
- Konsol browser akan menampilkan pesan info jika file tidak ditemukan (bukan error yang mengganggu).
- Pastikan hak cipta musik yang kamu gunakan sudah sesuai.

