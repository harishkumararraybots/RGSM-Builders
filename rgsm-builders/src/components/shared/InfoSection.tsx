import Lottie, { LottieRefCurrentProps } from "lottie-react";
import CivilConstruction from "../../assets/animations/Civil Construction.json";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export function InfoSection() {
  const { scrollYProgress } = useScroll();

  const rotateY = useTransform(scrollYProgress, [0, 1], [-10, 15]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [5, -5]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
const handleMouseMove = (e: any) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateY = ((x - rect.width / 2) / rect.width) * 10;
  const rotateX = -((y - rect.height / 2) / rect.height) * 10;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
};
const lottieRef = useRef<LottieRefCurrentProps | null>(null);
const handleMouseLeave = (e: any) => {
  e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
};
useEffect(() => {
  if (lottieRef.current) {
    lottieRef.current.setSpeed(0.5); // Slow down the animation
  }
}, []);
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: 3D SCROLL PARALLAX */}
         {/* LEFT: PREMIUM 3D ANIMATED CARD */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-full max-w-lg p-8 rounded-3xl bg-white relative overflow-hidden shadow-lg"
            style={{ transformStyle: "preserve-3d" }}

            animate={{
              y: [0, -6, 0],
              boxShadow: [
                "0 8px 16px rgba(0,0,0,0.03)",
                "0 12px 24px rgba(0,0,0,0.05)",
                "0 8px 16px rgba(0,0,0,0.03)",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "mirror",
            }}

            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Soft Bottom Floating Shadow */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-40 h-6 bg-black/10 blur-2xl rounded-full -z-10"></div>

            {/* Blueprint Background (optional) */}
            {/* <div className="absolute inset-0 opacity-[0.05] bg-[url('/blueprint-lines.png')] bg-cover bg-center"></div> */}

            <Lottie 
          lottieRef={lottieRef}
          animationData={CivilConstruction}
          loop={true}
        />
          </motion.div>
        </motion.div>




          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Bringing <span className="text-primary">Engineering Excellence</span>
              To Every Project
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our expert team ensures quality, safety, and precision in all
              construction works from foundation to finishing.
            </p>

            <Link
              to="/services/planning"
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold shadow-lg 
                        hover:bg-primary/90 transition inline-block"
            >
              Learn More
            </Link>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
