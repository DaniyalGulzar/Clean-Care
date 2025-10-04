// "use client"; // This makes the component a Client Component
// import { Outfit } from "next/font/google";
// import "./globals.css";
// import { Toaster } from "react-hot-toast";
// import { SessionProvider } from "next-auth/react";

// const outfit = Outfit({ subsets: ["latin"] });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={outfit.className}>
//         <Toaster position="top-right" />
//         <SessionProvider>{children}</SessionProvider>
//       </body>
//     </html>
//   );
// }

// src/app/layout.tsx
import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ClientSessionProvider from "../components/ClientSessionProvider";
import type { Metadata } from "next";

const outfit = Outfit({ subsets: ["latin"] });

// Metadata export (Server Component only)
export const metadata: Metadata = {
  metadataBase: new URL("https://www.cleancare.pk"),
  title: {
    default:
      "Clean Care Janitorial Services Lahore | Professional Cleaning Company Pakistan",
    template: "%s | Clean Care Janitorial Services",
  },
  description:
    "Clean Care provides professional janitorial and cleaning services across Lahore and Pakistan. We specialize in commercial cleaning, office cleaning, residential cleaning, deep cleaning, carpet cleaning, and sanitization services. Available 24/7 with trained staff, eco-friendly products, and competitive rates.",
  keywords:
    "+923024199048 --janitorial services Lahore, cleaning services Pakistan, professional cleaning company, office cleaning Lahore, commercial cleaning services, residential cleaning Lahore, deep cleaning services, carpet cleaning Lahore, floor cleaning services, sanitization services Pakistan, disinfection services, housekeeping services, industrial cleaning, hospital cleaning services, school cleaning services, restaurant cleaning, retail store cleaning, warehouse cleaning, post construction cleaning, move in move out cleaning, window cleaning services, upholstery cleaning, bathroom cleaning services, kitchen cleaning services, eco-friendly cleaning, green cleaning services, 24/7 cleaning services, professional cleaners Lahore, cleaning company Pakistan, janitorial staff, facility management, building maintenance, corporate cleaning services, event cleaning services, periodic cleaning services, one-time deep cleaning, contract cleaning services, affordable cleaning Lahore",
  authors: [{ name: "Clean Care Janitorial Services" }],
  creator: "Clean Care Team",
  publisher: "Clean Care Janitorial Services",
  category: "Business Services",
  classification: "Cleaning & Janitorial Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Clean Care Janitorial Services | Professional Cleaning Solutions Lahore & Pakistan",
    description:
      " +923024199048 --Leading janitorial and cleaning services provider in Lahore and across Pakistan. Offering commercial, residential, office, and industrial cleaning with trained staff, eco-friendly products, and 24/7 availability. Trust Pakistan's premier cleaning company for all your sanitation needs.",
    url: "https://www.cleancare.pk",
    siteName: "Clean Care Janitorial Services",
    images: [
      {
        url: "https://www.cleancare.pk/images/cleancare-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Clean Care Janitorial Services - Professional Cleaning Company",
      },
      {
        url: "https://www.cleancare.pk/images/cleaning-services.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Cleaning Services in Lahore Pakistan",
      },
    ],
    locale: "en_PK",
    type: "website",
    countryName: "Pakistan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clean Care Janitorial Services | Professional Cleaning Lahore",
    description:
      "Premium janitorial and cleaning services for offices, homes, and commercial spaces. Available 24/7 with trained staff and eco-friendly cleaning solutions across Lahore and Pakistan.",
    images: ["https://www.cleancare.pk/images/cleancare-hero.jpg"],
    creator: "@cleancarepk",
    site: "@cleancarepk",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
      { url: "/apple-touch-icon-152x152.png", sizes: "152x152" },
    ],
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification",
    other: {
      "msvalidate.01": "your-bing-verification",
    },
  },
  alternates: {
    canonical: "https://www.cleancare.pk",
    languages: {
      "en-PK": "https://www.cleancare.pk",
      "ur-PK": "https://www.cleancare.pk/ur",
    },
  },
  other: {
    "theme-color": "#10B981",
    "msapplication-TileColor": "#10B981",
    "msapplication-TileImage": "/mstile-144x144.png",
    "application-name": "Clean Care Janitorial Services",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Clean Care",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-tooltip": "Clean Care Janitorial Services Lahore",
    "og:email": "info@cleancare.pk",
    "og:phone_number": "+92-XXX-XXXXXXX",
    "og:latitude": "31.5804",
    "og:longitude": "74.3587",
    "og:street-address": "Your Street Address, Lahore",
    "og:locality": "Lahore",
    "og:region": "Punjab",
    "og:postal-code": "54000",
    "og:country-name": "Pakistan",
    "business:contact_data:street_address": "Your Street Address",
    "business:contact_data:locality": "Lahore",
    "business:contact_data:region": "Punjab",
    "business:contact_data:postal_code": "54000",
    "business:contact_data:country_name": "Pakistan",
    "business:contact_data:email": "info@cleancare.pk",
    "business:contact_data:phone_number": "+92-XXX-XXXXXXX",
    "business:contact_data:website": "https://www.cleancare.pk",
    "geo.region": "PK-PB",
    "geo.placename": "Lahore",
    "geo.position": "31.5804;74.3587",
    ICBM: "31.5804, 74.3587",
    rating: "5.0",
    pricerange: "$$",
    contact: "+92-XXX-XXXXXXX",
    email: "info@cleancare.pk",
    "revisit-after": "7 days",
    distribution: "global",
    expires: "never",
    "fb:app_id": "your-facebook-app-id",
    "fb:pages": "your-facebook-page-id",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Clean Care",
    statusBarStyle: "default",
  },
};

// Server Component (no 'use client')
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="en-PK" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="resource-type" content="document" />
        <meta name="audience" content="all" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        {/* Additional meta tags for better indexing */}
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="skype_toolbar" content="skype_toolbar_parser_compatible" />

        {/* Structured Data Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.cleancare.pk/#organization",
                  name: "Clean Care Janitorial Services",
                  url: "https://www.cleancare.pk",
                  sameAs: [
                    "https://www.facebook.com/cleancarepk",
                    "https://www.instagram.com/cleancarepk",
                    "https://www.linkedin.com/company/cleancarepk",
                    "https://twitter.com/cleancarepk",
                  ],
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.cleancare.pk/images/logo.png",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+92-XXX-XXXXXXX",
                    contactType: "customer service",
                    areaServed: "PK",
                    availableLanguage: ["en", "ur"],
                  },
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Your Street Address",
                    addressLocality: "Lahore",
                    addressRegion: "Punjab",
                    postalCode: "54000",
                    addressCountry: "PK",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.cleancare.pk/#website",
                  url: "https://www.cleancare.pk",
                  name: "Clean Care Janitorial Services",
                  description:
                    " +923024199048 -- Professional cleaning and janitorial services in Lahore and across Pakistan for commercial, residential, and industrial spaces.",
                  publisher: {
                    "@id": "https://www.cleancare.pk/#organization",
                  },
                  potentialAction: [
                    {
                      "@type": "SearchAction",
                      target: {
                        "@type": "EntryPoint",
                        urlTemplate:
                          "https://www.cleancare.pk/search?q={search_term_string}",
                      },
                      "query-input": "required name=search_term_string",
                    },
                  ],
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.cleancare.pk/#localbusiness",
                  name: "Clean Care Janitorial Services",
                  image: "https://www.cleancare.pk/images/cleancare-hero.jpg",
                  url: "https://www.cleancare.pk",
                  telephone: "+92-XXX-XXXXXXX",
                  email: "info@cleancare.pk",
                  priceRange: "$$",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Your Street Address",
                    addressLocality: "Lahore",
                    addressRegion: "Punjab",
                    postalCode: "54000",
                    addressCountry: "PK",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 31.5804,
                    longitude: 74.3587,
                  },
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday",
                      ],
                      opens: "00:00",
                      closes: "23:59",
                    },
                  ],
                  hasMap: "https://maps.google.com/?q=31.5804,74.3587",
                  description:
                    " +923024199048 -- Professional janitorial and cleaning services for offices, homes, commercial spaces, and industrial facilities in Lahore and Pakistan.",
                  areaServed: [
                    {
                      "@type": "City",
                      name: "Lahore",
                    },
                    {
                      "@type": "Country",
                      name: "Pakistan",
                    },
                  ],
                  serviceType: [
                    "Commercial Cleaning",
                    "Office Cleaning",
                    "Residential Cleaning",
                    "Deep Cleaning",
                    "Carpet Cleaning",
                    "Floor Cleaning",
                    "Window Cleaning",
                    "Sanitization Services",
                    "Disinfection Services",
                    "Janitorial Services",
                  ],
                },
                {
                  "@type": "Service",
                  serviceType: "Janitorial and Cleaning Services",
                  provider: {
                    "@id": "https://www.cleancare.pk/#organization",
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "Pakistan",
                  },
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Cleaning Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Office Cleaning Services",
                          description:
                            "Professional office cleaning and maintenance services",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Commercial Cleaning Services",
                          description:
                            "Complete commercial space cleaning solutions",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Residential Cleaning Services",
                          description:
                            "Home cleaning and housekeeping services",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Deep Cleaning Services",
                          description:
                            "Comprehensive deep cleaning for all spaces",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Carpet & Upholstery Cleaning",
                          description:
                            "Professional carpet and upholstery cleaning services",
                        },
                      },
                    ],
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={outfit.className}>
        <Toaster position="top-right" />
        <ClientSessionProvider>{children}</ClientSessionProvider>
      </body>
    </html>
  );
}
