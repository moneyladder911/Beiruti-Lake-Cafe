'use client';

import { useState, useEffect } from 'react';

export default function RamadanBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if it's Ramadan (Approximate dates for 2026: Feb 17 - Mar 18)
        const now = new Date();
        // Broad range to ensure visibility for the user in Feb 2026
        const start = new Date('2026-02-10');
        const end = new Date('2026-03-30');

        // Check session storage to see if user dismissed it this session
        const isDismissed = sessionStorage.getItem('ramadan-banner-dismissed');

        if (now >= start && now <= end && !isDismissed) {
            // Small delay for entrance animation
            setTimeout(() => setIsVisible(true), 1000);
        }
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed top-4 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none">
            <div className="relative w-full max-w-lg md:max-w-3xl bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4 md:p-1 pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-700">

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D4AF37]/10 to-transparent opacity-50 pointer-events-none" />

                {/* Close Button */}
                <button
                    onClick={() => {
                        setIsVisible(false);
                        sessionStorage.setItem('ramadan-banner-dismissed', 'true');
                    }}
                    className="absolute -top-2 -right-2 md:top-2 md:right-2 bg-black/50 hover:bg-black/80 text-white/60 hover:text-white rounded-full p-1 transition-colors border border-white/5 backdrop-blur-md z-20"
                    aria-label="Close Banner"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className="flex flex-col md:flex-row items-center gap-4 relative z-10">
                    {/* Image Section */}
                    <div className="w-full md:w-32 h-32 md:h-24 relative flex-shrink-0 rounded-xl overflow-hidden shadow-lg group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                        <img
                            src="/gallery-3.jpg"
                            alt="Iftar Buffet Spread"
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 text-center md:text-left min-w-0">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                            <span className="text-[#D4AF37]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                </svg>
                            </span>
                            <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.2em] uppercase">Ramadan Kareem</span>
                        </div>

                        <h3 className="text-lg font-display font-medium text-white leading-tight mb-2">
                            Authentic Arabic & Persian Iftar Buffet
                        </h3>

                        <div className="flex items-center justify-center md:justify-start gap-3 text-sm text-white/80">
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-bold text-white">89</span>
                                <span className="text-xs font-medium opacity-70">AED</span>
                            </div>
                            <span className="w-px h-6 bg-white/10"></span>
                            <div className="text-xs leading-tight text-left">
                                Flavor Add-on<br />
                                <span className="text-[#D4AF37] font-bold">+10 AED</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Section */}
                    <div className="w-full md:w-auto p-1 pr-2">
                        <a
                            href="https://wa.me/971501507173?text=Hi,%20I'd%20like%20to%20reserve%20a%20table%20for%20the%20Iftar%20Buffet"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full md:w-auto bg-[#D4AF37] hover:bg-[#c29d2b] text-black font-semibold py-3 px-6 rounded-xl transition-all shadow-[0_0_20px_-5px_#D4AF37] hover:shadow-[0_0_25px_-5px_#D4AF37] transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <span className="whitespace-nowrap">Reserve Table</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
