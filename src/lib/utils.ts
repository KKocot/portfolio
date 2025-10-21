import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useTranslation } from "react-i18next";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function data() {
  const { t } = useTranslation();
  const projects = [
    {
      title: "Conqsite",
      description: t("projects.content_1"),
      technologies: [
        "Next js",
        "TypeScript",
        "Tailwind CSS",
        "Git",
        "Cloudflare",
        "MongoDB",
        "Tiktalik",
        "Domain bard-dev.com",
        "Docker",
        "end-to-end project",
      ],
      link: "https://conqsite.bard-dev.com",
      github: "https://github.com/KKocot/conqsite",
      color: "bg-amber-700 text-amber-100",
    },

    {
      title: "Universal Backend",
      description: t("projects.content_2"),
      technologies: [
        "Express",
        "TypeScript",
        "MongoDB",
        "Git",
        "Docker",
        "Cloudflare",
        "Tiktalik",
        "REST API",
        "Domain bard-dev.com",
      ],
      link: "https://countries-taupe.vercel.app",
      color: "bg-green-700 text-green-200",
    },
    {
      title: "Hive Blog - Denser",
      description: t("projects.content_6"),
      technologies: [
        "React",
        "TypeScript",
        "Next js",
        "Tailwind CSS",
        "Shadcn UI",
        "Git",
        "Blockchain Hive",
      ],
      link: "https://blog.openhive.network",
      github: "https://gitlab.syncad.com/hive/denser",
      color: "bg-fuchsia-800 text-fuchsia-50",
    },
    {
      title: "Excel-reader",
      description: t("projects.content_3"),
      technologies: [
        "React",
        "Vite",
        "TypeScript",
        "Tailwind CSS",
        "Cloudflare",
        "Shadcn UI",
        "xlsx js",
        "Git",
        "Vercel",
        "Domain bard-dev.com",
      ],
      link: "https://universal-backend.bard-dev.com/",
      color: "bg-violet-700 text-violet-200",
    },
    {
      title: "Flashcards",
      description: t("projects.content_4"),
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Cloudflare",
        "Tailwind CSS",
        "Shadcn UI",
        "Git",
        "Vercel",
        "Domain bard-dev.com",
      ],
      link: "https://flashcards.bard-dev.com",
      github: "https://github.com/KKocot/Flashcards",
      color: "bg-zinc-700 text-zinc-200",
    },
    {
      title: "Opal Stasiak Landing Page",
      description: t("projects.content_5"),
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Cloudflare",
        "Tailwind CSS",
        "Shadcn UI",
        "Git",
        "Vercel",
        "Domain bard-dev.com",
        "Figma",
      ],
      link: "https://opal-stasiak.bard-dev.com/",
      github: "https://github.com/KKocot/coal-landing-page",
      color: "bg-rose-700 text-rose-200",
    },
  ];
  const experience = [
    {
      title: "Full Stack Developer",
      company: "Freelance - Krzysztof Kocot Bard Developer 👨‍💻",
      description: t("experience.content_3"),
      skills: [
        "Next js",
        "TypeScript",
        "Tailwind CSS",
        t("experience.job_skills.end_to_end_project_development"),
        t("experience.job_skills.language"),
        t("experience.job_skills.learn"),
        t("experience.job_skills.problem_solving"),
        t("experience.job_skills.creativity"),
        t("experience.job_skills.work_with_clients"),
        t("experience.job_skills.backend_structures"),
        t("experience.job_skills.app_deployment"),
      ],
      date: "2024 – " + t("experience.present"),
      color: "bg-green-700 text-green-200",
    },
    {
      title: "Frontend Developer",
      company: "BlockchainWares Software Sp. z o.o. ⛓️‍💥",
      description: t("experience.content_1"),
      skills: [
        "Next js",
        "TypeScript",
        "Tailwind CSS",
        "Blockchain",
        t("experience.job_skills.language"),
        t("experience.job_skills.learn"),
        t("experience.job_skills.teamwork"),
        t("experience.job_skills.problem_solving"),
      ],
      date: "04.2023 – " + t("experience.present"),
      color: "bg-violet-700 text-violet-200",
    },
    {
      title: t("experience.role_2"),
      company: "Stowarzyszenie WIOSNA, Akademia Przyszłości 👦",
      description: t("experience.content_2"),
      skills: [
        t("experience.job_skills.learn"),
        t("experience.job_skills.teamwork"),
        t("experience.job_skills.problem_solving"),
        t("experience.job_skills.work_with_kids"),
        t("experience.job_skills.leadership"),
      ],
      date: "01.2023 – 06.2025",
      color: "bg-rose-700 text-rose-200",
    },
  ];
  const fullText = "Full Stack Developer";

  return { projects, experience, fullText };
}
