import { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

interface BookMeshProps {
  coverImage: string;
  isFlipped: boolean;
  onFlip: () => void;
}

const BookMesh = ({ coverImage, isFlipped, onFlip }: BookMeshProps) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  // Load texture
  const texture = useLoader(TextureLoader, coverImage);
  
  // Target rotation based on flip state
  const targetRotation = isFlipped ? Math.PI : 0;
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Smooth rotation interpolation
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetRotation + (hovered ? 0.1 : 0),
      0.08
    );
    
    // Subtle floating animation
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
    
    // Hover scale
    const targetScale = hovered ? 1.05 : 1;
    meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1);
    meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, targetScale, 0.1);
    meshRef.current.scale.z = THREE.MathUtils.lerp(meshRef.current.scale.z, targetScale, 0.1);
  });

  const bookWidth = 2;
  const bookHeight = 3;
  const bookDepth = 0.3;

  return (
    <group
      ref={meshRef}
      onClick={onFlip}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Front cover */}
      <mesh position={[0, 0, bookDepth / 2]}>
        <planeGeometry args={[bookWidth, bookHeight]} />
        <meshStandardMaterial map={texture} side={THREE.FrontSide} />
      </mesh>
      
      {/* Back cover */}
      <mesh position={[0, 0, -bookDepth / 2]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[bookWidth, bookHeight]} />
        <meshStandardMaterial color="#1a1a2e" side={THREE.FrontSide} />
      </mesh>
      
      {/* Spine */}
      <mesh position={[-bookWidth / 2, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[bookDepth, bookHeight]} />
        <meshStandardMaterial color="#0d9488" emissive="#0d9488" emissiveIntensity={0.3} />
      </mesh>
      
      {/* Right edge */}
      <mesh position={[bookWidth / 2, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[bookDepth, bookHeight]} />
        <meshStandardMaterial color="#f5f5f0" />
      </mesh>
      
      {/* Top edge */}
      <mesh position={[0, bookHeight / 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[bookWidth, bookDepth]} />
        <meshStandardMaterial color="#f5f5f0" />
      </mesh>
      
      {/* Bottom edge */}
      <mesh position={[0, -bookHeight / 2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[bookWidth, bookDepth]} />
        <meshStandardMaterial color="#f5f5f0" />
      </mesh>
      
      {/* Glow effect on hover */}
      {hovered && (
        <pointLight position={[0, 0, 2]} intensity={0.5} color="#00d4ff" distance={5} />
      )}
    </group>
  );
};

interface Book3DProps {
  coverImage: string;
  className?: string;
}

export const Book3D = ({ coverImage, className = "" }: Book3DProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`cursor-pointer ${className}`} style={{ height: "400px" }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <directionalLight position={[-5, 5, -5]} intensity={0.4} color="#7c3aed" />
        <pointLight position={[0, 0, 4]} intensity={0.3} color="#00d4ff" />
        
        <BookMesh
          coverImage={coverImage}
          isFlipped={isFlipped}
          onFlip={() => setIsFlipped(!isFlipped)}
        />
      </Canvas>
      
      <p className="text-center text-muted-foreground text-sm mt-2">
        Click to flip
      </p>
    </div>
  );
};
