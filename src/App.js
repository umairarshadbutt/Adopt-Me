import React from "react";
import {render} from "react-dom";

let startAt = performance.now();

const Pet = ({name,animal,bread}) => {
    return React.createElement("div",{},[
        React.createElement("h1",{},name),
        React.createElement("h2",{},animal),
        React.createElement("h2",{},bread)
    ]);
};

const App = () => {
    return React.createElement(
      "div",
      {},
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
          name:"Luna", 
          animal:"Dod", 
          bread:"Russian"
        }),
      React.createElement(Pet, {
          name:"Luna", 
          animal:"Dod", 
          bread:"Russian"
        }),
      React.createElement(Pet, {
          name:"Luna", 
          animal:"Dod", 
          bread:"Russian"
        })
    );
};

render(React.createElement(App), document.getElementById("root"));

let endAt = performance.now();
console.log(endAt - startAt)