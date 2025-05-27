import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
            },
        };

    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/rajan-shubham");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
    }

    render () {
        const { avatar_url, location, name, twitter_username } = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : @{twitter_username} </h4>
            </div>
        );
    }
}

export default UserClass;