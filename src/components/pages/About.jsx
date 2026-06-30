import { Target, Eye, Quote } from 'lucide-react'
import PageHero from '../common/PageHero'
import SectionHeading from '../common/SectionHeading'
import AnimatedSection from '../common/AnimatedSection'
import DynamicIcon from '../common/DynamicIcon'
import CoachesHighlight from '../common/CoachesHighlight'
import Button from '../common/Button'
import { aboutTimeline, coreValues, academyInfo } from '../../data/content'
import images from '../../data/images'
import SafeImage from '../common/SafeImage'

function About() {
  return (
    <main>
      <PageHero
        title="A New Academy with Expert Coaching"
        subtitle="Murthy and Revanth founded MR FIRSTGEN to give Hyderabad's young cricketers quality coaching from day one."
        image={images.hero.about}
        breadcrumb="About Us"
      />

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-premium grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <SafeImage
              src={images.about.story}
              alt="Academy training"
              className="rounded-3xl w-full h-[480px] object-cover shadow-2xl"
            />
          </AnimatedSection>
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Built on Coaching, Not Hype"
              align="left"
            />
            <AnimatedSection delay={0.15}>
              <div className="space-y-5 text-navy-600 leading-relaxed">
                <p>
                  {academyInfo.fullName} is a new cricket academy in Hyderabad — founded by expert
                  coaches Murthy and Revanth with one clear purpose: give every player access to
                  structured, high-quality coaching from the very beginning.
                </p>
                <p>
                  We are not built on big numbers or old trophies. We are built on daily sessions,
                  personal attention, and a commitment to helping each player grow in technique,
                  fitness, and confidence on the field.
                </p>
                <p>
                  Whether a child is picking up a bat for the first time or preparing for competitive
                  cricket, Murthy and Revanth lead the training personally — with patience, discipline,
                  and a genuine investment in every player's journey.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06),transparent_70%)]" />
        <div className="relative container-premium">
          <SectionHeading
            eyebrow="Purpose"
            title="Mission & Vision"
            subtitle="The principles that guide every session, every drill, and every player interaction."
            light
          />

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="glass-card rounded-3xl p-10 h-full">
                <div className="w-14 h-14 rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/65 leading-relaxed">
                  To nurture cricket talent through expert coaching, structured training, and a
                  supportive environment — helping every player build skills, discipline, and
                  confidence on and off the field.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="glass-card rounded-3xl p-10 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/65 leading-relaxed">
                  To become a trusted name in Hyderabad cricket — known for quality coaching,
                  honest development, and players who grow with strong fundamentals and the right
                  mindset for the game.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-emerald-50/70">
        <div className="container-premium">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Core Values"
            subtitle="The principles embedded in everything we do at MR FIRSTGEN."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center h-full border border-navy-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-5">
                    <DynamicIcon name={value.icon} className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy-900 mb-3">{value.title}</h3>
                  <p className="text-navy-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Our Journey"
            title="Where We Are Today"
            subtitle="A new academy with a clear path forward — growing one player at a time."
          />

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-emerald-200 hidden sm:block" />
            <div className="space-y-10">
              {aboutTimeline.map((item, i) => (
                <AnimatedSection key={`${item.year}-${item.title}`} delay={i * 0.1}>
                  <div className="flex gap-8 items-start">
                    <div className="hidden sm:flex w-16 h-16 rounded-full bg-emerald-600 text-white font-display font-bold items-center justify-center shrink-0 relative z-10 shadow-lg shadow-emerald-600/30 text-sm px-1 text-center leading-tight">
                      {item.year.length > 4 ? item.year : item.year.slice(2)}
                    </div>
                    <div className="bg-emerald-50/70 rounded-2xl p-7 flex-1 border border-navy-100">
                      <span className="sm:hidden text-emerald-600 font-display font-bold text-sm">
                        {item.year}
                      </span>
                      <h3 className="font-display text-xl font-bold text-navy-900 mt-1 sm:mt-0 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-navy-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders Message */}
      <section className="section-padding bg-emerald-800">
        <div className="container-premium grid lg:grid-cols-5 gap-12 items-center">
          <AnimatedSection className="lg:col-span-2">
            <SafeImage
              src={images.about.founder}
              alt="Murthy and Revanth"
              className="rounded-3xl w-full h-96 object-cover shadow-2xl"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="lg:col-span-3">
            <Quote className="w-10 h-10 text-emerald-500 mb-6" />
            <blockquote className="font-display text-2xl sm:text-3xl font-medium text-white leading-relaxed mb-8">
              "We started MR FIRSTGEN because we believe every player deserves real coaching — not
              crowded batches or empty promises. Our goal is simple: help each cricketer grow with
              discipline, technique, and confidence."
            </blockquote>
            <div>
              <p className="font-semibold text-white">Murthy & Revanth</p>
              <p className="text-emerald-400 text-sm">Expert Coaches</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Expert Coaches */}
      <section className="section-padding bg-emerald-600 relative overflow-hidden">
        <div className="container-premium">
          <CoachesHighlight variant="light" />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container-premium max-w-2xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-5">
              Be Part of Our Story
            </h2>
            <p className="text-navy-600 mb-8">
              Join MR FIRSTGEN early and train under Murthy and Revanth from the start.
            </p>
            <Button to="/interested" variant="primary">
              Register Your Interest
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}

export default About
