export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-400 flex justify-between items-center flex-col md:flex-row gap-4">
        <div>
          © {new Date().getFullYear()} Esteban Castaño — Ingeniero de Sistemas Jr
        </div>

        <div className="flex gap-6 text-gray-400">
          <a
            href="https://github.com/Esteban-Lombar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition-colors duration-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/esteban-lombardo-castaño-gutierrez-893815302"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
