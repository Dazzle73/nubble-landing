"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { NubbleLogo } from "@/components/blocks/branding/NubbleLogo";

export const StickyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [navigationLinks, setNavigationLinks] = useState([
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#reviews", label: "Reviews" },
    { href: "#faq", label: "FAQ" }
  ]);
  const [logoHref, setLogoHref] = useState("#");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Determine navigation paths based on current page
    const isNotHomePage = pathname !== '/';
    
    if (isNotHomePage) {
      setNavigationLinks([
        { href: "/#features", label: "Features" },
        { href: "/#pricing", label: "Pricing" },
        { href: "/#reviews", label: "Reviews" },
        { href: "/#faq", label: "FAQ" }
      ]);
      setLogoHref("/");
    } else {
      setNavigationLinks([
        { href: "#features", label: "Features" },
        { href: "#pricing", label: "Pricing" },
        { href: "#reviews", label: "Reviews" },
        { href: "#faq", label: "FAQ" }
      ]);
      setLogoHref("#");
    }
  }, [pathname]);

  return (
    <nav className={`sticky top-6 z-50 mx-auto max-w-4xl rounded-2xl transition-all duration-300 ${
      hasScrolled 
        ? 'bg-white/10 backdrop-blur-xl shadow-xl border border-white/20' 
        : 'bg-white/5 backdrop-blur-sm border border-white/10'
    }`}>
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - use PNG version */}
          <a href={logoHref} className="cursor-pointer">
            <NubbleLogo className="h-10 w-auto" width={130} height={40} />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-white transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-white transition-colors duration-200 py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl mt-4">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};