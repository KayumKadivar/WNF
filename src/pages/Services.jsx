import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Building2, Palette, Home, Wrench, Lightbulb, Users, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const services = [
    {
        icon: Building2,
        title: "Architecture",
        description: "From concept to completion, we design buildings that stand the test of time while pushing creative boundaries.",
        features: ["Master Planning", "Building Design", "3D Visualization", "Construction Documents"],
    },
    {
        icon: Palette,
        title: "Interior Design",
        description: "Creating cohesive interior environments that reflect your personality and enhance your lifestyle.",
        features: ["Space Planning", "Material Selection", "Custom Furniture", "Color Consultation"],
    },
    {
        icon: Home,
        title: "Residential",
        description: "Bespoke homes designed around your unique needs, bringing together comfort and sophistication.",
        features: ["Custom Homes", "Renovations", "Additions", "Landscape Integration"],
    },
    {
        icon: Wrench,
        title: "Renovation",
        description: "Breathing new life into existing spaces with thoughtful redesign and modern updates.",
        features: ["Historic Restoration", "Modern Updates", "Structural Changes", "Energy Efficiency"],
    },
    {
        icon: Lightbulb,
        title: "Consulting",
        description: "Expert guidance on design strategy, feasibility studies, and project planning.",
        features: ["Feasibility Studies", "Code Compliance", "Sustainability", "Budget Planning"],
    },
    {
        icon: Users,
        title: "Project Management",
        description: "End-to-end project oversight ensuring quality delivery on time and within budget.",
        features: ["Contractor Coordination", "Timeline Management", "Quality Control", "Budget Oversight"],
    },
];
const process = [
    {
        step: "01",
        title: "Discovery",
        description: "We begin with a thorough consultation to understand your vision, requirements, and project goals.",
    },
    {
        step: "02",
        title: "Concept Design",
        description: "Our team develops initial concepts and sketches, exploring various design directions.",
    },
    {
        step: "03",
        title: "Development",
        description: "Refining the chosen concept into detailed plans, specifications, and 3D visualizations.",
    },
    {
        step: "04",
        title: "Execution",
        description: "Managing the construction process to ensure the design vision becomes reality.",
    },
];
const Services = () => {
    return (<Layout>
      <Helmet>
        <title>Our Services | WNF Architecture & Interior Design</title>
        <meta name="description" content="Comprehensive architecture and interior design services including residential, commercial, renovation, and project management."/>
      </Helmet>

      <PageHero title="Our Services" description="Comprehensive design solutions tailored to bring your vision to life with excellence and precision."/>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (<motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group p-8 lg:p-10 bg-secondary/50 hover:bg-secondary transition-colors duration-500">
                <div className="w-14 h-14 flex items-center justify-center border border-primary/20 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <service.icon size={24}/>
                </div>
                <h3 className="text-xl lg:text-2xl font-display mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (<li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary/60 rounded-full"></span>
                      {feature}
                    </li>))}
                </ul>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.2em] text-primary mb-4 block">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6">
              Our Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures exceptional results from initial concept to final delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (<motion.div key={item.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.15 }} className="relative">
                <span className="text-6xl lg:text-7xl font-display text-primary/10 absolute -top-4 -left-2">
                  {item.step}
                </span>
                <div className="pt-12">
                  <h3 className="text-xl font-display mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Let's discuss your vision and explore how we can bring it to life with our expertise and passion for exceptional design.
            </p>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4"/>
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>);
};
export default Services;
