'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import CountUp from '@/components/CountUp'
import { useTranslations } from 'next-intl'

export default function AboutPage() {
  useScrollReveal()
  const t = useTranslations('About')

  const certs = t.raw('certs') as string[]
  const values = t.raw('values') as { title: string; desc: string }[]
  const areas = t.raw('areas') as { title: string; area: string; desc: string }[]

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">{t('eyebrow')}</p>
          <h1>{t('h1a')}<br />{t('h1b')}</h1>
          <p style={{ marginTop:16 }}>{t('sub')}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-story">
            <div>
              <p className="eyebrow">{t('storyEyebrow')}</p>
              <h2 className="section-title reveal" style={{ marginBlock:'12px 32px' }}>
                {t('storyH2a')}<br />{t('storyH2b')}
              </h2>
              <p className="reveal reveal-d1" style={{ color:'var(--aday-mute)', fontSize:16, lineHeight:1.8, marginBottom:20 }}>{t('storyP1')}</p>
              <p className="reveal reveal-d2" style={{ color:'var(--aday-mute)', fontSize:16, lineHeight:1.8, marginBottom:20 }}>{t('storyP2')}</p>
              <p className="reveal reveal-d3" style={{ color:'var(--aday-mute)', fontSize:16, lineHeight:1.8, marginBottom:20 }}>{t('storyP3')}</p>
              <p className="reveal reveal-d4" style={{ color:'var(--aday-mute)', fontSize:16, lineHeight:1.8, marginBottom:32 }}>{t('storyP4')}</p>
              <Link href="/iletisim" className="btn btn-primary reveal reveal-d4">{t('storyBtn')}</Link>
            </div>

            <div className="reveal reveal-d1" style={{
              background:'var(--aday-pale)', borderRadius:'var(--radius-lg)',
              padding:40, border:'1px solid var(--aday-line)',
              display:'grid', gridTemplateColumns:'1fr 1fr', gap:24,
            }}>
              {[
                { val:24, suf:'+', label: t('statsExpLabel') },
                { text: t('statsCustomers'), label: t('statsCustomersLabel') },
                { val:10, suf:'+', label: t('statsMoldsLabel') },
                { val:7, suf:'/24', label: t('statsSupportLabel') },
              ].map(s => (
                <div key={s.label} style={{ textAlign:'center' }}>
                  <div style={{ fontFamily:'var(--font-heading)', fontSize:40, fontWeight:700, color:'var(--aday-deep)', lineHeight:1 }}>
                    {'text' in s && s.text ? s.text : <CountUp end={(s as { val: number }).val} suffix={(s as { suf: string }).suf} />}
                  </div>
                  <div style={{ fontSize:13, color:'var(--aday-mute)', marginTop:8, fontFamily:'var(--font-body)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background:'var(--aday-deep)', padding:'56px 0' }}>
        <div className="container">
          <p className="eyebrow" style={{ color:'rgba(255,255,255,0.55)', textAlign:'center', marginBottom:32 }}>{t('certsEyebrow')}</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:12, justifyContent:'center' }}>
            {certs.map(c => (
              <span key={c} style={{
                background:'rgba(255,255,255,0.08)', border:'1px solid rgba(122,157,161,0.35)',
                borderRadius:6, padding:'10px 20px', fontSize:14, fontWeight:600,
                fontFamily:'var(--font-body)', color:'var(--aday-mist)', letterSpacing:'0.02em',
              }}>
                ✓ {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="eyebrow">{t('valuesEyebrow')}</p>
            <h2 className="section-title reveal">{t('valuesH2a')}<br />{t('valuesH2b')}</h2>
          </div>
          <div className="grid-3">
            {values.map((v, i) => (
              <div key={v.title} className={`card reveal reveal-d${i+1}`} style={{ padding:36, textAlign:'center' }}>
                <div style={{ width:52,height:52,borderRadius:'50%',background:'var(--aday-deep)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 20px', fontFamily:'var(--font-heading)',fontSize:20,fontWeight:700,color:'var(--aday-cream)' }}>
                  {i+1}
                </div>
                <h3 style={{ fontFamily:'var(--font-heading)', fontSize:20, fontWeight:700, marginBottom:12 }}>{v.title}</h3>
                <p style={{ color:'var(--aday-mute)', fontSize:15, lineHeight:1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="eyebrow">{t('areasEyebrow')}</p>
            <h2 className="section-title reveal">{t('areasH2')}</h2>
          </div>
          <div className="grid-3">
            {areas.map((item, i) => (
              <div key={item.title} className={`card reveal reveal-d${i+1}`} style={{ padding:36 }}>
                <span style={{ display:'inline-block', background:'var(--aday-pale)', color:'var(--aday-mineral)', borderRadius:4, fontSize:11, fontWeight:700, padding:'4px 10px', fontFamily:'var(--font-body)', letterSpacing:'0.06em', textTransform:'uppercase', marginBottom:16 }}>
                  {item.area}
                </span>
                <h3 style={{ fontFamily:'var(--font-heading)', fontSize:20, fontWeight:700, marginBottom:10 }}>{item.title}</h3>
                <p style={{ color:'var(--aday-mute)', fontSize:15, lineHeight:1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy" style={{ textAlign:'center' }}>
        <div style={{ maxWidth:620, margin:'0 auto' }}>
          <p className="eyebrow" style={{ marginBottom:16 }}>{t('ctaEyebrow')}</p>
          <h2 className="reveal" style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(28px,4vw,40px)', fontWeight:700, color:'white', marginBottom:16 }}>
            {t('ctaH2a')}<br />{t('ctaH2b')}
          </h2>
          <p className="reveal reveal-d1 section-sub" style={{ margin:'0 auto 44px' }}>{t('ctaDesc')}</p>
          <div className="reveal reveal-d2" style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
            <a href="tel:02324583940" className="btn btn-white btn-lg">0232 458 39 40</a>
            <Link href="/iletisim" className="btn btn-outline-white btn-lg">{t('ctaMessage')}</Link>
          </div>
        </div>
      </section>

      <style>{`
        .about-story { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        @media (max-width: 768px) { .about-story { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </>
  )
}
