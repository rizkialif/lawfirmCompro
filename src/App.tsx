import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
// import HeroSection from './components/HeroSection'
import InteractiveScale from './components/InteractiveScale'
import AboutUs from './modules/AboutUs'
import Services from './modules/Services'
import Testimonials from './modules/Testimonial'
import ContactUs from './modules/ContactUs'
import LoadingScreen from './components/LoadingScreen'

// const LuxuryDivider = () => (
//   <div className="flex justify-center items-center py-4 bg-white">
//     <div className="w-24 md:w-48 h-px bg-stone-200"></div>
//     <div className="mx-4 w-2 h-2 rotate-45 bg-[#0a1d37] opacity-50"></div>
//     <div className="w-24 md:w-48 h-px bg-stone-200"></div>
//   </div>
// );

function App() {
  const companyName = "Lawyer Company"
  const menu = [
    { label: "Tentang Kami", href: "#aboutus" },
    { label: "Layanan", href: "#services" },
    { label: "Hubungi Kami", href: "#contactus" }
  ]

  return (
    <div className="antialiased text-stone-800">
      <LoadingScreen />
      <Navbar companyName={companyName} menu={menu} />
      <InteractiveScale />
      <AboutUs />
      <Services />
      <Testimonials />
      <ContactUs />
    </div>
  )
}

export default App