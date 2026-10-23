// thoda zada ts ho gya idhar
export enum SkillNames {
  PYTHON = "python",
  C = "c",
  CPP = "cpp",
  JAVA = "java",
  SQL = "sql",
  MACHINE_LEARNING = "machine-learning",
  NLP = "nlp",
  DATA_ANALYSIS = "data-analysis",
  STATISTICAL_ANALYSIS = "statistical-analysis",
  DATA_VISUALIZATION = "data-visualization",
  PANDAS = "pandas",
  NUMPY = "numpy",
  PLOTLY = "plotly",
  STREAMLIT = "streamlit",
  FLASK = "flask",
  FASTAPI = "fastapi",
  REST_APIS = "rest-apis",
  HTML = "html",
  CSS = "css",
  JAVASCRIPT = "javascript",
  GIT = "git",
  JUPYTER = "jupyter",
  EXCEL = "excel",
  TABLEAU = "tableau",
  POWER_BI = "power-bi",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
  /** Optional local artwork for the 3D key; falls back to icon. */
  keyboardIcon?: string;
  /** Plastic color of the 3D keycap; independent of the HTML brand accent. */
  keyboardColor?: string;
  /** Browser KeyboardEvent.code, e.g. KeyJ. Defaults to the displayed key order. */
  shortcut?: string;
};
export const createSkillIcon = (label: string) => {
  const initials = label.split(/[\s&+-]+/).filter(Boolean).map((word) => word[0]).join("").slice(0, 3).toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#fff"/><text x="32" y="42" text-anchor="middle" font-family="Arial,sans-serif" font-size="30" font-weight="700" fill="#222">${initials}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "Programming language",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    keyboardColor: "#3776ab",
  },
  [SkillNames.C]: {
    id: 2,
    name: "c",
    label: "C",
    shortDescription: "Programming language",
    color: "#659ad2",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    keyboardColor: "#659ad2",
  },
  [SkillNames.CPP]: {
    id: 3,
    name: "cpp",
    label: "C++",
    shortDescription: "Programming language",
    color: "#00599c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    keyboardColor: "#00599c",
  },
  [SkillNames.JAVA]: {
    id: 4,
    name: "java",
    label: "Java",
    shortDescription: "Programming language",
    color: "#e76f00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    keyboardColor: "#e76f00",
  },
  [SkillNames.SQL]: {
    id: 5,
    name: "sql",
    label: "SQL",
    shortDescription: "Query language for relational data",
    color: "#4479a1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    keyboardColor: "#4479a1",
  },
  [SkillNames.MACHINE_LEARNING]: {
    id: 6,
    name: "machine-learning",
    label: "Machine Learning",
    shortDescription: "Machine learning",
    color: "#f7931e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
    keyboardColor: "#f7931e",
  },
  [SkillNames.NLP]: {
    id: 7,
    name: "nlp",
    label: "NLP",
    shortDescription: "Natural language processing",
    color: "#6a8caf",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    keyboardColor: "#6a8caf",
  },
  [SkillNames.DATA_ANALYSIS]: {
    id: 8,
    name: "data-analysis",
    label: "Data Analysis",
    shortDescription: "Data analysis",
    color: "#150458",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    keyboardColor: "#150458",
  },
  [SkillNames.STATISTICAL_ANALYSIS]: {
    id: 9,
    name: "statistical-analysis",
    label: "Statistical Analysis",
    shortDescription: "Statistical analysis",
    color: "#276dc3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    keyboardColor: "#276dc3",
  },
  [SkillNames.DATA_VISUALIZATION]: {
    id: 10,
    name: "data-visualization",
    label: "Data Visualization",
    shortDescription: "Data visualization",
    color: "#3f4f75",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg",
    keyboardColor: "#3f4f75",
  },
  [SkillNames.PANDAS]: {
    id: 11,
    name: "pandas",
    label: "Pandas",
    shortDescription: "Python data analysis library",
    color: "#150458",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    keyboardColor: "#150458",
  },
  [SkillNames.NUMPY]: {
    id: 12,
    name: "numpy",
    label: "NumPy",
    shortDescription: "Python numerical computing library",
    color: "#4d77cf",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    keyboardColor: "#4d77cf",
  },
  [SkillNames.PLOTLY]: {
    id: 13,
    name: "plotly",
    label: "Plotly",
    shortDescription: "Data visualization library",
    color: "#3f4f75",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg",
    keyboardColor: "#3f4f75",
  },
  [SkillNames.STREAMLIT]: {
    id: 14,
    name: "streamlit",
    label: "Streamlit",
    shortDescription: "Python app framework",
    color: "#ff4b4b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg",
    keyboardColor: "#ff4b4b",
  },
  [SkillNames.FLASK]: {
    id: 15,
    name: "flask",
    label: "Flask",
    shortDescription: "Python web framework",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    keyboardColor: "#343638",
  },
  [SkillNames.FASTAPI]: {
    id: 16,
    name: "fastapi",
    label: "FastAPI",
    shortDescription: "Python API framework",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    keyboardColor: "#009688",
  },
  [SkillNames.REST_APIS]: {
    id: 17,
    name: "rest-apis",
    label: "REST APIs",
    shortDescription: "REST API development",
    color: "#ff6c37",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    keyboardColor: "#ff6c37",
  },
  [SkillNames.HTML]: {
    id: 18,
    name: "html",
    label: "HTML",
    shortDescription: "Markup language",
    color: "#e34f26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    keyboardColor: "#e34f26",
  },
  [SkillNames.CSS]: {
    id: 19,
    name: "css",
    label: "CSS",
    shortDescription: "Style sheet language",
    color: "#1572b6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    keyboardColor: "#1572b6",
  },
  [SkillNames.JAVASCRIPT]: {
    id: 20,
    name: "javascript",
    label: "JavaScript",
    shortDescription: "Programming language",
    color: "#f7df1e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    keyboardColor: "#f7df1e",
  },
  [SkillNames.GIT]: {
    id: 21,
    name: "git",
    label: "Git",
    shortDescription: "Version control system",
    color: "#f05032",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    keyboardColor: "#f05032",
  },
  [SkillNames.JUPYTER]: {
    id: 22,
    name: "jupyter",
    label: "Jupyter",
    shortDescription: "Interactive computing environment",
    color: "#f37626",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    keyboardColor: "#f37626",
  },
  [SkillNames.EXCEL]: {
    id: 23,
    name: "excel",
    label: "Excel",
    shortDescription: "Spreadsheet analysis",
    color: "#217346",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    keyboardColor: "#217346",
  },
  [SkillNames.TABLEAU]: {
    id: 24,
    name: "tableau",
    label: "Tableau",
    shortDescription: "Data visualization platform",
    color: "#1f4e79",
    icon: createSkillIcon("Tableau"),
    keyboardColor: "#1f4e79",
  },
  [SkillNames.POWER_BI]: {
    id: 25,
    name: "power-bi",
    label: "Power BI",
    shortDescription: "Business intelligence and reporting",
    color: "#f2c811",
    icon: createSkillIcon("Power BI"),
    keyboardColor: "#f2c811",
  },
};

export type Experience = {
  id: number;
  startDate?: string;
  endDate?: string;
  title: string;
  company?: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    title: "AI Research Intern",
    description: [
      "Working on Generative AI and Data Science.",
    ],
    skills: [],
  },
  {
    id: 2,
    title: "AI Intern",
    description: [
      "Previous AI internship involving deployed AI-powered applications.",
    ],
    skills: [],
  },
  {
    id: 3,
    title: "Head of CodeGeeks Society",
    company: "GTB4CEC",
    description: ["Head of the CodeGeeks Society at GTB4CEC."],
    skills: [],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "B.Tech in Computer Science (Data Science)",
    institution: "GTB4CEC",
  },
  {
    id: 2,
    degree: "BS in Data Science",
    institution: "IIT Madras",
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
