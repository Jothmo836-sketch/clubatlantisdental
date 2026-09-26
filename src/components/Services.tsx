import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
}

interface ServicesProps {
  onBookTreatment?: (treatment: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onBookTreatment }) => {
  const handleServiceClick = (serviceTitle: string) => {
    if (onBookTreatment) {
      onBookTreatment(serviceTitle);
    } else {
      const element = document.getElementById('contact');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services: ServiceItem[] = [
    {
      id: 'cosmetic-dentistry',
      title: 'Cosmetic Dentistry & Veneers',
      category: 'Smile Aesthetics',
      image: '/images/operatory.svg',
      shortDesc: 'Custom porcelain veneers, professional in-office whitening, and aesthetic bonding for a radiant smile.',
      fullDesc: 'At Club Atlantis Dental, Dr. Milton Martinez crafts bespoke porcelain veneers and cosmetic smile designs tailored to your facial symmetry and desired brightness, delivering stunning, natural-looking results.',
      deliverables: [
        'Custom Handcrafted Porcelain Veneers',
        'In-Office Laser Teeth Whitening',
        'Biomimetic Aesthetic Composite Bonding',
        'Digital Smile Design & Virtual Preview'
      ]
    },
    {
      id: 'dental-implants',
      title: 'Dental Implants & Restorations',
      category: 'Implantology',
      image: '/images/consultation.svg',
      shortDesc: 'Permanent titanium and ceramic implant restorations for missing teeth with lifelike strength and beauty.',
      fullDesc: 'Restore your natural chewing function and confidence with state-of-the-art dental implants. From single-tooth replacements to full-arch restorations, we utilize 3D digital guided surgery for precision and rapid healing.',
      deliverables: [
        'Single & Multi-Tooth Implant Restorations',
        'Full-Arch All-on-X Fixed Solutions',
        'Custom Zirconia & Porcelain Implant Crowns',
        'Bone Grafting & Sinus Lift Site Preparation'
      ]
    },
    {
      id: 'restorative-dentistry',
      title: 'Restorative Care & Endodontics',
      category: 'Tooth Preservation',
      image: '/images/equipment.svg',
      shortDesc: 'Gentle rotary root canal therapy, tooth-colored crowns, bridges, and durable biomimetic fillings.',
      fullDesc: 'Dr. Martinez specializes in pain-free restorative treatments. Whether you need rotary root canal therapy to save a damaged tooth or high-strength ceramic crowns, we preserve your natural smile with gentle precision.',
      deliverables: [
        'Rotary & Microscopic Root Canal Therapy',
        'Metal-Free E.max & Zirconia Crowns',
        'Durable Fixed & Removable Prosthodontics',
        'Tooth-Colored Ceramic Inlays & Onlays'
      ]
    },
    {
      id: 'preventive-care',
      title: 'Preventive & Family Hygiene',
      category: 'Total Wellness',
      image: '/images/operatory.svg',
      shortDesc: 'Comprehensive cleanings, digital low-radiation X-rays, periodontal health, and oral cancer screenings.',
      fullDesc: 'Preventive care is the cornerstone of long-term dental health. Our gentle hygiene cleanings, non-invasive periodontal therapies, and advanced 3D diagnostics keep your teeth and gums healthy for a lifetime.',
      deliverables: [
        'Gentle Ultrasonic Prophylaxis Cleanings',
        'Deep Scaling & Periodontal Therapy',
        'Digital Low-Dose 3D Cone Beam Imaging',
        'Comprehensive Oral Cancer & Bite Screenings'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#faf9f5] overflow-hidden">
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
            OUR CLINICAL SERVICES
          </span>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-neutral-900 tracking-tight">
            Comprehensive Dental Excellence <br />
            In Miami Beach
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base font-sans-ui leading-relaxed">
            From routine preventive checkups to advanced smile makeovers and implant restorations, experience gentle, personalized care under one roof on Collins Avenue.
          </p>
        </motion.div>

        {/* 4 Cards Grid with Staggered Entrance & Hover Zoom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              onClick={() => handleServiceClick(service.title)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-neutral-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-end aspect-[3/4.2]"
            >
              {/* Background Image with Zoom on Hover */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.88] group-hover:brightness-95"
              />

              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent transition-opacity duration-300" />

              {/* Card Content Overlay */}
              <div className="relative p-6 space-y-2 text-white">
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-cyan-500/30 backdrop-blur-md text-[10px] uppercase font-semibold tracking-wider text-cyan-200 border border-cyan-300/30">
                  {service.category}
                </div>

                <h3 className="font-serif-display text-xl sm:text-2xl font-medium leading-snug">
                  {service.title}
                </h3>

                <div className="pt-2 flex items-center gap-1 text-xs font-semibold text-white/90 group-hover:text-white">
                  <span>Book this treatment</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleServiceClick('New Patient Comprehensive Exam & Cleaning')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-800 hover:text-neutral-950 transition-colors py-2 px-5 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 cursor-pointer shadow-xs"
          >
            <span>Book A Dental Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};
