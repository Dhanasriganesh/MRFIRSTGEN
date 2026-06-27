import { Award, GraduationCap, Users } from 'lucide-react'
import PageHero from '../common/PageHero'
import SectionHeading from '../common/SectionHeading'
import AnimatedSection from '../common/AnimatedSection'
import Button from '../common/Button'
import { coaches, supportStaff } from '../../data/content'
import images from '../../data/images'
import SafeImage from '../common/SafeImage'

function CoachingStaff() {
  const headCoach = coaches.find((c) => c.featured)
  const otherCoaches = coaches.filter((c) => !c.featured)

  return (
    <main>
      <PageHero
        title="Meet Our Expert Coaches"
        subtitle="A world-class team of certified professionals dedicated to unlocking every player's potential."
        image={images.hero.coaching}
        breadcrumb="Coaching Staff"
      />

      {/* Head Coach Spotlight */}
      {headCoach && (
        <section className="section-padding bg-white">
          <div className="container-premium">
            <SectionHeading
              eyebrow="Leadership"
              title="Head Coach Spotlight"
              subtitle="The visionary behind MR FIRSTGEN's coaching philosophy and player development framework."
            />

            <AnimatedSection>
              <div className="grid lg:grid-cols-2 gap-12 items-center bg-emerald-900 rounded-3xl overflow-hidden">
                <div className="relative h-80 lg:h-auto lg:min-h-[480px]">
                  <SafeImage
                    src={headCoach.image}
                    alt={headCoach.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-950/30 lg:bg-none" />
                </div>
                <div className="p-8 lg:p-12">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-4">
                    <Award className="w-3.5 h-3.5" />
                    Head Coach
                  </span>
                  <h3 className="font-display text-3xl font-bold text-white mb-2">{headCoach.name}</h3>
                  <p className="text-emerald-400 font-medium mb-1">{headCoach.role}</p>
                  <p className="text-white/50 text-sm mb-6">{headCoach.experience}</p>
                  <p className="text-white/70 leading-relaxed mb-6">{headCoach.bio}</p>
                  <div className="flex items-center gap-3 text-white/60 text-sm">
                    <GraduationCap className="w-4 h-4 text-emerald-400" />
                    Specialty: {headCoach.specialty}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* All Coaches */}
      <section className="section-padding bg-emerald-50/70">
        <div className="container-premium">
          <SectionHeading
            eyebrow="The Team"
            title="Our Coaching Panel"
            subtitle="Specialized experts covering every aspect of modern cricket development."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherCoaches.map((coach, i) => (
              <AnimatedSection key={coach.name} delay={i * 0.1}>
                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-navy-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                  <div className="relative h-72 overflow-hidden">
                    <SafeImage
                      src={coach.image}
                      alt={coach.name}
                      className="w-full h-full object-cover img-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-emerald-400 text-xs font-semibold tracking-wider uppercase">
                        {coach.specialty}
                      </p>
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-xl font-bold text-navy-900">{coach.name}</h3>
                    <p className="text-emerald-600 text-sm font-medium mt-1">{coach.role}</p>
                    <p className="text-navy-400 text-xs mt-1 mb-4">{coach.experience}</p>
                    <p className="text-navy-600 text-sm leading-relaxed">{coach.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="section-padding bg-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,160,23,0.06),transparent_50%)]" />
        <div className="relative container-premium grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="Philosophy"
              title="How We Coach"
              subtitle="Our methodology blends traditional cricket wisdom with modern sports science."
              align="left"
              light
            />
            <AnimatedSection delay={0.15}>
              <ul className="space-y-5">
                {[
                  'Individual skill assessments every quarter with personalized development plans',
                  'Video analysis sessions to identify and correct technical flaws',
                  'Match simulation drills that replicate real-game pressure scenarios',
                  'Mental conditioning workshops for focus, resilience, and decision-making',
                  'Age-appropriate fitness programs designed by certified sports scientists',
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-white/70 text-sm leading-relaxed">
                    <span className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0 font-display font-bold text-sm">
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

      {/* Support Staff */}
      <section className="section-padding bg-white">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Behind the Scenes"
            title="Support Staff"
            subtitle="The dedicated professionals who ensure every player has the resources to succeed."
          />

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {supportStaff.map((staff, i) => (
              <AnimatedSection key={staff.name} delay={i * 0.1}>
                <div className="text-center p-8 rounded-2xl bg-emerald-50/70 border border-navy-100">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-navy-900">{staff.name}</h3>
                  <p className="text-navy-500 text-sm mt-1">{staff.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-emerald-600 text-center">
        <div className="container-premium max-w-2xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white mb-5">
              Train with the Best
            </h2>
            <p className="text-white/80 mb-8">
              Experience world-class coaching firsthand. Register for a complimentary trial session.
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
