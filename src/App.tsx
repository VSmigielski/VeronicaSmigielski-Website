import { useState } from 'react'
import { contact, earlyWork, featured, projects, type Project } from './data'

function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    ['Work', '#work'],
    ['Early work', '#early'],
    ['About', '#about'],
    ['Contact', '#contact'],
  ]
  return (
    <header className="nav">
      <a className="brand" href="#top">
        <img src="/img/transparent-logo.png" alt="" width={34} height={32} />
        Veronica
      </a>
      <button className="nav-toggle" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
        <span />
        <span />
      </button>
      <nav className={open ? 'open' : ''}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div>
        <p className="wave">👋 Hi, I am</p>
        <h1>Veronica Smigielski</h1>
        <p className="role">Full-stack developer</p>
        <p className="lede">
          I build React, TypeScript and Supabase products end to end, from the database rules that keep data honest to
          the interface people actually enjoy using.
        </p>
        <div className="actions">
          <a className="btn btn-solid" href="#work">
            See my work
          </a>
          <a className="btn btn-outline" href="#contact">
            Contact me
          </a>
        </div>
      </div>
      <img className="hero-photo" src="/img/veronica.webp" alt="Veronica Smigielski" width={420} height={450} />
    </section>
  )
}

function Featured() {
  return (
    <section className="featured" id="work">
      <p className="kicker">{featured.kicker}</p>
      <h2>{featured.title}</h2>
      <p className="lede">{featured.summary}</p>
      <div className="featured-shots">
        {featured.images.map((img, i) => (
          <img key={img.src} src={img.src} alt={img.alt} loading={i ? 'lazy' : 'eager'} className={i === 0 ? 'wide' : ''} />
        ))}
      </div>
      <div className="featured-body">
        <div>
          <h3>The problem</h3>
          <p>{featured.problem}</p>
          <ul className="chips">
            {featured.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <div className="actions">
            {featured.links.map((l, i) => (
              <a key={l.href} className={`btn ${i ? 'btn-outline' : 'btn-solid'}`} href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="decisions">
          {featured.decisions.map((d) => (
            <article key={d.title}>
              <h3>{d.title}</h3>
              <p>{d.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectRow({ p, flip }: { p: Project; flip: boolean }) {
  return (
    <article className={`project ${flip ? 'flip' : ''}`} id={p.id}>
      {p.image ? (
        <img src={p.image} alt={p.imageAlt} loading="lazy" />
      ) : (
        <div className="project-card" aria-hidden>
          <span>Winter in Bloom</span>
          <small>Studio</small>
        </div>
      )}
      <div>
        <p className="kicker">{p.kicker}</p>
        <h2>{p.title}</h2>
        <p>{p.summary}</p>
        <ul className="points">
          {p.points.map((pt) => (
            <li key={pt}>{pt}</li>
          ))}
        </ul>
        <ul className="chips">
          {p.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <div className="actions">
          {p.links.map((l) => (
            <a key={l.href} className="btn btn-outline" href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

function EarlyWork() {
  return (
    <section className="early" id="early">
      <h2>Where it started</h2>
      <p className="lede">
        My first projects from the SheCodes program in 2021: vanilla JavaScript, then React, one small app at a time.
      </p>
      <ul className="early-grid">
        {earlyWork.map((w) => (
          <li key={w.href}>
            <a href={w.href} target="_blank" rel="noreferrer">
              <img src={w.image} alt="" loading="lazy" />
              <span>{w.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

function About() {
  return (
    <section className="about" id="about">
      <h2>About me</h2>
      <div>
        <p>
          I started coding through SheCodes in 2021 and kept going: client websites first, then full products. Today I
          work mostly in React and TypeScript on top of Supabase and Postgres, and I like owning the whole slice, from
          schema and security rules to deployment and the details of the UI.
        </p>
        <p>
          I care about software that stays correct when real people use it at the same time, and about interfaces that
          explain themselves. Lately that includes AI features with clear guardrails: the model suggests, the person
          decides, and the database enforces the rules.
        </p>
        <ul className="chips">
          {['React', 'TypeScript', 'Next.js', 'Supabase', 'PostgreSQL', 'Node', 'Playwright', 'Netlify', 'Claude API'].map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <footer className="contact" id="contact">
      <h2>Work inquiry</h2>
      <p>Have a project in mind or a role to fill? I would love to hear about it.</p>
      <a className="btn btn-solid" href={`mailto:${contact.email}`}>
        {contact.email}
      </a>
      <div className="socials">
        <a href={contact.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
      <small>© {new Date().getFullYear()} Veronica Smigielski</small>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Featured />
        <section className="projects">
          {projects.map((p, i) => (
            <ProjectRow key={p.id} p={p} flip={i % 2 === 0} />
          ))}
        </section>
        <EarlyWork />
        <About />
      </main>
      <Contact />
    </>
  )
}
