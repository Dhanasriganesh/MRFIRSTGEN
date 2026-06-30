import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  ChevronRight,
  QrCode,
} from 'lucide-react'
import AnimatedSection, { FadeIn } from '../common/AnimatedSection'
import SectionHeading from '../common/SectionHeading'
import CoachesHighlight from '../common/CoachesHighlight'
import Button from '../common/Button'
import DynamicIcon from '../common/DynamicIcon'
import EnrollmentQR from '../qr/EnrollmentQR'
import SafeImage from '../common/SafeImage'
import images from '../../data/images'
import {
  programs,
  whyChooseUs,
  facilities,
  testimonials,
  achievements,
  academyInfo,
} from '../../data/content'

function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <SafeImage
            src={images.hero.home}
            alt="Cricket academy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(16,185,129,0.08),transparent_55%)]" />
        </div>

        <div className="relative container-premium pt-36 pb-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-white/82 backdrop-blur-sm rounded-3xl shadow-lg shadow-emerald-900/5 border border-white/90" aria-hidden="true" />
            <div className="relative p-8 sm:p-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-semibold tracking-widest uppercase mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Hyderabad's New Cricket Academy
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-emerald-950 leading-[1.05] tracking-tight"
            >
              Where{' '}
              <span className="text-gradient-gold">Champions</span>
              <br />
              Are Forged
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg text-emerald-900/75 max-w-lg leading-relaxed"
            >
              {academyInfo.fullName} — a new academy in Hyderabad with expert coaching from Murthy
              and Revanth, structured programs, and a focus on every player's development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button to="/interested" variant="gold">
                Join the Academy
                <ArrowUpRight className="w-4 h-4" />
              </Button>
              <Button to="/about" variant="secondary">
                <Play className="w-4 h-4" />
                Our Story
              </Button>
            </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="hidden lg:flex flex-col items-center"
          >
            <div className="bg-white/95 border border-emerald-100 rounded-3xl p-8 text-center animate-float shadow-xl shadow-emerald-900/10">
              <div className="flex items-center justify-center gap-2 text-emerald-600 mb-4">
                <QrCode className="w-5 h-5" />
                <span className="text-xs font-semibold tracking-widest uppercase">Scan to Enroll</span>
              </div>
              <EnrollmentQR showDownload={false} size={180} />
              <p className="mt-4 text-emerald-800/60 text-sm">
                Scan this QR on our banner to register your interest instantly
              </p>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-emerald-800/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-10 bg-gradient-to-b from-emerald-600/40 to-transparent"
          />
        </div>
      </section>

      {/* Achievements Marquee */}
      <section className="bg-emerald-600 py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...achievements, ...achievements].map((item, i) => (
            <span key={i} className="mx-8 text-white font-medium text-sm flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Expert Coaches */}
      <section className="bg-navy-900 section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06),transparent_70%)]" />
        <div className="relative container-premium">
          <CoachesHighlight />
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-white">
        <div className="container-premium grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="right" className="relative">
            <div className="grid grid-cols-2 gap-4">
              <SafeImage
                src={images.home.training}
                alt="Cricket training"
                className="rounded-2xl w-full h-64 object-cover shadow-xl"
              />
              <SafeImage
                src={images.home.stadium}
                alt="Cricket stadium"
                className="rounded-2xl w-full h-64 object-cover shadow-xl mt-8"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 lg:right-8 bg-emerald-600 text-white rounded-2xl p-6 shadow-2xl shadow-emerald-600/30">
              <p className="font-display text-4xl font-bold">2</p>
              <p className="text-sm text-white/80 mt-1">Expert Coaches</p>
            </div>
          </AnimatedSection>

          <div>
            <SectionHeading
              eyebrow="About Us"
              title="Building Future Cricket Stars"
              subtitle="A new academy in Hyderabad — founded by Murthy and Revanth to give every player expert coaching, structured training, and room to grow."
              align="left"
            />
            <AnimatedSection delay={0.2}>
              <p className="text-navy-600 leading-relaxed mb-8">
                At MR FIRSTGEN, we believe every player deserves access to professional-grade
                coaching regardless of their starting point. Our holistic approach combines technical
                mastery, physical conditioning, and mental resilience.
              </p>
              <Button to="/about" variant="outline">
                Discover Our Story
                <ArrowRight className="w-4 h-4" />
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,160,23,0.06),transparent_50%)]" />
        <div className="relative container-premium">
          <SectionHeading
            eyebrow="Training Programs"
            title="Programs for Every Stage"
            subtitle="Structured batches designed to match age, skill level, and ambition — from first-time players to elite performers."
            light
          />

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <AnimatedSection key={program.title} delay={i * 0.15}>
                <div className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-52 overflow-hidden">
                    <SafeImage
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover img-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-xs font-semibold text-emerald-400 tracking-wider uppercase">
                      {program.age}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-xl font-bold text-white mb-2">{program.title}</h3>
                    <p className="text-white/50 text-sm mb-1">{program.duration}</p>
                    <p className="text-white/60 text-sm leading-relaxed mb-5">{program.description}</p>
                    <ul className="space-y-2">
                      {program.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                          <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-emerald-50/70">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Why MR FIRSTGEN"
            title="The FirstGen Advantage"
            subtitle="What sets us apart in cricket development — a complete ecosystem for player growth."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-navy-100/80 hover:shadow-xl hover:shadow-emerald-600/5 hover:border-emerald-200 transition-all duration-500 h-full group">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    <DynamicIcon name={item.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy-900 mb-3">{item.title}</h3>
                  <p className="text-navy-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Gallery */}
      <section className="section-padding bg-white">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Our Facilities"
            title="Train Like a Professional"
            subtitle="State-of-the-art infrastructure designed to mirror the conditions of top-level cricket."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {facilities.map((facility, i) => (
              <AnimatedSection key={facility.title} delay={i * 0.1}>
                <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer">
                  <SafeImage
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-lg font-bold text-white">{facility.title}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.08),transparent_60%)]" />
        <div className="relative container-premium">
          <SectionHeading
            eyebrow="Testimonials"
            title="Stories That Inspire"
            subtitle="Hear from parents and players who've experienced the MR FIRSTGEN difference."
            light
          />

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.12}>
                <div className="glass-card rounded-3xl p-8 h-full flex flex-col">
                  <p className="text-white/70 text-sm leading-relaxed flex-1 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
                    <SafeImage
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-500/30"
                    />
                    <div>
                      <p className="font-semibold text-white text-sm">{t.name}</p>
                      <p className="text-white/50 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <SafeImage
          src={images.hero.cta}
          alt="Join us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-emerald-950/88" />
        <div className="relative container-premium text-center">
          <FadeIn>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Begin Your{' '}
              <span className="text-gradient-emerald">Cricket Journey?</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
              Be among the first to join MR FIRSTGEN. Register your interest today and receive a
              complimentary trial session.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/interested" variant="gold">
                I'm Interested
                <ArrowUpRight className="w-4 h-4" />
              </Button>
              <Button to="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}

export default Home
