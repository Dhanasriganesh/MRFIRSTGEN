import { motion } from 'framer-motion'
import SafeImage from './SafeImage'

export default function PageHero({ title, subtitle, image, breadcrumb }) {
  return (
    <section className="relative min-h-[55vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <SafeImage src={image} alt="" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/75 to-navy-900/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_55%)]" />
      </div>

      <div className="relative container-premium pb-16 pt-36">
        {breadcrumb && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-emerald-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            {breadcrumb}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-lg text-white/70 max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
