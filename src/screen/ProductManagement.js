import "../App.css";

import { ReactComponent as ArrowForward } from "../assets/images/arrow-forward-ios.svg";
import { ReactComponent as BlackLogo } from "../assets/images/black-logo.svg";
import { ReactComponent as BlackMail } from "../assets/images/black-mail.svg";
import { ReactComponent as Flag } from "../assets/images/flag.svg";
import { ReactComponent as Social } from "../assets/images/social.svg";
import project_management from "../assets/images/project-management.svg";
import effortless_management from "../assets/images/effortless_management.svg";
import label from "../assets/images/label.svg";
import { Header } from "../components/header";
import { FooterSub } from "../components/footer_sub";


export const ProductManagement = () => {
  const data = require("../data/data.json");
  return (
    <>
      <div className={"bg-shark "}>
        <div className={"bg-hero-pattern bg-cover bg-right bg-no-repeat "}>
          <div className="container mx-auto  py-5">
            <Header />
            <section>
              <div className=" hidden md:grid md:grid-cols-2 py-20 px-20 ">
                <div>
                  <h1 className="font-montserrat not-italic font-bold lg:text-6xl md:text-4xl  text-white pt-20 pb-10">
                    {data.product_management_page.title}
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-start">
                  {data.product_management_page.subList.map((list, index) => (
                    <div
                      key={`list-${index}`}
                      className="flex flex-row justify-start items-center"
                    >
                      <img src={label} alt={"label"} />
                      <p className="text-lg tracking-wider text-white px-3">
                        {list}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/** small Screen */}
              <div className="md:hidden flex flex-col items-center justify-center py-20 px-5">
                <h1 className="font-montserrat not-italic font-bold text-4xl text-center text-white pt-10 pb-10">
                  {data.product_management_page.title}
                </h1>
                <div className="flex flex-col justify-center items-start">
                  {data.product_management_page.subList.map((list, index) => (
                    <div
                      key={`list-${index}`}
                      className="flex flex-row justify-start items-center"
                    >
                      <img src={label} alt={"label"} />
                      <p className="text-lg tracking-wider text-white px-3">
                        {list}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/** small Screen */}
            </section>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-row grid-cols-1 lg:grid-rows-1  grid-rows-1 lg:grid-cols-2">
          <div className="hidden lg:block">
            <div className="bg-common bg-center hidden md:block  text-center  bg-no-repeat relative top-[-43px] h-[32rem]">
              <img
                src={project_management}
                alt={"project_management"}
                className={"inline mt-10"}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start px-5 py-10">
            <h1 className="text-5xl font-semibold text-gray-900 font-montserrat mb-5 text-center md:text-left">
              {data.product_management_page.section_one.title}
            </h1>
            <div className="w-full flex flex-row justify-center items-center p-5 lg:hidden">
              <img src={project_management} alt={"project_management"} />
            </div>
            <p className="text-xl leading-loose text-gray-400 mb-5 font-lato">
              {data.product_management_page.section_one.desc}
            </p>
            <p className="text-base italic font-mediumitalic text-gray-900">
              {data.product_management_page.section_one.tagline}
            </p>
            <a
              className="flex space-x-2.5 items-center justify-start px-4 py-2.5 bg-anzac w-fit"
              href={data.product_management_page.section_one.url}
            >
              <p className="text-sm font-medium text-white">CONTACT US</p>
              <div className="w-1/6 h-full">
                <div className="flex items-center justify-center flex-1 h-full px-1.5 py-0.5">
                  <ArrowForward />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-anzac">
        <div className="container mx-auto">
          <div className="hidden lg:grid grid-cols-3 py-20">
            <div className="col-span-2">
              <h1 className="text-5xl font-bold text-gray-900 mb-10npm st">
                {data.product_management_page.section_two.title}
                <br />
              </h1>
              {data.product_management_page.section_two.paras.map(
                (p, index) => (
                  <p
                    className="text-2xl leading-8 text-gray-100 py-3"
                    key={`section-two-para-${index}`}
                  >
                    {p}
                    <br />
                  </p>
                )
              )}
              <p className="text-3xl italic font-mediumitalic text-gray-100">
                {data.product_management_page.section_two.tagline}
              </p>
            </div>
            <div className="col-span-1">
              <img src={effortless_management} alt={"effortless_management"} />
            </div>
          </div>

          <div className="grid lg:hidden grid-cols-1 py-20 px-5">
            <h1 className="text-5xl font-bold text-gray-900 mb-10 ">
              {data.product_management_page.section_two.title}
              <br />
            </h1>
            {data.product_management_page.section_two.paras.map((p, index) => (
              <p
                className="text-2xl leading-8 text-gray-100 py-3"
                key={`section-two-para-${index}`}
              >
                {p}
                <br />
              </p>
            ))}
          </div>
        </div>
      </div>

      <FooterSub />
    </>
  );
};
