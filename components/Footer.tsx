"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              SYR <span className="text-blue-400">CUISINE</span>
            </h3>
            <p className="text-gray-400 mb-4">
              {t('description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  {tNav('about')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  {tNav('services')}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  {tNav('gallery')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  {tNav('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('services')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t('servicesList.design')}</li>
              <li>{t('servicesList.cabinets')}</li>
              <li>{t('servicesList.airbrushing')}</li>
              <li>{t('servicesList.renovation')}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">Laval, Quebec</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div className="text-gray-400">
                  <div>Elia: <a href="tel:514-238-8886" className="hover:text-white">514-238-8886</a></div>
                  <div>Louay: <a href="tel:514-497-7190" className="hover:text-white">514-497-7190</a></div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:syrcuisine@gmail.com" className="text-gray-400 hover:text-white">
                  syrcuisine@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
