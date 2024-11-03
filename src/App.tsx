import {
  Github,
  Linkedin,
  FileText,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
import { data } from "./lib/utils";

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

export function App() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [typedText, setTypedText] = useState("");
  const { t, i18n } = useTranslation();
  const { projects, experience, fullText } = data();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
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
                    ? "/kkocot-cv-pl.pdf"
                    : "/kkocot-cv-eng.pdf"
                }
                className="text-zinc-300 hover:text-teal-400 transition-colors duration-200"
                whileHover={{ y: -5, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
                title="CV"
                download
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
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-200 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-blue-300 mb-6">{project.description}</p>
                  </div>
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
                  <h3 className="text-2xl font-semibold text-slate-200 mb-1">
                    {job.title}
                  </h3>
                  <h2 className="text-lg font-semibold text-blue-300 mb-4">
                    {job.company}
                  </h2>
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
              <motion.a
                href="mailto:k.kocot@bard-dev.com"
                className="flex items-center text-blue-300 hover:text-teal-400 transition-colors duration-200"
              >
                <Mail size={24} className="mr-2" />
                k.kocot@bard-dev.com
              </motion.a>
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
