import { ServicePageTemplate } from '../../components/shared/ServicePageTemplate'
import { Eye, Layers, Palette } from 'lucide-react'
export function ArchitecturalWork() {
  return (
    <ServicePageTemplate
      title="Architectural Work"
      subtitle="Innovative 2D & 3D architectural design solutions that bring your vision to life"
      description="Our architectural services combine creativity with practicality to create stunning designs that are both beautiful and functional. We leverage the latest design software and visualization technologies to create comprehensive 2D floor plans, detailed elevations, and photorealistic 3D renderings. Our team of experienced architects works closely with you to understand your aesthetic preferences, functional requirements, and budget constraints, then translates them into designs that exceed expectations."
      image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
      features={[
        'Detailed 2D Floor Plans & Elevations',
        'Photorealistic 3D Modeling & Rendering',
        'Interior Design & Space Planning',
        'Structural Design Integration',
        'Landscape Architecture',
        'Virtual Reality Walkthroughs',
        'Construction Documentation',
        'Design Revisions & Iterations',
      ]}
      benefits={[
        {
          title: 'Visual Clarity',
          description:
            'See exactly what your project will look like with photorealistic 3D renders before construction begins.',
          icon: <Eye className="w-8 h-8" />,
        },
        {
          title: 'Design Optimization',
          description:
            'Identify and resolve design issues early in the process, saving time and money during construction.',
          icon: <Layers className="w-8 h-8" />,
        },
        {
          title: 'Custom Solutions',
          description:
            'Tailored designs that reflect your unique style, functional needs, and budget requirements.',
          icon: <Palette className="w-8 h-8" />,
        },
      ]}
      process={[
        {
          step: 1,
          title: 'Concept Development',
          description:
            'Initial sketches and layout ideas based on your requirements and preferences.',
        },
        {
          step: 2,
          title: '2D Drafting',
          description:
            'Creation of detailed floor plans, elevations, and technical drawings.',
        },
        {
          step: 3,
          title: '3D Visualization',
          description:
            'Development of 3D models and photorealistic renders to visualize the final result.',
        },
        {
          step: 4,
          title: 'Documentation',
          description:
            'Final construction documents and specifications for building approval.',
        },
      ]}
      stats={[
        {
          value: '500+',
          label: 'Designs Created',
        },
        {
          value: '100%',
          label: 'Client Approval',
        },
        {
          value: '50+',
          label: 'Design Awards',
        },
        {
          value: '20+',
          label: 'Expert Architects',
        },
      ]}
    />
  )
}
