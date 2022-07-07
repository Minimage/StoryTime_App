import React, { useState, useEffect, useContext } from "react";
import { userContext } from "../pages/global_context";
import ReactLoading from "react-loading";

export const Preloader1 = () => {
  const [done, setDone] = useState(undefined);
  const { hidden, isHidden } = useContext(userContext);

  useEffect(() => {
    isHidden(true);
    setTimeout(() => {
      setDone(true);
      isHidden(false);
    }, 2500);
  }, []);

  
  const loading = (
    <div className="container">
     
      
      <ReactLoading
     className="m-auto mt-5"
     type={"spinningBubbles"}
     color={"blue"}
     height={"100vh"}
     width={375}
      />
    </div>
  );

    return <>{!done ? loading : ""}</>;
};
