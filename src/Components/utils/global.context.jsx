import { createContext, useReducer, useContext } from "react";

export const initialState = {
  theme: "ligth",
  data: [],
  favorites: [],
}

const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "ligth" ? "dark" : "ligth"};
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "ADD_TO_FAVORITES":
      return { ...state, favorites: [...state.favorites, action.payload] };
    
    default:
      return state;
  }
};

  export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};