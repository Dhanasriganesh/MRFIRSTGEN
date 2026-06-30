import images from './images.js'

export const academyInfo = {
  name: 'MR FIRSTGEN',
  tagline: 'CRICKET ACADEMY',
  fullName: 'MR FIRSTGEN CRICKET ACADEMY',
  email: 'mrfirstgencricketacademy@gmail.com',
  phone: '+91 88978 74006',
  whatsapp: '+918897874006',
  instagramHandle: 'mrfirstgencricketacademy',
  address: '17°32\'46.8"N 78°25\'17.9"E · Hyderabad, Telangana',
  coordinates: { lat: 17.546318, lng: 78.421646 },
  mapUrl: 'https://www.google.com/maps?q=17.546318,78.421646',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=17.546318,78.421646&hl=en&z=17&output=embed',
  hours: 'Mon – Sat: 6:00 AM – 8:00 PM',
  social: {
    instagram: 'https://instagram.com/mrfirstgencricketacademy',
    facebook: 'https://instagram.com/mrfirstgencricketacademy',
    youtube: 'https://instagram.com/mrfirstgencricketacademy',
    twitter: 'https://instagram.com/mrfirstgencricketacademy',
  },
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Coaching Staff', path: '/coaching-staff' },
  { label: 'Contact', path: '/contact' },
]

export const programs = [
  {
    title: 'Foundation Batch',
    age: 'Ages 6–12',
    duration: '3 sessions/week',
    description:
      'Fun-first introduction to cricket fundamentals — grip, stance, throwing, catching, and team spirit in a safe, encouraging environment.',
    features: ['Basic batting & bowling', 'Fielding drills', 'Fitness & agility', 'Match awareness'],
    image: images.programs.foundation,
  },
  {
    title: 'Performance Batch',
    age: 'Ages 13–17',
    duration: '5 sessions/week',
    description:
      'Structured training for competitive players focusing on technique refinement, match simulation, and mental toughness under pressure.',
    features: ['Video analysis', 'Specialized coaching', 'Tournament prep', 'Strength conditioning'],
    image: images.programs.performance,
  },
  {
    title: 'Elite Pro Batch',
    age: 'Ages 18+',
    duration: 'Daily sessions',
    description:
      'High-performance program for serious cricketers targeting district, state, and national selection with personalized development plans.',
    features: ['1-on-1 mentoring', 'Advanced analytics', 'Pro-level nets', 'Nutrition guidance'],
    image: images.programs.elite,
  },
]

export const whyChooseUs = [
  {
    icon: 'Users',
    title: 'Expert Coaching Team',
    description: 'Every session is led by Murthy and Revanth — two experienced coaches invested in each player\'s growth.',
  },
  {
    icon: 'Target',
    title: 'Structured Development',
    description: 'Clear training pathways from fundamentals to match-ready skills, tailored to age and ability.',
  },
  {
    icon: 'Heart',
    title: 'Player-First Approach',
    description: 'As a new academy, we keep batches focused so every player gets attention, feedback, and encouragement.',
  },
  {
    icon: 'Dumbbell',
    title: 'Complete Training Setup',
    description: 'Quality nets, turf practice, fitness work, and match-style drills in a professional environment.',
  },
  {
    icon: 'Shield',
    title: 'Safe & Supportive',
    description: 'A disciplined, welcoming space where young cricketers build confidence on and off the field.',
  },
  {
    icon: 'Star',
    title: 'Hyderabad Location',
    description: 'Conveniently located in Hyderabad with easy access for players and parents across the city.',
  },
]

export const facilities = [
  {
    title: 'Premium Turf Wickets',
    image: images.facilities.turf,
  },
  {
    title: 'Indoor Practice Nets',
    image: images.facilities.nets,
  },
  {
    title: 'Fitness & Conditioning',
    image: images.facilities.fitness,
  },
  {
    title: 'Video Analysis Lab',
    image: images.facilities.analysis,
  },
]

export const testimonials = [
  {
    name: 'Rahul Verma',
    role: 'Parent of U-14 Player',
    quote:
      'My son\'s confidence and technique have transformed beyond belief. The coaches genuinely care about every child\'s journey.',
    image: images.testimonials.rahul,
  },
  {
    name: 'Priya Sharma',
    role: 'State-Level Player',
    quote:
      'MR FIRSTGEN gave me the structure and mental edge I needed. The elite batch pushed me to selections I only dreamed of.',
    image: images.testimonials.priya,
  },
  {
    name: 'Arjun Patel',
    role: 'District Captain',
    quote:
      'From weekend hobbyist to district captain in two years — the academy\'s systematic approach made all the difference.',
    image: images.testimonials.arjun,
  },
]

export const achievements = [
  'New Cricket Academy in Hyderabad',
  'Expert Coaching by Murthy & Revanth',
  'Structured Programs for Every Age Group',
  'Scan the QR Code to Register Your Interest',
]

export const aboutTimeline = [
  {
    year: '2025',
    title: 'The Vision',
    description:
      'Murthy and Revanth came together with a shared goal — to launch a cricket academy focused on quality coaching, not big numbers.',
  },
  {
    year: '2026',
    title: 'MR FIRSTGEN Launches',
    description:
      'MR FIRSTGEN Cricket Academy opens in Hyderabad with structured batches and hands-on expert coaching from day one.',
  },
  {
    year: '2026',
    title: 'Enrollments Open',
    description:
      'Players and parents can register interest via our website, contact page, or the banner QR code.',
  },
  {
    year: 'Next',
    title: 'Building Together',
    description:
      'We are growing our academy one player at a time — with discipline, dedication, and the right guidance at the center.',
  },
]

export const coreValues = [
  { icon: 'Star', title: 'Excellence', description: 'We pursue the highest standards in every drill, every match, every moment.' },
  { icon: 'Handshake', title: 'Integrity', description: 'Fair play, honesty, and respect form the foundation of our academy culture.' },
  { icon: 'Flame', title: 'Passion', description: 'Love for the game drives us to go the extra mile for every player.' },
  { icon: 'Lightbulb', title: 'Innovation', description: 'Modern coaching methods, analytics, and sports science at the core.' },
]

export const coaches = [
  {
    name: 'Murthy',
    role: 'Expert Coach ',
    specialty: 'Batting & All-Round Development',
    experience: 'Experienced cricket coach',
    bio: 'Murthy brings deep technical knowledge and a calm, structured approach to training. He focuses on strong fundamentals, match awareness, and helping every player build confidence at the crease.',
    image: images.coaches.murthy,
    featured: true,
  },
  {
    name: 'Revanth',
    role: 'Expert Coach ',
    specialty: 'Bowling, Fielding & Match Skills',
    experience: 'Experienced cricket coach',
    bio: 'Revanth specializes in sharpening bowling action, fielding reflexes, and game-day decision-making. His energetic sessions keep players engaged while pushing them to improve with every drill.',
    image: images.coaches.revanth,
    featured: true,
  },
]

export const faqs = [
  {
    question: 'What age groups do you accept?',
    answer: 'We welcome players from age 6 to adults. Programs are tailored to each age group\'s developmental needs.',
  },
  {
    question: 'Do you provide equipment?',
    answer: 'Basic training equipment is provided. Players are encouraged to bring personal kits as they progress.',
  },
  {
    question: 'How do I enroll my child?',
    answer: 'Scan the QR code on our banner or visit the "I\'m Interested" page to register. Our team will contact you within 48 hours.',
  },
  {
    question: 'Are trial sessions available?',
    answer: 'Yes! We offer a complimentary trial session for new players. Book through our contact form or interest page.',
  },
]

export const experienceLevels = [
  'Complete Beginner',
  'Played casually',
  'Club/Academy level',
  'District level',
  'State level & above',
]

export const preferredPrograms = [
  'Foundation Batch (6–12)',
  'Performance Batch (13–17)',
  'Elite Pro Batch (18+)',
  'Not sure — need guidance',
]
