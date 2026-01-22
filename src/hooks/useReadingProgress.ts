import { useState, useEffect, useCallback } from 'react';

interface ReadingProgress {
  completedChapters: number[];
  lastRead: string;
}

type ProgressMap = Record<string, ReadingProgress>;

const STORAGE_KEY = 'tom-brazil-reading-progress';

export const useReadingProgress = (bookId: string) => {
  const [completedChapters, setCompletedChapters] = useState<number[]>([]);

  // Load progress from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const allProgress: ProgressMap = JSON.parse(stored);
        const bookProgress = allProgress[bookId];
        if (bookProgress) {
          setCompletedChapters(bookProgress.completedChapters);
        }
      }
    } catch (error) {
      console.error('Error loading reading progress:', error);
    }
  }, [bookId]);

  // Save progress to localStorage
  const saveProgress = useCallback((chapters: number[]) => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const allProgress: ProgressMap = stored ? JSON.parse(stored) : {};
      
      allProgress[bookId] = {
        completedChapters: chapters,
        lastRead: new Date().toISOString(),
      };
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(allProgress));
    } catch (error) {
      console.error('Error saving reading progress:', error);
    }
  }, [bookId]);

  const toggleChapter = useCallback((chapterIndex: number) => {
    setCompletedChapters((prev) => {
      const isCompleted = prev.includes(chapterIndex);
      const newChapters = isCompleted
        ? prev.filter((i) => i !== chapterIndex)
        : [...prev, chapterIndex].sort((a, b) => a - b);
      
      saveProgress(newChapters);
      return newChapters;
    });
  }, [saveProgress]);

  const markAllComplete = useCallback((totalChapters: number) => {
    const allChapters = Array.from({ length: totalChapters }, (_, i) => i);
    setCompletedChapters(allChapters);
    saveProgress(allChapters);
  }, [saveProgress]);

  const resetProgress = useCallback(() => {
    setCompletedChapters([]);
    saveProgress([]);
  }, [saveProgress]);

  const isChapterCompleted = useCallback((chapterIndex: number) => {
    return completedChapters.includes(chapterIndex);
  }, [completedChapters]);

  return {
    completedChapters,
    toggleChapter,
    markAllComplete,
    resetProgress,
    isChapterCompleted,
    progressPercentage: (totalChapters: number) => 
      totalChapters > 0 ? Math.round((completedChapters.length / totalChapters) * 100) : 0,
  };
};
