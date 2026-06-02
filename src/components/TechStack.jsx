const stack = [
  {
    group: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite'],
  },
  {
    group: 'Backend',
    items: ['Python', 'FastAPI', 'C#', 'Node.js'],
  },
  {
    group: 'Databases',
    items: ['MongoDB', 'MySQL', 'MySQL Server'],
  },
  {
    group: 'Tools',
    items: ['VS Code', 'GitHub', 'Figma', 'Vite'],
  },
]

export default function TechStack() {
  return (
    <section className="section">
      <p className="section-label">Skills</p>
      <h2 className="section-title">Tech Stack</h2>
      {stack.map((s) => (
        <div className="stack-group" key={s.group}>
          <p className="stack-group-label">{s.group}</p>
          <div className="stack-pills">
            {s.items.map((item) => (
              <span className="pill" key={item}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
