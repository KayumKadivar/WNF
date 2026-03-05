import { motion } from "framer-motion";
const SectionHeading = ({ label, title, description, align = "left", light = false, }) => {
    const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
    const textColor = light ? "text-primary-foreground" : "text-foreground";
    const mutedColor = light ? "text-primary-foreground/70" : "text-muted-foreground";
    return (<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className={`flex flex-col gap-4 ${alignment}`}>
      {label && (<span className={`label-text ${light ? "text-primary-foreground/60" : ""}`}>
          {label}
        </span>)}
      <h2 className={`heading-md max-w-3xl ${textColor}`}>{title}</h2>
      {description && (<p className={`body-md max-w-2xl ${mutedColor}`}>{description}</p>)}
    </motion.div>);
};
export default SectionHeading;
