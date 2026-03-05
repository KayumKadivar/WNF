import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ServicesSection from "@/components/home/ServicesSection";


import CTASection from "@/components/home/CTASection";
const Index = () => {
  return (<>
    <Helmet>
      <title>WNF Studio | Architecture & Interior Design</title>
      <meta name="description" content="Award-winning architecture and interior design studio creating timeless spaces that inspire. Residential, commercial, and luxury design services." />
    </Helmet>
    <Layout>
      <HeroSlider />
      <AboutPreview />
      <FeaturedProjects />
      <ServicesSection />


      <CTASection />
    </Layout>
  </>);
};
export default Index;
