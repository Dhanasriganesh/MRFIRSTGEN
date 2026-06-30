import { Award, GraduationCap } from 'lucide-react'
import PageHero from '../common/PageHero'
import SectionHeading from '../common/SectionHeading'
import AnimatedSection from '../common/AnimatedSection'
import Button from '../common/Button'
import SafeImage from '../common/SafeImage'
import { coaches } from '../../data/content'
import images from '../../data/images'

function CoachingStaff() {
  return (
    <main>
      <PageHero
        title="Meet Murthy & Revanth"
        subtitle="Two expert coaches leading MR FIRSTGEN — hands-on training, structured programs, and personal attention for every player."
        image={images.hero.coaching}
        breadcrumb="Coaching Staff"
      />

      {/* Expert Coaches */}
      <section className="section-padding bg-white">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Our Coaches"
            title="Expert Coaching, From Day One"
            subtitle="MR FIRSTGEN is built around two experienced coaches who lead sessions personally and stay involved in every player's progress."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {coaches.map((coach, i) => (
              <AnimatedSection key={coach.name} delay={i * 0.12}>
                <div className="bg-emerald-900 rounded-3xl overflow-hidden h-full">
                  <div className="relative h-80 lg:h-96 bg-emerald-950 flex items-center justify-center p-10 lg:p-14">
                    <SafeImage
                      src={coach.image}
                      alt={coach.name}
                      fallback={coach.image}
                      className="max-h-full max-w-full object-contain"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950/90 to-transparent pointer-events-none" />
                  </div>
                  <div className="p-8 lg:p-10">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-4">
                      <Award className="w-3.5 h-3.5" />
                      Expert Coach
                    </span>
                    <h3 className="font-display text-3xl font-bold text-white mb-2">{coach.name}</h3>
                    <p className="text-emerald-400 font-medium mb-1">{coach.role}</p>
                    <p className="text-white/50 text-sm mb-6">{coach.experience}</p>
                    <p className="text-white/70 leading-relaxed mb-6">{coach.bio}</p>
                    <div className="flex items-center gap-3 text-white/60 text-sm">
                      <GraduationCap className="w-4 h-4 text-emerald-400" />
                      Specialty: {coach.specialty}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="section-padding bg-emerald-50/70">
        <div className="container-premium grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="Philosophy"
              title="How We Coach"
              subtitle="Focused batches, clear feedback, and training that builds real match skills — not inflated promises."
              align="left"
            />
            <AnimatedSection delay={0.15}>
              <ul className="space-y-5">
                {[
                  'Hands-on coaching from Murthy and Revanth in every session',
                  'Fundamentals first — grip, stance, footwork, and game awareness',
                  'Bowling, batting, fielding, and match-simulation drills',
                  'Age-appropriate programs with attention to each player',
                  'Discipline, confidence, and love for the game together',
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-navy-600 text-sm leading-relaxed">
                    <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 font-display font-bold text-sm">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
          <AnimatedSection direction="left">
            <SafeImage
              src={images.coaching.session}
              alt="Coaching session"
              className="rounded-3xl w-full h-96 object-cover shadow-2xl"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-emerald-600 text-center">
        <div className="container-premium max-w-2xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white mb-5">
              Train with Murthy & Revanth
            </h2>
            <p className="text-white/80 mb-8">
              Experience expert coaching firsthand. Register for a complimentary trial session.
            </p>
            <Button to="/interested" variant="gold">
              Book a Trial Session
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}

export default CoachingStaff
