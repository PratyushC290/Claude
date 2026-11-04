import { useEffect, useRef, useState } from 'react'
import {
  profile, about, education, stats, projects, skills, achievements, leadership,
} from './data.js'

const SECTIONS = ['about', 'projects', 'skills', 'achievements', 'leadership', 'contact']
const THEMES = ['green', 'amber', 'cyan']

// Render **bold** markers inside strings
function Rich({ text }) {
  return text.split(/\*\*(.+?)\*\*/g).map((p, i) => (i % 2 ? <b key={i}>{p}</b> : p))
}

function Window({ id, title, cmd, children }) {
  return (
    <section id={id} className="win">
      <div className="win-bar">
        <span className="dots"><i /><i /><i /></span>
        <span className="win-title">{title}</span>
      </div>
      <div className="win-body">
        <p className="cmd"><span className="ps">❯</span> {cmd}</p>
        {children}
      </div>
    </section>
  )
}

function useTyped(text, speed = 38) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(text.length); return }
    if (n >= text.length) return
    const t = setTimeout(() => setN(n + 1), speed)
    return () => clearTimeout(t)
  }, [n, text, speed])
  return [text.slice(0, n), n >= text.length]
}

function Hero() {
  const [typed, done] = useTyped('whoami')
  return (
    <section id="top" className="win hero">
      <div className="win-bar">
        <span className="dots"><i /><i /><i /></span>
        <span className="win-title">{profile.handle}@iitp: ~</span>
      </div>
      <div className="win-body">
        <p className="cmd"><span className="ps">❯</span> {typed}{!done && <span className="cursor" />}</p>
        {done && (
          <>
            <h1>{profile.name}<span className="cursor" /></h1>
            <p className="tagline">{profile.tagline}</p>
            <ul className="stats">
              {stats.map(([v, l]) => (
                <li key={l}><b>{v}</b><span>{l}</span></li>
              ))}
            </ul>
            <p className="hint">Type <code>help</code> in the prompt at the bottom, or use the tabs above.</p>
          </>
        )}
      </div>
    </section>
  )
}

function Projects() {
  const [f, setF] = useState('all')
  const list = projects.filter(p => f === 'all' || p.cats.includes(f))
  return (
    <Window id="projects" title="projects" cmd={`ls ./projects${f === 'all' ? '' : ` --tag=${f}`}`}>
      <div className="filters">
        {['all', 'ai', 'fullstack'].map(k => (
          <button key={k} className={f === k ? 'on' : ''} onClick={() => setF(k)}>[{k}]</button>
        ))}
      </div>
      <div className="grid">
        {list.map(p => (
          <article key={p.id} className="card">
            <h3>
              {p.title} {p.status && <em className="badge">{p.status}</em>}
            </h3>
            <p className="sub"># {p.sub}</p>
            <ul>{p.bullets.map((b, i) => <li key={i}><Rich text={b} /></li>)}</ul>
            <p className="stack">{p.stack.map(s => <span key={s}>{s}</span>)}</p>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">open repo ↗</a>
          </article>
        ))}
      </div>
    </Window>
  )
}

function Prompt({ onCommand, theme, setTheme }) {
  const [val, setVal] = useState('')
  const [out, setOut] = useState('')
  const hist = useRef([])
  const submit = e => {
    e.preventDefault()
    const c = val.trim().toLowerCase()
    setVal('')
    if (!c) return
    hist.current.push(c)
    const [cmd, arg] = c.split(/\s+/)
    if (cmd === 'help') setOut(`commands: ${SECTIONS.join(', ')}, top, theme [${THEMES.join('|')}], github, linkedin, email, clear`)
    else if (cmd === 'clear') setOut('')
    else if (cmd === 'top') { onCommand('top'); setOut('') }
    else if (SECTIONS.includes(cmd)) { onCommand(cmd); setOut('') }
    else if (cmd === 'theme') {
      if (THEMES.includes(arg)) { setTheme(arg); setOut(`theme set to ${arg}`) }
      else { setTheme(THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length]); setOut('theme cycled') }
    }
    else if (cmd === 'github') { window.open(profile.github, '_blank', 'noopener'); setOut('opening github…') }
    else if (cmd === 'linkedin') { window.open(profile.linkedin, '_blank', 'noopener'); setOut('opening linkedin…') }
    else if (cmd === 'email') { window.location.href = `mailto:${profile.email}`; setOut('opening mail client…') }
    else setOut(`command not found: ${cmd}. try 'help'`)
  }
  return (
    <form className="prompt" onSubmit={submit}>
      {out && <p className="out">{out}</p>}
      <label>
        <span className="ps">❯</span>
        <input
          value={val}
          onChange={e => setVal(e.target.value)}
          placeholder="type 'help'"
          aria-label="Terminal command"
          autoComplete="off" autoCapitalize="off" spellCheck="false"
        />
      </label>
    </form>
  )
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || 'green' } catch { return 'green' }
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { /* storage unavailable */ }
  }, [theme])

  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <>
      <header className="nav">
        <a className="logo" href="#top">~/pratyush</a>
        <nav>
          {SECTIONS.map(s => <a key={s} href={`#${s}`}>{s}</a>)}
        </nav>
        <button className="theme" onClick={() => setTheme(THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length])} aria-label="Cycle color theme">◐ {theme}</button>
      </header>

      <main>
        <Hero />

        <Window id="about" title="about.md" cmd="cat about.md">
          <div className="two">
            <div>{about.map((p, i) => <p key={i} className="dim">{p}</p>)}</div>
            <div className="edu">
              <p className="dim"># education</p>
              {education.map(e => (
                <div key={e.degree} className="edu-row">
                  <div><b>{e.degree}</b><br />{e.school}</div>
                  <div className="r">{e.years}<br /><b>{e.score}</b></div>
                </div>
              ))}
            </div>
          </div>
        </Window>

        <Projects />

        <Window id="skills" title="skills.json" cmd="cat skills.json | jq 'keys'">
          <div className="skills">
            {Object.entries(skills).map(([k, v]) => (
              <div key={k}>
                <h3>"{k}"</h3>
                <p className="stack">{v.map(s => <span key={s}>{s}</span>)}</p>
              </div>
            ))}
          </div>
        </Window>

        <Window id="achievements" title="achievements.log" cmd="tail -n 6 achievements.log">
          <ul className="log">
            {achievements.map(([k, v, href]) => (
              <li key={k}>
                <span className="ok">[ OK ]</span> <b>{k}</b> — {href ? <a href={href} target="_blank" rel="noopener noreferrer">{v}</a> : v}
              </li>
            ))}
          </ul>
        </Window>

        <Window id="leadership" title="leadership.md" cmd="cat leadership.md">
          <h3>{leadership.org}</h3>
          <p className="sub"># {leadership.roles}</p>
          <ul className="plain">{leadership.bullets.map((b, i) => <li key={i}><Rich text={b} /></li>)}</ul>
        </Window>

        <Window id="contact" title="contact.sh" cmd="./contact.sh --open">
          <p className="dim">Open to internships, research collaborations and interesting problems.</p>
          <ul className="log contact">
            <li><span className="k">email</span> <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><span className="k">phone</span> <a href="tel:+916203909114">{profile.phone}</a></li>
            <li><span className="k">github</span> <a href={profile.github} target="_blank" rel="noopener noreferrer">github.com/PratyushC290</a></li>
            <li><span className="k">linkedin</span> <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/pratyush-chandra-</a></li>
            <li><span className="k">location</span> {profile.location}</li>
          </ul>
        </Window>
      </main>

      <footer>© {new Date().getFullYear()} {profile.name} · built with React</footer>
      <Prompt onCommand={go} theme={theme} setTheme={setTheme} />
    </>
  )
}
