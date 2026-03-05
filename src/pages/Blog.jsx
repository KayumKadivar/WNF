import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import blog1 from "@/assets/NewImages/Architecture/Fabcon Factory/M 3.webp";
import blog2 from "@/assets/NewImages/Interior/herosliderint.webp";
import blog3 from "@/assets/NewImages/Exhibtion Stall/exibition tile stall view 1.webp";
const posts = [
    { id: 1, title: "The Future of Sustainable Architecture", excerpt: "Exploring how eco-friendly design principles are shaping the buildings of tomorrow.", category: "Sustainability", date: "December 15, 2024", image: blog1 },
    { id: 2, title: "Interior Design Trends for 2025", excerpt: "From organic minimalism to bold color statements, discover what's shaping interior design.", category: "Trends", date: "December 10, 2024", image: blog2 },
    { id: 3, title: "The Art of Material Selection", excerpt: "How the right materials can transform a space from ordinary to extraordinary.", category: "Materials", date: "December 5, 2024", image: blog3 },
];
const Blog = () => (<>
    <Helmet>
      <title>Blog | WNF Studio - Architecture & Interior Design Insights</title>
      <meta name="description" content="Explore our latest articles on architecture, interior design trends, sustainability, and more."/>
    </Helmet>
    <Layout>
      <PageHero label="Insights" title="Our Blog" description="Thoughts, ideas, and inspiration from our design team."/>
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (<motion.article key={post.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Link to={`/blog/${post.id}`} className="group block">
                  <div className="relative overflow-hidden mb-6">
                    <img src={post.image} alt={post.title} className="w-full h-64 object-cover image-zoom"/>
                    <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-background/90 text-xs uppercase tracking-wider">{post.category}</span></div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3"><Calendar size={14}/><span>{post.date}</span></div>
                  <h3 className="text-xl font-display mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </Link>
              </motion.article>))}
          </div>
        </div>
      </section>
    </Layout>
  </>);
export default Blog;
