import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedBackground = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax scrolling for 3D-like objects
  // Elements move at different speeds and directions
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const y3 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 180]);

  const y4 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const rotate4 = useTransform(scrollYProgress, [0, 1], [0, -90]);

  // Subtle scaling for depth effect
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* 1. Ambient Blurred Blobs (Bright Pastel Effect) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-300/30 blur-[120px]" />
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-300/20 blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-cyan-300/30 blur-[150px]" />

      {/* 2. Floating "3D" Glassmorphic Geometric Shapes */}
      
      {/* Top Left: Glass Cube */}
      <motion.div 
        style={{ y: y1, rotate: rotate1, scale: scale1 }} 
        className="absolute top-[10%] left-[5%] md:left-[10%] w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-blue-100/40 to-white/40 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
      />
      
      {/* Middle Right: Glass Sphere */}
      <motion.div 
        style={{ y: y2, rotate: rotate2, scale: scale2 }} 
        className="absolute top-[40%] right-[5%] md:right-[10%] w-40 h-40 md:w-64 md:h-64 bg-gradient-to-tr from-cyan-100/40 to-blue-200/30 backdrop-blur-2xl border border-white/50 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
      />

      {/* Bottom Left: Tilted Glass Diamond */}
      <motion.div 
        style={{ y: y3, rotate: rotate3 }} 
        className="absolute bottom-[30%] left-[10%] md:left-[15%] w-24 h-24 md:w-36 md:h-36 bg-gradient-to-br from-purple-100/30 to-blue-100/40 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
      />
      
      {/* Bottom Right: Small Glass Orb */}
      <motion.div 
        style={{ y: y4, rotate: rotate4 }} 
        className="absolute top-[80%] right-[25%] md:right-[30%] w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-teal-100/40 to-cyan-100/30 backdrop-blur-2xl border border-white/50 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
      />
    </div>
  );
};

export default AnimatedBackground;