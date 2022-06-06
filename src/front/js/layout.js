import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { userContext } from "./pages/global_context";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { User } from "./pages/user";
import { Learning } from "./pages/learning";
import { Secret } from "./pages/secret";
import { Login } from "./pages/login";
import { NotFound } from "./pages/notfound";
import { Signup } from "./pages/signup";
import { Test } from "./pages/test";

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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/user/:id" element={<User />} />
              <Route path="/learning" element={<Learning />} />
              <Route path="/secret" element={<Secret />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/test" element={<Test />} />

              {/* <Route element={<h1>Not found!</h1>}></Route> */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </userContext.Provider>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
