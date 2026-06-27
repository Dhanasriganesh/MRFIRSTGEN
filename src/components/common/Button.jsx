import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/25',
  secondary:
    'bg-white text-emerald-800 border border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300',
  outline:
    'bg-transparent text-emerald-700 border-2 border-emerald-600 hover:bg-emerald-600 hover:text-white',
  gold: 'bg-gold-500 text-white hover:bg-gold-400 shadow-lg shadow-gold-500/25',
}

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  className = '',
  type = 'button',
  onClick,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer'

  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
