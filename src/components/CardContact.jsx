import { useStore } from "../store";

const CardContact = ({ contact }) => {
    const { deleteContact } = useStore();

    return (
        <div className="card">
            <h3>{contact.name}</h3>
            <p>📍 {contact.address}</p>
            <p>📞 {contact.phone}</p>
            <p>✉️ {contact.email}</p>
            <button onClick={() => deleteContact(contact.id)}>🗑️ Delete</button>
        </div>
    );
};

export default CardContact;
