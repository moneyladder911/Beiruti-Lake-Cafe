"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const PHONE_NUMBER = "971501507173";

const messages = {
    en: "Hi Beiruti Lake Cafe! I'd like to know more about your menu and reservations.",
    ar: "مرحباً بيروتي ليك كافيه! أود الاستفسار عن القائمة والحجوزات.",
};

export default function WhatsAppButton() {
    const { language } = useLanguage();
    const [show, setShow] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [tooltipVisible, setTooltipVisible] = useState(true);

    useEffect(() => {
        const showTimer = setTimeout(() => setShow(true), 2000);
        const tooltipTimer = setTimeout(() => setTooltipVisible(false), 8000);
        return () => {
            clearTimeout(showTimer);
            clearTimeout(tooltipTimer);
        };
    }, []);

    if (!show) return null;

    const prefilledMessage = encodeURIComponent(messages[language] || messages.en);
    const waLink = `https://wa.me/${PHONE_NUMBER}?text=${prefilledMessage}`;

    return (
        <div
            className="fixed z-40"
            style={{ bottom: "5.5rem", right: "1.25rem" }}
        >
            {/* Hover tooltip */}
            <div
                className="absolute bottom-full right-0 mb-3 whitespace-nowrap pointer-events-none transition-all duration-300"
                style={{
                    opacity: hovered || tooltipVisible ? 1 : 0,
                    transform: hovered || tooltipVisible ? "translateY(0)" : "translateY(4px)",
                }}
            >
                <div className="bg-[#25D366] text-white text-[12px] font-medium px-4 py-2.5 rounded-lg shadow-lg relative">
                    {language === "ar" ? "تواصل معنا! 💬" : "Chat with us! 💬"}
                    <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2.5 h-2.5 bg-[#25D366]" />
                </div>
            </div>

            {/* WhatsApp Button */}
            <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                id="whatsapp-floating-btn"
                className="whatsapp-btn-float relative flex items-center justify-center w-[60px] h-[60px] rounded-full shadow-xl transition-transform duration-300 hover:scale-110 active:scale-95"
                style={{
                    background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                    boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
                }}
                aria-label="Chat on WhatsApp"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => {
                    if (typeof window !== "undefined" && window.fbqTrackContact) {
                        window.fbqTrackContact("WhatsApp - Floating Button");
                    }
                }}
            >
                {/* Pulse ring */}
                <span className="whatsapp-ring absolute inset-[-6px] rounded-full" />

                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="relative z-10"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>
        </div>
    );
}
