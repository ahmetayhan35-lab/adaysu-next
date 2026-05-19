'use client'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const WA_NUMBER = '905554863624'

const MODELS = [
  { code: '35 İNL 105 P/L', stage: 5, pumped: true },
  { code: '35 İNL 105 P/S', stage: 5, pumped: false },
  { code: '35 İNL 106 P/L', stage: 6, pumped: true },
  { code: '35 İNL 106 P/S', stage: 6, pumped: false },
  { code: '35 İNL 107 P/L', stage: 7, pumped: true },
  { code: '35 İNL 107 P/S', stage: 7, pumped: false },
]

const WA_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

function VideoSection({
  src, badge, titleA, titleB, points, videoRight, dark,
}: {
  src: string; badge: string; titleA: string; titleB: string
  points: string[]; videoRight: boolean; dark?: boolean
}) {
  const fg       = dark ? 'white' : 'var(--aday-deep)'
  const fgMute   = dark ? 'rgba(255,255,255,0.72)' : 'var(--aday-mute)'
  const badgeBg  = dark ? 'rgba(44,95,101,0.55)' : 'var(--aday-pale)'
  const badgeClr = dark ? 'rgba(255,255,255,0.9)' : 'var(--aday-mineral)'
  const badgeBdr = dark ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(44,95,101,0.2)'

  const card = (
    <div className="sv-card" style={{
      flex: '0 0 42%', padding: '0 clamp(24px, 5vw, 64px)',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
    }}>
      <span style={{
        display: 'inline-flex', alignSelf: 'flex-start',
        background: badgeBg, color: badgeClr, border: badgeBdr,
        borderRadius: 4, fontSize: 11, fontWeight: 700,
        padding: '4px 12px', fontFamily: 'var(--font-body)',
        letterSpacing: '0.10em', textTransform: 'uppercase', marginBottom: 20,
      }}>
        {badge}
      </span>
      <h2 style={{
        fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px, 3vw, 38px)',
        fontWeight: 700, lineHeight: 1.2, color: fg, marginBottom: 32,
      }}>
        {titleA}<br />{titleB}
      </h2>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {points.map((p, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <span style={{
              width: 22, height: 22, borderRadius: '50%',
              background: 'var(--aday-mineral)', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1,
            }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" aria-hidden>
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span style={{ fontSize: 15, lineHeight: 1.6, color: fgMute, fontFamily: 'var(--font-body)' }}>
              {p}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )

  const videoEl = (
    <div className="sv-video" style={{ flex: '0 0 58%', overflow: 'hidden' }}>
      <video
        src={src} autoPlay muted loop playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </div>
  )

  return (
    <section style={{
      background: dark ? 'var(--aday-deep)' : 'var(--aday-paper)',
      height: '100vh', display: 'flex', overflow: 'hidden', alignItems: 'stretch',
    }}>
      {videoRight ? <>{card}{videoEl}</> : <>{videoEl}{card}</>}
    </section>
  )
}

export default function AdaySuPremiumPage() {
  useScrollReveal()
  const t = useTranslations('AdayPremium')
  const features = t.raw('features') as { title: string; desc: string }[]
  const scroll1Points = t.raw('scroll1Points') as string[]
  const scroll2Points = t.raw('scroll2Points') as string[]

  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Merhaba, Aday Su Premium hakkında bilgi almak istiyorum')}`
  const stageLabels: Record<number, string> = {
    5: t('stages5'),
    6: t('stages6'),
    7: t('stages7'),
  }

  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        background: 'var(--aday-deep)',
        color: 'white',
        paddingTop: 'calc(var(--header-h) + 80px)',
        paddingBottom: 100,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 90% 80% at 85% 50%, rgba(44,95,101,0.45) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ maxWidth: 620 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <span style={{
                background: 'var(--aday-mineral)', color: 'white',
                borderRadius: 4, fontSize: 11, fontWeight: 700,
                padding: '4px 12px', fontFamily: 'var(--font-body)',
                letterSpacing: '0.10em', textTransform: 'uppercase',
              }}>
                {t('badge')}
              </span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>
                {t('eyebrow')}
              </span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(38px, 6vw, 66px)',
              fontWeight: 700, lineHeight: 1.1,
              marginBottom: 28,
            }}>
              {t('h1')}
            </h1>
            <p style={{
              fontSize: 17, lineHeight: 1.75,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: 500, marginBottom: 40,
              fontFamily: 'var(--font-body)',
            }}>
              {t('sub')}
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: 14 }}>
                {t('waBtn')}
              </a>
              <Link href="/iletisim" style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '10px 24px', borderRadius: 'var(--radius)',
                border: '1.5px solid rgba(255,255,255,0.28)',
                color: 'rgba(255,255,255,0.85)',
                fontSize: 14, fontWeight: 600, fontFamily: 'var(--font-body)',
                textDecoration: 'none',
                transition: 'border-color var(--ease)',
              }}>
                {t('contactBtn')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCROLL VIDEO 1: Filtreler — video solda, kart sağda ── */}
      <VideoSection
        src="/videos/aday-premium-1.mp4"
        badge={t('scroll1Badge')}
        titleA={t('scroll1TitleA')}
        titleB={t('scroll1TitleB')}
        points={scroll1Points}
        videoRight={false}
        dark={false}
      />

      <div style={{ height: 12, background: 'var(--aday-line)' }} />

      {/* ── SCROLL VIDEO 2: Pompa/Tank — kart solda, video sağda ── */}
      <VideoSection
        src="/videos/aday-premium-2.mp4"
        badge={t('scroll2Badge')}
        titleA={t('scroll2TitleA')}
        titleB={t('scroll2TitleB')}
        points={scroll2Points}
        videoRight={true}
        dark={true}
      />

      {/* ── FEATURES ── */}
      <section className="section">
        <div className="container">
          <h2 className="reveal" style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(26px, 4vw, 38px)',
            fontWeight: 700, textAlign: 'center',
            marginBottom: 56,
          }}>
            {t('featuresTitle')}
          </h2>
          <div className="premium-features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {features.map((f, i) => (
              <div key={i} className="reveal card" style={{ padding: 28 }}>
                <div style={{
                  width: 44, height: 44,
                  background: 'var(--aday-pale)',
                  borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16,
                  border: '1px solid rgba(44,95,101,0.2)',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="var(--aday-mineral)" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 16, fontWeight: 700,
                  color: 'var(--aday-deep)', marginBottom: 8,
                }}>
                  {f.title}
                </h3>
                <p style={{
                  fontSize: 14, color: 'var(--aday-mute)',
                  lineHeight: 1.7, fontFamily: 'var(--font-body)',
                }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODELS ── */}
      <section className="section" style={{ background: 'var(--aday-cream)', borderTop: '1px solid var(--aday-line)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 className="reveal" style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(26px, 4vw, 38px)',
              fontWeight: 700, marginBottom: 12,
            }}>
              {t('modelsTitle')}
            </h2>
            <p className="reveal reveal-d1" style={{
              color: 'var(--aday-mute)', fontSize: 16,
              maxWidth: 560, margin: '0 auto',
              fontFamily: 'var(--font-body)', lineHeight: 1.7,
            }}>
              {t('modelsSub')}
            </p>
          </div>

          <div className="premium-models-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {([5, 6, 7] as const).map(stage => {
              const stageModels = MODELS.filter(m => m.stage === stage)
              const waMsg = encodeURIComponent(`Merhaba, Aday Su Premium ${stageLabels[stage]} model hakkında bilgi almak istiyorum`)
              return (
                <div key={stage} className="reveal card" style={{ padding: 0, overflow: 'hidden' }}>
                  <div style={{ padding: '20px 24px', background: 'var(--aday-deep)', color: 'white' }}>
                    <div style={{
                      fontSize: 10, fontWeight: 700, letterSpacing: '0.12em',
                      textTransform: 'uppercase', opacity: 0.45,
                      fontFamily: 'var(--font-body)', marginBottom: 6,
                    }}>
                      ADAY SU PREMIUM
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700 }}>
                      {stageLabels[stage]}
                    </h3>
                  </div>
                  <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {stageModels.map(m => (
                      <div key={m.code} style={{
                        padding: '12px 16px', borderRadius: 8,
                        border: '1.5px solid var(--aday-line)',
                        display: 'flex', alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'white',
                      }}>
                        <div>
                          <div style={{
                            fontSize: 13, fontWeight: 700,
                            fontFamily: 'var(--font-body)',
                            color: 'var(--aday-deep)',
                            letterSpacing: '0.04em',
                          }}>
                            {m.code}
                          </div>
                          <div style={{
                            fontSize: 12, color: 'var(--aday-mute)',
                            fontFamily: 'var(--font-body)', marginTop: 2,
                          }}>
                            {m.pumped ? t('pumped') : t('pumpless')}
                          </div>
                        </div>
                        <span style={{
                          background: m.pumped ? 'var(--aday-mineral)' : 'var(--aday-pale)',
                          color: m.pumped ? 'white' : 'var(--aday-mineral)',
                          borderRadius: 4, fontSize: 10, fontWeight: 700,
                          padding: '3px 8px', fontFamily: 'var(--font-body)',
                          letterSpacing: '0.06em',
                          border: m.pumped ? 'none' : '1px solid rgba(44,95,101,0.25)',
                        }}>
                          {m.pumped ? 'P/L' : 'P/S'}
                        </span>
                      </div>
                    ))}
                    <a
                      href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        marginTop: 6,
                        display: 'flex', alignItems: 'center',
                        justifyContent: 'center', gap: 7,
                        background: '#25D366', color: 'white',
                        padding: '10px 16px', borderRadius: 'var(--radius)',
                        fontSize: 13, fontWeight: 600,
                        fontFamily: 'var(--font-body)',
                        textDecoration: 'none',
                      }}
                    >
                      {WA_ICON}
                      {t('ctaWa')}
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: '80px 24px', textAlign: 'center',
        background: 'var(--aday-paper)',
        borderTop: '1px solid var(--aday-line)',
      }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 className="reveal" style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 32, fontWeight: 700, marginBottom: 16,
          }}>
            {t('ctaH2')}
          </h2>
          <p className="reveal reveal-d1" style={{
            color: 'var(--aday-mute)', fontSize: 16,
            lineHeight: 1.7, marginBottom: 32,
            fontFamily: 'var(--font-body)',
          }}>
            {t('ctaSub')}
          </p>
          <div className="reveal reveal-d2" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:02324583940" className="btn btn-primary">{t('ctaCall')}</a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#25D366', color: 'white',
                padding: '10px 24px', borderRadius: 'var(--radius)',
                fontSize: 14, fontWeight: 600,
                fontFamily: 'var(--font-body)',
                textDecoration: 'none',
              }}
            >
              {WA_ICON}
              {t('ctaWa')}
            </a>
          </div>
        </div>
      </section>

      <style>{`
        /* Scroll video — mobile stack */
        @media (max-width: 768px) {
          .sv-sticky { flex-direction: column !important; }
          .sv-video { flex: none !important; width: 100% !important; height: 48vw !important; order: -1; }
          .sv-card  { flex: none !important; padding: 28px 20px !important; justify-content: flex-start !important; overflow-y: auto; max-height: calc(100vh - 48vw); }
        }
        /* Features / models grids */
        @media (max-width: 900px) {
          .premium-models-grid   { grid-template-columns: 1fr !important; max-width: 420px; margin-left: auto; margin-right: auto; }
          .premium-features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .premium-features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
