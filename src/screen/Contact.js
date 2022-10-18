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
import manmobile from "../assets/images/man-mobile.svg";

import contactus from  '../assets/images/contactus.svg'


function Contact() {
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
                    Let's collaborate and make history!
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

      <div className="bg-gray-100 border-t border-black pt-10 md:pb-40 pb-10 ">
        <div className="container mx-auto  ">
          <div className="grid grid-col grid-cols-1">
            <h1 className="text-5xl font-semibold text-gray-900 text-center mb-10">
              Contact Us
            </h1>
            <p className="text-2xl leading-9 text-gray-400 mb-10 font-lato text-justify">
              If you're reading this, you're one step away from making the right
              choice. If you're looking for tried and tested IT services, we've
              got you covered. Join us for coffee as we plan and strategize your
              next move in the industry. With a plethora of remarkable and
              effective tools in your footsteps, you can look forward to a
              productive collaboration. <br />
            </p>
            <p className="text-2xl leading-9 text-gray-400 mb-10 font-lato text-justify">
              All you need to do is fill out a form and book your appointment.
              Our customer services ensure an immediate answer to kickstart a
              strong partnership.
            </p>
            <p
              className="text-2xl italic font-mediumitalic leading-9 text-gray-900 font-lato text-justify"

            >
              Reach out to us now!
            </p>
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

export default Contact;
