import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedBooks } from "@/components/FeaturedBooks";
import { AboutPreview } from "@/components/AboutPreview";
import { NewsletterSection } from "@/components/NewsletterSection";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Tom Brazil weaves technical accuracy with deep emotion. The concept of a 'weaponized conscience' stayed with me long after the last page.",
    author: "AI Strategy Consultant",
    role: "Verified Purchase",
  },
  {
    quote: "Perfect for fans of Murderbot and Scythe. The bond between Mara and XAISA is heartbreakingly real. A 5-star cyberpunk heist.",
    author: "Sci-Fi & Fantasy Reviews",
    role: "Amazon Top Reviewer",
  },
  {
    quote: "Finally, a sci-fi thriller written by an actual AI expert. It's not just a story; it's a warning. Hauntingly plausible and technically accurate.",
    author: "Tech Industry Insider",
    role: "Verified Reader",
  },
]

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        <FeaturedBooks />
        <AboutPreview />
        
        {/* Testimonials Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-display uppercase tracking-widest">
                Reader Reviews
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
                What Readers <span className="text-primary text-glow">Say</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="glass rounded-2xl p-8 relative"
                >
                  <Quote className="w-10 h-10 text-primary/30 absolute top-6 right-6" />
                  <p className="text-foreground/90 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-display font-bold text-foreground">{testimonial.author}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
