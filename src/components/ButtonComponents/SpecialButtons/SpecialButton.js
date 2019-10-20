import React from "react";
import "../NumberButtons/buttons.css"
const SpecialButton = props => {
  return (
    <button className="buttons">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.value}
    </button>
  );
};
export default SpecialButton;