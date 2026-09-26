import React from 'react';
import { Award, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  specialty: string;
  credentials: string;
}

export const Team: React.FC = () => {
  const team: TeamMember[] = [
    {
      id: 'milton-martinez',
      name: 'Dr. Milton Martinez',
      role: 'Lead Dentist & Implantologist, DMD',
      credentials: 'DMD • 15+ Years Experience',
      image: '/images/avatar-person.svg',
      bio: 'Dr. Milton Martinez brings over 15 years of clinical mastery in restorative dentistry, prosthodontics, cosmetic smile design, and rotary root canal therapy with a gentle, patient-focused approach.',
      specialty: 'Cosmetic Veneers & Dental Implants'
    },
    {
      id: 'hygienist-lead',
      name: 'Elena Rostova',
      role: 'Lead Registered Dental Hygienist',
      credentials: 'RDH • Periodontal Specialist',
      image: '/images/avatar-person.svg',
      bio: 'Elena provides thorough, anxiety-free preventive cleanings and advanced periodontal maintenance to protect your gum health and smile brightness.',
      specialty: 'Preventive & Laser Periodontal Care'
    },
    {
      id: 'clinical-assistant',
      name: 'Carlos Gomez',
      role: 'Lead Surgical & Restorative Assistant',
      credentials: 'CDA • Digital 3D Imaging',
      image: '/images/avatar-person.svg',
      bio: 'Carlos assists Dr. Martinez with digital 3D intraoral scanning and chairside comfort protocols, ensuring every patient enjoys a relaxed visit.',
      specialty: 'Patient Comfort & Surgical Assisting'
    },
    {
      id: 'patient-coordinator',
      name: 'Sofia Valdes',
      role: 'Patient Care & Insurance Coordinator',
      credentials: 'Bilingual Patient Concierge',
      image: '/images/avatar-person.svg',
      bio: 'Sofia coordinates insurance claims, CareCredit 0% financing, and custom treatment schedules so your dental journey is completely seamless and transparent.',
      specialty: 'Insurance Optimization & CareCredit'
    }
  ];

  return (
    <section id="team" className="relative py-24 md:py-32 bg-[#faf9f5] overflow-hidden">
      
      {/* Top Concave Curved Divider from Dark to Light */}
      <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 bg-[#111111] rounded-b-[50%_100%] z-10 pointer-events-none transform -translate-y-1" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <span className="text-[11px] tracking-[0.2em] font-semibold text-cyan-800 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200 uppercase">
            OUR CLINICAL TEAM
          </span>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-neutral-900 tracking-tight">
            Meet Dr. Milton Martinez & <br />
            Our Miami Beach Staff
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base font-sans-ui leading-relaxed">
            Passionate, bilingual dental professionals committed to gentle clinical care, patient comfort, and lifelong oral health.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col items-center text-center space-y-4"
            >
              {/* Image Container with subtle warm background */}
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-b from-[#eaf4f7] to-[#d7e9ee] shadow-md group-hover:shadow-2xl transition-all duration-300 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 filter brightness-95"
                />

                {/* Badge Overlay */}
                <div className="absolute bottom-3 left-3 right-3 bg-neutral-900/85 backdrop-blur-md text-white py-1.5 px-2 rounded-xl text-[10px] font-medium tracking-wide flex items-center justify-center gap-1.5 shadow-lg">
                  <Award className="w-3 h-3 text-cyan-300" />
                  <span>{member.credentials}</span>
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-1 pt-1">
                <h3 className="font-serif-display text-xl sm:text-2xl font-medium text-neutral-900">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-cyan-800">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
