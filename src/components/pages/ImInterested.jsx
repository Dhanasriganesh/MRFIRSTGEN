import { ClipboardList, Clock, Phone, CheckCircle2, MapPin } from 'lucide-react'
import PageHero from '../common/PageHero'
import AnimatedSection from '../common/AnimatedSection'
import InterestForm from '../forms/InterestForm'
import useQrScanTracker from '../../hooks/useQrScanTracker'
import { academyInfo } from '../../data/content'
import images from '../../data/images'

function ImInterested() {
  useQrScanTracker()

  const steps = [
    { icon: ClipboardList, title: 'Fill the Form', desc: 'Enter your name, age, and mobile number.' },
    { icon: Phone, title: 'We Call You', desc: 'Our team contacts you within 48 hours to discuss programs and scheduling.' },
    { icon: CheckCircle2, title: 'Free Trial', desc: 'Attend a complimentary trial session to experience our coaching firsthand.' },
  ]

  return (
    <main>
      <div className="hidden md:block">
        <PageHero
          title="I'm Interested"
          subtitle="Register your interest and take the first step toward cricketing excellence at MR FIRSTGEN."
          image={images.hero.interested}
          breadcrumb="Enrollment"
        />
      </div>

      <section className="section-padding bg-emerald-50/70 md:-mt-8 relative z-10 pt-28 md:pt-0">
        <div className="container-premium">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3 space-y-8">
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-5 shadow-lg shadow-navy-900/5 border border-navy-100 max-w-md md:max-w-none md:rounded-3xl md:p-8 lg:p-10 md:shadow-xl">
                  <div className="mb-4 md:mb-8">
                    <h2 className="font-display text-lg md:text-2xl font-bold text-navy-900 md:mb-2">
                      Register Your Interest
                    </h2>
                    <p className="hidden md:block text-navy-600 text-sm mt-2">
                      Fill in your details below — we'll connect with you on WhatsApp to schedule your
                      complimentary trial session.
                    </p>
                  </div>
                  <InterestForm />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.08}>
                <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-navy-900/5 border border-navy-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-600 mb-1">
                        Find Us
                      </p>
                      <h3 className="font-display font-bold text-navy-900 text-xl">Academy Location</h3>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 items-start">
                    <div>
                      <a
                        href={academyInfo.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy-600 text-sm leading-relaxed hover:text-emerald-600 transition-colors"
                      >
                        {academyInfo.address}
                      </a>
                      <p className="mt-3 text-navy-500 text-sm">{academyInfo.hours}</p>
                      <a
                        href={academyInfo.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                      >
                        Open in Google Maps →
                      </a>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg min-h-[220px] sm:min-h-[200px] bg-navy-100">
                      <iframe
                        title="Academy Location"
                        src={academyInfo.mapEmbedUrl}
                        className="w-full h-full min-h-[220px] sm:min-h-[200px] border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.15} className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-navy-100">
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-display font-bold text-navy-900">What Happens Next?</h3>
                </div>
                <div className="space-y-6">
                  {steps.map((step, i) => (
                    <div key={step.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <step.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-navy-900 text-sm">
                          Step {i + 1}: {step.title}
                        </p>
                        <p className="text-navy-500 text-xs mt-1 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-600 rounded-3xl p-8 text-center">
                <p className="text-white font-display font-bold text-lg mb-2">Need Help?</p>
                <p className="text-white/80 text-sm mb-4">Call us directly for immediate assistance</p>
                <a
                  href={`tel:${academyInfo.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 text-gold-400 font-semibold hover:text-gold-300 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {academyInfo.phone}
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ImInterested
