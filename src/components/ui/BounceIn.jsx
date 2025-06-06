// components/BounceIn.js
import { motion } from "framer-motion";

export default function BounceIn({ children }) {
  return (
    <motion.div
      initial={{ y: -400, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 10,
      }}
      className="p-4"
    >
      {children}
    </motion.div>
  );
}
