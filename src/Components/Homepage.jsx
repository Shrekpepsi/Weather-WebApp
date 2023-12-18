import { React, useRef, useState } from "react";
import PageHeader from "./PageHeader";
import SearchBar from "./SearchBar";
import FetchData from "../Operations/FetchData";
import FetchCity from "../Operations/FetchCity";
import PageFooter from "./PageFooter";
import NoDataPage from "./NoDataPage";
import Datapage from "./Datapage";

const Homepage = () => {
  const [dumbRender, setDumbRender] = useState(false);
  const [dataRender, setDataRender] = useState(false);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [apiData, setApiData] = useState("");

  const city = useRef("");

  const handleUserCity = (userCity) => {
    city.current = userCity;
    setDumbRender(!dumbRender);
    /*     console.log(userCity, city);
     */
  };

  const handleLatLon = (lat, lon) => {
    setLat(lat);
    setLon(lon);
  };

  const handleAPIData = (data) => {
    setApiData(data);
    console.log("Data is ", apiData)
    setDataRender(true)
  };

  console.log("user selected city is: ", city.current);
  console.log("Latitude of user selected city is: ", lat);
  console.log("Longitude of user selected city is: ", lon);


  let display;

  if (dataRender) {
    display = <Datapage data={apiData} />;
  } else {
    display = <NoDataPage />;
  }

  return (
    <div className="text-white font-serif text-xs md:text-lg bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 max-w-full flex flex-col h-screen overflow-auto">
      <div className="h-screen w-screen lg:w-screen text-lg md:text-xl px-6 mx-2 md:px-10 flex flex-col">
        <PageHeader />
        <div className="">
          <SearchBar child2parent={handleUserCity} />
          <FetchCity city={city.current} child2parent={handleLatLon} />
          <FetchData lat={lat} lon={lon} child2parent={handleAPIData} />
          {display}
          <PageFooter />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
