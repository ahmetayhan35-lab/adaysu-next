'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const SERVICES = [
  {
    title: 'Kurulum',
    iconD: 'M14.7 6.3A6 6 0 0 0 5 17L9 21L21 9L17 5Z',
    desc: 'Deneyimli teknik ekibimiz, sisteminizi en uygun konuma, en kısa sürede ve güvenle kurar. Kurulum sonrası kapsamlı kullanım eğitimi de dahildir.',
    points: ['Ön keşif ve ölçüm', 'Profesyonel montaj', 'Kullanım eğitimi', 'Garanti belgesi teslimi'],
  },
  {
    title: 'Periyodik Bakım',
    iconD: 'M23 4V10H17M1 20V14H7M20.49 9A9 9 0 0 0 5.64 5.64L1 10M23 14L18.36 18.36A9 9 0 0 1 3.51 15',
    desc: 'Sisteminizin uzun ömürlü ve verimli çalışması için düzenli bakım şarttır. Bakım programlarımız, cihazınızın performansını korur ve beklenmedik arızaları önler.',
    points: ['Filtre kontrol ve değişimi', 'Sistem performans testi', 'UV ve membran kontrolü', 'Bakım raporu teslimi'],
  },
  {
    title: 'Filtre Değişimi',
    iconD: 'M22 3H2L10 12.46V19L14 21V12.46Z',
    desc: 'Orijinal ve uyumlu filtrelerle zamanında değişim, sisteminizin arıtma kalitesini korur. Kullanılan su kalitesine göre özel değişim programı oluşturulur.',
    points: ['Orijinal filtre malzemeleri', 'Hızlı değişim servisi', 'Su kalite testi', 'Sonraki değişim hatırlatması'],
  },
  {
    title: 'Teknik Servis',
    iconD: 'M12 20H21M16.5 3.5A2.121 2.121 0 0 1 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z',
    desc: 'Herhangi bir arıza durumunda aynı gün müdahale imkânı sunuyoruz. Telefon desteğinden yerinde teknik hizmete kadar kapsamlı servis ağımız her zaman yanınızda.',
    points: ['Telefon teknik desteği', 'Aynı gün servis imkânı', 'Yedek parça garantisi', '7/24 acil hat'],
  },
]

const STEPS = [
  { num:'01', title:'Ücretsiz Keşif', desc:'Uzmanımız evinize veya işyerinize gelerek su analizini yapar ve ihtiyacınızı belirler.' },
  { num:'02', title:'Teklif ve Onay',  desc:'İhtiyacınıza özel sistem önerisi ve fiyat teklifini onaylamanızla kurulum tarihi planlanır.' },
  { num:'03', title:'Kurulum',         desc:'Profesyonel ekibimiz sistemi kurarak tüm testleri gerçekleştirir ve sizi bilgilendirir.' },
  { num:'04', title:'Sürekli Destek',  desc:'Kurulum sonrası bakım hatırlatmaları ve 7/24 teknik destek hizmetiyle yanınızdayız.' },
]

export default function ServicesPage() {
  useScrollReveal()
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">Hizmetlerimiz</p>
          <h1>Kurulumdan Bakıma<br />Tam Kapsamlı Destek</h1>
          <p style={{ marginTop:16 }}>Satın aldıktan sonra da yanınızdayız — her adımda profesyonel hizmet</p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap:24 }}>
            {SERVICES.map((s, i) => (
              <div key={s.title} className={`card reveal reveal-d${(i%2)+1}`} style={{ padding:40 }}>
                <div style={{ width:52,height:52,borderRadius:10,background:'var(--aday-pale)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--aday-mineral)',marginBottom:24 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d={s.iconD}/>
                  </svg>
                </div>
                <h3 style={{ fontFamily:'var(--font-heading)', fontSize:22, fontWeight:700, marginBottom:12 }}>{s.title}</h3>
                <p style={{ color:'var(--aday-mute)', fontSize:15, lineHeight:1.7, marginBottom:24 }}>{s.desc}</p>
                <ul style={{ display:'flex', flexDirection:'column', gap:10 }}>
                  {s.points.map(pt => (
                    <li key={pt} style={{ display:'flex', alignItems:'center', gap:10, fontSize:14, color:'var(--aday-ink)', fontFamily:'var(--font-body)' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--aday-mineral)" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                        <path d="M20 6L9 17L4 12"/>
                      </svg>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="eyebrow">Nasıl Çalışıyoruz?</p>
            <h2 className="section-title reveal">4 Adımda Temiz Suya Kavuşun</h2>
          </div>
          <div className="grid-4">
            {STEPS.map((step, i) => (
              <div key={step.num} className={`reveal reveal-d${i+1}`} style={{ textAlign:'center', padding:'0 8px' }}>
                <div style={{ width:60,height:60,borderRadius:10,background:'var(--aday-deep)',color:'var(--aday-cream)', display:'flex',alignItems:'center',justifyContent:'center', fontFamily:'var(--font-heading)',fontSize:20,fontWeight:700, margin:'0 auto 20px' }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily:'var(--font-heading)', fontSize:18, fontWeight:700, marginBottom:10 }}>{step.title}</h3>
                <p style={{ color:'var(--aday-mute)', fontSize:14, lineHeight:1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--navy" style={{ textAlign:'center' }}>
        <div style={{ maxWidth:560, margin:'0 auto' }}>
          <p className="eyebrow" style={{ marginBottom:16 }}>İletişime Geçin</p>
          <h2 className="reveal" style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(28px,4vw,40px)', fontWeight:700, color:'white', marginBottom:16 }}>
            Hizmet Almak İster Misiniz?
          </h2>
          <p className="reveal reveal-d1" style={{ fontFamily:'var(--font-body)', color:'rgba(255,255,255,0.72)', fontSize:16, lineHeight:1.7, marginBottom:40 }}>
            Randevu almak ve detaylı bilgi için hemen iletişime geçin.
          </p>
          <div className="reveal reveal-d2" style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href="tel:02324583940" className="btn btn-white btn-lg">0232 458 39 40</a>
            <Link href="/iletisim" className="btn btn-outline-white btn-lg">Mesaj Gönder →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
