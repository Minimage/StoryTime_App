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
    }, 2000);
  }, []);

  const loading = (
    <h1>
      <ReactLoading
        type={"bars"}
        color={"green"}
        height={"100vh"}
        width={375}
      />
    </h1>
  );

  const content = <h1>Welcome, this is the content</h1>;

  return <>{!done ? loading : content}</>;
};
