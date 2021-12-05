import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const themeReducer = (state, { type, payload }) => {
  switch (type) {
    case "CHANGE_COLOR":
      return { ...state, color: payload };

    case "CHANGE_MODE":
      return { ...state, mode: payload };
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  // custom logic

  const [state, dispatch] = useReducer(themeReducer, {
    color: "#F7AD19",
    mode: "dark",
  });

  const changeColor = (color) => {
    dispatch({
      type: "CHANGE_COLOR",
      payload: color,
    });
  };

  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
