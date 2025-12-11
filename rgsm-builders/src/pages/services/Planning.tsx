import { useEffect, useState } from 'react';
import { ServicePageTemplate } from '../../components/shared/ServicePageTemplate'
import { Target, Clock, DollarSign } from 'lucide-react'
import { Loader } from '../../components/home/Loader';
export function Planning() {
   const [loading, setLoading] = useState<boolean>(true);
        
          useEffect(() => {
            const timer = setTimeout(() => setLoading(false), 1000); // 2s loader
            return () => clearTimeout(timer);
          }, []);
        
          if (loading) return <Loader />;
  return (
    <ServicePageTemplate
      title="Planning"
      subtitle="Strategic construction planning and project management that sets the foundation for success"
      description="Effective planning is the cornerstone of any successful construction project. At RGSM Builders, we provide comprehensive planning services that lay the groundwork for excellence. Our experienced team conducts thorough feasibility studies, creates detailed project schedules, and develops accurate cost estimates to ensure your project starts on the right foundation. We work closely with you to understand your vision, requirements, and constraints, then translate them into actionable plans that guide every phase of construction."
      image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
      sidebarImage="/img-12.jpg"
      features={[
        'Comprehensive Feasibility Studies',
        'Detailed Site Analysis & Surveys',
        'Accurate Cost Estimation & Budgeting',
        'Project Scheduling & Timeline Management',
        'Regulatory Compliance & Permitting',
        'Resource Allocation Planning',
        'Risk Assessment & Mitigation',
        'Stakeholder Coordination',
      ]}
      benefits={[
        {
          title: 'Cost Efficiency',
          description:
            'Accurate budgeting and resource planning prevent costly overruns and keep your project financially on track.',
          icon: <DollarSign className="w-8 h-8" />,
        },
        {
          title: 'Timely Delivery',
          description:
            'Detailed schedules and milestone tracking ensure projects stay on track and meet deadlines consistently.',
          icon: <Clock className="w-8 h-8" />,
        },
        {
          title: 'Risk Mitigation',
          description:
            'Proactive identification and management of potential issues before they become costly problems.',
          icon: <Target className="w-8 h-8" />,
        },
      ]}
      process={[
        {
          step: 1,
          title: 'Initial Consultation',
          description:
            'We meet to understand your vision, requirements, budget, and timeline constraints.',
        },
        {
          step: 2,
          title: 'Site Analysis',
          description:
            'Comprehensive site evaluation including surveys, soil tests, and environmental assessments.',
        },
        {
          step: 3,
          title: 'Strategic Planning',
          description:
            'Development of detailed project plans, schedules, and resource allocation strategies.',
        },
        {
          step: 4,
          title: 'Final Approval',
          description:
            'Review, refinement, and approval of plans before moving to execution phase.',
        },
      ]}
      stats={[
        {
          value: '200+',
          label: 'Projects Planned',
        },
        {
          value: '95%',
          label: 'On-Budget Rate',
        },
        {
          value: '98%',
          label: 'On-Time Delivery',
        },
        {
          value: '6+',
          label: 'Years Experience',
        },
      ]}
    />
  )
}
