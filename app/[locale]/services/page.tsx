import { CheckCircle2 } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing';

export default function Services() {
  const t = useTranslations('services');
  
  const services = [
    {
      title: t('list.design.title'),
      description: t('list.design.description'),
      features: t.raw('list.design.features') as string[]
    },
    {
      title: t('list.cabinets.title'),
      description: t('list.cabinets.description'),
      features: t.raw('list.cabinets.features') as string[]
    },
    {
      title: t('list.countertops.title'),
      description: t('list.countertops.description'),
      features: t.raw('list.countertops.features') as string[]
    },
    {
      title: t('list.renovation.title'),
      description: t('list.renovation.description'),
      features: t.raw('list.renovation.features') as string[]
    },
    {
      title: t('list.storage.title'),
      description: t('list.storage.description'),
      features: t.raw('list.storage.features') as string[]
    },
    {
      title: t('list.painting.title'),
      description: t('list.painting.description'),
      features: t.raw('list.painting.features') as string[]
    },
    {
      title: t('list.backsplash.title'),
      description: t('list.backsplash.description'),
      features: t.raw('list.backsplash.features') as string[]
    }
  ];

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

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t('process.title')}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('process.step1.title')}</h3>
                  <p className="text-gray-600">
                    {t('process.step1.description')}
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('process.step2.title')}</h3>
                  <p className="text-gray-600">
                    {t('process.step2.description')}
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('process.step3.title')}</h3>
                  <p className="text-gray-600">
                    {t('process.step3.description')}
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('process.step4.title')}</h3>
                  <p className="text-gray-600">
                    {t('process.step4.description')}
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('process.step5.title')}</h3>
                  <p className="text-gray-600">
                    {t('process.step5.description')}
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Consultation & Design</h3>
                  <p className="text-gray-600">
                    We meet with you to discuss your vision, take measurements, and create a custom design that fits your needs and budget.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Material Selection</h3>
                  <p className="text-gray-600">
                    Choose from our range of premium finishes, materials, and hardware options for your project.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Fabrication</h3>
                  <p className="text-gray-600">
                    Our skilled craftsmen fabricate your custom cabinets and components with precision and care.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Professional Installation</h3>
                  <p className="text-gray-600">
                    Our expert team installs your kitchen with attention to every detail, ensuring perfect alignment and finish.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Final Walkthrough</h3>
                  <p className="text-gray-600">
                    We conduct a thorough walkthrough with you to ensure everything meets your expectations and provide care instructions.
                  </p>
                </div>
              </div>
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
