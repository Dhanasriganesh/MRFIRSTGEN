import { useState } from 'react'
import { Send } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'
import Button from '../common/Button'
import { buildWhatsAppUrl, buildInterestWhatsAppMessage } from '../../utils/whatsapp'

const initialForm = {
  name: '',
  age: '',
  phone: '',
}

export default function InterestForm() {
  const [form, setForm] = useState(initialForm)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone) {
      toast.error('Please fill in your name and mobile number.')
      return
    }

    const message = buildInterestWhatsAppMessage(form)
    window.location.href = buildWhatsAppUrl(message)
  }

  const inputClass =
    'w-full px-3.5 py-2.5 text-sm rounded-lg md:px-5 md:py-3.5 md:text-base md:rounded-xl bg-white border border-navy-100 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all'

  const labelClass = 'block text-xs md:text-sm font-medium text-navy-700 mb-1 md:mb-2'

  return (
    <>
      <Toaster position="top-center" toastOptions={{ className: 'text-xs md:text-sm font-medium' }} />
      <form onSubmit={handleSubmit} className="space-y-3.5 md:space-y-5">
        <div>
          <label className={labelClass}>Name *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Player's name"
            className={inputClass}
            required
          />
        </div>

        <div>
          <label className={labelClass}>Age</label>
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

        <div>
          <label className={labelClass}>Mobile Number *</label>
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

        <p className="text-[11px] md:text-xs text-navy-500 leading-relaxed">
          <span className="md:hidden">Opens WhatsApp with your details pre-filled.</span>
          <span className="hidden md:inline">
            Submitting will open WhatsApp with your details so our team can respond quickly.
          </span>
        </p>

        <Button
          type="submit"
          variant="gold"
          className="w-full md:w-auto text-xs py-2 px-4 gap-1.5 md:text-sm md:py-3.5 md:px-7 md:gap-2 font-medium md:font-semibold shadow-md md:shadow-lg"
        >
          <Send className="w-3.5 h-3.5 md:w-4 md:h-4" />
          <span className="md:hidden">Show Interest</span>
          <span className="hidden md:inline">Show Interest on WhatsApp</span>
        </Button>
      </form>
    </>
  )
}
