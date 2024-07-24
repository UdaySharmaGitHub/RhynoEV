import React from 'react'
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
export const Hero = () => {
  return (
    <div className="dark:bg-primarydarkgray-200 dark:text-white duration-300 bg-primarywhite-100">
    <div className="container min-h-[620px] flex">
            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-0">
              <div
                data-aos="zoom-in"
                data-aos-duration="1500"
                data-aos-once="false"
                className="order-1 sm:order-2"
              >
                <img src='home1.png' className="sm:scale-110 relative-z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]" alt="" />
              </div>
              <div className="order-2 sm:order-1 space-y-3 sm:pr-10">
              <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 6,
                    mixBlendMode: "difference",
                  }}>
                     <h1
                data-aos="fade-up"
                data-aos-delay="1000"
                  className="text-5xl lg:text-7xl font-semibold
            font-serif dark:text-primaryyellow-200"
                >
            Rhyno Ev
          </h1>
                  </UpdateFollower>
          <p className='text-2xl'
          data-aos="fade-up"
          data-aos-delay="1200">
           Lets Elevate Your Ride Experience With Rhyno Where Superiority Meets Style.
          </p>
          <p className='text-lg'
          data-aos="fade-up"
          data-aos-delay="1300">
          (And the last word will keep changing: Elegance, Minimalism, Comfort)
          </p>
          <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 6,
                    mixBlendMode: "difference",
                  }}>
                  <button
          data-aos="fade-up"
          data-aos-delay="1400"
          >Rent Now</button>
                  </UpdateFollower>
        </div>
      </div>
    </div>
  </div>
  )
}
