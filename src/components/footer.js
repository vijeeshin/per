import React from 'react'
import ContactForm from './ContactForm';
import { ReactComponent as BlackLogo } from "../assets/images/black-logo.svg";
import { ReactComponent as BlackMail } from "../assets/images/black-mail.svg";
import { ReactComponent as Flag } from "../assets/images/flag.svg";
import { ReactComponent as Social } from "../assets/images/social.svg";

import cakap from "../assets/images/cakap.svg";

export const Footer = () => {
    const data = require('../data/data.json');
  return (
    <>
      <div className="bg-shark bg-client-bg bg-center bg-cover py-44 md:py-0 md:pt-44 ">
        <div className="container mx-auto">
          <div className="grid grid-col-1  mb-20">
            <h1 className="text-5xl font-semibold text-white font-montserrat text-center mb-10">
              Our Clients
            </h1>
            <div className="grid grid-flow-row grid-cols-2 gap-2 md:grid-cols-4 px-10 md:px-0">
             
              {data.home.clients.map((client, index) => {
                return <div
                  className="p-10 h-full bg-gray-800 flex flex-row justify-center items-center"
                  key={`client-${index}`}
                >
                  <img src={client.image} alt={client.name} />
                </div>;
              })}
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="relative  bg-contact bg-cover py-32  bg-no-repeat">
            <div className="container mx-auto">
              <div className="grid grid-row grid-cols-2">
                <div className="px-28">
                  <ContactForm />
                </div>
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
                  <a href={"https://in.linkedin.com/company/perfectz-digital"}><Social /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-6 items-center justify-end flex-1 px-6 py-10 bg-gray-100 md:hidden">
        <p className="text-2xl font-semibold text-gray-800">Contact Us</p>
        <ContactForm />
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
        <a href={"https://in.linkedin.com/company/perfectz-digital"}><Social /></a>
      </div>
      <div className="bg-black h-20 flex-row flex justify-start items-center px-0 md:px-20">
        <p className="text-sm leading-3 text-gray-300 px-5 md:px-20">
          © Copyright {new Date().getFullYear()} | Perfectz Digital
        </p>
      </div>
    </>
  );
}
