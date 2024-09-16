import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About';
import Therapy from './components/Therapy';
import Features from './components/Features';
import Services from './components/Services';
const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Therapy />
      <Features/>
      <Services/>
    </div>
  )
}

export default App
