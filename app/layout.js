import Navbar from "@/components/Navbar";
import "./globals.css";
import Head from "next/head";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Zafiro Hair and Beauty',
  description: 'Bienvenido a Zafiro Hair and Beauty, donde transformamos tu look con estilos modernos y elegantes.',
  openGraph: {
    title: 'Zafiro Hair and Beauty',
    description: 'Descubre nuestros servicios de peluquería y estética para un look radiante.',
    url: 'https://www.zafirohairandbeauty.com',
    siteName: 'Zafiro Hair and Beauty',
    images: [
      {
        url: 'https://www.zafirohairandbeauty.com/images/hero-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  facebook: {
    appId: 'YOUR_FACEBOOK_APP_ID',
    title: 'Zafiro Hair and Beauty',
    description: 'Visita nuestro salón y descubre nuestros servicios personalizados.',
    image: 'https://www.zafirohairandbeauty.com/images/hero-image.jpg',
    url: 'https://www.facebook.com/profile.php?id=61566585353275', // URL de tu página de Facebook
  },
  instagram: {
    handle: '@zafirohairandbeauty',
  },
  tiktok: {
    username: '@zafirohairandbeauty',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
      <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="fb:app_id" content={metadata.facebook.appId} />
        <meta property="fb:title" content={metadata.facebook.title} />
        <meta property="fb:description" content={metadata.facebook.description} />
        <meta property="fb:image" content={metadata.facebook.image} />
        <meta property="fb:url" content={metadata.facebook.url} />
        <meta name="instagram:handle" content={metadata.instagram.handle} />
        <meta name="tiktok:username" content={metadata.tiktok.username} />
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
