import { TeeviButton } from "./buttons"
import { ExtensionsIcon, GitHubIcon, TypeScriptIcon } from "./Icons"

const DeveloperSection = () => {
  return (
    <section id="developer" className="py-20" aria-labelledby="developer-title">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-background-card backdrop-blur-md border border-primary-500/20 rounded-xl p-8 sm:p-12 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <h2
              id="developer-title"
              className="text-3xl sm:text-4xl font-bold text-text-primary mb-6 font-display relative inline-block">
              Sviluppa con Teevi
              <span
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded"
                aria-hidden="true"
              />
            </h2>

            <p className="text-lg sm:text-xl text-text-secondary mb-8 max-w-2xl mx-auto font-display leading-relaxed">
              Il nostro kit di sviluppo per le estensioni è completamente open
              source. Crea nuove funzionalità e contribuisci a rendere Teevi
              ancora migliore.
            </p>

            <div className="bg-background-tertiary/50 border border-primary-500/10 rounded-lg p-6 sm:p-8 mb-8 max-w-2xl w-full mx-auto">
              <div className="flex flex-col items-start gap-6">
                <div className="w-full text-left">
                  <div className="flex items-center flex-wrap gap-3 mb-3">
                    <TypeScriptIcon className="text-primary-400" size={28} />
                    <h3 className="text-xl font-semibold text-primary-400 font-display">
                      Dev Kit per TypeScript
                    </h3>
                  </div>

                  <div className="bg-background-card/50 rounded-lg p-3 mb-4 border border-primary-500/10 overflow-x-auto">
                    <code className="text-xs text-accent-400 font-mono block whitespace-pre">
                      <span className="text-primary-300">import</span> {"{"}
                      <span className="text-accent-300"> TeeviExtension </span>
                      {"}"} <span className="text-primary-300">from</span>{" "}
                      <span className="text-green-400">"@teeviapp/core"</span>;
                    </code>
                  </div>

                  <ul className="text-text-secondary/90 text-sm space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2 flex-shrink-0">
                        ✓
                      </span>
                      <span>API TypeScript</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2 flex-shrink-0">
                        ✓
                      </span>
                      <span>Documentazione completa con esempi</span>
                    </li>
                  </ul>
                </div>

                <div className="w-full flex justify-center sm:justify-start">
                  <TeeviButton
                    href="https://github.com/teeviapp/teevi-ts"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visita il repository GitHub dell'Extension SDK (si apre in una nuova finestra)">
                    <span className="flex items-center gap-2">
                      <GitHubIcon className="text-white" size={20} />
                      GitHub
                    </span>
                  </TeeviButton>
                </div>
              </div>
            </div>

            <p className="text-sm text-text-secondary/70 mt-4">
              Rilasciato sotto licenza MIT. Contributi e feedback dalla
              community sono sempre benvenuti.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeveloperSection
