import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { userContext } from "./pages/global_context";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { User } from "./pages/user";
import { Learning } from "./pages/learning";
import { Login } from "./pages/login";

const Layout = () => {
  //  This useState hook will be a global hook  that wont allow a user
  //  to bypass login in and just going straigt to the userpage
  const [auth, setAuth] = useState(false);

  const [isTeacher, setIsTeacher] = useState(true);

  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <userContext.Provider value={{ auth, setAuth }}>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/user/:id" component={User} />
              <Route exact path="/learning" component={Learning} />

              <Route>
                <h1>Not found!</h1>
              </Route>
            </Switch>
          </userContext.Provider>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
