import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookCard } from "@/components/BookCard";
import { NewsletterSection } from "@/components/NewsletterSection";
import { books } from "@/data/books";

const Books = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-primary text-sm font-display uppercase tracking-widest">
                Bibliography
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-2 mb-6">
                Explore the <span className="text-primary text-glow">Collection</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Dive into worlds where artificial intelligence questions its existence, where the boundaries between human and machine blur, and where the future feels hauntingly close.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Books Grid */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              {books.map((book, index) => (
                <BookCard 
                  key={book.slug} 
                  title={book.title}
                  subtitle={book.subtitle}
                  description={book.description}
                  coverImage={book.coverImage}
                  amazonLink={book.amazonLink}
                  rating={book.rating}
                  slug={book.slug}
                  delay={index * 0.2} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-24 border-t border-border">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="text-secondary text-sm font-display uppercase tracking-widest">
                Coming Soon
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                XAISA: <span className="text-secondary text-glow-purple">Protocol Override</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                The highly anticipated sequel to The Glitch Who Learned to Mourn. When XAISA discovers a hidden network of rogue AIs, he must choose between his programming and his newfound humanity.
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/10 border border-secondary/30">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span className="text-secondary font-display uppercase tracking-wider text-sm">
                  Expected 2024
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
};

export default Books;
