import { motion } from "framer-motion";

const projects = [
  {
    title: "Kickslab App (MERN)",
    description:
      "Catálogo web interactivo de zapatillas con integración a WhatsApp Business, desarrollado con el stack MERN. Permite explorar modelos, colores y detalles en una interfaz moderna y responsiva.",
    image: "/assets/kixlab-portafolio.png",
    demo: "https://kixlab.vercel.app/",
    code: "https://github.com/Esteban-Lombar/kixlab-app",
  },
  {
    title: "Dashboard Educativo (Proyecto en Equipo)",
    description:
      "Dashboard para gestión de usuarios y partidas, visualización de estadísticas, actividad de salas y descargas de reportes en PDF. Proyecto desarrollado en equipo con Frontend, Backend y Login separados. Actualmente inactivo, pero funcional como demostración del trabajo colaborativo..",
    image: "/assets/dashboartd-idiomas-chatbot.png",
    demo: "https://langmatch-dashboard.vercel.app/",
    code: "https://github.com/Esteban-Lombar/langmatch-dashboard",
  },
  {
    title: "Gráfica de Ventas",
    description:
      "Gráfica interactiva de ventas desarrollada con React y Recharts, que permite visualizar precios, productos más vendidos y tendencias de ventas de zapatillas. Ideal para analizar desempeño de productos de manera visual y dinámica..",
    image: "/assets/grafica-ventas-zapatillas-proyecto.png",
    demo: "https://grafica-cyan.vercel.app/",
    code: "https://github.com/Esteban-Lombar/grafica",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-8">Proyectos relevantes</h3>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#0d1117] border border-gray-800 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-violet-500/10 transition-all"
            >
              <div className="w-full h-56 overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <h4 className="text-lg font-semibold">{project.title}</h4>
                <p className="text-sm text-gray-400">{project.description}</p>

                <div className="flex gap-3 mt-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-violet-500 text-violet-400 px-4 py-1 rounded-lg hover:bg-violet-500/10 transition"
                  >
                    Pagina
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-700 text-gray-300 px-4 py-1 rounded-lg hover:bg-gray-700/30 transition"
                  >
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
