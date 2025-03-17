import { useStore } from "../store";
import CardContact from "../components/CardContact";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
    const { contacts } = useStore();
    const navigate = useNavigate();

    return (
        <div className="container">
            <button className="add-btn" onClick={() => navigate("/add-contact")}>Add new contact</button>
            <div className="contact-list">
                {contacts.length > 0 ? (
                    contacts.map(contact => (
                        <CardContact key={contact.id} contact={contact} />
                    ))
                ) : (
                    <p>No contacts available. Click "Add new contact" to add one.</p>
                )}
            </div>
        </div>
    );
};

export default Contacts;
