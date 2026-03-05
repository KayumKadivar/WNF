import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import studioWnfLogo from "../../assets/studio-wnf-logo.webp.webp";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  const isHomePage = location.pathname === "/";
  const headerBg = isScrolled || !isHomePage
    ? "bg-background/95 backdrop-blur-md border-b border-border"
    : "bg-transparent";
  const textColor = isScrolled || !isHomePage ? "text-foreground" : "text-primary-foreground";
  return (<>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <NavLink to="/" className={`font-display text-2xl lg:text-3xl tracking-tight ${textColor} flex items-center`}>
            <img
              src={studioWnfLogo}
              alt="Studio WnF"
              className={`h-12 object-contain transition-all duration-300 ${isScrolled || !isHomePage
                  ? "mix-blend-multiply dark:invert dark:mix-blend-screen dark:opacity-90"
                  : "invert mix-blend-screen opacity-90"
                }`}
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (<NavLink key={link.name} to={link.path} onClick={scrollToTop} className={`text-sm uppercase tracking-[0.15em] font-medium link-underline transition-colors duration-300 ${textColor} ${location.pathname === link.path ? "opacity-100" : "opacity-70 hover:opacity-100"}`}>
              {link.name}
            </NavLink>))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button variant={isScrolled || !isHomePage ? "elegant-outline" : "hero-outline"} size="default" asChild>
              <NavLink to="/contact">Get in Touch</NavLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`lg:hidden p-2 ${textColor}`} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Menu */}
    <AnimatePresence>
      {isMobileMenuOpen && (<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-40 bg-background pt-24">
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (<motion.div key={link.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
            <NavLink to={link.path} onClick={scrollToTop} className={`text-3xl font-display ${location.pathname === link.path
              ? "text-primary"
              : "text-foreground hover:text-primary"}`}>
              {link.name}
            </NavLink>
          </motion.div>))}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8">
            <Button variant="elegant" size="lg" asChild>
              <NavLink to="/contact">Get in Touch</NavLink>
            </Button>
          </motion.div>
        </nav>
      </motion.div>)}
    </AnimatePresence>
  </>);
};
export default Header;
