import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../../assets/images/cubiqa-logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Templates', href: '#templates' },
    { label: 'Clientes', href: '#clientes' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        backgroundColor: scrolled ? '#0A0A0A' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid #333333' : '1px solid transparent',
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, border-bottom 0.3s ease',
      }}
    >
      <div className="wrapper flex items-center justify-between" style={{ paddingTop: 20, paddingBottom: 20 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img
            src={logo}
            alt="Cubiqa"
            style={{
              height: 28,
              width: 'auto',
              filter: scrolled ? 'none' : 'invert(1)',
              transition: 'filter 0.3s ease',
            }}
          />
          <span
            style={{
              fontSize: 14,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontWeight: 300,
              color: scrolled ? '#FFFFFF' : '#0A0A0A',
              transition: 'color 0.3s ease',
            }}
          >
            Cubiqa
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: 11,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: scrolled ? '#888888' : '#555555',
                transition: 'color 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => e.target.style.color = scrolled ? '#FFFFFF' : '#0A0A0A'}
              onMouseLeave={(e) => e.target.style.color = scrolled ? '#888888' : '#555555'}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] w-5 relative"
          style={{ zIndex: 110 }}
          aria-label="Menu"
        >
          <span
            className={`block h-px w-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[5.5px]' : ''}`}
            style={{ backgroundColor: menuOpen || scrolled ? '#FFFFFF' : '#0A0A0A' }}
          />
          <span
            className={`block h-px w-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            style={{ backgroundColor: menuOpen || scrolled ? '#FFFFFF' : '#0A0A0A' }}
          />
          <span
            className={`block h-px w-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[5.5px]' : ''}`}
            style={{ backgroundColor: menuOpen || scrolled ? '#FFFFFF' : '#0A0A0A' }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: '#0A0A0A',
              zIndex: 105,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div className="flex flex-col items-center gap-10">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontSize: 24,
                    fontWeight: 300,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
