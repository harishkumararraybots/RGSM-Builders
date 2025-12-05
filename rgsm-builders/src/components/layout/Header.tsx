import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'
import { Button } from '../shared/Button'
export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(false)
  const location = useLocation()
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(false)
  }, [location])
  const services = [
    {
      name: 'Planning',
      path: '/services/planning',
    },
    {
      name: 'Architectural Work',
      path: '/services/architectural-work',
    },
    {
      name: 'Residential Construction',
      path: '/services/residential-construction',
    },
    {
      name: 'Commercial Projects',
      path: '/services/commercial-projects',
    },
    {
      name: 'Industrial Infrastructure',
      path: '/services/industrial-infrastructure',
    },
    {
      name: 'Renovation & Remodeling',
      path: '/services/renovation-remodeling',
    },
    {
      name: 'Turnkey Solutions',
      path: '/services/turnkey-solutions',
    },
    {
      name: 'Steel Structure Design',
      path: '/services/steel-structure-design',
    },
  ]
  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}
    >
      {/* Top Bar - Hidden on mobile, visible on desktop */}
      <div
        className={`hidden lg:block container mx-auto px-4 mb-2 border-b border-gray-200/20 pb-2 ${isScrolled ? 'hidden' : 'block'}`}
      >
        <div className="flex justify-between items-center text-sm text-white">
          <div className="flex space-x-6">
            <span className="flex items-center hover:text-accent transition-colors">
              <Phone className="w-4 h-4 mr-2" /> +1 (555) 123-4567
            </span>
            <span className="flex items-center hover:text-accent transition-colors">
              <Mail className="w-4 h-4 mr-2" /> info@rgsmbuilders.com
            </span>
          </div>
          <div className="flex space-x-4">
            <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50">
            <img
              src="https://cdn.magicpatterns.com/uploads/oagaYCrzsYU3zojrvFHDKD/Builders_png.png"
              alt="RGSM Builders"
              className="h-12 md:h-16 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium hover:text-accent transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium hover:text-accent transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown(true)}
              onMouseLeave={() => setActiveDropdown(false)}
            >
              <button
                className={`flex items-center font-medium hover:text-accent transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              <div
                className={`absolute top-full left-0 w-64 bg-white shadow-xl rounded-md py-2 transition-all duration-300 transform origin-top ${activeDropdown ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}
              >
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors border-l-2 border-transparent hover:border-accent"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className={`font-medium hover:text-accent transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              Contact
            </Link>

            <Button
              variant={isScrolled ? 'primary' : 'accent'}
              size="sm"
              to="/contact"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden z-50 ${isScrolled ? 'text-primary' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-8 h-8 text-gray-800" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full pt-24 px-6 overflow-y-auto">
          <Link
            to="/"
            className="text-xl font-bold text-primary py-4 border-b border-gray-100"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-xl font-bold text-primary py-4 border-b border-gray-100"
          >
            About
          </Link>

          <div className="py-4 border-b border-gray-100">
            <div className="text-xl font-bold text-primary mb-4">Services</div>
            <div className="pl-4 flex flex-col space-y-3">
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="text-gray-600 hover:text-accent"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/contact"
            className="text-xl font-bold text-primary py-4 border-b border-gray-100"
          >
            Contact
          </Link>

          <div className="mt-8">
            <Button className="w-full justify-center" to="/contact">
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
