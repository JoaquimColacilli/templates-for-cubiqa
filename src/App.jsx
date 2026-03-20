import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import TemplatesSection from './components/sections/TemplatesSection'
import ClientsSection from './components/sections/ClientsSection'

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <TemplatesSection />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  )
}
