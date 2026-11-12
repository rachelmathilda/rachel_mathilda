import type { Localized } from "@/lib/dict"

export interface Skill {
  name: string
  icon: string
}

export interface SkillGroup {
  title: Localized
  items: Skill[]
}

const s = (name: string, icon: string): Skill => ({ name, icon })

export const skillGroups: SkillGroup[] = [
  {
    title: { en: "Programming Languages", id: "Bahasa Pemrograman" },
    items: [
      s("Python", "python"),
      s("Java", "java"),
      s("JavaScript", "javascript"),
      s("C++", "cpp"),
      s("Go (basic)", "go"),
    ],
  },
  {
    title: { en: "Frameworks", id: "Framework" },
    items: [
      s("Flutter", "flutter"),
      s("Django", "django"),
      s("Next.js", "nextjs"),
      s("Spring Boot", "springboot"),
    ],
  },
  {
    title: { en: "UI-UX Tools", id: "Tools UI-UX" },
    items: [s("Figma", "figma"), s("Procreate", "procreate")],
  },
  {
    title: { en: "IDEs", id: "IDE" },
    items: [
      s("VS Code", "vscode"),
      s("IntelliJ IDEA", "intellij"),
      s("Android Studio", "androidstudio"),
      s("Arduino", "arduino"),
    ],
  },
  {
    title: { en: "Software Engineering Tools", id: "Tools Software Engineering" },
    items: [
      s("Postman", "postman"),
      s("Prometheus", "prometheus"),
      s("Grafana", "grafana"),
      s("SonarCloud", "sonarcloud"),
      s("Docker", "docker"),
    ],
  },
  {
    title: { en: "AI Modules", id: "Modul AI" },
    items: [
      s("Pandas", "pandas"),
      s("NumPy", "numpy"),
      s("scikit-learn", "scikitlearn"),
      s("Matplotlib", "matplotlib"),
      s("PyTorch", "pytorch"),
    ],
  },
  {
    title: { en: "Robotics Tools", id: "Tools Robotika" },
    items: [s("ROS2", "ros2")],
  },
  {
    title: { en: "Operating Systems", id: "Sistem Operasi" },
    items: [
      s("Ubuntu", "ubuntu"),
      s("Debian", "debian"),
      s("Windows", "windows"),
    ],
  },
  {
    title: { en: "Cloud and Database", id: "Cloud dan Database" },
    items: [s("AWS", "aws"), s("Azure", "azure"), s("SQL", "sql")],
  },
]

export interface Experience {
  title: Localized
  subtitle: Localized
  date: Localized
  bullets: Localized[]
  tags: string[]
}

const l = (en: string, id: string): Localized => ({ en, id })

export const experiences: Experience[] = [
  {
    title: l("Research Assistant", "Asisten Peneliti"),
    subtitle: l(
      "HAR CSL, Faculty of Computer Science, UI",
      "HAR CSL, Fakultas Ilmu Komputer, UI"
    ),
    date: l("Jul 2026 - Now", "Jul 2026 - Sekarang"),
    bullets: [
      l(
        "Researching video to IMU generation at HAR CSL",
        "Meneliti pembangkitan data IMU dari video di HAR CSL"
      ),
      l(
        "Re-implementing the VirtualIMU baseline on UP-Fall",
        "Mengimplementasi ulang baseline VirtualIMU pada UP-Fall"
      ),
      l(
        "Extending pose extraction to multiple UP-Fall sensor locations",
        "Memperluas ekstraksi pose ke beberapa lokasi sensor UP-Fall"
      ),
      l(
        "Designing experiments on landmark placement and IMU accuracy",
        "Merancang eksperimen penempatan landmark dan akurasi IMU"
      ),
    ],
    tags: ["Video to IMU", "UP-Fall", "Pose Extraction"],
  },
  {
    title: l("Full Stack Developer", "Full Stack Developer"),
    subtitle: "Freelance",
    date: l("Jun 2026 - Oct 2026", "Jun 2026 - Okt 2026"),
    bullets: [
      l(
        "Built a community app in Flutter and Firebase with role-based access",
        "Membangun aplikasi komunitas dengan Flutter dan Firebase dengan akses berbasis peran"
      ),
      l(
        "Delivered a family tree, events, payments, and a social feed",
        "Mengerjakan pohon keluarga, acara, pembayaran, dan feed sosial"
      ),
      l(
        "Secured Firestore with hardened rules and App Check",
        "Mengamankan Firestore dengan rules ketat dan App Check"
      ),
    ],
    tags: ["Flutter", "Firebase"],
  },
  {
    title: l("Staff of AI", "Staf AI"),
    subtitle: "Autonomous Marine Vehicle",
    date: l("Jan 2023 - Aug 2024", "Jan 2023 - Agu 2024"),
    bullets: [
      l("Created a GUI for ROV control", "Membuat GUI untuk kendali ROV"),
      l(
        "Collected datasets and performed labeling",
        "Mengumpulkan dataset dan melakukan pelabelan"
      ),
      l(
        "Added programs for ROV features in ROS2",
        "Menambahkan program fitur ROV di ROS2"
      ),
      l(
        "Taught Python programming to new staff members",
        "Mengajar pemrograman Python kepada staf baru"
      ),
    ],
    tags: ["ROS2", "Python", "Dataset Labeling"],
  },
  {
    title: l("Teaching Assistant", "Asisten Dosen"),
    subtitle: l(
      "Introduction to Programming Foundation 2",
      "Dasar-Dasar Pemrograman 2"
    ),
    date: l("Jan 2024 - May 2024", "Jan 2024 - Mei 2024"),
    bullets: [
      l(
        "Created questions for a Lab using the Java programming language",
        "Membuat soal Lab dengan bahasa pemrograman Java"
      ),
      l(
        "Reviewed and corrected Lab assignments and programming tasks",
        "Mengoreksi tugas Lab dan tugas pemrograman"
      ),
    ],
    tags: ["Java"],
  },
  {
    title: l("Teaching Assistant", "Asisten Dosen"),
    subtitle: l(
      "Introduction to Programming Foundation 1",
      "Dasar-Dasar Pemrograman 1"
    ),
    date: l("Aug 2023 - Dec 2023", "Agu 2023 - Des 2023"),
    bullets: [
      l(
        "Created questions for a Lab using the Python programming language",
        "Membuat soal Lab dengan bahasa pemrograman Python"
      ),
      l(
        "Reviewed and corrected Lab assignments and programming tasks",
        "Mengoreksi tugas Lab dan tugas pemrograman"
      ),
      l("Provided assistance for exams", "Membantu pelaksanaan ujian"),
    ],
    tags: ["Python"],
  },
  {
    title: l(
      "SoftEng Academy Liaison Officer",
      "Liaison Officer SoftEng Academy"
    ),
    subtitle: "COMPFEST 2023",
    date: "Mar 2023 - Sep 2023",
    bullets: [
      l(
        "Informed mentors and mentees about information related to Academy COMPFEST",
        "Menginformasikan mentor dan mentee mengenai informasi terkait Academy COMPFEST"
      ),
      l(
        "Scheduled and supervised regular meetings",
        "Menjadwalkan dan mengawasi pertemuan rutin"
      ),
    ],
    tags: [],
  },
]
