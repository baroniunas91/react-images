import React, { Component } from "react";

class Message extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p>No results found. Please try another search</p>
        <img src="no_image_found.png" alt="no_image"></img>
      </React.Fragment>
    );
  }
}

export default Message;
