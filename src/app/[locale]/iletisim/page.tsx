'use client'
import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useTranslations } from 'next-intl'

type FormData = { name: string; phone: string; subject: string; message: string }

export default function ContactPage() {
  useScrollReveal()
  const t = useTranslations('Contact')
  const [form, setForm] = useState<FormData>({ name:'', phone:'', subject:'', message:'' })
  const [sent, setSent] = useState(false)

  const update = (k: keyof FormData, v: string) => setForm(p => ({ ...p, [k]:v }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      t('waFormMessage', { name: form.name, phone: form.phone, subject: form.subject, message: form.message })
    )
    window.open(`https://wa.me/905554863624?text=${msg}`, '_blank')
    setSent(true)
  }

  const INFO_ICONS = [
    'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
    'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 013 1.18 2 2 0 015 0h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L9.91 7.91a16 16 0 006.29 6.29l1.28-1.29a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z',
    'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z',
    'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6-10l6-3m0 13l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9',
  ]

  const INFO = [
    { label: t('addressLabel'), lines: [t('addressLine1'), t('addressLine2')], href: null },
    { label: t('phoneLabel'), lines: ['0232 458 39 40', '0555 486 36 24'], href: 'tel:02324583940' },
    { label: t('hoursLabel'), lines: [t('hoursLine1'), t('hoursLine2')], href: null },
    { label: t('areaLabel'), lines: [t('areaLine1'), t('areaLine2')], href: null },
  ]

  const subjectOptions = t.raw('subjectOptions') as string[]

  const inputStyle: React.CSSProperties = {
    width:'100%', border:'1.5px solid var(--aday-line)', borderRadius:'var(--radius)',
    padding:'11px 14px', fontSize:14, fontFamily:'var(--font-body)',
    outline:'none', transition:'border-color var(--ease)', boxSizing:'border-box',
    background:'var(--white)',
  }

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
          <div className="contact-grid">
            <div>
              <h2 className="section-title reveal" style={{ fontSize:28, marginBottom:12 }}>{t('infoH2')}</h2>
              <p className="reveal reveal-d1" style={{ color:'var(--aday-mute)', fontSize:15, lineHeight:1.7, marginBottom:32 }}>
                {t('infoPara')}
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
                {INFO.map((item, i) => (
                  <div key={item.label} className={`reveal reveal-d${i+1}`}
                    style={{ display:'flex', gap:14, alignItems:'flex-start', background:'var(--aday-cream)', borderRadius:'var(--radius)', padding:'16px 18px', border:'1px solid var(--aday-line)' }}>
                    <div style={{ width:38,height:38,borderRadius:8,background:'var(--aday-pale)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--aday-mineral)',flexShrink:0 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d={INFO_ICONS[i]}/>
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontWeight:700,fontSize:11,fontFamily:'var(--font-body)',marginBottom:4,color:'var(--aday-mute)',textTransform:'uppercase',letterSpacing:'0.08em' }}>{item.label}</div>
                      {item.lines.map((line, li) => (
                        <div key={line}>
                          {item.href && li === 0
                            ? <a href={item.href} style={{ color:'var(--aday-mineral)', fontSize:14, fontWeight:600 }}>{line}</a>
                            : <div style={{ color:'var(--aday-mute)', fontSize:14 }}>{line}</div>}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <a href="https://wa.me/905554863624" target="_blank" rel="noopener noreferrer"
                className="reveal reveal-d4"
                style={{ display:'flex',alignItems:'center',gap:12,marginTop:18, background:'#DCFCE7',border:'1px solid #86EFAC',borderRadius:'var(--radius)',padding:'15px 18px', color:'#15803D',fontWeight:700,fontSize:14,fontFamily:'var(--font-body)',transition:'background var(--ease)' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#BBF7D0')}
                onMouseLeave={e => (e.currentTarget.style.background = '#DCFCE7')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#15803D" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                {t('whatsapp')}
              </a>
            </div>

            <div className="reveal reveal-d1">
              {sent ? (
                <div style={{ background:'#F0FDF4',border:'1px solid #86EFAC',borderRadius:'var(--radius-lg)',padding:56,textAlign:'center' }}>
                  <div style={{ width:64,height:64,borderRadius:'50%',background:'#16A34A',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 20px' }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                      <path d="M20 6L9 17L4 12"/>
                    </svg>
                  </div>
                  <h3 style={{ fontFamily:'var(--font-heading)', fontSize:22, fontWeight:700, marginBottom:12 }}>{t('successTitle')}</h3>
                  <p style={{ color:'var(--aday-mute)', fontSize:15, lineHeight:1.6 }}>{t('successDesc')}</p>
                  <button onClick={() => setSent(false)}
                    style={{ marginTop:28, background:'#16A34A', color:'white', border:'none', borderRadius:'var(--radius)', padding:'12px 28px', fontSize:14, fontWeight:600, cursor:'pointer', fontFamily:'var(--font-body)' }}>
                    {t('successBtn')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}
                  style={{ background:'var(--white)', border:'1px solid var(--aday-line)', borderRadius:'var(--radius-lg)', padding:40, boxShadow:'var(--shadow)' }}>
                  <h3 style={{ fontFamily:'var(--font-heading)', fontSize:22, fontWeight:700, marginBottom:28 }}>{t('formH3')}</h3>

                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:16 }}>
                    {([
                      ['name', t('nameLabel'), t('namePlaceholder'), true] as const,
                      ['phone', t('phoneFormLabel'), t('phonePlaceholder'), true] as const,
                    ]).map(([k, label, ph, req]) => (
                      <div key={k}>
                        <label style={{ display:'block', fontSize:11, fontWeight:600, marginBottom:6, color:'var(--aday-mute)', fontFamily:'var(--font-body)', textTransform:'uppercase', letterSpacing:'0.08em' }}>
                          {label} {req && '*'}
                        </label>
                        <input required={req} value={form[k]} onChange={e => update(k, e.target.value)}
                          placeholder={ph} style={inputStyle}
                          onFocus={e => (e.target.style.borderColor = 'var(--aday-mineral)')}
                          onBlur={e => (e.target.style.borderColor = 'var(--aday-line)')} />
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom:16 }}>
                    <label style={{ display:'block', fontSize:11, fontWeight:600, marginBottom:6, color:'var(--aday-mute)', fontFamily:'var(--font-body)', textTransform:'uppercase', letterSpacing:'0.08em' }}>{t('subjectFormLabel')}</label>
                    <select value={form.subject} onChange={e => update('subject', e.target.value)}
                      style={{ ...inputStyle, cursor:'pointer' }}>
                      <option value="">{t('subjectPlaceholder')}</option>
                      {subjectOptions.map(opt => <option key={opt}>{opt}</option>)}
                    </select>
                  </div>

                  <div style={{ marginBottom:28 }}>
                    <label style={{ display:'block', fontSize:11, fontWeight:600, marginBottom:6, color:'var(--aday-mute)', fontFamily:'var(--font-body)', textTransform:'uppercase', letterSpacing:'0.08em' }}>{t('messageFormLabel')} *</label>
                    <textarea required value={form.message} onChange={e => update('message', e.target.value)} rows={5}
                      placeholder={t('messagePlaceholder')}
                      style={{ ...inputStyle, resize:'vertical' }}
                      onFocus={e => (e.target.style.borderColor = 'var(--aday-mineral)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--aday-line)')} />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width:'100%', justifyContent:'center', fontSize:15, padding:'14px' }}>
                    {t('submitBtn')}
                  </button>
                  <p style={{ textAlign:'center', fontSize:12, color:'var(--aday-mute)', marginTop:12, fontFamily:'var(--font-body)' }}>
                    {t('submitNote')}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <div style={{ height:400, overflow:'hidden' }}>
        <iframe
          width="100%" height="400"
          style={{ border:0, display:'block' }}
          src="https://maps.google.com/maps?width=100%25&height=400&hl=tr&q=Faz%C4%B1l+Pa%C5%9Fa+Caddesi+4+Alt%C4%B1nda%C4%9F+%C4%B0zmir&t=&z=15&ie=UTF8&iwloc=B&output=embed"
          allowFullScreen loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Adaysu Konum"
        />
      </div>

      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr 1.6fr; gap: 64px; align-items: start; }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </>
  )
}
