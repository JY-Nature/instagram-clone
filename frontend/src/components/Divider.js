import { React, Component } from 'react';

class Divider extends Component {
  render() {
    const dividerStyle = {
      margin: "0",
      border: "0",
      width: "100%",
      height: "1px",
      backgroundColor: "#dbdbdb",
    };

    return (
      <div style={dividerStyle}></div>
    );
  }
}

export default Divider;
