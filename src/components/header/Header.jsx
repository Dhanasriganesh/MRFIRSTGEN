import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../../data/content'
import Logo from '../common/Logo'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const navLinkClass = ({ isActive }) => {
    const base = 'text-sm font-medium transition-colors duration-300 whitespace-nowrap'
    if (scrolled) {
      return `${base} ${isActive ? 'text-gold-400' : 'text-white/85 hover:text-white'}`
    }
    return `${base} ${isActive ? 'text-emerald-700' : 'text-emerald-900/80 hover:text-emerald-800'}`
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5 pointer-events-none">
      <div
        className={`pointer-events-auto mx-auto max-w-5xl xl:max-w-6xl flex items-center justify-between gap-3 rounded-full px-3 sm:px-5 py-2 sm:py-2.5 transition-all duration-500 ease-out ${
          scrolled
            ? 'bg-emerald-900 shadow-[0_8px_32px_rgba(6,78,59,0.45)] border border-emerald-800/50'
            : 'bg-white shadow-[0_4px_28px_rgba(10,22,40,0.1)] border border-navy-100/80'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="group flex items-center shrink-0 pl-1">
          {scrolled ? (
            <div className="rounded-xl bg-white/95 p-1 shadow-sm">
              <Logo variant="light" className="h-9 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
            </div>
          ) : (
            <Logo variant="light" className="h-9 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
          )}
        </Link>

        {/* Desktop nav — centred */}
        <nav className="hidden lg:flex items-center justify-center gap-7 xl:gap-9 flex-1 px-4">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-5 shrink-0 pr-1">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? isActive
                    ? 'text-gold-400'
                    : 'text-white/85 hover:text-white'
                  : isActive
                    ? 'text-emerald-700'
                    : 'text-emerald-900/80 hover:text-emerald-800'
              }`
            }
          >
            Contact
          </NavLink>
          <Link
            to="/interested"
            className={`inline-flex items-center gap-1.5 rounded-full text-sm font-semibold px-5 py-2.5 transition-all duration-300 ${
              scrolled
                ? 'bg-emerald-500 text-white hover:bg-emerald-400 shadow-md shadow-emerald-950/25'
                : 'bg-gold-500 text-white hover:bg-gold-400 shadow-md shadow-gold-500/30'
            }`}
          >
            I'm Interested
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-full transition-colors ${
            scrolled ? 'text-white hover:bg-white/10' : 'text-emerald-900 hover:bg-emerald-50'
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className={`pointer-events-auto mx-auto max-w-5xl xl:max-w-6xl mt-2 rounded-3xl overflow-hidden border ${
              scrolled
                ? 'bg-emerald-900 border-emerald-800/50 shadow-xl shadow-emerald-950/30'
                : 'bg-white border-navy-100 shadow-xl shadow-navy-900/8'
            }`}
          >
            <nav className="p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `py-3 px-4 rounded-2xl text-sm font-medium transition-colors ${
                      scrolled
                        ? isActive
                          ? 'bg-emerald-800 text-gold-400'
                          : 'text-white/85 hover:bg-emerald-800/60'
                        : isActive
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'text-emerald-900/80 hover:bg-emerald-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `py-3 px-4 rounded-2xl text-sm font-medium transition-colors ${
                    scrolled
                      ? isActive
                        ? 'bg-emerald-800 text-gold-400'
                        : 'text-white/85 hover:bg-emerald-800/60'
                      : isActive
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'text-emerald-900/80 hover:bg-emerald-50'
                  }`
                }
              >
                Contact
              </NavLink>
              <Link
                to="/interested"
                className={`mt-2 flex items-center justify-center gap-1.5 rounded-full text-sm font-semibold py-3 transition-all ${
                  scrolled
                    ? 'bg-emerald-500 text-white hover:bg-emerald-400'
                    : 'bg-gold-500 text-white hover:bg-gold-400'
                }`}
              >
                I'm Interested
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
