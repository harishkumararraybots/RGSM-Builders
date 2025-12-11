import { useEffect, useState } from 'react';
import { ServicePageTemplate } from '../../components/shared/ServicePageTemplate'
import { RefreshCw, TrendingUp, Home } from 'lucide-react'
import { Loader } from '../../components/home/Loader';
export function RenovationRemodeling() {
   const [loading, setLoading] = useState<boolean>(true);
        
          useEffect(() => {
            const timer = setTimeout(() => setLoading(false), 1000); // 2s loader
            return () => clearTimeout(timer);
          }, []);
        
          if (loading) return <Loader />;
  return (
    <ServicePageTemplate
      title="Renovation & Remodeling"
      subtitle="Transforming existing spaces into modern, functional environments"
      description="Breathe new life into existing structures with our comprehensive renovation and remodeling services. Whether it's updating an outdated home, modernizing a commercial office, or restoring a heritage building, RGSM Builders combines preservation with innovation to create refreshed, functional spaces. Our renovation experts assess existing conditions, identify opportunities for improvement, and execute transformations that enhance both aesthetics and functionality while respecting the original character of the structure."
      image="/img-28.jpg"
      sidebarImage="/img-29.jpg"
      features={[
        'Complete Home Renovations',
        'Kitchen & Bathroom Remodeling',
        'Office Space Modernization',
        'Structural Modifications',
        'Exterior Facelifts & Updates',
        'Room Additions & Extensions',
        'Historic Building Restoration',
        'Energy Efficiency Upgrades',
      ]}
      benefits={[
        {
          title: 'Increased Property Value',
          description:
            "Strategic renovations that significantly boost your property's market value and appeal.",
          icon: <TrendingUp className="w-8 h-8" />,
        },
        {
          title: 'Enhanced Comfort',
          description:
            'Improved energy efficiency, modern amenities, and better living or working comfort.',
          icon: <Home className="w-8 h-8" />,
        },
        {
          title: 'Modern Functionality',
          description:
            'Adapt older spaces to meet contemporary needs, technology, and lifestyle requirements.',
          icon: <RefreshCw className="w-8 h-8" />,
        },
      ]}
      process={[
        {
          step: 1,
          title: 'Assessment',
          description:
            'Thorough evaluation of existing structure, condition, and renovation potential.',
        },
        {
          step: 2,
          title: 'Design Planning',
          description:
            'Creating renovation plans that blend existing elements with new improvements.',
        },
        {
          step: 3,
          title: 'Careful Demolition',
          description:
            'Selective removal of old elements while preserving structural integrity.',
        },
        {
          step: 4,
          title: 'Reconstruction',
          description:
            'Building and finishing the new design with attention to detail.',
        },
      ]}
      stats={[
        {
          value: '250+',
          label: 'Renovations Done',
        },
        {
          value: '40%',
          label: 'Avg Value Increase',
        },
        {
          value: '100%',
          label: 'Client Satisfaction',
        },
        {
          value: '15+',
          label: 'Years Experience',
        },
      ]}
    />
  )
}
