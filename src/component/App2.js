import React, { Fragment } from "react";
import "./App2.css";

const App2 = () => {
  const DataUsers = [
    {
      name: "mohamed",
      age: 30,
      address: "minia",
      phone: "0110212250"
    },
    {
      name: "ali",
      age: 33,
      address: "giza",
      phone: "65665523"
    },
    {
      name: "yara",
      age: 55,
      address: "eygpt",
      phone: "01242155"
    }
  ];
  // Each child in a list shoud have a unique "key" prop
  // نحتاجه في الدوم الوهمي لتتبع الدفات والعاناصر
  const recoveryData = DataUsers.map(({ name, age, address, phone }, idx) => (
    <div className="container" key={idx}>
      <div>
        <span> Nmae </span> : {name}{" "}
      </div>
      <div>
        <span> age </span> : {age}{" "}
      </div>
      <div>
        <span> address </span> : {address}{" "}
      </div>
      <div>
        <span> salary </span> : {phone}{" "}
      </div>
    </div>
  ));

  return (
    <Fragment>
      <div className="maincontainer">{recoveryData}</div>
    </Fragment>
  );
};

export default App2;
