import  { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '../shared/AnimatedSection'
import { Button } from '../shared/Button'
import {
  ArrowRight,
  MapPin,
  Calendar,
  Building2,
} from 'lucide-react'

export function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'industrial', name: 'Industrial' },

    // ⭐ NEW TAB ADDED
    { id: 'renewable', name: 'Renewable' },
  ]

  const projects = [
    {
      title: 'Skyline Office Complex',
      category: 'commercial',
      location: 'Bengaluru',
      year: '2023',
      size: '50,000 sq ft',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'
    },
    // {
    //   title: 'Modern Riverside Villa',
    //   category: 'residential',
    //   location: 'Bengaluru',
    //   year: '2023',
    //   size: '8,500 sq ft',
    //   image: '/img-5.jpg'
    // },
    {
      title: 'Tech Manufacturing Hub',
      category: 'industrial',
      location: 'Industrial Park',
      year: '2022',
      size: '120,000 sq ft',
      image: 'https://images.unsplash.com/photo-1553434320-e9f5757140b1?w=800'
    },
    {
      title: 'Luxury Apartment Tower',
      category: 'residential',
      location: 'Bengaluru',
      year: '2023',
      size: '200 Units',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800'
    },
    {
      title: 'Corporate Headquarters',
      category: 'commercial',
      location: 'Bengaluru',
      year: '2022',
      size: '75,000 sq ft',
      image: 'https://images.unsplash.com/photo-1554435493-93422e8220c8?w=800'
    },
    {
      title: 'Logistics Warehouse',
      category: 'industrial',
      location: 'Bengaluru',
      year: '2023',
      size: '200,000 sq ft',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800'
    },

    // ⭐ NEW RENEWABLE PROJECT ADDED
    {
      title: 'Solar Power Plant',
      category: 'renewable',
      location: 'Mysuru',
      year: '2024',
      size: '5 MW Plant',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800'
    }
  ]

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <AnimatedSection className="max-w-2xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3">
              Featured Projects
            </h2>
            <p className="text-gray-600 mt-4">
              Explore our diverse portfolio of successfully completed
              construction projects across various sectors.
            </p>
          </AnimatedSection>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${activeCategory === cat.id ? 'bg-primary text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl h-80 mb-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-accent text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h4 className="text-white text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" /> {project.location}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" /> {project.year}
                      </span>
                      <span className="flex items-center">
                        <Building2 className="w-4 h-4 mr-1" /> {project.size}
                      </span>
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Button variant="outline" size="lg" to="/projects" icon>
            View All Projects
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
