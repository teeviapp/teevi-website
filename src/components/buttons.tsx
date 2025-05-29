import { Button } from "@headlessui/react"

interface BaseTeeviButtonProps {
  children: React.ReactNode
  kind: "primary" | "text"
}

interface AnchorProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children">,
    BaseTeeviButtonProps {
  href: string
}

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">,
    BaseTeeviButtonProps {
  href?: undefined
}

type TeeviButtonProps = AnchorProps | ButtonProps

export const TeeviButton = ({
  children,
  kind = "primary",
  ...props
}: TeeviButtonProps) => {
  const Component = props.href ? "a" : "button"
  const { type, ...rest } = props
  const extraProps = Component === "button" ? { type: type ?? "button" } : {}

  const containerVariants = {
    primary:
      "px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-primary-400/40 text-text-primary font-semibold rounded-2xl transition-all duration-400 hover:-translate-y-2 hover:border-primary-400 hover:bg-white/15 shadow-glow-purple relative overflow-hidden group focus:outline-none focus:ring-4 focus:ring-primary-500/50",
    text: "text-text-secondary font-medium transition-all duration-200 hover:text-primary-400 relative group focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-background-primary rounded-md px-2 py-1",
  }

  return (
    <Button
      as={Component}
      {...(Component === "a" ? rest : { ...rest, ...extraProps })}
      className={containerVariants[kind]}>
      {/* Decorative gradient overlay */}
      {kind === "primary" && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-bottom"
          aria-hidden="true"
        />
      )}

      <span className="relative z-10">{children}</span>

      {kind === "text" && (
        <span
          className="absolute -bottom-1 left-2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-300 group-hover:w-[calc(100%-1rem)]"
          aria-hidden="true"
        />
      )}
    </Button>
  )
}
