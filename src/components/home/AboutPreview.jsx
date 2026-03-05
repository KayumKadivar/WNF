import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";
import aboutImage from "@/assets/NewImages/Interior/Studio WnF Office/JSR_8421-HDR.webp";
const AboutPreview = () => {
  return (<section className="section-padding bg-background">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="relative">
          <div className="relative overflow-hidden">
            <img src={aboutImage} alt="Our studio" className="w-full h-[500px] lg:h-[600px] object-cover image-zoom" />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/20 hidden lg:block" />
        </motion.div>

        {/* Content */}
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:pl-8">
          <SectionHeading label="About Us" title="A Studio Where Vision Meets Precision" description="Founded in 2021, WNF Studio has been at the forefront of architectural innovation, blending timeless design principles with contemporary aesthetics." />

          <div className="mt-10 space-y-6 text-muted-foreground">
            <p>
              Our multidisciplinary team of architects, interior designers, and project
              managers work collaboratively to deliver exceptional spaces that exceed
              expectations.
            </p>
            <p>
              Every project is a unique journey, guided by our commitment to
              sustainability, functionality, and aesthetic excellence.
            </p>
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="mt-12">
            <Button variant="elegant-outline" size="lg" asChild>
              <Link to="/about" className="group">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>);
};
export default AboutPreview;
