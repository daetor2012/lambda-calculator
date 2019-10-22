import React, { useState } from "react";
import { specials } from "../../../data.js"
import SpecialButton from "./SpecialButton.js";
//import any components needed

//Import your array data to from the provided data file

const Specials = props => {
  // STEP 2 - add the imported data to state
  const [specialValue, setspecialValue] = useState(specials);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specials.map((special) => (
        <SpecialButton value={special} set={props.setDisplay}>
        </SpecialButton>  
       ))};
    </div>
  );
};
export default Specials;
