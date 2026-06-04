import { motion } from 'framer-motion';
import { Layout, Server, Smartphone, Database } from 'lucide-react';

const services = [
  {
    icon: <Layout className="text-blue-600" size={32} />,
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and performant user interfaces with modern React, Next.js, and solid architecture.',
    stack: 'React, Next.js, TypeScript, Tailwind'
  },
  {
    icon: <Server className="text-emerald-600" size={32} />,
    title: 'Backend Engineering',
    description: 'Designing scalable APIs and robust microservices architecture for data-intensive applications.',
    stack: 'Node.js, Express, NestJS, Python'
  },
  {
    icon: <Database className="text-purple-600" size={32} />,
    title: 'Database & Cloud',
    description: 'Architecting secure databases and deploying infrastructure on modern cloud platforms.',
    stack: 'PostgreSQL, MongoDB, AWS, Vercel'
  },
  {
    icon: <Smartphone className="text-orange-600" size={32} />,
    title: 'Mobile Architecture',
    description: 'Developing cross-platform mobile applications bridging web technologies to native performance.',
    stack: 'React Native, Expo'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 border-t border-black/5 relative bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Services & Stack</h2>
          <p className="text-gray-600 mt-4 max-w-xl">Comprehensive engineering capabilities across the entire application stack.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border border-black/5 rounded-2xl bg-white shadow-sm hover:border-blue-400 hover:shadow-md transition-all"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className="mt-auto pt-6 border-t border-black/5">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Primary Stack</p>
                <p className="font-mono text-sm text-gray-700">{service.stack}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;