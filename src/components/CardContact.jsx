import { useStore } from "../store";
import { useNavigate } from "react-router-dom";

const CardContact = ({ contact }) => {
    const { deleteContact } = useStore();
    const navigate = useNavigate();

    const avatar = `https://i.pravatar.cc/100?img=${contact.id % 70}`;

    return (
        <div className="card m-3 p-3" style={{ borderRadius: "10px", boxShadow: "0 0 8px rgba(0,0,0,0.2)" }}>
            <div className="d-flex">
                <img
                    src={avatar}
                    alt="avatar"
                    className="me-3"
                    style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover" }}
                />
                <div>
                    <h5>{contact.name}</h5>
                    <p>📍 {contact.address}</p>
                    <p>📞 {contact.phone}</p>
                    <p>✉️ {contact.email}</p>
                </div>
            </div>
            <div className="d-flex justify-content-start mt-3">
                <button className="btn btn-primary me-2" onClick={() => navigate(`/edit-contact/${contact.id}`)}>✏️ Edit</button>
                <button className="btn btn-danger" onClick={() => deleteContact(contact.id)}>🗑️ Delete</button>
            </div>
        </div>
    );
};

export default CardContact;
