import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaArrowRight,
  FaMobileAlt,
} from "react-icons/fa";

const FooterImportantLinks = [
  {
    id:1,
    title: "Home",
    link: "/",
  },
  {
    id:2,
    title: "Pre-Book Now",
    link: "/prebooknow",
  },
  {
    id:3,
    title: "Products",
    link: "/products",
  },
  {
    id:4,
    title: "About-Us",
    link: "/about",
  },
  {
    id:5,
    title: "Contact-Us",
    link: "/contact-us",
  },
  {
    id:6,
    title: "Rental",
    link: "/rental",
  },
];

const FooterPolicyLinks = [
  {
    id:1,
    title: "Privacy",
    link: "/error",
  },
  {
    id:2,
    title: "Refund",
    link: "/error",
  },
  {
    id:3,
    title: "Website",
    link: "/error",
  },
];

export const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-primarydark-300 dark:text-primarywhite-400 mt-14 rounded-t-3xl">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              RHYNO
            </h1>
            <p className="text-sm">
            “Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets Style.{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Gujarat, India</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91-9023987528</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterImportantLinks.map((link) => (
                    <li key={link.id} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-primarydarkgray-200 dark:text-primarywhite-400 flex items-center gap-1">
                      <FaArrowRight /><NavLink to={link.link}> {link.title}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-2 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterPolicyLinks.map((link) => (
                    <li key={link.id} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-primarydarkgray-200 dark:text-primarywhite-400 flex items-center gap-1">
                    <FaArrowRight /> <NavLink to={link.link}>{link.title}</NavLink>
                  </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Location
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3">
                Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU,
                Raisan, Gandhinagar, Gujarat, India
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
