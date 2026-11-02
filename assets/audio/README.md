# 🎵 Folder Audio — A Little Birthday Journey

Letakkan file musik latar belakang di folder ini.

## Cara Menambahkan Musik

1. Siapkan file audio dalam format **MP3**.
2. Beri nama file: **`bgm.mp3`**
3. Letakkan file di folder ini: `assets/audio/bgm.mp3`
4. Buka kembali website — musik akan otomatis tersedia.

## Rekomendasi Musik

Gunakan musik bebas royalti (royalty-free) dari sumber berikut:

| Sumber | URL | Keterangan |
|---|---|---|
| Pixabay Music | https://pixabay.com/music/ | Gratis, bebas royalti |
| Free Music Archive | https://freemusicarchive.org | Filter: CC0 atau CC BY |
| Incompetech | https://incompetech.com | Karya Kevin MacLeod, CC BY |
| Bensound | https://www.bensound.com | Sebagian gratis dengan atribusi |
| Chosic | https://www.chosic.com | Koleksi bebas royalti |

## Karakter Musik yang Cocok

Cari musik dengan kata kunci berikut:

- `soft piano instrumental`
- `birthday emotional piano`
- `romantic piano slow`
- `nostalgic music box`
- `gentle birthday melody`
- `dreamy piano ambient`

## Format yang Didukung

| Format | Kompatibilitas |
|---|---|
| `.mp3` | ✅ Sangat direkomendasikan |
| `.ogg` | ✅ Didukung (ubah path di config.js) |
| `.wav` | ⚠️ Ukuran besar, kurang ideal |
| `.m4a` | ⚠️ Tidak semua browser mendukung |

## Mengubah Path Musik

Jika ingin menggunakan nama file berbeda, ubah di **`config.js`**:

```js
musicPath: "./assets/audio/nama-file-kamu.mp3",
```

## Catatan Penting

- Website tetap berjalan meskipun file audio belum tersedia.
- Tombol Play/Pause akan tetap muncul tetapi tidak akan memutar audio jika file belum ada.
- Konsol browser akan menampilkan pesan info jika file tidak ditemukan (bukan error yang mengganggu).
- Pastikan hak cipta musik yang kamu gunakan sudah sesuai.

