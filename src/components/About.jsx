"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => observer.disconnect();
    }, []);

    // Helper to get features dynamically to ensure translation updates on switch
    const features = [
        { icon: "☕", label: t("about.features.roastery") },
        { icon: "🌿", label: t("about.features.terrace") },
        { icon: "💻", label: t("about.features.workspace") },
        { icon: "🍕", label: t("about.features.pizza") },
    ];

    return (
        <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-warm-white">
            <div className="max-w-6xl mx-auto px-5">
                <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
                    {/* Text content */}
                    <div
                        className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                            }`}
                    >
                        <p className="text-charcoal-muted text-[11px] tracking-[0.5em] uppercase mb-5">
                            {t("about.ourStory")}
                        </p>
                        <h2
                            className="text-charcoal text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            {t("about.title")}
                        </h2>
                        <div className="space-y-5 text-charcoal-muted text-[15px] font-light leading-[1.8]">
                            <p>
                                {t("about.p1")}
                            </p>
                            <p>
                                {t("about.p2")}
                            </p>
                            <p>
                                {t("about.p3")}
                            </p>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-6 mt-10">
                            {features.map((feature, i) => (
                                <div
                                    key={i}
                                    className={`flex items-center gap-3 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                        }`}
                                    style={{ transitionDelay: `${400 + i * 100}ms` }}
                                >
                                    <span className="text-xl">{feature.icon}</span>
                                    <span className="text-[13px] tracking-[0.1em] text-charcoal font-light">
                                        {feature.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image placeholder / Visual element */}
                    <div
                        className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                            }`}
                    >
                        <div className="relative aspect-[4/5] bg-sand-100 overflow-hidden">
                            {/* Actual storefront photo */}
                            <img
                                src="/about-storefront.jpg"
                                alt="Beiruti Lake Cafe exterior"
                                className="absolute inset-0 w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>

                        {/* Floating accent */}
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-sand-300 -z-10" />
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-sand-100 -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
