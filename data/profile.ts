export interface Skill {
  name: string
  icon: string
}

export interface SkillGroup {
  title: string
  items: Skill[]
}

const s = (name: string, icon: string): Skill => ({ name, icon })

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    items: [
      s("Python", "python"),
      s("Java", "java"),
      s("JavaScript", "javascript"),
      s("C++", "cpp"),
      s("Go (basic)", "go"),
    ],
  },
  {
    title: "Frameworks",
    items: [
      s("Flutter", "flutter"),
      s("Django", "django"),
      s("Next.js", "nextjs"),
      s("Spring Boot", "springboot"),
    ],
  },
  {
    title: "UI-UX Tools",
    items: [s("Figma", "figma"), s("Procreate", "procreate")],
  },
  {
    title: "IDEs",
    items: [
      s("VS Code", "vscode"),
      s("IntelliJ IDEA", "intellij"),
      s("Android Studio", "androidstudio"),
      s("Arduino", "arduino"),
    ],
  },
  {
    title: "Software Engineering Tools",
    items: [
      s("Postman", "postman"),
      s("Prometheus", "prometheus"),
      s("Grafana", "grafana"),
      s("SonarCloud", "sonarcloud"),
      s("Docker", "docker"),
    ],
  },
  {
    title: "AI Modules",
    items: [
      s("Pandas", "pandas"),
      s("NumPy", "numpy"),
      s("scikit-learn", "scikitlearn"),
      s("Matplotlib", "matplotlib"),
      s("Tensor", "tensorflow"),
    ],
  },
  {
    title: "Robotics Tools",
    items: [s("ROS2", "ros2")],
  },
  {
    title: "Operating Systems",
    items: [
      s("Ubuntu", "ubuntu"),
      s("Debian", "debian"),
      s("Windows", "windows"),
    ],
  },
  {
    title: "Cloud and Database",
    items: [s("AWS", "aws"), s("Azure", "azure"), s("SQL", "sql")],
  },
]

export interface Experience {
  title: string
  subtitle: string
  date: string
  bullets: string[]
  tags: string[]
}

export const experiences: Experience[] = [
  {
    title: "Research Assistant",
    subtitle: "HAR CSL, Faculty of Computer Science, UI",
    date: "Jul 2026 - Now",
    bullets: [
      "Researching video to IMU generation at HAR CSL",
      "Re-implementing the VirtualIMU baseline on UP-Fall",
      "Extending pose extraction to multiple UP-Fall sensor locations",
      "Designing experiments on landmark placement and IMU accuracy",
    ],
    tags: ["Video to IMU", "UP-Fall", "Pose Extraction"],
  },
  {
    title: "Full Stack Developer",
    subtitle: "Freelance",
    date: "Jun 2026 - Oct 2026",
    bullets: [
      "Built a community app in Flutter and Firebase with role-based access",
      "Delivered a family tree, events, payments, and a social feed",
      "Secured Firestore with hardened rules and App Check",
    ],
    tags: ["Flutter", "Firebase"],
  },
  {
    title: "Staff of AI",
    subtitle: "Autonomous Marine Vehicle",
    date: "Jan 2023 - Aug 2024",
    bullets: [
      "Created a GUI for ROV control",
      "Collected datasets and performed labeling",
      "Added programs for ROV features in ROS2",
      "Taught Python programming to new staff members",
    ],
    tags: ["ROS2", "Python", "Dataset Labeling"],
  },
  {
    title: "Teaching Assistant",
    subtitle: "Introduction to Programming Foundation 2",
    date: "Jan 2024 - May 2024",
    bullets: [
      "Created questions for a Lab using the Java programming language",
      "Reviewed and corrected Lab assignments and programming tasks",
    ],
    tags: ["Java"],
  },
  {
    title: "Teaching Assistant",
    subtitle: "Introduction to Programming Foundation 1",
    date: "Aug 2023 - Dec 2023",
    bullets: [
      "Created questions for a Lab using the Python programming language",
      "Reviewed and corrected Lab assignments and programming tasks",
      "Provided assistance for exams",
    ],
    tags: ["Python"],
  },
  {
    title: "SoftEng Academy Liaison Officer",
    subtitle: "COMPFEST 2023",
    date: "Mar 2023 - Sep 2023",
    bullets: [
      "Informed mentors and mentees about information related to Academy COMPFEST",
      "Scheduled and supervised regular meetings",
    ],
    tags: [],
  },
]
