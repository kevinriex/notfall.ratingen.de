"use client";
import { motion } from "framer-motion";
export default function MainAnimation({children}) {
    return (
        <motion.div
          transition={{ duration: 1, delay: 1 }}
          initial={{ opacity: 0}}
          animate={{
            opacity: 1,
          }}
        >
            {children}
        </motion.div>
    )
}