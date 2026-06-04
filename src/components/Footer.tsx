const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-black/5 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-gray-500">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-gray-900 transition-colors">Twitter</a>
          <a href="#" className="hover:text-gray-900 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-gray-900 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;