import  { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Building,  Clock, TrendingUp, MapPin } from 'lucide-react'
function AnimatedCounter({
  value,
  suffix = '',
  duration = 2,
}: {
  value: number
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
  })
  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const incrementTime = (duration * 1000) / end
      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start >= end) {
          clearInterval(timer)
        }
      }, incrementTime)
      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}
export function Stats() {
  const stats = [
    {
      label: 'Years of Excellence',
      value: 6,
      suffix: '+',
      icon: <Clock className="w-8 h-8" />,
      description: 'Industry experience',
    },
    {
      label: 'Projects Completed',
      value: 30,
      suffix: '+',
      icon: <Building className="w-8 h-8" />,
      description: 'Successful deliveries',
    },
    {
      label: 'Client Satisfaction',
      value: 98,
      suffix: '%',
      icon: <TrendingUp className="w-8 h-8" />,
      description: 'Happy customers',
    },
    {
      label: 'Expert Team Members',
      value: 20,
      suffix: '+',
      icon: <Users className="w-8 h-8" />,
      description: 'Skilled professionals',
    },
    // {
    //   label: 'Awards Won',
    //   value: 25,
    //   suffix: '+',
    //   icon: <Award className="w-8 h-8" />,
    //   description: 'Industry recognition',
    // },
    {
      label: 'Cities Served',
      value: 15,
      suffix: '+',
      icon: <MapPin className="w-8 h-8" />,
      description: 'Regional coverage',
    },
  ]
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        ></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Our Achievements
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Numbers That Speak
          </h2>
          <p className="text-blue-100 mt-4 max-w-2xl mx-auto">
            Our track record of excellence reflected in every metric that
            matters.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
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
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/20 mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 font-heading">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-blue-200 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
