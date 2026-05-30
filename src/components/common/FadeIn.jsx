import { motion } from "framer-motion";

export default function FadeIn({
  children,
  delay = 0,
  className = ""
}) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 28,
        scale: 0.96
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1
      }}
      viewport={{
        once: true,
        amount: 0.2
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
        delay
      }}
    >
      {children}
    </motion.div>
  );
}
