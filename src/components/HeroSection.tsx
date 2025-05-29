import { TeeviButton } from "./buttons"

const HeroSection = () => {
  return (
    <section
      className={`relative py-32 pb-24 md:px-9 overflow-hidden`}
      aria-labelledby="hero-title">
      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        {/* Utilizziamo flex-col di default e flex-row su dispositivi lg e superiori */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          {/* Contenitore del testo - centrato su mobile, allineato a sinistra su desktop */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
            <span className="relative inline-block text-sm md:text-base text-text-muted font-mono mb-2">
              /ˈtiːvi/
              <span
                className="absolute bottom-2 left-0 w-full h-2 bg-accent-500/50 rounded blur-sm"
                aria-hidden="true"
              />
            </span>
            <h1
              id="hero-title"
              className="text-7xl md:text-8xl font-extrabold text-text-primary mb-4 font-display tracking-tight">
              Teevi
              <span
                className="absolute top-4 -right-6 w-6 h-6 bg-gradient-radial from-white to-primary-400/70 rounded-full animate-sparkle"
                aria-hidden="true"
              />
            </h1>

            <p className="text-xl md:text-2xl text-text-secondary mb-10 max-w-2xl font-display font-medium leading-relaxed">
              Tutto il tuo{" "}
              <span className="subtitle-highlight">intrattenimento</span>, come
              l'hai sempre desiderato su iPhone, iPad e Mac
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6 mb-16">
              <TeeviButton
                href="#download"
                aria-label="Scarica la Beta di Teevi">
                Scarica la Beta
              </TeeviButton>
              <TeeviButton
                href="#community"
                aria-label="Vai alla sezione community">
                Unisciti alla Community
              </TeeviButton>
            </div>
          </div>

          {/* Contenitore dell'immagine - occupa larghezza piena su mobile, metà su desktop */}
          <div className="relative w-full lg:w-1/2">
            <div className="absolute -inset-2 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-3xl blur-lg"></div>
            <div className="relative flex justify-center overflow-hidden rounded-2xl shadow-glow-purple">
              <img
                src="/images/teevi-app-mockup.svg"
                alt="Teevi App su iPhone e Mac"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
