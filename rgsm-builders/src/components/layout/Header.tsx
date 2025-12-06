import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const services = [
    { name: "Planning", path: "/services/planning", number: "01" },
    { name: "Architectural Work", path: "/services/architectural-work", number: "02" },
    { name: "Residential Construction", path: "/services/residential-construction", number: "03" },
    { name: "Commercial Projects", path: "/services/commercial-projects", number: "04" },
    { name: "Industrial Infrastructure", path: "/services/industrial-infrastructure", number: "05" },
    { name: "Renovation & Remodeling", path: "/services/renovation-remodeling", number: "06" },
    { name: "Turnkey Solutions", path: "/services/turnkey-solutions", number: "07" },
    { name: "Steel Structure Design", path: "/services/steel-structure-design", number: "08" },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-lg shadow-md py-3"
            : "bg-white py-5"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <nav className="flex justify-between items-center">

            {/* Logo */}
            <Link to="/" className="relative z-50">
              <img
                src="https://cdn.magicpatterns.com/uploads/oagaYCrzsYU3zojrvFHDKD/Builders_png.png"
                alt="RGSM Builders"
                className="h-10 md:h-12 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">

              {/* Nav Link Component */}
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-sm font-medium uppercase tracking-wide transition-colors ${
                    location.pathname === item.path
                      ? "text-[#1E3A8A]"
                      : "text-gray-600 hover:text-[#1E3A8A]"
                  }`}
                >
                  {item.label}
                  {/* Active underline */}
                  {location.pathname === item.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#1E3A8A] rounded-full"></span>
                  )}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <span
                  className={`cursor-pointer text-sm font-medium uppercase tracking-wide transition-colors ${
                    location.pathname.includes("/services")
                      ? "text-[#1E3A8A]"
                      : "text-gray-600 hover:text-[#1E3A8A]"
                  }`}
                >
                  Services
                </span>

                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-3 w-72 bg-white shadow-xl rounded-xl py-4 border border-gray-100 z-50"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-[#1E3A8A]/5 hover:text-[#1E3A8A] rounded-md transition"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact */}
              <Link
                to="/contact"
                className={`relative text-sm font-medium uppercase tracking-wide transition-colors ${
                  location.pathname === "/contact"
                    ? "text-[#1E3A8A]"
                    : "text-gray-600 hover:text-[#1E3A8A]"
                }`}
              >
                Contact
                {location.pathname === "/contact" && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#1E3A8A] rounded-full"></span>
                )}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="relative z-50 flex flex-col items-end space-y-1.5 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-8 h-0.5 bg-[#1E3A8A] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`block w-6 h-0.5 bg-[#1E3A8A] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
              <span className={`block w-8 h-0.5 bg-[#1E3A8A] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>
          </nav>
        </div>
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#1E3A8A]/95 backdrop-blur-xl z-40 overflow-y-auto"
          >
            <div className="min-h-screen flex items-center">
              <div className="container mx-auto px-6 lg:px-12 py-32">
                <div className="grid lg:grid-cols-2 gap-20">

                  {/* Main Nav */}
                  <div>
                    <span className="text-accent text-sm font-mono tracking-wider mb-12 block">
                      NAVIGATION
                    </span>

                    <nav className="space-y-6">
                      {["Home", "About", "Services", "Contact"].map((name, index) => {
                        const path =
                          name === "Home"
                            ? "/"
                            : name === "Services"
                            ? "/services/planning"
                            : `/${name.toLowerCase()}`;

                        const isActive = location.pathname === path;

                        return (
                          <motion.div
                            key={name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                          >
                            <Link
                              to={path}
                              className={`block text-5xl md:text-6xl lg:text-7xl font-bold transition-colors ${
                                isActive ? "text-accent" : "text-white hover:text-accent"
                              }`}
                            >
                              {name}
                            </Link>
                          </motion.div>
                        );
                      })}
                    </nav>
                  </div>

                  {/* Services Nav */}
                  <div>
                    <span className="text-accent text-sm font-mono tracking-wider mb-12 block">
                      SERVICES
                    </span>

                    <nav className="space-y-4">
                      {services.map((service, index) => (
                        <motion.div
                          key={service.path}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.05 }}
                        >
                          <Link
                            to={service.path}
                            className="group flex items-baseline space-x-4 hover:translate-x-2 transition-transform"
                          >
                            <span className="text-accent font-mono text-sm">
                              {service.number}
                            </span>
                            <span className="text-xl md:text-2xl text-gray-300 group-hover:text-white transition-colors">
                              {service.name}
                            </span>
                          </Link>
                        </motion.div>
                      ))}
                    </nav>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
