import React from 'react'
import ContactForm from './ContactForm';
import { ReactComponent as BlackLogo } from "../assets/images/black-logo.svg";
import { ReactComponent as BlackMail } from "../assets/images/black-mail.svg";
import { ReactComponent as Flag } from "../assets/images/flag.svg";
import { ReactComponent as Social } from "../assets/images/social.svg";

import cakap from "../assets/images/cakap.svg";

export const FooterSub = () => {
    const data = require('../data/data.json');
  return (
    <>
      <div className="bg-gray-100 border-t border-black py-44 md:py-0 md:pt-44 ">
        <div className="container mx-auto">
          <div className="grid grid-col-1  ">
            <h1 className="text-5xl font-semibold text-gray-900 font-montserrat text-center mb-10">
              Contact US
            </h1>
          </div>
        </div>
        <div className="hidden md:block bg-anzac">
          <div className="relative    ">
        
              <div className="flex flex-row items-center">
                <div className=" bg-white py-20 flex-1 flex-row justify-center items-center text-center ">
                  <div className='w-1/2 mx-auto'>
                  <ContactForm />
                  </div>
                </div>
                <div className=" flex-1 flex-col justify-center items-center ">
                <div className='w-1/2 mx-auto'>
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
      <div className="bg-black h-20 flex-row flex justify-start items-center px-10">
        <p className="text-sm leading-3 text-gray-300">
          © Copyright {new Date().getFullYear()} | Perfectz Digital
        </p>
      </div>
    </>
  );
}
