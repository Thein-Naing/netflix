import { createContext, useContext, useReducer } from "react";

// prepare the dataLayer
export const StateContext = createContext();

// wrap our app and provide that Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>

    {children}
  </StateContext.Provider>
);

// pull information from data layer
export const useStateValue = () => useContext(StateContext)

// data layer is same as database to show added items in your basket
//createContext() = create an context obj when react renders a component
//that subscribes to this context obj & it will read the current context
//value from the closet matching provider above it in the tree
// useContext() = to create common data that cab be accessed throughout
// the component hierarchy without passing the props down manually to each set
//log level. context define will be available to all the child components
//without involving the props in all of our codes
// useReducer() = accepts a reducer function & initialState => [state, dispatch]
//and parameter => (reducer,initialState)
