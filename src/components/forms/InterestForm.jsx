import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'
import Button from '../common/Button'
import { experienceLevels, preferredPrograms } from '../../data/content'

const initialForm = {
  name: '',
  age: '',
  phone: '',
  email: '',
  experience: '',
  program: '',
  message: '',
}

export default function InterestForm() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone) {
      toast.error('Please fill in your name and phone number.')
      return
    }
    setSubmitted(true)
    toast.success('Interest registered! We\'ll contact you within 48 hours.')
    setForm(initialForm)
  }

  if (submitted) {
    return (
      <div className="text-center py-12 px-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-display text-2xl font-bold text-navy-900 mb-3">Thank You!</h3>
        <p className="text-navy-600 max-w-md mx-auto">
          Your interest has been registered. Our team will reach out within 48 hours to schedule
          your trial session.
        </p>
        <Button className="mt-8" onClick={() => setSubmitted(false)}>
          Register Another Player
        </Button>
      </div>
    )
  }

  const inputClass =
    'w-full px-5 py-3.5 rounded-xl bg-white border border-navy-100 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all'

  return (
    <>
      <Toaster position="top-center" toastOptions={{ className: 'text-sm font-medium' }} />
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Player's full name"
              className={inputClass}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-2">Age</label>
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              placeholder="Age in years"
              min="5"
              max="60"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-2">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              className={inputClass}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email@example.com"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-2">Experience Level</label>
            <select name="experience" value={form.experience} onChange={handleChange} className={inputClass}>
              <option value="">Select level</option>
              {experienceLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-2">Preferred Program</label>
            <select name="program" value={form.program} onChange={handleChange} className={inputClass}>
              <option value="">Select program</option>
              {preferredPrograms.map((prog) => (
                <option key={prog} value={prog}>
                  {prog}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-700 mb-2">Additional Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your cricket goals..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <Button type="submit" className="w-full sm:w-auto">
          <Send className="w-4 h-4" />
          Submit My Interest
        </Button>
      </form>
    </>
  )
}
