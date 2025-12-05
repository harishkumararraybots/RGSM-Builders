import  { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '../shared/AnimatedSection'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const testimonials = [
    {
      name: 'Robert Fox',
      role: 'CEO, TechCorp Industries',
      content:
        'RGSM Builders delivered our new headquarters on time and under budget. The attention to detail and professional management made the entire process seamless. Their team went above and beyond to ensure every aspect met our high standards.',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'Corporate Headquarters',
    },
    {
      name: 'Sarah Jenkins',
      role: 'Homeowner',
      content:
        'We are absolutely in love with our new home. The team listened to every request and the craftsmanship is outstanding. From the initial design consultation to the final walkthrough, RGSM made building our dream home a wonderful experience.',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'Custom Residential Home',
    },
    {
      name: 'Michael Chen',
      role: 'Director, Industrial Solutions Ltd',
      content:
        'The industrial facility RGSM built for us is world-class. Their understanding of structural requirements and safety standards is impressive. The project was completed ahead of schedule, allowing us to begin operations earlier than planned.',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'Manufacturing Facility',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Property Developer',
      content:
        'Working with RGSM on our multi-unit residential project was a fantastic experience. Their expertise in managing complex projects while maintaining quality is remarkable. I highly recommend them for any construction needs.',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      project: 'Luxury Apartment Complex',
    },
  ]
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }
  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    )
  }
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have
            to say about their experience with RGSM Builders.
          </p>
        </AnimatedSection>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -50,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative"
              >
                <Quote className="absolute top-8 right-8 w-16 h-16 text-gray-100" />

                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-24 h-24 rounded-2xl object-cover shadow-lg"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex text-accent mb-4">
                      {[...Array(testimonials[activeIndex].rating)].map(
                        (_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ),
                      )}
                    </div>

                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 italic relative z-10">
                      "{testimonials[activeIndex].content}"
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h4 className="font-bold text-xl text-primary">
                          {testimonials[activeIndex].name}
                        </h4>
                        <p className="text-gray-500">
                          {testimonials[activeIndex].role}
                        </p>
                      </div>
                      <div className="bg-gray-50 px-4 py-2 rounded-lg">
                        <span className="text-sm text-gray-500">Project: </span>
                        <span className="text-sm font-semibold text-primary">
                          {testimonials[activeIndex].project}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`transition-all duration-300 rounded-full ${index === activeIndex ? 'w-8 h-3 bg-accent' : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <AnimatedSection delay={0.3} className="mt-20">
          <p className="text-center text-gray-500 mb-8 font-medium">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div
                key={index}
                className="w-32 h-12 bg-gray-400 rounded flex items-center justify-center text-white font-bold text-sm"
              >
                Client {index + 1}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
