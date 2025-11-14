import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

const locales = ['en', 'fr'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const titles = {
    en: "SYR CUISINE - Custom Architectural & Commercial Kitchen Solutions",
    fr: "SYR CUISINE - Solutions de Cuisine Architecturales et Commerciales sur Mesure"
  };
  
  const descriptions = {
    en: "Professional kitchen design, custom cabinets, airbrushing, and renovation services in Montreal, Quebec. Transform your kitchen with expert craftsmanship.",
    fr: "Design de cuisine professionnel, armoires sur mesure, aérographe et services de rénovation à Montréal, Québec. Transformez votre cuisine avec un artisanat expert."
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: locale === 'fr' 
      ? "design de cuisine, armoires sur mesure, aérographe, travaux architecturaux, cuisine commerciale, Montréal, Québec, design d'intérieur, peinture"
      : "kitchen design, custom cabinets, airbrushing, architectural work, commercial kitchen, Montreal, Quebec, interior design, painting",
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
