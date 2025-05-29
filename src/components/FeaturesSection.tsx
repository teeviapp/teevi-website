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
        "Sperimenta un'interfaccia fluida e moderna che si adatta perfettamente a ogni dispositivo, offrendoti la miglior esperienza possibile.",
    },
    {
      icon: <PrivacyIcon className="w-6 h-6" />,
      title: "Protezione della Privacy",
      description:
        "Teevi non sa nulla di ciò che fai. Goditi la massima sicurezza senza tracciamenti o raccolte dati: la tua privacy è la nostra priorità.",
    },
    {
      icon: <ExtensionsIcon className="w-6 h-6" />,
      title: "Estensioni",
      description:
        "Espandi le tue possibilità con estensioni personalizzate che aggiungono funzionalità extra, rendendo la tua esperienza su Teevi davvero unica.",
    },
    {
      icon: <TrackingIcon className="w-6 h-6" />,
      title: "Tracciamento dei progressi",
      description:
        "Monitora i tuoi progressi in modo intuitivo grazie a sistemi integrati che operano nel rispetto totale della tua privacy.",
    },
  ]

  return (
    <section className={`py-16`} aria-labelledby="features-title">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2
            id="features-title"
            className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-display">
            Funzionalità Innovative
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Scopri le caratteristiche che rendono Teevi la scelta perfetta per
            il tuo intrattenimento
          </p>
        </div>

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
