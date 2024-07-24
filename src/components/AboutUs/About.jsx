//  Animate on Scroll
import "aos/dist/aos.css"
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { Mainlinecloud } from "./Mainlinecloud";
import { Teamsections } from "./Teamsections";
import { UpdateFollower } from "react-mouse-follower";
import { Testimonials } from "./Testimonials";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
    aosdelay:"900",
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
    aosdelay:"1000",
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
    aosdelay:"1100",
  },
];
export const About = () => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-15 dark:bg-primarydark-100 text-primarydark-300 dark:text-primarywhite-200">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 place-items-center">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-base font-semibold leading-7 text-primarydark-300 dark:text-primarywhite-300">
                Every thing
              </h2>
              <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 6,
                    mixBlendMode: "difference",
                  }}
                >
                  <p 
              data-aos="fade-up"
              data-aos-delay="700"
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-primaryyellow-100 p-2 border-s-8 border-b-4 dark:border-l-primaryyellow-200 border-primarydark-200 ">
                About RHYNOEV
              </p>
                </UpdateFollower>
              <p 
              data-aos="fade-up"
              data-aos-delay="1000"
              className="mt-6 text-lg leading-8 ">
                Established in 2019 by an automotive engineer with a vision for
                sustainable and robust mobility solutions, Rhyno EV is not just
                a company; it's a collective effort of a dynamic team of young
                individuals passionately driving innovation in the electric
                vehicle industry. We believe in engineering solutions that solve
                problems.
              </p>
              <dl className="mt-10 max-w-xl space-y-4 text-base leading-7 lg:max-w-none">
                {features.map((feature) => (
                  <div
                  data-aos="fade-up"
              data-aos-delay={feature.aosdelay}
                  key={feature.name} className="relative pl-9">
                    <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 6,
                    mixBlendMode: "difference",
                  }}
                >
                   <dt className="inline font-semibold  dark:text-primaryyellow-200">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5"
                      />
                      {feature.name}
                    </dt>
                </UpdateFollower>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
          data-aos="zoom-in"
              data-aos-duration="1200"
            alt="Product screenshot"
            src="About1.png"
            width={700}
            height={700}
            className=" max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 dark:shadow-primaryyellow-100  md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
      <Mainlinecloud/>
      <Teamsections/>
      <Testimonials/>
    </div>
  );
};
