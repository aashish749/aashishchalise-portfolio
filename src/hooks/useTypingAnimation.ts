"use client";

import { useState, useEffect, useCallback } from "react";

interface UseTypingAnimationProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

export function useTypingAnimation({
  text,
  speed = 50,
  onComplete,
}: UseTypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const start = useCallback(() => {
    setDisplayedText("");
    setIsComplete(false);
    setIsTyping(true);

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        setIsComplete(true);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  useEffect(() => {
    const cleanup = start();
    return cleanup;
  }, [start]);

  return { displayedText, isComplete, isTyping };
}
