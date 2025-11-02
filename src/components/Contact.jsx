import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <motion.div initial={{ x:-20, opacity:0 }} whileInView={{ x:0, opacity:1 }} viewport={{ once:true }} className="card">
          <h4 className="text-xl font-semibold mb-3">Hablemos</h4>
          <p className="text-gray-300">¿Quieres un proyecto, Quieres que me una a tu equipo o revisar un proyecto? Escríbeme y coordinamos.</p>

          <ul className="mt-4 text-gray-300 space-y-2 text-sm">
            <li>✉️ estebanlombardocastano@gmail.com</li>
            <li>📱 +57-315-301-9155</li>
            <li>🌐 GitHub / LinkedIn / WhatsApp</li>
          </ul>
        </motion.div>

        <motion.form initial={{ x:20, opacity:0 }} whileInView={{ x:0, opacity:1 }} viewport={{ once:true }} className="card space-y-3" onSubmit={(e)=>{ e.preventDefault(); alert('Formulario simulado — agrega backend o EmailJS'); }}>
          <input className="w-full bg-transparent border border-gray-800 rounded-xl p-3" placeholder="Tu nombre" required/>
          <input className="w-full bg-transparent border border-gray-800 rounded-xl p-3" placeholder="Tu correo" type="email" required/>
          <textarea className="w-full bg-transparent border border-gray-800 rounded-xl p-3 h-28" placeholder="Mensaje" required/>
          <div className="flex justify-end">
            <button className="btn-primary" type="submit">Enviar mensaje</button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
