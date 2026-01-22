import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Star, 
  ShoppingCart, 
  BookOpen, 
  Calendar, 
  FileText, 
  Tag,
  ChevronDown,
  ExternalLink,
  Quote,
  Check
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Book3D } from "@/components/Book3D";
import { ReadingProgressTracker } from "@/components/ReadingProgressTracker";
import { getBookBySlug, books } from "@/data/books";
import { useReadingProgress } from "@/hooks/useReadingProgress";
import { useState } from "react";
import { cn } from "@/lib/utils";

const BookDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const book = slug ? getBookBySlug(slug) : undefined;
  const [expandedChapter, setExpandedChapter] = useState<number | null>(0);
  
  const {
    completedChapters,
    toggleChapter,
    markAllComplete,
    resetProgress,
    isChapterCompleted,
    progressPercentage,
  } = useReadingProgress(book?.id ?? '');

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">Book Not Found</h1>
          <Link to="/books">
            <Button variant="outline">
              <ArrowLeft size={18} />
              Back to Books
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Get other books for recommendations
  const otherBooks = books.filter((b) => b.id !== book.id);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <Link to="/books">
                <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
                  <ArrowLeft size={18} />
                  Back to All Books
                </Button>
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* 3D Book Cover */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="sticky top-28"
              >
                <Book3D coverImage={book.coverImage} className="max-w-md mx-auto" />
              </motion.div>

              {/* Book Details */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Series Badge */}
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-display uppercase tracking-wider mb-4">
                  {book.subtitle}
                </span>

                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                  {book.title}
                </h1>

                <p className="text-xl text-primary font-medium mb-6">{book.tagline}</p>

                {/* Rating & Stats */}
                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={cn(
                            i < Math.floor(book.rating)
                              ? "text-amber-400 fill-amber-400"
                              : "text-muted"
                          )}
                        />
                      ))}
                    </div>
                    <span className="text-foreground font-semibold">{book.rating}</span>
                    <span className="text-muted-foreground">({book.reviewCount} reviews)</span>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {[
                    { icon: FileText, label: "Pages", value: book.pages },
                    { icon: Calendar, label: "Published", value: book.publishDate },
                    { icon: Tag, label: "Price", value: book.price },
                    { icon: BookOpen, label: "Format", value: "Paperback & Ebook" },
                  ].map((item) => (
                    <div key={item.label} className="glass p-4 rounded-xl text-center">
                      <item.icon size={20} className="text-primary mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</p>
                      <p className="text-foreground font-semibold text-sm">{item.value}</p>
                    </div>
                  ))}
                </div>

                {/* Genres */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {book.genre.map((g) => (
                    <span
                      key={g}
                      className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm"
                    >
                      {g}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div className="prose prose-invert max-w-none mb-8">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {book.fullDescription}
                  </p>
                </div>

                {/* Purchase Buttons */}
                <div className="flex flex-wrap gap-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="amazon" size="xl" asChild>
                      <a href={book.amazonLink} target="_blank" rel="noopener noreferrer">
                        <ShoppingCart size={20} />
                        Buy on Amazon - {book.price}
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="outline" size="xl" asChild>
                      <a href={book.amazonLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={20} />
                        Read Sample
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Chapter Previews Section with Progress Tracker */}
        <section className="py-24 border-t border-border">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-display uppercase tracking-widest">
                Track Your Reading
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
                Chapter <span className="text-primary text-glow">Progress</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {/* Reading Progress Tracker */}
              <div className="mb-8">
                <ReadingProgressTracker
                  totalChapters={book.chapterPreviews.length}
                  completedChapters={completedChapters}
                  progressPercentage={progressPercentage(book.chapterPreviews.length)}
                  onMarkAllComplete={() => markAllComplete(book.chapterPreviews.length)}
                  onResetProgress={resetProgress}
                />
              </div>

              {/* Chapter List */}
              <div className="space-y-4">
                {book.chapterPreviews.map((chapter, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={cn(
                      "glass-premium rounded-2xl overflow-hidden transition-all duration-300",
                      isChapterCompleted(index) && "ring-2 ring-primary/30"
                    )}
                  >
                    <div className="flex items-stretch">
                      {/* Chapter Toggle Button */}
                      <button
                        onClick={() => toggleChapter(index)}
                        className={cn(
                          "w-16 flex-shrink-0 flex items-center justify-center transition-all duration-300 border-r border-border/50",
                          isChapterCompleted(index)
                            ? "bg-primary/20 hover:bg-primary/30"
                            : "bg-muted/10 hover:bg-muted/20"
                        )}
                        title={isChapterCompleted(index) ? "Mark as unread" : "Mark as read"}
                      >
                        <motion.div
                          initial={false}
                          animate={{ 
                            scale: isChapterCompleted(index) ? [1, 1.2, 1] : 1,
                            rotate: isChapterCompleted(index) ? [0, 10, 0] : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                            isChapterCompleted(index)
                              ? "bg-primary text-primary-foreground shadow-glow"
                              : "bg-muted/30 text-muted-foreground border-2 border-dashed border-muted-foreground/30"
                          )}
                        >
                          {isChapterCompleted(index) ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <span className="text-xs font-display font-bold">{index + 1}</span>
                          )}
                        </motion.div>
                      </button>

                      {/* Chapter Content */}
                      <div className="flex-1">
                        <button
                          onClick={() => setExpandedChapter(expandedChapter === index ? null : index)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div>
                              <h3 className={cn(
                                "font-display text-lg font-semibold transition-colors",
                                isChapterCompleted(index) ? "text-primary" : "text-foreground"
                              )}>
                                {chapter.title}
                              </h3>
                              {isChapterCompleted(index) && (
                                <motion.span
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  className="text-xs text-primary/70 font-display uppercase tracking-wider"
                                >
                                  ✓ Completed
                                </motion.span>
                              )}
                            </div>
                          </div>
                          <ChevronDown
                            size={20}
                            className={cn(
                              "text-muted-foreground transition-transform duration-300",
                              expandedChapter === index && "rotate-180"
                            )}
                          />
                        </button>

                        <motion.div
                          initial={false}
                          animate={{
                            height: expandedChapter === index ? "auto" : 0,
                            opacity: expandedChapter === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <p className="text-muted-foreground leading-relaxed whitespace-pre-line italic">
                              {chapter.excerpt}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-24 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-display uppercase tracking-widest">
                What Readers Say
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
                Reader <span className="text-primary text-glow">Reviews</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {book.reviews.map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-premium p-8 rounded-2xl relative"
                >
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={cn(
                          i < review.rating
                            ? "text-amber-400 fill-amber-400"
                            : "text-muted"
                        )}
                      />
                    ))}
                  </div>

                  <p className="text-foreground/90 leading-relaxed mb-6 italic">
                    "{review.text}"
                  </p>

                  <div>
                    <p className="font-display font-bold text-foreground">{review.author}</p>
                    <p className="text-muted-foreground text-sm">{review.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* More Books Section */}
        {otherBooks.length > 0 && (
          <section className="py-24 border-t border-border">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="text-primary text-sm font-display uppercase tracking-widest">
                  Continue Reading
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
                  More <span className="text-primary text-glow">Books</span>
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {otherBooks.map((otherBook) => (
                  <motion.div
                    key={otherBook.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="group"
                  >
                    <Link to={`/books/${otherBook.slug}`}>
                      <div className="glass rounded-2xl overflow-hidden transition-all duration-300 hover:border-glow">
                        <div className="aspect-[2/3] overflow-hidden">
                          <img
                            src={otherBook.coverImage}
                            alt={otherBook.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-4">
                          <p className="text-primary text-xs font-display uppercase tracking-wider">
                            {otherBook.subtitle}
                          </p>
                          <h3 className="font-display font-semibold text-foreground mt-1 group-hover:text-primary transition-colors line-clamp-2">
                            {otherBook.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BookDetail;
