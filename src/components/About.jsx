const cards = [
  {
    title: 'Web Development',
    text: 'Creating responsive and modern websites using the latest web technologies. Focused on clean code and user experience.',
  },
  {
    title: 'Programming',
    text: 'Learning programming fundamentals and problem-solving through code. Building a strong foundation in algorithms and data structures.',
  },
  {
    title: 'Continuous Learning',
    text: 'Staying updated with the latest trends and technologies in web development. Always eager to learn new skills.',
  },
  {
    title: 'Goal-Oriented',
    text: 'My goal is to become a skilled developer and work on real-world applications that make a difference.',
  },
]

export default function About() {
  return (
    <section className="section">
      <p className="section-label">Background</p>
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        {cards.map((card) => (
          <div className="about-card" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
