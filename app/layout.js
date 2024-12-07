import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export async function generateMetadata() {
  return {
    title: 'Zafiro Hair and Beauty - Peluquería y Maquillaje',
    description: 'Bienvenido a Zafiro Hair and Beauty, donde transformamos tu look con estilos modernos y elegantes.',
    keywords: 'Peluquería, Salon de belleza, Salon, Maquillaje, Peinados, Mechas, Balayage, Babylights, Cortes, Corte',
    openGraph: {
      title: 'Zafiro Hair and Beauty - Peluquería y Maquillaje',
      description: 'Descubre nuestros servicios de peluquería y maquillaje para un look radiante.',
      url: 'https://www.zafirohairandbeauty.vercel.app',
      siteName: 'Zafiro Hair and Beauty',
      locale: 'es_ES',
      type: 'website',
    },
    facebook: {
      appId: 'YOUR_FACEBOOK_APP_ID',
      title: 'Zafiro Hair and Beauty - Peluquería y Maquillaje',
      description: 'Visita nuestro salón y descubre nuestros servicios personalizados.',
      url: 'https://www.facebook.com/profile.php?id=61566585353275',
    },
    instagram: {
      handle: '@zafirohairandbeauty',
    },
    tiktok: {
      username: '@zafirohairandbeauty',
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="google-site-verification" content="1e9_3mimi95zkoNprnIXm2E6L51dcBiwDxv_b3kHN1A" />
        <script type="application/ld+json">
          {
            `{
              "@context": "https://schema.org",
              "@type": "Peluquería",
              "name": "Zafiro Hair and Beauty",
              "image": "https://www.zafirohairandbeauty.vercel.app/path/to/image.jpg",
              "telephone": "+34 123 456 789",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "C. Federico García Lorca, 5, Bajo, 11140 Conil de la Frontera, Cádiz",
                "addressLocality": "Conil de la Frontera",
                "addressRegion": "Cádiz",
                "postalCode": "11140",
                "addressCountry": "ES"
              },
              "url": "https://www.zafirohairandbeauty.vercel.app",
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61566585353275",
                "https://www.instagram.com/zafirohairandbeauty",
                "https://www.tiktok.com/@zafirohairandbeauty"
              ],
              "priceRange": "€€",
              "openingHours": ["Tu-Fr 9:30-14:00", "Tu-Fr 16:00-20:00", "Sa 9:00-14:00"],
            }`
          }
        </script>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
