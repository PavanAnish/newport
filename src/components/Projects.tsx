import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'E-Commerce Platform',
    description: 'A headless e-commerce solution built with Next.js, Shopify, and Tailwind CSS. Features real-time inventory and seamless checkout.',
    services: 'Full-stack Development · UI/UX',
    year: '2023',
    link: '#'
  },
  {
    id: '02',
    title: 'Fintech Dashboard',
    description: 'Real-time financial analytics dashboard for B2B clients. Incorporates complex data visualization and secure authentication.',
    services: 'Frontend Architecture · React',
    year: '2022',
    link: '#'
  },
  {
    id: '03',
    title: 'HealthTech App',
    description: 'Patient management system with scheduling, telehealth integration, and HIPAA-compliant data storage.',
    services: 'Web App · Backend (Node.js)',
    year: '2024',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="work" className="pt-32 pb-24 px-6 bg-white/40 backdrop-blur-2xl border-t border-black/5 -mt-16 relative z-30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Selected Work</h2>
            <p className="text-gray-600 mt-4 max-w-xl">A collection of recent projects demonstrating technical capability and design sensibility.</p>
          </div>
          <a href="#github" className="text-sm font-medium text-gray-600 hover:text-blue-600 flex items-center gap-1 transition-colors">
            See all on GitHub <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.a 
              href={project.link}
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block bg-white border border-black/5 rounded-2xl p-6 md:p-10 hover:border-black/10 hover:shadow-md transition-all shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-gray-500">{project.id}</span>
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600 font-mono bg-black/5 px-3 py-1 rounded-full">{project.year}</span>
                  <ArrowUpRight className="text-gray-500 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <p className="text-gray-600">{project.description}</p>
                <div className="md:text-right">
                  <p className="text-sm font-mono text-gray-500">{project.services}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;