"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function Hero() {
    const { t } = useLanguage();
    const heroRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            if (heroRef.current) {
                const overlay = heroRef.current.querySelector(".hero-overlay");
                if (overlay) {
                    overlay.style.opacity = Math.min(1, 0.4 + window.scrollY / 800);
                }
            }
        };
        handleScroll(); // Set initial value
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            ref={heroRef}
            id="hero"
            className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
        >
            {/* Background Image with Parallax */}
            <div
                className="absolute inset-0 z-0 select-none"
                style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            >
                <Image
                    src="/hero-bg.jpg"
                    alt="Beiruti Lake Cafe Ambience"
                    fill
                    priority
                    className="object-cover"
                    quality={90}
                    style={{ filter: 'blur(6px) brightness(0.35)', transform: 'scale(1.1)' }}
                />
            </div>

            {/* Gradient overlay */}
            <div className="hero-overlay absolute inset-0 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
                {/* Tagline */}
                <p className="text-white/60 text-[11px] tracking-[0.5em] uppercase mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                    {t("hero.tagline")}
                </p>

                {/* Main heading */}
                <h1
                    className="text-white text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-4 animate-fade-in-up opacity-0"
                    style={{ fontFamily: "var(--font-display)", animationDelay: "0.4s", animationFillMode: "forwards" }}
                >
                    {t("hero.titleMain")}
                    <br />
                    <span className="text-white/70">{t("hero.titleSub")}</span>{" "}
                    <span className="text-white/50">{t("hero.titleEnd")}</span>
                </h1>

                {/* SEO-rich H2 subtitle */}
                <h2 className="text-white/50 text-[15px] md:text-[17px] font-light tracking-wide max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0" style={{ fontFamily: "var(--font-inter)", animationDelay: "0.6s", animationFillMode: "forwards" }}>
                    {t("hero.subtitle")}
                </h2>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
                    <a
                        href="https://share.google/3DsoYZzIQFJu0Cpkz"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="hero-cta-directions"
                        className="group flex items-center gap-3 bg-white text-charcoal px-8 py-4 text-[13px] tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:bg-charcoal hover:text-white"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        {t("common.directions")}
                    </a>

                    <a
                        href="#menu"
                        id="hero-cta-menu"
                        className="group flex items-center gap-3 border border-white/30 text-white px-8 py-4 text-[13px] tracking-[0.2em] uppercase font-light transition-all duration-300 hover:border-white hover:bg-white/10"
                    >
                        {t("hero.exploreMenu")}
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="transition-transform duration-300 group-hover:translate-y-1"
                        >
                            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                        </svg>
                    </a>
                </div>
            </div>


        </section>
    );
}
