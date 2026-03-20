export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#0A0A0A',
        color: '#FFFFFF',
        borderTop: '1px solid #333333',
      }}
    >
      <div className="wrapper" style={{ paddingTop: 80, paddingBottom: 80 }}>
        {/* Main grid */}
        <div className="footer-grid">
          {/* Left column */}
          <div>
            <h3
              style={{
                fontSize: 14,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 300,
                color: '#FFFFFF',
                marginBottom: 16,
              }}
            >
              Cubiqa
            </h3>
            <p
              style={{
                fontSize: 14,
                fontWeight: 300,
                color: '#888888',
                lineHeight: 1.7,
                maxWidth: 320,
              }}
            >
              Studio de desarrollo web premium.
            </p>
          </div>

          {/* Right column — nav grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 32,
            }}
          >
            {/* Navegación */}
            <div>
              <h4
                style={{
                  fontSize: 11,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#555555',
                  marginBottom: 20,
                  fontFamily: 'var(--font-mono)',
                }}
              >
                Navegación
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <a
                  href="#templates"
                  style={{
                    fontSize: 13,
                    color: '#888888',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.target.style.color = '#888888'}
                >
                  Templates
                </a>
                <a
                  href="#clientes"
                  style={{
                    fontSize: 13,
                    color: '#888888',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.target.style.color = '#888888'}
                >
                  Clientes
                </a>
              </div>
            </div>

            {/* Contacto */}
            <div>
              <h4
                style={{
                  fontSize: 11,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#555555',
                  marginBottom: 20,
                  fontFamily: 'var(--font-mono)',
                }}
              >
                Contacto
              </h4>
              <p style={{ fontSize: 13, color: '#888888' }}>
                hola@cubiqa.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: 64,
            paddingTop: 32,
            borderTop: '1px solid #333333',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <p style={{ fontSize: 12, color: '#555555', letterSpacing: '0.05em' }}>
            © {new Date().getFullYear()} Cubiqa Studio.
          </p>
          <p style={{ fontSize: 12, color: '#555555', letterSpacing: '0.05em' }}>
            Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
