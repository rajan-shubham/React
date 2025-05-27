import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
    }

    render () {
        return (
            <div className="min-h-screen">
                <h1>About Class Component</h1>
                <h2>This is React About Page</h2>
                <UserClass name={"First (Classes) "} location={"Dehradun (classes)"} />
            </div>
        );  
    }
}

export default About;