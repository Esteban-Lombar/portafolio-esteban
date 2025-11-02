import { motion } from "framer-motion";
import { SiReact, SiNodedotjs, SiMongodb, SiAwsamplify, SiGit, SiTailwindcss, SiJavascript, SiFigma } from "react-icons/si";

const skills = [
  { Icon: SiReact, name: "React", color: "from-cyan-400 to-blue-500" },
  { Icon: SiNodedotjs, name: "Node.js", color: "from-green-400 to-emerald-500" },
  { Icon: SiMongodb, name: "MongoDB", color: "from-emerald-500 to-green-400" },
  { Icon: SiAwsamplify, name: "AWS", color: "from-orange-400 to-yellow-500" },
  { Icon: SiGit, name: "Git", color: "from-red-400 to-orange-500" },
  { Icon: SiTailwindcss, name: "Tailwind CSS", color: "from-sky-400 to-cyan-400" },
  { Icon: SiJavascript, name: "JavaScript", color: "from-yellow-300 to-orange-400" },
  { Icon: SiFigma, name: "Figma", color: "from-pink-400 to-purple-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Título con animación */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-300"
        >
          Habilidades Técnicas
        </motion.h2>

        {/* Grid de habilidades */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${s.color} bg-opacity-10 border border-white/10 hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:scale-105 transition-transform duration-300 flex flex-col items-center`}
            >
              <s.Icon size={48} className="mb-3 text-white drop-shadow-md" />
              <div className="text-sm font-medium">{s.name}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Texto adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 text-gray-400 leading-relaxed text-sm sm:text-base"
        >
          <p><strong className="text-white">Metodologías:</strong> Scrum Master, Kanban, Waterfall</p>
          <p><strong className="text-white">Otras habilidades:</strong> ERP, CRM, BI, SQL/NoSQL, control de versiones, inglés intermedio</p>
        </motion.div>
      </div>
    </section>
  );
}
