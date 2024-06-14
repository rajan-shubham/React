## Two types of import
1. Default Export/Import
  export default Component;
  import Component from "path";

2. Named Export/Import
  export const Component;
  import {Component} from "path";
  

## React Hooks
- (Normal JS Utility Functions)
1. useState() -> State Variable in react (keep the UI sink with the variable uptodated data (called as rendered))
   - whenever a state variable updates/changes, react rerenders the component
2. useEffect() 


## Reconciliation Algorithm {React Fiber} (after React 16)
- Whenever is a change in UI-> it find the difference b/w previous & updated in Vertual Dom(JS) -> then it change the actual DOM of HTML.
- DOM(res-container) --> 15 restraunt card --> now my UI changes to filtering to 7 cards from 15 cards then,
- React create virtual DOM of it(Virtual Dom is not an actual Dom)(Virtual DOM is a representation of Actual DOM)(Actual DOM is the tags like <div>, <img>, <section>)
- (virtual Dom is React Object (it's nothing but a JS Object)(object i.e. created by React like <Body />))

#### Diff. Algorithm
- Finds out the difference between Previous virtual DOM and Updated virtual DOM