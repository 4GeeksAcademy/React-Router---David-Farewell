import { useStore } from "../store";
import CardContact from "../components/CardContact";

const Contacts = () => {
  const { contacts } = useStore();

  return (
    <div className="container">
      <h2>Contacts List</h2>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <CardContact key={contact.id} contact={contact} />
        ))
      ) : (
        <p>No contacts available.</p>
      )}
    </div>
  );
};

export default Contacts;
