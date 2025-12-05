import { ServicePageTemplate } from '../../components/shared/ServicePageTemplate'
import { Heart, Shield, Sparkles } from 'lucide-react'
export function ResidentialConstruction() {
  return (
    <ServicePageTemplate
      title="Residential Construction"
      subtitle="Building dream homes with exceptional quality, attention to detail, and superior craftsmanship"
      description="Your home is your sanctuary, and we treat it with the respect it deserves. RGSM Builders specializes in high-quality residential construction, from custom luxury homes to multi-unit developments. Our experienced team combines traditional craftsmanship with modern building techniques to create homes that are beautiful, functional, and built to last. We focus on quality materials, energy efficiency, and creating spaces that enhance your lifestyle and provide comfort for generations."
      image="https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
      features={[
        'Custom Home Design & Building',
        'Multi-Family Residential Units',
        'Luxury Villas & Estates',
        'Sustainable & Green Building',
        'Smart Home Integration',
        'Premium Interior Finishing',
        'Landscape & Outdoor Living',
        'Energy-Efficient Construction',
      ]}
      benefits={[
        {
          title: 'Superior Quality',
          description:
            'We use premium materials and skilled craftsmen to ensure lasting durability and beauty.',
          icon: <Sparkles className="w-8 h-8" />,
        },
        {
          title: 'Personalized Approach',
          description:
            'Every detail is customized to match your preferences, lifestyle, and family needs.',
          icon: <Heart className="w-8 h-8" />,
        },
        {
          title: 'Peace of Mind',
          description:
            'Comprehensive warranty and dedicated support throughout the entire building process.',
          icon: <Shield className="w-8 h-8" />,
        },
      ]}
      process={[
        {
          step: 1,
          title: 'Design Consultation',
          description:
            'Collaborating on home design, layout, and material selections.',
        },
        {
          step: 2,
          title: 'Foundation Work',
          description:
            'Site preparation, excavation, and laying a strong foundation.',
        },
        {
          step: 3,
          title: 'Construction Phase',
          description:
            'Framing, roofing, electrical, plumbing, and systems installation.',
        },
        {
          step: 4,
          title: 'Finishing & Handover',
          description:
            'Interior finishing, fixtures, landscaping, and final walkthrough.',
        },
      ]}
      stats={[
        {
          value: '300+',
          label: 'Homes Built',
        },
        {
          value: '100%',
          label: 'Client Satisfaction',
        },
        {
          value: '25+',
          label: 'Design Awards',
        },
        {
          value: '15+',
          label: 'Years Experience',
        },
      ]}
    />
  )
}
