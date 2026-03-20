import { motion } from 'framer-motion'
import { clients } from '../../data/content'
import ClientCard from '../ui/ClientCard'

export default function ClientsSection() {
  return (
    <section id="clientes" style={{ paddingTop: 120, paddingBottom: 128 }}>
      {/* Header */}
      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            style={{
              fontSize: 11,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#888888',
              marginBottom: 24,
              fontFamily: 'var(--font-mono)',
            }}
          >
            En producción
          </p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.75rem)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              color: '#0A0A0A',
            }}
          >
            Clientes
          </h2>
        </motion.div>
      </div>

      {/* Client list — separated from heading */}
      <div className="wrapper" style={{ marginTop: 48 }}>
        <div style={{ borderTop: '1px solid #E0E0E0' }}>
          {clients.map((client, i) => (
            <ClientCard key={client.name} client={client} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
