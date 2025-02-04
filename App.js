import React from "react";
import ReactDOM from "react-dom/client";

const JsxHeading = <h1>Hello world from JSX!🚀</h1>;

const title = (
    <h1>Title </h1>
);

const TitleComponent =()=>
    (
      <h1>Title component🚀</h1>
    );
const Heading = function (){
    return(
  <h1 className="head" tabIndex="5">
    Hello from component🚀
  </h1>
)};

const HeadComponent = () => (  
  <div className="container">
    {title}
    {TitleComponent()}
    <Heading />
    <h1>HeadComponent🚀</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadComponent />);
