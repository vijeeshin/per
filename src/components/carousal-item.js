import React from 'react'
import { ReactComponent as ArrowForward } from "../assets/images/arrow-forward-ios.svg";
import HeroObject1 from "../assets/images/hero-object-1.svg";
export const CarousalItem = ({data}) => {
  return (
    <section>
      <div className=" hidden md:grid md:grid-cols-2 py-20 px-20 ">
        <div>
          <h1 className="font-montserrat not-italic font-bold lg:text-6xl md:text-4xl text-left text-white pt-20 pb-10">
            {data.title}
          </h1>
          <h4 className="font-montserrat not-italic font-normal text-left text-2xl text-oslo_gray pb-10">
            {data.desc}
          </h4>
          <h5 className="font-lato italic font-normal text-left text-2xl text-white mb-10">
            {data.sub}
          </h5>
          <div className="text-left">
            <a
              className=" bg-anzac hover:bg-grey   py-2 px-4  inline-flex items-center"
              href={data.btnUrl}
            >
              <span className=" px-2 font-lato not-italic font-normal text-sm text-white">
                OUR SERVICES
              </span>
              <ArrowForward />
            </a>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="w-90 h-90">
            <img src={data.image} className={"object-fit"} />
          </div>
        </div>
      </div>
      {/** small Screen */}
      <div className="md:hidden flex flex-col items-center justify-center py-20 px-5">
        <h1 className="font-montserrat not-italic font-bold text-4xl text-center text-white pt-10 pb-10">
          {data.title}
        </h1>

        <div className="w-full">
          <img src={data.image} className={"object-contain"} />
        </div>

        <h4 className="font-montserrat not-italic font-normal  text-2xl text-oslo_gray pb-10">
          {data.desc}
        </h4>
        <h5 className="font-lato italic font-normal  text-2xl text-white mb-10">
          {data.sub}
        </h5>
        <div className="w-full text-center">
          <a
            className=" bg-anzac hover:bg-grey   py-2 px-4  inline-flex items-center"
            href={data.btnUrl}
          >
            <span className=" px-2 font-lato not-italic font-normal text-sm text-white">
              OUR SERVICES
            </span>
            <ArrowForward />
          </a>
        </div>
      </div>
      {/** small Screen */}
    </section>
  );
}
