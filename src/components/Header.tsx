'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname as useNextPathname } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { Link as LocaleLink, usePathname } from '@/i18n/navigation'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const nextPathname = useNextPathname()
  const localePath = usePathname() // path WITHOUT locale prefix, from next-intl
  const locale = useLocale()
  const t = useTranslations('Nav')

  const NAV = [
    { href: '/' as const,           label: t('home') },
    { href: '/urunler' as const,    label: t('products') },
    { href: '/hizmetler' as const,  label: t('services') },
    { href: '/hakkimizda' as const, label: t('about') },
    { href: '/iletisim' as const,   label: t('contact') },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [nextPathname])

  const isActive = (href: string) =>
    href === '/' ? localePath === '/' : localePath.startsWith(href)

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      height: 'var(--header-h)',
      background: scrolled ? 'rgba(250,250,248,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--aday-line)' : '1px solid transparent',
      transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
    }}>
      <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <LocaleLink href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{
            background: scrolled ? 'transparent' : 'rgba(255,255,255,0.95)',
            borderRadius: 8,
            padding: scrolled ? '0' : '4px 10px',
            transition: 'background 0.3s, padding 0.3s',
            lineHeight: 0,
          }}>
            <img
              src="/logo.jpeg"
              alt="Aday Su Arıtma Sistemleri"
              style={{ height: 44, width: 'auto', display: 'block' }}
            />
          </div>
        </LocaleLink>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: 2 }} className="hdr-nav">
          {NAV.map(({ href, label }) => (
            <LocaleLink key={href} href={href} style={{
              padding: '8px 13px', borderRadius: 6, fontSize: 14, fontWeight: 500,
              fontFamily: 'var(--font-body)',
              color: isActive(href)
                ? (scrolled ? 'var(--aday-mineral)' : 'white')
                : (scrolled ? 'var(--aday-mute)' : 'rgba(255,255,255,0.82)'),
              background: isActive(href)
                ? (scrolled ? 'var(--aday-pale)' : 'rgba(255,255,255,0.14)')
                : 'transparent',
              transition: 'color var(--ease), background var(--ease)',
            }}>
              {label}
            </LocaleLink>
          ))}
        </nav>

        {/* Desktop right side: locale switcher + CTA */}
        <div className="hdr-cta" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <LocaleSwitcher locale={locale} scrolled={scrolled} localePath={localePath} />
          <LocaleLink href="/iletisim" className="btn btn-primary" style={{ fontSize: 13, padding: '9px 20px' }}>
            {t('cta')}
          </LocaleLink>
        </div>

        {/* Mobile Hamburger */}
        <button className="hdr-burger" onClick={() => setMenuOpen(v => !v)} aria-label="Menü"
          style={{
            display: 'none', background: 'none', border: 'none',
            color: scrolled ? 'var(--aday-deep)' : 'white', padding: 8, borderRadius: 6,
            transition: 'color 0.3s',
          }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen
              ? <><path d="M18 6L6 18"/><path d="M6 6l12 12"/></>
              : <><path d="M3 7h18"/><path d="M3 12h18"/><path d="M3 17h18"/></>}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'var(--aday-paper)', borderTop: '1px solid var(--aday-line)',
          padding: '8px 0 16px', boxShadow: '0 8px 24px rgba(15,42,46,0.12)',
        }}>
          {NAV.map(({ href, label }) => (
            <LocaleLink key={href} href={href} style={{
              display: 'block', padding: '12px 24px', fontSize: 15,
              fontWeight: 500, fontFamily: 'var(--font-body)',
              color: isActive(href) ? 'var(--aday-mineral)' : 'var(--aday-ink)',
              borderLeft: isActive(href) ? '3px solid var(--aday-mineral)' : '3px solid transparent',
              background: isActive(href) ? 'var(--aday-pale)' : 'transparent',
            }}>
              {label}
            </LocaleLink>
          ))}
          <div style={{ padding: '8px 24px 0', display: 'flex', alignItems: 'center', gap: 12 }}>
            <LocaleSwitcher locale={locale} scrolled={true} localePath={localePath} />
          </div>
          <div style={{ padding: '12px 24px 0' }}>
            <a href="tel:02324583940" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              0232 458 39 40
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hdr-nav { display: none !important; }
          .hdr-cta { display: none !important; }
          .hdr-burger { display: block !important; }
        }
      `}</style>
    </header>
  )
}

function LocaleSwitcher({
  locale,
  scrolled,
  localePath,
}: {
  locale: string
  scrolled: boolean
  localePath: string
}) {
  const textColor = scrolled ? 'var(--aday-mute)' : 'rgba(255,255,255,0.75)'
  const activeColor = scrolled ? 'var(--aday-deep)' : 'white'
  const dividerColor = scrolled ? 'var(--aday-line)' : 'rgba(255,255,255,0.25)'

  return (
    <div style={{ display: 'flex', alignItems: 'center', fontSize: 12, fontWeight: 700, fontFamily: 'var(--font-body)', letterSpacing: '0.06em' }}>
      <LocaleLink
        href={localePath}
        locale="tr"
        style={{
          padding: '4px 8px', borderRadius: '4px 0 0 4px',
          color: locale === 'tr' ? activeColor : textColor,
          fontWeight: locale === 'tr' ? 700 : 500,
          textDecoration: 'none',
          transition: 'color var(--ease)',
        }}
      >
        TR
      </LocaleLink>
      <span style={{ color: dividerColor, userSelect: 'none' }}>|</span>
      <LocaleLink
        href={localePath}
        locale="en"
        style={{
          padding: '4px 8px', borderRadius: '0 4px 4px 0',
          color: locale === 'en' ? activeColor : textColor,
          fontWeight: locale === 'en' ? 700 : 500,
          textDecoration: 'none',
          transition: 'color var(--ease)',
        }}
      >
        EN
      </LocaleLink>
    </div>
  )
}
