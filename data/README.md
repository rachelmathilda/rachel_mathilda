# Cara mengisi projects.json

Buka `data/projects.json`. Tambah, ubah, atau hapus objek di dalam `projects`. Website otomatis membaca file ini, tidak ada kode yang perlu diubah.

| Field | Wajib | Keterangan |
| --- | --- | --- |
| id | ya | Unik, tanpa spasi. Contoh: `my-app` |
| visible | tidak | `false` untuk menyembunyikan tanpa menghapus. Default `true` |
| featured | tidak | `true` menampilkan badge Featured dan menaikkan ke urutan atas |
| title | ya | Judul project |
| summary | ya | Deskripsi singkat di kartu |
| description | tidak | Penjelasan panjang di popup detail |
| category | ya | Harus sama persis dengan salah satu isi `categories` |
| year | tidak | Contoh: `2025` |
| role | tidak | Peranmu di project |
| tags | tidak | Daftar teknologi, contoh `["Flutter", "Firebase"]` |
| image | tidak | Path gambar di folder `public`, contoh `/projects/my-app.png`. Kosong berarti memakai cover otomatis |
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
| title | ya | Judul tulisan |
| summary | ya | Ringkasan di kartu |
| date | ya | Format `YYYY-MM-DD`. Tulisan terbaru otomatis di atas |
| readTime | tidak | Contoh: `5 min read` |
| tags | tidak | Daftar topik |
| url | tidak | Link tulisan (Medium, Notion, dan lain-lain). Kosong berarti kartu tidak bisa diklik |
