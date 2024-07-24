import React from 'react'
import grp from '../../assets/grp.png'
import productSelection3 from '../../assets/productSelection3.png'
import { NavLink} from 'react-router-dom'
import { UpdateFollower } from "react-mouse-follower";


export const Listedproduct = () => {
  return (
    <section className="py-10 bg-primarywhite-300 dark:bg-primarydark-300 dark:text-primarywhite-100 text-primarydark-300">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-end justify-between">
            <div className="flex-1 text-center lg:text-left">
            <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 6,
                    mixBlendMode: "difference",
                  }}
                ><h2
                data-aos="fade-up"
                data-aos-delay="500"
                className="text-3xl font-bold leading-tight mt-6 sm:text-4xl lg:text-5xl dark:text-primaryyellow-200">Our Best Seller Products</h2>
                </UpdateFollower>
                <p 
                data-aos="fade-up"
                data-aos-delay="700"
                className="max-w-xl mx-auto mt-4 text-base leading-relaxed lg:mx-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-3">
                <button type="button" className="flex items-center justify-center transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-8 lg:grid-cols-3 lg:max-w-full">
            <div 
            data-aos="fade-up"
                data-aos-delay="900"
            className="overflow-hidden bg-white rounded shadow">
                <div className="p-5">
                    <div className="relative">
                        <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                            <img className="object-cover w-full h-full" src="home1.png" alt="" />
                        </a>

                        <div className="absolute top-4 left-4">
                            <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Model-1 </span>
                        </div>
                    </div>
                    <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> March 21, 2024 </span>
                    <p className="mt-5 text-2xl font-semibold">
                    <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 6,
                    mixBlendMode: "difference",
                  }}
                ><a href="#" title="" className="text-black">Ryhno SEO3</a></UpdateFollower>
                    </p>
                    <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <a href="#seo" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                    Explore Features
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>

            <div 
            data-aos="fade-up"
                data-aos-delay="1100"
            className="overflow-hidden bg-white rounded shadow">
                <div className="p-5">
                    <div className="relative">
                        <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                            <img className="object-cover w-full h-full" src={productSelection3} alt="" />
                        </a>

                        <div className="absolute top-4 left-4">
                            <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Model-2 </span>
                        </div>
                    </div>
                    <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> April 04, 2024 </span>
                    <p className="mt-5 text-2xl font-semibold">
                    <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 6,
                    mixBlendMode: "difference",
                  }}
                ><a href="#" title="" className="text-black">Ryhno SEO3 Max</a></UpdateFollower>
                    </p>
                    <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <a href="#seo3max" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                    Explore Features
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>

            <div
            data-aos="fade-up"
            data-aos-delay="1300"
             className="overflow-hidden bg-white rounded shadow">
                <div className="p-5">
                    <div className="relative">
                        <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                            <img className="object-cover w-full h-full" src={grp} alt="" />
                        </a>

                        <div className="absolute top-4 left-4">
                            <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> Model-3 </span>
                        </div>
                    </div>
                    <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> May 12, 2024 </span>
                    <p className="mt-5 text-2xl font-semibold">
                    <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 6,
                    mixBlendMode: "difference",
                  }}
                ><a href="#" title="" className="text-black">Ryhno SEO3 Lite</a></UpdateFollower>
                    </p>
                    <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <a href="#seo3lite" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                        Explore Features
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
            <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
        <div
        data-aos="fade-up"
                data-aos-delay="1500"
        className="mt-4 text-center">
            <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 6,
                    mixBlendMode: "difference",
                  }}
                ><div
                data-aos="fade-up"
                        data-aos-delay="1500"
                className="mt-4 text-center">
                    <a to="/#compareall" title="" className="inline-flex items-center justify-center py-4 font-semibold text-white transition-all duration-200 dark:bg-primarywhite-100 dark:text-primarydark-300 bg-primarydark-300 border border-transparent rounded-md px-14 " role="button">Compare All Model</a>
                </div>
                </UpdateFollower>
        </div>
    </div>
</section>

  )
}
