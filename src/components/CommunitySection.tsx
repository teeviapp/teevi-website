import { TeeviButton } from "./buttons"
import { TelegramIcon } from "./Icons"

const CommunitySection = () => {
  return (
    <section id="community" className="py-20" aria-labelledby="community-title">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-background-card backdrop-blur-md border border-primary-500/20 rounded-xl p-8 sm:p-12 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <h2
              id="community-title"
              className="text-3xl sm:text-4xl font-bold text-text-primary mb-6 font-display relative inline-block">
              Unisciti alla Community
              <span
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded"
                aria-hidden="true"
              />
            </h2>

            <p className="text-lg sm:text-xl text-text-secondary mb-8 max-w-2xl mx-auto font-display leading-relaxed">
              Per supporto, suggerimenti e aggiornamenti, unisciti al nostro
              canale Telegram.
            </p>

            <div className="flex justify-center mb-8">
              <TeeviButton
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Unisciti al canale Telegram di Teevi (si apre in una nuova finestra)">
                <span className="flex items-center gap-2">
                  <TelegramIcon
                    className="text-[#0088cc] inline-block"
                    size={24}
                  />
                  Telegram
                </span>
              </TeeviButton>
            </div>

            <p className="text-sm text-text-secondary/70 mt-4">
              Resta aggiornato sulle nuove funzionalità e aiutaci a migliorare
              Teevi.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunitySection
