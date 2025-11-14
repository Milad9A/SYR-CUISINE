"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-gray-600" />
      <button
        onClick={() => switchLanguage('en')}
        className={`px-2 py-1 rounded transition-colors ${
          locale === 'en'
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage('fr')}
        className={`px-2 py-1 rounded transition-colors ${
          locale === 'fr'
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        FR
      </button>
    </div>
  );
}
