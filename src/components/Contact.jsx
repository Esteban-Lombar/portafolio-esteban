import { motion } from "framer-motion";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lwhjbbt", // Tu Service ID
        "template_vew60gb", // Tu Template ID
        form.current,
        "QWi9-hSOAs0ae3KCo" // Tu Public Key
      )
      .then(
        () => {
          alert("✅ ¡Mensaje enviado con éxito!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Error al enviar el mensaje. Intenta de nuevo.");
          console.error(error);
        }
      );
  };

  return (
    <>
      {/* --- SECCIÓN PRINCIPAL --- */}
      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Columna Izquierda */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="card"
          >
            <h4 className="text-xl font-semibold mb-3">Hablemos</h4>
            <p className="text-gray-300">
              ¿Quieres un proyecto, quieres que me una a tu equipo o revisar un
              proyecto? Escríbeme y coordinamos.
            </p>

            <ul className="mt-4 text-gray-300 space-y-2 text-sm">
              <li>✉️ estebanlombardocastano@gmail.com</li>
              <li>📱 +57-315-301-9155</li>
              <li>🌐 GitHub / LinkedIn / WhatsApp</li>
            </ul>
          </motion.div>

          {/* Columna Derecha (Formulario) */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="card space-y-3"
          >
            <input
              name="user_name"
              className="w-full bg-transparent border border-gray-800 rounded-xl p-3 text-white"
              placeholder="Tu nombre"
              required
            />
            <input
              name="user_email"
              className="w-full bg-transparent border border-gray-800 rounded-xl p-3 text-white"
              placeholder="Tu correo"
              type="email"
              required
            />
            <textarea
              name="message"
              className="w-full bg-transparent border border-gray-800 rounded-xl p-3 h-28 text-white"
              placeholder="Mensaje"
              required
            />
            <div className="flex justify-end">
              <button
                className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl text-white font-medium hover:opacity-90 transition duration-300"
                type="submit"
              >
                Enviar mensaje
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* --- BOTÓN FLOTANTE DE WHATSAPP --- */}
      <motion.a
        href="https://wa.me/573153019155?text=Hola%20Esteban!%20Vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte."
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
