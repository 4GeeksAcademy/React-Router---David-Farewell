import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Welcome to Contact Manager</h2>
      <button onClick={() => navigate("/contacts")}>View Contacts</button>
      <button onClick={() => navigate("/add-contact")}>Add New Contact</button>
    </div>
  );
};

export default Home;
