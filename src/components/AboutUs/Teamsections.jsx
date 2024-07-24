import React from 'react'
import "aos/dist/aos.css"
import { UpdateFollower } from "react-mouse-follower";
const people = [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
          'userimage1.png',
      },
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
          'userimage2.png',
      },
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
          'userimage3.png',
      },
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
          'userimage1.png',
      },
    // More people...
  ]
export const Teamsections = () => {
    return (
        <div className="bg-white py-10 sm:py-15 dark:bg-primarydark-100 dark:text-primarywhite-100">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-8 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
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
                                 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet our Team Members</h2>
                </UpdateFollower>
              <p 
              data-aos="fade-up"
              data-aos-delay="700"
              className="mt-6 text-lg leading-8">
              Our diverse and talented team drives innovation and excellence. With experts like Ankit, a Senior SDE with years of experience, we deliver top-quality solutions. Join us on our journey!
              </p>
            </div>
            <ul
            data-aos="fade-up"
              data-aos-delay="900"
            role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                    <div>
                    <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 6,
                    mixBlendMode: "difference",
                  }}
                >
                  <h3 className="text-base font-semibold leading-7 tracking-tight">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600 dark:text-primaryyellow-100">{person.role}</p>
                </UpdateFollower>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
}
