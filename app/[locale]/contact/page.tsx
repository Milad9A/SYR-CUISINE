"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    try {
      const response = await fetch("https://formspree.io/f/xgvraakp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('hero.title')}</h1>
            <p className="text-xl text-gray-300">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('info.title')}</h2>
              <p className="text-gray-600 mb-8">
                {t('info.description')}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t('info.phone')}</h3>
                    <p className="text-gray-600">
                      <a href="tel:514-238-8886" className="hover:text-blue-600">Elia: 514-238-8886</a>
                    </p>
                    <p className="text-gray-600">
                      <a href="tel:514-497-7190" className="hover:text-blue-600">Louay: 514-497-7190</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t('info.email')}</h3>
                    <a href="mailto:syrcuisine@gmail.com" className="text-gray-600 hover:text-blue-600">
                      syrcuisine@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t('info.location')}</h3>
                    <p className="text-gray-600">
                      {t('info.locationText')}<br />
                      {t('info.serviceArea')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">{t('info.hours')}</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>{t('info.weekdays')}</span>
                    <span className="font-medium">{t('info.weekdaysTime')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('info.weekends')}</span>
                    <span className="font-medium">{t('info.weekendsTime')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">{t('form.title')}</h2>
                
                {submitStatus === "success" && (
                  <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    {t('form.success')}
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    {t('form.error')}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('form.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={t('form.placeholder.name')}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={t('form.placeholder.email')}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={t('form.placeholder.phone')}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('form.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={t('form.placeholder.message')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      t('form.sending')
                    ) : (
                      <>
                        {t('form.submit')} <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                <p className="mt-4 text-sm text-gray-500 text-center">
                  * {t('form.required')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{t('map.title')}</h2>
            <p className="text-gray-600">
              {t('map.description')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
