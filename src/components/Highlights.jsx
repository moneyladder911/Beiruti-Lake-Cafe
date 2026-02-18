"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Highlights() {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const highlights = [
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                    <line x1="6" y1="1" x2="6" y2="4" />
                    <line x1="10" y1="1" x2="10" y2="4" />
                    <line x1="14" y1="1" x2="14" y2="4" />
                </svg>
            ),
            title: t("highlights.specialtyCoffee"),
            description: t("highlights.specialtyCoffeeDesc"),
        },
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                </svg>
            ),
            title: t("highlights.openDaily"),
            description: t("highlights.openDailyDesc"),
        },
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            ),
            title: t("highlights.lakefront"),
            description: t("highlights.lakefrontDesc"),
        },
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                </svg>
            ),
            title: t("highlights.fullKitchen"),
            description: t("highlights.fullKitchenDesc"),
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} className="py-12 md:py-16 bg-cream border-b border-sand-100">
            <div className="max-w-5xl mx-auto px-5">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {highlights.map((item, i) => (
                        <div
                            key={i}
                            className={`text-center transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <div className="flex justify-center mb-4 text-charcoal">
                                {item.icon}
                            </div>
                            <h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal mb-1.5">
                                {item.title}
                            </h3>
                            <p className="text-[12px] text-charcoal-muted font-light">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
