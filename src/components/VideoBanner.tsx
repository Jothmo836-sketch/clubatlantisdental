import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { motion } from 'motion/react';

export const VideoBanner: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="py-10 bg-[#faf9f5] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-neutral-900 aspect-[16/9] sm:aspect-[21/9] group"
        >
          <img
            src="./images/clinic-interior.jpg"
            alt="Club Atlantis Dental Modern Clinic Interior"
            className={`w-full h-full object-cover object-center transition-all duration-1000 ${
              isPlaying ? 'scale-105 filter brightness-95' : 'scale-100 filter brightness-85'
            }`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

          {/* Bottom Controls */}
          <div className="absolute bottom-6 right-6 z-20">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause clinic tour' : 'Play clinic tour'}
              className="w-12 h-12 rounded-full bg-neutral-900/80 backdrop-blur-md text-white flex items-center justify-center hover:bg-neutral-900 transition-colors shadow-xl border border-white/20 cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-white" />
              ) : (
                <Play className="w-5 h-5 fill-white translate-x-0.5" />
              )}
            </motion.button>
          </div>

          {/* Subtitle pill */}
          <div className="absolute bottom-6 left-6 z-20 bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 text-white text-xs font-medium flex items-center gap-2 shadow-lg">
            <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-ping' : 'bg-neutral-500'}`} />
            <span>State-of-the-Art Digital Suite • 2555 Collins Ave, Miami Beach</span>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
