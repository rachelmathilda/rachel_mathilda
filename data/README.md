# Cara mengisi projects.json

Buka `data/projects.json`. Tambah, ubah, atau hapus objek di dalam `projects`. Website otomatis membaca file ini, tidak ada kode yang perlu diubah.

| Field | Wajib | Keterangan |
| --- | --- | --- |
| id | ya | Unik, tanpa spasi. Contoh: `my-app` |
| visible | tidak | `false` untuk menyembunyikan tanpa menghapus. Default `true` |
| status | tidak | `"ongoing"` menampilkan badge On going dan catatan di detail, kosongkan kalau sudah selesai |
| statusNote | tidak | teks `{en,id}` untuk mengganti catatan bawaan saat status ongoing |
| featured | tidak | `true` menampilkan badge Featured dan menaikkan ke urutan atas |
| title | ya | Judul project |
| summary | ya | Deskripsi singkat di kartu. Bisa teks biasa atau dua bahasa: `{ "en": "...", "id": "..." }` |
| description | tidak | Penjelasan panjang di popup detail. Format sama seperti summary |
| category | ya | Harus sama persis dengan salah satu isi `categories` |
| year | tidak | Contoh: `2025` |
| role | tidak | Peranmu di project |
| tags | tidak | Daftar teknologi, contoh `["Flutter", "Firebase"]` |
| image | tidak | Path gambar di folder `public`, contoh `/projects/my-app.png`. Kosong berarti memakai cover otomatis |
| imagePosition | tidak | Bagian gambar yang tampil di cover, format CSS `"x% y%"`. Default `"50% 0%"` (bagian atas). Contoh gambar tinggi: `"50% 40%"` |
| gallery | tidak | Daftar gambar tambahan yang tampil penuh di popup detail, contoh `["/projects/a.png", "/projects/b.png"]` |
| links.github | tidak | URL repo. Kosong berarti tombol disembunyikan |
| links.demo | tidak | URL demo atau live site. Kosong berarti tombol disembunyikan |
| links.extra | tidak | Link tambahan, contoh repo kedua: `[{"label": "API repo", "url": "https://..."}]`. Entri dengan url kosong otomatis disembunyikan |

Untuk menambah kategori baru, tambahkan nama di `categories`. Filter di halaman code ikut berubah.

Taruh gambar project di `public/projects/`. Rasio 16:9 paling pas.

Jangan lupa koma antar objek dan tanda kutip ganda. Tanpa koma setelah objek terakhir.

# Cara mengisi blogs.json

Buka `data/blogs.json`, lalu tambah objek di dalam `posts`. Satu entri template tersembunyi sudah disediakan, salin lalu ubah `visible` menjadi `true`.

| Field | Wajib | Keterangan |
| --- | --- | --- |
| id | ya | Unik, tanpa spasi |
| visible | tidak | `false` untuk menyembunyikan. Default `true` |
| title | ya | Judul tulisan. Bisa teks biasa atau `{ "en": "...", "id": "..." }` |
| summary | ya | Ringkasan di kartu. Format sama seperti title |
| date | ya | Format `YYYY-MM-DD`. Tulisan terbaru otomatis di atas |
| readTime | tidak | Contoh: `{ "en": "5 min read", "id": "5 menit baca" }` |
| tags | tidak | Daftar topik |
| url | tidak | Link tulisan (Medium, Notion, dan lain-lain). Kosong berarti kartu tidak bisa diklik |

# Bahasa (English dan Indonesia)

Tombol EN dan ID ada di navbar. Teks tetap (menu, judul, tombol) ada di `lib/dict.ts`. Konten profil ada di `data/profile.ts`. Untuk teks dua bahasa pakai format `{ "en": "...", "id": "..." }`. Teks biasa (string) tampil sama di kedua bahasa.
