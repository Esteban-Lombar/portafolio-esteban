export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-12 bg-[#02040d]/70">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-400 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          © {new Date().getFullYear()} Esteban Castaño — Ingeniero de Sistemas Jr.
        </div>

        <div className="flex flex-wrap gap-6 text-gray-400">
          <a
            href="https://github.com/Esteban-Lombar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition-colors duration-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/esteban-lombardo-casta%C3%B1o-gutierrez-893815302"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>

        <div className="text-gray-500">Hecho con React + Tailwind CSS</div>
      </div>
    </footer>
  );
}
