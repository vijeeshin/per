import "../App.css";


import contactus from  '../assets/images/contactus.svg'
import { Header } from "../components/header";
import { FooterSub } from "../components/footer_sub";


function Contact() {

  const data = require("../data/data.json");
  return (
    <>
      <div className={"bg-shark "}>
        <div className={"bg-hero-pattern bg-cover bg-right bg-no-repeat "}>
          <div className="container mx-auto  py-5">
            <Header />
            <section>
              <div className=" hidden md:grid md:grid-cols-2 py-44 px-20 ">
                <div>
                  <h1 className="font-montserrat not-italic font-bold lg:text-6xl md:text-4xl  text-white pt-20 pb-10">
                    {data.contact_page.title}
                  </h1>
                </div>
                <div className="flex flex-row justify-end items-start text-center">
                  <img src={contactus} />
                </div>
              </div>
              {/** small Screen */}
              <div className="md:hidden flex flex-col items-center justify-center py-20 px-5">
                <h1 className="font-montserrat not-italic font-bold text-4xl text-center text-white pt-10 pb-10">
                  {data.contact_page.title}
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
              {data.contact_page.subtitle}
            </h1>

            {data.contact_page.paras.map((p, index) => (
              <p
                className="text-2xl leading-9 text-gray-400 mb-10 font-lato text-justify"
                key={`index-${index}`}
              >
                {p}
              </p>
            ))}

            <p className="text-2xl italic font-mediumitalic leading-9 text-gray-900 font-lato text-justify">
              {data.contact_page.tagline}
            </p>
          </div>
        </div>
      </div>
     
      <FooterSub />
    </>
  );
}

export default Contact;
