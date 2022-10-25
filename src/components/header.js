import React from 'react'
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as Letter } from "../assets/images/letter.svg";
import { ReactComponent as Menu } from "../assets/images/menu.svg";
export const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center px-10 md:px-20 ">
      <a href="/">
        <Logo />
      </a>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row justify-between items-center">
          <Letter />
          <span className="px-2  hidden  sm:inline-flex ">
            <a href="mailto:hello@perfectzdigital.com" className="text-white">
              hello@perfectzdigital.com
            </a>
          </span>
        </div>
       {/*  <Menu /> */}
      </div>
    </div>
  );
}
