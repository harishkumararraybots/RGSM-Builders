import { useEffect, useState } from 'react';
import { ServicePageTemplate } from '../../components/shared/ServicePageTemplate'
import { TrendingUp, Building2, Users } from 'lucide-react'
import { Loader } from '../../components/home/Loader';
export function CommercialProjects() {
      const [loading, setLoading] = useState<boolean>(true);
    
      useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000); // 2s loader
        return () => clearTimeout(timer);
      }, []);
    
      if (loading) return <Loader />;
  return (
    <ServicePageTemplate
      title="Commercial Projects"
      subtitle="Creating spaces designed for business success, productivity, and growth"
      description="We understand that commercial spaces need to be both functional and impressive. RGSM Builders delivers commercial construction projects that optimize workflow, attract customers, and reflect your brand identity. From modern office complexes to retail outlets and hospitality venues, we build spaces that drive business success. Our team combines architectural excellence with practical functionality to create commercial environments that inspire productivity and leave lasting impressions."
      image="/img-30.jpg"
      sidebarImage="/img-8.jpg"
      features={[
        'Office Buildings & Corporate Complexes',
        'Retail Stores & Shopping Centers',
        'Hotels & Hospitality Venues',
        'Restaurants & Food Service',
        'Mixed-Use Developments',
        'Interior Fit-outs & Renovations',
        'Parking Structures',
        'Healthcare Facilities',
      ]}
      benefits={[
        {
          title: 'Brand Alignment',
          description:
            'Spaces that physically embody your brand values, culture, and aesthetic identity.',
          icon: <Building2 className="w-8 h-8" />,
        },
        {
          title: 'Operational Efficiency',
          description:
            'Layouts designed to maximize productivity, customer flow, and operational effectiveness.',
          icon: <TrendingUp className="w-8 h-8" />,
        },
        {
          title: 'Investment Value',
          description:
            'High-quality construction that ensures long-term asset value and minimal maintenance.',
          icon: <Users className="w-8 h-8" />,
        },
      ]}
      process={[
        {
          step: 1,
          title: 'Business Analysis',
          description:
            'Understanding your business needs, brand identity, and operational requirements.',
        },
        {
          step: 2,
          title: 'Design Development',
          description:
            'Creating functional and attractive commercial designs that align with your goals.',
        },
        {
          step: 3,
          title: 'Construction',
          description:
            'Efficient construction with minimal disruption to your business operations.',
        },
        {
          step: 4,
          title: 'Handover',
          description:
            'Testing all systems and ensuring the space is ready for business.',
        },
      ]}
      stats={[
        {
          value: '15+',
          label: 'Commercial Projects',
        },
        {
          value: '2M+',
          label: 'Sq Ft Constructed',
        },
        {
          value: '98%',
          label: 'On-Time Delivery',
        },
        {
          value: '50+',
          label: 'Corporate Clients',
        },
      ]}
    />
  )
}
