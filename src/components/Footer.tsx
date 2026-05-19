'use client'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function Footer() {
  const t = useTranslations('Footer')
  const tNav = useTranslations('Nav')
  const COLS = [
    {
      title: t('corporate'),
      links: [
        ['/', tNav('home')],
        ['/hakkimizda', tNav('about')],
        ['/iletisim', tNav('contact')],
      ] as [string, string][],
    },
    {
      title: t('products'),
      links: [
        ['/urunler', t('domestic')],
        ['/urunler', t('industrial')],
      ] as [string, string][],
    },
    {
      title: t('services'),
      links: [
        ['/hizmetler', t('installation')],
        ['/hizmetler', t('maintenance')],
        ['/hizmetler', t('filterChange')],
        ['/hizmetler', t('technicalService')],
      ] as [string, string][],
    },
  ]

  return (
    <footer style={{ background: 'var(--aday-deep)', color: 'white', paddingBlock: '64px 36px' }}>
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ background: 'white', borderRadius: 8, padding: '8px 12px', display: 'inline-block', lineHeight: 0 }}>
                <img src="/logo.jpeg" alt="Aday Su Arıtma Sistemleri" style={{ height: 52, width: 'auto', display: 'block' }} />
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.7, maxWidth: 230 }}>
              {t('tagline')}
            </p>
            <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="tel:02324583940" className="footer-contact-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 013 1.18 2 2 0 015 0h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L9.91 7.91a16 16 0 006.29 6.29l1.28-1.29a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                0232 458 39 40
              </a>
              <a href="tel:05554863624" className="footer-contact-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 013 1.18 2 2 0 015 0h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L9.91 7.91a16 16 0 006.29 6.29l1.28-1.29a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                0555 486 36 24
              </a>
              <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 2 }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {t('address')}
              </span>
            </div>
          </div>

          {/* Link Columns */}
          {COLS.map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', marginBottom: 20 }}>
                {col.title}
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.links.map(([href, label]) => (
                  <li key={label}>
                    <Link href={href} className="footer-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.10)', marginTop: 52, paddingTop: 28, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'rgba(245,241,234,0.35)', fontSize: 13, fontFamily: 'var(--font-body)' }}>
            {t('copyright')}
          </p>
          <p style={{ color: 'rgba(245,241,234,0.35)', fontSize: 13, fontFamily: 'var(--font-body)' }}>
            {t('since')}
          </p>
        </div>
      </div>

      <style>{`
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; }
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr; gap: 32px; } }
      `}</style>
    </footer>
  )
}
