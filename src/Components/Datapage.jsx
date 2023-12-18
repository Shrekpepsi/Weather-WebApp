import React, { useState } from "react";
import NoDataPage from "./NoDataPage";
import styled from "styled-components";
import { FaCloud } from "react-icons/fa";
import { MdDewPoint } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { PiThermometerHotFill } from "react-icons/pi";
import { WiBarometer } from "react-icons/wi";
import { MdVisibility } from "react-icons/md";
import { FiWind } from "react-icons/fi";
import { GiWindSlap } from "react-icons/gi";

const StyledText = styled.h1`
  font-family: "Monteserat", sans-serif;
  font-size: 15px;
`;

const Datapage = ({ data }) => {
  console.log("data in datapage is ", { data });
  if (data.message === "Nothing to geocode") {
    return <NoDataPage />;
  } else {
    let lastUpdate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(data.current.dt * 1000);
    // Timestamp to day of week
    var day1 = new Date(data.daily[0].dt * 1000);
    var day2 = new Date(data.daily[1].dt * 1000);
    var day3 = new Date(data.daily[2].dt * 1000);
    var day4 = new Date(data.daily[3].dt * 1000);
    var day5 = new Date(data.daily[4].dt * 1000);
    var day6 = new Date(data.daily[5].dt * 1000);
    var day7 = new Date(data.daily[6].dt * 1000);
    var day8 = new Date(data.daily[7].dt * 1000);
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var forecast2 = days[day2.getDay()];
    var forecast3 = days[day3.getDay()];
    var forecast4 = days[day4.getDay()];
    var forecast5 = days[day5.getDay()];
    var forecast6 = days[day6.getDay()];
    var forecast7 = days[day7.getDay()];
    var forecast8 = days[day8.getDay()];

    return (
      <>
        <div className="h-full w-full lg:w-full flex flex-col lg:flex-row py-5">
          <div className="font-mono font-light text-sm lg:text-2xl h-fit w-full grid grid-flow-col grid-rows-4 grid-cols-3 gap-x-4 gap-y-4 text-center align-middle pb-5">
            <div className="col-span-3 flex flex-col h-fit">
              <h1 className="text-lg lg:text-4xl">Current Weather Report</h1>
              <StyledText>Last updated: {lastUpdate}</StyledText>
            </div>
            <div className="h-fit">
              <h1 className="flex flex-col justify-center items-center">
                <FaCloud className="ReactIcons" />
                {data.current.clouds}%
              </h1>
            </div>
            <div className="h-fit">
              <h1 className="flex flex-col justify-center items-center">
                <MdDewPoint className="ReactIcons" />
                {data.current.dew_point.toFixed(0)}
              </h1>
            </div>
            <div className="h-fit">
              <h1 className="flex flex-col justify-center items-center">
                <WiHumidity className="ReactIcons" />
                {data.current.humidity}%
              </h1>
            </div>
            <div className="h-fit">
              <h1 className="flex flex-col justify-center items-center">
                <LiaTemperatureHighSolid className="ReactIcons" />
                {data.current.temp.toFixed(0)}&#176;C
              </h1>
            </div>
            <div className="h-fit">
              <h1 className="flex flex-col justify-center items-center">
                <PiThermometerHotFill className="ReactIcons" />
                {data.current.feels_like.toFixed(0)}&#176;C
              </h1>
            </div>
            <div className="h-fit">
              <h1 className="flex flex-col justify-center items-center">
                <WiBarometer className="ReactIcons" />
                {data.current.pressure}mbar
              </h1>
            </div>
            <div className="h-fit">
              <h1 className="flex flex-col justify-center items-center">
                <MdVisibility className="ReactIcons" />
                {data.current.visibility}m
              </h1>
            </div>
            <div className="h-fit">
              <h1 className="flex flex-col justify-center items-center">
                <FiWind className="ReactIcons" />
                {data.current.wind_speed.toFixed(0)}m/s
              </h1>
            </div>
            <div className="h-fit">
              <h1 className="flex flex-col justify-center items-center">
                <GiWindSlap className="ReactIcons" />
                {data.current.wind_deg}&#176;
              </h1>
            </div>
          </div>
          <div className="w-full font-mono text-sm lg:font-lg lg:w-full h-full grid grid-cols text-center align-middle">
            <h1 className="text-lg lg:text-4xl">Weekly Weather Forecast</h1>
            {/* Day 1 */}
            <div className="flex flex-col lg:flex lg:flex-row lg:justify-between">
            <div className="mb-4 lg:mb-0 grid grid-rows-3 grid-cols-3 border-2 w-full h-fit lg:gap-x-10 lg:gap-y-6 py-2 px-6 lg:mx-2">
                <div className="row-span-3 flex flex-col justify-center items-center">
                  <h1 className="text-sm lg:text-lg">Today</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <LiaTemperatureHighSolid className="ReactIconsSmall" />
                    low:{data.daily[0].temp.min.toFixed(0)}&#176;C
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <LiaTemperatureHighSolid className="ReactIconsSmall" />
                    high:{data.daily[0].temp.max.toFixed(0)}&#176;C
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <WiHumidity className="ReactIconsSmall" />
                    {data.daily[0].humidity}%
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <WiBarometer className="ReactIconsSmall" />
                    {data.daily[0].pressure}mbar
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <FaCloud className="ReactIconsSmall" />
                    {data.daily[0].clouds}%
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <FiWind className="ReactIconsSmall" />
                    {data.daily[0].wind_speed.toFixed(0)}m/s
                  </h1>
                </div>
              </div>
              {/* Day 2 */}
              <div className="grid grid-rows-3 grid-cols-3 border-2 w-full h-fit lg:gap-x-10 lg:gap-y-6 py-2 px-6 lg:mx-2">
                <div className="row-span-3 flex flex-col justify-center items-center text-sm lg:text-lg">
                  {forecast2}
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <LiaTemperatureHighSolid className="ReactIconsSmall" />
                    low:{data.daily[1].temp.min.toFixed(0)}&#176;C
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <LiaTemperatureHighSolid className="ReactIconsSmall" />
                    high:{data.daily[1].temp.max.toFixed(0)}&#176;C
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <WiHumidity className="ReactIconsSmall" />
                    {data.daily[1].humidity}%
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <WiBarometer className="ReactIconsSmall" />
                    {data.daily[1].pressure}mbar
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <FaCloud className="ReactIconsSmall" />
                    {data.daily[1].clouds}%
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <FiWind className="ReactIconsSmall" />
                    {data.daily[1].wind_speed.toFixed(0)}m/s
                  </h1>
                </div>
              </div>
            </div>
            {/* Day 3 */}
            <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="mb-4 lg:mb-0 grid grid-rows-3 grid-cols-3 border-2 w-full h-fit lg:gap-x-10 lg:gap-y-6 py-2 px-6 lg:mx-2">
                <div className="row-span-3 flex flex-col justify-center items-center text-sm lg:text-lg">
                  {forecast3}
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <LiaTemperatureHighSolid className="ReactIconsSmall" />
                    low:{data.daily[2].temp.min.toFixed(0)}&#176;C
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <LiaTemperatureHighSolid className="ReactIconsSmall" />
                    high:{data.daily[2].temp.max.toFixed(0)}&#176;C
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <WiHumidity className="ReactIconsSmall" />
                    {data.daily[2].humidity}%
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <WiBarometer className="ReactIconsSmall" />
                    {data.daily[2].pressure}mbar
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <FaCloud className="ReactIconsSmall" />
                    {data.daily[2].clouds}%
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <FiWind className="ReactIconsSmall" />
                    {data.daily[2].wind_speed.toFixed(0)}m/s
                  </h1>
                </div>
              </div>
              {/* Day 4 */}
              <div className="grid grid-rows-3 grid-cols-3 border-2 w-full h-fit lg:gap-x-10 lg:gap-y-6 py-2 px-6 lg:mx-2">
                <div className="row-span-3 flex flex-col justify-center items-center text-sm lg:text-lg">
                  {forecast4}
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <LiaTemperatureHighSolid className="ReactIconsSmall" />
                    low:{data.daily[3].temp.min.toFixed(0)}&#176;C
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <LiaTemperatureHighSolid className="ReactIconsSmall" />
                    high:{data.daily[3].temp.max.toFixed(0)}&#176;C
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <WiHumidity className="ReactIconsSmall" />
                    {data.daily[3].humidity}%
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <WiBarometer className="ReactIconsSmall" />
                    {data.daily[3].pressure}mbar
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <FaCloud className="ReactIconsSmall" />
                    {data.daily[3].clouds}%
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <FiWind className="ReactIconsSmall" />
                    {data.daily[3].wind_speed.toFixed(0)}m/s
                  </h1>
                </div>
              </div>
            </div>
            {/* Day 5 */}
            <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="mb-4 lg:mb-0 grid grid-rows-3 grid-cols-3 border-2 w-full h-fit lg:gap-x-10 lg:gap-y-6 py-2 px-6 lg:mx-2">
                <div className="row-span-3 flex flex-col justify-center items-center text-sm lg:text-lg align-middle text-center">
                  {forecast5}
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <LiaTemperatureHighSolid className="ReactIconsSmall" />
                    low:{data.daily[4].temp.min.toFixed(0)}&#176;C
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <LiaTemperatureHighSolid className="ReactIconsSmall" />
                    high:{data.daily[4].temp.max.toFixed(0)}&#176;C
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <WiHumidity className="ReactIconsSmall" />
                    {data.daily[4].humidity}%
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <WiBarometer className="ReactIconsSmall" />
                    {data.daily[4].pressure}mbar
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <FaCloud className="ReactIconsSmall" />
                    {data.daily[4].clouds}%
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <FiWind className="ReactIconsSmall" />
                    {data.daily[4].wind_speed.toFixed(0)}m/s
                  </h1>
                </div>
              </div>
              {/* Day 6 */}
              <div className="grid grid-rows-3 grid-cols-3 border-2 w-full h-fit lg:gap-x-10 lg:gap-y-6 py-2 px-6 lg:mx-2">
                <div className="row-span-3 flex flex-col justify-center items-center text-sm lg:text-lg">
                  {forecast6}
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <LiaTemperatureHighSolid className="ReactIconsSmall" />
                    low:{data.daily[5].temp.min.toFixed(0)}&#176;C
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <LiaTemperatureHighSolid className="ReactIconsSmall" />
                    high:{data.daily[5].temp.max.toFixed(0)}&#176;C
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <WiHumidity className="ReactIconsSmall" />
                    {data.daily[5].humidity}%
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <WiBarometer className="ReactIconsSmall" />
                    {data.daily[5].pressure}mbar
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <FaCloud className="ReactIconsSmall" />
                    {data.daily[5].clouds}%
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <FiWind className="ReactIconsSmall" />
                    {data.daily[5].wind_speed.toFixed(0)}m/s
                  </h1>
                </div>
              </div>
            </div>
            {/* Day 7 */}
            <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="mb-4 lg:mb-0 grid grid-rows-3 grid-cols-3 border-2 w-full h-fit lg:gap-x-10 lg:gap-y-6 py-2 px-6 lg:mx-2">
                <div className="row-span-3 flex flex-col justify-center items-center text-sm lg:text-lg">
                  {forecast7}
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <LiaTemperatureHighSolid className="ReactIconsSmall" />
                    low:{data.daily[6].temp.min.toFixed(0)}&#176;C
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <LiaTemperatureHighSolid className="ReactIconsSmall" />
                    high:{data.daily[6].temp.max.toFixed(0)}&#176;C
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <WiHumidity className="ReactIconsSmall" />
                    {data.daily[6].humidity}%
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <WiBarometer className="ReactIconsSmall" />
                    {data.daily[6].pressure}mbar
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <FaCloud className="ReactIconsSmall" />
                    {data.daily[6].clouds}%
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <FiWind className="ReactIconsSmall" />
                    {data.daily[6].wind_speed.toFixed(0)}m/s
                  </h1>
                </div>
              </div>
              {/* Day 8 */}
              <div className="grid grid-rows-3 grid-cols-3 border-2 w-full h-fit lg:gap-x-10 lg:gap-y-6 py-2 px-6 lg:mx-2">
                <div className="row-span-3 flex flex-col justify-center items-center text-sm lg:text-lg">
                  {forecast8}
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <LiaTemperatureHighSolid className="ReactIconsSmall" />
                    low:{data.daily[7].temp.min.toFixed(0)}&#176;C
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <LiaTemperatureHighSolid className="ReactIconsSmall" />
                    high:{data.daily[7].temp.max.toFixed(0)}&#176;C
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <WiHumidity className="ReactIconsSmall" />
                    {data.daily[7].humidity}%
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <WiBarometer className="ReactIconsSmall" />
                    {data.daily[7].pressure}mbar
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <FaCloud className="ReactIconsSmall" />
                    {data.daily[7].clouds}%
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="flex flex-col justify-center items-center">
                    <FiWind className="ReactIconsSmall" />
                    {data.daily[7].wind_speed.toFixed(0)}m/s
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Datapage;
