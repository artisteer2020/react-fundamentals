import React, { Fragment } from "react";

const App = () => {
  const styleP1 = { color: "green", marginTop: "150px" };
  const styleP2 = { color: "red", marginTop: "150px" };

  const myNmae = "ali";
  const names = ["adem" , "mona" ,"ali"];
  return (
    <Fragment>
      {myNmae === "ali"     
        ? (   <h1 style={styleP1}>    
              {myNmae}
              </h1>
          ):
      (<h1> </h1>)

      };
 

  
    </Fragment>
  );
};

export default App;
