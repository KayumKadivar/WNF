import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Ruler, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <Layout>
        <div className="min-h-[70vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="heading-lg mb-4">Project Not Found</h1>
            <Button variant="elegant-outline" asChild>
              <Link to="/projects">Back to Projects</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === Number(id));
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  return (
    <>
      <Helmet>
        <title>{project.title} | WNF Studio</title>
        <meta name="description" content={project.description?.substring(0, 160) || "WNF Studio architectural project."} />
      </Helmet>
      <Layout>
        {/* Full Viewport Hero Image */}
        <section className="relative h-screen w-full overflow-hidden">
          <motion.div initial={{ scale: 1.05 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} className="absolute inset-0">
            <img src={project.mainImage} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </motion.div>

          {/* Title Area */}
          <div className="relative h-full container mx-auto px-6 lg:px-12 flex flex-col justify-end pb-24">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="max-w-4xl">
              <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 block font-medium">
                {project.category}
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-foreground leading-tight mb-6">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Project Meta Information */}
        <section className="border-b border-border/50 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-wrap justify-between py-12 gap-8">
              {[
                { icon: MapPin, label: "Location", value: project.location },
                { icon: Calendar, label: "Year", value: project.year },
                { icon: Ruler, label: "Area", value: project.size },
                { icon: Building, label: "Client", value: project.client },
              ].map((item, idx) => (
                <div key={idx} className="flex-1 min-w-[150px]">
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">{item.label}</span>
                  </div>
                  <p className="text-lg font-display text-foreground">{item.value || "N/A"}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Narrative */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

              {/* Left Column: Story */}
              <div className="lg:col-span-8 space-y-16">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-3xl font-display mb-8">Concept & Vision</h2>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                    {project.description}
                  </p>
                </motion.div>

                {(project.challenge || project.solution) && (
                  <div className="grid md:grid-cols-2 gap-12 pt-8">
                    {project.challenge && (
                      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h3 className="text-lg uppercase tracking-widest font-medium mb-4">The Challenge</h3>
                        <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                      </motion.div>
                    )}
                    {project.solution && (
                      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, delay: 0.1 }}>
                        <h3 className="text-lg uppercase tracking-widest font-medium mb-4">The Solution</h3>
                        <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                      </motion.div>
                    )}
                  </div>
                )}
              </div>

              {/* Right Column: Features */}
              <div className="lg:col-span-4 lg:pl-12">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-secondary/50 p-10 rounded-xl">
                  <h3 className="text-lg uppercase tracking-widest font-medium mb-8">Design Signatures</h3>
                  <ul className="space-y-6">
                    {project.features?.map((feature, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                        <span className="text-muted-foreground leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Expansive Masonry Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mt-32">
                <h3 className="text-2xl font-display mb-12 text-center">Project Gallery</h3>
                {/* CSS Grid for masonry-style layout. Varying row spans based on index */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {project.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      className={`overflow-hidden rounded-md ${index % 3 === 0 ? "md:col-span-2 md:aspect-[21/9]" : "aspect-[4/5] md:aspect-square"}`}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <img
                        src={image}
                        alt={`${project.title} detailed view ${index + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Project Navigation Footer */}
        <section className="py-24 bg-charcoal text-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 gap-8 divide-x divide-white/10">
              {/* Previous */}
              <div className="pr-8">
                {prevProject ? (
                  <Link to={`/projects/${prevProject.id}`} className="group block">
                    <span className="text-xs uppercase tracking-widest text-white/50 mb-3 block">Previous Project</span>
                    <div className="flex items-center gap-4">
                      <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform duration-300" />
                      <span className="text-2xl md:text-3xl lg:text-4xl font-display group-hover:text-primary transition-colors">{prevProject.title}</span>
                    </div>
                  </Link>
                ) : <div />}
              </div>

              {/* Next */}
              <div className="pl-8 text-right">
                {nextProject ? (
                  <Link to={`/projects/${nextProject.id}`} className="group block text-right">
                    <span className="text-xs uppercase tracking-widest text-white/50 mb-3 block">Next Project</span>
                    <div className="flex items-center justify-end gap-4">
                      <span className="text-2xl md:text-3xl lg:text-4xl font-display group-hover:text-primary transition-colors">{nextProject.title}</span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </Link>
                ) : <div />}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ProjectDetail;
