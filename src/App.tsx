import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Team } from './components/Team';
import { VideoBanner } from './components/VideoBanner';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Insights } from './components/Insights';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const [selectedTreatment, setSelectedTreatment] = useState<string>('New Patient Comprehensive Exam & Cleaning');
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  // Initialize Lenis smooth scrolling for luxurious, buttery inertia
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    setLenisInstance(lenis);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Top page scroll indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      if (lenisInstance) {
        lenisInstance.scrollTo(el, { offset: -60, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenBooking = (treatmentName?: string) => {
    if (treatmentName) {
      setSelectedTreatment(treatmentName);
    }
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#1a1a1a] flex flex-col selection:bg-neutral-900 selection:text-white font-sans-ui relative">
      
      {/* Scroll Progress Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-neutral-900 origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Fixed Navigation Header */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onNavigate={scrollToSection}
        />

        <AboutUs />

        <Services onBookTreatment={handleOpenBooking} />

        <Portfolio onBookTreatment={handleOpenBooking} />

        <Team />

        <VideoBanner />

        <Pricing onSelectPlan={(plan) => handleOpenBooking(plan.name)} />

        <Testimonials />

        <FAQ onContactClick={() => scrollToSection('contact')} />

        <Insights onBookTreatment={handleOpenBooking} />

        <ContactSection selectedTreatment={selectedTreatment} />
      </main>

      {/* Global Curved Dark Footer */}
      <Footer onNavigate={(section) => section === 'contact' ? handleOpenBooking() : scrollToSection(section)} />

      {/* Floating WhatsApp Chat & Booking Button */}
      <WhatsAppButton onClick={() => handleOpenBooking()} />

    </div>
  );
}
