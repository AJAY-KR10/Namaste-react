import React from "react";
import ReactDOM from "react-dom/client";

    const heading = React.createElement(
        "div",{ 
               id: "parent"
        }, [React.createElement(
        "div",{ 
               id: "child1"
        }, "child1"
    ),React.createElement(
        "div",{ 
               id: "child2"
        }, "child2"
    )]
    )
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(heading);

    ////// for test