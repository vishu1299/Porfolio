"use client";
import React from "react";
import { useForm } from "react-hook-form";

function Contact_form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    alert(data.email);
    reset();
  };
  return (
    <>
      <h1 className="article-title text-white text-[27px] font-semibold relative pt-[3rem] pb-[7px]">
        Contact US
      </h1>
      <form className="pt-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-4">
          <div className="flex justify-between gap-y-5 flex-col sm:flex-row">
            <div className="">
              <input
                className="border border-gray-500 bg-transparent text-white p-2 rounded-lg lg:w-[24rem] w-full placeholder:text-gray-500 pl-3 sm:w-[18rem]"
                placeholder="Enter name here..."
                autoFocus
                type="text"
                {...register("name", {
                  required: "This field is required",
                  minLength: {
                    value: 3,
                    message: "Please enter Complete name ",
                  },
                  maxLength: {
                    value: 20,
                    message: "Enter valid name  ",
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-500 pt-2 pb-2">
                  {errors.name.message as string}
                </p>
              )}
            </div>
            <div className="">
              <input
                className="border border-gray-500 bg-transparent text-white p-2 rounded-lg lg:w-[24rem] w-full placeholder:text-gray-500 pl-3 sm:w-[18rem]"
                placeholder="Enter Email here..."
                type="text"
                {...register("email", {
                  required: "this field is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 pt-2 pb-2">
                  {errors.email.message as string}
                </p>
              )}
            </div>
          </div>
          <div className="">
            <textarea
              className="border border-gray-500 bg-transparent text-white p-2 rounded-lg h-[10rem] w-full placeholder:text-gray-500 pl-3 "
              placeholder="Enter message here..."
              {...register("message", {
                required: "This field is required",
                minLength: {
                  value: 5,
                  message: "Message Cannot be less then 5 words",
                },
                maxLength: {
                  value: 50,
                  message: "Message Cannot be more then 50 words",
                },
              })}
            />
            {errors.message && (
              <p className="text-red-500 pt-2 pb-2">
                {errors.message.message as string}
              </p>
            )}
          </div>
        </div>
        <button
          className="text-orange-400 bg-[#202022] shadow-custom  rounded-xl p-3 border-t-[1px] border-l-[1px] border-[#3A3A3A] mt-5"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </>
  );
}

export default Contact_form;
