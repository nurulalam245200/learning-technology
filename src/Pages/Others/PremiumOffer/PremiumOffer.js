import React from "react";
import { useLoaderData } from "react-router-dom";
import logo from "../../../images/welcome.gif";
const PremiumOffer = () => {
  const data = useLoaderData();
  console.log(data);
  const { name } = data;
  return (
    <div>
      <div className="mt-5">
        <h4 className="text-center">You Favorite is: {name}</h4>
        <img className="mx-auto" style={{ width: "100%" }} src={logo} alt="" />
      </div>
    </div>
  );
};

export default PremiumOffer;
