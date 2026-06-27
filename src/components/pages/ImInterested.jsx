import { ClipboardList, QrCode, Clock, Phone, CheckCircle2 } from 'lucide-react'
import PageHero from '../common/PageHero'
import AnimatedSection from '../common/AnimatedSection'
import InterestForm from '../forms/InterestForm'
import EnrollmentQR from '../qr/EnrollmentQR'
import { academyInfo } from '../../data/content'
import images from '../../data/images'

function ImInterested() {
  const steps = [
    { icon: ClipboardList, title: 'Fill the Form', desc: 'Share basic details about the player and their experience level.' },
    { icon: Phone, title: 'We Call You', desc: 'Our team contacts you within 48 hours to discuss programs and scheduling.' },
    { icon: CheckCircle2, title: 'Free Trial', desc: 'Attend a complimentary trial session to experience our coaching firsthand.' },
  ]

  return (
    <main>
      <PageHero
        title="I'm Interested"
        subtitle="Register your interest and take the first step toward cricketing excellence at MR FIRSTGEN."
        image={images.hero.interested}
        breadcrumb="Enrollment"
      />

      <section className="section-padding bg-emerald-50/70 -mt-8 relative z-10">
        <div className="container-premium">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-navy-900/5 border border-navy-100">
                <div className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-navy-900 mb-2">
                    Register Your Interest
                  </h2>
                  <p className="text-navy-600 text-sm">
                    Complete the form below and our team will reach out to schedule your complimentary
                    trial session at {academyInfo.fullName}.
                  </p>
                </div>
                <InterestForm />
              </div>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection delay={0.15} className="lg:col-span-2 space-y-6">
              {/* QR Code */}
              <div className="bg-emerald-900 rounded-3xl p-8 text-center">
                <div className="flex items-center justify-center gap-2 text-emerald-400 mb-6">
                  <QrCode className="w-5 h-5" />
                  <span className="text-xs font-semibold tracking-widest uppercase">
                    Banner QR Code
                  </span>
                </div>
                <EnrollmentQR size={200} />
                <p className="mt-6 text-white/50 text-sm leading-relaxed">
                  Download this QR code and print it on your physical banner. When scanned, it opens
                  this enrollment page directly.
                </p>
              </div>

              {/* What Happens Next */}
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

              {/* Contact shortcut */}
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
