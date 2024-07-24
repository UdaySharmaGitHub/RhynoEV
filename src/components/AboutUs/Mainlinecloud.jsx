import React from 'react'
import "aos/dist/aos.css"
import { UpdateFollower } from "react-mouse-follower";
export const Mainlinecloud = () => {
  return (
    <div className="bg-primarywhite-100 dark:text-primarywhite-100 py-8 md:py-12 mt-4 dark:bg-primarydark-300 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 6,
                    mixBlendMode: "difference",
                  }}
                >
                  <h2 
        data-aos="fade-up"
              data-aos-delay="500"
        className="text-center text-3xl font-semibold leading-6 dark:text-primaryyellow-100">
          Why would you Choose us 
        </h2>
                </UpdateFollower>
        <div className="mx-auto mt-6 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 6,
                    mixBlendMode: "difference",
                  }}
                >
                   <img
          data-aos="fade-up"
              data-aos-delay="700"
            alt="Transistor"
            src="eco1.png"
            width={158}
            height={48}
            className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
          />
                </UpdateFollower>

                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 6,
                    mixBlendMode: "difference",
                  }}
                >
                    <img
          data-aos="fade-up"
              data-aos-delay="900"
            alt="Reform"
            src="eco2.png"
            width={158}
            height={48}
            className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
          />
                </UpdateFollower>    

         <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 6,
                    mixBlendMode: "difference",
                  }}
                >
                   <img
          data-aos="fade-up"
              data-aos-delay="1100"
            alt="Tuple"
            src="eco3.png"
            width={158}
            height={48}
            className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
          />
                </UpdateFollower>
          
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 6,
                    mixBlendMode: "difference",
                  }}
                >
                    <img
          data-aos="fade-up"
              data-aos-delay="1300"
            alt="SavvyCal"
            src="eco4.png"
            width={158}
            height={48}
            className="col-span-2 max-h-28 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
                </UpdateFollower>         

                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 6,
                    mixBlendMode: "difference",
                  }}
                >
                   <img
          data-aos="fade-up"
              data-aos-delay="1500"
            alt="Statamic"
            src="eco5.png"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-28 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
                </UpdateFollower>
          
        </div>
      </div>
    </div>
  )
}
