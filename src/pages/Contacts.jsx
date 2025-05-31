import { useStore } from "../store.jsx";
import { useNavigate } from "react-router-dom";
import CardContact from "../components/CardContact";

const Contacts = () => {
    const { contacts } = useStore();
    const navigate = useNavigate();

    return (
        <div className="container">
            <button
                className="btn btn-success my-3"
                onClick={() => navigate("/add-contact")}
            >
                Add new contact
            </button>
            <div>
                {contacts.length > 0 ? (
                    contacts.map(contact => (
                        <CardContact key={contact.id} contact={contact} />
                    ))
                ) : (
                    <p>No contacts available.</p>
                )}
            </div>
        </div>
    );
};

export default Contacts;
