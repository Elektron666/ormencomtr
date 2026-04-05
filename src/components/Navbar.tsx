import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'KOLEKSİYONLAR', href: '#collections' },
    { name: 'TOPTAN SATIŞ', href: '#wholesale' },
    { name: 'DOKULAR', href: '#fabric-cinema' },
    { name: 'RENK EVRENİ', href: '#color-universe' },
    { name: 'İLETİŞİM', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-700 px-6 md:px-24 py-8 flex justify-between items-center ${
        isScrolled ? 'bg-surface/80 backdrop-blur-md py-6 border-b border-outline-variant/30' : 'bg-transparent'
      }`}
    >
      <div className="font-headline text-2xl tracking-[0.2em] font-light text-on-surface">
        ORMEN<span className="font-bold text-primary">.</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-16">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="font-label uppercase tracking-[0.3em] text-[10px] font-semibold text-on-surface/60 hover:text-primary transition-all duration-300 relative group"
          >
            {link.name}
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      <div className="flex items-center gap-8">
        <button 
          className="md:hidden text-on-surface"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-surface border-b border-outline-variant/30 overflow-hidden md:hidden"
          >
            <div className="p-12 flex flex-col gap-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-headline uppercase tracking-[0.2em] text-xl font-light text-on-surface hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
