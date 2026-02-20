"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { menuData } from "@/data/menu";

const businessLunchItems = [
    { name: "Truffle Mushroom Pizza", image: "/business-lunch/truffle-mushroom-pizza.jpg" },
    { name: "Truffle Mushroom Steak Pizza", image: "/business-lunch/truffle-mushroom-steak-pizza.png" },
    { name: "BBQ Steak Pizza", image: "/business-lunch/bbq-steak-pizza.jpg" },
    { name: "Spicy Steak Pizza", image: "/business-lunch/spicy-steak-pizza.jpg" },
    { name: "Margarita Pizza", image: "/business-lunch/margarita-pizza.png" },
    { name: "Pepperoni Pizza", image: "/business-lunch/pepperoni-pizza.png" },
    { name: "Buratta Pizza", image: "/business-lunch/buratta-pizza.png" },
    { name: "Bresaola Pizza", image: "/business-lunch/bresaola-pizza.png" },
    { name: "Chicken Alfredo Pizza", image: "/business-lunch/chicken-alfredo-pizza.png" },
    { name: "Carbonara Spaghetti", image: "/business-lunch/carbonara-spaghetti.png" },
    { name: "Bolognese Spaghetti", image: "/business-lunch/bolognese-spaghetti.png" },
    { name: "Arrabiata Penne", image: "/business-lunch/arrabiata-penne.png" },
    { name: "Fettuccine Chicken Alfredo", image: "/business-lunch/fettuccine-chicken-alfredo.png" },
    { name: "Chicken Pesto Fusilli", image: "/business-lunch/chicken-pesto-fusilli.png" },
    { name: "Funghi Truffle Rigatoni", image: "/business-lunch/funghi-truffle-rigatoni.png" },
    { name: "Meat Kebab", image: "/business-lunch/meat-kebab.jpg" },
    { name: "Chicken Kebab", image: "/business-lunch/chicken-kebab.jpg" },
    { name: "Shish Tawook", image: "/business-lunch/shish-tawook.jpg" },
    { name: "Half Chicken with Rice", image: "/business-lunch/half-chicken-rice.jpg" },
    { name: "Half Grill Chicken with Rice", image: "/business-lunch/half-grill-chicken-rice.jpg" },
    { name: "Half Grill Chicken with Fries", image: "/business-lunch/half-grill-chicken-fries.jpg" },
    { name: "Chicken Biryani", image: "/business-lunch/chicken-biryani.jpg" },
    { name: "Special Lamb Biryani", image: "/business-lunch/special-lamb-biryani.jpg" },
    { name: "Shisha Business Lunch", image: "/business-lunch/shisha-business-lunch.jpg" },
];

export default function Menu() {
    const { t, language } = useLanguage();
    const [activeVenue, setActiveVenue] = useState("lakeCafe");
    const [activeCategory, setActiveCategory] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showBusinessLunch, setShowBusinessLunch] = useState(false);
    const scrollRef = useRef(null);

    const currentMenu = menuData[activeVenue];
    const currentSection = currentMenu.sections[activeCategory];

    const categoryKeys = {
        "Coffee": "coffee",
        "Signature Coffee": "signatureCoffee",
        "Tea": "tea",
        "Milk Shake": "milkShake",
        "Smoothie": "smoothie",
        "Cold Beverage": "coldBeverage",
        "Fresh Juice": "freshJuice",
        "Soft Drinks": "softDrinks",
        "Breakfast": "breakfast",
        "Hot Appetizers": "hotAppetizers",
        "Cold Appetizers": "coldAppetizers",
        "Grill": "grill",
        "Grill per KG (Combo Meal)": "grillCombo",
        "Salads": "salads",
        "Rice": "rice",
        "Dessert": "dessert",
        "Neapolitan Pizza": "neapolitanPizza",
        "Pasta": "pasta",
        "Manakish": "manakish",
        "Sandwiches": "sandwiches"
    };

    const getCategoryTitle = (cat) => {
        const key = categoryKeys[cat];
        return key ? t(`menu.categories.${key}`) : cat;
    };

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
                {/* Section header — mb reduced to 2rem so venue tabs sit close */}
                <div className="text-center mb-8">
                    <p className="text-charcoal-muted text-[11px] tracking-[0.5em] uppercase mb-4">
                        {t("menu.ourSelection")}
                    </p>
                    <h2
                        className="text-charcoal text-4xl md:text-5xl font-light"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        {t("menu.theMenu")}
                    </h2>
                    <p className="text-charcoal-muted text-[14px] font-light mt-4 max-w-md mx-auto leading-relaxed">
                        {t("menu.subtitle")}
                    </p>

                    {/* Business Lunch Offer — clickable, square badge */}
                    <button
                        onClick={() => setShowBusinessLunch(!showBusinessLunch)}
                        className="mt-5 inline-flex items-center gap-2 bg-sand-100 border border-sand-200 px-5 py-2.5 transition-all duration-300 hover:bg-sand-200 cursor-pointer"
                        style={{ borderRadius: 0 }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B5E3C" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span className="text-[12px] tracking-[0.15em] uppercase font-medium text-charcoal">
                            Business Lunch Offer
                        </span>
                        <span className="text-[11px] text-charcoal-muted font-light">
                            · Daily 12–5 PM
                        </span>
                        <svg
                            width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke="#8B5E3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="transition-transform duration-300"
                            style={{ transform: showBusinessLunch ? "rotate(180deg)" : "rotate(0deg)" }}
                        >
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </button>
                </div>

                {/* Business Lunch Expandable Grid */}
                <div
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                        maxHeight: showBusinessLunch ? "4000px" : "0px",
                        opacity: showBusinessLunch ? 1 : 0,
                    }}
                >
                    <div className="pt-6 pb-10">
                        <div className="text-center mb-6">
                            <h3
                                className="text-2xl md:text-3xl font-light text-charcoal"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                Business Lunch
                            </h3>
                            <p className="text-[12px] text-charcoal-muted font-light mt-2 tracking-wider uppercase">
                                Available daily · 12 PM – 5 PM · Starting from 29 AED
                            </p>
                            <div className="w-12 h-[1px] bg-charcoal mt-3 mx-auto" />
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {businessLunchItems.map((item, idx) => (
                                <div
                                    key={`bl-${idx}`}
                                    className="group bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-sand-100 flex flex-col"
                                    style={{
                                        animationDelay: `${idx * 40}ms`,
                                        animation: showBusinessLunch ? `fadeSlideUp 0.4s ease ${idx * 40}ms both` : "none",
                                    }}
                                >
                                    <div className="relative aspect-square w-full bg-sand-100 overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                        />
                                    </div>
                                    <div className="p-3 text-center">
                                        <h4 className="text-[11px] md:text-[12px] font-bold tracking-wider uppercase text-charcoal leading-tight">
                                            {item.name}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Venue toggle — 2rem gap from header above */}
                <div className="flex items-center justify-center gap-1 mt-8 mb-0">
                    <button
                        onClick={() => handleVenueChange("lakeCafe")}
                        id="venue-lake-cafe"
                        className={`px-6 py-3 text-[0.72rem] tracking-[0.2em] uppercase font-light transition-all duration-300 ${activeVenue === "lakeCafe"
                            ? "bg-charcoal text-white"
                            : "bg-sand-100 text-charcoal-muted hover:bg-sand-200"
                            }`}
                    >
                        {t("menu.lakeCafe")}
                    </button>
                    <button
                        onClick={() => handleVenueChange("lago")}
                        id="venue-lago"
                        className={`px-6 py-3 text-[0.72rem] tracking-[0.2em] uppercase font-light transition-all duration-300 ${activeVenue === "lago"
                            ? "bg-charcoal text-white"
                            : "bg-sand-100 text-charcoal-muted hover:bg-sand-200"
                            }`}
                    >
                        {t("menu.lago")}
                    </button>
                </div>

                {/* Divider between venue switcher and category tabs */}
                <div className="w-full h-px bg-sand-200 mt-6 mb-0" />

                {/* Category tabs — single horizontally scrollable row, never wraps */}
                <div
                    ref={scrollRef}
                    className="flex flex-nowrap overflow-x-auto mb-10"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {currentMenu.sections.map((section, index) => (
                        <button
                            key={`${activeVenue}-${index}`}
                            onClick={() => handleCategoryChange(index)}
                            className={`whitespace-nowrap flex-shrink-0 px-4 py-3 uppercase font-light transition-all duration-300 ${index === activeCategory
                                ? "menu-tab-active text-charcoal"
                                : "text-charcoal-muted hover:text-charcoal"
                                }`}
                            style={{
                                fontSize: "0.72rem",
                                letterSpacing: "0.2em",
                                borderBottom: index === activeCategory
                                    ? "2px solid #8B5E3C"
                                    : "2px solid transparent",
                            }}
                        >
                            {getCategoryTitle(section.category)}
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
                            {getCategoryTitle(currentSection.category)}
                        </h3>
                        <div className="w-12 h-[1px] bg-charcoal mt-3" />
                    </div>

                    {/* Items list */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {currentSection.items.map((item, idx) => (
                            <div
                                key={`${activeVenue}-${activeCategory}-${idx}`}
                                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-sand-100 flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-square w-full bg-sand-100 overflow-hidden">
                                    <Image
                                        src={item.image || "/images/menu/placeholder.jpg"}
                                        alt={item.name[language] || item.name.en}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-4 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start gap-2 mb-2">
                                        <h3 className="text-[13px] md:text-[14px] font-bold tracking-wider uppercase text-charcoal leading-tight">
                                            {item.name[language] || item.name.en}
                                        </h3>
                                    </div>

                                    <p className="text-[13px] font-medium text-purple-600 mb-2">
                                        {item.price} <span className="text-[10px]">AED</span>
                                    </p>

                                    {item.description && (
                                        <p className="text-[11px] text-charcoal-muted font-light leading-relaxed line-clamp-2 mt-auto">
                                            {item.description[language] || item.description.en}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* WhatsApp order CTA */}
                <div className="mt-12 text-center">
                    <a
                        href={`https://wa.me/971501507173?text=${encodeURIComponent(
                            language === "ar"
                                ? "مرحباً بيروتي ليك كافيه! أود الاستفسار عن القائمة والحجوزات."
                                : "Hi Beiruti Lake Cafe! I'd like to know more about your menu and reservations."
                        )}`}
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
                        {t("menu.orderDirect")}
                    </a>
                </div>
            </div>
        </section>
    );
}
