import logoLight from '../../assets/image.png'
import logoDark from '../../assets/MR-logo.png'

export default function Logo({ variant = 'light', className = 'h-10 w-auto' }) {
  const src = variant === 'dark' ? logoDark : logoLight

  return (
    <img
      src={src}
      alt="MR FIRSTGEN Cricket Academy"
      className={`${className} object-contain object-left`}
    />
  )
}
