import React from 'react';
import ReactDOM from 'react-dom/client';
const heading = React.createElement("div",
    { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "This is React 🚀"),
        React.createElement("h2", {}, "H2 tag")
    ]),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "H1 tag"),
        React.createElement("h2", {}, "H2 tag")
    ])]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);