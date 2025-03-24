import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Default",
        location: "default",
        login: ".com",
        avatar_url:
          "https://www.vhv.rs/dpng/d/15-155087_dummy-image-of-user-hd-png-download.png",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/yasirkhan21");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }
  render() {
    const { name, location, avatar_url, login } = this.state.userInfo;
    return (
      <div className="m-4 p-4 w-auto rounded-lg bg-gray-100 hover:bg-gray-200 shadow-lg">
        <img className="rounded-lg" src={avatar_url}  />
        <h2 className="font-bold text-lg">Name: {name}</h2>
        <h2 className="font-bold text-lg">Location: {location}</h2>
        <h3 className="font-bold text-lg">Contact: {login}</h3>
      </div>
    );
  }
}
export default UserClass;
