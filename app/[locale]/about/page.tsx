import { CheckCircle2, Users, Award, Wrench } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing';

export default function About() {
  const t = useTranslations('about');
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

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{t('story.title')}</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                {t('story.p1')}
              </p>
              <p className="mb-4">
                {t('story.p2')}
              </p>
              <p>
                {t('story.p3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t('whyChoose.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('whyChoose.quality.title')}</h3>
              <p className="text-gray-600">
                {t('whyChoose.quality.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('whyChoose.family.title')}</h3>
              <p className="text-gray-600">
                {t('whyChoose.family.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Wrench className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('whyChoose.expert.title')}</h3>
              <p className="text-gray-600">
                {t('whyChoose.expert.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <CheckCircle2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('whyChoose.customer.title')}</h3>
              <p className="text-gray-600">
                {t('whyChoose.customer.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t('team.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                E
              </div>
              <h3 className="text-2xl font-bold mb-2">{t('team.elia.name')}</h3>
              <p className="text-blue-600 font-semibold mb-3">{t('team.elia.role')}</p>
              <p className="text-gray-600 mb-4">
                {t('team.elia.description')}
              </p>
              <a href="tel:514-238-8886" className="text-blue-600 hover:text-blue-700 font-semibold">
                📞 514-238-8886
              </a>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                L
              </div>
              <h3 className="text-2xl font-bold mb-2">{t('team.louay.name')}</h3>
              <p className="text-blue-600 font-semibold mb-3">{t('team.louay.role')}</p>
              <p className="text-gray-600 mb-4">
                {t('team.louay.description')}
              </p>
              <a href="tel:514-497-7190" className="text-blue-600 hover:text-blue-700 font-semibold">
                📞 514-497-7190
              </a>
            </div>
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
