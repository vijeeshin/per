
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as Letter } from "../assets/images/letter.svg";
import { ReactComponent as Menu } from "../assets/images/menu.svg";
import { ReactComponent as ArrowForward } from "../assets/images/arrow-forward-ios.svg";
import { ReactComponent as BlackLogo } from "../assets/images/black-logo.svg";
import { ReactComponent as BlackMail } from "../assets/images/black-mail.svg";
import { ReactComponent as Flag } from "../assets/images/flag.svg";
import { ReactComponent as Social } from "../assets/images/social.svg";
import services_box from "../assets/images/services_box.svg";
import attractionsyellow from "../assets/images/attractions-yellow.svg";

import contactus from "../assets/images/contactus.svg";


function Services() {
  const data = require('../data/data.json');
  return (
    <>
      <div className={"bg-shark "}>
        <div className={"bg-hero-pattern bg-cover bg-right bg-no-repeat "}>
          <div className="container mx-auto  py-5">
            <div className="flex flex-row justify-between items-center px-2 ">
              <a href="/">
                <Logo />
              </a>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-between items-center">
                  <Letter />
                  <span className="px-2  hidden  sm:inline-flex ">
                    <a
                      href="mailto:hello@perfectzdigital.com"
                      className="text-white"
                    >
                      hello@perfectzdigital.com
                    </a>
                  </span>
                </div>
                <Menu />
              </div>
            </div>
            <section>
              <div className=" hidden md:grid md:grid-cols-2 py-44 px-20 ">
                <div>
                  <h1 className="font-montserrat not-italic font-bold lg:text-6xl md:text-4xl  text-white pt-20 pb-10">
                    {data.services.title}
                  </h1>
                </div>
                <div className="flex flex-row justify-end items-start text-center">
                  <img src={services_box} />
                </div>
              </div>
              {/** small Screen */}
              <div className="md:hidden flex flex-col items-center justify-center py-20 px-5">
                <h1 className="font-montserrat not-italic font-bold text-4xl text-center text-white pt-10 pb-10">
                  {data.services.title}
                </h1>
                <div className="flex flex-col justify-center items-start">
                  <img src={services_box} />
                </div>
              </div>
              {/** small Screen */}
            </section>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto">
          <p className="text-2xl leading-9 text-gray-400 px-20 py-10 font-lato">
            {data.services.desc}
          </p>
          <div className="grid grid-col grid-cols-1">
            <div className="flex flex-wrap  justify-center items-center">
              {data.services.services.map((service, index) => (
                <div
                  className="bg-white shadow-sm flex flex-col justify-between md:justify-center  items-center p-10 m-10"
                  key={`service-${index}`}
                >
                  <img src={service.image} />
                  <p className="text-4xl font-semibold text-center font-montserrat">
                    {service.title}
                  </p>
                  <a className="inline-flex space-x-2.5 items-center justify-start px-4 py-2.5 bg-anzac my-5" href={service.url}>
                    <p className="text-sm font-medium text-white">
                      DISCOVER MORE
                    </p>
                    <div className="w-5 h-full">
                      <div className="flex items-center justify-center flex-1 h-full px-1.5 py-0.5 ">
                        <ArrowForward />
                      </div>
                    </div>
                  </a>
                </div>
              ))}

              
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 border-t border-black pt-10 md:pb-40 pb-10 ">
        <div className="container mx-auto  ">
          <div className="grid grid-col grid-cols-1">
            <h1 className="text-5xl font-semibold text-gray-900 text-center mb-10">
              Contact Us
            </h1>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative top-[-90px] bg-contact bg-cover py-44 bg-no-repeat">
        <div className="grid grid-row grid-cols-2">
          <div></div>
          <div className="px-40">
            <BlackLogo />
            <div className="flex flex-row justify-start items-center mt-10">
              <Flag />
              <p className="text-xl font-medium leading-3 font-lato px-2 ">
                UAE | INDIA
              </p>
            </div>
            <div className="flex flex-row justify-start items-center mt-10 mb-10">
              <BlackMail />
              <p className="text-sm leading-3 px-2 font-lato">
                hello@perfectzdigital.com
              </p>
            </div>
            <Social />
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-6 items-center justify-end flex-1 px-6 py-10 bg-gray-100 md:hidden">
        form
      </div>

      <div className="flex flex-col space-y-6 items-center justify-end flex-1 px-6 py-10 bg-anzac md:hidden">
        <BlackLogo />
        <div className="flex flex-row justify-start items-center mt-10">
          <Flag />
          <p className="text-xl font-medium leading-3 font-lato px-2 ">
            UAE | INDIA
          </p>
        </div>
        <div className="flex flex-row justify-start items-center mt-10 mb-10">
          <BlackMail />
          <p className="text-sm leading-3 px-2 font-lato">
            hello@perfectzdigital.com
          </p>
        </div>
        <Social />
      </div>
      <div className="bg-black "></div>
    </>
  );
}

export default Services;
