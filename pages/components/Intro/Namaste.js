import React from "react";
import { motion } from "framer-motion";

export const Namaste = () => (
  <motion.div
    style={{ display: "inline-block" }}
    animate={{ y: -5 }}
    transition={{
      yoyo: Infinity,
      from: 0,
      duration: 1,
      ease: "backOut",
    }}
  >
    🙏
  </motion.div>
);
export default Namaste;
