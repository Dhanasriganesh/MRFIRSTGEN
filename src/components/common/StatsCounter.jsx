import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import AnimatedSection from './AnimatedSection'

export default function StatsCounter({ stats }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
      {stats.map((stat, i) => (
        <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
          <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            {inView ? (
              <CountUp end={stat.value} duration={2.5} suffix={stat.suffix || ''} />
            ) : (
              `0${stat.suffix || ''}`
            )}
          </div>
          <p className="mt-2 text-sm sm:text-base text-white/60 font-medium tracking-wide uppercase">
            {stat.label}
          </p>
        </AnimatedSection>
      ))}
    </div>
  )
}
