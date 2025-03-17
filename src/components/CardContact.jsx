import { useStore } from "../store";
import { FaTrash, FaEdit, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const CardContact = ({ contact }) => {
    const { deleteContact } = useStore();

    return (
        <div className="card">
            <img src={contact.avatar} alt={contact.name} className="avatar" />
            <div className="card-info">
                <h3>{contact.name}</h3>
                <p><FaMapMarkerAlt /> {contact.address}</p>
                <p><FaPhone /> {contact.phone}</p>
                <p><FaEnvelope /> {contact.email}</p>
            </div>
            <div className="card-actions">
                <FaEdit className="icon" />
                <FaTrash className="icon delete" onClick={() => deleteContact(contact.id)} />
            </div>
        </div>
    );
};

export default CardContact;
