import { useState, useEffect, createContext, useContext } from 'react'

// ── Language ───────────────────────────────────────────────────────────────

type Lang = 'es' | 'en' | 'pt'

const LANGS: { code: Lang; label: string }[] = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'pt', label: 'PT' },
]

const LangContext = createContext<{
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}>({ lang: 'es', setLang: () => {}, t: (k) => k })

function useLang() {
  return useContext(LangContext)
}

const translations: Record<Lang, Record<string, string>> = {
  es: {
    'nav.work': 'Trabajos',
    'nav.process': 'Proceso',
    'nav.contact': 'Contacto',
    'nav.cv': 'CV Técnico ↗',
    'hero.badge': 'Desarrollador Full Stack',
    'hero.title.start': 'Diseño y creo sitios',
    'hero.title.mid': 'modernos',
    'hero.title.end': 'para hacer crecer tu negocio.',
    'hero.sub': 'Soluciones digitales rápidas, atractivas y adaptadas a celulares para convertir visitantes en clientes.',
    'hero.cta.work': 'Ver Trabajos',
    'hero.cta.cv': 'Perfil Técnico / CV ↗',
    'hero.scroll': 'Scroll',
    'proj.label': 'Proyectos',
    'proj.title1': 'Trabajos reales,',
    'proj.title2': 'resultados concretos.',
    'proj.link': 'Ver proyecto en vivo',
    'process.label': 'Proceso',
    'process.title': 'Tres pasos simples.',
    'process.01.title': 'Propuesta & Diseño',
    'process.01.desc': 'Definimos la idea y la estructura visual antes de empezar. Sin sorpresas.',
    'process.02.title': 'Desarrollo & Pruebas',
    'process.02.desc': 'Creamos una plataforma rápida, segura y optimizada para celulares.',
    'process.03.title': 'Lanzamiento',
    'process.03.desc': 'Tu sitio publicado y listo para recibir clientes desde el primer día.',
    'contact.label': 'Contacto',
    'contact.title': '¿Tenés una idea que querés llevar al siguiente nivel?',
    'contact.sub': 'Hablemos. Respondo a mis mensajes en menos de 24 horas.',
    'contact.wa': 'Enviar WhatsApp',
    'contact.waMsg': 'Hola Alan, me gustaría hablar sobre un proyecto web.',
    'contact.rights': 'Todos los derechos reservados.',
    'carousel.fullscreen': 'Pantalla completa',
    'project.sanjorge.tag': 'Servicio Técnico Web',
    'project.sanjorge.desc': 'Diseño web orientado a mostrar servicios con claridad y facilitar el contacto directo de nuevos clientes.',
    'project.codornices.tag': 'Landing de Ventas',
    'project.codornices.desc': 'Catálogo digital limpio e intuitivo para conectar el negocio directamente con compradores.',
    'project.animelandia.tag': 'Entretenimiento Digital',
    'project.animelandia.desc': 'Interfaz moderna de alta velocidad para exploración y filtrado dinámico de contenido visual.',
    'project.turnix.tag': 'SaaS · Gestión de Turnos',
    'project.turnix.desc': 'Plataforma para automatizar la agenda de tu negocio y recibir reservas las 24 horas.',
    'project.maisbella.tag': 'Landing para Óptica',
    'project.maisbella.desc': 'Página de contacto clara y elegante para una óptica, con acceso directo a WhatsApp e Instagram.',
  },
  en: {
    'nav.work': 'Work',
    'nav.process': 'Process',
    'nav.contact': 'Contact',
    'nav.cv': 'Technical CV ↗',
    'hero.badge': 'Full Stack Developer',
    'hero.title.start': 'I design and build',
    'hero.title.mid': 'modern',
    'hero.title.end': 'websites to grow your business.',
    'hero.sub': 'Fast, attractive, mobile-friendly digital solutions to turn visitors into customers.',
    'hero.cta.work': 'View Work',
    'hero.cta.cv': 'Technical Profile / CV ↗',
    'hero.scroll': 'Scroll',
    'proj.label': 'Projects',
    'proj.title1': 'Real work,',
    'proj.title2': 'real results.',
    'proj.link': 'View live project',
    'process.label': 'Process',
    'process.title': 'Three simple steps.',
    'process.01.title': 'Proposal & Design',
    'process.01.desc': 'We define the idea and visual structure before starting. No surprises.',
    'process.02.title': 'Development & Testing',
    'process.02.desc': 'We build a fast, secure platform optimized for mobile.',
    'process.03.title': 'Launch',
    'process.03.desc': 'Your site published and ready to welcome clients from day one.',
    'contact.label': 'Contact',
    'contact.title': 'Have an idea you want to take to the next level?',
    'contact.sub': "Let's talk. I reply to my messages in less than 24 hours.",
    'contact.wa': 'Send WhatsApp',
    'contact.waMsg': "Hi Alan, I'd like to talk about a web project.",
    'contact.rights': 'All rights reserved.',
    'carousel.fullscreen': 'Fullscreen',
    'project.sanjorge.tag': 'Web Technical Service',
    'project.sanjorge.desc': 'Web design focused on presenting services clearly and making it easy for new clients to get in touch.',
    'project.codornices.tag': 'Sales Landing',
    'project.codornices.desc': 'Clean, intuitive digital catalog to connect the business directly with buyers.',
    'project.animelandia.tag': 'Digital Entertainment',
    'project.animelandia.desc': 'Modern, high-speed interface for dynamic exploration and filtering of visual content.',
    'project.turnix.tag': 'SaaS · Booking Management',
    'project.turnix.desc': 'Platform to automate your business schedule and receive bookings 24/7.',
    'project.maisbella.tag': 'Optical Store Landing',
    'project.maisbella.desc': 'Clean, elegant contact page for an optical store with direct access to WhatsApp and Instagram.',
  },
  pt: {
    'nav.work': 'Trabalhos',
    'nav.process': 'Processo',
    'nav.contact': 'Contato',
    'nav.cv': 'CV Técnico ↗',
    'hero.badge': 'Desenvolvedor Full Stack',
    'hero.title.start': 'Desenho e crio sites',
    'hero.title.mid': 'modernos',
    'hero.title.end': 'para fazer seu negócio crescer.',
    'hero.sub': 'Soluções digitais rápidas, atrativas e adaptadas para celulares para transformar visitantes em clientes.',
    'hero.cta.work': 'Ver Trabalhos',
    'hero.cta.cv': 'Perfil Técnico / CV ↗',
    'hero.scroll': 'Rolar',
    'proj.label': 'Projetos',
    'proj.title1': 'Trabalhos reais,',
    'proj.title2': 'resultados concretos.',
    'proj.link': 'Ver projeto ao vivo',
    'process.label': 'Processo',
    'process.title': 'Três passos simples.',
    'process.01.title': 'Proposta & Design',
    'process.01.desc': 'Definimos a ideia e a estrutura visual antes de começar. Sem surpresas.',
    'process.02.title': 'Desenvolvimento & Testes',
    'process.02.desc': 'Criamos uma plataforma rápida, segura e otimizada para celulares.',
    'process.03.title': 'Lançamento',
    'process.03.desc': 'Seu site publicado e pronto para receber clientes desde o primeiro dia.',
    'contact.label': 'Contato',
    'contact.title': 'Tem uma ideia que quer levar para o próximo nível?',
    'contact.sub': 'Vamos conversar. Respondo às minhas mensagens em menos de 24 horas.',
    'contact.wa': 'Enviar WhatsApp',
    'contact.waMsg': 'Olá Alan, eu gostaria de falar sobre um projeto web.',
    'contact.rights': 'Todos os direitos reservados.',
    'carousel.fullscreen': 'Tela cheia',
    'project.sanjorge.tag': 'Serviço Técnico Web',
    'project.sanjorge.desc': 'Design web focado em mostrar serviços com clareza e facilitar o contato direto de novos clientes.',
    'project.codornices.tag': 'Landing de Vendas',
    'project.codornices.desc': 'Catálogo digital limpo e intuitivo para conectar o negócio diretamente com compradores.',
    'project.animelandia.tag': 'Entretenimento Digital',
    'project.animelandia.desc': 'Interface moderna de alta velocidade para exploração e filtragem dinâmica de conteúdo visual.',
    'project.turnix.tag': 'SaaS · Gestão de Turnos',
    'project.turnix.desc': 'Plataforma para automatizar a agenda do seu negócio e receber reservas 24 horas por dia.',
    'project.maisbella.tag': 'Landing para Ótica',
    'project.maisbella.desc': 'Página de contato clara e elegante para uma ótica, com acesso direto ao WhatsApp e Instagram.',
  },
}

const DISPLAY = "'Plus Jakarta Sans', sans-serif"

interface Project {
  id: string
  name: string
  link: string
  folder: string
  base: string
  imageCount: number
  hasBase: boolean
  accent: string
  contain?: boolean
}

function buildImages(folder: string, base: string, count: number, hasBase: boolean): string[] {
  const imgs: string[] = []
  if (hasBase) imgs.push(`/Galeria/${folder}/${base}.png`)
  for (let i = 1; i <= count; i++) {
    imgs.push(`/Galeria/${folder}/${base}-${i}.png`)
  }
  return imgs.map((p) => p.split('/').map(encodeURIComponent).join('/'))
}

const PROJECTS: Project[] = [
  {
    id: 'sanjorge',
    name: 'San Jorge Informática',
    link: 'https://sanjorgeinformatica.netlify.app/',
    folder: 'San Jorge Informatica',
    base: 'sanjorgeinformatica',
    imageCount: 7,
    hasBase: true,
    accent: '#3b82f6',
  },
  {
    id: 'codornices',
    name: 'Hogar de Codornices',
    link: 'https://hogar-de-codornices.github.io/',
    folder: 'Hogar de Codornices',
    base: 'hogar-de-codornices',
    imageCount: 4,
    hasBase: false,
    accent: '#f59e0b',
  },
  {
    id: 'animelandia',
    name: 'Animelandia',
    link: 'https://animelandia-oficial.netlify.app/',
    folder: 'Animelandia',
    base: 'animelandia',
    imageCount: 6,
    hasBase: true,
    accent: '#ec4899',
  },
  {
    id: 'turnix',
    name: 'Turnix',
    link: 'https://turnix-oficial.netlify.app/',
    folder: 'Turnix',
    base: 'turnix',
    imageCount: 8,
    hasBase: true,
    accent: '#10b981',
  },
  {
    id: 'maisbella',
    name: 'Mais Bella Ótica Porto Alegre',
    link: 'https://maisbellaoticaportoalegre.netlify.app/',
    folder: 'Mais Bella Otica Porto Alegre',
    base: 'maisbellaoticaportoalegre',
    imageCount: 0,
    hasBase: true,
    accent: '#e13439',
    contain: true,
  },
]

const STEPS = ['01', '02', '03']

function waLink(msg: string): string {
  return `https://wa.me/5491123607879?text=${encodeURIComponent(msg)}`
}

// ── Carousel ───────────────────────────────────────────────────────────────

function Carousel({
  images,
  accent,
  contain,
}: {
  images: string[]
  accent: string
  contain?: boolean
}) {
  const [current, setCurrent] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)
  const total = images.length

  const prev = (e?: React.MouseEvent) => {
    e?.preventDefault()
    setCurrent((c) => (c - 1 + total) % total)
  }
  const next = (e?: React.MouseEvent) => {
    e?.preventDefault()
    setCurrent((c) => (c + 1) % total)
  }

  useEffect(() => {
    if (!fullscreen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFullscreen(false)
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [fullscreen])

  const dots = total > 1 && (
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={(e) => {
            e.preventDefault()
            setCurrent(i)
          }}
          className="rounded-full transition-all"
          style={{
            width: i === current ? '18px' : '6px',
            height: '6px',
            background: i === current ? accent : 'rgba(255,255,255,0.25)',
          }}
        />
      ))}
    </div>
  )

  const arrows = total > 1 && (
    <>
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-black/70"
        style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}
      >
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-black/70"
        style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}
      >
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </>
  )

  const src = images[current]

  return (
    <>
      <div className="relative w-full aspect-video bg-zinc-900 overflow-hidden rounded-t-xl select-none">
        {src ? (
          <img
            key={current}
            src={src}
            alt=""
            className={`w-full h-full ${contain ? 'object-contain' : 'object-cover'} cursor-zoom-in`}
            style={{ transition: 'opacity 0.2s' }}
            onClick={() => setFullscreen(true)}
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-3 cursor-zoom-in"
            onClick={() => setFullscreen(true)}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: `${accent}15`, border: `1px solid ${accent}30` }}
            >
              <svg
                className="w-5 h-5"
                style={{ color: accent }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-zinc-600 text-xs font-mono">{images[current]}</p>
          </div>
        )}

        {dots}
        {arrows}

        <button
          onClick={() => setFullscreen(true)}
          className="absolute top-3 right-3 w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-black/70"
          title="Pantalla completa"
          style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,0,0,0.75)'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,0,0,0.55)'
          }}
        >
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8V6a2 2 0 012-2h2M16 4h2a2 2 0 012 2v2M20 16v2a2 2 0 01-2 2h-2M8 20H6a2 2 0 01-2-2v-2"
            />
          </svg>
        </button>
      </div>

      {fullscreen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(4px)' }}
          onClick={() => setFullscreen(false)}
        >
          <div className="relative max-w-6xl w-full px-4 md:px-10" onClick={(e) => e.stopPropagation()}>
            <img
              key={current}
              src={src}
              alt=""
              className="w-full max-h-[85vh] object-contain rounded-lg select-none"
              style={{ boxShadow: '0 0 60px rgba(0,0,0,0.8)' }}
            />

            <button
              onClick={() => setFullscreen(false)}
              className="absolute top-0 right-0 -mt-2 md:-mt-2 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{ background: 'rgba(255,255,255,0.1)' }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.25)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.1)'
              }}
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mt-3 flex items-center justify-center gap-6">
              {total > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
                    style={{ background: 'rgba(255,255,255,0.1)' }}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <span className="text-white/80 text-sm font-mono">
                    {current + 1} / {total}
                  </span>
                  <button
                    onClick={next}
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
                    style={{ background: 'rgba(255,255,255,0.1)' }}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// ── ProjectCard ────────────────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useLang()
  const images = buildImages(project.folder, project.base, project.imageCount, project.hasBase)

  return (
    <div
      className="flex flex-col rounded-xl overflow-hidden transition-all duration-300"
      style={{
        background: '#111113',
        border: '1px solid #27272a',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.borderColor = '#3f3f46'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.borderColor = '#27272a'
      }}
    >
      <Carousel images={images} accent={project.accent} contain={project.contain} />

      <div className="flex flex-col flex-1 p-6 gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <span
              className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2"
              style={{
                color: project.accent,
                background: `${project.accent}12`,
                border: `1px solid ${project.accent}30`,
              }}
            >
              {t(`project.${project.id}.tag`)}
            </span>
            <h3
              className="text-xl font-bold text-white leading-tight"
              style={{ fontFamily: DISPLAY }}
            >
              {project.name}
            </h3>
          </div>
          <span className="text-xs text-zinc-700 font-mono mt-1 shrink-0">
            0{index + 1}
          </span>
        </div>

        <p className="text-sm text-zinc-400 leading-relaxed flex-1">
          {t(`project.${project.id}.desc`)}
        </p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold group/link w-fit"
          style={{ color: project.accent }}
        >
          {t('proj.link')}
          <svg
            className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

// ── Navbar ─────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang, t } = useLang()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              background: 'rgba(9,9,11,0.85)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid #27272a',
            }
          : {}
      }
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative">
        <a
          href="#"
          className="font-bold text-white tracking-tight"
          style={{ fontFamily: DISPLAY }}
        >
          Alan Foa Rostirolla
        </a>

        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {[
            ['#projects', t('nav.work')],
            ['#process', t('nav.process')],
            ['#contact', t('nav.contact')],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            className="hidden sm:flex items-center rounded-lg border border-zinc-700 overflow-hidden"
            style={{ background: 'rgba(9,9,11,0.5)' }}
          >
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className="px-2.5 py-1.5 text-xs font-semibold transition-colors"
                style={
                  lang === l.code
                    ? { background: 'rgba(139,92,246,0.2)', color: '#c4b5fd' }
                    : { color: '#a1a1aa', background: 'transparent' }
                }
                onMouseEnter={(e) => {
                  if (lang !== l.code)
                    ;(e.currentTarget as HTMLButtonElement).style.color = '#fff'
                }}
                onMouseLeave={(e) => {
                  if (lang !== l.code)
                    ;(e.currentTarget as HTMLButtonElement).style.color = '#a1a1aa'
                }}
              >
                {l.label}
              </button>
            ))}
          </div>
          <a
            href="https://cv-alanfoarostirolla.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex text-sm font-semibold px-4 py-2 rounded-lg border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white transition-all"
          >
            {t('nav.cv')}
          </a>
          <button
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className="block w-5 h-px bg-zinc-400 transition-all"
              style={
                menuOpen
                  ? { transform: 'translateY(3px) rotate(45deg)', background: '#fff' }
                  : {}
              }
            />
            <span
              className="block w-5 h-px bg-zinc-400 transition-all"
              style={menuOpen ? { opacity: 0 } : {}}
            />
            <span
              className="block w-5 h-px bg-zinc-400 transition-all"
              style={
                menuOpen
                  ? { transform: 'translateY(-3px) rotate(-45deg)', background: '#fff' }
                  : {}
              }
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{
            background: 'rgba(9,9,11,0.95)',
            backdropFilter: 'blur(16px)',
            borderTop: '1px solid #27272a',
          }}
        >
          {[
            ['#projects', t('nav.work')],
            ['#process', t('nav.process')],
            ['#contact', t('nav.contact')],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-base text-zinc-300 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="flex items-center gap-2 pt-2">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className="px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors"
                style={
                  lang === l.code
                    ? { background: 'rgba(139,92,246,0.2)', color: '#c4b5fd' }
                    : { color: '#a1a1aa', background: 'transparent' }
                }
              >
                {l.label}
              </button>
            ))}
          </div>
          <a
            href="https://cv-alanfoarostirolla.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold text-violet-400"
          >
            {t('nav.cv')}
          </a>
        </div>
      )}
    </header>
  )
}

// ── Hero ───────────────────────────────────────────────────────────────────

function Hero() {
  const { t } = useLang()
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-16">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(139,92,246,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(82,82,91,0.5) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage:
            'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-8"
          style={{
            border: '1px solid rgba(139,92,246,0.35)',
            background: 'rgba(139,92,246,0.08)',
            color: '#c4b5fd',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: '#a78bfa',
              boxShadow: '0 0 6px #a78bfa',
            }}
          />
          {t('hero.badge')}
        </div>

        {/* H1 */}
        <h1
          className="text-5xl md:text-[68px] font-extrabold text-white leading-[1.08] tracking-tight mb-6"
          style={{ fontFamily: DISPLAY }}
        >
          {t('hero.title.start')}{' '}
          <span
            style={{
              backgroundImage: 'linear-gradient(120deg, #8b5cf6 0%, #c4b5fd 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t('hero.title.mid')}
          </span>{' '}
          {t('hero.title.end')}
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
          {t('hero.sub')}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #8b5cf6)',
              boxShadow: '0 0 30px rgba(139,92,246,0.3)',
            }}
          >
            {t('hero.cta.work')}
          </a>
          <a
            href="https://cv-alanfoarostirolla.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-xl font-semibold text-zinc-300 text-sm border border-zinc-700 hover:border-zinc-500 hover:text-white transition-all active:scale-95"
          >
            {t('hero.cta.cv')}
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex flex-col items-center gap-2 text-zinc-600">
          <span className="text-xs tracking-widest uppercase">{t('hero.scroll')}</span>
          <div className="w-px h-10 bg-gradient-to-b from-zinc-600 to-transparent" />
        </div>
      </div>
    </section>
  )
}

// ── Projects ───────────────────────────────────────────────────────────────

function Projects() {
  const { t } = useLang()
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="text-xs font-bold tracking-[0.2em] text-violet-400 uppercase mb-3 block">
            {t('proj.label')}
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
            style={{ fontFamily: DISPLAY }}
          >
            {t('proj.title1')}
            <br />
            {t('proj.title2')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Process ────────────────────────────────────────────────────────────────

function Process() {
  const { t } = useLang()
  return (
    <section
      id="process"
      className="py-28 px-6"
      style={{ borderTop: '1px solid #1f1f23' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="text-xs font-bold tracking-[0.2em] text-violet-400 uppercase mb-3 block">
            {t('process.label')}
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
            style={{ fontFamily: DISPLAY }}
          >
            {t('process.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <div key={i} className="flex flex-col gap-5">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-sm font-bold"
                style={{
                  fontFamily: DISPLAY,
                  background: 'rgba(139,92,246,0.08)',
                  border: '1px solid rgba(139,92,246,0.2)',
                  color: '#a78bfa',
                }}
              >
                {step}
              </div>
              <div>
                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: DISPLAY }}
                >
                  {t(`process.${step}.title`)}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{t(`process.${step}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Footer/Contact ─────────────────────────────────────────────────────────

function Footer() {
  const { t } = useLang()
  return (
    <footer
      id="contact"
      className="py-28 px-6"
      style={{ borderTop: '1px solid #1f1f23' }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-xs font-bold tracking-[0.2em] text-violet-400 uppercase mb-4 block">
          {t('contact.label')}
        </span>
        <h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight"
          style={{ fontFamily: DISPLAY }}
        >
          {t('contact.title')}
        </h2>
        <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
          {t('contact.sub')}
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <a
            href={waLink(t('contact.waMsg'))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #15803d, #22c55e)',
              boxShadow: '0 0 24px rgba(34,197,94,0.25)',
            }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t('contact.wa')}
          </a>

          <a
            href="https://instagram.com/alan_foa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-zinc-300 text-sm border border-zinc-700 hover:border-zinc-500 hover:text-white transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @alan_foa
          </a>
        </div>

        {/* Social links */}
        <div
          className="flex items-center justify-center gap-8 py-8"
          style={{ borderTop: '1px solid #1f1f23' }}
        >
          {[
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alan-foa-rostirolla-04b97a258/' },
            { label: 'GitHub', href: 'https://github.com/alanfoa' },
            { label: 'CV Completo', href: 'https://cv-alanfoarostirolla.netlify.app/' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <p className="text-xs text-zinc-700 mt-4">
          © {new Date().getFullYear()} Alan Foa Rostirolla · {t('contact.rights')}
        </p>
      </div>
    </footer>
  )
}

// ── App ────────────────────────────────────────────────────────────────────

function detectLang(): Lang {
  if (typeof navigator === 'undefined') return 'es'
  const lang = (navigator.language || '').toLowerCase()
  if (lang.startsWith('pt')) return 'pt'
  if (lang.startsWith('en')) return 'en'
  return 'es'
}

function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectLang)

  const value = {
    lang,
    setLang,
    t: (key: string) => translations[lang][key] ?? key,
  }

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen" style={{ background: '#09090b', color: '#fafafa' }}>
        <Navbar />
        <Hero />
        <Projects />
        <Process />
        <Footer />
      </div>
    </LanguageProvider>
  )
}
