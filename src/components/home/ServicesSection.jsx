import { motion } from "framer-motion";
import { Building2, Palette, Home, Wrench, Lightbulb, Users } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const services = [
    {
        icon: Building2,
        title: "Architecture",
        description: "From concept to completion, we design buildings that stand the test of time while pushing creative boundaries.",
    },
    {
        icon: Palette,
        title: "Interior Design",
        description: "Creating cohesive interior environments that reflect your personality and enhance your lifestyle.",
    },
    {
        icon: Home,
        title: "Residential",
        description: "Bespoke homes designed around your unique needs, bringing together comfort and sophistication.",
    },
    {
        icon: Wrench,
        title: "Renovation",
        description: "Breathing new life into existing spaces with thoughtful redesign and modern updates.",
    },
    {
        icon: Lightbulb,
        title: "Consulting",
        description: "Expert guidance on design strategy, feasibility studies, and project planning.",
    },
    {
        icon: Users,
        title: "Project Management",
        description: "End-to-end project oversight ensuring quality delivery on time and within budget.",
    },
];

const ServicesSection = () => {
    return (
      <section className="section-padding bg-charcoal relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <SectionHeading 
              label="What We Do" 
              title="Our Services" 
              description="Comprehensive design solutions tailored to bring your vision to life." 
              align="center"
              light={true}
            />
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div 
                key={service.title} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }} 
                transition={{ duration: 0.5, delay: index * 0.1 }} 
                className="group p-8 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-500"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 flex items-center justify-center bg-primary/20 rounded-2xl text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500"
                >
                  <service.icon size={28} />
                </motion.div>
                <h3 className="text-xl font-display mb-4 text-white">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>
    );
};

export default ServicesSection;
