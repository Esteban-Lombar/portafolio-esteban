import { motion } from "framer-motion";

const projects = [
  {
    title: "Kickslab App (MERN)",
    description:
      "Catálogo web interactivo de zapatillas con integración a WhatsApp Business. Interfaz responsiva, filtros dinámicos y experiencia optimizada para mobile.",
    image: "/assets/kixlab-portafolio.png",
    demo: "https://kixlab.vercel.app/",
    code: null,
    tags: ["MERN", "E-commerce", "WhatsApp"],
  },
  {
    title: "Trailer Burguer Menu",
    description:
      "Menú digital con diseño moderno y experiencia móvil optimizada, ideal para restaurantes y servicios de comida rápida.",
    image: "/assets/menuTrailerBurguer.png",
    demo: "https://trailer-burguer-menu-1.vercel.app/",
    code: null,
    tags: ["Web", "Restaurantes", "UX"],
  },
  {
    title: "Catálogo Cosméticos",
    description:
      "Catálogo online para productos de belleza con navegación ágil, presentación de productos y enfoque en conversión de clientes.",
    image: "/assets/cosmeticosvE.png",
    demo: "https://catalogo-cosmeticos-1.vercel.app/",
    code: null,
    tags: ["E-commerce", "Cosméticos", "Diseño"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#060814] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-violet-400 mb-2">Proyectos</p>
            <h3 className="text-3xl font-bold">Casos recientes</h3>
          </div>
          <p className="max-w-xl text-gray-400 text-sm sm:text-base">
            Proyectos que destacan mi capacidad para cerrar productos completos, desde el diseño de la interfaz hasta la implementación y despliegue.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group rounded-[2rem] overflow-hidden border border-white/10 bg-[#0d1117] shadow-[0_30px_80px_rgba(15,23,42,0.35)]"
            >
              <div className="relative overflow-hidden bg-black h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-violet-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-semibold">{project.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-violet-500 px-4 py-2 text-sm text-violet-200 hover:bg-violet-500/10 transition"
                  >
                    Ver demo
                  </a>
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-gray-700 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/30 transition"
                    >
                      Código
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
