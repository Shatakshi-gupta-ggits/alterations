import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const services = [
  {
    icon: "👖",
    title: "Pant Alteration",
    description: "Hem, fit adjustments, waist alterations",
    price: "₹120",
  },
  {
    icon: "👔",
    title: "Shirt Tailoring",
    description: "Sleeve, collar, body fit adjustments",
    price: "₹150",
  },
  {
    icon: "👗",
    title: "Dress Alteration",
    description: "Length, fit, zipper, and more",
    price: "₹250",
  },
  {
    icon: "🥻",
    title: "Kurti Fitting",
    description: "Traditional wear alterations",
    price: "₹180",
  },
  {
    icon: "🧥",
    title: "Blazer Tailoring",
    description: "Sleeve, shoulders, body fit",
    price: "₹350",
  },
  {
    icon: "🎽",
    title: "Ethnic Jacket",
    description: "Nehru jackets, sherwanis",
    price: "₹400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Expert Alterations for{" "}
            <span className="text-gradient-gold">Every Garment</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From everyday wear to special occasions, our verified tailors handle it all with precision and care.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                rotateY: 5,
                transition: { duration: 0.3, type: "spring", stiffness: 300 } 
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-gradient-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold perspective-1000"
              style={{
                transformStyle: "preserve-3d"
              }}
            >
              {/* Icon */}
              <motion.div 
                className="text-4xl mb-4 relative"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">{service.icon}</span>
              </motion.div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>

              {/* Price & CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-muted-foreground">Starting from</span>
                  <p className="text-2xl font-display font-bold text-primary">
                    {service.price}
                  </p>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="group-hover:opacity-100 opacity-0 transition-all duration-300"
                >
                  <Button variant="goldOutline" size="sm" className="relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-primary/10"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">Book</span>
                  </Button>
                </motion.div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/5 rotate-45" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
