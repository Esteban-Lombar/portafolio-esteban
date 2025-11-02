export default function Footer(){
  return (
    <footer className="border-t border-gray-800 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-400 flex justify-between items-center">
        <div>© {new Date().getFullYear()} Esteban Castaño — Ingeniero de Sistemas Jr</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
