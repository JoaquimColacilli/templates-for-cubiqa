import { motion } from 'framer-motion'
import { InteractiveRobotSpline } from '@/components/ui/interactive-3d-robot'

const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode"

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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="wrapper w-full flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10" style={{ paddingTop: 100 }}>
        {/* Left — Text */}
        <div className="flex-1 max-w-xl">
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

          <div>
            <motion.h1
              custom={1}
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="text-[clamp(3rem,6vw,7rem)]"
              style={{ fontWeight: 300, lineHeight: 0.92, letterSpacing: '-0.03em', color: '#FFFFFF' }}
            >
              Templates
            </motion.h1>
            <motion.h1
              custom={2}
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="text-[clamp(3rem,6vw,7rem)]"
              style={{ fontWeight: 500, fontStyle: 'italic', lineHeight: 0.92, letterSpacing: '-0.03em', color: '#FFFFFF' }}
            >
              premium
            </motion.h1>
          </div>

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
              onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
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

        {/* Right — 3D Robot */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="flex-1 w-full lg:w-auto relative overflow-hidden"
          style={{ minHeight: 400, height: '50vh', maxHeight: 550 }}
        >
          <div className="absolute" style={{ top: '-60%', bottom: '-60%', left: '-10%', right: '-10%' }}>
            <InteractiveRobotSpline
              scene={ROBOT_SCENE_URL}
              className="w-full h-full"
            />
          </div>
          {/* Gradient fade bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
            style={{ height: '45%', background: 'linear-gradient(to bottom, transparent 0%, #0A0A0A 50%)' }}
          />
          {/* Side blends */}
          <div
            className="absolute top-0 bottom-0 left-0 z-10 pointer-events-none"
            style={{ width: '15%', background: 'linear-gradient(to right, #0A0A0A, transparent)' }}
          />
          <div
            className="absolute top-0 bottom-0 right-0 z-10 pointer-events-none"
            style={{ width: '10%', background: 'linear-gradient(to left, #0A0A0A, transparent)' }}
          />
          <div
            className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
            style={{ height: '10%', background: 'linear-gradient(to bottom, #0A0A0A, transparent)' }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-50"
      >
        <span
          style={{
            fontSize: 10,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#555555',
            fontFamily: 'var(--font-mono)',
          }}
        >
          Scroll
        </span>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #555555, transparent)' }} />
      </motion.div>
    </section>
  )
}
