import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Twitter, Instagram, Facebook, Send, Linkedin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent!", {
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/tombrazil", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/tombrazil", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/tombrazil", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com/in/tombrazil", label: "LinkedIn" },
  ];

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
                Get in Touch
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-2 mb-6">
                Let's <span className="text-primary text-glow">Connect</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Have a question, speaking request, or just want to say hello? I'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-display uppercase tracking-wider text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="h-12 bg-muted/50 border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-display uppercase tracking-wider text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="h-12 bg-muted/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-display uppercase tracking-wider text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="h-12 bg-muted/50 border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-display uppercase tracking-wider text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      required
                      rows={6}
                      className="bg-muted/50 border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                    <Send size={18} />
                    Send Message
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-8"
              >
                {/* Info Cards */}
                <div className="glass rounded-2xl p-8">
                  <h3 className="font-display text-xl font-bold text-foreground mb-6">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-display text-sm uppercase tracking-wider text-muted-foreground mb-1">
                          Email
                        </div>
                        <a href="mailto:contact@tombrazil.com" className="text-foreground hover:text-primary transition-colors">
                          contact@tombrazil.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-display text-sm uppercase tracking-wider text-muted-foreground mb-1">
                          Location
                        </div>
                        <span className="text-foreground">
                          ABC.........
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="glass rounded-2xl p-8">
                  <h3 className="font-display text-xl font-bold text-foreground mb-6">
                    Follow Along
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-primary/10 hover:border-primary border border-transparent transition-all group"
                      >
                        <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-foreground group-hover:text-primary transition-colors">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Speaking Requests */}
                <div className="glass rounded-2xl p-8 border-secondary/30">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    Speaking Requests
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Interested in having Tom speak at your event? He covers topics including AI ethics, the future of technology, and the intersection of science and storytelling.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="mailto:speaking@tombrazil.com">
                      Inquire About Speaking
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
