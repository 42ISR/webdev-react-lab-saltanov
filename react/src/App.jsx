import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './comp/Header'
import Hero from './comp/Hero'
import Courses from './comp/Courses'
import Testimontals from './comp/Testimontals'
import Footer from './comp/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Hero  />
    <Courses />
    <Testimontals />
    <Footer />
    
  </>
  )
}

export default App
