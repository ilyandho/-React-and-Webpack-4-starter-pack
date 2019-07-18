import React from "react";

import Form from "./Form/Form";
import List from "./List/List";

import "./Main.scss";

const Main = () => {
  //static contextType = StateContext
  return (
    <div class="container">
      <Form />
      <List />
    </div>
  );
};

export default Main;
