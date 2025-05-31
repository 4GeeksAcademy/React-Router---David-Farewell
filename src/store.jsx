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

    useEffect(() => {
        loadContacts();
    }, []);

    return (
        <StoreContext.Provider value={{ contacts, addContact, deleteContact, updateContact }}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = () => useContext(StoreContext);
