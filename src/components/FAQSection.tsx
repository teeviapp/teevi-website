import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"

const faqs = [
  {
    question: "Cos'è Teevi e come funziona?",
    answer:
      "Teevi è un'app a tutto tondo per l'intrattenimento, pensata per offrirti un'esperienza completa e personalizzata. Ti permette di scoprire e organizzare i tuoi contenuti preferiti, accedere a notizie e informazioni su film e serie TV, e trasmettere in streaming i tuoi media personali. Grazie al sistema di estensioni open-source e al supporto della community, Teevi supporta funzionalità aggiuntive come il tracking delle visioni, l'integrazione con servizi esterni e molto altro.",
  },
  {
    question: "Su quali dispositivi posso usare Teevi?",
    answer:
      "Teevi è compatibile con tutti i dispositivi Apple: iPhone, iPad e Mac. L'app è ottimizzata per offrire il meglio da ogni dispositivo, garantendo un'esperienza uniforme e integrata su tutto l'ecosistema.",
  },
  {
    question: "Come posso partecipare alla Beta?",
    answer:
      "Puoi richiedere l'accesso alla Beta cliccando sul pulsante 'Scarica la Beta' presente nella homepage.",
  },
  {
    question: "Teevi è gratuito?",
    answer:
      "Sì, Teevi è completamente gratuito e lo resterà. Al termine del periodo Beta, valuteremo l’introduzione di opzioni per supportare lo sviluppo continuo dell’app, ma le funzionalità di base rimarranno sempre accessibili gratuitamente per tutti gli utenti.",
  },
  {
    question: "Teevi supporta la pirateria?",
    answer:
      "No, Teevi è uno strumento neutro che non ospita, distribuisce né collega direttamente a contenuti protetti da copyright. L'unico uso lecito dell’app è l’accesso a contenuti per i quali l’utente ha i diritti di visione o possesso, come file personali legalmente acquistati o archiviati. Per questo motivo, Teevi integra il supporto a soluzioni self-hosted come Jellyfin, che consentono agli utenti di organizzare e trasmettere in streaming i propri contenuti in modo pienamente legale. Qualsiasi utilizzo improprio, inclusa la visione di contenuti protetti da copyright senza autorizzazione, viola i termini di utilizzo dell’app ed è responsabilità esclusiva dell’utente.",
  },
]

const FAQSection = () => {
  return (
    <section
      className="relative py-24 px-4 overflow-hidden"
      aria-labelledby="faq-title">
      <div className="relative z-10 container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            id="faq-title"
            className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-display">
            Domande Frequenti
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto font-display">
            Tutto quello che devi sapere su Teevi. Non trovi la risposta che
            cerchi? Contattaci sulla nostra community.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Disclosure key={index} as="div" className="group">
              <div className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-primary-400/30 hover:shadow-lg hover:shadow-primary-500/10">
                <DisclosureButton className="w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-inset transition-all duration-200 hover:bg-white/5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg md:text-xl font-semibold text-text-primary pr-8 font-display">
                      {faq.question}
                    </h3>
                  </div>
                </DisclosureButton>

                <DisclosurePanel>
                  <div className="px-6 pb-6 pt-0">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />
                    <p className="text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </DisclosurePanel>
              </div>
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
