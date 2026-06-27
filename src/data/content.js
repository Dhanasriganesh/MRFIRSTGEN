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

export const stats = [
  { value: 850, suffix: '+', label: 'Players Trained' },
  { value: 12, suffix: '+', label: 'Years of Excellence' },
  { value: 45, suffix: '+', label: 'Tournament Wins' },
  { value: 18, suffix: '', label: 'Expert Coaches' },
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
    icon: 'Trophy',
    title: 'Proven Track Record',
    description: '45+ tournament victories and 120+ players progressed to district and state levels.',
  },
  {
    icon: 'Users',
    title: 'Expert Coaching Team',
    description: 'Certified coaches with first-class and international experience guiding every session.',
  },
  {
    icon: 'Target',
    title: 'Personalized Development',
    description: 'Individual skill assessments and custom training roadmaps for every player.',
  },
  {
    icon: 'Dumbbell',
    title: 'World-Class Facilities',
    description: 'Floodlit turf wickets, indoor nets, fitness lab, and video analysis suite.',
  },
  {
    icon: 'Heart',
    title: 'Holistic Growth',
    description: 'We build character, discipline, and leadership alongside cricketing excellence.',
  },
  {
    icon: 'Shield',
    title: 'Safe & Supportive',
    description: 'Structured environment with qualified physios and age-appropriate training loads.',
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
  'Hyderabad Junior League Champions 2025',
  '12 Players Selected for State U-16 Camp',
  'Best Cricket Academy Award — Telangana Sports Council',
  'Inter-Academy T20 Series Winners',
]

export const aboutTimeline = [
  { year: '2013', title: 'The Beginning', description: 'Founded with a single turf wicket and a vision to nurture raw talent.' },
  { year: '2016', title: 'First Champions', description: 'Our U-14 team won the district championship — our first major trophy.' },
  { year: '2019', title: 'Facility Expansion', description: 'Added indoor nets, fitness center, and video analysis technology.' },
  { year: '2022', title: 'State Recognition', description: 'Recognized as a premier cricket development center by Telangana Cricket Association.' },
  { year: '2025', title: '850+ Alumni', description: 'Continuing to shape the next generation of cricketing stars.' },
]

export const coreValues = [
  { icon: 'Star', title: 'Excellence', description: 'We pursue the highest standards in every drill, every match, every moment.' },
  { icon: 'Handshake', title: 'Integrity', description: 'Fair play, honesty, and respect form the foundation of our academy culture.' },
  { icon: 'Flame', title: 'Passion', description: 'Love for the game drives us to go the extra mile for every player.' },
  { icon: 'Lightbulb', title: 'Innovation', description: 'Modern coaching methods, analytics, and sports science at the core.' },
]

export const coaches = [
  {
    name: 'Coach Rajesh Kumar',
    role: 'Head Coach & Director',
    specialty: 'Batting & Strategy',
    experience: '18 years | Former Ranji Player',
    bio: 'Led Hyderabad U-19 to three consecutive championships. Specializes in building technically sound batters with exceptional game awareness.',
    image: images.coaches.rajesh,
    featured: true,
  },
  {
    name: 'Coach Meera Reddy',
    role: 'Senior Bowling Coach',
    specialty: 'Fast & Spin Bowling',
    experience: '14 years | Level 3 Certified',
    bio: 'Former state-level fast bowler known for developing pace and accuracy through biomechanics-focused training programs.',
    image: images.coaches.meera,
    featured: false,
  },
  {
    name: 'Coach Vikram Singh',
    role: 'Fielding & Wicket-Keeping',
    specialty: 'Fielding Excellence',
    experience: '11 years | IPL Academy Alumni',
    bio: 'Transforms fielding units with high-intensity drills and reflex training used at professional franchise levels.',
    image: images.coaches.vikram,
    featured: false,
  },
  {
    name: 'Coach Ananya Desai',
    role: 'Youth Development Lead',
    specialty: 'Junior Programs',
    experience: '9 years | Child Sports Psychology',
    bio: 'Creates engaging, age-appropriate programs that build love for cricket while developing fundamental skills.',
    image: images.coaches.ananya,
    featured: false,
  },
  {
    name: 'Coach David Fernandes',
    role: 'Fitness & Conditioning',
    specialty: 'Sports Performance',
    experience: '12 years | ASCA Certified',
    bio: 'Designs cricket-specific fitness programs that enhance speed, agility, and injury prevention for all age groups.',
    image: images.coaches.david,
    featured: false,
  },
  {
    name: 'Coach Sanjay Nair',
    role: 'Video Analyst & Tactics',
    specialty: 'Performance Analytics',
    experience: '8 years | BCCI Level 2',
    bio: 'Uses cutting-edge video analysis and data insights to give players a competitive edge in match situations.',
    image: images.coaches.sanjay,
    featured: false,
  },
]

export const supportStaff = [
  { name: 'Dr. Kavitha Rao', role: 'Sports Physiotherapist' },
  { name: 'Mr. Imran Khan', role: 'Academy Manager' },
  { name: 'Ms. Lakshmi Prasad', role: 'Nutritionist' },
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
