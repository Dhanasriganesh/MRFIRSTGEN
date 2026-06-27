import { academyInfo } from '../data/content'

export function buildWhatsAppUrl(message) {
  const phone = academyInfo.whatsapp.replace(/\D/g, '')
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export function buildInterestWhatsAppMessage(form) {
  const lines = [
    'Hello MR FIRSTGEN Cricket Academy,',
    '',
    'I would like to register my interest:',
    '',
    `Name: ${form.name}`,
    form.age ? `Age: ${form.age}` : null,
    `Phone: ${form.phone}`,
    form.email ? `Email: ${form.email}` : null,
    form.experience ? `Experience: ${form.experience}` : null,
    form.program ? `Preferred Program: ${form.program}` : null,
    form.message ? `Message: ${form.message}` : null,
  ].filter(Boolean)

  return lines.join('\n')
}
