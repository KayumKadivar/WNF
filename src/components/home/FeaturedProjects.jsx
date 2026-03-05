import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { projects } from "@/data/projects";

const featuredProjects = projects.slice(0, 4);

const FeaturedProjects = () => {
  return (<section className="section-padding bg-secondary">
    <div className="container mx-auto px-6 lg:px-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
        <SectionHeading label="Featured Work" title="Selected Projects" description="A curated collection of our finest architectural and interior design work." />
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-medium link-underline group">
            View All Projects
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProjects.map((project, index) => (<motion.div key={project.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: index * 0.1 }}>
          <Link to={`/projects/${project.id}`} className="group block">
            <div className="relative overflow-hidden mb-6">
              <img src={project.mainImage} alt={project.title} className="w-full h-[450px] object-cover image-zoom" />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="w-16 h-16 flex items-center justify-center bg-background rounded-full">
                  <ArrowUpRight className="text-foreground" />
                </span>
              </div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-background/90 text-xs uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
            </div>
            <h3 className="text-2xl font-display group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-muted-foreground mt-2">{project.location}</p>
          </Link>
        </motion.div>))}
      </div>
    </div>
  </section>);
};
export default FeaturedProjects;
