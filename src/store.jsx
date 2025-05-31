import { createContext, useContext, useEffect, useState } from "react";
import { getContacts, addContact as apiAdd, deleteContact as apiDelete, updateContact as apiUpdate } from "./services/api";

const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);

    const loadContacts = async () => {
        const data = await getContacts();
        setContacts(data);
    };

    const addContact = async (contact) => {
        const added = await apiAdd(contact);
        if (added && added.id) {
            setContacts(prev => [...prev, added]);
        }
    };

    const deleteContact = async (id) => {
        const ok = await apiDelete(id);
        if (ok) {
            setContacts(prev => prev.filter(c => c.id !== id));
        }
    };

    const updateContact = async (id, newData) => {
        const updated = await apiUpdate(id, newData);
        if (updated && updated.id) {
            setContacts(prev => prev.map(c => c.id === id ? updated : c));
        }
    };

    const editContact = async (id, updatedData) => {
    try {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/Jason%20Derulo/contacts/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData)
        });
        if (!response.ok) throw new Error("Failed to update");
        await getContacts(); 
    } catch (error) {
        console.error("Error editing contact:", error);
    }
};


    useEffect(() => {
        loadContacts();
    }, []);

    return (
        <StoreContext.Provider value={{ contacts, addContact, deleteContact, updateContact, editContact }}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = () => useContext(StoreContext);
