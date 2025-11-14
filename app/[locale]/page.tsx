import { Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing';

export default function Home() {
  const t = useTranslations('home');
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/kitchen-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              {t('hero.title')} <span className="text-blue-400">{t('hero.brand')}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                {t('hero.quoteButton')} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/gallery" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                {t('hero.galleryButton')}
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-sm">
              <a href="tel:514-238-8886" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>Elia: 514-238-8886</span>
              </a>
              <a href="tel:514-497-7190" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>Louay: 514-497-7190</span>
              </a>
              <a href="mailto:syrcuisine@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4" />
                syrcuisine@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('whyChoose.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('whyChoose.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <CheckCircle2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('whyChoose.quality.title')}</h3>
              <p className="text-gray-600">
                {t('whyChoose.quality.description')}
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <CheckCircle2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('whyChoose.custom.title')}</h3>
              <p className="text-gray-600">
                {t('whyChoose.custom.description')}
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <CheckCircle2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('whyChoose.expert.title')}</h3>
              <p className="text-gray-600">
                {t('whyChoose.expert.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('services.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-2">{t('services.design.title')}</h3>
              <p className="text-gray-600 text-sm">{t('services.design.description')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-2">{t('services.cabinets.title')}</h3>
              <p className="text-gray-600 text-sm">{t('services.cabinets.description')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-2">{t('services.airbrushing.title')}</h3>
              <p className="text-gray-600 text-sm">{t('services.airbrushing.description')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-2">{t('services.renovation.title')}</h3>
              <p className="text-gray-600 text-sm">{t('services.renovation.description')}</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              {t('services.learnMore')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            {t('cta.subtitle')}
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
