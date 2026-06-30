/**
 * Local image paths — bundled under /public/images for reliable loading.
 * Replace these files in public/images/ when you have your own photos.
 */

import academyLogo from '../assets/MR-logo.png'

export const images = {
  hero: {
    home: '/images/hero-home.jpg',
    about: '/images/hero-field.jpg',
    coaching: '/images/fitness.jpg',
    contact: '/images/stadium.jpg',
    interested: '/images/training-1.jpg',
    cta: '/images/sports.jpg',
  },

  about: {
    story: '/images/gym.jpg',
    founder: '/images/coach-1.jpg',
  },

  home: {
    training: '/images/training-1.jpg',
    stadium: '/images/training-2.jpg',
  },

  coaching: {
    session: '/images/fitness.jpg',
  },

  programs: {
    foundation: '/images/training-1.jpg',
    performance: '/images/training-2.jpg',
    elite: '/images/hero-field.jpg',
  },

  facilities: {
    turf: '/images/stadium.jpg',
    nets: '/images/sports.jpg',
    fitness: '/images/fitness.jpg',
    analysis: '/images/gym.jpg',
  },

  testimonials: {
    rahul: '/images/person-1.jpg',
    priya: '/images/person-2.jpg',
    arjun: '/images/person-3.jpg',
  },

  coaches: {
    murthy: academyLogo,
    revanth: academyLogo,
  },
}

export default images
