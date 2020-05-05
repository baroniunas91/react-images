import React, { Component } from "react";

class Titlebar extends Component {
  state = {};
  render() {
    return (
      <div className="title">
        <img className="titleImage" src="logo_unsplash.png" alt="logo"></img>
        <h1>Unsplash images search</h1>
      </div>
    );
  }
}

export default Titlebar;
