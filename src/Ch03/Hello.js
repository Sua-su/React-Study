import React from "react";
/* 
class Hello extends React.Componet {
  render() {
    return <div>Hello, {this.props.TW}! </div>; // JSX 
  }
}
 */
function Hello(props) {
  return <div>Hello, {props.TW}</div>;
}

export default Hello;
