import React, { Fragment } from "react";

const App = () => {
  const styleP1 = { color: "green", marginTop: "150px" };
  const styleP2 = { color: "red", marginTop: "150px" };

  const myNmae = "hoda";
  const names = ["adem", "mona", "ali"];
  return (
    <Fragment>
      {myNmae === "ali" ? (
        <h1 style={styleP1}>{myNmae}</h1>
      ) : (
        <h1 style={styleP2}>{myNmae}</h1>
      )}
      ; names:
      <div>
        {names.map((el) => (
          <p> {el} </p>
        ))}
      </div>
    </Fragment>
  );
};

export default App;
