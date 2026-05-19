'use client'
import { useState, useMemo, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Link as LocaleLink } from '@/i18n/navigation'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useTranslations } from 'next-intl'
import productsData from '@/data/products.json'

type Product = {
  id: string
  name: string
  brand: string
  category: string
  image: string
  features: string[]
  description_points: string[]
  variants: { code: string; name: string }[]
}

type IndustrialItem = {
  title: string
  badge: string | null
  desc: string
  features: string[]
  images: string[]
}

const CATEGORY_KEYS = [
  'Tezgah Altı Kabinli Cihazlar',
  'Tezgah Altı Açık Kasa Cihazlar',
  'Direkt Akış Cihazlar',
  'Arıtmalı Sebiller',
]

const INDUSTRIAL_IMAGES = [
  ['/products/yumusatma.png', '/products/yumusatma-2.jpg'],
  ['/products/reverse-osmosis.png', '/products/reverse-osmosis2.png', '/products/reverse-osmosis-3.jpg', '/products/reverse-osmosis-4.png', '/products/reverse-osmosis-5.png', '/products/reverse-osmosis-6.png'],
  ['/products/seperator1.png', '/products/seperator2.png', '/products/seperator-3.png'],
  ['/products/kum-filtre-multimedya.png', '/products/kum-filtre.png', '/products/kum-filtre-2.png'],
  ['/products/kartus-filtre.png', '/products/kartus-filtre-2.png'],
  ['/products/dolgu-mineralleri.png', '/products/mineral-ve-kimyasal.png'],
  ['/products/ultraviole.png'],
  ['/products/dozaj-pompasi.png'],
  ['/products/kimyasallar.png'],
]

const WA_NUMBER = '905554863624'

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(10,20,22,0.92)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24,
        animation: 'lbFadeIn 0.18s ease',
      }}
    >
      <style>{`@keyframes lbFadeIn{from{opacity:0}to{opacity:1}}`}</style>
      <button
        onClick={onClose}
        style={{
          position: 'fixed', top: 20, right: 24,
          background: 'rgba(255,255,255,0.12)', border: 'none',
          borderRadius: '50%', width: 44, height: 44,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', color: 'white', fontSize: 22,
          backdropFilter: 'blur(4px)',
          transition: 'background var(--ease)',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.22)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
        aria-label="Close"
      >
        ×
      </button>
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%', maxWidth: 860,
          height: '80vh',
          background: 'white', borderRadius: 12,
          overflow: 'hidden',
        }}
      >
        <Image src={src} alt={alt} fill sizes="90vw" style={{ objectFit: 'contain', padding: 24 }} priority />
      </div>
      <p style={{
        position: 'fixed', bottom: 20, left: 0, right: 0, textAlign: 'center',
        color: 'rgba(255,255,255,0.65)', fontSize: 13,
        fontFamily: 'var(--font-body)', letterSpacing: '0.01em',
      }}>
        {alt}
      </p>
    </div>
  )
}

function WaButton({ name, label }: { name: string; label: string }) {
  const [hovered, setHovered] = useState(false)
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Merhaba, ${name} hakkında bilgi almak istiyorum`)}`
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        background: hovered ? '#1ebe5e' : '#25D366',
        color: 'white', padding: '10px 20px', borderRadius: 'var(--radius)',
        fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-body)',
        textDecoration: 'none', width: '100%',
        transform: hovered ? 'translateY(-1px)' : 'none',
        transition: 'background var(--ease), transform var(--ease)',
      }}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {label}
    </a>
  )
}

function EndustriyelCard({ p, onImageClick, learnPriceLabel }: { p: IndustrialItem; onImageClick: (src: string) => void; learnPriceLabel: string }) {
  const [idx, setIdx] = useState(0)
  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setIdx(i => (i - 1 + p.images.length) % p.images.length) }
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setIdx(i => (i + 1) % p.images.length) }
  const arrowStyle: React.CSSProperties = {
    position: 'absolute', top: '50%', transform: 'translateY(-50%)',
    background: 'rgba(255,255,255,0.85)', border: 'none', borderRadius: '50%',
    width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', zIndex: 2, boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
    transition: 'background 0.15s',
  }
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div
        onClick={() => onImageClick(p.images[idx])}
        style={{ position: 'relative', height: 220, background: 'var(--aday-cream)', borderBottom: '1px solid var(--aday-line)', overflow: 'hidden', flexShrink: 0, cursor: 'zoom-in' }}
      >
        <Image
          src={p.images[idx]}
          alt={p.title}
          fill
          sizes="(max-width:900px) 100vw, 50vw"
          style={{ objectFit: 'contain', padding: 16 }}
          loading="lazy"
        />
        {p.badge && (
          <span style={{ position: 'absolute', top: 12, right: 12, background: 'var(--aday-mineral)', color: 'white', borderRadius: 4, fontSize: 11, fontWeight: 700, padding: '4px 10px', fontFamily: 'var(--font-body)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            {p.badge}
          </span>
        )}
        {p.images.length > 1 && (
          <>
            <button onClick={prev} style={{ ...arrowStyle, left: 8 }} aria-label="Previous image">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--aday-deep)" strokeWidth="2.5" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button onClick={next} style={{ ...arrowStyle, right: 8 }} aria-label="Next image">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--aday-deep)" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
            <div style={{ position: 'absolute', bottom: 8, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 6 }}>
              {p.images.map((_, i) => (
                <button
                  key={i}
                  onClick={e => { e.stopPropagation(); setIdx(i) }}
                  style={{ width: i === idx ? 20 : 8, height: 8, borderRadius: 4, border: 'none', padding: 0, cursor: 'pointer', background: i === idx ? 'var(--aday-mineral)' : 'rgba(44,95,101,0.3)', transition: 'all 0.2s' }}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div style={{ padding: 32, flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, lineHeight: 1.3, color: 'var(--aday-deep)' }}>{p.title}</h3>
        <p style={{ color: 'var(--aday-mute)', fontSize: 14, lineHeight: 1.7 }}>{p.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {p.features.map(f => (
            <span key={f} style={{ background: 'var(--aday-pale)', color: 'var(--aday-mineral)', borderRadius: 4, fontSize: 12, fontWeight: 600, padding: '5px 10px', border: '1px solid rgba(44,95,101,0.2)', fontFamily: 'var(--font-body)' }}>
              ✓ {f}
            </span>
          ))}
        </div>
        <div style={{ marginTop: 'auto', paddingTop: 8 }}>
          <Link href="/iletisim" className="btn btn-primary" style={{ fontSize: 14, display: 'block', textAlign: 'center' }}>{learnPriceLabel}</Link>
        </div>
      </div>
    </div>
  )
}

function ProductCard({
  product, onImageClick, featuresLabel, descriptionLabel, modelsLabel, modelCode, modelName, waLabel,
}: {
  product: Product
  onImageClick: (src: string, alt: string) => void
  featuresLabel: string
  descriptionLabel: string
  modelsLabel: string
  modelCode: string
  modelName: string
  waLabel: string
}) {
  const [imgError, setImgError] = useState(false)
  const [imgHovered, setImgHovered] = useState(false)

  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        onClick={() => !imgError && onImageClick(product.image, product.name)}
        onMouseEnter={() => setImgHovered(true)}
        onMouseLeave={() => setImgHovered(false)}
        style={{
          position: 'relative', height: 220,
          background: 'var(--aday-cream)', borderBottom: '1px solid var(--aday-line)',
          overflow: 'hidden', flexShrink: 0,
          cursor: imgError ? 'default' : 'zoom-in',
        }}
      >
        {!imgError ? (
          <>
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width:640px) 100vw, (max-width:900px) 50vw, 33vw"
              style={{ objectFit: 'contain', padding: 16, transition: 'transform 0.3s ease', transform: imgHovered ? 'scale(1.04)' : 'scale(1)' }}
              loading="lazy"
              onError={() => setImgError(true)}
            />
            {imgHovered && (
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,42,46,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'opacity 0.2s' }}>
                <div style={{ background: 'rgba(255,255,255,0.9)', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--aday-deep)" strokeWidth="2" strokeLinecap="round" aria-hidden>
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
              </div>
            )}
          </>
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--aday-mist)', fontSize: 28, fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
            {product.brand.slice(0, 2).toUpperCase()}
          </div>
        )}
      </div>

      <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div>
          <span style={{ display: 'inline-block', background: 'var(--aday-pale)', color: 'var(--aday-mineral)', border: '1px solid rgba(44,95,101,0.2)', borderRadius: 4, fontSize: 10, fontWeight: 700, padding: '3px 8px', fontFamily: 'var(--font-body)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
            {product.brand}
          </span>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 17, fontWeight: 700, lineHeight: 1.3, color: 'var(--aday-deep)' }}>
            {product.name}
          </h3>
        </div>

        {product.features.length > 0 && (
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--aday-mist)', fontFamily: 'var(--font-body)', marginBottom: 8 }}>{featuresLabel}</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {product.features.map((f, i) => (
                <li key={i} style={{ fontSize: 13, color: 'var(--aday-mute)', display: 'flex', gap: 8, lineHeight: 1.5 }}>
                  <span style={{ color: 'var(--aday-mineral)', flexShrink: 0 }}>✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {product.description_points.length > 0 && (
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--aday-mist)', fontFamily: 'var(--font-body)', marginBottom: 8 }}>{descriptionLabel}</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {product.description_points.map((d, i) => (
                <li key={i} style={{ fontSize: 13, color: 'var(--aday-mute)', display: 'flex', gap: 8, lineHeight: 1.5 }}>
                  <span style={{ color: 'var(--aday-accent)', flexShrink: 0 }}>·</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {product.variants.length > 0 && (
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--aday-mist)', fontFamily: 'var(--font-body)', marginBottom: 8 }}>{modelsLabel}</p>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
              <thead>
                <tr>
                  <th style={{ padding: '6px 10px', textAlign: 'left', fontWeight: 600, color: 'var(--aday-deep)', background: 'var(--aday-cream)', borderBottom: '1px solid var(--aday-line)', fontFamily: 'var(--font-body)' }}>{modelCode}</th>
                  <th style={{ padding: '6px 10px', textAlign: 'left', fontWeight: 600, color: 'var(--aday-deep)', background: 'var(--aday-cream)', borderBottom: '1px solid var(--aday-line)', fontFamily: 'var(--font-body)' }}>{modelName}</th>
                </tr>
              </thead>
              <tbody>
                {product.variants.map((v, i) => (
                  <tr key={v.code} style={{ background: i % 2 === 0 ? 'transparent' : 'var(--aday-cream)' }}>
                    <td style={{ padding: '5px 10px', color: 'var(--aday-mineral)', fontWeight: 600, fontFamily: 'var(--font-body)', borderBottom: '1px solid var(--aday-line)' }}>{v.code}</td>
                    <td style={{ padding: '5px 10px', color: 'var(--aday-mute)', borderBottom: '1px solid var(--aday-line)', fontFamily: 'var(--font-body)' }}>{v.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div style={{ marginTop: 'auto', paddingTop: 8 }}>
          <WaButton name={product.name} label={waLabel} />
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  useScrollReveal()
  const t = useTranslations('Products')
  const [tab, setTab] = useState<'evsel' | 'endustriyel'>('evsel')
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  const categories = t.raw('categories') as string[]
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0)

  const industrialData = t.raw('industrialItems') as { title: string; badge: string | null; desc: string; features: string[] }[]
  const ENDUSTRIYEL: IndustrialItem[] = industrialData.map((item, i) => ({
    ...item,
    images: INDUSTRIAL_IMAGES[i] ?? [],
  }))

  const products = productsData as Product[]
  const filteredProducts = useMemo(
    () => products.filter(p => p.category === CATEGORY_KEYS[activeCategoryIdx]),
    [products, activeCategoryIdx]
  )

  const featuresLabel = t('featuresLabel')
  const descriptionLabel = t('descriptionLabel')
  const modelsLabel = t('modelsLabel')
  const modelCode = t('modelCode')
  const modelName = t('modelName')
  const waLabel = t('contactForPrice')
  const learnPriceLabel = t('learnPrice')

  return (
    <>
      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}

      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">{t('eyebrow')}</p>
          <h1>{t('h1a')}<br />{t('h1b')}</h1>
          <p style={{ marginTop: 16 }}>{t('sub')}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">

          <div style={{ marginBottom: 48, display: 'flex', background: 'var(--aday-cream)', borderRadius: 8, padding: 4, width: 'fit-content', border: '1px solid var(--aday-line)' }}>
            {([['evsel', t('tabDomestic')], ['endustriyel', t('tabIndustrial')]] as const).map(([key, label]) => (
              <button key={key} onClick={() => setTab(key)} style={{
                padding: '10px 24px', borderRadius: 6, border: 'none', fontSize: 14,
                fontFamily: 'var(--font-body)', fontWeight: 600, cursor: 'pointer',
                background: tab === key ? 'white' : 'transparent',
                color: tab === key ? 'var(--aday-deep)' : 'var(--aday-mute)',
                boxShadow: tab === key ? 'var(--shadow-sm)' : 'none',
                transition: 'background var(--ease), color var(--ease), box-shadow var(--ease)',
              }}>
                {label}
              </button>
            ))}
          </div>

          {tab === 'evsel' && (
            <>
              {/* Featured: Aday Su Premium */}
              <LocaleLink href="/urunler/aday-su-premium" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                background: 'var(--aday-deep)', color: 'white',
                borderRadius: 10, padding: '20px 28px',
                marginBottom: 36, textDecoration: 'none',
                border: '1px solid rgba(44,95,101,0.2)',
                transition: 'opacity var(--ease)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{
                    background: 'var(--aday-mineral)', color: 'white',
                    borderRadius: 4, fontSize: 10, fontWeight: 700,
                    padding: '3px 10px', fontFamily: 'var(--font-body)',
                    letterSpacing: '0.10em', textTransform: 'uppercase',
                    flexShrink: 0,
                  }}>
                    Premium
                  </span>
                  <div>
                    <div style={{
                      fontSize: 11, opacity: 0.5, fontFamily: 'var(--font-body)',
                      letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 3,
                    }}>
                      {t('premiumBannerSub')}
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                      Aday Su Premium
                    </div>
                  </div>
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  fontSize: 13, fontWeight: 600,
                  fontFamily: 'var(--font-body)',
                  opacity: 0.75, flexShrink: 0,
                }}>
                  {t('premiumBannerCta')}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </LocaleLink>

              <div style={{ marginBottom: 40, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {categories.map((cat, i) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategoryIdx(i)}
                    style={{
                      padding: '9px 18px', borderRadius: 6,
                      border: '1.5px solid',
                      borderColor: activeCategoryIdx === i ? 'var(--aday-mineral)' : 'var(--aday-line)',
                      background: activeCategoryIdx === i ? 'var(--aday-mineral)' : 'transparent',
                      color: activeCategoryIdx === i ? 'white' : 'var(--aday-mute)',
                      fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-body)', cursor: 'pointer',
                      transition: 'all var(--ease)',
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <p style={{ fontSize: 13, color: 'var(--aday-mist)', fontFamily: 'var(--font-body)', marginBottom: 32 }}>
                {t('productCount', { count: filteredProducts.length })}
              </p>

              <div className="grid-3">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onImageClick={(src, alt) => setLightbox({ src, alt })}
                    featuresLabel={featuresLabel}
                    descriptionLabel={descriptionLabel}
                    modelsLabel={modelsLabel}
                    modelCode={modelCode}
                    modelName={modelName}
                    waLabel={waLabel}
                  />
                ))}
              </div>
            </>
          )}

          {tab === 'endustriyel' && (
            <div className="grid-2">
              {ENDUSTRIYEL.map(p => (
                <EndustriyelCard
                  key={p.title}
                  p={p}
                  onImageClick={(src) => setLightbox({ src, alt: p.title })}
                  learnPriceLabel={learnPriceLabel}
                />
              ))}
            </div>
          )}

        </div>
      </section>

      <section style={{ background: 'var(--aday-cream)', padding: '80px 24px', textAlign: 'center', borderTop: '1px solid var(--aday-line)' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 className="reveal" style={{ fontFamily: 'var(--font-heading)', fontSize: 32, fontWeight: 700, marginBottom: 16 }}>{t('ctaH2')}</h2>
          <p className="reveal reveal-d1" style={{ color: 'var(--aday-mute)', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            {t('ctaSub')}
          </p>
          <div className="reveal reveal-d2" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:02324583940" className="btn btn-primary">{t('ctaCall')}</a>
            <Link href="/iletisim" className="btn btn-outline">{t('ctaMessage')}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
