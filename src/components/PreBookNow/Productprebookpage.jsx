import React from 'react'
import { NavLink } from 'react-router-dom';
import img1 from "../../assets/redSlider.png";
import img2 from "../../assets/blueslider.png";
import img3 from "../../assets/goldenSlider.png";

export const Productprebookpage = () => {
  return (
    <section className="py-8 bg-primarywhite-100 dark:bg-primarydark-100 dark:text-primarywhite-200 sm:py-10 lg:py-12">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl lg:leading-tight dark:text-primaryyellow-200">Get your Ryhno Ev instant</h2>
            <p className="max-w-2xl mx-auto mt-4 text-xl ">Explore Our Product and Pre-Book now.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-3 md:mt-5 lg:gap-x-10">
            <div>
                <img className="w-full" src={img1} alt="" />
            </div>

            <div>
                <img className="w-full" src={img2} alt="" />
            </div>

            <div>
                <img className="w-full" src={img3} alt="" />
            </div>
        </div>

        <div className="mt-8 text-center">
            <NavLink to="/products" title="" className="inline-flex items-center justify-center py-4 font-semibold text-white transition-all duration-200 dark:bg-primarywhite-100 dark:text-primarydark-300 bg-primarydark-300 border border-transparent rounded-md px-14 " role="button"> Join our team </NavLink>
        </div>
    </div>
</section>

  )
}
