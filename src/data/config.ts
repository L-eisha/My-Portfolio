const config = {
  title: "Leisha Choudhary | AI/ML Engineer",
  description: {
    long: "Explore the portfolio of Leisha Choudhary, an AI/ML Engineer, AI Research Intern, and Data Science student. Discover projects in generative AI, machine learning, natural language processing, and interactive web development.",
    short:
      "Portfolio of Leisha Choudhary: AI/ML engineering, AI research, data science, and software projects.",
  },
  keywords: [
    "Leisha Choudhary",
    "portfolio",
    "AI/ML Engineer",
    "AI Research Intern",
    "Data Science",
    "Machine Learning",
    "Generative AI",
    "Natural Language Processing",
    "Python",
    "FastAPI",
    "Streamlit",
  ],
  author: "Leisha Choudhary",
  email: "leishachoudhary121@gmail.com",
  site: "",

  githubUsername: "",
  githubRepo: "",

  get ogImg() {
    return this.site ? `${this.site}/assets/seo/og-image.png` : undefined;
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/leisha-choudhary-22b89a325",
    instagram: "",
    facebook: "",
    github: "https://github.com/L-eisha",
  },
};
export { config };
