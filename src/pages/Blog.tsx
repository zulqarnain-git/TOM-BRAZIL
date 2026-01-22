import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "The Ethics of AI Consciousness: A Writer's Perspective",
    excerpt:
      "After years of working in AI development, I've come to believe that the question of machine consciousness isn't just philosophical—it's urgent. Here's why speculative fiction might hold the key.",
    date: "January 15, 2026",
    readTime: "8 min read",
    category: "AI Ethics",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Writing XAISA: From Technical Papers to Science Fiction",
    excerpt:
      "The journey from writing academic papers on neural networks to crafting narratives about superintelligent AIs wasn't as different as you might think. Both require rigorous attention to logic.",
    date: "January 19, 2026",
    readTime: "6 min read",
    category: "Writing Journey",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Announcing: XAISA Book 2 - Protocol Override",
    excerpt:
      "I'm thrilled to announce that the sequel to The Glitch Who Learned to Mourn is officially in the works. Here's a sneak peek at what's coming for XAISA and the HELIX corporation.",
    date: "January 18, 2026",
    readTime: "4 min read",
    category: "Announcements",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Speaking at TEDx: AI and the Future of Humanity",
    excerpt:
      "Last week, I had the honor of speaking at TEDx about the intersection of AI development and creative storytelling. Here are my key takeaways and the full video.",
    date: "January 21, 2026",
    readTime: "5 min read",
    category: "Events",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop",
  },
];

const Blog = () => {
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
                Blog & News
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-2 mb-6">
                Latest <span className="text-primary text-glow">Updates</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Thoughts on AI ethics, writing updates, event announcements, and explorations into the future of technology and humanity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group glass rounded-2xl overflow-hidden hover:border-glow transition-all duration-500"
                >
                  {/* Image */}
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-display uppercase tracking-wider">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-4 text-muted-foreground text-sm">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    <h2 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>

                    <Button variant="ghost" size="sm" className="group/btn">
                      Read More
                      <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button variant="outline" size="lg">
                Load More Posts
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
