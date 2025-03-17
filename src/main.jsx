import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { StoreContext, StoreProvider } from "./store";
import "./styles/index.css";

const store = StoreProvider(); // Llamamos la función que devuelve el contexto

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <RouterProvider router={router} />
    </StoreContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
