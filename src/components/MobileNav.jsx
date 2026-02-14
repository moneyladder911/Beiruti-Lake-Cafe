"use client";

import { useState, useEffect } from "react";

export default function MobileNav() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!visible) return null;

    const navItems = [
        {
            label: "Menu",
            href: "#menu",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            ),
        },
        {
            label: "Location",
            href: "https://share.google/3DsoYZzIQFJu0Cpkz",
            external: true,
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            ),
        },
        {
            label: "WhatsApp",
            href: "https://wa.me/971501507173?text=Hi%20Beiruti%20Lake%20Cafe%2C%20I%27d%20like%20to%20book%20a%20table%2Forder%20for%20pickup.",
            external: true,
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            ),
            highlight: true,
        },
    ];

    return (
        <nav
            className="mobile-only fixed bottom-0 left-0 right-0 z-50 bg-white/95 header-blur border-t border-sand-200 bottom-nav-safe"
            role="navigation"
            aria-label="Mobile navigation"
        >
            <div className="flex items-center justify-around py-2">
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        id={`mobile-nav-${item.label.toLowerCase()}`}
                        className={`flex flex-col items-center gap-1 py-1.5 px-4 transition-colors duration-200 ${item.highlight
                            ? "text-[#25D366]"
                            : "text-charcoal-muted hover:text-charcoal"
                            }`}
                    >
                        {item.icon}
                        <span className="text-[10px] tracking-[0.1em] uppercase font-light">
                            {item.label}
                        </span>
                    </a>
                ))}
            </div>
        </nav>
    );
}
