import { TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { ReactNode } from "react";

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const tech = (title: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <span className="text-[10px] font-bold">{title}</span>,
});

const TECHNOLOGIES = {
  python: tech("Python"),
  fastapi: tech("FastAPI"),
  bm25: tech("BM25"),
  llm: tech("LLM"),
  streamlit: tech("Streamlit"),
  nvidia: tech("NVIDIA NIM"),
  nlp: tech("NLP"),
  plotly: tech("Plotly"),
  html: tech("HTML"),
  css: tech("CSS"),
  javascript: tech("JavaScript"),
  react: tech("React"),
  vite: tech("Vite"),
  three: tech("Three.js"),
  next: tech("Next.js"),
  redis: tech("Redis"),
  excel: tech("Excel"),
};

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => (
  <div className="my-3 mb-8 flex flex-col items-center justify-start gap-3 md:flex-row">
    {live && (
      <Link
        className="flex gap-2 font-mono underline"
        rel="noopener"
        target="_blank"
        href={live}
      >
        <Button variant="default" size="sm">
          Visit Website
          <ArrowUpRight className="ml-3 h-5 w-5" />
        </Button>
      </Link>
    )}
    {repo && (
      <Link
        className="flex gap-2 font-mono underline"
        rel="noopener"
        target="_blank"
        href={repo}
      >
        <Button variant="default" size="sm">
          GitHub
          <ArrowUpRight className="ml-3 h-5 w-5" />
        </Button>
      </Link>
    )}
  </div>
);

export type Project = {
  id: string;
  category: string;
  title: string;
  src?: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: ReactNode;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: "shl-assessment-recommender",
    category: "Generative AI",
    title: "SHL Assessment Recommender",
    screenshots: [],
    skills: {
      frontend: [],
      backend: [
        TECHNOLOGIES.python,
        TECHNOLOGIES.fastapi,
        TECHNOLOGIES.bm25,
        TECHNOLOGIES.llm,
      ],
    },
    github: "https://github.com/L-eisha/shl-assessment-recommender",
    content: (
      <div>
        <TypographyP className="text-center font-mono text-2xl">
          A conversational recommendation API for SHL assessments.
        </TypographyP>
        <TypographyP className="font-mono">
          Built with FastAPI, BM25 retrieval, and an LLM, using a catalog of 377
          SHL products with URL validation.
        </TypographyP>
        <ProjectsLinks repo="https://github.com/L-eisha/shl-assessment-recommender" />
      </div>
    ),
  },
  {
    id: "ai-chatbot",
    category: "Generative AI",
    title: "AI Chatbot",
    screenshots: [],
    skills: {
      frontend: [TECHNOLOGIES.streamlit],
      backend: [TECHNOLOGIES.python, TECHNOLOGIES.nvidia, TECHNOLOGIES.llm],
    },
    github: "https://github.com/L-eisha/ai-chatbot",
    content: (
      <div>
        <TypographyP className="text-center font-mono text-2xl">
          A Streamlit chatbot powered by NVIDIA NIM.
        </TypographyP>
        <TypographyP className="font-mono">
          Supports multiple LLMs, streaming responses, customizable prompts, and
          chat export.
        </TypographyP>
        <ProjectsLinks repo="https://github.com/L-eisha/ai-chatbot" />
      </div>
    ),
  },
  {
    id: "personality-predictor",
    category: "NLP and data visualization",
    title: "Personality Predictor",
    screenshots: [],
    skills: {
      frontend: [TECHNOLOGIES.streamlit, TECHNOLOGIES.plotly],
      backend: [TECHNOLOGIES.python, TECHNOLOGIES.nlp],
    },
    github: "https://github.com/L-eisha/personality_predictor",
    content: (
      <div>
        <TypographyP className="text-center font-mono text-2xl">
          Resume-based Big Five personality analysis.
        </TypographyP>
        <TypographyP className="font-mono">
          Uses NLP and weighted keyword scoring, with Plotly charts and career
          recommendations.
        </TypographyP>
        <ProjectsLinks repo="https://github.com/L-eisha/personality_predictor" />
      </div>
    ),
  },
  {
    id: "be-bright-1",
    category: "Web development",
    title: "Be Bright 1 Website",
    screenshots: [],
    skills: {
      frontend: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.javascript],
      backend: [],
    },
    live: "https://www.bebright1.com/",
    content: (
      <div>
        <TypographyP className="text-center font-mono text-2xl">
          A responsive company website.
        </TypographyP>
        <TypographyP className="font-mono">
          Includes SEO, geo-targeting for seven countries, and deployment.
        </TypographyP>
        <ProjectsLinks live="https://www.bebright1.com/" />
      </div>
    ),
  },
  {
    id: "ai-roadmap",
    category: "Interactive 3D",
    title: "AI Roadmap Visualizer",
    screenshots: [],
    skills: {
      frontend: [TECHNOLOGIES.react, TECHNOLOGIES.vite],
      backend: [TECHNOLOGIES.three],
    },
    github: "https://github.com/L-eisha/AI-ROADMAP",
    content: (
      <div>
        <TypographyP className="text-center font-mono text-2xl">
          An interactive 3D AI learning roadmap.
        </TypographyP>
        <TypographyP className="font-mono">
          Built with React, Vite, and Three.js.
        </TypographyP>
        <ProjectsLinks repo="https://github.com/L-eisha/AI-ROADMAP" />
      </div>
    ),
  },
  {
    id: "zensky-ai-website",
    category: "Web development",
    title: "ZenSky AI Website",
    screenshots: [],
    skills: {
      frontend: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.javascript],
      backend: [TECHNOLOGIES.three],
    },
    github: "https://github.com/L-eisha/zensky-ai-website",
    content: (
      <div>
        <TypographyP className="text-center font-mono text-2xl">
          An animated landing page for an AI company.
        </TypographyP>
        <TypographyP className="font-mono">
          Features a Three.js neural network and responsive design.
        </TypographyP>
        <ProjectsLinks repo="https://github.com/L-eisha/zensky-ai-website" />
      </div>
    ),
  },
  {
    id: "return-automation-agent",
    category: "Automation",
    title: "Return Automation Agent",
    screenshots: [],
    skills: {
      frontend: [],
      backend: [TECHNOLOGIES.python, TECHNOLOGIES.excel],
    },
    github: "https://github.com/L-eisha/return-automation-agent",
    content: (
      <div>
        <TypographyP className="text-center font-mono text-2xl">
          Python browser automation for return tasks.
        </TypographyP>
        <TypographyP className="font-mono">
          Processes return tasks and records outcomes in Excel.
        </TypographyP>
        <ProjectsLinks repo="https://github.com/L-eisha/return-automation-agent" />
      </div>
    ),
  },
  {
    id: "codegeeks-leaderboard",
    category: "Web application",
    title: "CodeGeeks Leaderboard",
    screenshots: [],
    skills: {
      frontend: [TECHNOLOGIES.next],
      backend: [TECHNOLOGIES.redis],
    },
    github: "https://github.com/L-eisha/CodeGeeks---Leaderboard-",
    content: (
      <div>
        <TypographyP className="text-center font-mono text-2xl">
          A searchable leaderboard with team filters.
        </TypographyP>
        <TypographyP className="font-mono">
          Built with Next.js, with scores backed by Redis.
        </TypographyP>
        <ProjectsLinks repo="https://github.com/L-eisha/CodeGeeks---Leaderboard-" />
      </div>
    ),
  },
  {
    id: "gender-age-prediction",
    category: "Machine learning",
    title: "Gender & Age Prediction",
    screenshots: [],
    skills: {
      frontend: [],
      backend: [TECHNOLOGIES.python],
    },
    github: "https://github.com/L-eisha/gender-age-prediction",
    content: (
      <div>
        <TypographyP className="text-center font-mono text-2xl">
          A machine-learning gender and age prediction project.
        </TypographyP>
        <ProjectsLinks repo="https://github.com/L-eisha/gender-age-prediction" />
      </div>
    ),
  },
];

export default projects;
