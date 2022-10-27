
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import {
  LoadCanvasTemplate,
  loadCaptcha,
  validateCaptcha,
} from "./ReactCaptcha";
import useCheckMobileScreen from "../hooks/useCheckMobileScreen";


const ContactForm = (props) => {
  const isMobile = useCheckMobileScreen();
  useEffect(() => {
   if(!isMobile) { loadCaptcha(6);}
  }, [isMobile]);

  
  let schema =isMobile?yup.object().shape({
    fullname: yup
      .string()
      .required("Full Name is required")
      .min(3, "Full Name is too short"),
    email: yup.string().email().required("Email is required"),
    phone: yup
      .string()
      .required("Phone is required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is invalid"
      ),
    message: yup
      .string()
      .required("Message is required")
      .min(10, "Message is too short")
    
  }):  yup.object().shape({
    fullname: yup
      .string()
      .required("Full Name is required")
      .min(3, "Full Name is too short"),
    email: yup.string().email().required("Email is required"),
    phone: yup
      .string()
      .required("Phone is required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is invalid"
      ),
    message: yup
      .string()
      .required("Message is required")
      .min(10, "Message is too short"),
    captcha: yup.string().required("Captcha is required"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema), reValidateMode:"onSubmit" });

 
  const onSubmit = (data) => {
    if (validateCaptcha(data.captcha) == true) {
      emailjs
        .send(
          "service_v4ls8np",
          "template_wdcsx3k",
          {
            from_name: data.fullname,
            email: data.email,
            phone: data.phone,
            message: data.message,
          },
          "UMXQFQwixnYKhCd0f"
        )
        .then(
          (result) => {
           
            reset();
           if(!isMobile)  loadCaptcha(6);
          },
          (error) => {
           
            reset();
            if(!isMobile)  loadCaptcha(6);
          }
        );
    }
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <input
            type="text"
            className={
              errors.fullname
                ? "text-red-800 border border-red-800 bg-white p-2 w-full"
                : "text-black-800 border border-gray-200 bg-white p-2 w-full"
            }
            placeholder="Full Name"
            {...register("fullname")}
          />
          {errors.fullname ? (
            <div>
              <p className="text-red-800">{errors.fullname?.message}</p>
            </div>
          ) : null}
        </div>
        <div className="mb-3">
          <input
            type="email"
            className={
              errors.email
                ? "text-red-800 border border-red-800 bg-white p-2 w-full"
                : "text-black-800 border border-gray-200 bg-white p-2 w-full"
            }
            placeholder="Email ID"
            {...register("email")}
          />
          {errors.email ? (
            <div>
              <p className="text-red-800">{errors.email?.message}</p>
            </div>
          ) : null}
        </div>
        <div className="mb-3">
          <input
            {...register("phone")}
            type="number"
            className={
              errors.phone
                ? "text-red-800 border border-red-800 bg-white p-2 w-full"
                : "text-black-800 border border-gray-200 bg-white p-2 w-full"
            }
            placeholder="Phone Number"
          />
          {errors.phone ? (
            <div>
              <p className="text-red-800">{errors.phone?.message}</p>
            </div>
          ) : null}
        </div>
        <div className="mb-3">
          <textarea
            className={
              errors.message
                ? "text-red-800 border border-red-800 bg-white p-2 w-full"
                : "text-black-800 border border-gray-200 bg-white p-2 w-full"
            }
            rows="4"
            placeholder="Message"
            {...register("message")}
          ></textarea>
          {errors.message ? (
            <div>
              <p className="text-red-800">{errors.message?.message}</p>
            </div>
          ) : null}
        </div>

        {!isMobile && <div className="mb-3">
          <div className=" flex flex-col justify-start item-center">
            <div className="flex flex-row justify-start item-center">
              <LoadCanvasTemplate reloadText={"↻"} reloadColor={"#000"} />
            </div>
            <div className="flex flex-col justify-start item-center">
              <input
                style={{ width: "200px" }}
                {...register("captcha")}
                className={
                  errors.captcha
                    ? "text-red-800 border border-red-800 bg-white p-2 w-80"
                    : "text-black-800 border border-gray-200 bg-white p-2 w-80"
                }
                placeholder="Captcha"
              />
              {errors.captcha ? (
                <div>
                  <p className="text-red-800">{errors.captcha?.message}</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>}
        <div className="mb-3">
          <input
            href="#"
            className="shadow-sm px-5 py-3 bg-anzac text-white cursor-pointer"
            type="submit"
            value={"SEND ENQUIRY"}
          />
        </div>
      </form>
    </div>
  );
};



export default ContactForm;