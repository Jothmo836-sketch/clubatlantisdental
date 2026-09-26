import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Plan {
  id: string;
  name: string;
  badge?: string;
  price: number;
  period: string;
  description: string;
  features: string[];
}

interface PricingProps {
  onSelectPlan: (plan: Plan) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const plans: Plan[] = [
    {
      id: 'essential-preventive',
      name: 'Essential Smile Care',
      price: 29,
      period: 'month',
      description: 'Ideal for adults seeking comprehensive preventive oral wellness with zero deductibles or insurance wait periods.',
      features: [
        '2 Comprehensive Dental Hygiene Cleanings / Year',
        'Annual Doctor Exams & Oral Cancer Screenings',
        'All Routine Low-Radiation Digital 3D X-Rays',
        '1 Emergency Exam & Diagnostic Assessment / Year',
        '15% Off All Restorative Treatments & Fillings'
      ]
    },
    {
      id: 'premier-wellness',
      name: 'Premier Smile Club',
      badge: 'Most Popular',
      price: 59,
      period: 'month',
      description: 'Designed for optimal periodontal maintenance, smile brightness, and ongoing restorative savings.',
      features: [
        '3 Comprehensive Cleanings & Periodontal Checks / Year',
        'Unlimited Doctor Consultations & Digital Diagnostics',
        'Annual Professional In-Office Whitening Treatment',
        '2 Emergency Exams with Same-Day Priority Booking',
        '20% Off All Fillings, Root Canals, Crowns & Bridges',
        '15% Off Porcelain Veneers & Cosmetic Treatments'
      ]
    },
    {
      id: 'vip-restorative',
      name: 'VIP Implant & Cosmetic Plan',
      price: 99,
      period: 'month',
      description: 'The ultimate all-inclusive dental wellness package for patients planning smile makeovers, veneers, or implants.',
      features: [
        '4 Periodontal Maintenance & Hygiene Visits / Year',
        'Unlimited Digital 3D CBCT Scans & Doctor Exams',
        'Complimentary Annual Take-Home Whitening Kit',
        'Unlimited Same-Day Emergency Consultations',
        '25% Off All Dental Implants, Crowns & Oral Surgery',
        '20% Off Custom Porcelain Veneers & Clear Aligners',
        'Direct Access to Dr. Milton Martinez Concierge'
      ]
    }
  ];

  const [selectedPlan, setSelectedPlan] = useState<Plan>(plans[1]);

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#faf9f5] overflow-hidden">
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
            NO INSURANCE? NO PROBLEM
          </span>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-neutral-900 tracking-tight">
            Club Atlantis Dental <br />
            Smile Membership Plans
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base font-sans-ui leading-relaxed">
            Transparent, affordable dental wellness for Miami Beach residents. No deductibles, no maximums, no pre-authorizations, and instant savings on all treatments.
          </p>
        </motion.div>

        {/* Pricing Layout Matching Video */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Interactive Plan Selector */}
          <div className="lg:col-span-7 space-y-4">
            {plans.map((plan, index) => {
              const isSelected = selectedPlan.id === plan.id;
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                  onClick={() => setSelectedPlan(plan)}
                  className={`relative p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-neutral-900 shadow-xl ring-1 ring-neutral-900'
                      : 'bg-white/60 border-neutral-200/80 hover:bg-white hover:border-neutral-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Radio Selector */}
                      <div className="mt-1">
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                            isSelected
                              ? 'border-neutral-900 bg-neutral-900 text-white'
                              : 'border-neutral-300 bg-white'
                          }`}
                        >
                          {isSelected && (
                            <motion.div
                              layoutId="activeRadio"
                              className="w-2 h-2 rounded-full bg-white"
                              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                            />
                          )}
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif-display text-xl font-semibold text-neutral-900">
                            {plan.name}
                          </h3>
                          {plan.badge && (
                            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-900 border border-cyan-200">
                              {plan.badge}
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-neutral-500 leading-relaxed max-w-md font-sans-ui">
                          {plan.description}
                        </p>
                      </div>
                    </div>

                    {/* Price Right */}
                    <div className="text-right shrink-0">
                      <span className="font-serif-display text-2xl font-bold text-neutral-900">
                        ${plan.price}
                      </span>
                      <span className="text-xs text-neutral-400 block font-normal">
                        / {plan.period}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Price Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-3xl p-8 border border-neutral-200/90 shadow-2xl space-y-6">
              
              <div className="space-y-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedPlan.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-serif-display text-4xl sm:text-5xl font-bold text-neutral-900">
                        ${selectedPlan.price}
                      </span>
                      <span className="text-sm text-neutral-500 font-medium">
                        / {selectedPlan.period}
                      </span>
                    </div>
                    <h4 className="font-serif-display text-xl font-semibold text-neutral-800 mt-1">
                      {selectedPlan.name}
                    </h4>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelectPlan(selectedPlan)}
                className="w-full py-3.5 rounded-full bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800 transition-all shadow-md hover:shadow-xl active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Join Smile Membership</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              {/* Feature Checklist */}
              <div className="pt-4 border-t border-neutral-100 space-y-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedPlan.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    {selectedPlan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-cyan-100 text-cyan-900 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
