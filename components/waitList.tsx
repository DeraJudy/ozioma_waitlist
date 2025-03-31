import React from "react";
import "./waitList.css";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { images } from "../public/images";

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
            backgroundPosition: "center",
          }}
        />

        {/* Main Content */}
        <motion.div
          className="relative container mx-auto py-16 px-4 flex flex-col items-center"
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
        >
          <div className="flex justify-end w-full">
            <Image src={images.star} alt="star_gif" />
          </div>

          {/* <div className="relative flex items-center justify-center h-64 w-64 bg-transparent shadow-lg 
            shadow-blue-500/50 border-2 border-white/30 overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-white to-blue-500 animate-border" />
                <div className="relative z-10 text-white text-lg font-semibold">
                    Glowing Box
                </div>
            </div> */}

          {/* <div className="relative flex items-center justify-center h-64 w-64 bg-transparent shadow-lg shadow-blue-500/50 rounded-xl overflow-hidden">
               
                <div className="absolute inset-0 animate-border">
                    <div className="absolute inset-0 border-[3px] border-transparent rounded-xl bg-gradient-to-r from-blue-500 via-white to-blue-500 animate-border-glow" />
                </div>

                <div className="relative z-10 text-white text-lg font-semibold">
                    Glowing Box
                </div>
            </div> */}

          <div className="flex items-center justify-center">
            <Image
              className="w-[80px] h-[80px] rounded-full  md:rounded-[200px] md:h-[200px] md:w-[200px] border border-cyan-300 "
              src={images.Girl}
              alt="author_image"
            />
          </div>

          {/* Waitlist Form */}
          <div
            className="relative flex items-center justify-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-transparent shadow-lg 
            shadow-blue-500/50 rounded-xl overflow-hidden border-2 border-transparent mt-14 px-14 py-6"
          >
            {/* Moving Border Effect */}
            <div
              className="absolute inset-0 w-full h-full border-2 border-transparent rounded-xl 
                animate-moving-border"
            />

            {/* Inner Content */}
            <div className="relative z-10 text-white text-lg font-semibold">

              {/* Big Text */}
              <h1 className="text-4xl font-bold text-center mb-8">
                Coming Soon!
              </h1>

              {/* other Text */}
              <div className="text-center">
                <h3>Join our waitlist</h3>
                <p>
                  Sign up for our newletter to recieve the latest updates and
                  insights straight to your inbox.
                </p>
              </div>

              {/* button */}
              <div className="mt-6 flex justify-center">
                <a
                  href="#_"
                  className="relative inline-flex items-center px-12 py-3 overflow-hidden 
                text-lg font-medium text-[#C77B8A] border-2 border-[#C77B8A] rounded-full 
                hover:text-white group hover:bg-gray-50"
                >
                  <span
                    className="absolute left-0 block w-full h-0 transition-all bg-[#C77B8A]
                    opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"
                  ></span>
                  <span
                    className="absolute right-0 flex items-center justify-start w-10 h-10 
                    duration-300 transform translate-x-full group-hover:translate-x-0 ease"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="relative">Join WaitList</span>
                </a>
              </div>

              {/* Moving Image */}
              <div className="flex justify-end w-full mt-5">
                <Image src={images.star2} alt="star_gif" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default waitList;
