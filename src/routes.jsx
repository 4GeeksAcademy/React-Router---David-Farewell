import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import AddContact from "./pages/AddContact";

export const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/contacts", element: <Contacts /> },
    { path: "/add-contact", element: <AddContact /> },
]);
