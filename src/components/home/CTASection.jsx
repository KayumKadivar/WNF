import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const CTASection = () => {
    return (<section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="relative p-12 md:p-20 bg-primary text-primary-foreground text-center">
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-primary-foreground/30"/>
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-primary-foreground/30"/>

          <span className="heading-sm mb-6 block">
            Start Your Project
          </span>
          <h2 className="heading-lg mb-6 max-w-3xl mx-auto">
            Ready to Transform Your Space?
          </h2>
          <p className="body-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Let's collaborate to create something extraordinary. Reach out to discuss 
            your vision and see how we can bring it to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/contact" className="group">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"/>
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild className="border-primary-foreground/30">
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>);
};
export default CTASection;
