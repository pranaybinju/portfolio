import React from "react";
import { motion } from "framer-motion";

const WavingHand = () => (
  <motion.div
    style={{ display: "inline-block" }}
    animate={{ rotate: 10 }}
    transition={{
      repeatType: "reverse",
      repeat: Infinity,
      from: 0,
      duration: 1,
      type: "spring",
    }}
  >
    👋
  </motion.div>
);

export default WavingHand;
