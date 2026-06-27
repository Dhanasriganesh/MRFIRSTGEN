import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'
import PageHero from '../common/PageHero'
import SectionHeading from '../common/SectionHeading'
import AnimatedSection from '../common/AnimatedSection'
import Button from '../common/Button'
import { academyInfo, faqs } from '../../data/content'
import images from '../../data/images'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields.')
      return
    }
    toast.success('Message sent! We\'ll get back to you soon.')
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const inputClass =
    'w-full px-5 py-3.5 rounded-xl bg-white border border-navy-100 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all'

  const contactCards = [
    { icon: MapPin, title: 'Visit Us', content: academyInfo.address, href: academyInfo.mapUrl, external: true },
    { icon: Phone, title: 'Call Us', content: academyInfo.phone, href: `tel:${academyInfo.phone.replace(/\s/g, '')}` },
    { icon: Mail, title: 'Email Us', content: academyInfo.email, href: `mailto:${academyInfo.email}` },
    { icon: Clock, title: 'Working Hours', content: academyInfo.hours },
  ]

  return (
    <main>
      <Toaster position="top-center" />
      <PageHero
        title="Get in Touch"
        subtitle="Have questions about our programs? We'd love to hear from you."
        image={images.hero.contact}
        breadcrumb="Contact"
      />

      {/* Contact Cards */}
      <section className="section-padding bg-white -mt-16 relative z-10">
        <div className="container-premium">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-7 shadow-xl shadow-navy-900/5 border border-navy-100 text-center h-full hover:border-emerald-200 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-5">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-navy-900 mb-2">{card.title}</h3>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.external ? '_blank' : undefined}
                      rel={card.external ? 'noopener noreferrer' : undefined}
                      className="text-navy-600 text-sm hover:text-emerald-600 transition-colors"
                    >
                      {card.content}
                    </a>
                  ) : (
                    <p className="text-navy-600 text-sm">{card.content}</p>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="section-padding bg-emerald-50/70">
        <div className="container-premium grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading
              eyebrow="Send a Message"
              title="We'd Love to Hear From You"
              subtitle="Fill out the form and our team will respond within 24 hours."
              align="left"
            />
            <AnimatedSection delay={0.15}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Trial session, program inquiry, etc."
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className={`${inputClass} resize-none`}
                    required
                  />
                </div>
                <Button type="submit">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="left">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-full min-h-[400px] bg-navy-100 relative">
              <iframe
                title="Academy Location"
                src={academyInfo.mapEmbedUrl}
                className="w-full h-full min-h-[400px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-12 bg-emerald-600">
        <div className="container-premium flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="font-display font-bold text-white text-lg">Chat on WhatsApp</p>
              <p className="text-white/70 text-sm">Quick responses for urgent inquiries</p>
            </div>
          </div>
          <Button
            href={`https://wa.me/${academyInfo.whatsapp.replace(/\D/g, '')}?text=Hi, I'm interested in MR FIRSTGEN Cricket Academy`}
            variant="gold"
          >
            Message Us
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-premium max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about enrollment and training."
          />

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="border border-navy-100 rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-emerald-50/70 transition-colors cursor-pointer"
                  >
                    <span className="font-display font-semibold text-navy-900 pr-4">{faq.question}</span>
                    <span className="text-emerald-600 text-2xl shrink-0">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 text-navy-600 text-sm leading-relaxed">{faq.answer}</div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
