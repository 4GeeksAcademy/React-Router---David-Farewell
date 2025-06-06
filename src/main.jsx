import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { StoreProvider } from "./store.jsx";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StoreProvider>
        <RouterProvider router={router} />
    </StoreProvider>
);
