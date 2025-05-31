import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store.jsx";

const AddContact = () => {
    const navigate = useNavigate();
    const { addContact } = useStore();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addContact(formData);
        navigate("/contacts");
    };

    return (
        <div className="container my-5">
            <h2 className="mb-4">Add New Contact</h2>
            <form onSubmit={handleSubmit}>
                <input className="form-control mb-3" name="name" placeholder="Name" onChange={handleChange} required />
                <input className="form-control mb-3" name="phone" placeholder="Phone" onChange={handleChange} required />
                <input className="form-control mb-3" name="email" type="email" placeholder="Email" onChange={handleChange} required />
                <input className="form-control mb-3" name="address" placeholder="Address" onChange={handleChange} required />
                <button className="btn btn-primary">Save</button>
            </form>
        </div>
    );
};

export default AddContact;
