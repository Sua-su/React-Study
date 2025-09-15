import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
//import ConfirmDialog from "./Ch04/ConfirmDialog";
//import { Welcome } from "./CH05/Welcome";
import { App } from "./CH05/App";

/* 
import Hello from "./Ch03/Hello";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Hello TW="a" />
    <Hello TW="b" />
  </React.StrictMode>
);

root.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>
);
*/

/* 
function formatName(user) {
  return user.firstname + " " + user.lastname;
}

const user = {
  firstname: "Seong",
  lastname: "Su",
};

const element = <h1>Hello, {formatName(user)}</h1>;
*/

/* 
const name = "su";

const element = <h1>Hello, {name}</h1>;
*/

/* 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
*/
/* 
// Fixed: Use ReactDOM.createRoot and correct 'document' casing
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ConfirmDialog />);
 */

// FIX: Only create the root once, outside the tick function
/* 
function tick() {
  
  const element = (
    <div>
      <h1>Hello react</h1>
      <h2>time: {new Date().toLocaleTimeString()}</h2>
    </div>
  );
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
