import { useState } from "react";
import { useStore } from "../store";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
    const { addContact } = useStore();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phone: "",
        email: "",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg" // Avatar por defecto
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact({ ...formData, id: Date.now() });
        navigate("/contacts");
    };

    return (
        <div className="container">
            <h2>Add New Contact</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
                <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
                <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default AddContact;
