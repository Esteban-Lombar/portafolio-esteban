import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed w-full z-50 bg-black/60 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300">Esteban.dev</a>

        <nav className="hidden md:flex gap-6 items-center text-gray-300">
          <a href="#about" className="hover:text-white">Sobre mí</a>
          <a href="#skills" className="hover:text-white">Habilidades</a>
          <a href="#projects" className="hover:text-white">Proyectos</a>
          <a href="#contact" className="hover:text-white">Contacto</a>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-800 bg-black/70">
          <div className="flex flex-col px-6 py-4 gap-3 text-gray-300">
            <a href="#about" onClick={() => setOpen(false)}>Sobre mí</a>
            <a href="#skills" onClick={() => setOpen(false)}>Habilidades</a>
            <a href="#projects" onClick={() => setOpen(false)}>Proyectos</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contacto</a>
          </div>
        </div>
      )}
    </header>
  );
}
