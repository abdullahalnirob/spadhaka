import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About';
import Therapy from './components/Therapy';
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
    </div>
  )
}

export default App
