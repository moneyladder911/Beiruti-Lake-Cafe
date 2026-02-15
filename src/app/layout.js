import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Beiruti Lake Cafe | Best Specialty Coffee & Dining in DIP, Dubai",
  description:
    "Experience lakefront dining at Beiruti Lake Cafe in DIP. Serving artisan coffee, gourmet breakfast, and premium ambiance. The perfect quiet workspace and destination for the Jumeirah & Marina crowd.",
  keywords: [
    "Specialty Coffee DIP",
    "Quiet Workspace Dubai Investment Park",
    "Premium Roastery Jumeirah",
    "Premium Roastery Marina",
    "Beiruti Lake Cafe",
    "Lakefront Cafe Dubai",
    "Work-friendly Cafe DIP",
    "Premium Ambiance Dubai Investment Park",
    "Lake Cafe Dubai",
    "Neapolitan Pizza DIP",
    "Best Cafe Dubai Investment Park",
    "Lebanese Breakfast DIP",
    "Acai Bowl Dubai",
  ],
  openGraph: {
    title: "Beiruti Lake Cafe | Best Specialty Coffee & Dining in DIP, Dubai",
    description:
      "Experience lakefront dining at Beiruti Lake Cafe in DIP. Artisan coffee, gourmet breakfast, premium ambiance, and Neapolitan pizza by the lake.",
    type: "website",
    locale: "en_AE",
    url: "https://beirutilake.com",
    siteName: "Beiruti Lake Cafe",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beiruti Lake Cafe | Best Specialty Coffee & Dining in DIP, Dubai",
    description:
      "The perfect quiet workspace and lakefront destination in Dubai Investment Park. Premium coffee, ambiance, and Italian-inspired dining.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://beirutilake.com",
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "FoodEstablishment", "CafeOrCoffeeShop"],
    name: "Beiruti Lake Cafe",
    alternateName: "Beiruti Lake",
    image: "https://beirutilake.com/logo.png",
    url: "https://beirutilake.com",
    telephone: "+971-XX-XXX-XXXX",
    description: "Premium lakefront cafe in Dubai Investment Park serving specialty coffee, artisan desserts, Neapolitan pizza, and Lebanese-fusion breakfast.",
    keywords: "Specialty Coffee DIP, Lakefront Cafe Dubai, Work-friendly Cafe DIP, Premium Roastery Jumeirah, Premium Roastery Marina",
    areaServed: [
      { "@type": "City", name: "Dubai Investment Park" },
      { "@type": "City", name: "Al Furjan" },
      { "@type": "City", name: "Jumeirah" },
      { "@type": "City", name: "Dubai Marina" },
      { "@type": "City", name: "Discovery Gardens" },
      { "@type": "City", name: "Motor City" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "DIP, Lake View - Shop 11, The Market - Green Community Village",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      postalCode: "00000",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.9857,
      longitude: 55.1562,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "08:00",
        closes: "01:00",
      },
    ],
    servesCuisine: ["Lebanese", "Italian", "Cafe", "Middle Eastern"],
    priceRange: "$$",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Outdoor Seating", value: true },
      { "@type": "LocationFeatureSpecification", name: "Lakefront Terrace", value: true },
    ],
    hasMenu: {
      "@type": "Menu",
      name: "Beiruti Lake Cafe Menu",
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "Specialty Coffee",
          hasMenuItem: [
            {
              "@type": "MenuItem",
              name: "V60 Pour Over",
              description: "Single-origin hand-brewed V60 pour over",
              offers: { "@type": "Offer", price: "28", priceCurrency: "AED" },
            },
            {
              "@type": "MenuItem",
              name: "Chemex Brew",
              description: "Full-bodied immersion brew for the connoisseur",
              offers: { "@type": "Offer", price: "32", priceCurrency: "AED" },
            },
            {
              "@type": "MenuItem",
              name: "Signature Spanish Latte",
              description: "Condensed milk espresso with house-roasted beans",
              offers: { "@type": "Offer", price: "26", priceCurrency: "AED" },
            },
          ],
        },
        {
          "@type": "MenuSection",
          name: "Neapolitan Pizza",
          hasMenuItem: [
            {
              "@type": "MenuItem",
              name: "Margherita",
              offers: { "@type": "Offer", price: "35", priceCurrency: "AED" },
            },
            {
              "@type": "MenuItem",
              name: "Truffle Mushrooms Pizza",
              offers: { "@type": "Offer", price: "49", priceCurrency: "AED" },
            },
          ],
        },

        {
          "@type": "MenuSection",
          name: "All-Day Brunch",
          hasMenuItem: [
            {
              "@type": "MenuItem",
              name: "Lebanese-Fusion Breakfast",
              description: "Traditional mezze with a contemporary twist",
              offers: { "@type": "Offer", price: "38", priceCurrency: "AED" },
            },
            {
              "@type": "MenuItem",
              name: "Acai Bowl",
              description: "Fresh acai blend with granola, fruits, and honey drizzle",
              offers: { "@type": "Offer", price: "35", priceCurrency: "AED" },
            },
          ],
        },
        {
          "@type": "MenuSection",
          name: "Cold Beverages",
          hasMenuItem: [
            {
              "@type": "MenuItem",
              name: "Freshly Squeezed Juice",
              description: "Orange, Apple, Watermelon, Mango, Pineapple",
              offers: { "@type": "Offer", price: "22", priceCurrency: "AED" },
            },
          ],
        },
      ],
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* Meta Pixel Code (Placeholder) — Replace YOUR_PIXEL_ID with actual ID */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              // TODO: Replace with actual Pixel ID
              // fbq('init', 'YOUR_PIXEL_ID');
              // fbq('track', 'PageView');

              // Global helper for ViewContent + Contact tracking
              window.fbqTrackViewContent = function(name, category) {
                if (window.fbq) {
                  window.fbq('track', 'ViewContent', {
                    content_name: name,
                    content_category: category || 'Menu',
                  });
                }
              };
              window.fbqTrackContact = function(method) {
                if (window.fbq) {
                  window.fbq('track', 'Contact', {
                    content_name: method || 'WhatsApp',
                  });
                }
              };
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {children}
      </body>
    </html>
  );
}
