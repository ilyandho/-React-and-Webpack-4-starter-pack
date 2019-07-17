import React, { Component } from "react";
import "./App.css";
import "../styles/scss/main.scss";
import myImg from "../assests/images/0e49670dd118ceb2ecd77f9e51634c699cc7d75e75b285d12bfb662a433dbba1.jpg";
class App extends Component {
  render() {
    return (
      <div>
        <h1>My React App!</h1> <p>Welcome</p>
        <img src={myImg} />
        <p>I'm Here</p>
      </div>
    );
  }
}

export default App;
