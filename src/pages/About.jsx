import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import aboutImage from "@/assets/NewImages/Interior/Studio WnF Office/JSR_8421-HDR.webp";
import team1 from "@/assets/team-1.webp";
import team2 from "@/assets/team-2.webp";
import team3 from "@/assets/team-3.webp";
import team4 from "@/assets/team-4.webp";
const team = [
  {
    name: "James Morrison",
    role: "Founder & Principal Architect",
    image: team1,
    bio: "With over 25 years of experience, James leads our vision for creating spaces that transcend the ordinary.",
  },
  {
    name: "Sofia Chen",
    role: "Interior Design Director",
    image: team2,
    bio: "Sofia brings a refined aesthetic sensibility to every project, blending function with beauty.",
  },
  {
    name: "David Miller",
    role: "Senior Architect",
    image: team3,
    bio: "David's innovative approach to sustainable design has earned numerous industry accolades.",
  },
  {
    name: "Emma Liu",
    role: "Project Manager",
    image: team4,
    bio: "Emma ensures every project runs smoothly from concept to completion with meticulous attention.",
  },
];
const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "200+", label: "Projects Completed" },
  { value: "25", label: "Design Awards" },
  { value: "50+", label: "Team Members" },
];
const About = () => {
  return (<>
    <Helmet>
      <title>About Us | WNF Studio - Architecture & Interior Design</title>
      <meta name="description" content="Learn about WNF Studio's journey, our award-winning team, and our commitment to exceptional architecture and interior design." />
    </Helmet>
    <Layout>
      <PageHero label="Our Story" title="Crafting Extraordinary Spaces Since 2010" description="We are a multidisciplinary design studio dedicated to creating architecture and interiors that inspire, elevate, and endure." />

      {/* Vision Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="relative">
                <img src={aboutImage} alt="Our studio" className="w-full h-[500px] object-cover" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/20 hidden lg:block" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
              <SectionHeading label="Our Philosophy" title="Design That Transcends Time" />
              <div className="mt-8 space-y-6 text-muted-foreground">
                <p>
                  At WNF Studio, we believe that great design has the power to
                  transform not just spaces, but the way people live, work, and
                  experience the world around them.
                </p>
                <p>
                  Our approach combines deep respect for architectural heritage with
                  bold innovation, creating environments that are both timeless and
                  distinctly contemporary.
                </p>
                <p>
                  Every project is a unique journey, guided by our commitment to
                  sustainability, functionality, and aesthetic excellence. We work
                  closely with our clients to understand their vision and bring it
                  to life with precision and creativity.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-8 lg:p-12 bg-background">
              <span className="label-text mb-4 block">Our Mission</span>
              <h3 className="heading-sm mb-6">Creating Spaces That Matter</h3>
              <p className="text-muted-foreground">
                To design and deliver exceptional architectural and interior
                experiences that enhance human well-being, respect the environment,
                and stand as lasting testaments to thoughtful design.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="p-8 lg:p-12 bg-background">
              <span className="label-text mb-4 block">Our Vision</span>
              <h3 className="heading-sm mb-6">Shaping Tomorrow's Built Environment</h3>
              <p className="text-muted-foreground">
                To be recognized globally as a leader in innovative, sustainable
                design that pushes boundaries while remaining deeply connected to
                human needs and cultural context.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (<motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
              <span className="heading-lg block">{stat.value}</span>
              <p className="text-primary-foreground/70 mt-2">{stat.label}</p>
            </motion.div>))}
          </div>
        </div>
      </section>
    </Layout>
  </>);
};
export default About;
