import React, { useState } from 'react';
import { ArrowUpRight, X, Clock, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Article {
  id: string;
  badge: string;
  title: string;
  image: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
}

interface InsightsProps {
  onBookTreatment?: (treatment: string) => void;
}

export const Insights: React.FC<InsightsProps> = ({ onBookTreatment }) => {
  const handleArticleClick = (art: Article) => {
    let treatment = 'New Patient Comprehensive Exam & Cleaning';
    if (art.title.includes('Veneer')) treatment = 'Cosmetic Veneers / Smile Makeover Consultation';
    if (art.title.includes('Implant')) treatment = 'Dental Implant Consultation';
    if (art.title.includes('Emergency')) treatment = 'Emergency Tooth Pain / Broken Tooth';

    if (onBookTreatment) {
      onBookTreatment(treatment);
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const articles: Article[] = [
    {
      id: 'art-1',
      badge: 'COSMETIC DENTISTRY',
      title: 'Porcelain Veneers vs. Composite Bonding: Which Smile Makeover Is Right For You?',
      image: '/images/operatory.svg',
      readTime: '4 min read',
      date: 'Sept 15, 2026',
      excerpt: 'Discover the key differences in durability, stain resistance, and aesthetics between custom handcrafted ceramic veneers and direct composite bonding.',
      content: [
        'Porcelain veneers are custom-fabricated from high-strength ceramic (such as E.max) that replicates the natural translucency and light reflection of real dental enamel.',
        'While composite bonding provides a faster, single-visit solution for minor chips, porcelain veneers offer superior longevity of 15-20+ years and complete resistance to coffee and red wine staining, making them the premier choice for Miami Beach residents.'
      ]
    },
    {
      id: 'art-2',
      badge: 'IMPLANT DENTISTRY',
      title: 'Why Dental Implants Remain the Gold Standard for Permanent Tooth Replacement',
      image: '/images/consultation.svg',
      readTime: '6 min read',
      date: 'Sept 08, 2026',
      excerpt: 'Unlike traditional bridges or dentures, dental implants fuse directly with your jawbone to prevent bone resorption and preserve your youthful facial structure.',
      content: [
        'When a tooth is lost, the surrounding jawbone gradually deteriorates due to lack of stimulation. Biocompatible titanium implants integrate seamlessly with the bone through osseointegration.',
        'At Club Atlantis Dental, Dr. Milton Martinez utilizes 3D computer-guided planning to ensure exact millimeter placement, providing natural bite force and lifetime durability.'
      ]
    },
    {
      id: 'art-3',
      badge: 'PREVENTIVE CARE',
      title: 'How Routine Ultrasonic Cleanings Protect Both Your Heart and Your Gums',
      image: '/images/equipment.svg',
      readTime: '5 min read',
      date: 'Aug 30, 2026',
      excerpt: 'Modern research confirms a direct link between chronic periodontal inflammation and systemic cardiovascular wellness. Here is how routine care keeps you healthy.',
      content: [
        'Periodontal disease allows harmful oral bacteria to enter the bloodstream, triggering systemic arterial inflammation and increasing heart disease risks.',
        'Bi-annual professional hygiene cleanings eliminate tartar and subgingival plaque that regular brushing and flossing cannot reach, ensuring a fresh, confident smile.'
      ]
    }
  ];

  return (
    <section id="insights" className="py-20 md:py-28 bg-[#faf9f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <span className="text-[11px] tracking-[0.2em] font-semibold text-cyan-800 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200 uppercase">
            DENTAL EDUCATION & INSIGHTS
          </span>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-neutral-900 tracking-tight">
            Expert Insights For A <br />
            Healthier, Brighter Smile
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base font-sans-ui leading-relaxed">
            Stay informed with clinical guidance, cosmetic dental trends, and oral wellness advice from Dr. Milton Martinez, DMD.
          </p>
        </motion.div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              onClick={() => handleArticleClick(art)}
              className="group cursor-pointer space-y-4 flex flex-col"
            >
              {/* Image Container with Badge */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-900 shadow-md group-hover:shadow-2xl transition-all duration-300">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-bold tracking-wider uppercase text-white border border-white/20">
                    {art.badge}
                  </span>
                </div>
              </div>

              {/* Title */}
              <div className="space-y-2 pt-1">
                <h3 className="font-serif-display text-xl sm:text-2xl font-medium text-neutral-900 group-hover:text-cyan-800 transition-colors leading-snug">
                  {art.title}
                </h3>
              </div>

              {/* Read More Link */}
              <div className="pt-1 mt-auto flex items-center gap-1 text-xs font-semibold text-neutral-900 group-hover:text-cyan-800">
                <span>Book consultation on this topic</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Insights Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleArticleClick(articles[0])}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-all shadow-md active:scale-98 cursor-pointer"
          >
            <span>Book A Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};
