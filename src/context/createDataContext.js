import { createContext, useReducer } from "react";

export default (reducerFn, actions, initialState) => {
  const Context = createContext({});

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducerFn, initialState);
    //Actions are objexct that returns the dispatch
    //action === {addBlogPost: (dispatch)=> ()=>{}}
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return {
    Context,
    Provider,
  };
};
