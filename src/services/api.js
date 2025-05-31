const BASE_URL = "https://playground.4geeks.com/contact/agendas/Jason%20Derulo";

export const getContacts = async () => {
    try {
        const res = await fetch(`${BASE_URL}/contacts`);
        const data = await res.json();
        return data.contacts || [];
    } catch (error) {
        console.error("Error fetching contacts:", error);
        return [];
    }
};

export const addContact = async (contact) => {
    try {
        const res = await fetch(`${BASE_URL}/contacts`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contact)
        });
        return await res.json();
    } catch (error) {
        console.error("Error adding contact:", error);
        return null;
    }
};

export const deleteContact = async (id) => {
    try {
        const res = await fetch(`${BASE_URL}/contacts/${id}`, {
            method: "DELETE"
        });
        return res.ok;
    } catch (error) {
        console.error("Error deleting contact:", error);
        return false;
    }
};

export const updateContact = async (id, contact) => {
    try {
        const res = await fetch(`${BASE_URL}/contacts/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contact)
        });
        return await res.json();
    } catch (error) {
        console.error("Error updating contact:", error);
        return null;
    }
};
