import './App.css'
import Navbar from './components/Navbar'
import InteractiveScale from './components/InteractiveScale'
import AboutUs from './modules/AboutUs'
import Services from './modules/Services'
import Testimonials from './modules/Testimonial'
import ContactUs from './modules/ContactUs'
import LoadingScreen from './components/LoadingScreen'
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