import React, { useState, useRef } from 'react';
import { Pause, Play } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

export const AboutUs: React.FC = () => {
  const [isPlayingCenter, setIsPlayingCenter] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yCenter = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-[#faf9f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag & Editorial Paragraph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16 md:mb-24">
          
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <span className="text-[11px] tracking-[0.2em] font-semibold text-neutral-500 uppercase">
              ABOUT OUR PRACTICE
            </span>
          </motion.div>

          {/* Large Editorial Manifesto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-9"
          >
            <p className="font-serif-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] leading-[1.3] text-neutral-800 tracking-tight">
              We are a <span className="text-neutral-900 font-semibold">trusted Miami Beach dental practice</span> dedicated to helping patients <span className="italic font-normal">smile with confidence, comfort, and vitality.</span> Through gentle clinical techniques, state-of-the-art restorative care, and custom smile design, we deliver enduring oral health and natural beauty.
            </p>
          </motion.div>
        </div>

        {/* Dynamic Photo Collage / Interactive Visual Grid with Parallax */}
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-12">
          
          {/* Bottom-left portrait (Modern operatory) */}
          <motion.div
            style={{ y: yLeft }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-3 flex flex-col justify-end"
          >
            <div className="w-full max-w-xs rounded-2xl overflow-hidden shadow-lg border border-neutral-200/60 aspect-[4/5] group bg-white">
              <img
                src="/images/operatory.svg"
                alt="Modern Dental Operatory Suite"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Center Main Video Card (Dentist Consultation with Patient) */}
          <motion.div
            style={{ y: yCenter }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-6"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/80 aspect-[16/10] bg-neutral-900 group">
              <img
                src="/images/consultation.svg"
                alt="Dr. Milton Martinez and Patient Smile Consultation"
                className={`w-full h-full object-cover transition-all duration-700 ${
                  isPlayingCenter ? 'scale-105 filter brightness-95' : 'scale-100 filter brightness-85'
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

              {/* Pause/Play Toggle Button on Card */}
              <div className="absolute bottom-4 right-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsPlayingCenter(!isPlayingCenter)}
                  aria-label="Toggle Dental Consultation Preview"
                  className="w-10 h-10 rounded-full bg-neutral-900/80 backdrop-blur-md text-white flex items-center justify-center hover:bg-neutral-900 transition-colors shadow-lg border border-white/20 cursor-pointer"
                >
                  {isPlayingCenter ? (
                    <Pause className="w-4 h-4 fill-white" />
                  ) : (
                    <Play className="w-4 h-4 fill-white translate-x-0.5" />
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Top-right card (Precision 3D Diagnostics) */}
          <motion.div
            style={{ y: yRight }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-3 flex flex-col justify-start"
          >
            <div className="w-full max-w-xs ml-auto rounded-2xl overflow-hidden shadow-lg border border-neutral-200/60 aspect-[4/5] group bg-white">
              <img
                src="/images/equipment.svg"
                alt="High Precision Dental Equipment"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>

        {/* Impact Numbers / Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 pt-12 border-t border-neutral-200/80 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left"
        >
          
          <div className="space-y-1">
            <div className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-neutral-900 tracking-tight">
              100%
            </div>
            <div className="text-xs sm:text-sm text-neutral-500 font-medium">
              5-Star Patient Satisfaction
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-neutral-900 tracking-tight">
              15+
            </div>
            <div className="text-xs sm:text-sm text-neutral-500 font-medium">
              Years Clinical Experience
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-neutral-900 tracking-tight">
              12K+
            </div>
            <div className="text-xs sm:text-sm text-neutral-500 font-medium">
              Healthy Smiles Transformed
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
