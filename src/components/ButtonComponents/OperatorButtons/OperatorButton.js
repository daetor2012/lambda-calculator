import React from "react";
import "../NumberButtons/buttons.css"
const OperatorButton = props => {
  console.log(props);
  return (
    <button className="buttons">
      {props.char}
    </button>
    //Display a button element rendering the data being passed down from the parent container on props
  );
};
export default OperatorButton;