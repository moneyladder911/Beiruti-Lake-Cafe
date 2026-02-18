"use client";

import { useState, useRef, useEffect } from "react";
import { menuData } from "@/data/menu";

export default function Menu() {
    const [activeVenue, setActiveVenue] = useState("lakeCafe");
    const [activeCategory, setActiveCategory] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const scrollRef = useRef(null);

    const currentMenu = menuData[activeVenue];
    const currentSection = currentMenu.sections[activeCategory];

    const handleVenueChange = (venue) => {
        if (venue === activeVenue) return;
        setIsAnimating(true);
        setTimeout(() => {
            setActiveVenue(venue);
            setActiveCategory(0);
            setIsAnimating(false);
        }, 200);
    };

    const handleCategoryChange = (index) => {
        if (index === activeCategory) return;
        setIsAnimating(true);
        setTimeout(() => {
            setActiveCategory(index);
            setIsAnimating(false);
            // Meta Pixel: track ViewContent when browsing menu
            if (typeof window !== "undefined" && window.fbqTrackViewContent) {
                window.fbqTrackViewContent(
                    menuData[activeVenue].sections[index]?.category,
                    "Menu"
                );
            }
        }, 150);
    };

    // Scroll tabs into view on mobile
    useEffect(() => {
        if (scrollRef.current) {
            const activeTab = scrollRef.current.querySelector(".menu-tab-active");
            if (activeTab) {
                activeTab.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center",
                });
            }
        }
    }, [activeCategory]);

    return (
        <section id="menu" className="py-12 md:py-24 bg-cream">
            <div className="max-w-5xl mx-auto px-5">
                {/* Section header */}
                <div className="text-center mb-14">
                    <p className="text-charcoal-muted text-[11px] tracking-[0.5em] uppercase mb-4">
                        Our Selection
                    </p>
                    <h2
                        className="text-charcoal text-4xl md:text-5xl font-light"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        The Menu
                    </h2>
                    <p className="text-charcoal-muted text-[14px] font-light mt-4 max-w-md mx-auto leading-relaxed">
                        From specialty coffee to artisan Italian — curated for every
                        moment at the lake.
                    </p>
                </div>

                {/* Venue toggle */}
                <div className="flex items-center justify-center gap-1 mb-10">
                    <button
                        onClick={() => handleVenueChange("lakeCafe")}
                        id="venue-lake-cafe"
                        className={`px-6 py-3 text-[12px] tracking-[0.2em] uppercase font-light transition-all duration-300 ${activeVenue === "lakeCafe"
                            ? "bg-charcoal text-white"
                            : "bg-sand-100 text-charcoal-muted hover:bg-sand-200"
                            }`}
                    >
                        Lake Cafe
                    </button>
                    <button
                        onClick={() => handleVenueChange("lago")}
                        id="venue-lago"
                        className={`px-6 py-3 text-[12px] tracking-[0.2em] uppercase font-light transition-all duration-300 ${activeVenue === "lago"
                            ? "bg-charcoal text-white"
                            : "bg-sand-100 text-charcoal-muted hover:bg-sand-200"
                            }`}
                    >
                        Lago
                    </button>
                </div>

                {/* Category tabs */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-1 md:gap-0 md:flex-wrap md:justify-center mb-10 pb-2 md:pb-0 scrollbar-hide"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {currentMenu.sections.map((section, index) => (
                        <button
                            key={`${activeVenue}-${index}`}
                            onClick={() => handleCategoryChange(index)}
                            className={`whitespace-nowrap px-4 py-2.5 text-[11px] tracking-[0.15em] uppercase font-light transition-all duration-300 flex-shrink-0 ${index === activeCategory
                                ? "menu-tab-active text-charcoal border-b-2 border-charcoal"
                                : "text-charcoal-muted hover:text-charcoal border-b-2 border-transparent"
                                }`}
                        >
                            {section.category}
                        </button>
                    ))}
                </div>

                {/* Menu items */}
                <div
                    className={`transition-all duration-200 ${isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                        }`}
                >
                    {/* Category title */}
                    <div className="mb-8">
                        <h3
                            className="text-2xl md:text-3xl font-light text-charcoal"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            {currentSection.category}
                        </h3>
                        <div className="w-12 h-[1px] bg-charcoal mt-3" />
                    </div>

                    {/* Items list */}
                    <div className="space-y-0">
                        {currentSection.items.map((item, idx) => (
                            <div
                                key={`${activeVenue}-${activeCategory}-${idx}`}
                                className="menu-item-hover flex items-baseline justify-between py-4 px-3 -mx-3 border-b border-sand-100 group"
                            >
                                <div className="flex-1 pr-4">
                                    <h3 className="text-[14px] md:text-[15px] font-medium tracking-[0.05em] text-charcoal group-hover:tracking-[0.08em] transition-all duration-300 m-0">
                                        {item.name}
                                    </h3>
                                    {item.description && (
                                        <p className="text-[12px] text-charcoal-muted font-light mt-1 leading-relaxed">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                                <span className="text-[14px] font-light text-charcoal-muted whitespace-nowrap tabular-nums">
                                    {item.price} <span className="text-[10px] tracking-wider">AED</span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* WhatsApp order CTA */}
                <div className="mt-12 text-center">
                    <a
                        href="https://wa.me/971501507173?text=Hi%20Beiruti%20Lake%20Cafe%2C%20I%27d%20like%20to%20book%20a%20table%2Forder%20for%20pickup."
                        target="_blank"
                        rel="noopener noreferrer"
                        id="menu-order-whatsapp"
                        className="inline-flex items-center gap-3 bg-charcoal text-white px-8 py-4 text-[12px] tracking-[0.2em] uppercase font-light transition-all duration-300 hover:bg-charcoal-light"
                        onClick={() => {
                            if (typeof window !== "undefined" && window.fbqTrackContact) {
                                window.fbqTrackContact("WhatsApp - Menu CTA");
                            }
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Order Direct & Save 10%
                    </a>
                </div>
            </div>
        </section>
    );
}
