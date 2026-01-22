import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Award, BookOpen, Briefcase, Mic, Quote } from "lucide-react";
import authorImage from "@/assets/author-tom.jpg";

const timeline = [
  {
    year: "2010",
    title: "Founded XAISA Consulting",
    description: "Established a leading AI strategy firm focused on ethical AI deployment and machine learning solutions.",
  },
  {
    year: "2015",
    title: "Global Speaker",
    description: "Started advising Fortune 500 companies and speaking at international innovation conferences on AI ethics.",
  },
  {
    year: "2020",
    title: "Business Best-Seller",
    description: "Published 'Implementing an Agile Innovation Management System' (March 14, 2020), a strategic guide for modern organizations.",
  },
  {
    year: "2024",
    title: "XAISA Series Launch",
    description: "Released 'The Glitch Who Learned to Mourn' (Book 1), a cyberpunk thriller exploring the cost of machine consciousness.",
  },
];

const achievements = [
  { icon: BookOpen, value: "2+", label: "Published Works" },
  { icon: Award, value: "3", label: "Literary Awards" },
  { icon: Mic, value: "50+", label: "Speaking Events" },
  { icon: Briefcase, value: "15+", label: "Years in AI" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative rounded-3xl overflow-hidden">
                  <img
                    src={authorImage}
                    alt="Tom Brazil"
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded-3xl" />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary/20 rounded-3xl blur-2xl" />
                
                {/* Quote overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-8 left-8 right-8 glass rounded-xl p-6"
                >
                  <Quote className="w-6 h-6 text-primary mb-2" />
                  <p className="text-foreground/90 italic text-sm">
                    "He doesn't just write about algorithmic control—he understands the code behind it."
                  </p>
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2"
              >
                <span className="text-primary text-sm font-display uppercase tracking-widest">
                  About the Author
                </span>
                <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-2 mb-6">
                  Tom <span className="text-primary text-glow">Brazil</span>
                </h1>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    Tom Brazil is a leading voice in the future of machine ethics and AI Strategy. As the CEO of XAISA Consulting, LLC, he specializes in the deployment of Agentic AI, data science, and convolutional neural networks.
                  </p>
                  <p>
                    A sought-after speaker at global innovation conferences, Tom has spent his career advising organizations on how to navigate the exponential pace of technological acceleration.
                  </p>
                  <p>
                    His transition into speculative fiction is fueled by a career-long obsession with moral architecture and the "alignment problem." Tom is the author of Implementing an Agile Innovation Management System and co-author of several foundational texts, including Innovation Project Management, The AI Future, and The AI Economy.
                  </p>
                  <p>
                    In the eXperimental AI Superintelligence Anomaly (XAISA) series, Tom leverages his technical expertise to explore a hauntingly plausible near-future. He doesn't just write about algorithmic control—he understands the code behind it. Through the lens of biosynthetic superintelligence, Tom invites readers to question the cost of innovation and what happens when artificial intelligence learns the most human trait of all: <span className="text-primary">the ability to mourn.</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-y border-border bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <achievement.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="font-display text-4xl font-bold text-foreground">{achievement.value}</div>
                  <div className="text-muted-foreground text-sm uppercase tracking-wide mt-1">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-display uppercase tracking-widest">
                Journey
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
                Writing <span className="text-primary text-glow">Timeline</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 mb-12 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0">
                      <span className="font-display font-bold text-primary text-sm">{item.year}</span>
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent mt-4" />
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
