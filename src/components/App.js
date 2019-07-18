import React, { Component } from "react";
import "./App.scss";
import "../styles/scss/main.scss";
//import myImg from "../assests/images/0e49670dd118ceb2ecd77f9e51634c699cc7d75e75b285d12bfb662a433dbba1.jpg";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
