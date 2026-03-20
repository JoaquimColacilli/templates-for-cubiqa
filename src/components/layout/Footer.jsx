export default function Footer() {
  return (
    <footer className="border-t border-[var(--gray-border)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <span className="text-sm tracking-[0.3em] uppercase font-light">
            Cubiqa
          </span>
          <nav className="flex gap-8">
            <a
              href="#templates"
              className="text-xs text-[var(--gray)] hover:text-white transition-colors duration-300 tracking-wide"
            >
              Templates
            </a>
            <a
              href="#clientes"
              className="text-xs text-[var(--gray)] hover:text-white transition-colors duration-300 tracking-wide"
            >
              Clientes
            </a>
          </nav>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--gray-border)] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-[var(--gray-dim)] tracking-wide">
            © {new Date().getFullYear()} Cubiqa Studio
          </p>
          <p className="text-xs text-[var(--gray-dim)] tracking-wide">
            Crafted with precision
          </p>
        </div>
      </div>
    </footer>
  )
}
