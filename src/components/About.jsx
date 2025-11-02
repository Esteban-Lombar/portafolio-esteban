import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16">
      <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once:true }} className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Acerca de mi</h3>
        <p className="text-gray-300">
          Soy Esteban Lombardo Castaño — estudiante de Ingeniería de Sistemas (9° semestre). Manejo el stack MERN (React, Node.js, MongoDB, Express), despliegues en AWS/Vercel, y metodologías ágiles (Scrum, Kanban).
          Me destaco por disciplina, liderazgo y experiencia en atención al cliente y administración. Busco integrarme a equipos donde aprender y aportar valor.
        </p>
      </motion.div>
    </section>
  );
}
