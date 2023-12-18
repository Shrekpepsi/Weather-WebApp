import React from "react";
import { BiSolidError } from "react-icons/bi";


const ErrorPage = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col place-items-center justify-center w-full h-[300px] lg:h-[600px]">
        <BiSolidError size={100} color="red" />
        <h1 className="text-center my-5">
          Error! No data found. Please check your submission.
        </h1>
      </div>
    </div>
  );
};

export default ErrorPage;
