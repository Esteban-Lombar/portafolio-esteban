import { motion } from "framer-motion";

const experiences = [
  {
    title: "Desarrollador Full Stack Independiente",
    location: "Cali, Colombia",
    period: "Enero 2024 – Actualidad",
    points: [
      "Soporte técnico de hardware y software para usuarios internos.",
      "Mantenimiento y configuración de computadores, impresoras y redes.",
      "Implementación y soporte de soluciones de facturación electrónica.",
      "Administración y actualización de sitios web corporativos.",
      "Instalación y configuración de sistemas operativos y aplicaciones.",
      "Diagnóstico y resolución de incidencias tecnológicas.",
    ],
  },
  {
    title: "Especialista en Soluciones de Software",
    location: "Cali, Colombia",
    period: "Enero 2025 - Febrero 2026",
    points: [
      "Diseño e implementación de sistemas POS y plataformas comerciales.",
      "Desarrollo de APIs REST y aplicaciones web empresariales.",
      "Integración de bases de datos MongoDB y MySQL.",
      "Despliegue de aplicaciones en AWS y Vercel con control de versiones en Git/GitHub.",
      "Trabajo con clientes para definir requerimientos y entregar soluciones completas.",
    ],
  },
];

const certifications = [
  "Scrum Master Professional Certificate (SMPC)",
  "React • Angular • Node.js • Express • MongoDB • MySQL • Git • GitHub • AWS • Vercel",
  "Linux",
  "Reparación y Mantenimiento de Equipos de Cómputo",
  "Desarrollo de Software",
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#0d1117] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-violet-400 mb-3">Experiencia</p>
          <h3 className="text-3xl sm:text-4xl font-bold">Experiencia profesional</h3>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Proyectos y roles clave que reflejan mi trabajo como desarrollador full stack e ingeniero de sistemas.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {experiences.map((experience) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.25)]"
            >
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-semibold">{experience.title}</h4>
                <p className="text-gray-400">{experience.location}</p>
                <p className="text-sm text-gray-500">{experience.period}</p>
                <ul className="mt-6 space-y-3 text-gray-300 text-sm leading-relaxed list-disc list-inside">
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-12 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.25)]"
        >
          <h4 className="text-xl font-semibold mb-4">Educación y certificaciones</h4>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-[#0b1220] p-5 border border-white/10">
              <p className="text-sm uppercase tracking-[0.25em] text-violet-300">Ingeniería</p>
              <p className="mt-3 text-white font-semibold">Ingeniería de Sistemas</p>
              <p className="text-gray-400 mt-2">Universidad Católica Lumen Gentium</p>
              <p className="text-gray-400">Último semestre (Finalización prevista: 2026)</p>
            </div>
            <div className="rounded-3xl bg-[#0b1220] p-5 border border-white/10">
              <p className="text-sm uppercase tracking-[0.25em] text-violet-300">Certificaciones</p>
              <ul className="mt-3 space-y-2 text-gray-300 text-sm leading-relaxed list-disc list-inside">
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
