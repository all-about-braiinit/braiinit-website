import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading with progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 300);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center transition-all duration-300">
      {/* Logo */}
      <div className="mb-8 animate-fade-in">
        <div className="text-4xl md:text-6xl font-bold text-foreground">
          <span className="text-primary">Braiin</span>It
        </div>
      </div>

      {/* Loading Bar */}
      <div className="w-64 h-1 bg-muted rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Loading Text */}
      <div className="text-muted-foreground animate-pulse">
        Loading your AI journey...
      </div>

      {/* Animated Dots
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-teal"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary-glow rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 left-3/4 w-3 h-3 border border-primary rounded-full animate-pulse-teal"></div>
      </div> */}
    </div>
  );
};