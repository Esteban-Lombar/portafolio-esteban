import { motion } from "framer-motion";
import { SiReact, SiNodedotjs, SiMongodb, SiAwsamplify, SiGit, SiTailwindcss, SiJavascript, SiFigma, SiAngular, SiHtml5, SiCss3, SiPython, SiGithub } from "react-icons/si";

const skills = [
  { Icon: SiReact, name: "React", color: "from-cyan-400 to-blue-500", level: 92 },
  { Icon: SiAngular, name: "Angular", color: "from-red-500 to-orange-400", level: 84 },
  { Icon: SiJavascript, name: "JavaScript", color: "from-yellow-300 to-orange-400", level: 94 },
  { Icon: SiHtml5, name: "HTML5", color: "from-orange-400 to-red-500", level: 96 },
  { Icon: SiCss3, name: "CSS3", color: "from-sky-400 to-blue-500", level: 92 },
  { Icon: SiTailwindcss, name: "Tailwind CSS", color: "from-sky-400 to-cyan-400", level: 88 },
  { Icon: SiNodedotjs, name: "Node.js", color: "from-green-400 to-emerald-500", level: 90 },
  { Icon: SiMongodb, name: "MongoDB", color: "from-emerald-500 to-green-400", level: 86 },
  { Icon: SiPython, name: "Python", color: "from-blue-500 to-indigo-500", level: 80 },
  { Icon: SiAwsamplify, name: "AWS", color: "from-orange-400 to-yellow-500", level: 78 },
  { Icon: SiGithub, name: "GitHub", color: "from-gray-400 to-white", level: 92 },
  { Icon: SiGit, name: "Git", color: "from-red-400 to-orange-500", level: 90 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-300"
          >
            Habilidades técnicas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
          >
            Un conjunto de tecnologías que utilizo para construir aplicaciones web rápidas, escalables y con un diseño moderno.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-5 md:grid-cols-2"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center gap-4">
                <skill.Icon size={36} className="text-white" />
                <div>
                  <h4 className="text-lg font-semibold">{skill.name}</h4>
                  <p className="text-sm text-gray-400">Nivel: {skill.level}%</p>
                </div>
              </div>
              <div className="mt-5 rounded-full bg-white/10 h-3 overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-gray-400 leading-relaxed text-sm sm:text-base"
        >
          <p><strong className="text-white">Metodologías más demandadas:</strong> Scrum Master, Kanban y entrega continua.</p>
          <p className="mt-3"><strong className="text-white">Tecnologías clave:</strong> React, Angular, JavaScript, HTML5, CSS3, Tailwind, Node.js, Python.</p>
          <p className="mt-3"><strong className="text-white">Bases de datos y nube:</strong> MongoDB, MySQL, PostgreSQL, AWS, Vercel y soluciones cloud hibridas.</p>
        </motion.div>
      </div>
    </section>
  );
}
