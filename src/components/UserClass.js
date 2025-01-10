import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        Name: "Leo",
        Location: "Default",
      },
    };
    console.log(this.props.name + " " + "Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + " " + "Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/PradeepTeppala");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log(this.props.name + " " + "Child Did Update");
  }

  componentWillUnmount() {
    console.log(this.props.name + " " + "Child Will Unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log(this.props.name + " " + "Child Render");
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name:{name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact:@Pradeep_Teppala </h3>
      </div>
    );
  }
}

export default UserClass;
