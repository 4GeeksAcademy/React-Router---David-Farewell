import { createContext, useContext, useState } from "react";

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);

    const addContact = (contact) => {
        setContacts((prevContacts) => [...prevContacts, contact]);
    };

    const deleteContact = (id) => {
        setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== id));
    };

    return (
        <StoreContext.Provider value={{ contacts, addContact, deleteContact }}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = () => {
    return useContext(StoreContext);
};
