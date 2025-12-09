import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedSection } from './AnimatedSection'
import { Button } from './Button'
import {
  CheckCircle,
  Phone,
  Clock,
  Award,
  Users,
  Shield,
  Star,
  MessageSquare,
} from 'lucide-react'
interface ServicePageTemplateProps {
  title: string
  subtitle: string
  description: string
  image: string
  features: string[]
  benefits: {
    title: string
    description: string
    icon?: React.ReactNode
  }[]
  process: {
    step: number
    title: string
    description: string
  }[]
  gallery?: string[]
  stats?: {
    value: string
    label: string
  }[]
}
export function ServicePageTemplate({
  title,
  subtitle,
  description,
  image,
  features,
  benefits,
  process,
  gallery,
  stats,
}: ServicePageTemplateProps) {
  const defaultStats = stats || [
    {
      value: '30+',
      label: 'Projects Completed',
    },
    {
      value: '98%',
      label: 'Client Satisfaction',
    },
    {
      value: '6+',
      label: 'Years Experience',
    },
    {
      value: '20+',
      label: 'Expert Team',
    },
  ]
  const defaultGallery = gallery || [
    '/img-12.jpg',
    '/img-21.avif',
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  ]
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url("${image}")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60"></div>
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" to="/contact" icon>
                Get a Quote
              </Button>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-md font-semibold hover:bg-white/20 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" /> Call Now
              </a>
            </div>
          </motion.div>
        </div>

        {/* Decorative Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Stats Bar */}
      <section className="relative -mt-16 z-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {defaultStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
              <AnimatedSection>
                <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                  Service Overview
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-6">
                  Expert {title} Services
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {description}
                </p>

                <h3 className="text-2xl font-bold text-primary mb-6">
                  Key Features & Capabilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                      }}
                      viewport={{
                        once: true,
                      }}
                      className="flex items-center bg-gray-50 p-4 rounded-xl"
                    >
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-gray-700 font-medium">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 space-y-6">
                {/* Quote Card */}
                <AnimatedSection delay={0.2}>
                  <div className="bg-primary text-white p-8 rounded-2xl shadow-xl">
                    <h3 className="text-xl font-bold mb-4">
                      Need This Service?
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Contact our team today to discuss your project
                      requirements and get a detailed quote.
                    </p>
                    <Button
                      variant="accent"
                      className="w-full justify-center mb-4"
                      to="/contact"
                    >
                      Get a Free Quote
                    </Button>
                    <div className="text-center">
                      <p className="text-blue-200 text-sm mb-2">
                        Or call us directly:
                      </p>
                      <a
                        href="tel:+15551234567"
                        className="text-xl font-bold hover:text-accent transition-colors"
                      >
                      +91 – 86603 68760
                      </a>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Quick Info */}
                <AnimatedSection delay={0.3}>
                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <h4 className="font-bold text-primary mb-4">
                      Why Choose Us?
                    </h4>
                    <div className="space-y-3">
                      {[
                        {
                          icon: <Clock className="w-4 h-4" />,
                          text: 'On-Time Delivery',
                        },
                        {
                          icon: <Award className="w-4 h-4" />,
                          text: 'Quality Guaranteed',
                        },
                        {
                          icon: <Shield className="w-4 h-4" />,
                          text: 'Licensed & Insured',
                        },
                        {
                          icon: <Users className="w-4 h-4" />,
                          text: 'Expert Team',
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center text-gray-700"
                        >
                          <div className="text-accent mr-3">{item.icon}</div>
                          <span className="text-sm font-medium">
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              How We Work
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3">
              Our {title} Process
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A systematic approach ensuring quality results at every stage of
              your project.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-0.5 bg-primary/20"></div>

            {process.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="relative">
                  <div className="bg-white p-8 rounded-2xl shadow-lg h-full border-t-4 border-accent relative z-10">
                    <div className="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center mb-6 text-xl font-bold shadow-lg">
                      {String(step.step).padStart(2, '0')}
                    </div>
                    <h4 className="text-xl font-bold text-primary mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Advantages
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3">
              Why Choose Our {title} Services
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-lg h-full text-center border border-gray-100 hover:border-accent/20 hover:shadow-2xl transition-all duration-300 group">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {benefit.icon || <Star className="w-8 h-8" />}
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Work
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3">
              Project Gallery
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {defaultGallery.map((img, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="relative group overflow-hidden rounded-xl aspect-square">
                  <img
                    src={img}
                    alt={`${title} project ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold">View Project</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="bg-primary rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <MessageSquare className="w-12 h-12 text-accent mx-auto mb-6" />
                <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
                  "RGSM Builders exceeded our expectations with their{' '}
                  {title.toLowerCase()} services. Professional, timely, and
                  exceptional quality throughout the entire project."
                </blockquote>
                <div className="flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Client"
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-white"
                  />
                  <div className="text-left">
                    <div className="font-bold">Michael Thompson</div>
                    <div className="text-blue-200 text-sm">
                      Property Developer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-accent-dark text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your {title} Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our expert team today for a free consultation and detailed
              quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="white" size="lg" to="/contact" icon>
                Get a Free Quote
              </Button>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-md font-semibold hover:bg-white/20 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" /> +1 (555) 123-4567
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
