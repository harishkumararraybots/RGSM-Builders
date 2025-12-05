import { motion } from 'framer-motion'
import { AnimatedSection } from '../components/shared/AnimatedSection'
import { Button } from '../components/shared/Button'
import {
  
  Users,
  Award,
  ShieldCheck,
  Target,
  Lightbulb,
  Linkedin,

  Calendar,
  TrendingUp,
  Building2,
  Handshake,
} from 'lucide-react'
export function About() {
  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: '25+ years in construction industry',
      linkedin: '#',
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Architect',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Award-winning architectural designs',
      linkedin: '#',
    },
    {
      name: 'Amit Patel',
      role: 'Project Director',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Expert in large-scale projects',
      linkedin: '#',
    },
    {
      name: 'Sunita Reddy',
      role: 'Head of Operations',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Streamlining construction processes',
      linkedin: '#',
    },
  ]
  const milestones = [
    {
      year: '2008',
      title: 'Company Founded',
      description:
        'Started as a small residential contractor with a vision for excellence',
    },
    {
      year: '2012',
      title: 'Commercial Expansion',
      description: 'Expanded into commercial construction projects',
    },
    {
      year: '2016',
      title: 'Industrial Division',
      description: 'Launched industrial infrastructure services',
    },
    {
      year: '2020',
      title: 'Regional Leader',
      description: 'Became the leading construction company in the region',
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Opened state-of-the-art design and planning center',
    },
  ]
  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management System',
    },
    {
      name: 'ISO 14001:2015',
      description: 'Environmental Management',
    },
    {
      name: 'OHSAS 18001',
      description: 'Occupational Health & Safety',
    },
    {
      name: 'LEED Certified',
      description: 'Green Building Standards',
    },
  ]
  const stats = [
    {
      value: '500+',
      label: 'Projects Completed',
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      value: '15+',
      label: 'Years Experience',
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      value: '200+',
      label: 'Team Members',
      icon: <Users className="w-6 h-6" />,
    },
    {
      value: '98%',
      label: 'Client Satisfaction',
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ]
  return (
    <div className="pt-20">
      {/* Hero Section with Parallax */}
      <div className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
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
              About RGSM Builders
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Building <span className="text-accent">Trust</span> Through
              Excellence
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              For over 15 years, we've been transforming visions into reality
              with unwavering commitment to quality, safety, and client
              satisfaction.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" to="/contact" icon>
                Start Your Project
              </Button>
              <Button variant="white" size="lg" to="/services/planning">
                Our Services
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Quick Stats Bar */}
      <section className="relative -mt-16 z-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <AnimatedSection direction="right">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Construction Team"
                    className="rounded-2xl shadow-2xl w-full"
                  />
                  {/* Floating Card */}
                  <div className="absolute -bottom-8 -right-8 bg-accent text-white p-6 rounded-xl shadow-xl hidden md:block">
                    <div className="text-4xl font-bold">15+</div>
                    <div className="text-sm opacity-90">
                      Years of Excellence
                    </div>
                  </div>
                  {/* Decorative Element */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-xl -z-10"></div>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:w-1/2">
              <AnimatedSection direction="left">
                <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3 mb-6">
                  Building Excellence Since 2008
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  RGSM Builders was founded with a simple yet powerful vision:
                  to deliver construction projects that stand the test of time.
                  What started as a small residential contractor has grown into
                  a full-service construction powerhouse.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our journey has been marked by continuous growth, innovation,
                  and an unwavering commitment to our clients. Today, we handle
                  complex commercial, industrial, and infrastructure projects
                  across the region, always maintaining the personal touch that
                  defined our beginnings.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      icon: <ShieldCheck className="w-5 h-5" />,
                      text: 'Certified Professionals',
                    },
                    {
                      icon: <Award className="w-5 h-5" />,
                      text: 'Quality Materials',
                    },
                    {
                      icon: <Calendar className="w-5 h-5" />,
                      text: 'On-Time Delivery',
                    },
                    {
                      icon: <Users className="w-5 h-5" />,
                      text: 'Dedicated Teams',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-gray-50 p-4 rounded-lg"
                    >
                      <div className="text-accent mr-3">{item.icon}</div>
                      <span className="font-medium text-gray-800">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3">
              Our Mission & Vision
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="bg-white p-10 rounded-2xl shadow-lg h-full border-l-4 border-primary relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To deliver exceptional construction services that exceed
                    client expectations through innovation, quality
                    craftsmanship, and sustainable practices. We are committed
                    to building structures that enhance communities and stand as
                    testaments to excellence.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white p-10 rounded-2xl shadow-lg h-full border-l-4 border-accent relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                    <Lightbulb className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the most trusted and innovative construction company
                    in the region, recognized for transforming architectural
                    dreams into reality while setting new standards for quality,
                    safety, and environmental responsibility.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Foundation
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3">
              Core Values
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              These principles guide every decision we make and every project we
              undertake.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: 'Integrity',
                description: 'Honesty and transparency in every interaction',
                color: 'blue',
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Excellence',
                description: 'Uncompromising quality in every detail',
                color: 'orange',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Collaboration',
                description: 'Working together to achieve great results',
                color: 'blue',
              },
              {
                icon: <Handshake className="w-8 h-8" />,
                title: 'Commitment',
                description: 'Dedicated to delivering on our promises',
                color: 'orange',
              },
            ].map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="group bg-white p-8 rounded-2xl shadow-lg text-center h-full border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300">
                  <div
                    className={`w-20 h-20 ${value.color === 'orange' ? 'bg-accent/10' : 'bg-primary/10'} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div
                      className={
                        value.color === 'orange'
                          ? 'text-accent'
                          : 'text-primary'
                      }
                    >
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
              Company Milestones
            </h2>
          </AnimatedSection>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/20 hidden md:block"></div>

            {milestones.map((milestone, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.15}
                direction={index % 2 === 0 ? 'right' : 'left'}
              >
                <div
                  className={`flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div
                    className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}
                  >
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                      <span className="text-accent font-bold text-2xl">
                        {milestone.year}
                      </span>
                      <h4 className="text-xl font-bold mt-2 mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-blue-100 text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-5 h-5 bg-accent rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  <div className="hidden md:block w-5/12"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Meet The Experts
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3">
              Our Leadership Team
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering excellence in
              every project.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <a
                        href={member.linkedin}
                        className="bg-white text-primary p-3 rounded-full hover:bg-accent hover:text-white transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-bold text-primary">
                      {member.name}
                    </h4>
                    <p className="text-accent font-medium text-sm mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-500 text-sm">{member.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Quality Assured
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3">
              Certifications & Standards
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-xl shadow-md text-center h-full border border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-primary mb-1">{cert.name}</h4>
                  <p className="text-gray-500 text-sm">{cert.description}</p>
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
              Ready to Build With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trusted RGSM Builders with
              their construction dreams.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="accent" size="lg" to="/contact" icon>
                Get a Free Quote
              </Button>
              <Button variant="white" size="lg" to="/services/planning">
                Explore Services
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
