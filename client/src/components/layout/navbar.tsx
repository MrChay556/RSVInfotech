import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToElement } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const isHomePage = location === "/";
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Home page navigation links
  const homeNavLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Contact", href: "#contact" }
  ];

  // Service page navigation links
  const serviceNavLinks = [
    { name: "Home", href: "/" },
    { name: "IT Services", href: "/services/it-services" },
    { name: "IT Networking", href: "/services/it-networking" },
    { name: "IT Security", href: "/services/it-security" },
    { name: "Cloud Technologies", href: "/services/cloud-technologies" },
    { name: "VoIP Services", href: "/services/voip" },
    { name: "Software Development", href: "/services/software-development" },
    { name: "AI Solutions", href: "/services/ai-solutions" }
  ];

  // Use appropriate navigation links based on current page
  const navLinks = isHomePage ? homeNavLinks : serviceNavLinks;

  const handleNavigation = (link: string) => {
    setMobileMenuOpen(false);
    
    if (link.startsWith('#')) {
      // It's an anchor link for the homepage
      if (isHomePage) {
        // Already on homepage, just scroll
        scrollToElement(link.substring(1));
      } else {
        // Navigate to homepage first, then scroll
        setLocation('/');
        setTimeout(() => {
          scrollToElement(link.substring(1));
        }, 100);
      }
    } else {
      // Regular navigation to another page
      setLocation(link);
      // Scroll to top on page navigation
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };
  
  // For backward compatibility
  const scrollToSection = (id: string) => {
    handleNavigation(`#${id}`);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled || mobileMenuOpen ? "bg-background/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Matching the provided image */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="flex items-center">
                <div className="flex items-center">
                  <span className="font-orbitron font-bold text-2xl tracking-wider">RSV</span>
                  <span className="text-primary text-2xl mx-0.5">.</span>
                  <span className="font-orbitron font-bold text-2xl tracking-wider">INFOTEC</span>
                  <span className="font-orbitron font-bold text-2xl tracking-wider">H</span>
                  <span className="bg-primary text-[10px] font-bold text-white px-0.5 rounded-sm ml-1">AI</span>
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
                  onClick={() => handleNavigation(link.href)}
                  className={cn(
                    "text-foreground/90 hover:text-primary transition-colors duration-300 text-sm",
                    location === link.href && !link.href.startsWith('#') && "text-primary font-medium"
                  )}
                >
                  {link.name}
                </button>
              ))}
              <Link href="#contact">
                <Button className="px-5 py-2 rounded-md bg-gradient-to-r from-primary to-secondary glow-button text-white font-medium text-sm">
                  Get Started
                </Button>
              </Link>
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
      
      {/* Mobile Menu - with updated navigation */}
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
                  onClick={() => handleNavigation(link.href)}
                  className={cn(
                    "block w-full text-left px-3 py-2 text-foreground/90 hover:text-primary transition-colors duration-300",
                    location === link.href && !link.href.startsWith('#') && "text-primary font-medium"
                  )}
                >
                  {link.name}
                </button>
              ))}
              <Button 
                onClick={() => handleNavigation('#contact')}
                className="mt-2 w-full px-4 py-2 rounded-md bg-gradient-to-r from-primary to-secondary text-white font-medium text-sm"
              >
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
