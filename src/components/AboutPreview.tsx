import { motion, useInView } from "framer-motion";
import { ArrowRight, Award, BookOpen, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import authorImage from "@/assets/author-tom.jpg";
import { useRef } from "react";

const achievements = [
  { icon: BookOpen, label: "Published Works", value: "2" },
  { icon: Award, label: "Award Nominations", value: "3" },
  { icon: Users, label: "Global Readers", value: "10K+" },
];

export const AboutPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image Column - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative order-2 lg:order-1"
          >
            {/* Decorative Frame */}
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20 rounded-3xl blur-xl" />

              {/* Decorative lines */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -top-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.7 }}
                className="absolute -bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent origin-right"
              />

              {/* Main image container */}
              <div className="relative glass-premium rounded-2xl overflow-hidden group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={authorImage}
                    alt="Tom Brazil - Sci-Fi Author"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="glass-premium px-5 py-4 rounded-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Sparkles className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-foreground font-display font-semibold">Tom Brazil</p>
                      <p className="text-muted-foreground text-sm">AI Expert & Author</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg" />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
            className="order-1 lg:order-2"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 text-primary text-sm font-display uppercase tracking-[0.2em] mb-4"
            >
              <span className="w-8 h-px bg-primary" />
              About The Author
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              THE CODE BEHIND{" "}
              <span className="text-gradient-premium">THE CONSCIENCE</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            >
              Tom Brazil isn't just a sci-fi author—he's a leading voice in AI Strategy. As CEO of XAISA Consulting, he helps organizations navigate the future of machine intelligence. But in his fiction, he explores what happens when that future starts talking back.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground leading-relaxed mb-10"
            >
              Fueled by a career-long obsession with the "alignment problem," Tom bridges the gap between hard code and human emotion. He doesn't just write about algorithmic control; he understands the logic behind it.
            </motion.p>

            {/* Achievement Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4 mb-10"
            >
              {achievements.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
                  className="glass p-4 rounded-xl text-center hover:border-glow transition-all duration-300 group"
                >
                  <item.icon
                    size={24}
                    className="text-primary mx-auto mb-2 group-hover:scale-110 transition-transform"
                  />
                  <div className="text-2xl font-display font-bold text-foreground text-glow">
                    {item.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="outline" size="lg" asChild className="group">
                <Link to="/about">
                  Read Full Bio
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
