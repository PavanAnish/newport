import { motion } from 'framer-motion';
import { Star, GitFork, Activity } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const GitHubSection = () => {
  return (
    <section id="github" className="py-24 px-6 bg-white border-t border-black/5 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Open Source</h2>
            <p className="text-gray-600 mt-4 max-w-xl">Active contributor to the open-source community. Building tools for developers.</p>
          </div>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 border border-gray-200 text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
            <FaGithub size={20} />
            Visit Profile
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((repo) => (
            <motion.a
              key={repo}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: repo * 0.1 }}
              className="p-6 border border-black/5 rounded-2xl bg-white shadow-sm hover:shadow-md hover:border-black/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <Activity className="text-blue-600" size={24} />
                <h3 className="text-lg font-semibold">react-ui-library</h3>
              </div>
              <p className="text-gray-600 text-sm mb-6">A comprehensive set of accessible React components built with Tailwind CSS.</p>
              <div className="flex items-center gap-4 text-sm font-mono text-gray-500">
                <div className="flex items-center gap-1"><Star size={14} /> 1.2k</div>
                <div className="flex items-center gap-1"><GitFork size={14} /> 230</div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span> TypeScript
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;