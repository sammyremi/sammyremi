"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  company: string;
  services: string[];
  projectDetails: string;
  budget: string;
  preferredContact: string;
}

const serviceOptions = [
  "Website Development",
  "Mobile Application",
  "Custom Business Software",
  "Backend & APIs",
  "AI & Automation",
  "Technical Strategy",
];

const budgetOptions = [
  "< $5,000",
  "$5,000 – $15,000",
  "$15,000 – $30,000",
  "$30,000+",
];

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    services: [],
    projectDetails: "",
    budget: "",
    preferredContact: "Email",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
    if (errors.services) setErrors((prev) => ({ ...prev, services: undefined }));
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.services.length === 0) {
      newErrors.services = "Please select at least one service requirement";
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = "Please briefly describe your project goals";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate structured submission flow
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-neutral-900 text-white dark:bg-neutral-900 p-8 sm:p-12 rounded-3xl border border-[#D96B18]/30 flex flex-col items-center text-center gap-6 shadow-2xl"
      >
        <div className="w-16 h-16 rounded-full bg-[#D96B18]/20 flex items-center justify-center text-[#D96B18]">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
          Inquiry Received!
        </h3>

        <p className="text-neutral-300 text-base sm:text-lg max-w-lg leading-relaxed">
          Thank you for reaching out to <strong className="text-white">SammyRemi Technologies</strong>.
          We have recorded your details and will review your project requirements promptly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4 text-sm text-neutral-400">
          <a
            href="mailto:officialsammyremi@gmail.com"
            className="inline-flex items-center gap-2 hover:text-[#D96B18] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#D96B18]" />
            officialsammyremi@gmail.com
          </a>
          <a
            href="tel:+2348147468979"
            className="inline-flex items-center gap-2 hover:text-[#D96B18] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#D96B18]" />
            +2348147468979
          </a>
        </div>

        <Button
          variant="outline-light"
          size="md"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              email: "",
              company: "",
              services: [],
              projectDetails: "",
              budget: "",
              preferredContact: "Email",
            });
          }}
          className="mt-4"
        >
          Submit Another Inquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-[#131622] p-8 sm:p-12 rounded-3xl border border-neutral-200 dark:border-white/10 shadow-xl flex flex-col gap-8 transition-colors"
    >
      {/* Name & Email Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
            Your Name <span className="text-[#D96B18]">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-4 py-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#D96B18] transition-all ${
              errors.name ? "border-red-500" : "border-neutral-300 dark:border-neutral-700"
            }`}
          />
          {errors.name && (
            <span className="inline-flex items-center gap-1 text-xs text-red-500 font-medium">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
            </span>
          )}
        </div>

        {/* Email Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
            Work Email <span className="text-[#D96B18]">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#D96B18] transition-all ${
              errors.email ? "border-red-500" : "border-neutral-300 dark:border-neutral-700"
            }`}
          />
          {errors.email && (
            <span className="inline-flex items-center gap-1 text-xs text-red-500 font-medium">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
            </span>
          )}
        </div>
      </div>

      {/* Company Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="company" className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
          Company / Business Name <span className="text-neutral-400 font-normal">(Optional)</span>
        </label>
        <input
          id="company"
          type="text"
          placeholder="Acme Corp"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full px-4 py-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#D96B18] transition-all"
        />
      </div>

      {/* What do you need? Service Checkboxes */}
      <div className="flex flex-col gap-3">
        <label className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
          What services do you need? <span className="text-[#D96B18]">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {serviceOptions.map((service) => {
            const isSelected = formData.services.includes(service);
            return (
              <button
                type="button"
                key={service}
                onClick={() => handleServiceToggle(service)}
                className={`px-4 py-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all text-left flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? "bg-[#D96B18]/15 border-[#D96B18] text-[#D96B18] dark:text-[#F59E0B]"
                    : "bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-[#D96B18]/50"
                }`}
              >
                <span>{service}</span>
                {isSelected && <CheckCircle2 className="w-4 h-4 text-[#D96B18] shrink-0" />}
              </button>
            );
          })}
        </div>
        {errors.services && (
          <span className="inline-flex items-center gap-1 text-xs text-red-500 font-medium pt-1">
            <AlertCircle className="w-3.5 h-3.5" /> {errors.services}
          </span>
        )}
      </div>

      {/* Project Details */}
      <div className="flex flex-col gap-2">
        <label htmlFor="projectDetails" className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
          Tell us about your project <span className="text-[#D96B18]">*</span>
        </label>
        <textarea
          id="projectDetails"
          rows={4}
          placeholder="Describe your project, goals, key features, or operational challenges..."
          value={formData.projectDetails}
          onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
          className={`w-full px-4 py-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#D96B18] transition-all resize-none ${
            errors.projectDetails ? "border-red-500" : "border-neutral-300 dark:border-neutral-700"
          }`}
        />
        {errors.projectDetails && (
          <span className="inline-flex items-center gap-1 text-xs text-red-500 font-medium">
            <AlertCircle className="w-3.5 h-3.5" /> {errors.projectDetails}
          </span>
        )}
      </div>

      {/* Budget Range & Preferred Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Budget Selection */}
        <div className="flex flex-col gap-2">
          <label htmlFor="budget" className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
            Estimated Budget <span className="text-neutral-400 font-normal">(Optional)</span>
          </label>
          <select
            id="budget"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D96B18] transition-all"
          >
            <option value="">Select a budget range</option>
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Preferred Contact Method */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
            Preferred Contact Method
          </label>
          <div className="flex items-center gap-4 pt-2">
            {["Email", "Phone / WhatsApp"].map((method) => (
              <label key={method} className="inline-flex items-center gap-2 cursor-pointer text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                <input
                  type="radio"
                  name="preferredContact"
                  value={method}
                  checked={formData.preferredContact === method}
                  onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                  className="accent-[#D96B18] w-4 h-4"
                />
                <span>{method}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Submitting Inquiry...
            </span>
          ) : (
            <span className="inline-flex items-center gap-2">
              Send Project Inquiry <Send className="w-4 h-4 stroke-[2.5]" />
            </span>
          )}
        </Button>

        <span className="text-xs text-neutral-500 text-center sm:text-right">
          Or reach out directly: <strong className="text-neutral-800 dark:text-neutral-200">officialsammyremi@gmail.com</strong>
        </span>
      </div>
    </form>
  );
};
