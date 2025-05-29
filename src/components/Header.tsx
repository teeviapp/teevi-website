const NavigationHeader = () => {
  return (
    <header
      className={`sticky top-0 z-50 bg-background-card backdrop-blur-md border-b border-primary-500/20 shadow-lg`}>
      <nav className="relative overflow-hidden">
        {/* Decorative gradient line */}
        <div
          className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/80 to-transparent"
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a
                href="/"
                className="flex items-center transition-transform duration-300 hover:scale-110 relative group focus:outline-none focus:ring-2 focus:ring-primary-500/50 rounded-lg"
                aria-label="Torna alla homepage di Teevi">
                <div
                  className="absolute inset-0 bg-gradient-radial from-primary-500/30 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />
                <img
                  src="/teevi-logo.svg"
                  alt="Teevi"
                  className="h-9 relative z-10"
                  width={120}
                  height={36}
                />
              </a>
            </div>

            {/* Navigation */}
            <nav
              className="flex items-center space-x-6"
              role="navigation"
              aria-label="Menu principale">
              <a
                href="#guida"
                className="text-text-primary font-medium relative py-2 font-display transition-all duration-300 hover:text-primary-400 hover:-translate-y-1 group focus:outline-none focus:ring-2 focus:ring-primary-500/50 rounded">
                Guida
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 rounded transition-all duration-300 group-hover:w-full"
                  aria-hidden="true"
                />
              </a>

              <a
                href="https://github.com/teeviapp"
                className="px-4 py-2 bg-primary-500/20 border border-primary-500/30 text-text-primary font-medium rounded-lg transition-all duration-300 hover:bg-primary-500/30 shadow-glow-blue hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visita il repository GitHub di Teevi (si apre in una nuova finestra)">
                GitHub
              </a>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavigationHeader
