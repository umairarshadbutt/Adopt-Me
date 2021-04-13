import React from "react";
import {render} from "react-dom";
import Pet from "./Pet";
let startAt = performance.now();



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