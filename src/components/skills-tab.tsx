import { data } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

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

const SkillsTab = () => {
  const { t } = useTranslation();
  const { skills } = data();

  const skillCategories = [
    {
      title: t("skills.categories.frontend.title"),
      skills: skills.frontend,
      color: "bg-blue-700 text-blue-100",
      description: t("skills.categories.frontend.description"),
    },
    {
      title: t("skills.categories.backend.title"),
      skills: skills.backend,
      color: "bg-green-700 text-green-100",
      description: t("skills.categories.backend.description"),
    },
    {
      title: t("skills.categories.tools.title"),
      skills: skills.tools,
      color: "bg-purple-700 text-purple-100",
      description: t("skills.categories.tools.description"),
    },
  ];

  return (
    <div>
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.header variants={itemVariants}>
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-teal-400">
            {t("skills.title")}
          </h1>
          <p className="text-xl text-slate-200 mb-8">{t("skills.content")}</p>
        </motion.header>

        <motion.section variants={itemVariants}>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="bg-slate-800 bg-opacity-50 shadow-xl rounded-lg overflow-hidden transition-all duration-300"
                style={{
                  boxShadow: "0 10px 25px -5px rgba(20, 184, 166, 0.3)",
                }}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div className="p-6 flex flex-col h-full justify-start">
                  <h3 className="text-2xl font-semibold text-slate-200 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-slate-300 mb-6 text-sm">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className={`px-3 py-2 rounded-full text-sm font-medium ${category.color} transition-all duration-200`}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          transition: {
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          },
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex-grow" />
                  <motion.div
                    className="mt-4 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      delay: categoryIndex * 0.2,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.div className="mt-12 text-center" variants={itemVariants}>
          <p className="text-slate-300 text-lg">{t("skills.others")}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default SkillsTab;
