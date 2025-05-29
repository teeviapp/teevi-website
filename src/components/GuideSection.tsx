interface GuideStep {
  number: string
  title: string
  description: string
  steps: string[]
}

const GuideStepCard = ({ step }: { step: GuideStep }) => {
  return (
    <article className="relative pl-12" data-animate>
      <span
        className="absolute -left-4 -top-4 text-6xl sm:text-6xl font-bold text-primary-500/15 font-display leading-none z-0"
        aria-hidden="true">
        {step.number}
      </span>

      <div className="relative z-10">
        <h3 className="text-2xl font-semibold text-primary-400 mb-4 font-display">
          {step.title}
        </h3>

        <p className="text-text-secondary mb-5 leading-relaxed">
          {step.description}
        </p>

        <ol className="space-y-4" role="list">
          {step.steps.map((stepText, stepIndex) => (
            <li
              key={stepIndex}
              className="flex items-start text-text-secondary">
              <span
                className="text-primary-400 font-semibold text-lg mr-3 mt-0.5"
                aria-hidden="true">
                →
              </span>
              <span className="leading-relaxed">{stepText}</span>
            </li>
          ))}
        </ol>
      </div>
    </article>
  )
}

const GuideSection = () => {
  const guideSteps: GuideStep[] = [
    {
      number: "01",
      title: "Configurazione delle Estensioni",
      description:
        "Imposta le estensioni per accedere ai contenuti in modo semplice ed efficace:",
      steps: [
        "Apri la sezione Estensioni nell'applicazione",
        "Personalizza le estensioni preinstallate, come quella per il supporto a Jellyfin",
        'Per installare le estensioni sviluppate dalla community, clicca sull\'icona "+"',
        "Incolla l'URL dell'estensione nel campo dedicato",
      ],
    },
    {
      number: "02",
      title: "Utilizzo dell'App",
      description:
        "Con le estensioni attivate, scopri tutte le funzionalità di Teevi:",
      steps: [
        "Utilizza la funzione di ricerca per trovare i tuoi spettacoli preferiti",
        "Esplora la Home per scoprire contenuti consigliati dalle estensioni",
      ],
    },
  ]

  return (
    <section id="guida" className={`py-20`} aria-labelledby="guide-title">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2
          id="guide-title"
          className="text-3xl sm:text-4xl font-bold text-text-primary text-center mb-10 font-display relative">
          Guida Rapida
          <span
            className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded"
            aria-hidden="true"
          />
        </h2>

        <div className="bg-background-card backdrop-blur-md border border-primary-500/20 rounded-xl p-12 shadow-lg">
          <div className="space-y-12">
            {guideSteps.map((step, index) => (
              <GuideStepCard key={index} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GuideSection
