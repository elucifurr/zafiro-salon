import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export async function generateMetadata() {
  return {
    title: 'Zafiro Hair and Beauty - Peluquería y Maquillaje',
    description: 'Bienvenido a Zafiro Hair and Beauty, donde transformamos tu look con estilos modernos y elegantes.',
    keywords: 'Peluquería, Peluqueria, Salon de belleza, Salon, Maquillaje, Peinados, Mechas, Balayage, Babylights, Cortes, Corte',
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
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
