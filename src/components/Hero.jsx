import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-[88vh] flex items-center pt-24 md:pt-32">
      <div className="w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Texto principal */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-white/5 px-4 py-2 text-sm text-violet-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-violet-400" />
            Desarrollador MERN · Interfaces modernas · Cloud-ready
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hola, soy {" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-300">
              Esteban Castaño
            </span>
          </h2>

          <p className="mt-6 text-gray-300 max-w-xl leading-relaxed tracking-wide text-lg">
            Estudiante de último semestre de Ingeniería de Sistemas con más de 3 años de experiencia desarrollando soluciones de software para clientes. Experiencia en desarrollo Full Stack con React, Angular, Node.js, JavaScript, Python, MongoDB y MySQL, además de sistemas POS, aplicaciones web, APIs REST y despliegue en la nube.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
            <a href="#projects" className="btn-primary inline-flex items-center justify-center">
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="border border-gray-700 px-5 py-3 rounded-xl text-gray-200 hover:bg-white/5 transition"
            >
              Escríbeme
            </a>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-3 text-sm text-gray-300">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-violet-300">Proyectos</p>
              <p className="mt-2 text-xl font-semibold text-white">+5</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-violet-300">Stack</p>
              <p className="mt-2 text-xl font-semibold text-white">MERN</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-violet-300">Disponibilidad</p>
              <p className="mt-2 text-xl font-semibold text-white">Remoto / híbrido</p>
            </div>
          </div>
        </motion.div>

        {/* Imagen del héroe */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-96 md:w-80 md:h-[480px] lg:w-96 lg:h-[520px] rounded-[2rem] overflow-hidden border border-violet-500/20 shadow-[0_0_35px_rgba(99,102,241,0.35)] bg-gradient-to-b from-[#111827] via-[#0f172a] to-[#090b12]">
            <img
              src="/assets/foto-esteban-castano-portafolio.JPG"
              alt="Esteban Castano"
              className="w-full h-full object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-transparent opacity-90" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
