import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    // let btnName = "LogIn"; (it is normal JS variable, it is updatable but it can't change React/Html Document)
    
    const [btnName, setBtnName] = useState("Log In");

    const onlineStatus = useOnlineStatus();
    
    return (
        <header className="sticky top-0 bg-gray-100 text-black z-50">
        <div className="flex mx-auto justify-between py-1 px-36 header">
            <div className="w-20 p-2 logo-container">
                <img className="rounded-lg logo" src= {LOGO_URL} />
            </div>
            <nav className="flex space-x-6 nav-items">
                <button className="hover:text-orange-500 py-2 px-2 buttons">Online Status: {onlineStatus ? "✅" : "🔴"} </button>
                    <button className="hover:text-orange-500 py-2 px-2 buttons"><Link to="/">Home</Link></button>
                    <button className="hover:text-orange-500 py-2 px-2 buttons"><Link to="/about">About Us</Link></button>
                    <button className="hover:text-orange-500 py-2 px-2 buttons"><Link to="/contact">Contact Us</Link></button>
                    <button className="hover:text-orange-500 py-2 px-2 buttons"><Link to="/cart">Cart</Link></button>
                    <button className="hover:text-orange-500 py-2 px-2 buttons login" onClick={() => { btnName === "Log In" ? setBtnName("Log Out") : setBtnName("Log In"); }}> {btnName} </button>
            </nav>
            </div>
            </header>
    )
};

export default Header;