import React from "react"
import {
  ModernUIIcon,
  ExtensionsIcon,
  PrivacyIcon,
  TrackingIcon,
} from "./Icons"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureCard = ({ feature }: { feature: Feature }) => (
  <article
    className="group relative p-8 bg-background-card backdrop-blur-md border border-primary-500/20 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary-500/40 overflow-hidden"
    data-animate>
    {/* Hover gradient overlay */}
    <div
      className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      aria-hidden="true"
    />

    <div className="relative z-10">
      <div className="mb-5">
        <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl text-text-primary transition-all duration-300 group-hover:scale-105 shadow-glow-purple">
          {feature.icon}
        </div>
      </div>

      <h3 className="text-xl font-semibold text-text-primary mb-4 font-display relative">
        {feature.title}
        <span
          className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded transition-all duration-300 group-hover:w-15"
          aria-hidden="true"
        />
      </h3>

      <p className="text-text-secondary leading-relaxed">
        {feature.description}
      </p>
    </div>
  </article>
)

const FeaturesSection = () => {
  const features: Feature[] = [
    {
      icon: <ModernUIIcon className="w-6 h-6" />,
      title: "Interfaccia Nativa",
      description:
        "Esplora un’interfaccia moderna, progettata per offrirti la massima fluidità su ogni dispositivo.",
    },
    {
      icon: <ExtensionsIcon className="w-6 h-6" />,
      title: "Estensioni",
      description:
        "Personalizza Teevi con estensioni su misura e aggiungi funzionalità che rendono davvero tua l’esperienza.",
    },
    {
      icon: <PrivacyIcon className="w-6 h-6" />,
      title: "Privacy garantita",
      description:
        "Nessun tracciamento, nessuna raccolta dati: proteggiamo la tua privacy in ogni momento.",
    },
    {
      icon: <TrackingIcon className="w-6 h-6" />,
      title: "Tracciamento dei progressi",
      description:
        "Tieni traccia dei tuoi progressi in modo semplice e riprendi da dove hai lasciato.",
    },
  ]

  return (
    <section className={`py-16`} aria-labelledby="features-title">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
