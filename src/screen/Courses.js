import "../App.css";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as Letter } from "../assets/images/letter.svg";
import { ReactComponent as Menu } from "../assets/images/menu.svg";
import { ReactComponent as ArrowForward } from "../assets/images/arrow-forward-ios.svg";
import { ReactComponent as BlackLogo } from "../assets/images/black-logo.svg";
import { ReactComponent as BlackMail } from "../assets/images/black-mail.svg";
import { ReactComponent as Flag } from "../assets/images/flag.svg";
import { ReactComponent as Social } from "../assets/images/social.svg";
import UIUX from "../assets/images/ui-ux.svg";
import mobile from "../assets/images/mobile.svg";
import alarm_on from "../assets/images/alarm_on.svg";
import contactus from "../assets/images/contactus.svg";
import nest_remote_comfort_sensor from "../assets/images/nest_remote_comfort_sensor.svg";
import signal_cellular_3_bar from "../assets/images/signal_cellular_3_bar.svg";
import angular from "../assets/images/angular.svg";

function Courses() {
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
                    SUPERCHARGE YOUR CAREER WITH OUR TECHNOLOGY TRAINING PROGRAM
                  </h1>
                </div>
                <div className="flex flex-row justify-end items-start text-center">
                  <img src={contactus} />
                </div>
              </div>
              {/** small Screen */}
              <div className="md:hidden flex flex-col items-center justify-center py-20 px-5">
                <h1 className="font-montserrat not-italic font-bold text-4xl text-center text-white pt-10 pb-10">
                  On-Demand Talent
                </h1>
                <div className="flex flex-col justify-center items-start">
                  <img src={contactus} />
                </div>
              </div>
              {/** small Screen */}
            </section>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto  ">
          <div className="grid grid-col grid-cols-1 font-lato">
            <p className="text-2xl leading-9 text-gray-400 py-10">
              With premium study material, project training, Agile process
              training, and personal development, this is a well-rounded course.
              It lasts for 2 months, <br />
              and you can access it from the comfort of your home.
            </p>
            <div className="inline-flex space-x-12 items-center justify-center w-full">
              <div className="flex space-x-1 items-center justify-center  h-full">
                <div className="w-1.5 h-1/4 bg-anzac rounded-full" />
                <p className="text-xs font-medium leading-normal text-anzac">
                  Experienced Trainers
                </p>
              </div>
              <div className="flex space-x-1 items-center justify-end  h-full">
                <div className="w-1.5 h-1/4 bg-anzac rounded-full" />
                <p className="text-xs font-medium leading-normal text-anzac">
                  Premium Study Materials
                </p>
              </div>
              <div className="flex space-x-1 items-center justify-end  h-full">
                <div className="w-1.5 h-1/4 bg-anzac rounded-full" />
                <p className="text-xs font-medium leading-normal text-anzac">
                  Project Based Training
                </p>
              </div>
              <div className="flex space-x-1 items-center justify-end  h-full">
                <div className="w-1.5 h-1/4 bg-anzac rounded-full" />
                <p className="text-xs font-medium leading-normal text-anzac">
                  Agile Process Training
                </p>
              </div>
              <div className="flex space-x-1 items-center justify-end  h-full">
                <div className="w-1.5 h-1/4 bg-anzac rounded-full" />
                <p className="text-xs font-medium leading-normal text-anzac">
                  Personal Development Program
                </p>
              </div>
            </div>
            <p className="text-5xl font-semibold text-gray-800 text-center py-10">
              Our Courses
            </p>
            <div className="inline-flex space-x-12 items-center justify-center w-full py-5">
              <div className="inline-flex flex-col space-y-2 items-center justify-end w-1/6 h-full">
                <p className="text-xl font-bold text-gray-900 font-montserrat">
                  All Courses
                </p>
                <div className="w-full h-1 bg-anzac" />
              </div>
              <div className="inline-flex flex-col space-y-2 items-center justify-end w-40 h-full">
                <p className="text-xl font-medium text-gray-900 font-montserrat">
                  FrontEnd
                </p>
                <div className="w-full h-1 bg-gray-200" />
              </div>
              <div className="inline-flex flex-col space-y-2 items-center justify-end w-36 h-full">
                <p className="text-xl font-medium text-gray-900 font-montserrat">
                  Backend
                </p>
                <div className="w-full h-1 bg-gray-200" />
              </div>
              <div className="inline-flex flex-col space-y-2 items-center justify-end w-72 h-full">
                <p className="text-xl font-medium text-gray-900 font-montserrat">
                  Artificial Intelligence
                </p>
                <div className="w-full h-1 bg-gray-200" />
              </div>
              <div className="inline-flex flex-col space-y-2 items-center justify-end w-28 h-full">
                <p className="text-xl font-medium text-gray-900">UX/UI</p>
                <div className="w-full h-1 bg-gray-200" />
              </div>
            </div>

            <div className="flex flex-row justify-evenly items-start my-20 pb-10  border-b border-b-anzac">
              <div>
                <div className="bg-gray-100 w-96 h-80 flex flex-row justify-center items-center">
                  <img src={mobile} />
                </div>
              </div>
              <div className="px-10">
                <p className="text-4xl font-semibold font-montserrat mt-5">
                  Mobile Application Development
                </p>
                <p className="text-base text-gray-400 font-lato mt-5">
                  We understand iOS and Android like no other. Our expertise
                  enables us to create complex and intriguing applications.
                  These often go on to become big hits on the Appstore. That is
                  because our programming team helps you formulate an intricate
                  base. This allows for smooth functioning and maximum
                  productivity or entertainment.{" "}
                </p>
                <div className="flex flex-row justify-start items-center mt-5">
                  <div className="flex flex-row justify-start items-end">
                    <img src={alarm_on} />
                    <p className="text-xs leading-normal text-anzac px-1">
                      Duration: 2 Months
                    </p>
                  </div>
                  <div className="flex flex-row justify-start items-end px-5">
                    <img src={signal_cellular_3_bar} />
                    <p className="text-xs leading-normal text-anzac">
                      Level: Beginner
                    </p>
                  </div>
                  <div className="flex flex-row justify-start items-end px-5">
                    <img src={nest_remote_comfort_sensor} />
                    <p className="text-xs leading-normal text-anzac">
                      Location: Remote
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center mt-5">
                  <div>
                    <img src={angular} />
                  </div>
                  <div>
                    <img src={angular} />
                  </div>
                  <div>
                    <img src={angular} />
                  </div>
                </div>
              </div>
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

export default Courses;
