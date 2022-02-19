import React, { Fragment } from "react";
import Cards from "../Cards/Cards";
import "./App2.css";

const App2 = () => {
  const Boys = [
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
      name: "hany",
      age: 55,
      address: "eygpt",
      phone: "01242155"
    }
  ];

  // use new data in new arr (reuseable for componnenr)

  const Girls = [
    {
      name: "hoda",
      age: 12,
      address: "cairo",
      phone: "021222111222"
    },
    {
      name: "asma",
      age: 10,
      address: "france",
      phone: "65665523"
    },
    {
      name: "dlal",
      age: 55,
      address: "eygpt",
      phone: "888888888888"
    }
  ];
  // Each child in a list shoud have a unique "key" prop
  // نحتاجه في الدوم الوهمي لتتبع الدفات والعاناصر

  return (
    <Fragment>
      <div className="maincontainer">
        <h1> Boyes Data ... </h1>
        <Cards ArrData={Boys} />

        <h1> Girls Data ... </h1>
        <Cards ArrData={Girls} />
      </div>
    </Fragment>
  );
};

export default App2;
