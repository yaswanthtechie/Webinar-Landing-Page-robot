import React, { useState } from 'react';
import { Calendar, Clock, Users, Award, Twitter, Linkedin } from 'lucide-react';
import RegistrationForm from './components/RegistrationForm';
import Toast from './components/Toast';
import WebinarVideoSection from './components/WebinarVideoSection';
import WhatYoullLearnSection from './components/WhatYoullLearnSection';
import FeaturesSection from './components/FeaturesSection';
import SpeakerBioSection from './components/SpeakerBioSection';
import SocialProofSection from './components/SocialProofSection';
import CountdownTimerSection from './components/CountdownTimerSection';
import { Footer } from './components/ui/footer';
import { SplineScene } from './components/ui/spline';
import { Spotlight } from './components/ui/spotlight';
import { FormData } from './types/form';
import { submitToGoogleSheets } from './services/googleSheets';

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error';
    isVisible: boolean;
  }>({
    message: '',
    type: 'success',
    isVisible: false,
  });

  const handleFormSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    
    try {
      await submitToGoogleSheets(formData);
      setToast({
        message: 'Registration successful! Check your email for webinar details.',
        type: 'success',
        isVisible: true,
      });
       // ✅ WhatsApp Redirect Feature
    const whatsappUrl = import.meta.env.VITE_WHATSAPP_CHANNEL_URL;
    if (whatsappUrl && whatsappUrl !== 'YOUR_WHATSAPP_CHANNEL_URL') {
      setTimeout(() => {
        window.location.href = whatsappUrl;
      }, 2000); // delay for UX
    }

    } catch (error) {
      setToast({
        message: 'Registration failed. Please try again.',
        type: 'error',
        isVisible: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  // Smooth scroll to registration form
  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('registration');
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-black">
      {/* Content Overlay */}
      <div className="relative z-10">
        <Toast
          message={toast.message}
          type={toast.type}
          isVisible={toast.isVisible}
          onClose={closeToast}
        />
        
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">PrimoBoostAi</span>
              </div>
              <div className="hidden sm:flex items-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>September 7, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>2:00 PM IST</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
          {/* Spline Background */}
          <div className="absolute inset-0 z-0">
             <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div className="text-center lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm mb-8">
                  <span className="text-xs font-light uppercase tracking-[0.08em] text-white/70">Free</span>
                  <span className="h-1 w-1 rounded-full bg-white/40" />
                  <span className="text-sm font-light tracking-tight text-white/90">Live Webinar</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                  Crack Your Dream Job with
                  <span className="block bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent font-bold"> PrimoBoost AI - Free Live Webinar</span>
                </h1>
                <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 font-light">
                   Join us on September 7 to learn resume building, job application strategies, and AI-driven tools to get hired faster.
                </p>
                
                {/* Event Details */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 mb-12">
                  <div className="flex items-center gap-2 text-white/90 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                    <Calendar className="w-5 h-5 text-blue-300" />
                    <span className="font-light">September 7, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                    <Clock className="w-5 h-5 text-blue-300" />
                    <span className="font-light">2:00 PM - 4:00 PM IST</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                    <Users className="w-5 h-5 text-blue-300" />
                    <span className="font-light">Limited Seats</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mb-12">
                  <button 
                    onClick={scrollToRegistration}
                    className="bg-gradient-to-r from-blue-400 to-purple-400 text-white font-medium py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-4 focus:ring-blue-400/50"
                  >
                    Reserve Free Seat
                  </button>
                </div>
              </div>

              {/* Right Column (Placeholder) */}
              <div className="hidden lg:block"></div>
            </div>
            
            {/* Key Points */}
            <div className="mt-16">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-blue-300" />
                  </div>
                  <h3 className="font-light text-white mb-2">Resume Building</h3>
                  <p className="text-sm text-white/70 font-light">Create ATS-optimized resumes that get you noticed by recruiters</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-purple-300" />
                  </div>
                  <h3 className="font-light text-white mb-2">Job Application Strategies</h3>
                  <p className="text-sm text-white/70 font-light">Learn proven techniques to increase your interview callbacks</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-6 h-6 text-green-300" />
                  </div>
                  <h3 className="font-light text-white mb-2">AI-Driven Tools</h3>
                  <p className="text-sm text-white/70 font-light">Leverage AI technology to fast-track your job search process</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Webinar Video Section */}
        <WebinarVideoSection />

        {/* What You'll Learn Section */}
        <WhatYoullLearnSection />

        {/* PrimoBoost AI Features Section */}
        <FeaturesSection />

        {/* Speaker Bio Section */}
        <SpeakerBioSection />

        {/* Countdown Timer Section */}
        <CountdownTimerSection />

        {/* Registration Form Section */}
        <section id="registration" className="py-16 sm:py-24 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extralight text-white mb-4">
                Secure Your Spot Today
              </h2>
              <p className="text-lg text-white/80 font-light">
                Fill out the form below to register for this exclusive webinar
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 sm:p-12">
              <RegistrationForm 
                onSubmit={handleFormSubmit}
                isSubmitting={isSubmitting}
              />
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <SocialProofSection />

        {/* Footer */}
        <Footer
          logo={
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
          }
          brandName="PrimoBoostAi"
          socialLinks={[
            {
              icon: <Twitter className="h-5 w-5" />,
              href: "#",
              label: "Twitter",
            },
            {
              icon: <Linkedin className="h-5 w-5" />,
              href: "#",
              label: "LinkedIn",
            },
          ]}
          mainLinks={[
            { href: "#", label: "About" },
            { href: "#", label: "Contact" },
          ]}
          legalLinks={[
            { href: "#", label: "Privacy Policy" },
            { href: "#", label: "Terms of Service" },
          ]}
          copyright={{
            text: "© 2025 PrimoBoostAi.",
            license: "All rights reserved.",
          }}
        />
      </div>
    </div>
  );
}

export default App;
