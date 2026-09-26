import React, { useState } from 'react';
import { ArrowUpRight, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CaseStudy {
  id: string;
  title: string;
  tag: string;
  year: string;
  image: string;
  summary: string;
  metric: string;
  metricLabel: string;
}

interface PortfolioProps {
  onBookTreatment?: (treatment: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onBookTreatment }) => {
  const handleCaseClick = (caseItem: CaseStudy) => {
    let treatmentName = 'Cosmetic Veneers / Smile Makeover Consultation';
    if (caseItem.id.includes('implant')) treatmentName = 'Dental Implant Consultation';
    if (caseItem.id.includes('emergency')) treatmentName = 'Emergency Tooth Pain / Broken Tooth';
    if (caseItem.id.includes('whitening') || caseItem.id.includes('bonding')) treatmentName = 'Teeth Whitening Treatment';
    if (caseItem.id.includes('restorative')) treatmentName = 'Crowns, Bridges or Fillings';

    if (onBookTreatment) {
      onBookTreatment(treatmentName);
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cases: CaseStudy[] = [
    {
      id: 'case-1',
      title: 'Porcelain Veneers Smile Makeover',
      tag: 'Cosmetic • Veneers',
      year: '2026',
      image: '/images/operatory.svg',
      summary: 'Crafted 8 handcrafted custom porcelain veneers to correct uneven spacing and deep discoloration, resulting in a naturally radiant, Hollywood-grade Miami smile.',
      metric: '8 Units',
      metricLabel: 'Custom E.max Ceramic Veneers'
    },
    {
      id: 'case-2',
      title: 'Single-Tooth Dental Implant Restoration',
      tag: 'Implantology • Restorative',
      year: '2025',
      image: '/images/consultation.svg',
      summary: 'Guided 3D surgical placement of a biocompatible titanium implant with a custom-shaded zirconia crown, restoring 100% natural bite strength without affecting adjacent teeth.',
      metric: '100%',
      metricLabel: 'Bite Strength Restored'
    },
    {
      id: 'case-3',
      title: 'Full-Arch Restorative Rehabilitation',
      tag: 'Full Mouth • Implants',
      year: '2025',
      image: '/images/equipment.svg',
      summary: 'Comprehensive rehabilitation utilizing high-durability fixed ceramic bridges and rotary endodontic therapy, reversing decades of severe tooth wear.',
      metric: '14 Days',
      metricLabel: 'Complete Treatment Timeline'
    },
    {
      id: 'case-4',
      title: 'Aesthetic Composite Bonding & Whitening',
      tag: 'Cosmetic • Same-Day',
      year: '2026',
      image: '/images/operatory.svg',
      summary: 'Single-visit laser teeth whitening followed by artistic micro-layering composite bonding on chipped incisors, performed with zero anesthesia required.',
      metric: '6 Shades',
      metricLabel: 'Brighter Enamel Transformation'
    },
    {
      id: 'case-5',
      title: 'Emergency Tooth Relief & Crown Repair',
      tag: 'Emergency • Endodontics',
      year: '2025',
      image: '/images/consultation.svg',
      summary: 'Same-day urgent appointment for acute fracture and root infection. Pain resolved immediately with rotary root canal therapy and a precision ceramic crown.',
      metric: '< 2 hrs',
      metricLabel: 'Same-Day Emergency Relief'
    }
  ];

  return (
    <div id="portfolio" className="relative bg-[#111111] text-white pt-24 pb-28 overflow-hidden">
      
      {/* Top Concave Curved Divider Transition from Light to Dark */}
      <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 bg-[#faf9f5] rounded-b-[50%_100%] z-10 pointer-events-none transform -translate-y-1" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-20"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800 text-[11px] font-semibold uppercase tracking-[0.2em]">
            SMILE TRANSFORMATIONS
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Real Patient Results & <br />
            Smile Case Studies
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto font-sans-ui">
            Explore authentic transformations delivered by Dr. Milton Martinez at our Miami Beach dental studio.
          </p>
        </motion.div>

        {/* 2-Column Staggered Masonry Layout Matching Video */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Column */}
          <div className="space-y-12">
            {[cases[0], cases[2], cases[4]].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                onClick={() => handleCaseClick(item)}
                className="group relative bg-white text-neutral-900 rounded-3xl p-5 sm:p-6 shadow-2xl hover:shadow-neutral-800 transition-all duration-300 cursor-pointer"
              >
                {/* Tag on Top Left */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-full">
                    {item.tag}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                {/* Photo */}
                <div className="rounded-2xl overflow-hidden aspect-[16/11] mb-5 bg-neutral-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                </div>

                {/* Bottom Title and Year */}
                <div className="flex items-end justify-between pt-1">
                  <h3 className="font-serif-display text-xl sm:text-2xl font-medium text-neutral-900 leading-tight">
                    {item.title}
                  </h3>
                  <span className="text-xs font-medium text-neutral-400 border border-neutral-200 px-2.5 py-1 rounded-full">
                    {item.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column (Offset / Staggered) */}
          <div className="space-y-12 md:pt-16">
            {[cases[1], cases[3]].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                onClick={() => handleCaseClick(item)}
                className="group relative bg-white text-neutral-900 rounded-3xl p-5 sm:p-6 shadow-2xl hover:shadow-neutral-800 transition-all duration-300 cursor-pointer"
              >
                {/* Tag on Top Left */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-full">
                    {item.tag}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                {/* Photo */}
                <div className="rounded-2xl overflow-hidden aspect-[16/11] mb-5 bg-neutral-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                </div>

                {/* Bottom Title and Year */}
                <div className="flex items-end justify-between pt-1">
                  <h3 className="font-serif-display text-xl sm:text-2xl font-medium text-neutral-900 leading-tight">
                    {item.title}
                  </h3>
                  <span className="text-xs font-medium text-neutral-400 border border-neutral-200 px-2.5 py-1 rounded-full">
                    {item.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
