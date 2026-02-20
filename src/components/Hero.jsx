"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const HERO_VIDEO_SRC = "/hero-video.mp4";

export default function Hero() {
    const { t } = useLanguage();
    const heroRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                const overlay = heroRef.current.querySelector("[data-scroll-overlay]");
                if (overlay) {
                    overlay.style.opacity = String(Math.min(0.5, window.scrollY / 800));
                }
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            ref={heroRef}
            id="hero"
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                height: "100dvh",
                minHeight: "700px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
            }}
        >
            {/* ── Background Video ── */}
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden="true"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 0,
                }}
            >
                <source src={HERO_VIDEO_SRC} type="video/mp4" />
            </video>

            {/* ── Dark gradient overlay ── */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 100%)",
                    pointerEvents: "none",
                }}
            />

            {/* ── Scroll-driven overlay ── */}
            <div
                data-scroll-overlay
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 2,
                    background: "#000",
                    opacity: 0,
                    pointerEvents: "none",
                    transition: "opacity 0.1s",
                }}
            />

            {/* ── Content ── */}
            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    textAlign: "center",
                    padding: "0 20px",
                    maxWidth: "900px",
                    margin: "0 auto",
                    width: "100%",
                }}
            >
                {/* Eyebrow */}
                <p
                    className="animate-fade-in-up"
                    style={{
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "11px",
                        letterSpacing: "0.5em",
                        textTransform: "uppercase",
                        marginBottom: "1.5rem",
                        animationDelay: "0.2s",
                    }}
                >
                    {t("hero.tagline")}
                </p>

                {/* Heading */}
                <h1
                    className="animate-fade-in-up"
                    style={{
                        fontFamily: "var(--font-display)",
                        color: "#fff",
                        fontSize: "clamp(2.4rem, 8vw, 6rem)",
                        fontWeight: 300,
                        lineHeight: 0.95,
                        marginBottom: "1rem",
                        animationDelay: "0.4s",
                    }}
                >
                    {t("hero.titleMain")}
                    <br />
                    <span style={{ color: "rgba(255,255,255,0.7)" }}>{t("hero.titleSub")}</span>{" "}
                    <span style={{ color: "rgba(255,255,255,0.5)" }}>{t("hero.titleEnd")}</span>
                </h1>

                {/* Subtitle */}
                <h2
                    className="animate-fade-in-up"
                    style={{
                        fontFamily: "var(--font-body)",
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "clamp(13px, 2vw, 17px)",
                        fontWeight: 300,
                        letterSpacing: "0.02em",
                        maxWidth: "520px",
                        margin: "0 auto 2.5rem",
                        lineHeight: 1.7,
                        animationDelay: "0.6s",
                    }}
                >
                    {t("hero.subtitle")}
                </h2>

                {/* CTAs */}
                <div
                    className="animate-fade-in-up"
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1rem",
                        animationDelay: "0.8s",
                    }}
                >
                    {/* GET DIRECTIONS — glassmorphism blur */}
                    <a
                        href="https://share.google/3DsoYZzIQFJu0Cpkz"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="hero-cta-directions"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "10px",
                            background: "rgba(255,255,255,0.12)",
                            backdropFilter: "blur(16px)",
                            WebkitBackdropFilter: "blur(16px)",
                            border: "1px solid rgba(255,255,255,0.25)",
                            color: "#fff",
                            padding: "14px 28px",
                            fontSize: "13px",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            fontWeight: 500,
                            textDecoration: "none",
                            transition: "background 0.3s, border-color 0.3s",
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        {t("common.directions")}
                    </a>

                    {/* EXPLORE MENU — outline */}
                    <a
                        href="#menu"
                        id="hero-cta-menu"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "10px",
                            border: "1px solid rgba(255,255,255,0.35)",
                            color: "#fff",
                            padding: "14px 28px",
                            fontSize: "13px",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            fontWeight: 300,
                            textDecoration: "none",
                            background: "transparent",
                            transition: "border-color 0.3s, background 0.3s",
                        }}
                    >
                        {t("hero.exploreMenu")}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                        </svg>
                    </a>
                </div>

                {/* Google Rating Card */}
                <div
                    className="animate-fade-in-up"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "14px",
                        marginTop: "2.5rem",
                        background: "rgba(255,255,255,0.10)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        borderRadius: "100px",
                        padding: "10px 22px",
                        animationDelay: "1s",
                    }}
                >
                    {/* Google G icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" aria-label="Google">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>

                    {/* Stars — all 5 filled */}
                    <div style={{ display: "flex", gap: "2px" }}>
                        {[1, 2, 3, 4, 5].map((s) => (
                            <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="1.5">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                        ))}
                    </div>

                    {/* Score & count */}
                    <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                        <span style={{ color: "#fff", fontSize: "15px", fontWeight: 600, letterSpacing: "0.01em" }}>4.9</span>
                        <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "12px", fontWeight: 300 }}>· 350+ reviews</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
