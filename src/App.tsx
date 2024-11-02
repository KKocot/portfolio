import {
  Github,
  Linkedin,
  FileText,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

export function App() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [typedText, setTypedText] = useState("");
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
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
      company: "BlockchainWares Software Sp. z o.o.",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("k.kocot@bard-dev.com");
    setIsEmailCopied(true);
    setTimeout(() => setIsEmailCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.header className="mb-16" variants={itemVariants}>
          <div className="flex justify-between">
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              Krzysztof Kocot
            </h1>
            <div className="flex gap-2">
              <ReactCountryFlag
                countryCode="gb"
                className="cursor-pointer"
                svg
                title="English"
                onClick={() => changeLanguage("en")}
              />
              <ReactCountryFlag
                countryCode="pl"
                className="cursor-pointer"
                svg
                title="Polski"
                onClick={() => changeLanguage("pl")}
              />
            </div>
          </div>

          <div className="flex justify-between">
            <motion.p
              className="text-2xl text-zinc-300 mb-8 h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {typedText}
            </motion.p>
            <div className="flex justify-center space-x-6">
              <motion.a
                href="https://github.com/KKocot"
                className="text-zinc-300 hover:text-teal-400 transition-colors duration-200"
                whileHover={{ y: -5, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
                title="GitHub"
              >
                <Github size={36} />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/krzysztof-kocot-b3043a220/"
                className="text-zinc-300 hover:text-teal-400 transition-colors duration-200"
                whileHover={{ y: -5, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
                title="LinkedIn"
              >
                <Linkedin size={36} />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href={
                  i18n.language === "pl"
                    ? "/kkocotcvpl.pdf"
                    : "/kkocotcveng.pdf"
                }
                className="text-zinc-300 hover:text-teal-400 transition-colors duration-200"
                whileHover={{ y: -5, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
                title={t("general.download")}
              >
                <FileText size={36} />
                <span className="sr-only">{t("general.download")}</span>
              </motion.a>
            </div>
          </div>
        </motion.header>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-blue-300 mb-4">
            {t("about.title")}
          </h2>
          <div className="perspective-1000">
            <p className="text-xl text-slate-200">{t("about.content")}</p>
          </div>
        </section>

        <motion.section className="mb-20" variants={itemVariants}>
          <h2 className="text-3xl font-semibold text-blue-300 mb-4">
            {t("projects.title")}
          </h2>
          <div className="gap-2 grid sm:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="h-full flex bg-blue-800 bg-opacity-50 shadow-xl rounded-lg overflow-hidden transition-all duration-300"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="p-8 flex flex-col justify-between w-full">
                  <h3 className="text-2xl font-semibold text-slate-200 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-blue-300 mb-6">{project.description}</p>
                  <div className="flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${project.color}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: hoveredProject === index ? "100%" : 0 }}
                      transition={{ duration: 0.3 }}
                      className="h-0.5 bg-blue-400 mb-2"
                    />
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        className="inline-flex items-center text-blue-300 hover:text-teal-400 transition-colors duration-200 font-semibold"
                      >
                        {t("projects.preview")}
                        <ExternalLink size={20} className="ml-2" />
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        className="inline-flex items-center text-blue-300 hover:text-teal-400 transition-colors duration-200 font-semibold"
                      >
                        {t("projects.code")}
                        <Github size={20} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.section className="mb-20" variants={itemVariants}>
          <h2 className="text-3xl font-semibold text-blue-300 mb-4">
            {t("experience.title")}
          </h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                className="bg-blue-800 bg-opacity-50 shadow-xl rounded-lg overflow-hidden transition-all duration-300"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-slate-200 mb-4">
                    {job.title}
                  </h3>
                  <p className="text-blue-300 mb-6">{job.description}</p>
                  <div className="flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${job.color}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: hoveredProject === index ? "100%" : 0 }}
                      transition={{ duration: 0.3 }}
                      className="h-0.5 bg-blue-400 mb-2"
                    />
                    <div className="flex gap-4">
                      <p className="text-blue-300">{job.date}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.footer variants={itemVariants}>
          <h2 className="text-3xl font-semibold text-blue-300 mb-4">
            {t("contact.title")}
          </h2>
          <div className="flex items-center justify-between flex-col sm:flex-row gap-3">
            <motion.div className="relative" whileHover={{ scale: 1.05 }}>
              <motion.button
                onClick={copyEmail}
                className="flex items-center text-blue-300 hover:text-teal-400 transition-colors duration-200"
              >
                <Mail size={24} className="mr-2" />
                k.kocot@bard-dev.com
              </motion.button>
              <AnimatePresence>
                {isEmailCopied && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-full text-green-400 text-sm"
                  >
                    {t("general.copied")}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.a
              href="tel:+48665011514"
              className="flex items-center text-blue-300 hover:text-teal-400 transition-colors duration-200"
              whileHover={{ x: 5, scale: 1.05 }}
            >
              <Phone size={24} className="mr-1" />
              +48 665 011 514
            </motion.a>
            <motion.a
              className="flex items-center text-blue-300 hover:text-teal-400 transition-colors duration-200"
              whileHover={{ x: 5, scale: 1.05 }}
              target="_blank"
              href="https://www.google.com/maps/place/Katowice/@50.2139585,18.9254101,23477m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716ce2336a1ccd1:0xb9af2a350559fabb!8m2!3d50.2648919!4d19.0237815!16zL20vMGJsZDg?hl=pl-PL&entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
            >
              <MapPin size={24} className="mr-1" />
              {t("contact.localization")}
            </motion.a>
          </div>
        </motion.footer>
      </motion.div>
    </div>
  );
}

export default App;