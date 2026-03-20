import { motion } from 'framer-motion'

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: 0.3 + i * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center" style={{ paddingTop: 80 }}>
      {/* Content */}
      <div className="wrapper w-full">
        {/* Overline */}
        <motion.p
          custom={0}
          variants={reveal}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: 11,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#888888',
            marginBottom: 24,
            fontFamily: 'var(--font-mono)',
          }}
        >
          Web Studio
        </motion.p>

        {/* Headline */}
        <div>
          <motion.h1
            custom={1}
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="text-[clamp(3rem,8vw,8rem)]"
            style={{ fontWeight: 300, lineHeight: 0.92, letterSpacing: '-0.03em', color: '#0A0A0A' }}
          >
            Templates
          </motion.h1>
          <motion.h1
            custom={2}
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="text-[clamp(3rem,8vw,8rem)]"
            style={{ fontWeight: 500, fontStyle: 'italic', lineHeight: 0.92, letterSpacing: '-0.03em', color: '#0A0A0A' }}
          >
            premium
          </motion.h1>
        </div>

        {/* Subheadline + CTA block — separated from headline */}
        <div style={{ marginTop: 32 }}>
          <motion.p
            custom={3}
            variants={reveal}
            initial="hidden"
            animate="visible"
            style={{
              maxWidth: 448,
              fontSize: 16,
              fontWeight: 300,
              color: '#888888',
              lineHeight: 1.7,
              marginBottom: 56,
            }}
          >
            Landing pages para marcas que no se conforman con lo genérico.
            Cada pixel, con intención.
          </motion.p>

          {/* CTA */}
          <motion.a
            custom={4}
            variants={reveal}
            initial="hidden"
            animate="visible"
            href="#templates"
            className="group inline-flex items-center gap-3"
            style={{
              fontSize: 12,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#888888',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#0A0A0A'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#888888'}
          >
            <span>Explorar templates</span>
            <span
              className="block group-hover:w-12 transition-all duration-300"
              style={{ width: 32, height: 1, backgroundColor: '#888888' }}
            />
          </motion.a>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span
          style={{
            fontSize: 10,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#CCCCCC',
            fontFamily: 'var(--font-mono)',
          }}
        >
          Scroll
        </span>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #CCCCCC, transparent)' }} />
      </motion.div>
    </section>
  )
}
