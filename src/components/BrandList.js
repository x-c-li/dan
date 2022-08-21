import React from "react";
import "./Services.scss";

import Brands from "./Brands";

import appleLogo from "../components/imgs/logo-apple.png";
import acerLogo from "../components/imgs/logo-acer.png";
import asusLogo from "../components/imgs/logo-asus.png";
import hpLogo from "../components/imgs/logo-hp.png";
import lenovoLogo from "../components/imgs/logo-lenovo.png";
import lgLogo from "../components/imgs/logo-lg.png";
import predatorLogo from "../components/imgs/logo-predator.png";
import rogLogo from "../components/imgs/logo-rog.png";
import samsungLogo from "../components/imgs/logo-samsung.png";

function BrandList() {
  const brands = [
    { image: appleLogo, name: "Apple" },
    { image: samsungLogo, name: "Samsung" },
    { image: lgLogo, name: "LG" },
    { image: asusLogo, name: "Asus" },
    { image: rogLogo, name: "ROG" },
    { image: acerLogo, name: "Acer" },
    { image: predatorLogo, name: "Predator" },
    { image: "no-logo", name: "Nitro" },
    { image: lenovoLogo, name: "Lenovo" },
    { image: hpLogo, name: "HP" },
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
