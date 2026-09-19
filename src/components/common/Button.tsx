import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'whatsapp' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: ReactNode
  className?: string
  href?: string
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className'>

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'button--primary',
  secondary: 'button--secondary',
  whatsapp: 'button--whatsapp',
  ghost: 'button--ghost',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'button--sm',
  md: 'button--md',
  lg: 'button--lg',
}

export function Button({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  icon,
  href,
  className = '',
  ...props
}: ButtonProps) {
  const classes =
    `button ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim()
  const content = (
    <>
      {icon ? (
        <span className="button__icon" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      <span>{children}</span>
    </>
  )

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      className={classes}
      type={type}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  )
}
