import { motion } from "framer-motion";
const PageHero = ({ title, description, label }) => {
    return (<section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
          {label && (<motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="label-text mb-6 block">
              {label}
            </motion.span>)}
          <h1 className="heading-lg">{title}</h1>
          {description && (<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="body-lg text-muted-foreground mt-6 max-w-2xl">
              {description}
            </motion.p>)}
        </motion.div>
      </div>
    </section>);
};
export default PageHero;
