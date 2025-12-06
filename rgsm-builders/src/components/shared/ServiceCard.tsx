import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  link: string
  image: string
  index: number
}
export function ServiceCard({
  title,
  description,
  link,
  image,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
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
      className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors z-10"></div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        {/* <div className="absolute -bottom-6 right-6 bg-accent text-white p-4 rounded-lg shadow-lg z-20 group-hover:bg-primary transition-colors duration-300">
          {icon}
        </div> */}
      </div>

      <div className="p-6 pt-10 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
          {description}
        </p>

        <Link
          to={link}
          className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors mt-auto"
        >
          Read More <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500"></div>
    </motion.div>
  )
}
