"use client";

import { useState, useEffect } from "react";

export default function Footer() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const checkOpenStatus = () => {
            const now = new Date();
            // Dubai timezone offset (UTC+4)
            const dubaiOffset = 4 * 60;
            const utcMinutes = now.getUTCHours() * 60 + now.getUTCMinutes();
            const dubaiMinutes = (utcMinutes + dubaiOffset) % (24 * 60);
            const dubaiHour = Math.floor(dubaiMinutes / 60);

            // Opening hours: 8 AM - 12 AM (midnight) weekdays, 8 AM - 1 AM weekends
            const day = now.getUTCDay();
            const isWeekend = day === 5 || day === 6; // Fri/Sat
            const closingHour = isWeekend ? 1 : 0;

            if (dubaiHour >= 8 || (closingHour > 0 && dubaiHour < closingHour)) {
                setIsOpen(dubaiHour >= 8 || dubaiHour < closingHour);
            } else {
                setIsOpen(false);
            }
        };

        checkOpenStatus();
        const interval = setInterval(checkOpenStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer id="contact" className="bg-charcoal text-white">
            {/* Map Section */}
            <div className="w-full h-[350px] md:h-[400px] relative bg-charcoal-light">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.5!2d55.1562!3d24.9857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU5JzA4LjUiTiA1NcKwMDknMjIuMyJF!5e0!3m2!1sen!2sae!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Beiruti Lake Cafe Location - Dubai Investment Park"
                    className="w-full h-full grayscale contrast-125 opacity-70"
                />

                {/* Map overlay card */}
                <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-8 md:bottom-8 md:w-80 glass-card p-5 text-charcoal">
                    <div className="flex items-start gap-3 mb-3">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.5" className="flex-shrink-0 mt-0.5">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <div>
                            <p className="text-[13px] font-medium">Beiruti Lake Cafe</p>
                            <p className="text-[12px] text-charcoal-muted font-light mt-1">
                                DIP, Lake View - Shop 11, The Market<br />Green Community Village - Dubai
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                        <div className={`w-2 h-2 rounded-full ${isOpen ? "bg-green-500 status-pulse" : "bg-red-400"}`} />
                        <span className="text-[12px] font-light">
                            {isOpen ? "Open Now" : "Currently Closed"} · Daily 8 AM – 12 AM
                        </span>
                    </div>

                    <div className="flex gap-2">
                        <a
                            href="https://share.google/3DsoYZzIQFJu0Cpkz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center bg-charcoal text-white text-[11px] tracking-[0.1em] uppercase py-2.5 transition-colors hover:bg-charcoal-light"
                        >
                            Directions
                        </a>
                        <a
                            href="https://wa.me/971501507173"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center border border-charcoal text-charcoal text-[11px] tracking-[0.1em] uppercase py-2.5 transition-colors hover:bg-charcoal hover:text-white"
                        >
                            Call Us
                        </a>
                    </div>
                </div>
            </div>

            {/* Drive times */}
            <div className="max-w-6xl mx-auto px-5 py-10 border-b border-white/10">
                <p className="text-white/40 text-[11px] tracking-[0.3em] uppercase mb-6 text-center">
                    Drive Times from Major Hubs
                </p>
                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                    {[
                        { hub: "Al Furjan", time: "8 min" },
                        { hub: "Discovery Gardens", time: "10 min" },
                        { hub: "Motor City", time: "12 min" },
                        { hub: "JLT", time: "15 min" },
                        { hub: "Marina", time: "20 min" },
                        { hub: "Jumeirah", time: "25 min" },
                    ].map((item, i) => (
                        <div key={i} className="text-center">
                            <p className="text-white text-[14px] font-light">{item.time}</p>
                            <p className="text-white/40 text-[11px] tracking-[0.1em] mt-1">{item.hub}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer content */}
            <div className="max-w-6xl mx-auto px-5 py-12">
                <div className="grid md:grid-cols-4 gap-10 md:gap-8">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <h3
                            className="text-2xl font-light mb-4"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            BEIRUTI
                            <br />
                            <span className="text-white/50">LAKE</span>
                        </h3>
                        <p className="text-white/40 text-[13px] font-light leading-relaxed">
                            Specialty coffee, artisan shisha & lakefront dining in the heart
                            of Dubai Investment Park.
                        </p>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="text-[12px] tracking-[0.2em] uppercase mb-4 text-white/60">
                            Opening Hours
                        </h4>
                        <div className="space-y-2 text-[13px] font-light text-white/40">
                            <div className="flex justify-between">
                                <span>Sun – Thu</span>
                                <span className="text-white/60">8 AM – 12 AM</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Fri – Sat</span>
                                <span className="text-white/60">8 AM – 1 AM</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[12px] tracking-[0.2em] uppercase mb-4 text-white/60">
                            Quick Links
                        </h4>
                        <div className="space-y-2">
                            {["Menu", "About", "Gallery", "Contact"].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className="block text-[13px] font-light text-white/40 hover:text-white transition-colors duration-300"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-[12px] tracking-[0.2em] uppercase mb-4 text-white/60">
                            Connect
                        </h4>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/beirutilake/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="w-10 h-10 border border-white/20 flex items-center justify-center transition-all duration-300 hover:border-white hover:bg-white hover:text-charcoal text-white/60"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </a>
                            <a
                                href="https://wa.me/971501507173"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="w-10 h-10 border border-white/20 flex items-center justify-center transition-all duration-300 hover:border-white hover:bg-white hover:text-charcoal text-white/60"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                            <a
                                href="https://share.google/3DsoYZzIQFJu0Cpkz"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Google Maps"
                                className="w-10 h-10 border border-white/20 flex items-center justify-center transition-all duration-300 hover:border-white hover:bg-white hover:text-charcoal text-white/60"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="w-10 h-10 border border-white/20 flex items-center justify-center transition-all duration-300 hover:border-white hover:bg-white hover:text-charcoal text-white/60"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                        </div>

                        {/* Address */}
                        <div className="mt-6 text-[13px] font-light text-white/40 leading-relaxed">
                            <p>DIP, Lake View - Shop 11</p>
                            <p>The Market - Green Community Village</p>
                            <p>Dubai</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-white/30 text-[11px] tracking-[0.1em]">
                        © 2024 Beiruti Lake Cafe. All rights reserved.
                    </p>
                    <p className="text-white/20 text-[10px] tracking-[0.1em]">
                        Specialty Coffee DIP · Premium Roastery Dubai Investment Park
                    </p>
                </div>
            </div>
        </footer>
    );
}
