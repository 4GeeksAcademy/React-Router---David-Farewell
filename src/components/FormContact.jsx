import { useState } from "react";

const FormContact = ({ onSubmit, initialValues = {} }) => {
    const [formData, setFormData] = useState({
        name: initialValues.name || "",
        address: initialValues.address || "",
        phone: initialValues.phone || "",
        email: initialValues.email || "",
        avatar: initialValues.avatar || "https://randomuser.me/api/portraits/lego/1.jpg"
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" onChange={handleChange} value={formData.name} required />
            <input type="text" name="address" placeholder="Address" onChange={handleChange} value={formData.address} required />
            <input type="text" name="phone" placeholder="Phone" onChange={handleChange} value={formData.phone} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
            <button type="submit">Save</button>
        </form>
    );
};

export default FormContact;
