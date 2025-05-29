const HeroSection = () => {
  return (
    <section
      className={`relative py-32 pb-24 text-center overflow-hidden`}
      aria-labelledby="hero-title">
      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col items-center">
          <h1
            id="hero-title"
            className="text-7xl md:text-8xl lg:text-9xl font-extrabold text-text-primary mb-4 font-display tracking-tight">
            Tee
            <span className="relative inline-block text-accent-500">
              vi
              <span
                className="absolute bottom-2 left-0 w-full h-2 bg-accent-500/60 rounded blur-sm"
                aria-hidden="true"
              />
            </span>
            <span
              className="absolute top-4 -right-6 w-6 h-6 bg-gradient-radial from-white to-primary-400/70 rounded-full animate-sparkle"
              aria-hidden="true"
            />
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-text-secondary mb-10 max-w-2xl font-display font-medium leading-relaxed">
            Tutto il tuo{" "}
            <span className="subtitle-highlight">intrattenimento</span>, come
            l'hai sempre desiderato su iPhone, iPad e Mac
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
            <a
              href="#community"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-primary-400/40 text-text-primary font-semibold rounded-2xl transition-all duration-400 hover:-translate-y-2 hover:border-primary-400 hover:bg-white/15 shadow-glow-purple relative overflow-hidden group focus:outline-none focus:ring-4 focus:ring-primary-500/50"
              aria-label="Vai alla sezione community">
              <div
                className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-bottom"
                aria-hidden="true"
              />
              <span className="relative z-10">Unisciti alla Community</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
