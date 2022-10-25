import React from 'react'
import { ReactComponent as ArrowForward } from "../assets/images/arrow-forward-ios.svg";
import Globe from "../assets/images/globe.png";
export const HomeSuccessSection = ({data}) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-2 grid-rows-2 md:grid-rows-1 pb-10">
      <div>
        <div className="w-4/5 p-5 bg-service-arrow-bg bg-contain bg-no-repeat bg-center bg-top relative mt-[-20px] ">
          <img src={Globe} alt="globe" />
        </div>
      </div>
      <div className=" col-span-2 md:col-span-1 flex flex-col justify-center items-center">
        <h1 className="text-left w-full md:text-5xl text-lg font-semibold md:text-left  text-gray-800 font-montserrat mb-5">
          {data.title}
        </h1>
        <p className="text-left text-oslo_gray not-italic font-normal sm:text-2xl mb-20 font-lato text-sm hidden md:block">
          {data.desc}
        </p>
        <div className="text-left w-full">
          <div className="w-56 hidden md:block">
            <a className=" flex space-x-2.5 items-center justify-start px-4 py-2.5 bg-anzac" href={data.url}>
              <p className="text-sm font-medium text-white font-lato">
                KNOW MORE ABOUT US
              </p>
              <div className="w-5 h-full">
                <div className="flex items-center justify-center flex-1 h-full px-1.5 py-0.5">
                  <ArrowForward />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className=" col-span-3 md:hidden p-5">
        <p className="text-left text-oslo_gray not-italic font-normal text-2xl mb-5 font-lato sm:text-sm ">
          {data.desc}
        </p>
        <div className="w-56 ">
          <a className=" flex space-x-2.5 items-center justify-start px-4 py-2.5 bg-anzac" href={data.url}>
            <p className="text-sm font-medium text-white font-lato">
              KNOW MORE ABOUT US
            </p>
            <div className="w-5 h-full ">
              <div className="flex items-center justify-center flex-1 h-full px-1.5 py-0.5">
                <ArrowForward />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
