import React from "react";
import "./Services.scss";

function Brands(props) {
  return (
    <div className="brandNames">
      <div className="brandIndivid">
        <div className="image-box">
          <div>{props.name}</div>
          <img src={props.image} />
        </div>
      </div>
    </div>
  );
}

export default Brands;
