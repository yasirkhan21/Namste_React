import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("Parent component did mount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        {/* <User name={"Yasir Khan"}location={"Indore"}/> */}
        <UserClass name={"Yasir Khan"} location={"Indore"} />
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       {/* <User name={"Yasir Khan"}location={"Indore"}/> */}
//       <UserClass name={"Yasir Khan"} location={"Indore"} />
//     </div>
//   );
// };
export default About;
