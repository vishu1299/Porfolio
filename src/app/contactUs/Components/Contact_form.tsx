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
          <div className="flex justify-between">
            <div className="">
              <input
                className="border border-gray-500 bg-transparent text-white p-2 rounded-lg w-[22rem] placeholder:text-gray-500 pl-3 "
                placeholder="Enter name here"
                autoFocus
                type="text"
                {...register("name", {
                  required: "true",
                  minLength: {
                    value: 3,
                    message: "Please enter Complete name ",
                  },
                  maxLength: {
                    value: 10,
                    message: "Enter valid name  ",
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>
            <div className="">
              <input
                className="border border-gray-500 bg-transparent text-white p-2 rounded-lg w-[22rem] placeholder:text-gray-500 pl-3"
                placeholder="Enter Email here"
                type="text"
                {...register("email", {
                  required: "true",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Contact_form;
