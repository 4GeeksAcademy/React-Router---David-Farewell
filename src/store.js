import { createContext, useContext, useState } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts((prevContacts) => [...prevContacts, { ...contact, id: Date.now() }]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  return {
    contacts,
    addContact,
    deleteContact,
  };
};

export const useStore = () => useContext(StoreContext);
