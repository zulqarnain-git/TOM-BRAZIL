import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react"; // RotateCcw hata diya kyunki flip nahi chahiye
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { books } from "@/data/books";
import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

// 3D Book Component
const Book3DMesh = ({
  coverImage,
  isHovered,
}: {
  coverImage: string;
  isHovered: boolean;
}) => {
  const meshRef = useRef<THREE.Group>(null);
  const texture = useLoader(TextureLoader, coverImage);

  // Flip logic hata di, ab rotation humesha 0 rahegi
  const targetRotation = 0;

  useFrame((state) => {
    if (!meshRef.current) return;

    // Smooth rotation
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetRotation + (isHovered ? 0.15 : 0),
      0.06
    );

    // Floating animation
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.04;

    // Hover tilt
    const targetTiltX = isHovered ? -0.05 : 0;
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetTiltX,
      0.1
    );

    // Scale
    const targetScale = isHovered ? 1.08 : 1;
    meshRef.current.scale.setScalar(
      THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.08)
    );
  });

  const bookWidth = 1.6;
  const bookHeight = 2.4;
  const bookDepth = 0.2;

  return (
    <group ref={meshRef}>
      {/* Front cover */}
      <mesh position={[0, 0, bookDepth / 2]}>
        <planeGeometry args={[bookWidth, bookHeight]} />
        <meshStandardMaterial map={texture} side={THREE.FrontSide} />
      </mesh>

      {/* Back cover */}
      <mesh position={[0, 0, -bookDepth / 2]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[bookWidth, bookHeight]} />
        <meshStandardMaterial color="#0f172a" side={THREE.FrontSide} />
      </mesh>

      {/* Spine */}
      <mesh position={[-bookWidth / 2, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[bookDepth, bookHeight]} />
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#0ea5e9"
          emissiveIntensity={isHovered ? 0.5 : 0.2}
        />
      </mesh>

      {/* Right edge (pages) */}
      <mesh position={[bookWidth / 2, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[bookDepth, bookHeight]} />
        <meshStandardMaterial color="#fafaf9" />
      </mesh>

      {/* Top edge */}
      <mesh position={[0, bookHeight / 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[bookWidth, bookDepth]} />
        <meshStandardMaterial color="#fafaf9" />
      </mesh>

      {/* Bottom edge */}
      <mesh position={[0, -bookHeight / 2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[bookWidth, bookDepth]} />
        <meshStandardMaterial color="#fafaf9" />
      </mesh>

      {/* Glow on hover */}
      {isHovered && (
        <pointLight position={[0, 0, 2]} intensity={0.6} color="#00d4ff" distance={4} />
      )}
    </group>
  );
};

const BookCard3D = ({
  book,
  index
}: {
  book: typeof books[0];
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  // Flip state hata diya
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: 20 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
      className="group"
    >
      <div
        className="relative rounded-3xl glass-premium transition-all duration-500 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated border on hover */}
        <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-[-2px] rounded-3xl bg-gradient-to-r from-primary via-secondary to-primary animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
          <div className="absolute inset-[1px] rounded-3xl bg-card" />
        </div>

        <div className="relative p-6">
          {/* 3D Canvas - onClick hata diya */}
          <div 
            className="h-[320px] cursor-pointer relative"
            // onClick removed
          >
            <Canvas
              camera={{ position: [0, 0, 4], fov: 45 }}
              gl={{ antialias: true, alpha: true }}
              style={{ background: "transparent" }}
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} intensity={0.7} />
              <directionalLight position={[-5, 3, -5]} intensity={0.3} color="#8b5cf6" />
              <pointLight position={[0, 0, 3]} intensity={0.2} color="#00d4ff" />

              <Suspense fallback={null}>
                <Book3DMesh
                  coverImage={book.coverImage}
                  isHovered={isHovered}
                  // isFlipped prop removed
                />
              </Suspense>
            </Canvas>

            {/* "Click to flip" text aur icon hata diya */}
          </div>

          {/* Book Info */}
          <div className="mt-6 text-center">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 mb-3"
            >
              <Sparkles size={12} className="text-primary" />
              <span className="text-primary text-xs font-medium">{book.tagline}</span>
            </motion.div>

            <p className="text-primary/70 text-xs font-display uppercase tracking-[0.2em] mb-2">
              {book.subtitle}
            </p>

            <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-3">
              {book.title}
            </h3>

            {/* Rating */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${i < Math.floor(book.rating)
                        ? "text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]"
                        : "text-muted"
                      }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-muted-foreground text-sm">({book.rating})</span>
            </div>

            {/* CTA */}
            <Link to={`/books/${book.slug}`}>
              <Button
                variant="hero"
                size="sm"
                className="w-full group/btn"
              >
                View Details
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const FeaturedBooks = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-32 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 text-primary text-sm font-display uppercase tracking-[0.2em] mb-4"
          >
            <span className="w-8 h-px bg-primary" />
            Latest Works
            <span className="w-8 h-px bg-primary" />
          </motion.span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-2">
            Featured <span className="text-gradient-premium">Books</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            From high-stakes cyberpunk thrillers to expert strategies on innovation management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {books.map((book, index) => (
            <BookCard3D key={book.id} book={book} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          {/* IMPORTANT: Link Updated to jump to collection section */}
          <Button variant="outline" size="lg" asChild className="group">
            <Link to="/books#collection">
              View All Books
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};