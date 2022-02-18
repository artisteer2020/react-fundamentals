import React, { Fragment } from "react";

const App = () => {
  const styleP1 = { color: "green", marginTop: "150px" };
  const styleP2 = { color: "red", marginTop: "150px" };

  const myNames = "dodo";
  const names = ["adem", "mona", "ali"];
  return (
    //  log out data from var  line 17
    // can replace fragment with <> </>
    <Fragment>
      {/*  log out data from var  line  */}
      <p>
        {" "}
        the var data is :{" "}
        {myNames === "hoda" ? (
          // use ternamry Operator
          // use in line style
          <p style={styleP1}> yes the name of var is {myNames} </p>
        ) : (
          <p style={styleP2}> yes the name of var is {myNames} </p>
        )}{" "}
      </p>
      <div>
        {/* use map not use foreach to display data from arr */}
        The Names Of Arr Are :{" "}
        {names.map((el) => (
          <p> {el} </p>
        ))}
      </div>
    </Fragment>
  );
};

export default App;
