import React from "react";
import "./Services.scss";

function Brands(props) {
  return (
    <div className="brandNames">
      <div className="brandIndivid">
        <div>{props.name}</div>
        <div className="image-box">
          <img src={props.image} />
        </div>
      </div>
    </div>
  );
}

export default Brands;
