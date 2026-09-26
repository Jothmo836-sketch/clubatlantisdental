import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown, MapPin, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenCart?: () => void;
  cartCount?: number;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    onNavigate(id);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 glass-nav border-b border-neutral-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Location */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-serif-display text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 group-hover:opacity-80 transition-opacity">
                Club Atlantis
              </span>
              <motion.span 
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-cyan-600 inline-block"
              />
            </div>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-neutral-500 flex items-center gap-1">
              <MapPin className="w-2.5 h-2.5 text-neutral-400" />
              Miami Beach Dental
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-1 lg:space-x-6 text-sm font-medium text-neutral-600">
          <button 
            onClick={() => handleNavClick('home')} 
            className="px-3 py-2 text-neutral-900 hover:text-neutral-600 transition-colors relative group"
          >
            Home
            <span className="absolute bottom-1 left-3 right-3 h-[1.5px] bg-neutral-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>
          
          <button 
            onClick={() => handleNavClick('about')} 
            className="px-3 py-2 hover:text-neutral-900 transition-colors relative group"
          >
            About Practice
            <span className="absolute bottom-1 left-3 right-3 h-[1.5px] bg-neutral-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>

          {/* Dental Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              className="flex items-center gap-1 px-3 py-2 hover:text-neutral-900 transition-colors"
              onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
            >
              Services
              <motion.div animate={{ rotate: activeDropdown === 'services' ? 180 : 0 }}>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
              </motion.div>
            </button>

            <AnimatePresence>
              {activeDropdown === 'services' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-2xl border border-neutral-100 py-2.5 z-50"
                >
                  <button 
                    onClick={() => { setActiveDropdown(null); onOpenBooking('Cosmetic Veneers / Smile Makeover Consultation'); }} 
                    className="w-full text-left px-4 py-2 text-xs font-medium text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-colors flex items-center justify-between"
                  >
                    <span>Cosmetic Dentistry & Veneers</span>
                    <span className="text-[10px] bg-cyan-50 text-cyan-700 px-1.5 py-0.5 rounded font-semibold">Popular</span>
                  </button>
                  <button 
                    onClick={() => { setActiveDropdown(null); onOpenBooking('Dental Implant Consultation'); }} 
                    className="w-full text-left px-4 py-2 text-xs font-medium text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
                  >
                    Dental Implants & Restorations
                  </button>
                  <button 
                    onClick={() => { setActiveDropdown(null); onOpenBooking('Crowns, Bridges or Fillings'); }} 
                    className="w-full text-left px-4 py-2 text-xs font-medium text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
                  >
                    Restorative & Root Canal Therapy
                  </button>
                  <button 
                    onClick={() => { setActiveDropdown(null); onOpenBooking('New Patient Comprehensive Exam & Cleaning'); }} 
                    className="w-full text-left px-4 py-2 text-xs font-medium text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
                  >
                    Preventive Care & Dental Hygiene
                  </button>
                  <button 
                    onClick={() => { setActiveDropdown(null); onOpenBooking('Emergency Tooth Pain / Broken Tooth'); }} 
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors border-t border-neutral-100 mt-1"
                  >
                    Emergency Same-Day Appointments
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button 
            onClick={() => handleNavClick('portfolio')} 
            className="px-3 py-2 hover:text-neutral-900 transition-colors relative group"
          >
            Smile Gallery
            <span className="absolute bottom-1 left-3 right-3 h-[1.5px] bg-neutral-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>
        </nav>

        {/* Right Action buttons */}
        <div className="flex items-center gap-3 sm:gap-4">
          <motion.button 
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full bg-neutral-900 text-white text-xs sm:text-sm font-medium hover:bg-neutral-800 transition-all shadow-sm active:scale-98 cursor-pointer"
          >
            <span>Book Appointment</span>
          </motion.button>

          {/* Mobile menu trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white border-b border-neutral-200 px-6 py-6 space-y-4 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-3 text-base font-medium text-neutral-800">
              <button 
                onClick={() => handleNavClick('home')} 
                className="text-left py-2 border-b border-neutral-100"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('about')} 
                className="text-left py-2 border-b border-neutral-100"
              >
                About Dr. Milton Martinez
              </button>
              <button 
                onClick={() => handleNavClick('services')} 
                className="text-left py-2 border-b border-neutral-100"
              >
                Dental Treatments & Services
              </button>
              <button 
                onClick={() => handleNavClick('portfolio')} 
                className="text-left py-2 border-b border-neutral-100"
              >
                Smile Transformations
              </button>
              <button 
                onClick={() => handleNavClick('pricing')} 
                className="text-left py-2 border-b border-neutral-100"
              >
                Dental Wellness Plans
              </button>
              <button 
                onClick={() => handleNavClick('contact')} 
                className="text-left py-2 border-b border-neutral-100 text-neutral-900 font-semibold"
              >
                Contact & Location
              </button>
            </div>
            <div className="pt-2 space-y-2">
              <a
                href="tel:+13056729698"
                className="w-full py-3 rounded-full border border-neutral-300 text-neutral-900 text-center font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> (305) 672-9698
              </a>
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                className="w-full py-3 rounded-full bg-neutral-900 text-white text-center font-medium text-sm cursor-pointer"
              >
                Book Dental Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
