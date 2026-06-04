import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Mail, User, Phone, MessageSquare, Check, ArrowRight, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FadeIn from "@/components/ui/FadeIn";

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const services = [
    "Signature IV Drip",
    "NAD+ Restoration",
    "Hormone Optimization",
    "Medical Weight Loss",
    "Vitamin Injections",
    "Lab Testing & Panels"
  ];

  const timeSlots = ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F9F7F5] flex items-center justify-center px-6">
        <FadeIn>
          <div className="max-w-md w-full text-center">
            <div className="w-20 h-20 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-8">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h2 className="font-serif text-5xl text-[#1a1a1a] mb-6 italic">Request Received</h2>
            <p className="text-[#3D2B1F]/60 leading-relaxed mb-10">
              Thank you for choosing MyJoviRX. A member of our medical team will reach out
              within 24 hours to confirm your consultation and answer any questions.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-[10px] tracking-[0.4em] uppercase border-b border-[#1a1a1a] pb-2 hover:text-[#B48A8E] hover:border-[#B48A8E] transition-colors"
            >
              Return to Booking
            </button>
          </div>
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F7F5] pt-24">
      <div className="flex flex-col lg:flex-row min-h-screen">

        {/* Left Side: Editorial Content & Image */}
        <div className="lg:w-1/2 bg-[#1a1a1a] relative overflow-hidden flex flex-col justify-between p-12 lg:p-24 text-white">
          <div className="absolute inset-0 opacity-40">
            <img
              src="/hero-1.jpg"
              alt="MyJoviRX wellness lounge"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          <div className="relative z-10">
            <FadeIn>
              <p className="text-[#E8B4B8] text-[10px] tracking-[0.6em] uppercase mb-8">Consultations</p>
              <h1 className="font-serif text-6xl md:text-8xl mb-8 leading-tight">
                Start Feeling <br />
                <span className="italic font-light">Better.</span>
              </h1>
              <div className="w-20 h-px bg-white/20 mb-12" />
              <p className="text-white/60 text-lg max-w-md leading-relaxed">
                Tell us a little about your goals and we'll match you with the right
                provider and protocol. Most consultations are available in-clinic or
                virtually via telehealth.
              </p>
            </FadeIn>
          </div>

          <div className="relative z-10 space-y-8 mt-20">
            <div className="flex items-start gap-6">
              <Shield className="w-5 h-5 text-[#E8B4B8] mt-1" />
              <div>
                <h4 className="text-[11px] tracking-widest uppercase mb-2">Medical Intake</h4>
                <p className="text-white/40 text-xs leading-relaxed max-w-xs">
                  A licensed provider reviews your health history before any treatment,
                  so every protocol is safe and tailored to you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Refined Form */}
        <div className="lg:w-1/2 p-8 lg:p-24 flex items-center">
          <div className="max-w-xl w-full mx-auto">
            <FadeIn delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-12">

                {/* Section 1: Personal */}
                <div className="space-y-8">
                  <h3 className="text-[10px] tracking-[0.4em] uppercase text-[#B48A8E] border-b border-[#1a1a1a]/10 pb-4">
                    01. Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] tracking-widest uppercase text-[#1a1a1a]/40">Full Name</label>
                      <Input
                        required
                        className="border-0 border-b border-[#1a1a1a]/10 bg-transparent rounded-none px-0 focus-visible:ring-0 focus:border-[#1a1a1a] transition-colors"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] tracking-widest uppercase text-[#1a1a1a]/40">Email Address</label>
                      <Input
                        type="email"
                        required
                        className="border-0 border-b border-[#1a1a1a]/10 bg-transparent rounded-none px-0 focus-visible:ring-0 focus:border-[#1a1a1a] transition-colors"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Treatment Interest */}
                <div className="space-y-8">
                  <h3 className="text-[10px] tracking-[0.4em] uppercase text-[#B48A8E] border-b border-[#1a1a1a]/10 pb-4">
                    02. Treatment Interest
                  </h3>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase text-[#1a1a1a]/40">Choose Treatment</label>
                    <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger className="border-0 border-b border-[#1a1a1a]/10 bg-transparent rounded-none px-0 focus:ring-0 h-12 shadow-none">
                        <SelectValue placeholder="Select from menu" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none bg-[#F9F7F5] border-[#1a1a1a]/10">
                        {services.map(s => (
                          <SelectItem key={s} value={s} className="focus:bg-[#1a1a1a] focus:text-white rounded-none">{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Section 3: Availability */}
                <div className="space-y-8">
                  <h3 className="text-[10px] tracking-[0.4em] uppercase text-[#B48A8E] border-b border-[#1a1a1a]/10 pb-4">
                    03. Preferred Timing
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] tracking-widest uppercase text-[#1a1a1a]/40">Preferred Date</label>
                      <Input
                        type="date"
                        className="border-0 border-b border-[#1a1a1a]/10 bg-transparent rounded-none px-0 focus-visible:ring-0 focus:border-[#1a1a1a] transition-colors"
                        onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] tracking-widest uppercase text-[#1a1a1a]/40">Preferred Time</label>
                      <Select onValueChange={(value) => setFormData({...formData, preferredTime: value})}>
                        <SelectTrigger className="border-0 border-b border-[#1a1a1a]/10 bg-transparent rounded-none px-0 focus:ring-0 h-12 shadow-none">
                          <SelectValue placeholder="Time Slot" />
                        </SelectTrigger>
                        <SelectContent className="rounded-none bg-[#F9F7F5] border-[#1a1a1a]/10">
                          {timeSlots.map(t => (
                            <SelectItem key={t} value={t} className="focus:bg-[#1a1a1a] focus:text-white rounded-none">{t}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Section 4: Goals */}
                <div className="space-y-8">
                  <h3 className="text-[10px] tracking-[0.4em] uppercase text-[#B48A8E] border-b border-[#1a1a1a]/10 pb-4">
                    04. Your Goals
                  </h3>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase text-[#1a1a1a]/40">Notes or Health Goals</label>
                    <Textarea
                      placeholder="Tell us what you'd like to address or achieve..."
                      className="border-0 border-b border-[#1a1a1a]/10 bg-transparent rounded-none px-0 focus-visible:ring-0 focus:border-[#1a1a1a] min-h-100px resize-none shadow-none"
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#1a1a1a] text-white py-8 rounded-none text-[10px] tracking-[0.5em] uppercase hover:bg-[#B48A8E] transition-all group"
                >
                  Request Consultation
                  <ArrowRight className="w-4 h-4 ml-4 transition-transform group-hover:translate-x-2" />
                </Button>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
