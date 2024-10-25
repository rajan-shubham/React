import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

    // let btnName = "LogIn"; (it is normal JS variable, it is updatable but it can't change React/Html Document)
    
    const [btnName, setBtnName] = useState("Log In");
    // console.log("Header Reandered");
    
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnName === "Log In" ? setBtnName("Log Out") : setBtnName("Log In");
                     }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;