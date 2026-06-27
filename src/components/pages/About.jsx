import { Target, Eye, Quote } from 'lucide-react'
import PageHero from '../common/PageHero'
import SectionHeading from '../common/SectionHeading'
import AnimatedSection from '../common/AnimatedSection'
import DynamicIcon from '../common/DynamicIcon'
import StatsCounter from '../common/StatsCounter'
import Button from '../common/Button'
import { aboutTimeline, coreValues, stats, academyInfo } from '../../data/content'
import images from '../../data/images'
import SafeImage from '../common/SafeImage'

function About() {
  return (
    <main>
      <PageHero
        title="Our Story of Passion & Excellence"
        subtitle="Discover the vision, values, and journey behind Hyderabad's most trusted cricket academy."
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
              title="From One Wicket to a Legacy"
              align="left"
            />
            <AnimatedSection delay={0.15}>
              <div className="space-y-5 text-navy-600 leading-relaxed">
                <p>
                  {academyInfo.fullName} was born in 2013 from a simple belief: every child with a
                  dream deserves access to world-class cricket coaching. What started as a single turf
                  wicket and a handful of passionate coaches has evolved into a comprehensive cricket
                  development ecosystem.
                </p>
                <p>
                  Over 12 years, we've trained 850+ players, celebrated 45+ tournament victories,
                  and watched with pride as our alumni progressed to district, state, and national
                  levels. Our success isn't measured in trophies alone — it's in the confidence,
                  discipline, and character we instill in every player.
                </p>
                <p>
                  Today, MR FIRSTGEN stands as a beacon of excellence in Hyderabad's sporting
                  landscape, continuously innovating with sports science, video analytics, and
                  personalized development pathways.
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
                  To identify, nurture, and develop cricket talent through professional coaching,
                  modern facilities, and a supportive environment — empowering every player to reach
                  their full potential on and off the field.
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
                  To be India's most respected cricket academy — recognized for producing technically
                  excellent, mentally strong, and ethically grounded cricketers who represent the
                  nation with pride.
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
            subtitle="The non-negotiable principles embedded in our academy's DNA."
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
            title="Milestones That Define Us"
            subtitle="Key moments in our evolution from a startup academy to a cricketing institution."
          />

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-emerald-200 hidden sm:block" />
            <div className="space-y-10">
              {aboutTimeline.map((item, i) => (
                <AnimatedSection key={item.year} delay={i * 0.1}>
                  <div className="flex gap-8 items-start">
                    <div className="hidden sm:flex w-16 h-16 rounded-full bg-emerald-600 text-white font-display font-bold items-center justify-center shrink-0 relative z-10 shadow-lg shadow-emerald-600/30">
                      {item.year.slice(2)}
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

      {/* Founder Message */}
      <section className="section-padding bg-emerald-800">
        <div className="container-premium grid lg:grid-cols-5 gap-12 items-center">
          <AnimatedSection className="lg:col-span-2">
            <SafeImage
              src={images.about.founder}
              alt="Founder"
              className="rounded-3xl w-full h-96 object-cover shadow-2xl"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="lg:col-span-3">
            <Quote className="w-10 h-10 text-emerald-500 mb-6" />
            <blockquote className="font-display text-2xl sm:text-3xl font-medium text-white leading-relaxed mb-8">
              "Cricket taught me that talent alone isn't enough — it's discipline, dedication, and
              the right guidance that transforms potential into performance. MR FIRSTGEN exists to
              provide that guidance to every aspiring cricketer."
            </blockquote>
            <div>
              <p className="font-semibold text-white">Coach Rajesh Kumar</p>
              <p className="text-emerald-400 text-sm">Founder & Head Coach</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-emerald-600">
        <div className="container-premium">
          <StatsCounter stats={stats} />
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
              Join the MR FIRSTGEN family and write your own chapter of cricketing success.
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
