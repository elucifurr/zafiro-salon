import Navbar from "@/components/Navbar";
import "./globals.css";
import Head from "next/head";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Zafiro Hair and Beauty',
  description: 'Bienvenido a Zafiro Hair and Beauty, donde transformamos tu look con estilos modernos y elegantes.',
  tags: ['Peluquería', 'Peluqueria', 'Salon de belleza', 'Salon', 'Maquillaje', 'Peinados', 'Mechas', 'Balayage', 'Babylights'],
  openGraph: {
    title: 'Zafiro Hair and Beauty',
    description: 'Descubre nuestros servicios de peluquería y maquillaje para un look radiante.',
    url: 'https://www.zafirohairandbeauty.vercel.app',
    siteName: 'Zafiro Hair and Beauty',
    locale: 'es_ES',
    type: 'website',
  },
  facebook: {
    appId: 'YOUR_FACEBOOK_APP_ID',
    title: 'Zafiro Hair and Beauty',
    description: 'Visita nuestro salón y descubre nuestros servicios personalizados.',
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
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <meta name="description" content={metadata.description} />
      <meta name="tags" content={metadata.tags} />
      <meta property="og:title" content={metadata.openGraph.title} />
      <meta property="og:description" content={metadata.openGraph.description} />
      <meta property="og:url" content={metadata.openGraph.url} />
      <meta property="og:site_name" content={metadata.openGraph.siteName} />
      <meta property="og:type" content={metadata.openGraph.type} />
      <meta property="og:locale" content={metadata.openGraph.locale} />
      <meta property="fb:app_id" content={metadata.facebook.appId} />
      <meta property="fb:title" content={metadata.facebook.title} />
      <meta property="fb:description" content={metadata.facebook.description} />
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
