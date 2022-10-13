import "./App.css";
import { ReactComponent as Logo } from "./assets/images/logo.svg";
import { ReactComponent as Letter } from "./assets/images/letter.svg";
import { ReactComponent as Menu } from "./assets/images/menu.svg";
import { ReactComponent as HeroObject1 } from "./assets/images/hero-object-1.svg";
import { ReactComponent as ArrowForward } from "./assets/images/arrow-forward-ios.svg";
import { ReactComponent as Attraction } from "./assets/images/attractions.svg";
import { ReactComponent as Stream } from "./assets/images/stream.svg";
import { ReactComponent as Ads } from "./assets/images/ads_click.svg";
import { ReactComponent as VolunteerActivism } from "./assets/images/volunteer_activism.svg";
import { ReactComponent as TravelExplore } from "./assets/images/travel_explore.svg";
import { ReactComponent as MagicButton } from "./assets/images/magic_button.svg";
import { ReactComponent as Dashboard } from "./assets/images/dashboard.svg";
import Globe from "./assets/images/globe.png";


function App() {
  return (
    <>
      <div className={"bg-shark "}>
        <div className={"bg-hero-pattern bg-cover bg-right bg-no-repeat "}>
          <div className="container mx-auto  py-5">
            <div className="flex flex-row justify-between items-center px-2 sm:px-0">
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
              <div className="grid grid-cols-2 py-20 px-5 sm:px-0">
                <div>
                  <h1 className="font-montserrat not-italic font-bold text-6xl text-white pt-20 pb-10">
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
                  <HeroObject1 />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="container mx-auto bg-white">
        <div className="grid grid-cols-2">
          <div>
            <div
              className={
                "relative top-[-20px] sm:top-[-20px] bg-service-arrow-bg bg-contain bg-no-repeat bg-center bg-top "
              }
            >
              <img src={Globe} />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-left text-ebony_clay font-montserrat not-italic font-normal sm:text-5xl py-5 font-semibold text-sm">
              COMPLETE CLIENT SUCCESS
            </h1>
            <p className="text-left text-oslo_gray not-italic font-normal sm:text-2xl mb-20 font-lato text-sm ">
              We're the free-flowing gateway between you and your milestone of
              success!
            </p>
            <button className=" bg-anzac hover:bg-grey   py-2 px-4  inline-flex items-center">
              <span className=" px-2 font-lato not-italic font-normal text-sm text-white">
                KNOW MORE ABOUT US
              </span>
              <ArrowForward />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-our-service-bg bg-no-repeat bg-cover ">
        <div className="container  mx-auto">
          <div className="py-20 flex flex-col justify-center items-center">
            <h1 className="text-white">Our Services</h1>
          </div>
          <div className=" md:grid flex flew-row  md:grid-cols-4  md:gap-5 md:px-20 overflow-x-scroll">
            <div className="bg-ebony_clay/50 px-5 mx-5 md:mx-0 py-10  md:w-auto w-80 ">
              <div className=" w-full  flex flex-row justify-end items-center text-right py-10">
                <Attraction className="inline-block" />
              </div>
              <span className="text-white text-clip sm:overflow-hidden">
                TECH TRANSFORMATION
              </span>
            </div>
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
      </div>
      <div className="bg-white">
        <div className="container mx-auto">dsda</div>
      </div>
    </>
  );
}

export default App;
