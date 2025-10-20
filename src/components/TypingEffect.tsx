import { useEffect, useState } from "react";

interface TypingEffectProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
  className?: string;
}

export const TypingEffect = ({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  delay = 2000, 
  className = "" 
}: TypingEffectProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, speed, deleteSpeed, delay]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {currentText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
        |
      </span>
    </span>
  );
};