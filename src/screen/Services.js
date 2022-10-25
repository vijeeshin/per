

import { ReactComponent as ArrowForward } from "../assets/images/arrow-forward-ios.svg";

import services_box from "../assets/images/services_box.svg";


import contactus from "../assets/images/contactus.svg";
import { FooterSub } from "../components/footer_sub";
import { Header } from "../components/header";


function Services() {
  const data = require('../data/data.json');
  return (
    <>
      <div className={"bg-shark "}>
        <div className={"bg-hero-pattern bg-cover bg-right bg-no-repeat "}>
          <div className="container mx-auto  py-5">
           <Header/>
            <section>
              <div className=" hidden md:grid md:grid-cols-2 py-20 px-20 ">
                <div>
                  <h1 className="font-montserrat not-italic font-bold lg:text-6xl md:text-4xl  text-white pt-20 pb-10">
                    {data.services.title}
                  </h1>
                </div>
                <div className="flex flex-row justify-end items-start text-center">
                  <img src={services_box} alt={"services_box"} />
                </div>
              </div>
              {/** small Screen */}
              <div className="md:hidden flex flex-col items-center justify-center py-20 px-5">
                <h1 className="font-montserrat not-italic font-bold text-4xl text-center text-white pt-10 pb-10">
                  {data.services.title}
                </h1>
                <div className="flex flex-col justify-center items-start">
                  <img src={services_box} alt={"services_box"} />
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
            <div className="flex flex-wrap  justify-start items-start">
              {data.services.services.map((service, index) => (
                <div
                  className=" w-full  md:w-1/2 p-5"
                  key={`service-${index}`}
                >
                  <div className="bg-white h-[280px] shadow-sm flex flex-col justify-center  items-center p-5 ">
                    <img src={service.image} className={"w-16 h-16 object-fit"} />
                    <p className="text-2xl font-semibold text-center font-montserrat  text-ellipsis">
                      {service.title}
                    </p>
                    <a
                      className="inline-flex space-x-2.5 items-center justify-start px-4 py-2.5 bg-anzac my-5"
                      href={service.url}
                    >
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    <FooterSub/>
    </>
  );
}

export default Services;
