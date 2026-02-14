"use client";

import { useState, useEffect } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "Menu", href: "#menu" },
        { label: "About", href: "#about" },
        { label: "Gallery", href: "#gallery" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <header
            id="header"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "header-blur header-scrolled py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group" aria-label="Beiruti Lake Cafe - Home">
                    <div className="relative">
                        <img
                            src="/logo.png"
                            alt="Beiruti Lake Cafe Logo"
                            width={44}
                            height={44}
                            className="rounded-full transition-all duration-300 group-hover:scale-105"
                            style={{
                                boxShadow: scrolled ? 'none' : '0 2px 12px rgba(0,0,0,0.3)',
                            }}
                        />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span
                            className={`text-[20px] tracking-[0.15em] font-light transition-colors duration-500 ${scrolled ? "text-charcoal" : "text-white"
                                }`}
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            BEIRUTI
                        </span>
                        <span
                            className={`text-[12px] tracking-[0.35em] font-light transition-colors duration-500 ${scrolled ? "text-charcoal-muted" : "text-white/80"
                                }`}
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            LAKE CAFE
                        </span>
                    </div>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`text-[13px] tracking-[0.2em] uppercase font-light transition-colors duration-300 hover:opacity-70 ${scrolled ? "text-charcoal" : "text-white"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/971501507173?text=Hi%20Beiruti%20Lake%20Cafe%2C%20I%27d%20like%20to%20book%20a%20table%2Forder%20for%20pickup."
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-[13px] tracking-[0.15em] uppercase font-light px-5 py-2.5 border transition-all duration-300 hover:bg-charcoal hover:text-white ${scrolled
                            ? "border-charcoal text-charcoal"
                            : "border-white text-white hover:bg-white hover:text-charcoal"
                            }`}
                    >
                        Reserve
                    </a>
                </nav>

                {/* Mobile menu toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
                    aria-label="Toggle menu"
                    id="mobile-menu-toggle"
                >
                    <span
                        className={`block w-6 h-[1.5px] transition-all duration-300 ${scrolled ? "bg-charcoal" : "bg-white"
                            } ${mobileMenuOpen ? "rotate-45 translate-y-[4.5px]" : ""}`}
                    />
                    <span
                        className={`block w-6 h-[1.5px] transition-all duration-300 ${scrolled ? "bg-charcoal" : "bg-white"
                            } ${mobileMenuOpen ? "opacity-0" : ""}`}
                    />
                    <span
                        className={`block w-6 h-[1.5px] transition-all duration-300 ${scrolled ? "bg-charcoal" : "bg-white"
                            } ${mobileMenuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-cream/95 header-blur transition-all duration-300 overflow-hidden ${mobileMenuOpen ? "max-h-80 border-b border-sand-200" : "max-h-0"
                    }`}
            >
                <nav className="flex flex-col py-4 px-5 gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-charcoal text-[14px] tracking-[0.15em] uppercase font-light py-3 border-b border-sand-100 transition-colors hover:text-charcoal-muted"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/971501507173?text=Hi%20Beiruti%20Lake%20Cafe%2C%20I%27d%20like%20to%20book%20a%20table%2Forder%20for%20pickup."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 text-center text-[13px] tracking-[0.15em] uppercase font-light py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300"
                    >
                        Reserve a Table
                    </a>
                </nav>
            </div>
        </header>
    );
}
