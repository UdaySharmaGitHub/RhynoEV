import React from 'react'
import frontEv from '../../assets/frontev.jpg';
import { UpdateFollower } from "react-mouse-follower";
import { NavLink } from 'react-router-dom';

export const Prebooknow = () => {
  return (
    <div className="relative isolate px-6 p-5 lg:px-8 flex justify-center items-center flex-col text-primarydark-300 dark:text-primarywhite-400">
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
        data-aos-duration="800"
        className='text-5xl font-semibold md:mb-0 mb-6'>
            Pre-Book Now
        </h1>
                  </UpdateFollower>
       <div className='flex items-center justify-center gap-5 flex-col md:flex-row'>
       <div>
            <img  
            data-aos="zoom-in"
        data-aos-duration="1500"
            className='lg:h-[500px] md:h-[300px] h-[300px] rounded-2xl'
            src={frontEv} alt="" />
        </div>
        <div className="mx-auto max-w-4xl py-8 sm:py-6 lg:py-8">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div
            data-aos="fade-up"
        data-aos-duration="1000"
            className="relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="/prebooknow" className="font-semibold ">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
          <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 6,
                    mixBlendMode: "difference",
                  }}><h1 
                  data-aos="fade-up"
              data-aos-delay="500"
                  className="text-4xl font-bold tracking-tight  sm:text-4xl md:text-5xl dark:text-primaryyellow-200">
                    Data to enrich your online business
                  </h1></UpdateFollower>
            <p 
            data-aos="fade-up"
            data-aos-delay="500"
             className="mt-6 text-lg leading-8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div
            data-aos="fade-up"
        data-aos-delay="500"
            className="mt-10 flex items-center justify-center gap-x-6">
              <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 6,
                    mixBlendMode: "difference",
                  }}>
                    <NavLink
                to="/prebooknow"
                className="rounded-md mr-4 bg-primaryyellow-200 px-3.5 py-2.5 text-sm font-semibold text-primarydark-300 shadow-sm dark:hover:bg-primarywhite-100 dark:hover:text-primarydark-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 duration-200"
              >
                Get started
              </NavLink>
              <a href="#" className="text-sm font-semibold leading-6 0">
                Learn more <span aria-hidden="true">→</span>
              </a>
                  </UpdateFollower>
            </div>
          </div>
        </div>
       </div>
      </div>
  )
}
