import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export async function generateMetadata() {
  return {
    title: 'Zafiro Hair and Beauty | Peluquería y Maquillaje en Conil de la Frontera',
    description: 'En Zafiro Hair and Beauty transformamos tu look con cortes de cabello modernos, mechas Balayage y Babylights, tratamientos capilares Redken y maquillaje profesional en Conil, Cádiz.',
    keywords: 'Peluquería en Conil, salón de belleza Cádiz, mechas Balayage, Babylights, tratamientos capilares, corte de cabello personalizado, maquillaje profesional, peluquería para bodas, cortes modernos, estética en Cádiz, peinados para eventos, estilismo Redken, servicios de belleza, corte de cabello mujeres, peinados novias, peluquería Redken',
    image: 'https://www.zafirohairandbeauty.vercel.app/images/balayage.webp',
    openGraph: {
      title: 'Zafiro Hair and Beauty | Peluquería y Maquillaje en Conil',
      description: 'Descubre los mejores servicios de peluquería y maquillaje en Conil, con un enfoque personalizado para cada cliente. Realizamos mechas Balayage, Babylights y mucho más.',
      url: 'https://www.zafirohairandbeauty.vercel.app',
      siteName: 'Zafiro Hair and Beauty',
      locale: 'es_ES',
      type: 'website',
      image: 'https://www.zafirohairandbeauty.vercel.app/images/balayage.webp',
    },
    facebook: {
      appId: '166294863747191833264038932764',
      title: 'Zafiro Hair and Beauty | Peluquería y Maquillaje',
      description: 'Visita Zafiro Hair and Beauty en Conil para disfrutar de servicios de peluquería y maquillaje personalizados. Transformamos tu look con productos Redken.',
      url: 'https://www.facebook.com/profile.php?id=61566585353275',
      image: 'https://www.zafirohairandbeauty.vercel.app/images/balayage.webp',
    },
    instagram: {
      handle: '@zafirohairandbeauty',
    },
    tiktok: {
      username: '@zafirohairandbeauty',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Zafiro Hair and Beauty | Peluquería y Maquillaje',
      description: 'Servicios exclusivos de peluquería y maquillaje en Conil, desde mechas hasta cortes y peinados para novias.',
      image: 'https://www.zafirohairandbeauty.vercel.app/images/balayage.webp',
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Zafiro Hair and Beauty" />
        <meta name="google-site-verification" content="1e9_3mimi95zkoNprnIXm2E6L51dcBiwDxv_b3kHN1A" />
        <script type="application/ld+json">
          {
            `{
              "@context": "https://schema.org",
              "@type": "HairSalon",
              "name": "Zafiro Hair and Beauty",
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
              "openingHoursSpecification": [
                {
                  "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:30",
                  "closes": "14:00"
                },
                {
                  "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "16:00",
                  "closes": "20:00"
                },
                {
                  "dayOfWeek": ["Saturday"],
                  "opens": "09:00",
                  "closes": "14:00"
                }
              ],
              "image": "https://www.zafirohairandbeauty.vercel.app/images/balayage.webp"
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
