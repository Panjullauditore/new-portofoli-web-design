import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text?: string;
  texts?: string[];
  speed?: number;
  className?: string;
  deleteSpeed?: number;
  pauseDuration?: number;
  delay?: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, texts, speed = 100, className = '', deleteSpeed = 50, pauseDuration = 2000, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Use texts array if provided, otherwise use single text
  const textArray = texts || (text ? [text] : ['']);
  const currentText = textArray[currentTextIndex];

  useEffect(() => {
    let timeout;

    // Initial delay
    if (!hasStarted && delay > 0) {
      timeout = setTimeout(() => {
        setHasStarted(true);
      }, delay);
      return () => clearTimeout(timeout);
    }

    if (!hasStarted && delay === 0) {
      setHasStarted(true);
    }

    if (!hasStarted) return;

    const handleTyping = () => {
      if (isPaused) {
        // Pause setelah selesai mengetik
        timeout = setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
        return;
      }

      if (!isDeleting) {
        // Mengetik teks
        if (displayedText.length < currentText.length) {
          timeout = setTimeout(() => {
            setDisplayedText(currentText.slice(0, displayedText.length + 1));
          }, speed);
        } else {
          // Selesai mengetik, mulai pause
          setIsPaused(true);
        }
      } else {
        // Menghapus teks
        if (displayedText.length > 0) {
          timeout = setTimeout(() => {
            setDisplayedText(displayedText.slice(0, -1));
          }, deleteSpeed);
        } else {
          // Selesai menghapus, pindah ke teks berikutnya
          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
          setIsDeleting(false);
        }
      }
    };

    handleTyping();

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, isPaused, hasStarted, currentText, currentTextIndex, speed, deleteSpeed, pauseDuration, delay]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingAnimation;