import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface BookCardProps {
  title: string;
  subtitle?: string;
  description: string;
  coverImage: string;
  amazonLink: string;
  rating?: number;
  delay?: number;
  slug?: string;
}

export const BookCard = ({
  title,
  subtitle,
  description,
  coverImage,
  amazonLink,
  rating = 4.5,
  delay = 0,
  slug,
}: BookCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <div className="glass rounded-2xl overflow-hidden transition-all duration-500 hover:border-glow group-hover:scale-[1.02]">
        <div className="flex flex-col md:flex-row">
          {/* Book Cover */}
          <div className="relative md:w-64 lg:w-72 shrink-0">
            <div className="aspect-[2/3] md:aspect-auto md:h-full overflow-hidden">
              <img
                src={coverImage}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent md:bg-gradient-to-r" />
          </div>

          {/* Book Details */}
          <div className="p-6 md:p-8 flex flex-col justify-center">
            {subtitle && (
              <span className="text-primary text-xs font-display uppercase tracking-widest mb-2">
                {subtitle}
              </span>
            )}
            <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              {title}
            </h3>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${i < Math.floor(rating) ? "text-amber-400" : "text-muted"}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-muted-foreground text-sm">({rating})</span>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
              {description}
            </p>

            <div className="flex flex-wrap gap-3">
              <Button variant="amazon" size="sm" asChild>
                <a href={amazonLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  Buy on Amazon
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                {slug ? (
                  <Link to={`/books/${slug}`}>
                    Read More
                    <ArrowRight size={16} />
                  </Link>
                ) : (
                  <span>Read More</span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
