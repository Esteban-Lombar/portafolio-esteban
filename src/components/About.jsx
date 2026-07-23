import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-violet-400 mb-4">
              Sobre mí
            </p>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Desarrollo soluciones comerciales con impacto real.
            </h3>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              Soy estudiante de último semestre de Ingeniería de Sistemas con más de 3 años de experiencia desarrollando soluciones de software para clientes. Trabajo en desarrollo Full Stack con React, Angular, Node.js, Express.js, JavaScript y Python, además de diseño e integración de bases de datos MongoDB y MySQL.
            </p>
            <ul className="mt-5 space-y-3 text-gray-300 leading-relaxed text-base sm:text-lg list-disc list-inside">
              <li>Desarrollo de sitios web, plataformas empresariales y sistemas POS para diferentes sectores.</li>
              <li>Despliegue de aplicaciones con Vercel y AWS, y gestión de versiones con Git/GitHub.</li>
              <li>Levantamiento de requerimientos, reuniones con clientes e implementación de metodologías ágiles Scrum.</li>
            </ul>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-violet-300">Servicios</p>
                <p className="mt-3 text-white font-semibold">Desarrollo, despliegue y soporte comercial</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-violet-300">Clientes</p>
                <p className="mt-3 text-white font-semibold">Negocios, comercio y startups</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[2rem] border border-white/10 bg-[#111827]/80 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.25)]"
          >
            <h4 className="text-xl font-semibold text-white mb-4">Mi propuesta de valor</h4>
            <ul className="space-y-4 text-gray-300 text-sm sm:text-base">
              <li>• Desarrollo full stack para web, e-commerce y sistemas POS.</li>
              <li>• Integración de bases de datos relacionales y no relacionales.</li>
              <li>• Despliegues profesionales en AWS, Vercel y entornos cloud.</li>
              <li>• Soporte técnico, implementación y atención al cliente continuo.</li>
            </ul>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/5 border border-white/10 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-violet-300">Experiencia</p>
                <p className="mt-3 text-2xl font-semibold text-white">3+ años</p>
              </div>
              <div className="rounded-3xl bg-white/5 border border-white/10 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-violet-300">Clientes satisfechos</p>
                <p className="mt-3 text-2xl font-semibold text-white">Más de 10</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
