import { motion } from "framer-motion";
import { Compass, Ruler, PenTool, Lightbulb, Home, Building2 } from "lucide-react";

const features = [
  { icon: Compass, label: "Architecture" },
  { icon: Ruler, label: "Planning" },
  { icon: PenTool, label: "Interior Design" },
  { icon: Lightbulb, label: "Consultation" },
  { icon: Home, label: "Residential" },
  { icon: Building2, label: "Commercial" },
];

const IconStrip = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-charcoal">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors duration-300"
              >
                <feature.icon 
                  size={32} 
                  className="text-primary group-hover:text-white transition-colors duration-300" 
                />
              </motion.div>
              
              {/* Label */}
              <span className="text-white/70 text-sm font-medium tracking-wide group-hover:text-white transition-colors duration-300">
                {feature.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default IconStrip;
