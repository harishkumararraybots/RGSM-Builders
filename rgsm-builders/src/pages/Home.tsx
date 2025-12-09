import { motion } from 'framer-motion'
import { Hero } from '../components/home/Hero'
import { ServicesOverview } from '../components/home/ServicesOverview'
import { Stats } from '../components/home/Stats'


import { Button } from '../components/shared/Button'
import { AnimatedSection } from '../components/shared/AnimatedSection'
import {
  CheckCircle,
  Phone,
  Award,
  Users,
  Clock,
  Shield,
} from 'lucide-react'
import { FeaturedProjects } from '../components/home/FeaturedProject'
import { Testimonials } from '../components/home/Testimonial'
import { ConstructionSection } from '../components/ConstructionSection'
export function Home() {
  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Award-Winning Quality',
      description:
        'Recognized for excellence in construction and design across multiple industry awards.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Team',
      description:
        'Skilled professionals with decades of combined experience in all construction disciplines.',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'On-Time Delivery',
      description:
        'We respect your timeline and deliver projects on schedule without compromising quality.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety First',
      description:
        'Rigorous safety protocols ensure a secure environment for workers and clients alike.',
    },
  ]
  // const partners = [
  //   'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  //   'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  //   'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  //   'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  //   'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  // ]
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Trust Indicators Bar */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              {
                value: '10+',
                label: 'Years Experience',
              },
              {
                value: '30+',
                label: 'Projects Completed',
              },
              {
                value: '98%',
                label: 'Client Satisfaction',
              },
              {
                value: '200+',
                label: 'Team Members',
              },
            ].map((stat, index) => (
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
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <AnimatedSection direction="right">
                <div className="relative">
                  <img
                    src="/img-21.avif"
                    // src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Construction Excellence"
                    className="rounded-2xl shadow-2xl w-full "
                  />
                  {/* Experience Badge */}
                  <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-2xl shadow-xl hidden md:block">
                    <div className="text-4xl font-bold">6+</div>
                    <div className="text-sm opacity-90">
                      Years of Excellence
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-xl -z-10"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-lg -z-10"></div>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:w-1/2">
              <AnimatedSection direction="left">
                <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                  About RGSM Builders
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3 mb-6">
                  Building Dreams Into Reality 
                </h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  RGSM Builders has been at the forefront of construction
                  excellence, delivering projects that stand the test of time.
                  Our commitment to quality, innovation, and client satisfaction
                  sets us apart.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  From residential homes to commercial complexes and industrial
                  facilities, we bring expertise and dedication to every project
                  we undertake.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    'Certified Professionals',
                    'Quality Materials',
                    'On-Time Delivery',
                    'Safety First',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" to="/about" icon>
                    Learn More About Us
                  </Button>
                  <Button variant="outline" to="/contact">
                    Contact Us
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <ServicesOverview />
      <ConstructionSection/>
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3">
              The RGSM Advantage
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              What sets us apart from other construction companies and makes us
              the preferred choice for clients.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-lg h-full text-center group hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-accent/20">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <FeaturedProjects />
      <Testimonials />

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              How We Work
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3">
              Our Simple Process
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              From initial consultation to project completion, we make the
              construction journey smooth and transparent.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200"></div>

            {[
              {
                step: '01',
                title: 'Consultation',
                description:
                  'We discuss your vision, requirements, and budget to understand your needs.',
              },
              {
                step: '02',
                title: 'Planning',
                description:
                  'Our team creates detailed plans, timelines, and cost estimates for your approval.',
              },
              {
                step: '03',
                title: 'Construction',
                description:
                  'Expert execution with regular updates and quality checks at every stage.',
              },
              {
                step: '04',
                title: 'Handover',
                description:
                  'Final inspection, documentation, and keys to your completed project.',
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold relative z-10 shadow-lg">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partners/Clients Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-10">
            <p className="text-gray-500 font-medium">
              Trusted by Leading Organizations
            </p>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center text-gray-500 font-bold"
              >
                Partner {index + 1}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary-light text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <AnimatedSection className="lg:w-2/3">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Build Your Vision?
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Contact us today for a free consultation and let's discuss how
                we can bring your construction project to life with excellence
                and precision.
              </p>
            </AnimatedSection>

            <AnimatedSection
              delay={0.2}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="accent" size="lg" to="/contact" icon>
                Get a Free Quote
              </Button>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-md font-semibold hover:bg-white/20 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" /> Call Now
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
