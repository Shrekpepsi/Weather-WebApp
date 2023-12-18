import React, { useRef } from "react";

const SearchBar = ( {child2parent} ) => {
  const userInput = useRef("")

  const handleInputChanged = (event) => {
/*     console.log(event.target.value)
 */    userInput.current = event.target.value
/*     console.log(userInput.current)
 */  }

  const handleButtonClicked = () => {
/*     console.log(userInput.current)
 */    child2parent(userInput.current)
  }
  return (
    <div className="flex">
      <input
        className="text-black w-full px-2"
        type="text"
        onChange={handleInputChanged}
        placeholder="Enter a city name e.g. Offa"
      />
      <button className="text-center border-green-100 bg-green-700 px-6 py-3" onClick={handleButtonClicked}>Submit</button>
    </div>
  );
};

export default SearchBar;
