import React,{useEffect} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  return (
    <div>
      <Navbar />
      <Hero/>
    </div>
  )
}

export default App
