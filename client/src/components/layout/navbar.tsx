import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToElement } from "@/lib/utils";

// Define types for navbar links
interface NavDropdownItem {
  name: string;
  href: string;
}

interface NavLink {
  name: string;
  href: string;
  isDropdown?: boolean;
  dropdownItems?: NavDropdownItem[];
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const isHomePage = location === "/";
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Handle clicks outside of dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Home page navigation links
  const homeNavLinks: NavLink[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Contact", href: "#contact" }
  ];

  // Service page navigation links for main menu
  const serviceNavLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#", isDropdown: true, dropdownItems: [
      { name: "IT Services", href: "/services/it-services" },
      { name: "IT Networking", href: "/services/it-networking" },
      { name: "IT Security", href: "/services/it-security" },
      { name: "Cloud Technologies", href: "/services/cloud-technologies" },
      { name: "VoIP Services", href: "/services/voip" },
      { name: "Software Development", href: "/services/software-development" },
      { name: "AI Solutions", href: "/services/ai-solutions" }
    ]},
    { name: "Contact", href: "#contact" }
  ];

  // Use appropriate navigation links based on current page
  const navLinks: NavLink[] = isHomePage ? homeNavLinks : serviceNavLinks;

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
              {navLinks.map((link, idx) => (
                link.isDropdown ? (
                  <div key={link.name} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={cn(
                        "text-foreground/90 hover:text-primary transition-colors duration-300 text-sm flex items-center",
                        dropdownOpen && "text-primary font-medium"
                      )}
                    >
                      {link.name}
                      {dropdownOpen ? (
                        <ChevronUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </button>
                    
                    {/* Dropdown menu */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute z-50 mt-2 w-48 rounded-md shadow-lg py-1 bg-card border border-white/10 backdrop-blur-md"
                        >
                          {link.dropdownItems?.map((item) => (
                            <button
                              key={item.name}
                              onClick={() => {
                                handleNavigation(item.href);
                                setDropdownOpen(false);
                              }}
                              className={cn(
                                "block w-full text-left px-4 py-2 text-sm text-foreground/90 hover:bg-primary/10 hover:text-primary transition-colors",
                                location === item.href && "text-primary font-medium bg-primary/5"
                              )}
                            >
                              {item.name}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
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
                )
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
                link.isDropdown ? (
                  <div key={link.name} className="space-y-1">
                    <button
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className={cn(
                        "flex w-full justify-between items-center text-left px-3 py-2 text-foreground/90 hover:text-primary transition-colors duration-300",
                        mobileDropdownOpen && "text-primary font-medium"
                      )}
                    >
                      {link.name}
                      {mobileDropdownOpen ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {mobileDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-3 border-l border-white/10 ml-3 space-y-1"
                        >
                          {link.dropdownItems?.map((item) => (
                            <button
                              key={item.name}
                              onClick={() => {
                                handleNavigation(item.href);
                                setMobileMenuOpen(false);
                              }}
                              className={cn(
                                "block w-full text-left px-4 py-2 text-sm text-foreground/90 hover:text-primary transition-colors rounded-md",
                                location === item.href && "text-primary font-medium bg-primary/5"
                              )}
                            >
                              {item.name}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
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
                )
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
