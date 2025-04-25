import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled || mobileMenuOpen ? "bg-background/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Matching BrutallyHired Style */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-primary to-secondary p-1.5 rounded-lg mr-3">
                  <span className="font-orbitron font-bold text-white text-lg tracking-wider">RSV</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-orbitron font-bold text-lg leading-tight">INFOTECH</span>
                  <span className="text-[10px] text-foreground/70 -mt-1">IT SOLUTIONS & SERVICES</span>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href.substring(1))}
                  className="text-foreground/90 hover:text-primary transition-colors duration-300 text-sm"
                >
                  {link.name}
                </button>
              ))}
              <Button className="px-5 py-2 rounded-md bg-gradient-to-r from-primary to-secondary glow-button text-white font-medium text-sm">
                Get Started
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button 
              type="button" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground hover:text-primary focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-card border-t border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href.substring(1))}
                  className="block w-full text-left px-3 py-2 text-foreground/90 hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
              <Button className="mt-2 w-full px-4 py-2 rounded-md bg-gradient-to-r from-primary to-secondary text-white font-medium text-sm">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
