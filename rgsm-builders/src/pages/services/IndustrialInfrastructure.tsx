import { useEffect, useState } from 'react';
import { ServicePageTemplate } from '../../components/shared/ServicePageTemplate'
import { Shield, Zap, Settings } from 'lucide-react'
import { Loader } from '../../components/home/Loader';
export function IndustrialInfrastructure() {
     const [loading, setLoading] = useState<boolean>(true);
      
        useEffect(() => {
          const timer = setTimeout(() => setLoading(false), 1000); // 2s loader
          return () => clearTimeout(timer);
        }, []);
      
        if (loading) return <Loader />;
  return (
    <ServicePageTemplate
      title="Industrial Infrastructure"
      subtitle="Robust industrial solutions engineered for heavy operations and maximum efficiency"
      description="Industrial projects require specialized knowledge, robust construction techniques, and strict adherence to safety standards. RGSM Builders has extensive experience in constructing factories, warehouses, manufacturing plants, and industrial facilities. We prioritize structural integrity, operational efficiency, and workplace safety in every industrial project we undertake. Our team understands the unique challenges of industrial construction and delivers facilities that support your operations for decades."
      image="/img-32.jpg"
      sidebarImage="/img-5.jpg"
      features={[
        'Manufacturing Plants & Factories',
        'Warehouses & Distribution Centers',
        'Cold Storage Facilities',
        'Heavy Machinery Foundations',
        'Industrial Sheds & Workshops',
        'Process Plant Construction',
        'Safety & Compliance Upgrades',
        'Utility Infrastructure',
      ]}
      benefits={[
        {
          title: 'Built for Durability',
          description:
            'Structures engineered to withstand heavy loads, harsh conditions, and continuous operations.',
          icon: <Shield className="w-8 h-8" />,
        },
        {
          title: 'Operational Efficiency',
          description:
            'Optimized layouts for logistics, production workflows, and material handling.',
          icon: <Zap className="w-8 h-8" />,
        },
        {
          title: 'Safety Compliance',
          description:
            'Strict adherence to industrial safety standards, regulations, and best practices.',
          icon: <Settings className="w-8 h-8" />,
        },
      ]}
      process={[
        {
          step: 1,
          title: 'Requirements Analysis',
          description:
            'Analyzing operational requirements, load specifications, and safety needs.',
        },
        {
          step: 2,
          title: 'Engineering Design',
          description:
            'Structural engineering, systems planning, and utility design.',
        },
        {
          step: 3,
          title: 'Heavy Construction',
          description:
            'Specialized construction using industrial-grade materials and techniques.',
        },
        {
          step: 4,
          title: 'Commissioning',
          description:
            'Final inspection, systems testing, and operational handover.',
        },
      ]}
      stats={[
        {
          value: '100+',
          label: 'Industrial Projects',
        },
        {
          value: '5M+',
          label: 'Sq Ft Built',
        },
        {
          value: '100%',
          label: 'Safety Record',
        },
        {
          value: '30+',
          label: 'Industry Partners',
        },
      ]}
    />
  )
}
