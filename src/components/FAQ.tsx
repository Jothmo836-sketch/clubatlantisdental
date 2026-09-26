import React, { useState } from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQProps {
  onContactClick: () => void;
}

interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export const FAQ: React.FC<FAQProps> = ({ onContactClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      number: '01',
      question: 'Which dental insurance plans do you accept?',
      answer: 'We accept most major PPO dental insurances, including Delta Dental, Aetna, Cigna, BlueCross BlueShield, Guardian, and MetLife. Our bilingual team will file and maximize your claims on your behalf.'
    },
    {
      id: 'faq-2',
      number: '02',
      question: 'What if I do not have dental insurance?',
      answer: 'We offer an affordable in-house Smile Membership Plan starting at $29/month covering cleanings, exams, X-rays, and offering 15-25% discounts on all restorative and cosmetic treatments. We also accept CareCredit with 0% interest financing.'
    },
    {
      id: 'faq-3',
      number: '03',
      question: 'Do you offer same-day emergency dental appointments?',
      answer: 'Yes! If you are experiencing acute toothache, a broken tooth, or dental trauma, call our Collins Ave office immediately at (305) 672-9698. Dr. Milton Martinez provides prompt same-day emergency relief.'
    },
    {
      id: 'faq-4',
      number: '04',
      question: 'How do I know if I am a candidate for dental implants or veneers?',
      answer: 'During your initial comprehensive consultation, Dr. Martinez performs high-resolution 3D digital imaging to assess your bone density, gum health, and facial aesthetics, tailoring a customized treatment plan.'
    },
    {
      id: 'faq-5',
      number: '05',
      question: 'Where are you located and is parking available?',
      answer: 'Club Atlantis Dental is located at 2555 Collins Avenue, Suite C-3, Miami Beach, FL 33140 inside the Club Atlantis complex. Convenient parking is available for all scheduled dental visits.'
    },
    {
      id: 'faq-6',
      number: '06',
      question: 'Is treatment painful at Club Atlantis Dental?',
      answer: 'Not at all. Dr. Milton Martinez is renowned for his gentle touch and commitment to patient comfort, utilizing modern local anesthesia, rotary precision tools, and a calm, anxiety-free coastal atmosphere.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#faf9f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Title & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 space-y-6"
          >
            <span className="text-[11px] tracking-[0.2em] font-semibold text-cyan-800 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200 uppercase">
              PATIENT FAQS
            </span>

            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-neutral-900 tracking-tight leading-tight">
              Frequently Asked <br />
              Questions
            </h2>

            <p className="text-neutral-600 text-sm font-sans-ui">
              Have questions about your first visit, insurance benefits, or cosmetic consultations? Contact our front desk directly.
            </p>

            <div>
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onContactClick}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-all shadow-md hover:shadow-xl active:scale-98 cursor-pointer"
              >
                <span>Ask A Question</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Numbered Accordion List */}
          <div className="lg:col-span-8 divide-y divide-neutral-200/80">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="py-6 transition-colors"
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full text-left flex items-start justify-between gap-4 group cursor-pointer"
                  >
                    <div className="flex items-start gap-4 sm:gap-6">
                      <span className="font-serif-display text-lg sm:text-xl font-normal text-cyan-700 group-hover:text-neutral-900 transition-colors">
                        {faq.number}.
                      </span>
                      <h3 className="font-serif-display text-lg sm:text-xl font-medium text-neutral-900 group-hover:text-neutral-700 transition-colors">
                        {faq.question}
                      </h3>
                    </div>

                    <div className="mt-1 w-6 h-6 rounded-full flex items-center justify-center text-neutral-500 group-hover:text-neutral-900 transition-colors shrink-0">
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <Plus className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pl-10 sm:pl-14 pr-8 pt-3 pb-1">
                          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans-ui">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
