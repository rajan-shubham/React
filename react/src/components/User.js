import { useEffect, useState } from "react";

const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(1);

    useEffect(() => {
        // API CALLS DONE HERE
    }, []);

    return (
        <div className="user-card">
            <h1>count : {count} </h1>
            <h1>count2 : {count2} </h1>
            <h2>Name : {props.name} </h2>
            <h3>Location : Dehradun</h3>
            <h4>Contact : @akshaymarch7</h4>
        </div>
    );
};

export default User;

/* body {
    background-color: black;
    color: aliceblue;
} */

    // .header{
    //     display: flex;
    //     justify-content: space-between;
    //     border: 1px solid black;
    // }
    
    // .logo{
    //     padding: 5px 5px;
    //     width: 100px;
    //     height: auto;
    // }
    
    // .nav-items {
    //     font-size: 24px;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
        
    // }
    
    // .buttons {
    //     padding: 10px 20px;
    //     margin: 10px;
    //     cursor: pointer;
    // }
    
    // .res-container {
    //     display: flex;
    //     flex-wrap: wrap;
    // }
    
    // .res-card {
    //     margin: 10px;
    //     padding: 5px;
    //     width: 250px;
    //     /* height: 400px; */
    // }
    
    // .res-card:hover {
    //     cursor: pointer;
    //     border: 1px solid black;
    // }
    
    // .search {
    //     padding: 10px;
    // }
    // .res-logo {
    //     width: 100%;
    //     height: 45%;
    // }
    
    // /* search/filter button */
    // .filter-btn {
    //     margin: 10px;
    //     cursor: pointer;
    // }
    
    // /* Footer */
    // .footer {
    //     margin: 10px;
    //     width: auto;
    //     text-align: center;
    //     background-color: rgb(255, 255, 29);
    //     padding: 20px 10px 20px;
    //     border-radius: 5px;
    //     box-shadow: -1px 4px 20px 14px rgba(0, 0, 0, 0.2);
    //   }
      
    //   .footer > i {
    //     padding: 0 5px 0;
    //     font-size: smaller;
    //   }
      
    //   .fa-heart {
    //     color: darkred;
    //   }
      
    //   .footer > strong {
    //     padding-left: 5px;
    //   }
      
    //   .footer > strong > span {
    //     color: rgb(203, 54, 0);
    //   }
    
    // /* SHIMMER CARDS */
    // .shimmer-container {
    //     display: flex;
    //     flex-wrap: wrap;
    // }
    
    // .shimmer-card {
    //     margin: 10px;
    //     padding: 5px;
    //     width: 250px;
    //     height: 400px;
    //     background-color: #f0f0f0;
    // }
    
    // /* Log In Button */
    // /* .login {
    //     margin-right: 10px;
    //     padding: 0 20px;
    //     cursor: pointer;
    // } */
    
    // /* Search/filter Area */
    // .filter {
    //     display: flex;
    // }
    
    // /* /about/user */
    // .user-card {
    //     padding: 20px;
    //     border: 1px solid black;
    // }