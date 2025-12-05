import { motion } from 'framer-motion'
import { Button } from '../shared/Button'
import {  ChevronDown } from 'lucide-react'
export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      >
       <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/60 to-primary/40"></div>

      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-3/5">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <span className="inline-flex items-center py-2 px-4 rounded-full bg-accent/20 text-accent-light border border-accent/30 font-semibold text-sm mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
                Premier Construction Services
              </span>
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Building Your{' '}
              <span className="relative">
                <span className="text-accent">Vision</span>
                <motion.span
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: '100%',
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 1,
                  }}
                  className="absolute bottom-2 left-0 h-3 bg-accent/30 -z-10"
                />
              </span>{' '}
              With Precision
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed"
            >
              From residential dreams to industrial realities, RGSM Builders
              delivers excellence in every brick, beam, and blueprint. Transform
              your ideas into architectural masterpieces.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.6,
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" size="lg" to="/contact" icon>
                Start Your Project
              </Button>
              <Button variant="white" size="lg" to="/services/planning">
                Explore Services
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 1,
              }}
              className="mt-12 flex flex-wrap items-center gap-8"
            >
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center text-white text-xs font-bold"
                    >
                      {['R', 'G', 'S', 'M'][i]}
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <div className="text-white font-bold">500+ Projects</div>
                  <div className="text-blue-200 text-sm">
                    Successfully Completed
                  </div>
                </div>
              </div>
              <div className="h-12 w-px bg-white/20 hidden sm:block"></div>
              <div>
                <div className="flex items-center text-accent">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <div className="text-blue-200 text-sm mt-1">
                  4.9/5 Client Rating
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Floating Card */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
            className="lg:w-2/5 hidden lg:block"
          >
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="text-white mb-6">
                  <h3 className="text-2xl font-bold mb-2">
                    Quick Consultation
                  </h3>
                  <p className="text-blue-100 text-sm">
                    Get expert advice for your project
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center text-white">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                      <svg
                        className="w-5 h-5 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-blue-200">Call Us</div>
                      <div className="font-semibold">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                      <svg
                        className="w-5 h-5 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-blue-200">Email Us</div>
                      <div className="font-semibold">info@rgsmbuilders.com</div>
                    </div>
                  </div>
                </div>
                <Button
                  variant="accent"
                  className="w-full mt-6 justify-center"
                  to="/contact"
                >
                  Request a Quote
                </Button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-xl -z-10 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-xl -z-10 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white"
      >
        <span className="text-sm mb-2 opacity-80">Scroll to Explore</span>
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown className="w-6 h-6 opacity-60" />
        </motion.div>
      </motion.div>
    </div>
  )
}
