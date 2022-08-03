import React from "react";
import "./Services.scss";

import Brands from "./Brands";

import apple from "../components/imgs/logo_apple.png";

function BrandList() {
  const brands = [
    { image: apple, name: "Apple" },
    { image: apple, name: "Samsung" },
    { image: apple, name: "LG" },
    { image: apple, name: "Asus" },
    { image: apple, name: "LOG" },
    { image: apple, name: "Acer" },
    { image: apple, name: "Predator" },
    { image: apple, name: "Nitro" },
    { image: apple, name: "Lenovo" },
    { image: apple, name: "HP" },
  ];
  const item = brands.map((item) => {
    return (
      <div>
        <Brands image={item.image} name={item.name} />
      </div>
    );
  });
  return <div className="BL">{item}</div>;
}

export default BrandList;
