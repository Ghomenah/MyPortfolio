import profileImg from '/img/Ako.png'

export default function Hero() {
  return (
    <section className="hero">
      <div className="profile-container">
        <div className="profile-frame">
          <img src={profileImg} alt="Eric Varona" />
        </div>
      </div>

      <div className="hero-content">
        <p className="greeting">Hello, I'm</p>
        <h1 className="name">Eric Varona</h1>
        <p className="tagline">Web Developer &amp; Programmer</p>
        <p className="description">
          Currently learning web development and programming, building my skills through performance tasks.
          My goal is to become a skilled developer and work on real-world applications that make a difference.
        </p>
        <div className="cta-buttons">
          <a href="#contact" className="btn btn-primary">Contact Me</a>
          <a href="#projects" className="btn btn-secondary">See Projects</a>
        </div>
      </div>
    </section>
  )
}
