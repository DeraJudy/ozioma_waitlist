import React from 'react'
import { motion } from "framer-motion";
import Head from "next/head";
import bgImage from "@/assets/background.jpg";

// Animation Variants
const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const bgVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};


const waitList = () => {
  return (
    <>
      <Head>
        <title>Welcome to Our Blog</title>
        <meta name="description" content="Join our waitlist to stay updated!" />
      </Head>

      <div className="relative min-h-screen overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 z-0"
          variants={bgVariant}
          initial="hidden"
          animate="visible"
          style={{ 
            backgroundImage: "url('/karolina.jpg')", 
            backgroundSize: "cover", 
            backgroundPosition: "center" 
        }}

        />

        {/* Main Content */}
        <motion.div
          className="relative container mx-auto py-16 px-4 flex flex-col items-center"
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl font-bold text-center mb-8">Welcome to Our Blog!</h1>
          
          {/* Waitlist Form */}
          <form className="flex flex-col items-center w-full max-w-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 border rounded mb-4 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-pink-500 text-white py-3 px-6 rounded shadow-md hover:bg-pink-600"
            >
              Join the Waitlist
            </motion.button>
          </form>
        </motion.div>
      </div>
    </>
  )
}

export default waitList
