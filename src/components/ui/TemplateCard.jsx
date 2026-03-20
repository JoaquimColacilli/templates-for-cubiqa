import { useState } from 'react'
import { motion } from 'framer-motion'

function getMicrolinkScreenshot(url) {
  return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`
}

export default function TemplateCard({ template, index }) {
  const { id, name, description, tags, url } = template
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group block overflow-hidden transition-all duration-700"
      style={{
        border: '1px solid #222222',
        backgroundColor: '#141414',
        textDecoration: 'none',
        color: 'inherit',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#333333'; e.currentTarget.style.transform = 'translateY(-2px)' }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#222222'; e.currentTarget.style.transform = 'translateY(0)' }}
    >
      {/* Screenshot area */}
      <div className="relative aspect-[16/10] overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
        {/* Skeleton / Fallback */}
        {(!imgLoaded || imgError) && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ backgroundColor: '#1A1A1A' }}
          >
            <span
              style={{
                fontSize: 28,
                fontWeight: 500,
                color: '#333333',
                marginBottom: 8,
                fontFamily: 'var(--font-mono)',
              }}
            >
              {id}
            </span>
            <span
              style={{
                fontSize: 10,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#555555',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {imgError ? 'Preview no disponible' : 'Loading...'}
            </span>
          </div>
        )}

        {!imgError && (
          <img
            src={getMicrolinkScreenshot(url)}
            alt={`Preview de ${name}`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className={`w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-[1.03] ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Overlay */}
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.15)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0)' }}
        />

        {/* Number overlay */}
        <span
          className="absolute top-4 left-5"
          style={{
            fontSize: 11,
            letterSpacing: '0.2em',
            color: 'rgba(255, 255, 255, 0.3)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          {id}
        </span>

        {/* Arrow overlay */}
        <div className="absolute top-4 right-5 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500">
          <svg
            className="w-4 h-4"
            style={{ color: '#FFFFFF' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </div>
      </div>

      {/* Content area */}
      <div style={{ padding: '20px 24px' }}>
        <h3
          className="group-hover:tracking-wider transition-all duration-500"
          style={{ fontSize: 18, fontWeight: 500, letterSpacing: '0.025em', marginBottom: 8, color: '#FFFFFF' }}
        >
          {name}
        </h3>

        <p
          className="line-clamp-1"
          style={{ fontSize: 14, fontWeight: 300, color: '#888888', lineHeight: 1.6, marginBottom: 16 }}
        >
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: '4px 10px',
                fontSize: 10,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                border: '1px solid #333333',
                color: '#888888',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}
