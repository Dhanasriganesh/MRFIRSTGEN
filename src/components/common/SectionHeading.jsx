import AnimatedSection from './AnimatedSection'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignClass =
    align === 'center' ? 'text-center mx-auto' : align === 'right' ? 'text-right ml-auto' : 'text-left'

  return (
    <AnimatedSection className={`max-w-3xl mb-14 ${alignClass}`}>
      {eyebrow && (
        <span
          className={`inline-block text-xs font-semibold tracking-[0.25em] uppercase mb-4 ${
            light ? 'text-gold-400' : 'text-emerald-600'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base sm:text-lg leading-relaxed ${
            light ? 'text-white/70' : 'text-navy-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  )
}
