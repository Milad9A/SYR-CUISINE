"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/src/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('nav');
  const locale = useLocale();

  const navLinks = [
    { href: "/", label: t('home') },
    { href: "/about", label: t('about') },
    { href: "/services", label: t('services') },
    { href: "/gallery", label: t('gallery') },
    { href: "/contact", label: t('contact') },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900">
            SYR <span className="text-blue-600">CUISINE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher />
            <a
              href="tel:514-238-8886"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {locale === 'fr' ? 'Appelez' : 'Call Us'}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="py-3 border-t border-gray-100 mt-2">
              <LanguageSwitcher />
            </div>
            <a
              href="tel:514-238-8886"
              className="block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center"
            >
              Call Us: 514-238-8886
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
