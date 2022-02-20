import React, { Fragment, useState } from "react";
import Cards from "../Cards/Cards";
import "./App2.css";

const App2 = () => {
  // use state need
  // 1- holding data by  => state
  // 2- control Data  => set State
  const [state, setState] = useState([
    {
      name: "mohamed",
      age: 30,
      address: "minia",
      phone: "015452250"
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
  ]);

  const [state1, setState1] = useState([
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
  ]);
  // const Boys = [
  //   {
  //     name: "mohamed",
  //     age: 30,
  //     address: "minia",
  //     phone: "0110212250"
  //   },
  //   {
  //     name: "ali",
  //     age: 33,
  //     address: "giza",
  //     phone: "65665523"
  //   },
  //   {
  //     name: "hany",
  //     age: 55,
  //     address: "eygpt",
  //     phone: "01242155"
  //   }
  // ];

  // use new data in new arr (reuseable for componnenr)

  // const Girls = [
  //   {
  //     name: "hoda",
  //     age: 12,
  //     address: "cairo",
  //     phone: "021222111222"
  //   },
  //   {
  //     name: "asma",
  //     age: 10,
  //     address: "france",
  //     phone: "65665523"
  //   },
  //   {
  //     name: "dlal",
  //     age: 55,
  //     address: "eygpt",
  //     phone: "888888888888"
  //   }
  // ];
  // Each child in a list shoud have a unique "key" prop
  // نحتاجه في الدوم الوهمي لتتبع الدفات والعاناصر
  const DeletItem = (event, itemIndex) => {
    //  const RemainingElements = state.filter((el ,idx ) => idx !== itemIndex);
    //  setState(RemainingElements);

    //  Use Setstate as afunction
    // privestate like => state => Arr
    // according privestate as a Arr
    // I can make it fillter and out put Data
    setState((prevState) => {
      return prevState.filter((el, idx) => idx !== itemIndex);
    });
    //  setState((x) => {
    //     return x.filter((el ,idx) => idx !== itemIndex)
    //  });
  };

  return (
    <Fragment>
      <div className="maincontainer">
        <h1> Boyes Data ... </h1>
        <Cards ArrData={state} type="boys" deletFun={DeletItem} />

        {/* // use arr Girls that holding Data */}
        {/* <h1> Girls Data ... </h1>
        <Cards ArrData={state1} type="girls" deletFun = {DeletItem}  /> */}
        {/* 
        // use arr Boys Arr that holding Data
         <h1> Boyes Data ... </h1>
        <Cards ArrData={Boys} type="boys" />
        // use arr Girls Arr that holding Data
        <h1> Girls Data ... </h1>
        <Cards ArrData={Girls} type="girls" /> */}
      </div>
    </Fragment>
  );
};

export default App2;
