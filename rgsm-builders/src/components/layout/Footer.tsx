import { Link } from 'react-router-dom'
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Planning', path: '/services/planning' },
    { name: 'Architectural Work', path: '/services/architectural-work' },
    { name: 'Residential Construction', path: '/services/residential-construction' },
    { name: 'Commercial Projects', path: '/services/commercial-projects' },
    { name: 'Renovation & Remodeling', path: '/services/renovation-remodeling' },
    { name: 'Turnkey Solutions', path: '/services/turnkey-solutions' },
  ]

  return (
    <footer className="bg-primary text-white pt-16 pb-4">
      <div className="container mx-auto px-4">

        {/* GRID START */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 items-start">

          {/* Company Info */}
          <div>
            <div className="bg-white p-2 rounded-lg inline-block mb-2 w-48">
              <img
                src="https://cdn.magicpatterns.com/uploads/oagaYCrzsYU3zojrvFHDKD/Builders_png.png"
                alt="RGSM Builders"
                className="w-full h-auto"
              />
            </div>

            <p className="text-blue-100 mb-6 leading-relaxed">
              Building dreams into reality with precision, quality, and integrity.
              Your trusted partner for all construction needs.
            </p>

            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1Be6odwUL8/" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/rgsmbuilders?igsh=MTNyOXZ0Ynd2NjRoZw==" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/rgsm-builders/" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-2 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-blue-100 hover:text-accent transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-100 hover:text-accent transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-100 hover:text-accent transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Contact Us
                </Link>
              </li>
              <li>
                <Link to="/services/steel-structure-design" className="text-blue-100 hover:text-accent transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Steel Structures
                </Link>
              </li>
              <li>
                <Link to="/services/industrial-infrastructure" className="text-blue-100 hover:text-accent transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Industrial
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-2 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-blue-100 hover:text-accent transition-colors flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" /> {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-2 text-white">Contact Us</h3>

            <ul className="space-y-4">

              {/* Address */}
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-accent" />
                <span className="text-blue-100 leading-relaxed max-w-[260px] block">
                  #227, Sai Vaibhav, 9th Main Rd, Ideal Homes Layout, BEML Layout,
                  Rajarajeshwari Nagar, Bengaluru, Karnataka – 560098
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-0.5 text-accent" />
                <span className="text-blue-100 leading-relaxed max-w-[260px] block">
                  +91 – 86603 68760 / +91 – 83100 97135 / +91 – 70192 41607
                </span>
              </li>

              {/* Email */}
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-0.5 text-accent" />
                <span className="text-blue-100 leading-relaxed">
                  info@rgsmbuilders.com
                </span>
              </li>
            </ul>
          </div>

        </div>
        {/* GRID END */}

        <div className="border-t border-blue-800 pt-8 mt-4 text-center text-blue-200 text-sm">
          <p>© {currentYear} RGSM Builders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
