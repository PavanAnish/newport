import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

const AboutContact = () => {
  return (
    <section id="contact" className="py-24 px-6 border-t border-black/5 bg-gray-50/50 backdrop-blur-2xl">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">Let's build something together.</h2>
          <p className="text-gray-600 mb-8 max-w-md">
            I'm currently available for freelance work and full-time opportunities. If you have a project that needs some creative engineering, I'd love to hear about it.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-black/10 shadow-sm">
                <Mail size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:hello@example.com" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">hello@example.com</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-black/10 shadow-sm">
                <MapPin size={20} className="text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</p>
                <p className="font-medium text-gray-700">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-3xl border border-black/5 shadow-md"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors placeholder:text-gray-400" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors placeholder:text-gray-400" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Project Details</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors placeholder:text-gray-400" placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="button" className="w-full bg-gray-900 text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors shadow-sm">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutContact;