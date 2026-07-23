import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_lwhjbbt",
        "template_vew60gb",
        form.current,
        "QWi9-hSOAs0ae3KCo"
      )
      .then(
        () => {
          setStatus("success");
          alert("✅ ¡Mensaje enviado con éxito!");
          form.current.reset();
        },
        (error) => {
          setStatus("error");
          alert("❌ Error al enviar el mensaje. Intenta de nuevo.");
          console.error(error);
        }
      );
  };

  return (
    <>
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="card"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-violet-400 mb-4">
              Contacto
            </p>
            <h4 className="text-3xl font-semibold text-white mb-4">Hablemos de tu próximo proyecto</h4>
            <p className="text-gray-300 leading-relaxed">
              Si buscas apoyo en desarrollo web, integración a la nube o mejorar la experiencia de tu producto digital, escríbeme y vemos cómo avanzar.
            </p>

            <div className="mt-8 space-y-4 text-gray-300 text-sm sm:text-base">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="font-medium text-white">Email</p>
                <p>estebanlombardocastano@gmail.com</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="font-medium text-white">WhatsApp</p>
                <p>+57 315 301 9155</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="font-medium text-white">Soporte</p>
                <p>Soporte técnico hardware/software y atención de clientes.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/Esteban-Lombar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-100 hover:bg-white/10 transition"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/esteban-lombardo-casta%C3%B1o-gutierrez-893815302"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-100 hover:bg-white/10 transition"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="card space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="user_name"
                className="w-full bg-transparent border border-gray-800 rounded-3xl p-4 text-white placeholder:text-gray-500"
                placeholder="Tu nombre"
                required
              />
              <input
                name="user_email"
                className="w-full bg-transparent border border-gray-800 rounded-3xl p-4 text-white placeholder:text-gray-500"
                placeholder="Tu correo"
                type="email"
                required
              />
            </div>
            <textarea
              name="message"
              className="w-full bg-transparent border border-gray-800 rounded-3xl p-4 min-h-[160px] text-white placeholder:text-gray-500 resize-none"
              placeholder="Cuéntame tu idea"
              required
            />
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-gray-400">{status === "sending" ? "Enviando..." : status === "success" ? "Mensaje enviado con éxito" : status === "error" ? "Ocurrió un error" : ""}</p>
              <button
                className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-white text-sm font-semibold hover:opacity-95 transition"
                type="submit"
              >
                Enviar mensaje
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      <motion.a
        href="https://wa.me/573153019155?text=Hola%20Esteban!%20Vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
      >
        <FaWhatsapp size={28} />
      </motion.a>
    </>
  );
}
