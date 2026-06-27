import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const variants = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0 },
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
}) {
  const [ref, inView] = useInView({ triggerOnce: once, threshold: 0.12 })

  const offset = direction === 'up' ? 48 : direction === 'down' ? -48 : 0
  const xOffset = direction === 'left' ? 48 : direction === 'right' ? -48 : 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: direction === 'up' || direction === 'down' ? offset : 0, x: xOffset }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FadeIn({ children, className = '', delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
