import { motion } from "framer-motion";
import { FaLaptopCode, FaCloud, FaLifeRing, FaShoppingCart } from "react-icons/fa";

const services = [
  {
    title: "Desarrollo de software a medida",
    description:
      "Aplicaciones web, landing pages, portales y SPAs para empresas que necesitan presencia digital efectiva y rendimiento comercial.",
    icon: FaLaptopCode,
  },
  {
    title: "Soluciones POS y comercio",
    description:
      "Implementación de sistemas de punto de venta, integraciones de inventario y pasarelas de pago para tiendas y emprendimientos.",
    icon: FaShoppingCart,
  },
  {
    title: "Soporte técnico integral",
    description:
      "Atención a clientes, soporte hardware/software, mantenimiento y optimización de sistemas para garantizar continuidad operativa.",
    icon: FaLifeRing,
  },
  {
    title: "Nube y despliegue profesional",
    description:
      "Infraestructura en AWS, Vercel y servicios en la nube que permiten escalar proyectos de forma segura y eficiente.",
    icon: FaCloud,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#0b1220] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-violet-400 mb-3">Servicios</p>
          <h3 className="text-3xl sm:text-4xl font-bold">
            Soluciones comerciales para tu empresa
          </h3>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Proyectos llave en mano, soporte continuo y consultoría técnica para empresas que buscan crecer con tecnología confiable.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)] hover:border-violet-500/40 hover:bg-white/10 transition"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-300 mb-6">
                <service.icon size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
