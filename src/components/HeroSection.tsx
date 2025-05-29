import { TeeviButton } from "./buttons"

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
            <TeeviButton href="#download" aria-label="Scarica la Beta di Teevi">
              Scarica la Beta
            </TeeviButton>
            <TeeviButton
              href="#community"
              aria-label="Vai alla sezione community">
              Unisciti alla Community
            </TeeviButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
