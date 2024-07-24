import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
export const Productcheckout = () => {
  return (
    <div className="dark:bg-primarydark-300 bg-white p-8  mt-10">
    <div className="mx-auto max-w-8xl sm:px-6 lg:px-8 min-h-[620px]">
      <div className="relative isolate overflow-hidden px-6 pt-10 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-10 lg:flex lg:gap-x-20 lg:px-10 lg:pt-10 pb-10 flex flex-col justify-center items-center dark:shadow-primaryyellow-200">
        
        <div className="text-center lg:mx-0 lg:flex-auto lg:py-100 lg:text-left mt-4">
        <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 6,
                    mixBlendMode: "difference",
                  }}>
                    <h2
          data-aos="fade-up"
          data-aos-duration="600"
          className="text-3xl font-bold tracking-tight sm:text-4xl">
            Check out Our Products.
            <br />
            <span data-aos="fade-up"
          data-aos-duration="700">Start using our app today.</span>
          </h2>
                  </UpdateFollower>
          <p
          data-aos="fade-up"
          data-aos-duration="800"
          className="mt-6 text-lg leading-4">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
          </p>
          
          <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 6,
                    mixBlendMode: "difference",
                  }}
                >
                  <div
           data-aos="fade-up"
           data-aos-duration="900"
            className="mt-7 flex items-center justify-center gap-x-6 lg:justify-start">
            <Link
              to="/products"
              className="rounded-md bg-primarydarkgray-200 text-primarywhite-200 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-primaryyellow-100 dark:bg-primaryyellow-100 dark:text-primarydark-300   hover:text-primarydark-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Check Out
            </Link>
            <Link to="/about" className="text-sm font-semibold leading-6 dark:text-white text-black">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
                </UpdateFollower>

        </div>
        <div 
        data-aos="fade-up"
        data-aos-duration="1000"
        className="relative mt-10 md:mt-6 h-90 lg:mt-1">
          <img
            alt="App screenshot"
            src="ProductCheckout.png"
            width={1824}
            height={1080}
            className="scale-125 sm:scale-120 md:scale-130 lg:scale-90"
          />
        </div>
      </div>
    </div>
  </div>
  )
}
