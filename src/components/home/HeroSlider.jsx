import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/NewImages/Architecture/Fabcon Factory/M 3.webp";
import hero2 from "@/assets/NewImages/Interior/herosliderint.webp";
import hero3 from "@/assets/NewImages/Exhibtion Stall/exibition tile stall view 1.webp";
const slides = [
  {
    image: hero1,
    label: "Architecture",
    title: "Timeless Design Philosophy",
    description: "Blending innovation with tradition to create architectural masterpieces.",
    cta: { text: "Explore Our Work", link: "/projects" },
  },
  {
    image: hero2,
    label: "Interior Design",
    title: "Crafting Spaces That Inspire",
    description: "Where form meets function, creating environments that elevate everyday living.",
    cta: { text: "View Projects", link: "/projects" },
  },
  {
    image: hero3,
    label: "Exhibition",
    title: "Bringing Vision to Reality",
    description: "Precision engineered structural delivery bringing bold concepts into the real world.",
    cta: { text: "Get in Touch", link: "/contact" },
  },
];
const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  useEffect(() => {
    if (!isAutoPlaying)
      return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };
  const nextSlide = () => goToSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => goToSlide((currentSlide - 1 + slides.length) % slides.length);
  return (<section className="relative h-screen w-full overflow-hidden">
    {/* Slides */}
    <AnimatePresence mode="wait">
      {slides.map((slide, index) => index === currentSlide && (<motion.div key={index} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 1.2 }} className="absolute inset-0">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/70" />

        {/* Content */}
        <div className="relative h-full container mx-auto px-6 lg:px-12 flex items-center">
          <div className="max-w-3xl pt-20 ">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-xs uppercase tracking-[0.2em] font-medium text-white/80 mb-6 block">
              {slide.label}
            </motion.span>

            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="heading-xl text-white mb-6">
              {slide.title}
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="body-lg text-white/80 mb-10 max-w-xl">
              {slide.description}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to={slide.cta.link} className="group">
                  {slide.cta.text}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/about">Our Story</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>))}
    </AnimatePresence>

    {/* Navigation Arrows */}
    <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 flex gap-3">
      <button onClick={prevSlide} className="w-12 h-12 flex items-center justify-center border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-foreground transition-all duration-300" aria-label="Previous slide">
        <ChevronLeft size={20} />
      </button>
      <button onClick={nextSlide} className="w-12 h-12 flex items-center justify-center border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-foreground transition-all duration-300" aria-label="Next slide">
        <ChevronRight size={20} />
      </button>
    </div>

    {/* Slide Indicators */}
    <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 flex gap-3">
      {slides.map((_, index) => (<button key={index} onClick={() => goToSlide(index)} className={`h-1 transition-all duration-500 ${index === currentSlide
        ? "w-12 bg-primary-foreground"
        : "w-6 bg-primary-foreground/40 hover:bg-primary-foreground/60"}`} aria-label={`Go to slide ${index + 1}`} />))}
    </div>

    {/* Scroll Indicator */}
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
      <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
        Scroll
      </span>
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-px h-8 bg-primary-foreground/40" />
    </motion.div>
  </section>);
};
export default HeroSlider;
