import { ServicePageTemplate } from '../../components/shared/ServicePageTemplate'
import { Key, Clock, CheckCircle } from 'lucide-react'
export function TurnkeySolutions() {
  return (
    <ServicePageTemplate
      title="Turnkey Solutions"
      subtitle="Complete project handling from concept to keys - hassle-free construction"
      description="Our turnkey solutions offer a completely hassle-free construction experience. RGSM Builders takes full responsibility for the entire project lifecycle - from initial design and engineering through construction and interior finishing to final handover. You simply share your vision, and we handle everything else. This comprehensive approach ensures seamless coordination, faster delivery, and a single point of accountability for your entire project."
      image="https://images.unsplash.com/photo-1560518883-ce09059ee971?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
      features={[
        'End-to-End Project Management',
        'Design-Build Integration',
        'Procurement & Supply Chain',
        'Regulatory Approvals & Permits',
        'Interior Design & Furnishing',
        'MEP Systems Installation',
        'Quality Assurance & Testing',
        'Post-Handover Support',
      ]}
      benefits={[
        {
          title: 'Single Point of Contact',
          description:
            'Streamlined communication and complete accountability with one dedicated team.',
          icon: <CheckCircle className="w-8 h-8" />,
        },
        {
          title: 'Faster Delivery',
          description:
            'Integrated processes and parallel workflows significantly reduce project timelines.',
          icon: <Clock className="w-8 h-8" />,
        },
        {
          title: 'Cost Certainty',
          description:
            'Fixed pricing models and comprehensive contracts minimize financial surprises.',
          icon: <Key className="w-8 h-8" />,
        },
      ]}
      process={[
        {
          step: 1,
          title: 'Complete Briefing',
          description:
            'Defining the full project scope, requirements, and expectations.',
        },
        {
          step: 2,
          title: 'Comprehensive Proposal',
          description:
            'Detailed proposal including design, cost breakdown, and timeline.',
        },
        {
          step: 3,
          title: 'Full Execution',
          description:
            'Managing all aspects from design through construction to finishing.',
        },
        {
          step: 4,
          title: 'Keys Handover',
          description:
            'Delivering a completely ready-to-use facility with all documentation.',
        },
      ]}
      stats={[
        {
          value: '80+',
          label: 'Turnkey Projects',
        },
        {
          value: '100%',
          label: 'On-Budget',
        },
        {
          value: '95%',
          label: 'Early Delivery',
        },
        {
          value: '50+',
          label: 'Happy Clients',
        },
      ]}
    />
  )
}
