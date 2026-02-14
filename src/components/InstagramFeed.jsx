"use client";

import { useEffect, useRef, useState } from "react";

const instagramPosts = [
    {
        id: 1,
        caption: "We have special Valentine's moments ❤️✨",
        likes: 234,
        aspectRatio: "4/5",
        image: "/gallery-1.jpg",
    },
    {
        id: 2,
        caption: "Our signature Carbonara Spaghetti 🍝",
        likes: 189,
        aspectRatio: "1/1",
        image: "/gallery-2.jpg",
    },
    {
        id: 3,
        caption: "Lakefront dining at its finest 🌅",
        likes: 312,
        aspectRatio: "4/5",
        image: "/gallery-3.jpg",
    },
    {
        id: 4,
        caption: "Wood-fired Neapolitan truffle pizza 🍕",
        likes: 156,
        aspectRatio: "1/1",
        image: "/gallery-4.jpg",
    },
    {
        id: 5,
        caption: "Perfect workspace with a view 💻☕",
        likes: 278,
        aspectRatio: "4/5",
        image: "/gallery-5.jpg",
    },
    {
        id: 6,
        caption: "Sunset sessions by the lake 🌊",
        likes: 421,
        aspectRatio: "1/1",
        image: "/gallery-6.jpg",
    },
];

export default function InstagramFeed() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="gallery" ref={sectionRef} className="py-20 md:py-32 bg-cream">
            <div className="max-w-6xl mx-auto px-5">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-charcoal-muted text-[11px] tracking-[0.5em] uppercase mb-4">
                        @beirutilake
                    </p>
                    <h2
                        className="text-charcoal text-4xl md:text-5xl font-light"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        The Vibe
                    </h2>
                    <p className="text-charcoal-muted text-[14px] font-light mt-4">
                        <a
                            href="https://www.instagram.com/beirutilake/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-charcoal transition-colors duration-300 underline underline-offset-4 decoration-charcoal-muted/40 hover:decoration-charcoal"
                        >
                            Follow our journey on Instagram
                        </a>
                    </p>
                </div>

                {/* Masonry Grid */}
                <div className="masonry-grid">
                    {instagramPosts.map((post, i) => (
                        <a
                            key={post.id}
                            href="https://www.instagram.com/beirutilake/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`block relative overflow-hidden group cursor-pointer transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                            style={{
                                transitionDelay: `${i * 100}ms`,
                                aspectRatio: post.aspectRatio,
                            }}
                        >
                            {/* Real image with lazy loading */}
                            <img
                                src={post.image}
                                alt={post.caption}
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-all duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-4 text-center px-4">
                                    <div className="flex items-center justify-center gap-4 mb-3">
                                        <span className="flex items-center gap-1.5 text-white text-[13px]">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                            </svg>
                                            {post.likes}
                                        </span>
                                    </div>
                                    <p className="text-white/80 text-[12px] font-light">{post.caption}</p>
                                </div>
                            </div>

                            {/* Instagram icon corner */}
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" fillOpacity="0.8">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Follow CTA */}
                <div className="text-center mt-12">
                    <a
                        href="https://www.instagram.com/beirutilake/"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="instagram-follow-cta"
                        className="inline-flex items-center gap-3 border border-charcoal text-charcoal px-8 py-4 text-[12px] tracking-[0.2em] uppercase font-light transition-all duration-300 hover:bg-charcoal hover:text-white"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                        Follow @beirutilake
                    </a>
                </div>
            </div>
        </section>
    );
}
