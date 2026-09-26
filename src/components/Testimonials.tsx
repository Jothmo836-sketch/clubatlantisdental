import React from 'react';
import { Star, CheckCircle, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface Review {
  id: string;
  name: string;
  role: string;
  avatar: string;
  headline: string;
  quote: string;
  rating: number;
  date: string;
}

export const Testimonials: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 'rev-1',
      name: 'Alexander V.',
      role: 'Miami Beach Resident • Verified Patient',
      avatar: './images/dentist-portrait.jpg',
      headline: '"Dr. Martinez is the Best Dentist in Miami Beach"',
      quote: 'Dr. Milton Martinez is extremely gentle and knowledgeable. I had a crown and cosmetic bonding done on Collins Ave and felt zero pain throughout the entire procedure.',
      rating: 5.0,
      date: '08/14/2026'
    },
    {
      id: 'rev-2',
      name: 'Camila Rodriguez',
      role: 'South Beach • Verified Patient',
      avatar: './images/hygienist-portrait.jpg',
      headline: '"Flawless Veneers & Beautiful Smile!"',
      quote: 'My porcelain veneers look so natural! The team at Club Atlantis Dental made me feel like VIP family from day one. I cannot stop smiling in my photos.',
      rating: 5.0,
      date: '08/29/2026'
    },
    {
      id: 'rev-3',
      name: 'Michael Stern',
      role: 'Collins Ave Resident • Verified Patient',
      avatar: './images/assistant-portrait.jpg',
      headline: '"Same-Day Emergency Tooth Relief"',
      quote: 'I had severe tooth pain on a Friday afternoon. Dr. Martinez took me in right away, did a rotary root canal, and I was completely pain-free within an hour.',
      rating: 5.0,
      date: '09/02/2026'
    },
    {
      id: 'rev-4',
      name: 'Isabella Bennett',
      role: 'Mid-Beach • Verified Patient',
      avatar: './images/coordinator-portrait.jpg',
      headline: '"Zero Wait Time and So Gentle"',
      quote: 'The clinic is immaculate, oceanfront vibe is relaxing, and they respect your time. Cleanings with the hygienist are so thorough yet painless.',
      rating: 5.0,
      date: '09/11/2026'
    },
    {
      id: 'rev-5',
      name: 'David Goldberg',
      role: 'Dental Implant Patient',
      avatar: './images/dentist-portrait.jpg',
      headline: '"Dental Implant Feels 100% Real"',
      quote: 'Dr. Martinez explained every step of my implant surgery. The precision and custom zirconia crown match my natural teeth perfectly. Highly recommend!',
      rating: 5.0,
      date: '09/18/2026'
    },
    {
      id: 'rev-6',
      name: 'Lucia Morales',
      role: 'Bilingual Care • Verified Patient',
      avatar: './images/hygienist-portrait.jpg',
      headline: '"Maravillosa Atención y Profesionalismo"',
      quote: 'El Dr. Milton y todo su equipo son súper amables y profesionales. Explican todo en español e inglés y aceptaron mi seguro sin ningún problema.',
      rating: 5.0,
      date: '09/22/2026'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#faf9f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tag & Split Header */}
        <div className="space-y-4 mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[11px] tracking-[0.2em] font-semibold text-cyan-800 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200 uppercase inline-block"
          >
            PATIENT REVIEWS & TESTIMONIALS
          </motion.span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-neutral-900 tracking-tight leading-tight">
                100% 5-Star Patient Rating <br />
                On Google & Zocdoc
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <p className="text-neutral-600 text-sm sm:text-base font-sans-ui leading-relaxed">
                Read real stories from Miami Beach residents and visitors who trust Dr. Milton Martinez and Club Atlantis Dental for their smile care.
              </p>
            </motion.div>
          </div>
        </div>

        {/* 3x2 Grid of Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.07), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/80 shadow-sm transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Author Info & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-11 h-11 rounded-full object-cover border border-neutral-100"
                    />
                    <div>
                      <h3 className="font-semibold text-sm text-neutral-900 leading-tight">
                        {rev.name}
                      </h3>
                      <p className="text-[11px] text-neutral-500">
                        {rev.role}
                      </p>
                    </div>
                  </div>

                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                </div>

                {/* Headline & Quote */}
                <div className="space-y-2">
                  <h4 className="font-serif-display text-lg font-medium text-neutral-900">
                    {rev.headline}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed italic font-sans-ui">
                    "{rev.quote}"
                  </p>
                </div>
              </div>

              {/* Bottom Rating and Date */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                  <span className="font-semibold text-neutral-800 ml-1">{rev.rating.toFixed(1)}</span>
                </div>

                <span className="text-[11px] font-mono text-neutral-400">
                  {rev.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
