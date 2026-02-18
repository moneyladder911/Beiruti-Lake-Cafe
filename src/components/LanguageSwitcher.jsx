'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="text-white text-xs font-medium tracking-widest px-3 py-1 border border-white/20 rounded-full hover:bg-white hover:text-charcoal transition-all duration-300"
            aria-label="Toggle Language"
        >
            {language === 'en' ? 'AR' : 'EN'}
        </button>
    );
}
