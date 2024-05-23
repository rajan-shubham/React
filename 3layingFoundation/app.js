// ## Namaste React Course by Akshay Saini
// # Chapter 03 - Laying the Foundation

/*
 * This are the feature of Parcel
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */

// imported react and reactdom from nodemodule folder
// import {React, createElement as ce} from 'react';
import React from "react";
import ReactDOM from "react-dom/client";

// the element(object) created by ract is equivalent to the element(object) of HTML(React element is not a HTML Element)
// React.createElement ==> ReactElement(Object) -> JS Object ==> (after render this elem. onto DOM) ==> HTML Element
const reactheading = React.createElement("h1", { id: "heading" }, "namaste React :)");
console.log(reactheading);


// JSX -> it is a JS syntax which is easier to create react element (JSX & REACT Both are seprate thing) (JSX is not HTML inside JS) (JSX is HTML/XML Like Syntax)
// JSX Code transpiled before it reaches ths JS Engine (transpiled is done by Parcel(Babel))
// Babel converts jsx code to react(js) code
// JSX => React.createElement => ReactElement-JS Object => HTMLElement(rendered)
const heading = (<h1 className="head" tabIndex="1">Namaste R using JSX with shubham 🚀</h1>);
console.log(heading);
// if you have to give attributes to jsx you have to use camelCase (for multiline JSX USE () PARANTHESIS)

// React Component (everthing is component in react)
// 1> Classed Based Component (OLD)
// 2> Functional Component (NEW)
// 2> it is just a normal JS Function --> it return some pieces of JSX
/* some ways to write react functional components
const HeadingComponent = () => {
    return <h1 className="heading">Namaste React Functional Component</h1>;
}*/

//JS variable or React element
const elem = (<span>New Thing </span>);

// React functional component
const Title = () => (
    <h1 className="head">
        {elem}
        Namaste react using JSX
    </h1>
);

// Normal JS Variable
const number = 10000;
// const data = api.getData(); // malicious attack by bad api --> cross side scripting
// JSX takes care of these injection attack(JSX excape it or sanitize it's data)
// you can also use it like --> <Title /> or <Title></Title> ,also Title is JS function so we can also write it as {title()} --> here it require {expression}

// Component Composition
const HeadingComponent = () => (
    <div className="container">
        <Title />
        <h1 className="heading">Namaste React Functional Component</h1>
        {heading}
        <h2>{number + 69}</h2>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< HeadingComponent />);