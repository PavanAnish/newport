'use client';

export default function SketchfabWasp() {
  return (
    <div className="relative w-full h-full flex flex-col group">
      
      {/* The 3D iframe */}
      <div className="flex-1 w-full h-full overflow-hidden rounded-xl border border-white/10">
        <iframe 
          title="Robotic Wasp" 
          frameBorder="0" 
          allowFullScreen 
          // @ts-ignore - React sometimes flags older vendor prefixes, but they are needed for cross-browser support
          mozallowfullscreen="true" 
          webkitallowfullscreen="true" 
          allow="autoplay; fullscreen; xr-spatial-tracking" 
          execution-while-out-of-viewport="true" 
          execution-while-not-rendered="true" 
          web-share="true"
          className="w-full h-full min-h-[400px]"
          src="https://sketchfab.com/models/3d20b6b8d2174bc19e9a210fe3ac3dba/embed?ui_theme=dark&autostart=1&transparent=1" 
        />
      </div>

      {/* Clean, integrated attribution */}
      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-lg p-3 text-xs text-gray-300">
          <a 
            href="https://sketchfab.com/3d-models/robotic-wasp-3d20b6b8d2174bc19e9a210fe3ac3dba" 
            target="_blank" 
            rel="nofollow" 
            className="font-bold text-white hover:text-teal-400 transition-colors"
          >
            Robotic Wasp
          </a>
          {' '}by{' '}
          <a 
            href="https://sketchfab.com/.sebastian." 
            target="_blank" 
            rel="nofollow" 
            className="font-bold text-white hover:text-teal-400 transition-colors"
          >
            Sebastian Irmer
          </a>
        </div>
      </div>

    </div>
  );
}