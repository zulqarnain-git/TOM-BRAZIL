import { motion, AnimatePresence } from "framer-motion";
import { Check, BookOpen, RotateCcw, Trophy, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ReadingProgressTrackerProps {
  totalChapters: number;
  completedChapters: number[];
  progressPercentage: number;
  onMarkAllComplete: () => void;
  onResetProgress: () => void;
}

export const ReadingProgressTracker = ({
  totalChapters,
  completedChapters,
  progressPercentage,
  onMarkAllComplete,
  onResetProgress,
}: ReadingProgressTrackerProps) => {
  const isComplete = progressPercentage === 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-premium rounded-2xl p-6 relative overflow-hidden"
    >
      {/* Celebration effect when complete */}
      <AnimatePresence>
        {isComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none"
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: 0, opacity: 1 }}
                animate={{
                  y: [-10, -60],
                  opacity: [1, 0],
                  x: [0, (i % 2 === 0 ? 20 : -20)],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                className="absolute"
                style={{ left: `${15 + i * 15}%`, top: '50%' }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
            isComplete 
              ? "bg-gradient-to-br from-primary to-secondary shadow-glow" 
              : "bg-primary/20"
          )}>
            {isComplete ? (
              <Trophy className="w-5 h-5 text-primary-foreground" />
            ) : (
              <BookOpen className="w-5 h-5 text-primary" />
            )}
          </div>
          <div>
            <h3 className="font-display font-semibold text-foreground">
              Reading Progress
            </h3>
            <p className="text-sm text-muted-foreground">
              {completedChapters.length} of {totalChapters} chapters read
            </p>
          </div>
        </div>

        {/* Percentage badge */}
        <motion.div
          key={progressPercentage}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          className={cn(
            "px-3 py-1.5 rounded-full font-display font-bold text-sm",
            isComplete
              ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground"
              : "bg-primary/20 text-primary"
          )}
        >
          {progressPercentage}%
        </motion.div>
      </div>

      {/* Progress bar */}
      <div className="relative mb-4">
        <Progress 
          value={progressPercentage} 
          className="h-3 bg-muted/30"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={cn(
            "absolute top-0 left-0 h-3 rounded-full",
            isComplete
              ? "bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient-shift"
              : "bg-gradient-to-r from-primary to-primary/70"
          )}
          style={{ 
            boxShadow: isComplete ? "0 0 20px hsl(var(--primary) / 0.5)" : "none" 
          }}
        />
      </div>

      {/* Chapter dots visualization */}
      <div className="flex gap-2 mb-6 flex-wrap justify-center">
        {[...Array(totalChapters)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-xs font-display font-bold transition-all duration-300",
              completedChapters.includes(i)
                ? "bg-primary text-primary-foreground shadow-glow"
                : "bg-muted/30 text-muted-foreground"
            )}
          >
            {completedChapters.includes(i) ? (
              <Check className="w-4 h-4" />
            ) : (
              i + 1
            )}
          </motion.div>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        {!isComplete && (
          <Button
            variant="outline"
            size="sm"
            onClick={onMarkAllComplete}
            className="flex-1 gap-2"
          >
            <Check className="w-4 h-4" />
            Mark All Complete
          </Button>
        )}
        {completedChapters.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onResetProgress}
            className={cn("gap-2", isComplete ? "flex-1" : "")}
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </Button>
        )}
      </div>

      {/* Completion message */}
      <AnimatePresence>
        {isComplete && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-border/50"
          >
            <p className="text-center text-sm text-foreground/80">
              🎉 <span className="font-display font-semibold text-primary">Congratulations!</span> You've completed this book!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
