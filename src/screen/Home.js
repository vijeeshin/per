import "../App.css";


import { ReactComponent as ArrowForward } from "../assets/images/arrow-forward-ios.svg";
import Help from "../assets/images/help.svg";
import HelpSmall from "../assets/images/help-small.svg";
import LatestTechnologyImage from "../assets/images/LatestTechnologyImage.svg";
import Designhead from "../assets/images/designhead.svg";
import { Header } from "../components/header";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { CarousalItem } from "../components/carousal-item";
import { HomeSuccessSection } from "../components/home-section-1";
import { Footer } from "../components/footer";
import useCheckMobileScreen from "../hooks/useCheckMobileScreen";

function Home() {

  const data = require("../data/data.json");
  return (
    <>
      <div className={"bg-shark "}>
        <div className={"bg-hero-pattern bg-cover bg-right bg-no-repeat "}>
          <div className="container mx-auto  py-5">
            <Header />
            <Carousel
              showArrows={false}
              autoPlay={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              swipeable={useCheckMobileScreen()?false:true}
            >
              {data &&
                data.home &&
                data.home.carousal.map((carousal, index) => (
                  <CarousalItem data={carousal} key={`carousal-${index}`} />
                ))}
            </Carousel>
          </div>
        </div>
      </div>
      <div className="container mx-auto bg-white">
        <HomeSuccessSection data={data.home.section_1} />
      </div>
      <div className="bg-our-service-bg bg-no-repeat bg-cover ">
        <div className="container  mx-auto">
          <div className="grid grid-cols-1 py-20 px-10  ">
            <div className=" flex flex-col justify-center items-center">
              <h1 className="text-white font-semibold  text-lg md:text-5xl font-montserrat mb-20">
                Our Services
              </h1>
            </div>
            <div className="hidden md:grid md:grid-rows-2 md:grid-cols-4 md:gap-2 px-10">
              {data.home &&
                data.home.services.map((service, index) => (
                  <a
                    href={`${service.url}`}
                    className="bg-ebony_clay/50 px-5 mx-5 md:mx-0 py-10  md:w-auto"
                    key={`service-${index}`}
                  >
                    <div className=" w-full  flex flex-row justify-end items-center text-right py-10">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-18 h-18"
                      />
                    </div>
                    <span className="text-white text-clip">
                      {service.title}
                    </span>
                  </a>
                ))}

              <a
                className="bg-anzac px-5 mx-5 md:mx-0 py-10 flex flex-row justify-center items-center  md:w-auto"
                href="/services"
              >
                <span className="text-white text-clip text-center">
                  View All Service
                </span>
              </a>
            </div>
          </div>

          <div className=" md:hidden  flex flex-col m-auto p-auto">
            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
              {data.home &&
                data.home.services.map((service, index) => (
                  <a
                    href={`${service.url}`}
                    className="flex flex-nowrap ml-1"
                    key={`service-${index}`}
                  >
                    <div className="inline-block px-3">
                      <div className="w-64 h-64 max-w-xs overflow-hidden  shadow-md  bg-ebony_clay/50  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <div className=" flex flex-row justify-end items-center text-right py-10  ">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-18 h-18"
                          />
                        </div>
                        <span className="text-white text-clip px-2">
                          {service.title}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
            </div>
          </div>
          <div className="md:hidden py-5 flex flex-row justify-center items-center">
            <a className=" mx-auto w-40" href="/services">
              <div className=" flex  items-center justify-center px-4 py-2.5 bg-anzac">
                <p className="text-sm font-medium text-white font-lato text-center">
                  View All Service
                </p>
                <div className="w-5 h-full ">
                  <div className="flex items-center justify-center flex-1 h-full px-1.5 py-0.5">
                    <ArrowForward />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className=" bg-wild_sand w-full">
        <div className={"container mx-auto"}>
          <div className="grid-row grid-cols-1 grid md:grid-cols-2">
            <div className="p-5 xl:p-20">
              <h1 className="xl:text-5xl text-xl font-semibold text-gray-800  font-montserrat pb-5">
                {data.home.latest_technology.title}
              </h1>
              <div className="flex md:hidden flex-row justify-center items-center mb-5">
                <img src={LatestTechnologyImage} />
              </div>
              <p className="xl:text-3xl text-base text-gray-400 font-lato pb-5">
                {data.home.latest_technology.subTitle}
              </p>
              <p className="xl:text-xl  text-base leading-loose font-lato bg-anzac md:bg-transparent mb-5 w-fit px-2 md:px-0 text-white md:text-black ">
                Technology Stack and Tools
              </p>
              <div className=" grid grid-rows-2 grid-cols-4 gap-2 gap-y-6">
                {data.home &&
                  data.home.latest_technology.tools.length > 0 &&
                  data.home.latest_technology.tools.map((tool, index) => (
                    <a
                      className=" bg-white flex flex-row justify-center items-center h-12 w-12 xl:h-24 xl:w-24 p-2 "
                      href={tool.url}
                      key={index}
                    >
                      <img src={tool.image} alt={tool.name} />
                    </a>
                  ))}
              </div>
              <a
                className="inline-flex space-x-2.5 items-center justify-start px-4 py-2.5 bg-white border border-anzac mt-10"
                href="/courses"
              >
                <p className="text-sm font-medium text-anzac">
                  VIEW ALL COURSES
                </p>
                <div className="w-5 h-full">
                  <div className="flex items-center justify-center flex-1 h-full py-0.5 pl-1 pr-0.5 text-anzac">
                    <ArrowForward stroke="#E1A83F" />
                  </div>
                </div>
              </a>
            </div>
            <div className="hidden md:flex flex-row justify-center items-center p-20">
              <img src={LatestTechnologyImage} alt={"LatestTechnologyImage"} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-shark bg-tech-stack-bg bg-cover bg-no-repeat bg-center  flex flex-col justify-center items-center  ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <h1 className="py-20 text-anzac text-center font-semibold text-2xl xl:text-5xl  font-montserrat px-2">
              {data.home.advanced_technology.title}
            </h1>

            {data.home.advanced_technology.desc.map((para, index) => (
              <p
                className="text-xl md:text-3xl  font-medium text-gray-100 mb-5 px-10 md:px-20"
                key={`advanced-technology-para-${index}`}
              >
                {para.para}
              </p>
            ))}

            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar mt-24">
              {data.home.advanced_technology.technologies.map(
                (technology, index) => (
                  <a
                    href={technology.url}
                    className="flex flex-nowrap  ml-1 "
                    key={`advanced-technology-technology-${index}`}
                  >
                    <div className="inline-block px-3">
                      <div className="w-32 h-32 max-w-xs overflow-hidden  shadow-md  bg-white flex flex-row justify-center items-center">
                        <img src={technology.image} alt={technology.name} />
                      </div>
                    </div>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-anzac">
        <div className="container mx-auto ">
          <div className="hidden md:grid grid-cols-2 py-40 ">
            <div className="py-24 pl-20">
              <h1 className="text-2xl md:text-5xl font-montserrat font-bold text-white mb-10">
                {data.home.help.title}
              </h1>
              <p className="text-3xl font-medium text-gray-100 text-lato mb-10">
                {data.home.help.desc}
              </p>
              <a
                className="inline-flex space-x-2.5 items-center justify-start px-4 py-2.5 bg-white border border-anzac"
                href={data.home.help.url}
              >
                <p className="text-sm font-medium text-anzac">CONTACT US NOW</p>
                <div className="w-5 h-full">
                  <div className="flex items-center justify-center flex-1 h-full py-0.5 pl-1 pr-0.5">
                    <ArrowForward stroke="#E1A83F" />
                  </div>
                </div>
              </a>
            </div>
            <div className="flex flex-row justify-center items-center">
              <img src={Help} alt={"help"} />
            </div>
          </div>

          <div className="grid md:hidden grid-cols-1 py-10">
            <h1 className="text-2xl md:text-5xl font-montserrat font-bold text-white mb-10 text-center">
              {data.home.help.title}
            </h1>
            <p className="text-xl md:text-3xl font-medium text-gray-100 text-lato mb-10 px-10">
              {data.home.help.desc}
            </p>
            <a
              className="inline-flex space-x-2.5 items-center justify-start px-4 py-2.5 bg-white border border-anzac w-fit mx-10"
              href={data.home.help.url}
            >
              <p className="text-sm font-medium text-anzac">CONTACT US NOW</p>
              <div className="w-5 h-full">
                <div className="flex items-center justify-center flex-1 h-full py-0.5 pl-1 pr-0.5">
                  <ArrowForward stroke="#E1A83F" />
                </div>
              </div>
            </a>

            <div className="flex flex-row justify-center items-center mt-10">
              <img src={HelpSmall} alt={"HelpSmall"} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-wild_sand">
        <div className=" flex flex-col items-center justify-center  py-20 px-10 md:px-44">
          <img src={Designhead} alt={"Designhead"} />
          <h1 className="text-center text-2xl md:text-5xl font-semibold text-gray-800 font-montserrat py-5">
            {data.home.brand.title}
          </h1>
          <p className="text-center text-xl md:text-3xl text-gray-400 font-lato mb-10">
            {data.home.brand.desc}
          </p>
          <a
            className="flex items-center justify-start  bg-anzac px-4 py-2.5"
            href={data.home.brand.know_more_link}
          >
            <p className="text-sm font-medium text-white font-lato">
              KNOW MORE
            </p>
            <div className="h-full">
              <div className="flex h-full flex-1 items-center justify-center px-1.5 py-0.5">
                <ArrowForward />
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="bg-anzac  py-10">
        <div className="container mx-auto bg-hand-shake-bg bg-right bg-contain  bg-no-repeat hidden md:block">
          <div className="grid grid-col-1 px-20 py-44">
            <h1 className="text-2xl text-center md:text-left md:text-8xl  font-bold text-white font-montserrat mb-10">
              {data.home.hello.title}
            </h1>
            <p className="text-xl md:text-5xl font-bold leading-10 text-white font-lato mb-10">
              {data.home.hello.desc}
            </p>
            <div className="w-auto">
              <a
                className=" inline-flex  items-center justify-start px-4 py-2.5  bg-white border border-anzac"
                href={data.home.hello.url}
              >
                <p className="text-sm font-medium text-anzac">CONTACT US NOW</p>
                <div className="w-5 h-full">
                  <div className="flex items-center justify-center flex-1 h-full py-0.5 pl-1 pr-0.5">
                    <ArrowForward stroke="#E1A83F" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto  block md:hidden">
          <div className="grid grid-col-1 px-20 py-10">
            <h1 className="text-5xl text-center md:text-left md:text-8xl  font-bold text-white font-montserrat mb-10">
              {data.home.hello.title}
            </h1>
            <div className="bg-hand-shake-bg bg-right bg-contain  bg-no-repeat h-44"></div>
            <p className="text-xl md:text-5xl font-bold leading-10 text-white font-lato mb-10 text-center">
              {data.home.hello.desc}
            </p>
            <div className="w-full flex flex-row justify-center items-center">
              <a
                className=" inline-flex  items-center justify-start px-4 py-2.5  bg-white border border-anzac"
                href={data.home.hello.url}
              >
                <p className="text-sm font-medium text-anzac">CONTACT US NOW</p>
                <div className="w-5 h-full">
                  <div className="flex items-center justify-center flex-1 h-full py-0.5 pl-1 pr-0.5">
                    <ArrowForward stroke="#E1A83F" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
