import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Calculate the circumference and stroke offset for the progress ring
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20 
          }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 flex items-center justify-center bg-charcoal text-white rounded-full shadow-2xl hover:shadow-primary/30 transition-shadow duration-300 group"
          aria-label="Scroll to top"
        >
          {/* Progress Ring */}
          <svg 
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 56 56"
          >
            {/* Background circle */}
            <circle
              cx="28"
              cy="28"
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white/20"
            />
            {/* Progress circle */}
            <circle
              cx="28"
              cy="28"
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-primary transition-all duration-150"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: strokeOffset,
              }}
            />
          </svg>
          
          {/* Arrow Icon */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowUp size={20} className="relative z-10" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
