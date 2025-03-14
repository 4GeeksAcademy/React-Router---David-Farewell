import { useContext, useReducer, createContext } from "react";
import storeReducer, { initialStore } from "../store/store";

const StoreContext = createContext();

export function StoreProvider({ children }) {
    const [store, dispatch] = useReducer(storeReducer, initialStore());

    const API_URL = "https://playground.4geeks.com/contact/agendas/davidfarewell";

    const getContacts = async () => {
        try {
            const response = await fetch(`${API_URL}/contacts`);
            const data = await response.json();
            dispatch({ type: "set_contacts", payload: data.contacts || [] });
        } catch (error) {
            console.error("Error fetching contacts:", error);
        }
    };

    const addContact = async (contact) => {
        try {
            const response = await fetch(`${API_URL}/contacts`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contact)
            });

            if (response.ok) {
                getContacts();
            }
        } catch (error) {
            console.error("Error adding contact:", error);
        }
    };

    const updateContact = async (contact) => {
        try {
            const response = await fetch(`${API_URL}/contacts/${contact.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contact)
            });

            if (response.ok) {
                getContacts();
            }
        } catch (error) {
            console.error("Error updating contact:", error);
        }
    };

    const deleteContact = async (id) => {
        try {
            const response = await fetch(`${API_URL}/contacts/${id}`, {
                method: "DELETE"
            });

            if (response.ok) {
                dispatch({ type: "delete_contact", payload: id });
            }
        } catch (error) {
            console.error("Error deleting contact:", error);
        }
    };

    return (
        <StoreContext.Provider value={{ store, dispatch, getContacts, addContact, updateContact, deleteContact }}>
            {children}
        </StoreContext.Provider>
    );
}

export default function useGlobalReducer() {
    return useContext(StoreContext);
}
