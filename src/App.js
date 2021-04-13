import React from "react";
import {render} from "react-dom";
import Pet from "./Pet";
const App = () => {
    // return React.createElement(
    //   "div",
    //   {},
    //   React.createElement("h1", {}, "Adopt Me!"),
    //   React.createElement(Pet, {
    //       name:"Luna", 
    //       animal:"Dod", 
    //       bread:"Russian"
    //     }),
    //   React.createElement(Pet, {
    //       name:"Luna", 
    //       animal:"Dod", 
    //       bread:"Russian"
    //     }),
    //   React.createElement(Pet, {
    //       name:"Luna", 
    //       animal:"Dod", 
    //       bread:"Russian"
    //     })
    // );

    return (
      <div>
        <h1 id="something-important">
          Adopt Me!
        </h1>
        <Pet name="Lucky" animal="Dog" bread="Bull"/>
        <Pet name="Meni" animal="Cat" bread="Mixed"/>
      </div>
    );
};

render(React.createElement(App), document.getElementById("root"));
