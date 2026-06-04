import { Mail } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-black/5 text-gray-600 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-xl tracking-tight text-gray-900">Portfolio.</a>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#work" className="hover:text-blue-600 transition-colors text-gray-700">Work</a>
          <a href="#services" className="hover:text-blue-600 transition-colors text-gray-700">Services</a>
          <a href="#github" className="hover:text-blue-600 transition-colors text-gray-700">GitHub</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors text-gray-700">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#github" className="p-2 hover:bg-black/5 rounded-full transition-colors text-gray-800">
            <FaGithub size={20} />
          </a>
          <a href="#contact" className="hidden md:flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm">
            <Mail size={16} />
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;