// import Image from 'next/image'
// import React from 'react'
// import { images } from '../../public/images'

// const waitlist = () => {
//   return (
//     <div
//         className="flex items-center h-screen"
//         style={{
//             backgroundImage: "url('./background.jpg')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//         }}
//     >
//       <div className='flex items-center justify-center w-1/2'>
//         <h2>Join Us Now!</h2>
//         <div></div>
//       </div>
//       <div className=' w-1/2'>
//         <Image src={images.star} alt='Star Image' />
//         <div className='flex justify-end mt-20'>
//             <Image src={images.star} alt='Star Image' />
//         </div>
//         <Image src={images.Woman1} alt='Owner Image' className='w-fit h-fit ' />
//       </div>
//     </div>
//   )
// }

// export default waitlist

import Image from "next/image";
import React from "react";
import "./waitlist.css";
import { images } from "../../public/images";
import { FaApple, FaGoogle, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Waitlist = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full p-4"
      style={{
        backgroundImage: "url('./cottonbro.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Side Content */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 text-center">
        <h2 className="text-2xl hidden font-bold text-[#949393] md:block md:font-extrabold md:text-5xl ">
          Coming Soon!
        </h2>
      </div>

      {/* Right Side Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center">
        {/* <h2 className="text-4xl font-bold mb-5 text-[#007FFF] md:hidden  ">
          Coming Soon!
        </h2> */} 
        {/* <h2 className="text-4xl font-bold mb-5 text-white md:hidden  ">
          Coming Soon!
        </h2> */}
        <h2 className="text-4xl font-bold mb-5 text-[#0d97e7] md:hidden  ">
          Coming Soon!
        </h2>

        <div
          className="relative flex items-center justify-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-transparent shadow-lg 
            shadow-blue-500/50 rounded-xl overflow-hidden border-2 border-transparent px-5 py-8 md:px-14 md:py-6"
        >
          {/* Moving Border Effect */}
          <div
            className="absolute inset-0 w-full h-full border-2 border-transparent rounded-xl 
                animate-moving-border"
          />

          {/* Inner Content */}
          <div className="relative z-10 text-white text-lg font-semibold">
            <div className="text-center">
              <h3 className="text-[#D32F2F] font-bold text-2xl md:text-white md:text-4xl md:font-black ">
                Join our waitlist
              </h3>
              <p className="mt-3 text-[#0d97e7]  font-normal text-base md:text-2xl md:font-bold ">
                Sign up for our newletter to recieve the latest updates and
                insights straight to your inbox.
              </p>
            </div>

            <div className="mt-5 space-x-4 flex justify-center">
              <div className="inline-block p-3 bg-black rounded-full hover:bg-gray-800 transition duration-300 cursor-pointer">
                <FaGoogle className="text-white w-6 h-6" />
              </div>
              <div className="inline-block p-3 bg-black rounded-full hover:bg-gray-800 transition duration-300 cursor-pointer">
                <FaApple className="text-white w-6 h-6" />
              </div>
              {/* <div className="inline-block p-3 bg-black rounded-full hover:bg-gray-800 transition duration-300 cursor-pointer">
                <FaXTwitter className="text-white w-6 h-6" />
              </div>
              <div className="inline-block p-3 bg-black rounded-full hover:bg-gray-800 transition duration-300 cursor-pointer">
                <FaInstagram className="text-white w-6 h-6" />
              </div>
              <div className="inline-block p-3 bg-black rounded-full hover:bg-gray-800 transition duration-300 cursor-pointer">
                <FaTiktok className="text-white w-6 h-6" />
              </div> */}
            </div>

            <p className="text-center mt-6 font-bold lg:font-black">OR</p>

            {/* button */}
            <div className="mt-6 flex flex-col justify-center">
                <input type="text" />
              <button >
                <a
                  href="#_"
                  className="relative inline-flex items-center px-12 py-3 overflow-hidden 
                text-lg font-medium text-white border-2 border-[#D32F2F] rounded-full 
                hover:text-white group hover:bg-gray-50"
                >
                  <span
                    className="absolute left-0 block w-full h-0 transition-all bg-[#D32F2F]
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
              </button>
            </div>

            {/* Moving Image */}
            {/* <div className="flex justify-end w-full mt-5">
              <Image src={images.star2} alt="star_gif" />
            </div> */}


          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
