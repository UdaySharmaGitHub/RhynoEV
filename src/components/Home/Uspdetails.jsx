import React from 'react'
// Icons
import { RiPinDistanceFill } from "react-icons/ri";
import { FaBatteryFull } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import { CgArrangeBack } from "react-icons/cg";
import { PiCoffeeLight } from "react-icons/pi";
// Framer Motion
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";


const features = [
  {
    name: 'LFP Battery',
    description:
    `Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries,
    renowned for their safety features—eliminating the risk of fire associated with other
    Lithium batteries. These batteries boast a broader temperature range, ideal for the
    diverse Indian climate. Our technology enhances Rhyno's longevity, complemented
    by an Active Balancing Smart Battery Management System (BMS) for extended life
    and reduced maintenance. Each battery undergoes rigorous waterproofing tests
    according to IP76 standards. But it doesn't stop there—our technology goes the extra
    mile in ensuring the battery's lasting durability. Connect with us to discover the
    thoughtful engineering behind our batteries!`,
        icon: FaBatteryFull ,
        aosdelay:"200",
  },
  {
    name:'Rugged and simple Design',
    description:`We’ve had enough of the EVs looking and feeling like
fragile plastic toys. Often fading out and shamelessly breaking in minor accidents,
ending up spending weeks and months at service stations for complex repairs. We
took a bold step of making something raw, rugged, and practical. We kept it so
simple that even your trusted local mechanic can understand and repair most of it. If
you have reached this far, why not to take a test ride? Click here to locate your
nearest dealership or book a test ride at your home`,
icon: RiPinDistanceFill ,
aosdelay:"200",
  },
  {
    name: 'Wider tyres',
    description:
      `Now, say goodbye to skidding and embrace the leaning turns!
Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous
beast that ensures stability on different terrains such as wet roads, mud, and sand.`,
    icon: GiCarWheel,
    aosdelay:"400",
  },
  {
    name: 'Range prediction',
    description:
      `Many budget-friendly electric scooters overlook this crucial
feature, causing riders to experience range anxiety. With Rhyno, you can ride with
peace of mind, thanks to the scooter providing precise information about the
remaining battery`,
    icon: CgArrangeBack ,
    aosdelay:"400",
  },
  {
    name: 'Extraordinery Experience',
    description:
      `Rhyno is more than just a mode of transportation. It is
an experience of sheer comfort and style! A seamless fusion of minimalism,
sophistication, and a touch of masculinity!`,
    icon: PiCoffeeLight ,
    aosdelay:"600",
  },
]
export const Uspdetails = () => {
  return (
    <div className="bg-white py-10 sm:py-10 lg:py-12 dark:bg-primarydark-300 dark:text-primarywhite-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-base font-semibold leading-7 dark:text-primaryyellow-200">Know About</h2>
          <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 6,
                    mixBlendMode: "difference",
                  }}
                ><p
                data-aos="fade-up"
          data-aos-delay="500"
                className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Our UPS
              </p></UpdateFollower>
          <p 
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-4 text-lg leading-8 ">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-5 max-w-2xl sm:mt-8 lg:mt-10 lg:max-w-6xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-5 lg:max-w-none lg:grid-cols-2 lg:gap-y-8 p-5">
            {features.map((feature) => (
              <div
              data-aos="fade-up"
          data-aos-delay={feature.aosdelay}
              key={feature.name} className="relative pl-16">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 6,
                    mixBlendMode: "difference",
                  }}
                ><dt className="text-base font-semibold leading-7 dark:text-primaryyellow-200">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primarydark-300">
                  <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                </div>
                {feature.name}
              </dt></UpdateFollower>
                <dd className="mt-2 text-base leading-7">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
