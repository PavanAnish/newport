import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const Hero = () => {
  const containerRef = useRef(null);

  // Track scroll for the Hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end center"]
  });

  // Responsive handling for animations
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Complex scroll transforms
  // Elements freeze for a bit:
  // Push Y down more to counteract scrolling up, keeping the element centered longer.
  const elementsYDesktop = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], ["0vh", "15vh", "65vh", "65vh"]);
  const elementsYMobile = useTransform(scrollYProgress, [0, 1], ["0vh", "0vh"]);
  const elementsY = isDesktop ? elementsYDesktop : elementsYMobile;

  // Image moves to center bottom (left and down)
  const imageXDesktop = useTransform(scrollYProgress, [0, 0.5], ["0vw", "-22vw"]);
  const imageXMobile = useTransform(scrollYProgress, [0, 1], ["0vw", "0vw"]);
  const imageX = isDesktop ? imageXDesktop : imageXMobile;

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  // Text moves slightly out of the way (left) and fades out
  const textXDesktop = useTransform(scrollYProgress, [0, 1], ["0vw", "-5vw"]);
  const textXMobile = useTransform(scrollYProgress, [0, 1], ["0vw", "0vw"]);
  const textX = isDesktop ? textXDesktop : textXMobile;

  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Left Button: View My Work (Stays still)
  const buttonLeftXDesktop = useTransform(scrollYProgress, [0, 1], ["0vw", "0vw"]);
  const buttonLeftXMobile = useTransform(scrollYProgress, [0, 1], ["0vw", "0vw"]);
  const buttonLeftX = isDesktop ? buttonLeftXDesktop : buttonLeftXMobile;

  // Right Button: Contact Me (Moves to right side of circle)
  // Reaches its destination by 0.3 for a faster pace
  const buttonRightXDesktop = useTransform(scrollYProgress, [0, 0.3, 1], ["0vw", "55vw", "55vw"]);
  const buttonRightXMobile = useTransform(scrollYProgress, [0, 1], ["0vw", "0vw"]);
  const buttonRightX = isDesktop ? buttonRightXDesktop : buttonRightXMobile;

  return (
    <section ref={containerRef} className="pt-32 pb-20 px-6 min-h-[110vh] flex flex-col justify-center max-w-6xl mx-auto relative z-40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Content (Text) */}
        <motion.div
          className="flex flex-col gap-6 lg:col-span-7 z-10 relative"
          style={{ x: textX }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ opacity: textOpacity }}
            className="flex items-center gap-3 font-mono text-sm text-gray-600"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ opacity: textOpacity }}
            className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-tight text-gray-900"
          >
            Hi it's Pavan  <span className="text-gray-500">precision & purpose.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ opacity: textOpacity }}
            className="text-lg md:text-xl text-gray-600 max-w-xl mt-2"
          >
            I'm a full-stack developer specialized in modern React ecosystems, building scalable applications with an engineering-first approach.
          </motion.p>

          <div className="mt-6 flex flex-wrap items-center gap-4 w-full">
            <motion.a
              href="#work"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ x: buttonLeftX }}
              className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-all flex items-center gap-2 relative z-30 shadow-md"
            >
              View My Work <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ x: buttonRightX }}
              className="px-6 py-3 rounded-full font-medium border border-gray-900/10 text-gray-900 hover:border-gray-900/30 bg-black/5 backdrop-blur-md hover:bg-black/10 transition-all shadow-sm relative z-30"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content (Profile Image Spot) */}
        <motion.div 
          className="lg:col-span-5 relative w-full max-w-[280px] lg:max-w-sm mx-auto lg:mx-0 mt-12 lg:mt-0 z-50"
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          style={{ x: imageX, y: elementsY, scale: imageScale }}
        >          {/* Decorative Offset Backgrounds */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/50 to-blue-400/20 rounded-full transform translate-x-4 translate-y-4 -z-10 transition-transform duration-500 ease-out group-hover:translate-x-6 group-hover:translate-y-6"></div>
          <div className="absolute inset-0 border border-black/5 rounded-full transform -translate-x-2 -translate-y-2 -z-10"></div>

          {/* Main Image Container - Circular */}
          <motion.div
            className="aspect-square bg-white/50 backdrop-blur-xl rounded-full overflow-hidden relative border border-black/10 shadow-[0_8px_30px_rgb(0,0,0,0.1)] group flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {/* Subtle Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

            {/* Placeholder Icon/Text - Replace with actual <img> tag */}
            <div className="text-gray-500 flex flex-col items-center gap-2 transform group-hover:-translate-y-1 transition-transform duration-500">
              <ImageIcon size={40} strokeWidth={1.5} className="text-gray-400" />
              <span className="font-mono text-[10px] tracking-widest uppercase text-gray-400">Add Photo</span>
            </div>
          </motion.div>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-32 pt-8 border-t border-black/10 flex flex-wrap gap-8 md:gap-16 font-mono text-sm text-gray-500 z-10 relative"
      >
        <div>
          <p className="text-gray-400 uppercase text-xs mb-1">Stack</p>
          <p className="text-gray-800 font-medium">React, Node.js, TS</p>
        </div>
        <div>
          <p className="text-gray-400 uppercase text-xs mb-1">Experience</p>
          <p className="text-gray-800 font-medium">4+ Years</p>
        </div>
        <div>
          <p className="text-gray-400 uppercase text-xs mb-1">Location</p>
          <p className="text-gray-800 font-medium">Remote / Worldwide</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;