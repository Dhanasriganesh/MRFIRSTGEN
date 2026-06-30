import { ArrowRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import Button from './Button'
import SafeImage from './SafeImage'
import { coaches } from '../../data/content'

export default function CoachesHighlight({ variant = 'dark' }) {
  const isDark = variant === 'dark'

  return (
    <div>
      <AnimatedSection className="text-center mb-12 max-w-2xl mx-auto">
        <p
          className={`text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${
            isDark ? 'text-emerald-400' : 'text-emerald-100'
          }`}
        >
          New Academy · Expert-Led
        </p>
        <h2
          className={`font-display text-3xl sm:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-white'
          }`}
        >
          Two Expert Coaches. One Clear Vision.
        </h2>
        <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-white/60' : 'text-white/80'}`}>
          MR FIRSTGEN is a new cricket academy in Hyderabad — built from the ground up with hands-on
          coaching from Murthy and Revanth on every session.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {coaches.map((coach, i) => (
          <AnimatedSection key={coach.name} delay={i * 0.12}>
            <div
              className={`rounded-3xl overflow-hidden h-full ${
                isDark
                  ? 'bg-white/5 border border-white/10'
                  : 'bg-white/10 border border-white/20'
              }`}
            >
              <div className="relative h-56 sm:h-64 bg-emerald-950 flex items-center justify-center p-8 sm:p-10">
                <SafeImage
                  src={coach.image}
                  alt={coach.name}
                  fallback={coach.image}
                  className="max-h-full max-w-full object-contain"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy-950/90 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="text-emerald-400 text-xs font-semibold tracking-wider uppercase">
                    {coach.specialty}
                  </p>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-2xl font-bold text-white">{coach.name}</h3>
                <p className="text-emerald-400 text-sm font-medium mt-1">{coach.role}</p>
                <p className="text-white/50 text-xs mt-1 mb-4">{coach.experience}</p>
                <p className="text-white/70 text-sm leading-relaxed">{coach.bio}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.25} className="text-center mt-10">
        <Button to="/coaching-staff" variant={isDark ? 'gold' : 'secondary'}>
          Meet the Coaching Staff
          <ArrowRight className="w-4 h-4" />
        </Button>
      </AnimatedSection>
    </div>
  )
}
