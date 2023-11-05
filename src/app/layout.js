"use client";
import { Inter } from "next/font/google";

import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import "@/styles/styles.scss";

import Footer from "./(components)/Footer";
import LoadingAnimation from "./(components)/LoadingAnimation";
import { MotionConfig } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });
import { motion } from "framer-motion";

export const metadata = {
  title: "Stadt Ratingen",
  description: "Notfallwebseite der Stadt Ratingen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" data-bs-theme="light">
      <head>
        <meta property="og:title" content="Stadt Ratingen" />
        <meta
          property="og:description"
          content="Die Backup-Website der Stadt Ratingen"
        />
        <meta property="og:image" content="/wappen.jpg" />
      </head>
      <body data-bs-theme="light" className={inter.className}>
        <LoadingAnimation />
        <motion.div
          transition={{ duration: 1, delay: 1 }}
          initial={{ opacity: 0}}
          animate={{
            opacity: 1,
          }}
        >
          {children}
        </motion.div>
        <Footer />
      </body>
    </html>
  );
}
