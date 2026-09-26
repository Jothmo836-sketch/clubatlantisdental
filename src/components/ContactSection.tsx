import React, { useState } from 'react';
import { Phone, Mail, CheckCircle, MapPin, Clock, ShieldCheck, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactSectionProps {
  selectedTreatment?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedTreatment }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    treatmentReason: selectedTreatment || 'New Patient Comprehensive Exam & Cleaning',
    insuranceProvider: 'Delta Dental / PPO',
    preferredDate: '',
    preferredTime: '',
    notes: ''
  });

  React.useEffect(() => {
    if (selectedTreatment) {
      setFormData((prev) => ({
        ...prev,
        treatmentReason: selectedTreatment
      }));
    }
  }, [selectedTreatment]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#faf9f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20"
        >
          <span className="text-[11px] tracking-[0.2em] font-semibold text-cyan-800 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200 uppercase">
            SCHEDULE YOUR VISIT
          </span>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-neutral-900 tracking-tight">
            Book Your Dental Appointment <br />
            At Club Atlantis Dental
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base font-sans-ui leading-relaxed">
            Conveniently located at 2555 Collins Ave in Miami Beach. Schedule your new patient visit, cosmetic smile consultation, or emergency care below.
          </p>
        </motion.div>

        {/* 2-Column Split: Clinic Location Details & Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context & Direct Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl text-neutral-900 leading-snug">
                Experience Gentle, <br />
                Personalized Care
              </h3>
            </div>

            {/* Direct Contact Badges */}
            <div className="pt-6 border-t border-neutral-200/80 space-y-4">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-cyan-700 shadow-xs shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-400 font-medium">Miami Beach Office</div>
                  <div className="text-sm font-semibold text-neutral-900">
                    2555 Collins Avenue, Suite C-3 <br />
                    <span className="text-neutral-600 font-normal">Miami Beach, FL 33140 (Club Atlantis)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-cyan-700 shadow-xs shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-400 font-medium">Direct Appointment Line</div>
                  <a href="tel:+13056729698" className="text-sm font-semibold text-neutral-900 hover:underline">
                    (305) 672-9698
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-cyan-700 shadow-xs shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-400 font-medium">Practice Hours</div>
                  <div className="text-xs font-semibold text-neutral-900">
                    Mon – Fri: 8:30 AM – 5:30 PM <br />
                    <span className="text-neutral-500 font-normal">Saturday: By Appointment / Emergency</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-cyan-700 shadow-xs shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-400 font-medium">Insurances Accepted</div>
                  <div className="text-xs text-neutral-700 font-medium">
                    Aetna • BCBS • Cigna • Delta Dental • Guardian • MetLife • CareCredit
                  </div>
                </div>
              </div>

            </div>

          </motion.div>

          {/* Right Column: High-Fidelity Dental Appointment Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-2xl"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-cyan-50 text-cyan-700 rounded-full mx-auto flex items-center justify-center border border-cyan-200">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif-display text-2xl font-bold text-neutral-900">
                    Appointment Request Received!
                  </h4>
                  <p className="text-neutral-600 text-sm max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-neutral-900">{formData.fullName || 'Patient'}</span>. Our patient coordinator from Club Atlantis Dental will call you at <span className="font-semibold text-neutral-900">{formData.phone || '(305) 672-9698'}</span> to confirm your appointment time.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-full text-xs font-semibold bg-neutral-900 text-white hover:bg-neutral-800 cursor-pointer"
                  >
                    Schedule Another Patient
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Patient Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g., Maria Sanchez"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Email Address & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="patient@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(305) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Treatment Reason & Insurance Provider */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                        Reason For Visit
                      </label>
                      <select
                        value={formData.treatmentReason}
                        onChange={(e) => setFormData({ ...formData, treatmentReason: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm text-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
                      >
                        <option value="New Patient Comprehensive Exam & Cleaning">New Patient Exam & Cleaning</option>
                        <option value="Cosmetic Veneers / Smile Makeover Consultation">Cosmetic Veneers / Smile Makeover</option>
                        <option value="Dental Implant Consultation">Dental Implant Consultation</option>
                        <option value="Emergency Tooth Pain / Broken Tooth">Emergency Tooth Relief (Same-Day)</option>
                        <option value="Crowns, Bridges or Fillings">Restorative Crowns or Fillings</option>
                        <option value="Teeth Whitening Treatment">In-Office Laser Teeth Whitening</option>
                        <option value="Essential Smile Care">Essential Smile Care ($29/mo)</option>
                        <option value="Premier Smile Club">Premier Smile Club ($59/mo)</option>
                        <option value="VIP Implant & Cosmetic Plan">VIP Implant & Cosmetic Plan ($99/mo)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                        Insurance / Payment
                      </label>
                      <select
                        value={formData.insuranceProvider}
                        onChange={(e) => setFormData({ ...formData, insuranceProvider: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm text-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
                      >
                        <option value="Delta Dental">Delta Dental PPO</option>
                        <option value="Aetna">Aetna PPO</option>
                        <option value="Cigna">Cigna Dental PPO</option>
                        <option value="BlueCross BlueShield">BlueCross BlueShield</option>
                        <option value="Guardian / MetLife">Guardian / MetLife</option>
                        <option value="CareCredit / No Insurance">CareCredit / Self-Pay / Smile Club</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date & Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                        Preferred Time of Day
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
                      >
                        <option value="">Select Time Window</option>
                        <option value="Morning (8:30 AM - 12:00 PM)">Morning (8:30 AM - 12:00 PM)</option>
                        <option value="Afternoon (12:00 PM - 5:30 PM)">Afternoon (12:00 PM - 5:30 PM)</option>
                        <option value="First Available Slot (Urgent)">First Available Slot (Urgent)</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-4 rounded-full bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800 transition-all shadow-md hover:shadow-xl active:scale-98 cursor-pointer"
                    >
                      Confirm Dental Appointment Request
                    </motion.button>
                  </div>

                </form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
