"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowUp } from "@tabler/icons-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (typeof window !== "undefined" && window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisibility);
      return () => {
        window.removeEventListener("scroll", toggleVisibility);
      };
    }
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  if (!isMounted) return null;

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.4,
              ease: "easeOut",
            },
          }}
          exit={{
            opacity: 0,
            y: 30,
            scale: 0.8,
            transition: {
              duration: 0.3,
              ease: "easeIn",
            },
          }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-amber-400 text-black-100 shadow-lg transition-all duration-300 z-50"
          aria-label="Scroll to top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <IconArrowUp className="w-6 h-6 text-black " />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
