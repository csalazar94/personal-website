"use client";

import { motion } from "framer-motion";

export default function Hi() {
  return (
    <motion.span
      className="inline-block"
      animate={{ rotate: [0, 12, -12, 12, 0] }}
      transition={{ repeat: Infinity, duration: 0.5 }}
    >
      👋
    </motion.span>
  );
}
