export type Lang = "en" | "id"

export type Localized = string | { en: string; id: string }

const d = (en: string, id: string) => ({ en, id })

export const dict = {
  "nav.profile": d("profile", "profil"),
  "nav.code": d("code", "kode"),
  "nav.art": d("art", "seni"),
  "nav.blogs": d("blogs", "blog"),
  "nav.menu": d("Menu", "Menu"),
  "lang.switch": d("Switch language", "Ganti bahasa"),
  "theme.toggle": d("Toggle light and dark mode", "Ganti mode terang dan gelap"),

  "hero.badge": d("Portfolio", "Portofolio"),
  "hero.hi": d("Hi, I'm", "Hai, saya"),
  "hero.ido": d("I do", "Saya menekuni"),
  "hero.desc": d(
    "My main focus are AI and software development. In the meantime, I enjoy doing visual arts (watercolor and digital).",
    "Fokus utama saya adalah AI dan pengembangan perangkat lunak. Di waktu luang, saya menikmati seni visual (cat air dan digital)."
  ),
  "hero.cta.code": d("View my code", "Lihat kode saya"),
  "hero.cta.art": d("See my art", "Lihat karya seni saya"),
  "hero.cta.hi": d("Say hi", "Sapa saya"),

  "sec.about": d("About me", "Tentang saya"),
  "sec.skills": d("Skills", "Keahlian"),
  "sec.experience": d("Experience", "Pengalaman"),

  "card.about": d("About", "Tentang"),
  "card.education": d("Education", "Pendidikan"),
  "card.languages": d("Languages", "Bahasa"),
  "card.contact": d("Contact", "Kontak"),

  "about.p1": d(
    "Computer Science undergraduate student at the University of Indonesia. Highly interested in Artificial Intelligence and Software Development. Experienced and capable of working in a team through competitions and study groups.",
    "Mahasiswa S1 Ilmu Komputer di Universitas Indonesia. Sangat tertarik pada Kecerdasan Buatan dan Pengembangan Perangkat Lunak. Berpengalaman dan mampu bekerja dalam tim melalui kompetisi dan kelompok belajar."
  ),
  "about.p2": d(
    "In the meantime, I enjoy doing visual arts (watercolor and digital).",
    "Di waktu luang, saya menikmati seni visual (cat air dan digital)."
  ),

  "edu.univ": d("University Of Indonesia", "Universitas Indonesia"),
  "edu.degree": d("Bachelor of Computer Science", "Sarjana Ilmu Komputer"),

  "lang.name.id": d("Bahasa Indonesia", "Bahasa Indonesia"),
  "lang.name.en": d("English", "Bahasa Inggris"),
  "lang.native": d("Native", "Bahasa ibu"),

  "contact.email": d("email", "email"),
  "contact.send": d("Send an email", "Kirim email"),

  "code.kicker": d("PROJECTS", "PROYEK"),
  "code.title": d("Things I've built", "Yang telah saya bangun"),
  "code.sub": d(
    "Mobile apps, websites, robots, and tools. Pick a card for the details.",
    "Aplikasi mobile, website, robot, dan tools. Pilih kartu untuk melihat detailnya."
  ),
  "code.search": d("Search projects or tech...", "Cari proyek atau teknologi..."),
  "code.all": d("All", "Semua"),
  "code.empty.title": d("Nothing here yet", "Belum ada apa-apa"),
  "code.empty.desc": d(
    "No project matches this filter.",
    "Tidak ada proyek yang cocok dengan filter ini."
  ),
  "code.featured": d("Featured", "Unggulan"),
  "code.ongoing": d("On going", "Sedang berjalan"),
  "modal.ongoing": d(
    "Still in progress. The results are not good enough yet, so I keep improving it.",
    "Masih dalam pengerjaan. Hasilnya belum memuaskan, jadi masih terus saya perbaiki."
  ),
  "modal.source": d("Source code", "Kode sumber"),
  "modal.demo": d("Live demo", "Demo langsung"),
  "modal.close": d("Close", "Tutup"),

  "cat.Mobile App": d("Mobile App", "Aplikasi Mobile"),
  "cat.Website": d("Website", "Website"),
  "cat.AI & ML": d("AI & ML", "AI & ML"),
  "cat.Bioinformatics Tools": d("Bioinformatics Tools", "Alat Bioinformatika"),
  "cat.Software": d("Software", "Perangkat Lunak"),
  "cat.Robot": d("Robot", "Robot"),
  "cat.Game": d("Game", "Game"),

  "art.kicker": d("GALLERY", "GALERI"),
  "art.title": d("Watercolor & digital art", "Seni cat air & digital"),
  "art.sub": d(
    "Tap any piece to view it large. Use the arrow keys to browse.",
    "Ketuk karya untuk melihatnya lebih besar. Gunakan tombol panah untuk menjelajah."
  ),

  "blogs.kicker": d("BLOGS", "BLOG"),
  "blogs.title": d("Notes & writing", "Catatan & tulisan"),
  "blogs.sub": d(
    "Thoughts on AI, software development, and things I learn along the way.",
    "Pemikiran seputar AI, pengembangan perangkat lunak, dan hal-hal yang saya pelajari."
  ),
  "blogs.soon": d("Coming soon", "Segera hadir"),
  "blogs.soon.desc": d(
    "The first post is still being written. Check back later.",
    "Tulisan pertama masih dalam proses. Kunjungi lagi nanti."
  ),
} as const

export type DictKey = keyof typeof dict
