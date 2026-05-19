'use client'
import Link from 'next/link'
import CountUp from '@/components/CountUp'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useTranslations } from 'next-intl'

const WHY_ICONS = [
  { iconD: 'M12 7V12L15 15', iconCircle: true },
  { iconD: 'M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6Z' },
  { iconD: 'M13 2L4 14H12L11 22L20 10H12Z' },
  { iconD: 'M20 6L9 17L4 12' },
  { iconD: 'M12 2C9 8 4 13 4 18A8 8 0 0 0 20 18C20 13 15 8 12 2Z' },
  { iconD: 'M4 12A8 8 0 0 1 20 12M2 13H6V20H2ZM18 13H22V20H18Z' },
]

const SERVICE_ICONS = [
  'M14.7 6.3A6 6 0 0 0 5 17L9 21L21 9L17 5Z',
  'M23 4V10H17M1 20V14H7M20.49 9A9 9 0 0 0 5.64 5.64L1 10M23 14L18.36 18.36A9 9 0 0 1 3.51 15',
  'M22 3H2L10 12.46V19L14 21V12.46Z',
  'M12 20H21M16.5 3.5A2.121 2.121 0 0 1 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z',
]

export default function HomePage() {
  useScrollReveal()
  const t = useTranslations('Home')

  const why = t.raw('why') as { title: string; desc: string }[]
  const homeServices = t.raw('homeServices') as { title: string; desc: string }[]

  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        minHeight: 'calc(100vh - var(--header-h))',
        background: 'linear-gradient(160deg,#040F10 0%,#0F2A2E 45%,#1A3F44 78%,#2C5F65 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '80px 24px 100px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position:'absolute',inset:0,pointerEvents:'none',background:'radial-gradient(ellipse 80% 60% at 50% 60%,rgba(44,95,101,0.28) 0%,transparent 70%)' }} />
        <img
          src="/logo.jpeg"
          aria-hidden
          style={{
            position:'absolute', top:'50%', left:'50%',
            transform:'translate(-50%,-50%)',
            height:'75%', width:'auto',
            filter:'invert(1)',
            mixBlendMode:'screen',
            opacity:0.12,
            pointerEvents:'none', userSelect:'none',
            objectFit:'contain',
          }}
        />
        <div style={{ position:'relative', maxWidth:760 }}>
          <div style={{
            display:'inline-block', background:'rgba(255,255,255,0.08)', backdropFilter:'blur(8px)',
            borderRadius:4, padding:'7px 18px', fontSize:12, fontFamily:'var(--font-body)',
            fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase',
            color:'rgba(255,255,255,0.8)', border:'1px solid rgba(255,255,255,0.15)', marginBottom:32,
          }}>
            {t('heroBadge')}
          </div>
          <h1 style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(44px,8vw,86px)', fontWeight:700, color:'white', letterSpacing:'-0.03em', lineHeight:1.05, marginBottom:24 }}>
            {t('heroH1a')}<br /><span style={{ color:'var(--aday-accent)' }}>{t('heroH1b')}</span>
          </h1>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'clamp(16px,2.5vw,19px)', color:'rgba(255,255,255,0.72)', lineHeight:1.7, maxWidth:520, margin:'0 auto 48px' }}>
            {t('heroDesc')}
          </p>
          <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
            <Link href="/urunler" className="btn btn-white btn-lg">{t('heroBtn1')}</Link>
            <Link href="/iletisim" className="btn btn-outline-white btn-lg">{t('heroBtn2')}</Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background:'var(--white)', padding:'64px 0', borderBottom:'1px solid var(--aday-line)' }}>
        <div className="container">
          <div className="grid-4">
            {[
              { text: t('statsCustomers'), label: t('statsCustomersLabel') },
              { value: 24, suffix: '+', label: t('statsExpLabel') },
              { value: 7, suffix: '/24', label: t('statsSupportLabel') },
              { value: 100, suffix: '%', label: t('statsSatisfactionLabel') },
            ].map((s, i) => (
              <div key={s.label} className={`reveal reveal-d${i+1}`} style={{ textAlign:'center', padding:'8px 16px' }}>
                <div style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(36px,5vw,52px)', fontWeight:700, color:'var(--aday-deep)', letterSpacing:'-0.03em', lineHeight:1 }}>
                  {'text' in s && s.text ? s.text : <CountUp end={(s as { value: number }).value} suffix={(s as { suffix: string }).suffix} />}
                </div>
                <div style={{ fontFamily:'var(--font-body)', fontSize:14, color:'var(--aday-mute)', marginTop:8, fontWeight:500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÜRÜNLER ── */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">{t('productsEyebrow')}</p>
            <h2 className="section-title reveal">{t('productsH2a')}<br />{t('productsH2b')}</h2>
            <p className="section-sub reveal reveal-d1">{t('productsSub')}</p>
          </div>
          <div className="grid-2">
            {[
              { titleKey: 'domesticTitle', descKey: 'domesticDesc', bg: 'var(--aday-pale)' },
              { titleKey: 'industrialTitle', descKey: 'industrialDesc', bg: '#EFF6F0' },
            ].map((p, i) => (
              <div key={p.titleKey} className={`card reveal reveal-d${i+1}`} style={{ padding:40, background:p.bg }}>
                <div style={{ width:52,height:52,borderRadius:10,background:'white',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--aday-mineral)',marginBottom:24,boxShadow:'var(--shadow-sm)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
                    <path d="M12 2C9 8 4 13 4 18A8 8 0 0 0 20 18C20 13 15 8 12 2Z"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily:'var(--font-heading)', fontSize:26, fontWeight:700, marginBottom:12 }}>{t(p.titleKey as 'domesticTitle' | 'industrialTitle')}</h3>
                <p style={{ color:'var(--aday-mute)', fontSize:15, lineHeight:1.7, marginBottom:28 }}>{t(p.descKey as 'domesticDesc' | 'industrialDesc')}</p>
                <Link href="/urunler" className="btn btn-primary" style={{ fontSize:14 }}>{t('viewProducts')}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HİZMETLER ── */}
      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="eyebrow">{t('servicesEyebrow')}</p>
            <h2 className="section-title reveal">{t('servicesH2a')}<br />{t('servicesH2b')}</h2>
            <p className="section-sub reveal reveal-d1">{t('servicesSub')}</p>
          </div>
          <div className="grid-4">
            {homeServices.map((s, i) => (
              <div key={s.title} className={`card reveal reveal-d${i+1}`} style={{ padding:32, textAlign:'center' }}>
                <div style={{ width:52,height:52,borderRadius:10,background:'var(--aday-pale)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--aday-mineral)',margin:'0 auto 20px' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d={SERVICE_ICONS[i]}/>
                  </svg>
                </div>
                <h3 style={{ fontFamily:'var(--font-heading)', fontSize:17, fontWeight:700, marginBottom:10 }}>{s.title}</h3>
                <p style={{ color:'var(--aday-mute)', fontSize:14, lineHeight:1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign:'center', marginTop:48 }}>
            <Link href="/hizmetler" className="btn btn-outline">{t('seeAllServices')}</Link>
          </div>
        </div>
      </section>

      {/* ── NEDEN BİZ ── */}
      <section className="section section--navy">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="eyebrow">{t('whyEyebrow')}</p>
            <h2 className="section-title reveal">{t('whyH2a')}<br />{t('whyH2b')}</h2>
            <p className="section-sub reveal reveal-d1">{t('whySub')}</p>
          </div>
          <div className="grid-3" style={{ gap:16 }}>
            {why.map((w, i) => (
              <div key={w.title} className={`reveal reveal-d${(i%3)+1}`}
                style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.10)', borderRadius:'var(--radius-lg)', padding:28 }}>
                <div style={{ width:44,height:44,borderRadius:8,background:'rgba(44,95,101,0.45)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--aday-mist)',marginBottom:16 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {WHY_ICONS[i].iconCircle && <circle cx="12" cy="12" r="9"/>}
                    <path d={WHY_ICONS[i].iconD}/>
                  </svg>
                </div>
                <h4 style={{ fontFamily:'var(--font-heading)', fontSize:15, fontWeight:700, marginBottom:8, color:'white' }}>{w.title}</h4>
                <p style={{ color:'rgba(255,255,255,0.62)', fontSize:13, lineHeight:1.7 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background:'linear-gradient(135deg,var(--aday-deep) 0%,var(--aday-mineral) 100%)', padding:'96px 24px', textAlign:'center' }}>
        <div style={{ maxWidth:620, margin:'0 auto' }}>
          <h2 className="reveal" style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(28px,4vw,44px)', fontWeight:700, color:'white', letterSpacing:'-0.02em', marginBottom:16 }}>
            {t('ctaH2a')}<br />{t('ctaH2b')}
          </h2>
          <p className="reveal reveal-d1" style={{ fontFamily:'var(--font-body)', color:'rgba(255,255,255,0.8)', fontSize:17, lineHeight:1.7, marginBottom:48 }}>
            {t('ctaDesc')}
          </p>
          <div className="reveal reveal-d2" style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
            <a href="tel:02324583940" className="btn btn-white btn-lg">0232 458 39 40</a>
            <Link href="/iletisim" className="btn btn-outline-white btn-lg">{t('ctaBtn2')}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
