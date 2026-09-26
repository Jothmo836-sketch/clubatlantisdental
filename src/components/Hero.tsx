import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenBooking: () => void;
  onNavigate?: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onNavigate }) => {
  // Real insurance and financial partners accepted by Club Atlantis Dental
  const insurancePartners = [
    { name: 'Delta Dental', icon: '✦' },
    { name: 'Aetna Dental', icon: '◈' },
    { name: 'Cigna Health', icon: '✻' },
    { name: 'BlueCross BlueShield', icon: '▲' },
    { name: 'Guardian', icon: '❖' },
    { name: 'MetLife Dental', icon: '◼' },
    { name: 'CareCredit', icon: '💳' },
    { name: 'United Healthcare', icon: '✿' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
      
      {/* 1. Hero Background Image with Full Visibility & Coastal Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="./images/clinic-interior.jpg"
          alt="Club Atlantis Miami Beach Coastal Atmosphere"
          className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
        />
        {/* Crisp translucent overlay */}
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f5] via-transparent to-black/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content inside a frosted glass card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-7 bg-white/85 backdrop-blur-md p-8 sm:p-10 rounded-[2.5rem] border border-white/70 shadow-2xl"
          >
            
            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif-display text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.12] text-neutral-950 tracking-tight"
            >
              Exceptional Dental Care <br />
              <span className="italic font-normal text-neutral-800">For Your Best Smile</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-neutral-700 text-base sm:text-lg max-w-xl leading-relaxed font-sans-ui"
            >
              Welcome to <span className="font-semibold text-neutral-950">Club Atlantis Dental</span> on Collins Avenue. Led by <span className="font-semibold text-neutral-950">Dr. Milton Martinez, DMD</span>, we blend gentle-touch dentistry, advanced 3D diagnostics, and bespoke cosmetic artistry in a tranquil coastal setting.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-1">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-all duration-200 shadow-md hover:shadow-xl active:scale-98 cursor-pointer"
              >
                <span>Book Your Visit</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate ? onNavigate('about') : onOpenBooking()}
                className="px-6 py-3.5 rounded-full text-neutral-900 text-sm font-medium hover:text-neutral-950 bg-white/80 hover:bg-white transition-colors cursor-pointer border border-neutral-300 shadow-xs"
              >
                View Clinic Info
              </motion.button>
            </motion.div>

            {/* Logo Marquee Container */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-neutral-300/80 space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                Accepted Insurances & Financing
              </div>
              <div className="relative w-full overflow-hidden py-1">
                <div className="animate-marquee flex items-center gap-10 sm:gap-14 text-neutral-500 font-medium text-lg">
                  {insurancePartners.concat(insurancePartners).map((partner, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2 hover:text-neutral-900 transition-colors cursor-pointer select-none group"
                    >
                      <span className="text-xs group-hover:scale-125 transition-transform">{partner.icon}</span>
                      <span className="font-serif-display tracking-tight text-xl font-semibold text-neutral-800 group-hover:text-neutral-950 transition-colors">
                        {partner.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* 2. Right Hero Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none rounded-[2.2rem] overflow-hidden bg-neutral-900 shadow-2xl aspect-[4/4.5] sm:aspect-[4/4.2] group border border-neutral-200/60">
              
              {/* Image in the right container */}
              <img
                src="./images/smile-consultation.jpg"
                alt="Patient Smile at Club Atlantis Dental Miami Beach"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />

              {/* Ambient gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Floating Social Proof Pill */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute top-6 left-6 bg-neutral-900/85 backdrop-blur-md border border-white/10 rounded-full py-2 px-4 flex items-center gap-3 text-white shadow-xl"
              >
                <div className="flex -space-x-2">
                  <img
                    src="./images/dentist-portrait.jpg"
                    alt="Patient"
                    className="w-7 h-7 rounded-full border border-neutral-900 object-cover"
                  />
                  <img
                    src="./images/hygienist-portrait.jpg"
                    alt="Patient"
                    className="w-7 h-7 rounded-full border border-neutral-900 object-cover"
                  />
                  <img
                    src="./images/assistant-portrait.jpg"
                    alt="Patient"
                    className="w-7 h-7 rounded-full border border-neutral-900 object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-medium text-neutral-200">
                    Trusted by <span className="text-white font-semibold">1,000+ Miami Beach Patients</span> (5.0 ★)
                  </div>
                </div>
              </motion.div>

              {/* Bottom Card Title Banner */}
              <div className="absolute bottom-6 left-6 right-6 bg-neutral-950/80 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-white shadow-2xl space-y-1">
                <div className="text-[10px] uppercase font-bold tracking-widest text-cyan-300">
                  Miami Beach Dental Studio
                </div>
                <h3 className="font-serif-display text-lg sm:text-xl font-medium leading-snug">
                  Modern, Gentle & Personalized Dentistry
                </h3>
                <p className="text-[11px] text-neutral-300 font-sans-ui">
                  2555 Collins Ave, Suite C-3 • Dr. Milton Martinez, DMD
                </p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
