import "../App.css";

import mobile from "../assets/images/mobile.svg";
import alarm_on from "../assets/images/alarm_on.svg";
import courses_box from "../assets/images/courses_box.svg";
import nest_remote_comfort_sensor from "../assets/images/nest_remote_comfort_sensor.svg";
import signal_cellular_3_bar from "../assets/images/signal_cellular_3_bar.svg";
import angular from "../assets/images/angular.svg";
import { FooterSub } from "../components/footer_sub";
import { Header } from "../components/header";
import { useEffect, useState } from "react";
import _ from 'lodash';
function Courses() {
  const data = require("../data/data.json");
  const [menu, setMenu] =useState([]);
  const [selected, setSelected] =useState('all');
  useEffect(()=>{
      if(data) {
        setMenu(data.courses_page.menu_items);
      }
  },[]);

  useEffect(() => {
    if (selected && menu.length >0) {
        setMenu(
          menu.map((d) =>
            d.id === selected
              ? { ...d, selected: true }
              : { ...d, selected: false }
          )
        );
    }
  }, [selected]);

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
                    {data.courses_page.title}
                  </h1>
                </div>
                <div className="flex flex-row justify-end items-start text-center">
                  <img src={courses_box} alt={courses_box} />
                </div>
              </div>
              {/** small Screen */}
              <div className="md:hidden flex flex-col items-center justify-center py-20 px-5">
                <h1 className="font-montserrat not-italic font-bold text-4xl text-center text-white pt-10 pb-10">
                  {data.courses_page.title}
                </h1>
                <div className="flex flex-col justify-center items-start">
                  <img src={courses_box} alt={courses_box} />
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
            {data.courses_page.paras.map((p, index) => (
              <p
                className="text-2xl leading-9 text-gray-400 py-10"
                key={`course-para-${index}`}
              >
                {p}
              </p>
            ))}

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
              {menu.map((m, index) => (
                <div
                  onClick={() => {
                    setSelected(m.id);
                  }}
                  className="inline-flex flex-col space-y-2 items-center justify-end w-1/6 h-full cursor-pointer"
                  key={`course-m-${index}`}
                >
                  <p className="text-xl font-bold text-gray-900 font-montserrat">
                    {m.name}
                  </p>
                  {m.selected ? (
                    <div className="w-full h-1 bg-anzac" />
                  ) : (
                    <div className="w-full h-1 bg-gray-200" />
                  )}
                </div>
              ))}
            </div>

            {data.courses_page.courses
              .filter((e) => _.find(e.tags, (e) => e === selected))
              .map((item, index) => (
                <div
                  className="flex flex-row justify-evenly items-start my-20 pb-10  border-b border-b-anzac"
                  key={`item-index-${index}`}
                >
                  <div>
                    <div className="bg-gray-100 w-96 h-80 flex flex-row justify-center items-center">
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                  <div className="px-10">
                    <p className="text-4xl font-semibold font-montserrat mt-5">
                      {item.name}
                    </p>
                    {item.paras.map((p, i) => (
                      <p
                        key={i}
                        className="text-base text-gray-400 font-lato mt-5"
                      >
                        {p}
                      </p>
                    ))}

                    <div className="flex flex-row justify-start items-center mt-5">
                      <div className="flex flex-row justify-start items-end">
                        <img src={alarm_on} alt={"alarm"} />
                        <p className="text-xs leading-normal text-anzac px-1">
                          Duration: {item.duration}
                        </p>
                      </div>
                      <div className="flex flex-row justify-start items-end px-5">
                        <img
                          src={signal_cellular_3_bar}
                          alt={"signal_cellular_3_bar"}
                        />
                        <p className="text-xs leading-normal text-anzac">
                          Level: {item.level}
                        </p>
                      </div>
                      <div className="flex flex-row justify-start items-end px-5">
                        <img
                          src={nest_remote_comfort_sensor}
                          alt={"nest_remote_comfort_sensor"}
                        />
                        <p className="text-xs leading-normal text-anzac">
                          Location: {item.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center mt-5">
                      {item.techs.map((tech, i) => (
                        <div key={i}>
                          <img src={tech.image} alt={tech.name} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <FooterSub />
    </>
  );
}

export default Courses;
