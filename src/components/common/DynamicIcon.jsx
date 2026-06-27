import {
  Trophy,
  Users,
  Target,
  Dumbbell,
  Heart,
  Shield,
  Star,
  Handshake,
  Flame,
  Lightbulb,
} from 'lucide-react'

const iconMap = {
  Trophy,
  Users,
  Target,
  Dumbbell,
  Heart,
  Shield,
  Star,
  Handshake,
  Flame,
  Lightbulb,
}

export default function DynamicIcon({ name, className = 'w-6 h-6', strokeWidth = 1.75 }) {
  const Icon = iconMap[name]
  if (!Icon) return null
  return <Icon className={className} strokeWidth={strokeWidth} />
}
