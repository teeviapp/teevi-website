import { TeeviButton } from "./buttons"
import teeviAppMockup from "../assets/images/teevi-app-showcase-ios.png?url"

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
                kind="primary"
                href="#download"
                aria-label="Scarica la Beta di Teevi">
                Scarica la Beta
              </TeeviButton>
              <TeeviButton
                kind="primary"
                href="#community"
                aria-label="Vai alla sezione community">
                Unisciti alla Community
              </TeeviButton>
            </div>
          </div>

          {/* Contenitore dell'immagine dell'app - mostrato dopo il testo su mobile, affiancato su desktop */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end items-center">
            <div className="relative">
              {/* Effetto glow sottile e statico attorno all'immagine */}
              <div
                className="absolute -inset-3 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-[2.5rem] blur-xl opacity-60"
                aria-hidden="true"></div>

              {/* Pattern decorativo dietro l'app per aggiungere profondità */}
              <div
                className="absolute -inset-8 z-0 opacity-20"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "15px 15px",
                }}></div>

              {/* Contenitore dell'immagine con bordo e effetti */}
              <div className="relative z-10 bg-background-card/80 backdrop-blur-xl border border-primary-500/40 rounded-[2rem] p-5 shadow-lg overflow-hidden">
                {/* Piccoli elementi decorativi per simulare i controlli di un dispositivo */}
                <div
                  className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white/20 rounded-full"
                  aria-hidden="true"></div>

                <img
                  src={teeviAppMockup}
                  alt="Teevi App su iPhone"
                  className="w-auto h-auto max-h-[550px] drop-shadow-xl"
                  width="300"
                  height="600"
                  loading="eager"
                />

                {/* Riflessi stilizzati sull'immagine per un aspetto premium */}
                <div
                  className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-white/10 to-transparent rounded-t-[2rem]"
                  aria-hidden="true"></div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-primary-500/20 to-transparent rounded-b-[2rem]"
                  aria-hidden="true"></div>
              </div>

              {/* Elementi decorativi per creare profondità */}
              <div
                className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent-500/10 rounded-full blur-xl"
                aria-hidden="true"></div>
              <div
                className="absolute -top-4 -left-4 w-20 h-20 bg-primary-500/10 rounded-full blur-xl"
                aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
