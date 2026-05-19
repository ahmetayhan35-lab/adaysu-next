'use client'
import Link from 'next/link'
import CountUp from '@/components/CountUp'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const STATS = [
  { value: 0, suffix: '', text: 'Binlerce', label: 'Mutlu Müşteri' },
  { value: 24,   suffix: '+',   label: 'Yıllık Deneyim' },
  { value: 7,    suffix: '/24', label: 'Teknik Destek' },
  { value: 100,  suffix: '%',   label: 'Müşteri Memnuniyeti' },
]

const WHY = [
  { title: '24 Yıllık Tecrübe',   desc: "2002'den bu yana binlerce müşteriye kesintisiz hizmet verdik.",     iconD: 'M12 7V12L15 15', iconCircle: true },
  { title: 'Sertifikalı Ürünler', desc: 'Yalnızca TSE ve CE belgeli, kanıtlanmış markalar kullanıyoruz.',    iconD: 'M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6Z' },
  { title: 'Hızlı Servis',        desc: 'İzmir genelinde aynı gün servis ve kurulum imkânı.',                iconD: 'M13 2L4 14H12L11 22L20 10H12Z' },
  { title: 'Tam Garanti',         desc: 'Tüm ürün ve işçiliğimize kapsamlı garanti sunuyoruz.',              iconD: 'M20 6L9 17L4 12' },
  { title: 'Rekabetçi Fiyat',     desc: 'En kaliteli ürünü en uygun fiyatla sunmayı taahhüt ediyoruz.',     iconD: 'M12 2C9 8 4 13 4 18A8 8 0 0 0 20 18C20 13 15 8 12 2Z' },
  { title: '7/24 Destek',         desc: 'Satış sonrasında da yanınızdayız. Her zaman ulaşabilirsiniz.',      iconD: 'M4 12A8 8 0 0 1 20 12M2 13H6V20H2ZM18 13H22V20H18Z' },
]

export default function HomePage() {
  useScrollReveal()

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
            İzmir&apos;de 24 Yıllık Güven — 2002&apos;den Bu Yana
          </div>

          <h1 style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(44px,8vw,86px)', fontWeight:700, color:'white', letterSpacing:'-0.03em', lineHeight:1.05, marginBottom:24 }}>
            Temiz Su,<br /><span style={{ color:'var(--aday-accent)' }}>Sağlıklı Yaşam</span>
          </h1>

          <p style={{ fontFamily:'var(--font-body)', fontSize:'clamp(16px,2.5vw,19px)', color:'rgba(255,255,255,0.72)', lineHeight:1.7, maxWidth:520, margin:'0 auto 48px' }}>
            24 yıllık deneyim ve binlerce mutlu müşteriyle İzmir&apos;in köklü su arıtma markası.
            Evsel ve endüstriyel çözümler, tam kapsamlı servis.
          </p>

          <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
            <Link href="/urunler" className="btn btn-white btn-lg">Ürünleri İncele</Link>
            <Link href="/iletisim" className="btn btn-outline-white btn-lg">Ücretsiz Keşif →</Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background:'var(--white)', padding:'64px 0', borderBottom:'1px solid var(--aday-line)' }}>
        <div className="container">
          <div className="grid-4">
            {STATS.map((s, i) => (
              <div key={s.label} className={`reveal reveal-d${i+1}`} style={{ textAlign:'center', padding:'8px 16px' }}>
                <div style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(36px,5vw,52px)', fontWeight:700, color:'var(--aday-deep)', letterSpacing:'-0.03em', lineHeight:1 }}>
                  {'text' in s && s.text ? s.text : <CountUp end={s.value} suffix={s.suffix} />}
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
            <p className="eyebrow">Ürünlerimiz</p>
            <h2 className="section-title reveal">Her İhtiyaca Uygun<br />Su Arıtma Çözümleri</h2>
            <p className="section-sub reveal reveal-d1">Evden fabrikalara kadar tüm ölçeklerde saf ve temiz su için doğru çözümü sunuyoruz.</p>
          </div>
          <div className="grid-2">
            {[
              { title:'Evsel Su Arıtma',    desc:'Ailenizin sağlığı için kompakt, sessiz ev tipi arıtma sistemleri. Mutfağınıza saf ve temiz su.', bg:'var(--aday-pale)' },
              { title:'Endüstriyel Arıtma', desc:'Fabrikalar, oteller ve büyük işletmeler için yüksek kapasiteli su arıtma ve yumuşatma çözümleri.', bg:'#EFF6F0' },
            ].map((p, i) => (
              <div key={p.title} className={`card reveal reveal-d${i+1}`} style={{ padding:40, background:p.bg }}>
                <div style={{ width:52,height:52,borderRadius:10,background:'white',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--aday-mineral)',marginBottom:24,boxShadow:'var(--shadow-sm)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
                    <path d="M12 2C9 8 4 13 4 18A8 8 0 0 0 20 18C20 13 15 8 12 2Z"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily:'var(--font-heading)', fontSize:26, fontWeight:700, marginBottom:12 }}>{p.title}</h3>
                <p style={{ color:'var(--aday-mute)', fontSize:15, lineHeight:1.7, marginBottom:28 }}>{p.desc}</p>
                <Link href="/urunler" className="btn btn-primary" style={{ fontSize:14 }}>Ürünleri Gör →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HİZMETLER ── */}
      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="eyebrow">Hizmetlerimiz</p>
            <h2 className="section-title reveal">Satın Aldıktan Sonra<br />da Yanınızdayız</h2>
            <p className="section-sub reveal reveal-d1">Kurulumdan bakıma, filtre değişiminden teknik servise tam kapsamlı destek.</p>
          </div>
          <div className="grid-4">
            {[
              { title:'Kurulum',         desc:'Uzman ekibimizle hızlı, güvenli ve garanti kapsamında kurulum.',        d:'M14.7 6.3A6 6 0 0 0 5 17L9 21L21 9L17 5Z' },
              { title:'Periyodik Bakım', desc:'Sisteminizin ömrünü uzatan düzenli bakım programları.',                  d:'M23 4V10H17M1 20V14H7M20.49 9A9 9 0 0 0 5.64 5.64L1 10M23 14L18.36 18.36A9 9 0 0 1 3.51 15' },
              { title:'Filtre Değişimi', desc:'Orijinal filtrelerle zamanında değişim, maksimum arıtma kalitesi.',     d:'M22 3H2L10 12.46V19L14 21V12.46Z' },
              { title:'Teknik Servis',   desc:'Arıza durumunda aynı gün müdahale ve 7/24 teknik destek.',              d:'M12 20H21M16.5 3.5A2.121 2.121 0 0 1 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z' },
            ].map((s, i) => (
              <div key={s.title} className={`card reveal reveal-d${i+1}`} style={{ padding:32, textAlign:'center' }}>
                <div style={{ width:52,height:52,borderRadius:10,background:'var(--aday-pale)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--aday-mineral)',margin:'0 auto 20px' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d={s.d}/>
                  </svg>
                </div>
                <h3 style={{ fontFamily:'var(--font-heading)', fontSize:17, fontWeight:700, marginBottom:10 }}>{s.title}</h3>
                <p style={{ color:'var(--aday-mute)', fontSize:14, lineHeight:1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign:'center', marginTop:48 }}>
            <Link href="/hizmetler" className="btn btn-outline">Tüm Hizmetleri Gör →</Link>
          </div>
        </div>
      </section>

      {/* ── NEDEN BİZ ── */}
      <section className="section section--navy">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="eyebrow">Neden Adaysu?</p>
            <h2 className="section-title reveal">İzmir&apos;in Güvenilir<br />Su Arıtma Markası</h2>
            <p className="section-sub reveal reveal-d1">Tüm süreçlerde kalite, dürüstlük ve müşteri memnuniyetini ön planda tutuyoruz.</p>
          </div>
          <div className="grid-3" style={{ gap:16 }}>
            {WHY.map((w, i) => (
              <div key={w.title} className={`reveal reveal-d${(i%3)+1}`}
                style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.10)', borderRadius:'var(--radius-lg)', padding:28 }}>
                <div style={{ width:44,height:44,borderRadius:8,background:'rgba(44,95,101,0.45)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--aday-mist)',marginBottom:16 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {w.iconCircle && <circle cx="12" cy="12" r="9"/>}
                    <path d={w.iconD}/>
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
            Temiz Suya Bir Adım<br />Uzakta Olun
          </h2>
          <p className="reveal reveal-d1" style={{ fontFamily:'var(--font-body)', color:'rgba(255,255,255,0.8)', fontSize:17, lineHeight:1.7, marginBottom:48 }}>
            Ücretsiz keşif için bizi arayın. Uzman ekibimiz ihtiyacınıza en uygun sistemi belirlesin.
          </p>
          <div className="reveal reveal-d2" style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
            <a href="tel:02324583940" className="btn btn-white btn-lg">0232 458 39 40</a>
            <Link href="/iletisim" className="btn btn-outline-white btn-lg">İletişim Formu →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
