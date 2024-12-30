import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namste React Web Series</h2>
//             {/* < User name={"pradeep (Funcation)"} /> */}

//             < UserClass name={"pradeep (class)"} Location={"Hyderabad (class)"}/>
//         </div>
//     )
// };


class About extends React.Component {
    constructor(props){
        super(props)
        // console.log("Parent Constructor")
    };

    componentDidMount(){
        // console.log("Parent Component Did Mount");
    }

    render(){
        // console.log("Parent Render")
        return (
                <div>
                    <h1>About</h1>
                    <h2>This is Namste React Web Series</h2>
                        
                    < UserClass name={"Pradeep"} Location={"Hyderabad"} Contact= {"@Pradeep_Teppala"}/>
                </div>
                )
    };
};

export default About;