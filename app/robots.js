export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '',
      },
      sitemap: 'https://zafirohairandbeauty.vercel.app/sitemap.xml',
    }
  }