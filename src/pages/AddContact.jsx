import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

export const AddContact = () => {
    const { addContact } = useGlobalReducer();
    const navigate = useNavigate();

    const [contact, setContact] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    });

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact(contact);
        navigate("/");
    };

    return (
        <div className="container mt-5">
            <h2>Add New Contact</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Name:</label>
                    <input type="text" name="name" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label>Phone:</label>
                    <input type="text" name="phone" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label>Email:</label>
                    <input type="email" name="email" className="form-control" onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Save Contact</button>
            </form>
        </div>
    );
};
