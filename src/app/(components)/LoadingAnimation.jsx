"use client";
import { motion } from "framer-motion";

export default function LoadingAnimation() {
  return (
    <motion.div
      transition={{ duration: 2.5 }}
      initial={{ opacity: 1, width: "100vw", height: "100vh" }}
      animate={{
        opacity: [1,0,0],
        width: ["100vw", "100vw", "0vw"],
        height: ["100vh", "100vh", "0vh"],
      }}
      className="d-flex position-absolute bg-white"
    >
      <div
        className="d-flex justify-content-center align-items-center w-100 h-100"
        data-bs-theme="light"
      >
        <img
          className="d-block mx-auto mb-4"
          src="/wappen.svg"
          alt="Das Wappen der Stadt Ratingen"
          height="50%"
        />
      </div>
    </motion.div>
  );
}
