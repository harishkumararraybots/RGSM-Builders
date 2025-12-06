import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedSection } from '../components/shared/AnimatedSection'
import { Button } from '../components/shared/Button'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Building2,
  CheckCircle,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react'
export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
      })
    }, 1500)
  }
 const contactMethods = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Call Us',
    numbers: [
      { label: '+91 – 86603 68760', link: 'tel:+918660368760' },
      { label: '+91 – 83100 97135', link: 'tel:+918310097135' },
      { label: '+91 – 70192 41607', link: 'tel:+917019241607' },
    ],
    color: 'blue',
  },

  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email Us',
    primary: 'info@rgsmbuilders.com',
    action: 'mailto:info@rgsmbuilders.com',
    color: 'orange',
  },

  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Visit Our Office',
    primary: '#227, Sai Vaibhav, 9th Main Rd, Ideal Homes Layout',
    secondary:
      'BEML Layout, Rajarajeshwari Nagar, Bengaluru, Karnataka – 560098',
    action: '#map',
    color: 'blue',
  },

  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Working Hours',
    primary: 'Mon - Sat: 9:00 AM - 6:30 PM',
    secondary: 'Sunday: By Appointment',
    action: null,
    color: 'orange',
  },
]

  const faqs = [
    {
      question: 'How do I get a quote for my project?',
      answer:
        "Simply fill out our contact form or call us directly. We'll schedule a free consultation to discuss your requirements and provide a detailed estimate.",
    },
    {
      question: 'What areas do you serve?',
      answer:
        'We serve the entire metropolitan area and surrounding regions. For projects outside our primary service area, please contact us to discuss possibilities.',
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary based on scope and complexity. Residential projects typically take 3-12 months, while commercial projects may take 6-24 months.',
    },
    {
      question: 'Do you offer financing options?',
      answer:
        'Yes, we work with several financing partners to offer flexible payment options for qualified projects. Ask our team for details during your consultation.',
    },
  ]
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[450px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/60 to-primary/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="max-w-3xl"
          >
            <span className="inline-block py-2 px-4 rounded-full bg-accent/20 text-accent-light border border-accent/30 font-semibold text-sm mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Let's <span className="text-accent">Build</span> Together
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Have a project in mind? We'd love to hear from you. Reach out and
              let's create something extraordinary.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Methods Cards */}
      <section className="relative -mt-20 z-20 pb-12">
    <div className="container mx-auto px-2">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {contactMethods.map((method, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div
            className={`bg-white rounded-2xl shadow-xl p-4 h-full border-t-4 ${
              method.color === 'orange' ? 'border-accent' : 'border-primary'
            } hover:shadow-2xl transition-shadow duration-300`}
          >

            {/* Icon */}
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                method.color === 'orange'
                  ? 'bg-accent/10 text-accent'
                  : 'bg-primary/10 text-primary'
              }`}
            >
              {method.icon}
            </div>

            {/* Title */}
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              {method.title}
            </h3>

            {/* ----------------------- */}
            {/*   CASE 1: MULTIPLE PHONE NUMBERS */}
            {/* ----------------------- */}
            {method.numbers ? (
              <div className="space-y-1">
                {method.numbers.map((num, i) => (
                  <a
                    key={i}
                    href={num.link}
                    className="block text-gray-800 font-medium hover:text-accent transition-colors"
                  >
                    {num.label}
                  </a>
                ))}
              </div>
            ) : (
              /* ----------------------- */
              /*   CASE 2: DEFAULT CARDS */
              /* ----------------------- */
              <>
                {method.action ? (
                  <a href={method.action} className="block">
                    <p className="text-gray-800 font-medium hover:text-accent transition-colors">
                      {method.primary}
                    </p>
                    {method.secondary && (
                      <p className="text-gray-500 text-sm">
                        {method.secondary}
                      </p>
                    )}
                  </a>
                ) : (
                  <>
                    <p className="text-gray-800 font-medium">
                      {method.primary}
                    </p>
                    {method.secondary && (
                      <p className="text-gray-500 text-sm">
                        {method.secondary}
                      </p>
                    )}
                  </>
                )}
              </>
            )}

          </div>
        </motion.div>
      ))}

    </div>
  </div>
</section>


      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info Side */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="right">
                <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                  Contact Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-6">
                  Let's Discuss Your Project
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Whether you're planning a new construction, renovation, or
                  need expert consultation, our team is ready to help bring your
                  vision to life.
                </p>

                {/* Why Contact Us */}
                <div className="space-y-4 mb-10">
                  {[
                    'Free initial consultation',
                    'Detailed project estimates',
                    'Expert advice from professionals',
                    'Quick response within 24 hours',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mr-3">
                        <CheckCircle className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {[
                      {
                        icon: <Facebook className="w-5 h-5" />,
                        href: 'https://www.facebook.com/share/1Be6odwUL8/',
                      },
                      {
                        icon: <Instagram className="w-5 h-5" />,
                        href: 'https://www.instagram.com/rgsmbuilders?igsh=MTNyOXZ0Ynd2NjRoZw==',
                      },
                      {
                        icon: <Linkedin className="w-5 h-5" />,
                        href: 'https://www.linkedin.com/company/rgsm-builders/',
                      },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="left">
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                      <MessageSquare className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary">
                        Send Us a Message
                      </h3>
                      <p className="text-gray-500 text-sm">
                        We'll get back to you within 24 hours
                      </p>
                    </div>
                  </div>

                  {isSubmitted ? (
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.95,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      className="bg-green-50 border border-green-200 p-8 rounded-2xl text-center"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="text-2xl font-bold text-green-800 mb-2">
                        Message Sent Successfully!
                      </h4>
                      <p className="text-green-700 mb-6">
                        Thank you for reaching out. Our team will contact you
                        shortly.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-green-700 font-semibold hover:text-green-800 flex items-center justify-center mx-auto"
                      >
                        Send another message{' '}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all outline-none bg-gray-50 hover:bg-white"
                            placeholder="Enter Name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all outline-none bg-gray-50 hover:bg-white"
                            placeholder="abc@gmail.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all outline-none bg-gray-50 hover:bg-white"
                            placeholder="Enter Phone Number"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="service"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                          >
                            Service Interested In
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formState.service}
                            onChange={handleChange}
                            className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all outline-none bg-gray-50 hover:bg-white appearance-none cursor-pointer"
                          >
                            <option value="">Select a service</option>
                            <option value="planning">Planning</option>
                            <option value="architectural">
                              Architectural Work (2D/3D)
                            </option>
                            <option value="residential">
                              Residential Construction
                            </option>
                            <option value="commercial">
                              Commercial Projects
                            </option>
                            <option value="industrial">
                              Industrial Infrastructure
                            </option>
                            <option value="renovation">
                              Renovation & Remodeling
                            </option>
                            <option value="turnkey">Turnkey Solutions</option>
                            <option value="steel">
                              Steel Structure Design
                            </option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Project Details *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all outline-none bg-gray-50 hover:bg-white resize-none"
                          placeholder="Tell us about your project, timeline, and any specific requirements..."
                        ></textarea>
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full justify-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Send Message <Send className="w-5 h-5 ml-2" />
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="relative">
        <div className="h-[500px] w-full bg-gray-200 relative">
         <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.094079009586!2d77.5157374!3d12.9213884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzE3LjAiTiA3N8KwMzEnMDUuOSJF!5e0!3m2!1sen!2sin!4v1700002000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          title="RGSM Location"
          className="filter grayscale-[50%] hover:grayscale-0 transition-all duration-500"
        />
          {/* Floating Info Card */}
        <div className="absolute top-8 left-8 bg-white p-6 rounded-2xl shadow-2xl max-w-sm hidden md:block">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">RGSM Builders HQ</h4>
              <p className="text-gray-500 text-sm">Main Office</p>
            </div>
          </div>

          {/* Updated Address */}
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            #227, Sai Vaibhav, 9th Main Rd, Ideal Homes Layout<br />
            BEML Layout, Rajarajeshwari Nagar,<br />
            Bengaluru, Karnataka – 560098
          </p>

          <a
            href="https://www.google.com/maps/place/12%C2%B055'17.0%22N+77%C2%B031'05.9%22E"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-semibold text-sm flex items-center hover:text-accent-dark transition-colors"
          >
            Get Directions <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                  <h4 className="font-bold text-lg text-primary mb-3 flex items-start">
                    <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 text-accent text-sm font-bold">
                      Q
                    </span>
                    {faq.question}
                  </h4>
                  <p className="text-gray-600 pl-11">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't wait any longer. Contact us today and let's turn your
              construction dreams into reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+15551234567"
                className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" /> Call Now
              </a>
              <Button variant="accent" size="lg" to="/services/planning" icon>
                View Our Services
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
