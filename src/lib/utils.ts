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
        "MongoDB",
        "Tiktalik",
        "Domain BardDev.com",
      ],
      link: "https://conqsite.bard-dev.com",
      github: "https://github.com/KKocot/conqsite",
      color: "bg-red-800 text-red-200",
    },
    {
      title: "Countries",
      description: t("projects.content_2"),
      technologies: ["React", "TypeScript", "SCSS", "Git", "Vercel"],
      link: "https://countries-taupe.vercel.app",
      github: "https://github.com/KKocot/Countries",
      color: "bg-teal-800 text-teal-200",
    },
    {
      title: "Excel-reader",
      description: t("projects.content_3"),
      technologies: [
        "React",
        "Vite",
        "TypeScript",
        "Tailwind CSS",
        "xlsx js",
        "Git",
        "Vercel",
        "Domain BardDev.com",
      ],
      link: "https://excel-reader.bard-dev.com",
      github: "https://github.com/KKocot/excel-reader",
      color: "bg-violet-800 text-violet-200",
    },
    {
      title: "Todo App",
      description: t("projects.content_4"),
      technologies: ["React", "TypeScript", "Tailwind CSS", "Git", "Vercel"],
      link: "https://todo-app-plum.vercel.app",
      github: "https://github.com/KKocot/TodoApp",
      color: "bg-zinc-800 text-zinc-200",
    },
  ];
  const experience = [
    {
      title: "Frontend Developer",
      company: "BlockchainWares Software Sp. z o.o.",
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
      color: "bg-yellow-800 text-yellow-200",
    },
    {
      title: t("experience.role_2"),
      company: "Stowarzyszenie WIOSNA, Akademia Przyszłości",
      description: t("experience.content_2"),
      skills: [
        t("experience.job_skills.learn"),
        t("experience.job_skills.teamwork"),
        t("experience.job_skills.problem_solving"),
        t("experience.job_skills.work_with_kids"),
        t("experience.job_skills.leadership"),
      ],
      date: "01.2023 – " + t("experience.present"),
      color: "bg-rose-800 text-rose-200",
    },
  ];
  const fullText = "Full Stack Developer";

  return { projects, experience, fullText };
}
