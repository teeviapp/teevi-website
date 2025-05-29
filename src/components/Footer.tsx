import React from "react"
import { TeeviButton } from "./buttons"

interface FooterLinkProps {
  href: string
  children: React.ReactNode
  external?: boolean
}

const FooterLink = ({ href, children, external = false }: FooterLinkProps) => {
  return (
    <TeeviButton
      kind="text"
      href={href}
      {...(external && {
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `${children} (si apre in una nuova finestra)`,
      })}>
      {children}
    </TeeviButton>
  )
}

const Footer = () => {
  return (
    <footer
      className="mt-20 pt-16 pb-12 border-t border-primary-500/20 bg-background-card/80 backdrop-blur-md"
      role="contentinfo">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Logo e Navigation */}
        <div className="flex flex-col items-center mb-12">
          <nav
            className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4"
            aria-label="Link del footer">
            <FooterLink href="#guida">Guida</FooterLink>
            <FooterLink href="#developer">Sviluppa</FooterLink>
            <FooterLink href="https://github.com/teeviapp" external>
              GitHub
            </FooterLink>
            <FooterLink href="mailto:contact@teevi.app" external>
              Contattaci
            </FooterLink>
          </nav>
        </div>

        {/* Copyright e Legal */}
        <div className="border-t border-primary-500/10 pt-8">
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="text-text-secondary text-sm">
              Copyright © 2025 Teevi.
              <span className="mx-2 text-primary-500/40">•</span>
              <a
                href="mailto:contact@teevi.app"
                className="text-primary-500 hover:text-primary-400 transition-colors duration-200"
                aria-label="Invia un'email a contact@teevi.app">
                contact@teevi.app
              </a>
            </p>
            <p className="text-text-tertiary text-xs max-w-2xl leading-relaxed">
              Apple, iPhone, iPad, Mac e App Store sono marchi di Apple Inc.,
              registrati negli Stati Uniti e in altri paesi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
