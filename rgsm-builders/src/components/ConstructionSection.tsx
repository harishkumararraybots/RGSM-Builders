import Lottie from "lottie-react";
import constructionAnimation from "../assets/animations/Construction Animation.json";
import { Link } from "react-router-dom";

export function ConstructionSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 grid md:grid-cols-2 items-center gap-12">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#1E3A8A]/70 uppercase">
            On-Site Excellence
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E3A8A] leading-tight">
            Bringing Your Vision<br className="hidden md:block" /> 
            to Life, Brick by Brick.
          </h2>

          <p className="text-gray-600 leading-relaxed">
            From residential homes to large-scale commercial and industrial
            projects, our teams are on-site, coordinating every detail with
            precision. Skilled workers, modern equipment, and strict safety
            standards ensure that every structure we build is strong, durable,
            and delivered on time.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/services/planning"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-[#1E3A8A] text-white font-semibold shadow-md hover:bg-blue-900 transition"
            >
              View Our Services
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-[#1E3A8A] text-[#1E3A8A] font-semibold hover:bg-[#1E3A8A] hover:text-white transition"
            >
              Get a Project Quote
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-4">
            <div>
              <p className="text-2xl font-bold text-[#1E3A8A]">6+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Years Experience
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#1E3A8A]">30+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Projects Delivered
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#1E3A8A]">100%</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Quality Focus
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT ANIMATION */}
        <div className="relative">
          <div className="absolute -inset-6 bg-[#1E3A8A]/5 rounded-3xl blur-2xl" />
          <div className="relative rounded-3xl bg-white shadow-xl p-4 md:p-6">
            <Lottie
              animationData={constructionAnimation}
              loop
              autoplay
              className="w-full h-full max-h-[380px] md:max-h-[460px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
