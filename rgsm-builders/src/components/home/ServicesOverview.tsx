import { ServiceCard } from '../shared/ServiceCard'
import { AnimatedSection } from '../shared/AnimatedSection'
import { Button } from '../shared/Button'

export function ServicesOverview() {
  const services = [
    {
      title: 'Planning',
      description:
        'Strategic project planning and management to ensure your construction project starts on the right foundation.',
      // icon: <PencilRuler className="w-6 h-6" />,
      link: '/services/planning',
      image:
        '/img-12.jpg',
    },
    {
      title: 'Architectural Work',
      description:
        'Comprehensive 2D and 3D architectural designs that bring your vision to life before construction begins.',
      // icon: <DraftingCompass className="w-6 h-6" />,
      link: '/services/architectural-work',
      // image:
      //   'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
         image:
        '/img-25.png',
    },
    {
      title: 'Residential Construction',
      description:
        'Building dream homes with attention to detail, quality materials, and superior craftsmanship.',
      // icon: <Home className="w-6 h-6" />,
      link: '/services/residential-construction',
      image:
        '/img-34.jpg',
    },
    {
      title: 'Commercial Projects',
      description:
        'Office buildings, retail spaces, and commercial complexes designed for business success.',
      // icon: <Building2 className="w-6 h-6" />,
      link: '/services/commercial-projects',
      image:
        '/img-28.jpg',
    },
    {
      title: 'Industrial Infrastructure',
      description:
        'Robust industrial facilities, warehouses, and factories built to withstand heavy operations.',
      // icon: <Factory className="w-6 h-6" />,
      link: '/services/industrial-infrastructure',
      image:
        '/img-18.jpg',
    },
    {
      title: 'Renovation & Remodeling',
      description:
        'Transforming existing spaces into modern, functional environments that meet current needs.',
      // icon: <Hammer className="w-6 h-6" />,
      link: '/services/renovation-remodeling',
      image:
        '/img-19.jpg',
    },
    {
      title: 'Turnkey Solutions',
      description:
        'End-to-end project handling from concept to completion, delivering ready-to-use facilities.',
      // icon: <Key className="w-6 h-6" />,
      link: '/services/turnkey-solutions',
      image:
        '/img-36.jpg',
    },
    {
      title: 'Steel Structure Design',
      description:
        'Specialized steel structure design and fabrication for durability and architectural flexibility.',
      // icon: <HardHat className="w-6 h-6" />,
      link: '/services/steel-structure-design',
      image:
        '/img-39.avif',
    },
  ]
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3 mb-6">
            Comprehensive Construction Services
          </h2>
          <p className="text-gray-600 text-lg">
            We offer a full spectrum of construction and design services
            tailored to meet the unique needs of every client, ensuring quality
            and precision at every step.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard icon={undefined} key={index} {...service} index={index} />
          ))}
        </div>

        <AnimatedSection delay={0.5} className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? We offer custom solutions for
            unique requirements.
          </p>
          <Button variant="primary" size="lg" to="/contact" icon>
            Discuss Your Project
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
