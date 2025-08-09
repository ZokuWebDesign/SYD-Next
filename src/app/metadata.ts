export const metadata = {
  title: {
    template: '%s | SYD',
    default: 'SYD - Psicologia Online 24h',
  },
  description: 'Atendimento psicológico online 24h por dia. Consultas agendadas ou urgentes com profissionais qualificados. Cuide da sua saúde mental de forma acessível e segura.',
  metadataBase: new URL('https://sydapp.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://sydapp.com.br',
    siteName: 'SYD',
    title: 'SYD - Psicologia Online 24h',
    description: 'Atendimento psicológico online 24h por dia. Consultas agendadas ou urgentes com profissionais qualificados.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SYD - Psicologia Online',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SYD - Psicologia Online 24h',
    description: 'Atendimento psicológico online 24h por dia. Consultas agendadas ou urgentes com profissionais qualificados.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  },
};
