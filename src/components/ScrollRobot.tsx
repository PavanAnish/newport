'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, Environment } from '@react-three/drei';
import * as THREE from 'three';

function RoamingModel() {
  const group = useRef<THREE.Group>(null);
  
  // Load the model
  const { scene, animations } = useGLTF('/models/robotic_wasp.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Play the flying/hovering animation loop
    if (actions && Object.keys(actions).length > 0) {
      const firstActionName = Object.keys(actions)[0];
      actions[firstActionName]?.reset().play();
    }
  }, [actions]);

  // The Scroll Engine
  useFrame(() => {
    if (!group.current) return;

    // 1. Calculate how far down the page the user has scrolled (0 to 1)
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;

    // 2. Define the flight path mathematically
    // Math.sin creates a wave. Multiplying by Math.PI * 2 means it completes one full left-right sweep
    const targetX = Math.sin(scrollProgress * Math.PI * 2) * 4; 
    
    // Slight up/down movement to make it feel like it's changing altitude
    const targetY = Math.cos(scrollProgress * Math.PI * 2) * 1.5; 

    // Rotate the model slightly so it banks into the turns like an airplane
    const targetRotationZ = -Math.sin(scrollProgress * Math.PI * 2) * 0.5;
    const targetRotationY = scrollProgress * Math.PI; // Spins as it goes down

    // 3. Apply the movement smoothly using lerp (Linear Interpolation)
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, targetX, 0.05);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetY, 0.05);
    
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, targetRotationZ, 0.05);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotationY, 0.05);
  });

  return (
    <primitive 
      ref={group} 
      object={scene} 
      scale={2} 
    />
  );
}

export default function ScrollRobotCanvas() {
  return (
    // This wrapper locks the canvas to the entire screen and sits behind the content
    <div className="fixed top-0 left-0 w-screen h-screen z-[-1] pointer-events-none bg-[#0a0a0a]">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={2} />
        <Environment preset="city" />
        
        <RoamingModel />
      </Canvas>
    </div>
  );
}