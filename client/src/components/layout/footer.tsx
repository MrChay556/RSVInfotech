import { Link, useLocation } from "wouter";
import { Facebook, Linkedin } from "lucide-react";
import { scrollToElement } from "@/lib/utils";

const Footer = () => {
  const [, setLocation] = useLocation();
  
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  const serviceLinks = [
    { name: "IT Services", href: "/services/it-services" },
    { name: "IT Networking", href: "/services/it-networking" },
    { name: "IT Security", href: "/services/it-security" },
    { name: "Cloud Technologies", href: "/services/cloud-technologies" },
    { name: "VoIP Services", href: "/services/voip" },
    { name: "Software Development", href: "/services/software-development" },
    { name: "AI Solutions", href: "/services/ai-solutions" },
  ];

  const handleClick = (id: string) => {
    if (id.startsWith('#')) {
      // Handle anchor links by scrolling
      scrollToElement(id.substring(1));
    } else {
      // Handle navigation links using wouter
      setLocation(id);
    }
  };

  return (
    <footer className="bg-muted border-t border-white/10 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="mb-6 block">
              <h2 className="font-orbitron font-bold text-2xl whitespace-nowrap">
                <span>RSV</span>
                <span className="text-primary">.</span>
                <span>INFOTECH</span>
                <span> PTE. LTD.</span>
              </h2>
            </Link>
            <p className="text-foreground/70 mb-6">
              Empowering businesses with cutting-edge IT solutions and AI innovation since 2003.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-foreground" />
              </a>
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-foreground" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-orbitron font-semibold text-lg mb-6 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('#') ? (
                    <button 
                      onClick={() => scrollToElement(link.href.substring(1))}
                      className="text-foreground/70 hover:text-primary transition-colors cursor-pointer"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-foreground/70 hover:text-primary transition-colors cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-orbitron font-semibold text-lg mb-6 text-foreground">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-orbitron font-semibold text-lg mb-6 text-foreground">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-foreground/70">10 Ubi Crescent, #07-52, Ubi Tech Park Lobby C, Singapore 408564</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-foreground/70">sales@myrsv.com<br />support@myrsv.com</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-foreground/70">+65 9681 2234<br />+65 8500 9203</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-foreground/60">&copy; {new Date().getFullYear()} RSV Infotech Pte Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
