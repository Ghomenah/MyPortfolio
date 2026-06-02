import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import wallpaper from '/wallpaper/wallpaper.mp4'

export default function App() {
  return (
    <>
      <video autoPlay muted loop playsInline className="bg-video">
        <source src={wallpaper} type="video/mp4" />
      </video>

      <div className="container">
        <Navbar />
        <Hero />
        <TechStack />
        <Projects />
        <About />
        <Footer />
      </div>
    </>
  )
}
