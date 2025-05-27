import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

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
                    <button className="buttons"><Link to="/">Home</Link></button>
                    <button className="buttons"><Link to="/about">About Us</Link></button>
                    <button className="buttons"><Link to="/contact">Contact Us</Link></button>
                    <button className="buttons"><Link to="/cart">Cart</Link></button>
                    <button className="buttons login" onClick={() => { btnName === "Log In" ? setBtnName("Log Out") : setBtnName("Log In"); }}> {btnName} </button>
            </div>
        </div>
    )
};

export default Header;