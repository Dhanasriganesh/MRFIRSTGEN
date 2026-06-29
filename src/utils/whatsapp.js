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
    `Mobile Number: ${form.phone}`,
  ].filter(Boolean)

  return lines.join('\n')
}
