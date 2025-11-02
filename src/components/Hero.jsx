import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-[80vh] flex items-center pt-24 md:pt-32">
      <div className="w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Texto principal */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            ¡Hola! Soy{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-300">
              Esteban Castaño
            </span>
          </h2>

          <p className="mt-4 text-gray-300 max-w-xl">
            Estudiante de Ingeniería de Sistemas (9° semestre). Desarrollador
            MERN, con experiencia en despliegues en la nube y metodologías
            ágiles. Apasionado por código limpio, UX y la disciplina del
            deporte.
          </p>

          <div className="mt-6 flex gap-4">
            <a href="#projects" className="btn-primary">
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="border border-gray-700 px-5 py-2 rounded-xl text-gray-200 hover:bg-white/5 transition"
            >
              Contáctame
            </a>
          </div>

          <div className="mt-6 text-sm text-gray-400">
            <div>📍 Cali, Colombia · Inglés intermedio</div>
            <div>🥋 Ex peleador MMA semiprofesional · Retirado Amante del gym</div>
          </div>
        </motion.div>

        {/* Imagen del héroe */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-96 md:w-80 md:h-[480px] lg:w-96 lg:h-[520px] rounded-2xl overflow-hidden border-4 border-violet-500 shadow-[0_0_25px_rgba(139,92,246,0.5)] bg-gradient-to-b from-[#1e1b4b] to-[#0f172a]">
            <img
              src="/src/imagenes/foto-esteban-castaño-portafolio.jpg"
              alt="Esteban Castaño"
              className="w-full h-full object-contain bg-[#0f172a]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
