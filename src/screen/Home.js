import "./App.css";
import { ReactComponent as Logo } from "./assets/images/logo.svg";
import { ReactComponent as Letter } from "./assets/images/letter.svg";
import { ReactComponent as Menu } from "./assets/images/menu.svg";
import HeroObject1 from "./assets/images/hero-object-1.svg";
import { ReactComponent as ArrowForward } from "./assets/images/arrow-forward-ios.svg";
import { ReactComponent as Attraction } from "./assets/images/attractions.svg";
import { ReactComponent as Stream } from "./assets/images/stream.svg";
import { ReactComponent as Ads } from "./assets/images/ads_click.svg";
import { ReactComponent as VolunteerActivism } from "./assets/images/volunteer_activism.svg";
import { ReactComponent as TravelExplore } from "./assets/images/travel_explore.svg";
import { ReactComponent as MagicButton } from "./assets/images/magic_button.svg";
import { ReactComponent as Dashboard } from "./assets/images/dashboard.svg";
import Help from "./assets/images/help.svg";
import HelpSmall from "./assets/images/help-small.svg";
import { ReactComponent as BlackLogo } from "./assets/images/black-logo.svg";
import { ReactComponent as BlackMail } from "./assets/images/black-mail.svg";
import { ReactComponent as Flag } from "./assets/images/flag.svg";
import { ReactComponent as Social } from "./assets/images/social.svg";
import LatestTechnologyImage from "./assets/images/LatestTechnologyImage.svg";
import Designhead from "./assets/images/designhead.svg";
import Android from "./assets/images/android.svg";
import OurServiceImg from "./assets/images/our-services.svg";
import Globe from "./assets/images/globe.png";
import cakap from "./assets/images/cakap.svg";
import juneit from "./assets/images/juneit.svg";
import Cleanline from "./assets/images/Cleanline.svg";
import bolder from "./assets/images/bolder.svg";

function Home() {
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
              <div className=" hidden md:grid md:grid-cols-2 py-20 px-20 ">
                <div>
                  <h1 className="font-montserrat not-italic font-bold lg:text-6xl md:text-4xl  text-white pt-20 pb-10">
                    DESIGN AND BUILD YOUR TECH TEAM
                  </h1>
                  <h4 className="font-montserrat not-italic font-normal  text-2xl text-oslo_gray pb-10">
                    You’ve come to the right place for fast-track services!
                    Build your team of highly trained professionals seamlessly.{" "}
                  </h4>
                  <h5 className="font-lato italic font-normal  text-2xl text-white mb-10">
                    Design and build your dream team with us!
                  </h5>
                  <button className=" bg-anzac hover:bg-grey   py-2 px-4  inline-flex items-center">
                    <span className=" px-2 font-lato not-italic font-normal text-sm text-white">
                      OUR SERVICES
                    </span>
                    <ArrowForward />
                  </button>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <img src={HeroObject1} />
                </div>
              </div>
              {/** small Screen */}
              <div className="md:hidden flex flex-col items-center justify-center py-20 px-5">
                <h1 className="font-montserrat not-italic font-bold text-4xl text-center text-white pt-10 pb-10">
                  DESIGN AND BUILD YOUR TECH TEAM
                </h1>

                <div className="w-full">
                  <img src={HeroObject1} className={"object-contain"} />
                </div>

                <h4 className="font-montserrat not-italic font-normal  text-2xl text-oslo_gray pb-10">
                  You’ve come to the right place for fast-track services! Build
                  your team of highly trained professionals seamlessly.{" "}
                </h4>
                <h5 className="font-lato italic font-normal  text-2xl text-white mb-10">
                  Design and build your dream team with us!
                </h5>
                <div className="w-full text-center">
                  <button className=" bg-anzac hover:bg-grey   py-2 px-4  inline-flex items-center">
                    <span className=" px-2 font-lato not-italic font-normal text-sm text-white">
                      OUR SERVICES
                    </span>
                    <ArrowForward />
                  </button>
                </div>
              </div>
              {/** small Screen */}
            </section>
          </div>
        </div>
      </div>
      <div className="container mx-auto bg-white">
        <div className="grid grid-cols-3 md:grid-cols-2 grid-rows-2 md:grid-rows-1">
          <div>
            <div className="w-4/5 p-5 bg-service-arrow-bg bg-contain bg-no-repeat bg-center bg-top  ">
              <img src={Globe} />
            </div>
          </div>
          <div className=" col-span-2 md:col-span-1 flex flex-col justify-center items-center">
            <p className="text-left w-full md:text-5xl text-lg font-semibold text-gray-800 font-montserrat">
              COMPLETE <br />
              CLIENT SUCCESS
            </p>
            <p className="text-left text-oslo_gray not-italic font-normal sm:text-2xl mb-20 font-lato text-sm hidden md:block">
              We're the free-flowing gateway between you and your milestone of
              success!
            </p>
            <div className="w-56 hidden md:block">
              <div className=" flex space-x-2.5 items-center justify-start px-4 py-2.5 bg-anzac">
                <p className="text-sm font-medium text-white font-lato">
                  KNOW MORE ABOUT US
                </p>
                <div className="w-5 h-full">
                  <div className="flex items-center justify-center flex-1 h-full px-1.5 py-0.5">
                    <ArrowForward />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-3 md:hidden p-5">
            <p className="text-left text-oslo_gray not-italic font-normal text-2xl mb-5 font-lato text-sm ">
              We're the free-flowing gateway between you and your milestone of
              success!
            </p>
            <div className="w-56 ">
              <div className=" flex space-x-2.5 items-center justify-start px-4 py-2.5 bg-anzac">
                <p className="text-sm font-medium text-white font-lato">
                  KNOW MORE ABOUT US
                </p>
                <div className="w-5 h-full ">
                  <div className="flex items-center justify-center flex-1 h-full px-1.5 py-0.5">
                    <ArrowForward />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-our-service-bg bg-no-repeat bg-cover ">
        <div className="container  mx-auto">
          <div className="grid grid-cols-1 py-20 px-10  ">
            <div className=" flex flex-col justify-center items-center">
              <h1 className="text-white font-semibold  text-lg md:text-5xl font-montserrat">
                Our Services
              </h1>
            </div>
            <div className="hidden md:grid md:grid-rows-2 md:grid-cols-4 md:gap-2 px-10">
              <a className="bg-ebony_clay/50 px-5 mx-5 md:mx-0 py-10  md:w-auto">
                <div className=" w-full  flex flex-row justify-end items-center text-right py-10">
                  <Attraction className="inline-block" />
                </div>
                <span className="text-white text-clip">
                  TECH TRANSFORMATION
                </span>
              </a>
              <a className="bg-ebony_clay/50 px-5 mx-5 md:mx-0 py-10  md:w-auto">
                <div className=" w-full  flex flex-row justify-end items-center text-right py-10">
                  <Stream className="inline-block" />
                </div>
                <span className="text-white text-clip">TEAM BUILDING</span>
              </a>
              <a className="bg-ebony_clay/50 px-5 mx-5 md:mx-0 py-10  md:w-auto">
                <div className=" w-full  flex flex-row justify-end items-center text-right py-10">
                  <Ads className="inline-block" />
                </div>
                <span className="text-white text-clip">TALENTS ON DEMAND</span>
              </a>
              <a className="bg-ebony_clay/50 px-5 mx-5 md:mx-0 py-10  md:w-auto">
                <div className=" w-full  flex flex-row justify-end items-center text-right py-10">
                  <VolunteerActivism className="inline-block" />
                </div>
                <span className="text-white text-clip">PRODUCT MANAGEMENT</span>
              </a>
              <a className="bg-ebony_clay/50 px-5 mx-5 md:mx-0 py-10  md:w-auto">
                <div className=" w-full  flex flex-row justify-end items-center text-right py-10">
                  <TravelExplore className="inline-block" />
                </div>
                <span className="text-white text-clip">DISCOVERY WORKSHOP</span>
              </a>
              <a className="bg-ebony_clay/50 px-5 mx-5 md:mx-0 py-10  md:w-auto">
                <div className=" w-full  flex flex-row justify-end items-center text-right py-10">
                  <MagicButton className="inline-block" />
                </div>
                <span className="text-white text-clip">
                  LATEST TECHNOLOGY TRAINING
                </span>
              </a>
              <a className="bg-ebony_clay/50 px-5 mx-5 md:mx-0 py-10  md:w-auto">
                <div className=" w-full  flex flex-row justify-end items-center text-right py-10">
                  <Dashboard className="inline-block" />
                </div>
                <span className="text-white text-clip">UIUX DESIGN</span>
              </a>
              <a className="bg-anzac px-5 mx-5 md:mx-0 py-10 flex flex-row justify-center items-center  md:w-auto">
                <span className="text-white text-clip text-center">
                  View All Service
                </span>
              </a>
            </div>
          </div>

          <div className=" md:hidden  flex flex-col m-auto p-auto">
            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
              <a className="flex flex-nowrap ml-1">
                <div className="inline-block px-3">
                  <div className="w-64 h-64 max-w-xs overflow-hidden  shadow-md  bg-ebony_clay/50  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <div className=" flex flex-row justify-end items-center text-right py-10 ">
                      <Attraction className="inline-block" />
                    </div>
                    <span className="text-white text-clip px-2">
                      TECH TRANSFORMATION
                    </span>
                  </div>
                </div>
              </a>

              <a className="flex flex-nowrap ml-1 ">
                <div className="inline-block px-3">
                  <div className="w-64 h-64 max-w-xs overflow-hidden  shadow-md  bg-ebony_clay/50  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <div className=" flex flex-row justify-end items-center text-right py-10 ">
                      <Stream className="inline-block" />
                    </div>
                    <span className="text-white text-clip px-2">
                      TEAM BUILDING
                    </span>
                  </div>
                </div>
              </a>

              <a className="flex flex-nowrap  ml-1 ">
                <div className="inline-block px-3">
                  <div className="w-64 h-64 max-w-xs overflow-hidden  shadow-md  bg-ebony_clay/50  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <div className=" flex flex-row justify-end items-center text-right py-10 ">
                      <Ads className="inline-block" />
                    </div>
                    <span className="text-white text-clip px-2">
                      TALENTS ON DEMAND
                    </span>
                  </div>
                </div>
              </a>

              <a className="flex flex-nowrap  ml-1 ">
                <div className="inline-block px-3">
                  <div className="w-64 h-64 max-w-xs overflow-hidden  shadow-md  bg-ebony_clay/50  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <div className=" flex flex-row justify-end items-center text-right py-10 ">
                      <VolunteerActivism className="inline-block" />
                    </div>
                    <span className="text-white text-clip px-2">
                      PRODUCT MANAGEMENT
                    </span>
                  </div>
                </div>
              </a>

              <a className="flex flex-nowrap  ml-1 ">
                <div className="inline-block px-3">
                  <div className="w-64 h-64 max-w-xs overflow-hidden  shadow-md  bg-ebony_clay/50  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <div className=" flex flex-row justify-end items-center text-right py-10 ">
                      <TravelExplore className="inline-block" />
                    </div>
                    <span className="text-white text-clip px-2">
                      DISCOVERY WORKSHOP
                    </span>
                  </div>
                </div>
              </a>

              <a className="flex flex-nowrap  ml-1 ">
                <div className="inline-block px-3">
                  <div className="w-64 h-64 max-w-xs overflow-hidden  shadow-md  bg-ebony_clay/50  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <div className=" flex flex-row justify-end items-center text-right py-10 ">
                      <MagicButton className="inline-block" />
                    </div>
                    <span className="text-white text-clip px-2">
                      LATEST TECHNOLOGY TRAINING
                    </span>
                  </div>
                </div>
              </a>

              <a className="flex flex-nowrap  ml-1 ">
                <div className="inline-block px-3">
                  <div className="w-64 h-64 max-w-xs overflow-hidden  shadow-md  bg-ebony_clay/50  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <div className=" flex flex-row justify-end items-center text-right py-10 ">
                      <Dashboard className="inline-block" />
                    </div>
                    <span className="text-white text-clip px-2">
                      UIUX DESIGN
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="md:hidden py-5 flex flex-row justify-center items-center">
            <a className=" mx-auto w-40" href="">
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
                LATEST TECHNOLOGY
                <br />
                TRAINING PROGRAM
              </h1>
              <div className="flex md:hidden flex-row justify-center items-center mb-5">
                <img src={LatestTechnologyImage} />
              </div>
              <p className="xl:text-3xl text-base text-gray-400 font-lato pb-5">
                Join our fast growing global team to unleash your full
                potential.
              </p>
              <p className="xl:text-xl  text-base leading-loose font-lato bg-anzac md:bg-transparent mb-5 w-fit px-2 md:px-0 text-white md:text-black ">
                Technology Stack and Tools
              </p>
              <div className=" grid grid-rows-2 grid-cols-4 gap-2 gap-y-6">
                <div className=" bg-white flex flex-row justify-center items-center h-12 w-12 xl:h-24 xl:w-24 p-2 ">
                  <img src={Android} />
                </div>
                <div className=" bg-white flex flex-row justify-center items-center h-12 w-12 xl:h-24 xl:w-24 p-2 ">
                  <img src={Android} />
                </div>
                <div className=" bg-white flex flex-row justify-center items-center h-12 w-12 xl:h-24 xl:w-24 p-2 ">
                  <img src={Android} />
                </div>
                <div className=" bg-white flex flex-row justify-center items-center h-12 w-12 xl:h-24 xl:w-24 p-2 ">
                  <img src={Android} />
                </div>
                <div className=" bg-white flex flex-row justify-center items-center h-12 w-12 xl:h-24 xl:w-24 p-2 ">
                  <img src={Android} />
                </div>
                <div className=" bg-white flex flex-row justify-center items-center h-12 w-12 xl:h-24 xl:w-24 p-2 ">
                  <img src={Android} />
                </div>
              </div>
              <div className="inline-flex space-x-2.5 items-center justify-start px-4 py-2.5 bg-white border border-anzac mt-10">
                <p className="text-sm font-medium text-anzac">
                  VIEW ALL COURSES
                </p>
                <div className="w-5 h-full">
                  <div className="flex items-center justify-center flex-1 h-full py-0.5 pl-1 pr-0.5 text-anzac">
                    <ArrowForward stroke="#E1A83F" />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-row justify-center items-center p-20">
              <img src={LatestTechnologyImage} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-shark bg-tech-stack-bg bg-cover bg-no-repeat bg-center sm:h-[700px] flex flex-col justify-center items-center  ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <h1 className="py-20 text-anzac text-center font-semibold text-2xl xl:text-5xl  font-montserrat px-2">
              Advanced and Updated Technology
            </h1>

            <p className="text-xl md:text-3xl  font-medium text-gray-100 mb-5 px-10 md:px-0">
              Through this, your product will become a dominating candidate in
              the industry. Utilizing cloud technology and extreme programming,
              it will be a strong competitor. Not to mention highly sought
              after, as consumers love state-of-the-art technology, which you
              will have by the end of it. <br />
            </p>
            <p className="text-xl md:text-3xl font-medium text-gray-100 px-10 md:px-0">
              PerfectzDigital offers not just technical training but a
              lifestyle. Our service instills a fascination for technology and
              the perfect skill set alongside it. Your workplace culture will
              include tech-savviness, which attracts all sorts of investors.
            </p>

            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar mt-24">
              <a className="flex flex-nowrap  ml-1 ">
                <div className="inline-block px-3">
                  <div className="w-32 h-32 max-w-xs overflow-hidden  shadow-md  bg-white flex flex-row justify-center items-center">
                    <img src={Android} />
                  </div>
                </div>
              </a>

              <a className="flex flex-nowrap  ml-1 ">
                <div className="inline-block px-3">
                  <div className="w-32 h-32 max-w-xs overflow-hidden  shadow-md  bg-white flex flex-row justify-center items-center">
                    <img src={Android} />
                  </div>
                </div>
              </a>

              <a className="flex flex-nowrap  ml-1 ">
                <div className="inline-block px-3">
                  <div className="w-32 h-32 max-w-xs overflow-hidden  shadow-md  bg-white flex flex-row justify-center items-center">
                    <img src={Android} />
                  </div>
                </div>
              </a>

              <a className="flex flex-nowrap  ml-1 ">
                <div className="inline-block px-3">
                  <div className="w-32 h-32 max-w-xs overflow-hidden  shadow-md  bg-white flex flex-row justify-center items-center">
                    <img src={Android} />
                  </div>
                </div>
              </a>

              <a className="flex flex-nowrap  ml-1 ">
                <div className="inline-block px-3">
                  <div className="w-32 h-32 max-w-xs overflow-hidden  shadow-md  bg-white flex flex-row justify-center items-center">
                    <img src={Android} />
                  </div>
                </div>
              </a>

              <a className="flex flex-nowrap  ml-1 ">
                <div className="inline-block px-3">
                  <div className="w-32 h-32 max-w-xs overflow-hidden  shadow-md  bg-white flex flex-row justify-center items-center">
                    <img src={Android} />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-anzac">
        <div className="container mx-auto ">
          <div className="hidden md:grid grid-cols-2 py-40 ">
            <div className="py-24">
              <h1 className="text-2xl md:text-5xl font-montserrat font-bold text-white mb-10">
                Help us help you!
              </h1>
              <p className="text-3xl font-medium text-gray-100 text-lato mb-10">
                All you need to do is contact us. Let's walk the path of
                technological development together to come out as an industry
                giant. <br />
              </p>
              <div className="inline-flex space-x-2.5 items-center justify-start px-4 py-2.5 bg-white border border-anzac">
                <p className="text-sm font-medium text-anzac">CONTACT US NOW</p>
                <div className="w-5 h-full">
                  <div className="flex items-center justify-center flex-1 h-full py-0.5 pl-1 pr-0.5">
                    <ArrowForward stroke="#E1A83F" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <img src={Help} />
            </div>
          </div>

          <div className="grid md:hidden grid-cols-1 py-10">
            <h1 className="text-2xl md:text-5xl font-montserrat font-bold text-white mb-10 text-center">
              Help us help you!
            </h1>
            <p className="text-xl md:text-3xl font-medium text-gray-100 text-lato mb-10 px-10">
              All you need to do is contact us. Let's walk the path of
              technological development together to come out as an industry
              giant. <br />
            </p>
            <div className="inline-flex space-x-2.5 items-center justify-start px-4 py-2.5 bg-white border border-anzac w-fit mx-10">
              <p className="text-sm font-medium text-anzac">CONTACT US NOW</p>
              <div className="w-5 h-full">
                <div className="flex items-center justify-center flex-1 h-full py-0.5 pl-1 pr-0.5">
                  <ArrowForward stroke="#E1A83F" />
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center mt-10">
              <img src={HelpSmall} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-wild_sand">
        <div className=" flex flex-col items-center justify-center  py-20 px-10 md:px-44">
          <img src={Designhead} />
          <h1 className="text-center text-2xl md:text-5xl font-semibold text-gray-800 font-montserrat py-5">
            Refresh Your Brands’ with our <br />
            World class designers
          </h1>
          <p class="text-center text-xl md:text-3xl text-gray-400 font-lato mb-10">
            We believe “Mobile first design” principle is the core of any
            product design.
          </p>
          <div class="flex items-center justify-start  bg-anzac px-4 py-2.5">
            <p class="text-sm font-medium text-white font-lato">KNOW MORE</p>
            <div class="h-full">
              <div class="flex h-full flex-1 items-center justify-center px-1.5 py-0.5">
                <ArrowForward />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-anzac  py-10">
        <div className="container mx-auto bg-hand-shake-bg bg-right bg-contain  bg-no-repeat hidden md:block">
          <div className="grid grid-col-1 px-20 py-44">
            <h1 className="text-2xl text-center md:text-left md:text-8xl  font-bold text-white font-montserrat mb-10">
              Hello!
            </h1>
            <p className="text-xl md:text-5xl font-bold leading-10 text-white font-lato mb-10">
              Why settle for a vendor <br />
              when you need is a partner?
            </p>
            <div className="w-auto">
              <div className=" inline-flex  items-center justify-start px-4 py-2.5  bg-white border border-anzac">
                <p className="text-sm font-medium text-anzac">CONTACT US NOW</p>
                <div className="w-5 h-full">
                  <div className="flex items-center justify-center flex-1 h-full py-0.5 pl-1 pr-0.5">
                    <ArrowForward stroke="#E1A83F" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto  block md:hidden">
          <div className="grid grid-col-1 px-20 py-10">
            <h1 className="text-5xl text-center md:text-left md:text-8xl  font-bold text-white font-montserrat mb-10">
              Hello!
            </h1>
            <div className="bg-hand-shake-bg bg-right bg-contain  bg-no-repeat h-44"></div>
            <p className="text-xl md:text-5xl font-bold leading-10 text-white font-lato mb-10 text-center">
              Why settle for a vendor <br />
              when you need is a partner?
            </p>
            <div className="w-full flex flex-row justify-center items-center">
              <div className=" inline-flex  items-center justify-start px-4 py-2.5  bg-white border border-anzac">
                <p className="text-sm font-medium text-anzac">CONTACT US NOW</p>
                <div className="w-5 h-full">
                  <div className="flex items-center justify-center flex-1 h-full py-0.5 pl-1 pr-0.5">
                    <ArrowForward stroke="#E1A83F" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-shark bg-client-bg bg-center bg-cover py-44">
        <div className="container mx-auto">
          <div className="grid grid-col-1 ">
            <h1 className="text-5xl font-semibold text-white font-montserrat text-center mb-10">
              Our Clients
            </h1>
            <div className="grid grid-flow-row grid-cols-2 gap-2 md:grid-cols-4 px-10 md:px-0">
              <div className="p-10 h-full bg-gray-800 flex flex-row justify-center items-center">
                <img src={cakap} />
              </div>
              <div className="p-10 h-full bg-gray-800 flex flex-row justify-center items-center">
                <img src={juneit} />
              </div>
              <div className="p-10 h-full bg-gray-800 flex flex-row justify-center items-center">
                <img src={Cleanline} />
              </div>
              <div className="p-10 h-full bg-gray-800 flex flex-row justify-center items-center">
                <img src={bolder} />
              </div>
            </div>
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
              <p class="text-xl font-medium leading-3 font-lato px-2 ">
                UAE | INDIA
              </p>
            </div>
            <div className="flex flex-row justify-start items-center mt-10 mb-10">
              <BlackMail />
              <p class="text-sm leading-3 px-2 font-lato">
                hello@perfectzdigital.com
              </p>
            </div>
            <Social />
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-6 items-center justify-end flex-1 px-6 py-10 bg-gray-100 md:hidden">
        <p className="text-2xl font-semibold text-gray-800">Contact Us</p>
      </div>

      <div className="flex flex-col space-y-6 items-center justify-end flex-1 px-6 py-10 bg-anzac md:hidden">
        <BlackLogo />
        <div className="flex flex-row justify-start items-center mt-10">
          <Flag />
          <p class="text-xl font-medium leading-3 font-lato px-2 ">
            UAE | INDIA
          </p>
        </div>
        <div className="flex flex-row justify-start items-center mt-10 mb-10">
          <BlackMail />
          <p class="text-sm leading-3 px-2 font-lato">
            hello@perfectzdigital.com
          </p>
        </div>
        <Social />
      </div>
      <div className="bg-black "></div>
    </>
  );
}

export default Home;
