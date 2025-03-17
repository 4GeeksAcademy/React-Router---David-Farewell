import { createContext, useContext, useState } from "react";

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
    const [contacts, setContacts] = useState([
        {
            id: 1,
            name: "Mike Anamendolla",
            address: "5842 Hillcrest Rd",
            phone: "(870) 288-4149",
            email: "mike.ana@example.com",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg"
        }
    ]);

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
