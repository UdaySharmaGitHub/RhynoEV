import React from 'react'
import { Seocaroursal1 } from './Seocaroursal1'
import { UpdateFollower } from "react-mouse-follower";
import "aos/dist/aos.css"

import SpaceCity9 from "../../assets/redSlider.png";
import SpaceCity7 from "../../assets/slider4.png";
import SpaceCity6 from "../../assets/blueslider.png";
import SpaceCity5 from "../../assets/slider5.png";
import SpaceCity8 from "../../assets/goldenSlider.png";
import SpaceCity1 from "../../assets/redSlider.png";
import { FaLongArrowAltRight } from "react-icons/fa";


export const ServiceData = [
  {
    backgroundImage: SpaceCity1,
  },
  {
    backgroundImage: SpaceCity5,
  },
  {
    backgroundImage: SpaceCity6,
  },
  {
    backgroundImage: SpaceCity7,
  },
  {
    backgroundImage: SpaceCity8,
  },
  {
    backgroundImage: SpaceCity9,
  },
];

export const Seo3list = () => {
  return (
    <section id='seo3' className="py-10 bg-primarywhite-300 dark:bg-primarydark-300 dark:text-primarywhite-100 text-primarydark-300">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 pb-4 max-w-7xl">
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
                className="text-3xl font-bold leading-tight mt-6 sm:text-4xl lg:text-5xl dark:text-primaryyellow-200">Rhyno SEO3 Products</h2>
                </UpdateFollower>
                <p 
                data-aos="fade-up"
                data-aos-delay="700"
                className="mx-auto mt-4 text-base leading-relaxed lg:mx-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
            </div>

        </div>

    </div>
    {/* Carosual */}
    <Seocaroursal1 ServiceData={ServiceData}/>
    {/* Descriptions */}
    <div className='w-full grid place-items-center dark:text-primarywhite-100 text-primarydark-300'>
    <div className='py-6 w-[80%]'>
      <div className="px-4 sm:px-0">
        <h3 className="text-2xl font-semibold leading-7 ">Features of Rhyno SEO3</h3>
        <p className="mt-1 text-sm leading-6 ">Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 ">Battery</dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">2.7Kwh</dd>
          </div>
          <div className="px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 ">Battery features</dt>
            <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">LFP with 1500 cycles
Active Balancing
Waterproof (IP67)
</dd>
          </div>
          <div className="px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 ">Battery warranty</dt>
            <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">3 Years</dd>
          </div>
          <div className="px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6">Charging time</dt>
            <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">4 hours (12A)</dd>
          </div>
          <div className="px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 ">Motor</dt>
            <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">1500W</dd>
          </div>
          <div className="px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 ">Max speed</dt>
            <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">55 km/h</dd>
          </div>
          <div className="px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6">Warranty on electronics</dt>
            <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">1 year</dd>
          </div>
          <div className="px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 ">Max range (@30km/h)</dt>
            <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">150 km</dd>
          </div>
          <div className="px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 ">Max range (@45km/h)</dt>
            <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">110 km</dd>
          </div>
          <div className="px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6">Other key benefits</dt>
            <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
            Fire-safe battery
            Range prediction
            Comfortable ride
            Stable and safe
            </dd>
          </div>
        </dl>
      </div>
    </div>
    </div>
</section>
  )
}
