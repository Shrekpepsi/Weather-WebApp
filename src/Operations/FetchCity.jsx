import { useEffect, React } from "react";

const cityAPI = "https://api.openweathermap.org/geo/1.0/direct?";
const weatherAPIKEY = "{insert Keys here}";
/* const input = "ilorin"; */
const limit = "1";

const FetchCity = ({ city, child2parent }) => {
  useEffect(() => {
    // declare the data fetching function
    const fetchCity = async () => {
      const API = cityAPI + `q=${city}&limit=` + limit + "&" + weatherAPIKEY;
/*       console.log(API); */
      const data = await fetch(API);
      const json = await data.json();
/*       console.log(json);
      console.log(json[0].name) */
      await child2parent(json[0].lat,json[0].lon)
    };
    // call the function
    fetchCity()
      // make sure to catch any error
      .catch(console.error);
  }, [city, child2parent]);
  return <div></div>;
};

export default FetchCity;
