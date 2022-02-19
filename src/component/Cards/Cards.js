import React from "react";
import "./Cards.css";
//  ArrData ==> refer to prop that come from App2 that array

const Cards = ({ ArrData, type }) => {
  console.log(ArrData);
  const recoveryData = ArrData.map(({ name, age, address, phone }, idx) => (
    <div
      className="container"
      key={idx}
      style={{ backgroundColor: type === "boys" ? "pink" : "gray" }}
    >
      <div>
        <span> Nmaee </span> : {name}{" "}
      </div>
      <div>
        <span> age</span> : {age}{" "}
      </div>
      <div>
        <span> address </span> : {address}{" "}
      </div>
      <div>
        <span> salary </span> : {phone}{" "}
      </div>
    </div>
  ));

  return <div> {recoveryData} </div>;
};

export default Cards;
