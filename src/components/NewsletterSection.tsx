import { motion, useInView } from "framer-motion";
import { Send, Sparkles, Zap, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState, useRef } from "react";
import { toast } from "sonner";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Welcome to the universe!", {
      description: "You'll receive updates about new releases and exclusive content.",
    });
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[Mail, Sparkles, Zap].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/20"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={40 + i * 10} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* Glass Card */}
          <div className="glass-premium rounded-3xl p-10 md:p-14 relative overflow-hidden">
            {/* Animated border gradient */}
            <div className="absolute inset-0 rounded-3xl">
              <div className="absolute inset-[-1px] rounded-3xl bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 opacity-50 animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
              <div className="absolute inset-[1px] rounded-3xl bg-card" />
            </div>

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Mail size={36} className="text-primary" />
                </motion.div>
              </motion.div>

              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-primary text-sm font-display uppercase tracking-[0.25em] mb-4 block"
              >
                Stay Connected
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="font-display text-4xl md:text-5xl font-bold mb-4"
              >
                Join Tom's{" "}
                <span className="text-gradient-premium">Sci-Fi Universe</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto"
              >
                Get exclusive updates on new releases, behind-the-scenes content, and early access to upcoming projects.
              </motion.p>

              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <div className="flex-1 relative group">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-14 bg-background/50 border-border/50 focus:border-primary pl-5 pr-5 rounded-xl text-base transition-all duration-300 group-hover:border-primary/50"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-focus-within:opacity-100 transition-opacity -z-10 blur-xl" />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    disabled={isSubmitting}
                    className="h-14 px-8 rounded-xl w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Sparkles size={20} />
                      </motion.div>
                    ) : (
                      <>
                        Subscribe
                        <Send size={18} />
                      </>
                    )}
                  </Button>
                </motion.div>
              </motion.form>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="text-muted-foreground/60 text-sm mt-6"
              >
                No spam. Unsubscribe anytime. Your data is safe.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
