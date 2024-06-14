// imported react and reactdom from nodemodule folder
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// Header.js or simply Header in import section React will treate as a JS file default.
// Never keep your Hardcoded data in component folder.

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< AppLayout />);