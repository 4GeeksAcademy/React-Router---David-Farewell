import { useStore } from "../store.jsx";
import rigoImage from "../assets/img/rigo-baby.jpg";

const CardContact = ({ contact }) => {
    const { deleteContact } = useStore();

    return (
        <div className="card m-3 p-3" style={{ borderRadius: "10px", boxShadow: "0 0 8px rgba(0,0,0,0.2)" }}>
            <div className="d-flex">
                <img
                    src={rigoImage}
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
            <button
                className="btn btn-danger mt-3"
                onClick={() => deleteContact(contact.id)}
            >
                🗑️ Delete
            </button>
        </div>
    );
};

export default CardContact;
