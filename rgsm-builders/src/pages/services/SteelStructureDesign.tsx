import { useEffect, useState } from 'react';
import { ServicePageTemplate } from '../../components/shared/ServicePageTemplate'
import { Zap, Recycle, Maximize } from 'lucide-react'
import { Loader } from '../../components/home/Loader';
export function SteelStructureDesign() {
   const [loading, setLoading] = useState<boolean>(true);
        
          useEffect(() => {
            const timer = setTimeout(() => setLoading(false), 1000); // 2s loader
            return () => clearTimeout(timer);
          }, []);
        
          if (loading) return <Loader />;
  return (
    <ServicePageTemplate
      title="Steel Structure Design"
      subtitle="Engineering strength, versatility, and modern architectural possibilities"
      description="Steel structures offer unmatched strength, durability, and design flexibility for modern construction. RGSM Builders specializes in the design, fabrication, and erection of steel structures for various applications. From industrial sheds and warehouses to high-rise building frames and architectural features, we deliver precision-engineered steel solutions. Our team combines structural engineering expertise with advanced fabrication capabilities to create steel structures that are safe, efficient, and aesthetically impressive."
      image="/img-39.avif"
      sidebarImage="/img-18.jpg"
      features={[
        'Pre-Engineered Buildings (PEB)',
        'Structural Steel Framing',
        'Industrial Sheds & Warehouses',
        'Mezzanine Floor Systems',
        'Steel Bridges & Walkways',
        'Custom Steel Fabrication',
        'Roof Trusses & Canopies',
        'Steel Connection Design',
      ]}
      benefits={[
        {
          title: 'Rapid Construction',
          description:
            'Prefabricated components allow for significantly faster on-site assembly and completion.',
          icon: <Zap className="w-8 h-8" />,
        },
        {
          title: 'Design Flexibility',
          description:
            'Large clear spans and versatile configurations enable unique architectural possibilities.',
          icon: <Maximize className="w-8 h-8" />,
        },
        {
          title: 'Sustainability',
          description:
            'Steel is highly recyclable, durable, and contributes to sustainable construction practices.',
          icon: <Recycle className="w-8 h-8" />,
        },
      ]}
      process={[
        {
          step: 1,
          title: 'Structural Design',
          description:
            'Detailed structural analysis, load calculations, and steel detailing.',
        },
        {
          step: 2,
          title: 'Fabrication',
          description:
            'Precision manufacturing of steel components in controlled facilities.',
        },
        {
          step: 3,
          title: 'Logistics',
          description:
            'Careful transportation and staging of components at the site.',
        },
        {
          step: 4,
          title: 'Erection',
          description:
            'Safe and accurate assembly of the complete steel structure.',
        },
      ]}
      stats={[
        {
          value: '200+',
          label: 'Steel Projects',
        },
        {
          value: '50K+',
          label: 'Tons Fabricated',
        },
        {
          value: '100%',
          label: 'Safety Record',
        },
        {
          value: '25+',
          label: 'Engineers',
        },
      ]}
    />
  )
}
