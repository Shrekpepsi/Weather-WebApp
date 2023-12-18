import React from "react";
import { FaCloudMoonRain } from "react-icons/fa";

const NoDataPage = () => {
  return (
    <div className="flex flex-col place-items-center justify-center w-full h-[300px] lg:h-[600px]">
      <FaCloudMoonRain size={100} color="white" />
      <h1 className="text-center my-5">
        Explore real-time weather forecasts!
      </h1>
    </div>
  );
};

export default NoDataPage;
