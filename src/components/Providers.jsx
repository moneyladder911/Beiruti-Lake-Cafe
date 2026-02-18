'use client';

import { LanguageProvider } from '@/context/LanguageContext';

export default function Providers({ children }) {
    // Use a useEffect to handle hydration mismatch if necessary, but dir/lang are layout effects
    // For simplicity, we just wrap
    return (
        <LanguageProvider>
            {children}
        </LanguageProvider>
    );
}
