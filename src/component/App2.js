import React, { Fragment } from "react";
import "./App2.css";
import Cards from "./Cards";

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

  return (
    <Fragment>
      <div className="maincontainer">
        <Cards ArrData={DataUsers} />
      </div>
    </Fragment>
  );
};

export default App2;
