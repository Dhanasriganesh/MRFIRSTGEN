import { Link } from 'react-router-dom'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
} from 'lucide-react'
import { IconInstagram, IconFacebook, IconYoutube, IconTwitter } from '../common/SocialIcons'
import { academyInfo, navLinks } from '../../data/content'
import Button from '../common/Button'
import Logo from '../common/Logo'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-emerald-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.08),transparent_60%)]" />

      <div className="relative container-premium pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6 group">
              <Logo className="h-20 w-auto transition-transform duration-300 group-hover:scale-105" />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Shaping champions through world-class coaching, modern facilities, and an unwavering
              commitment to every player's journey.
            </p>
            <div className="flex gap-3">
              {[
                { icon: IconInstagram, href: academyInfo.social.instagram },
                { icon: IconFacebook, href: academyInfo.social.facebook },
                { icon: IconYoutube, href: academyInfo.social.youtube },
                { icon: IconTwitter, href: academyInfo.social.twitter },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-emerald-400 text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/interested"
                  className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors"
                >
                  I'm Interested →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                {academyInfo.address}
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href={`tel:${academyInfo.phone}`} className="hover:text-white transition-colors">
                  {academyInfo.phone}
                </a>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href={`mailto:${academyInfo.email}`} className="hover:text-white transition-colors">
                  {academyInfo.email}
                </a>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                {academyInfo.hours}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Start Your Journey</h4>
            <p className="text-white/60 text-sm mb-5 leading-relaxed">
              Ready to take the first step? Register your interest and we'll schedule a complimentary
              trial session.
            </p>
            <Button to="/interested" variant="gold" className="text-sm">
              Register Interest
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} {academyInfo.fullName}. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Crafted with passion for the gentlemen's game.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
