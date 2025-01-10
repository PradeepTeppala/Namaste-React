import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor")
  }
  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render")
    return (
      <div>
        <h1 className="text-center p-4 m-4 font-bold text-3xl">About</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass
          name={"Pradeep"}
          Location={"Hyderabad"}
          Contact={"@Pradeep_Teppala"}
        />
      </div>
    );
  }
}

export default About;
