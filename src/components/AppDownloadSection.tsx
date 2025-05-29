const AppDownloadSection = () => {
  return (
    <section id="download" className="py-20 " aria-labelledby="download-title">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="bg-background-card backdrop-blur-md border border-primary-500/20 rounded-xl p-12 shadow-lg">
          <h2
            id="download-title"
            className="text-4xl font-bold text-text-primary mb-6 font-display relative inline-block">
            Scarica la Beta
            <span
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded"
              aria-hidden="true"
            />
          </h2>

          <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto font-display leading-relaxed">
            Prova in anteprima Teevi e lasciati sorprendere da un nuovo modo di
            vivere l’intrattenimento. Accedi alla versione Beta tramite
            TestFlight.
          </p>

          <div className="flex justify-center mb-8">
            <div className="relative group transition-transform duration-300 hover:scale-105">
              <a
                href="https://apps.apple.com/it/app/teevi-beta/id0000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                aria-label="Scarica Teevi dall'App Store">
                <img
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  className="h-14 w-auto"
                />
                <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  BETA
                </span>
              </a>
            </div>
          </div>

          <p className="text-sm text-text-secondary/70 mt-4">
            Disponibile per iPhone, iPad e Mac.
            <br />
            Richiede iOS 18/macOS 15 o superiore.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AppDownloadSection
