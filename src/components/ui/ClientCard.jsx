import { motion } from 'framer-motion'

export default function ClientCard({ client, index }) {
  const { name, industry, url } = client

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group flex items-center justify-between transition-all duration-500"
      style={{
        paddingTop: 24,
        paddingBottom: 24,
        borderBottom: '1px solid #E0E0E0',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <div className="flex items-baseline gap-6">
        <span
          style={{
            fontSize: 11,
            color: '#888888',
            letterSpacing: '0.2em',
            fontFamily: 'var(--font-mono)',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <div>
          <h4
            className="group-hover:tracking-wider transition-all duration-500"
            style={{ fontSize: 18, fontWeight: 500, letterSpacing: '0.025em', color: '#0A0A0A' }}
          >
            {name}
          </h4>
          <p style={{ fontSize: 12, color: '#888888', letterSpacing: '0.025em', marginTop: 4 }}>
            {industry}
          </p>
        </div>
      </div>

      <svg
        className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300 shrink-0"
        style={{ color: '#CCCCCC' }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
    </motion.a>
  )
}
