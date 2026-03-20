import { motion } from 'framer-motion'
import { templates } from '../../data/content'
import TemplateCard from '../ui/TemplateCard'

export default function TemplatesSection() {
  return (
    <section id="templates" style={{ paddingTop: 128, paddingBottom: 128 }}>
      {/* Header */}
      <div className="wrapper" style={{ marginBottom: 64 }}>
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
            Catálogo
          </p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.75rem)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              color: '#0A0A0A',
            }}
          >
            Templates
          </h2>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {templates.map((template, i) => (
          <TemplateCard key={template.id} template={template} index={i} />
        ))}
      </div>
    </section>
  )
}
