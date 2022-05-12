import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/nav/Nav'
import Experience from './components/nav/Nav'
import Services from './components/nav/Nav'
import Portfolio from './components/nav/Nav'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default App