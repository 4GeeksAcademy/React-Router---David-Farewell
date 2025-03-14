import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Home = () => {
    const { store, getContacts, deleteContact } = useGlobalReducer();

    useEffect(() => {
        getContacts();
    }, []);

    return (
        <div className="container mt-5">
            <h1>Contact List</h1>
            <ul className="list-group">
                {store.contacts.map((contact) => (
                    <li key={contact.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <strong>{contact.name}</strong> - {contact.email} - {contact.phone}
                        </div>
                        <button className="btn btn-danger" onClick={() => deleteContact(contact.id)}>🗑 Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
