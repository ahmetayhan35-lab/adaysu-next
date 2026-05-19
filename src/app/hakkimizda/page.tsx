'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import CountUp from '@/components/CountUp'

const VALUES = [
  { title:'Kalite',         desc:'Cihazlarımızda yalnızca NSF ve FDA onaylı komponentler kullanıyoruz. CE belgeli ve ISO 9001 sertifikalı üretim standartları.' },
  { title:'Ar-Ge & Üretim', desc:'2015\'ten bu yana plastik enjeksiyon kalıplarıyla kendi dış gövdelerimizi üretiyoruz. Faydalı model/patent çalışmalarımız mevcut.' },
  { title:'Satış Sonrası',  desc:'Müşteri memnuniyetini yalnızca satışta değil, teknik destek ve servis hizmetlerinde de ön planda tutuyoruz.' },
]

const STATS2 = [
  { val:24,   suf:'+',   label:'Yıllık Deneyim' },
  { val:0, suf:'', text:'Binlerce', label:'Mutlu Müşteri' },
  { val:10,   suf:'+',   label:'Üretim Kalıbı' },
  { val:7,    suf:'/24', label:'Teknik Destek' },
]

const CERTS = ['NSF Onaylı', 'FDA Onaylı', 'CE Belgeli', 'ISO 9001', 'Faydalı Model Patenti']

export default function AboutPage() {
  useScrollReveal()
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">Hakkımızda</p>
          <h1>Sağlıklı Yaşam için<br />Sağlıklı Su</h1>
          <p style={{ marginTop:16 }}>2002&apos;den bu yana İzmir&apos;de evsel ve endüstriyel su arıtma</p>
        </div>
      </div>

      {/* Hikaye */}
      <section className="section">
        <div className="container">
          <div className="about-story">
            <div>
              <p className="eyebrow">Hikayemiz</p>
              <h2 className="section-title reveal" style={{ marginBlock:'12px 32px' }}>
                ADAY Su Arıtma<br />Nasıl Doğdu?
              </h2>
              <p className="reveal reveal-d1" style={{ color:'var(--aday-mute)', fontSize:16, lineHeight:1.8, marginBottom:20 }}>
                2002 yılında su arıtma sektörüne adım attığımızda, Türkiye&apos;de bu alanda faaliyet gösteren
                sayılı büyük firmalar vardı. Kurucumuzun sektördeki tecrübesi, yıllarca edinilen bilgi birikimi
                ve kalite anlayışıyla birlikte bugün ADAY Su Arıtma Sistemleri markasının temelleri atıldı.
              </p>
              <p className="reveal reveal-d2" style={{ color:'var(--aday-mute)', fontSize:16, lineHeight:1.8, marginBottom:20 }}>
                Kuruluş hikâyemiz, sektörün öncü firmalarından birinde Ege Bölge Müdürlüğü görevinde bulunan
                kurucumuzun, edindiği deneyimi kendi vizyonuyla birleştirme kararıyla başladı. İlk yıllarda
                hazır su arıtma cihazlarının satışını gerçekleştirirken, zaman içerisinde yalnızca satış yapan
                değil; kendi ürününü tasarlayan, geliştiren ve üreten bir marka olma hedefiyle yola çıktık.
              </p>
              <p className="reveal reveal-d3" style={{ color:'var(--aday-mute)', fontSize:16, lineHeight:1.8, marginBottom:20 }}>
                2015 yılında büyük bir yatırım yaparak plastik enjeksiyon kalıplarımızı oluşturduk ve kendi
                cihaz kasalarımızı üretmeye başladık. İç sistemlerinde yalnızca NSF ve FDA onaylı, kalite
                standartlarını karşılayan güvenilir komponentler kullanıyoruz. Böylece estetik, dayanıklılık
                ve yüksek performansı bir araya getiren güçlü bir marka ortaya çıktı.
              </p>
              <p className="reveal reveal-d4" style={{ color:'var(--aday-mute)', fontSize:16, lineHeight:1.8, marginBottom:32 }}>
                Markamızın ismi, sektöre güçlü bir &ldquo;aday&rdquo; olarak çıktığımız inancı ve hedefimizi
                temsil etmektedir. Bugün evsel su arıtma alanında ağırlıklı olarak İzmir&apos;de hizmet verirken,
                endüstriyel projelerde ve toptan satış operasyonlarında Türkiye&apos;nin birçok noktasına çözümler sunuyoruz.
              </p>
              <Link href="/iletisim" className="btn btn-primary reveal reveal-d4">Bizimle İletişime Geçin →</Link>
            </div>

            <div className="reveal reveal-d1" style={{
              background:'var(--aday-pale)', borderRadius:'var(--radius-lg)',
              padding:40, border:'1px solid var(--aday-line)',
              display:'grid', gridTemplateColumns:'1fr 1fr', gap:24,
            }}>
              {STATS2.map(s => (
                <div key={s.label} style={{ textAlign:'center' }}>
                  <div style={{ fontFamily:'var(--font-heading)', fontSize:40, fontWeight:700, color:'var(--aday-deep)', lineHeight:1 }}>
                    {'text' in s && s.text ? s.text : <CountUp end={s.val} suffix={s.suf} />}
                  </div>
                  <div style={{ fontSize:13, color:'var(--aday-mute)', marginTop:8, fontFamily:'var(--font-body)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sertifikalar */}
      <section style={{ background:'var(--aday-deep)', padding:'56px 0' }}>
        <div className="container">
          <p className="eyebrow" style={{ color:'rgba(255,255,255,0.55)', textAlign:'center', marginBottom:32 }}>Sertifika &amp; Belgeler</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:12, justifyContent:'center' }}>
            {CERTS.map(c => (
              <span key={c} style={{
                background:'rgba(255,255,255,0.08)', border:'1px solid rgba(122,157,161,0.35)',
                borderRadius:6, padding:'10px 20px', fontSize:14, fontWeight:600,
                fontFamily:'var(--font-body)', color:'var(--aday-mist)',
                letterSpacing:'0.02em',
              }}>
                ✓ {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Değerler */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="eyebrow">Değerlerimiz</p>
            <h2 className="section-title reveal">Her İşimizde Öne Çıkan<br />Temel Değerlerimiz</h2>
          </div>
          <div className="grid-3">
            {VALUES.map((v, i) => (
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

      {/* Hizmet Coğrafyası */}
      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="eyebrow">Hizmet Bölgesi</p>
            <h2 className="section-title reveal">İzmir&apos;den Türkiye&apos;ye</h2>
          </div>
          <div className="grid-3">
            {[
              { title:'Evsel Perakende',       area:'İzmir',         desc:'Ev tipi su arıtma sistemlerinde İzmir genelinde satış, kurulum ve teknik servis.' },
              { title:'Endüstriyel Projeler',  area:'Tüm Türkiye',   desc:'Fabrikalara, otellere ve büyük işletmelere proje büyüklüğüne göre tüm Türkiye\'ye hizmet.' },
              { title:'Toptan Satış',          area:'Tüm Türkiye',   desc:'Bayi ve toptancılara tüm Türkiye genelinde ürün tedariki.' },
            ].map((item, i) => (
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

      {/* CTA */}
      <section className="section section--navy" style={{ textAlign:'center' }}>
        <div style={{ maxWidth:620, margin:'0 auto' }}>
          <p className="eyebrow" style={{ marginBottom:16 }}>Taahhüdümüz</p>
          <h2 className="reveal" style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(28px,4vw,40px)', fontWeight:700, color:'white', marginBottom:16 }}>
            Su yaşamın temelidir.<br />Biz de bu bilinçle hareket ediyoruz.
          </h2>
          <p className="reveal reveal-d1 section-sub" style={{ margin:'0 auto 44px' }}>
            İnsanların daha sağlıklı, güvenilir ve kaliteli suya ulaşabilmesi için çalışıyoruz.
            Alanında deneyimli ekibimizle doğru projelendirme ve sürdürülebilir çözümler sunuyoruz.
          </p>
          <div className="reveal reveal-d2" style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
            <a href="tel:02324583940" className="btn btn-white btn-lg">0232 458 39 40</a>
            <Link href="/iletisim" className="btn btn-outline-white btn-lg">İletişim Formu →</Link>
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
