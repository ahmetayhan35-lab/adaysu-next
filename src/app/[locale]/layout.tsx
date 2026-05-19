import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '../globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aday Su Arıtma Sistemleri | İzmir',
  description: "2002'den bu yana İzmir'de evsel ve endüstriyel su arıtma çözümleri. Binlerce mutlu müşteri, 24 yıllık deneyim.",
  keywords: 'su arıtma, izmir su arıtma, evsel su arıtma, endüstriyel su arıtma, aday su',
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'tr' | 'en')) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} className={`${fraunces.variable} ${inter.variable}`} data-scroll-behavior="smooth">
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
