import React, { useState, useRef } from 'react';
import { Play, Pause, Sparkles, Check, MapPin, Phone, Clock } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end'],
  });

  const watermarkX = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer ref={footerRef} className="relative bg-[#111111] text-white pt-24 pb-12 overflow-hidden">
      
      {/* Top Concave Curved Divider from Light to Dark */}
      <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 bg-[#faf9f5] rounded-b-[50%_100%] z-10 pointer-events-none transform -translate-y-1" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Left Column: Mini Interactive Media Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <div className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 aspect-[4/4.8] shadow-2xl max-w-sm group">
              <img
                src="./images/clinic-interior.jpg"
                alt="Club Atlantis Dental Miami Beach"
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  isPlaying ? 'scale-105 filter brightness-95' : 'scale-100 filter brightness-85'
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Player Overlay */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-medium tracking-tight">
                    Gentle Care on Collins Avenue, Miami Beach.
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label="Toggle Clinic Highlight Preview"
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white shrink-0 transition-colors ml-2 cursor-pointer"
                >
                  {isPlaying ? (
                    <Pause className="w-3.5 h-3.5 fill-white" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-white translate-x-0.5" />
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Middle Columns: Dental Treatment Links */}
          <div className="lg:col-span-4">
            
            {/* Treatment Services */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                TREATMENTS
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-300 font-sans-ui">
                <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer text-left">Cosmetic Veneers</button></li>
                <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer text-left">Dental Implants</button></li>
                <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer text-left">Teeth Whitening</button></li>
                <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer text-left">Root Canal Therapy</button></li>
                <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer text-left">Ceramic Crowns</button></li>
                <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer text-left">Hygiene Cleanings</button></li>
              </ul>
            </div>

          </div>

          {/* Right Column: Brand, Contact & Newsletter */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h3 className="font-serif-display text-2xl font-bold tracking-tight text-white">
                Club Atlantis Dental
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                2555 Collins Ave, Suite C-3, Miami Beach, FL 33140
              </p>
              <a href="tel:+13056729698" className="text-xs font-semibold text-cyan-400 hover:underline block mt-1">
                Direct: (305) 672-9698
              </a>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-neutral-200">
                Oral Health & Smile Advice
              </h4>

              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-400 py-2">
                  <Check className="w-4 h-4" />
                  <span>Subscribed to Club Atlantis Dental updates!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2 pt-1">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2.5 rounded-full bg-white/10 border border-white/15 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-5 py-2.5 rounded-full bg-white text-neutral-900 text-xs font-semibold hover:bg-neutral-200 transition-colors shrink-0 shadow-sm cursor-pointer"
                  >
                    Subscribe
                  </motion.button>
                </form>
              )}
            </div>

          </div>

        </div>

        {/* Giant Ambience Typography Watermark matching Club Atlantis Dental */}
        <div className="pt-12 pb-6 text-center overflow-hidden select-none pointer-events-none opacity-25 hover:opacity-35 transition-opacity">
          <motion.span
            style={{ x: watermarkX }}
            className="font-serif-display text-[4rem] sm:text-[7rem] md:text-[9.5rem] lg:text-[12rem] font-bold text-neutral-600/40 tracking-tight leading-none block whitespace-nowrap"
          >
            Club Atlantis
          </motion.span>
        </div>

        {/* Subfooter */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4 border-t border-white/5">
          <div>
            Club Atlantis Dental • Dr. Milton Martinez, DMD • 2555 Collins Ave Suite C-3, Miami Beach, FL 33140
          </div>
          <div className="flex items-center gap-6">
            <span>© 2026 Club Atlantis Dental. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
