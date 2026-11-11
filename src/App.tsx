const focusAreas = [
  {
    number: '01',
    title: 'Technical Operations',
    body: 'Keeping day-to-day technical work reliable — clear ownership, steady follow-through, and systems that hold up under pressure.',
  },
  {
    number: '02',
    title: 'Project Delivery',
    body: 'Turning a brief into a scoped plan, a realistic timeline, and a finished result. Progress you can see, not just activity.',
  },
  {
    number: '03',
    title: 'Process & Systems',
    body: 'Tightening how work moves between people so quality is repeatable. Less friction, fewer surprises, better handoffs.',
  },
  {
    number: '04',
    title: 'Team Leadership',
    body: 'Aligning priorities, supporting the people doing the work, and making sure decisions stay visible and practical.',
  },
]

function App() {
  return (
    <div className="page">
      <div className="grain" aria-hidden="true" />

      <header className="nav">
        <a className="mark" href="#top" aria-label="Osama Khan, home">
          <span className="mark-letters">OK</span>
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#focus">Focus</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <p className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Dubai, United Arab Emirates
          </p>
          <h1>Osama Khan</h1>
          <p className="role">Technical Manager</p>
          <p className="lede">
            I lead technical work with clarity and care — so teams know the plan,
            delivery stays on track, and the details are not left to chance.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#about">
              About me
            </a>
            <a className="btn ghost" href="#focus">
              Areas of focus
            </a>
          </div>
        </section>

        <section id="about" className="about">
          <div className="section-label">
            <span>About</span>
            <hr />
          </div>
          <div className="about-grid">
            <h2>
              Practical leadership for technical work that has to get done well.
            </h2>
            <div className="about-copy">
              <p>
                I’m a Technical Manager based in Dubai. My work sits at the
                intersection of operations, delivery, and people — making sure
                complex work is scoped honestly, executed carefully, and
                finished to a standard I can stand behind.
              </p>
              <p>
                I care about clear communication, dependable systems, and
                teams that are set up to do good work without unnecessary
                noise. Whether the task is coordinating a programme of work or
                tightening a process, the aim is the same: fewer surprises,
                stronger follow-through, and results that last.
              </p>
            </div>
          </div>
        </section>

        <section id="focus" className="focus">
          <div className="section-label">
            <span>Focus</span>
            <hr />
          </div>
          <h2 className="focus-heading">Where I spend my attention.</h2>
          <div className="cards">
            {focusAreas.map((item) => (
              <article className="card" key={item.number}>
                <span className="card-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-left">
          <strong>Osama Khan</strong>
          <span>Technical Manager · Dubai</span>
        </div>
        <p className="footer-note">© {new Date().getFullYear()} Osama Khan</p>
      </footer>
    </div>
  )
}

export default App
