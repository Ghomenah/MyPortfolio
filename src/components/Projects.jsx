const projects = [
  {
    title: 'Inventory Management System',
    status: 'In Progress',
    description:
      'Full Inventory management for real client — Sales Monitoring, Stock Management, AI Assistant Inquiry, basic AI analytics & Forecasting.',
    link: null,
  },
  {
    title: 'My Portfolio',
    status: 'Live',
    description: 'Personal Portfolio Website built with React + Vite, deployed on Vercel.',
    link: 'https://eric-varona-portfolio.vercel.app',
    linkLabel: 'View Live →',
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <p className="section-label">Work</p>
      <h2 className="section-title">Projects</h2>
      <div className="projects-list">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <div className="project-title">
              {p.title}
              <span className="badge">{p.status}</span>
            </div>
            <p className="project-desc">{p.description}</p>
            {p.link && (
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
                {p.linkLabel}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
