import { motion, useInView } from "framer-motion";
import { Calendar, Truck, Scissors, Package } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    icon: Calendar,
    title: "Schedule",
    description: "Book a pickup slot that fits your schedule",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Truck,
    title: "Pickup",
    description: "Our executive collects your garments safely",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Scissors,
    title: "Tailor",
    description: "Expert alterations by verified tailors",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Package,
    title: "Delivery",
    description: "Perfectly fitted garments delivered to you",
    color: "from-primary/20 to-primary/5",
  },
];

export const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="how-it-works" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1.1, 1, 1.1],
            x: [0, -50, 0],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            How It Works
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Simple as{" "}
            <span className="text-gradient-gold">1-2-3-4</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From booking to delivery, we make alterations effortless
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Animated Connecting Line */}
          <motion.div 
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          {/* Animated progress dots */}
          {steps.map((_, index) => (
            <motion.div
              key={`progress-${index}`}
              className="hidden lg:block absolute top-1/2 w-3 h-3 bg-primary rounded-full -translate-y-1/2 z-10"
              style={{ left: `${12.5 + index * 25}%` }}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
            />
          ))}

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -15 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="relative text-center group perspective-1000"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Step Number */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15 + 0.4, 
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-sm z-10 shadow-lg"
              >
                {index + 1}
              </motion.div>

              {/* Icon Container */}
              <div className="relative mx-auto w-24 h-24 mb-6 mt-4">
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl`}
                  initial={{ rotate: 6 }}
                  whileHover={{ 
                    rotate: 12,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  animate={{
                    rotate: [6, 8, 6],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="relative bg-card rounded-2xl w-full h-full flex items-center justify-center border border-border group-hover:border-primary/50 transition-colors shadow-lg"
                  whileHover={{ 
                    rotateY: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <step.icon className="w-10 h-10 text-primary transition-all duration-300" />
                  </motion.div>
                  
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-primary/10 rounded-2xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
