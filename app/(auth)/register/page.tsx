import SignUpForm from "@/components/forms/SignUpForm";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-4 text-grey-900 shadow-md bg-white p-8 max-w-[560px] w-[80%] rounded-2xl">
      <h1 className="text-h1 uppercase ">Register</h1>
      <SignUpForm />
    </div>
  );
};

export default page;
