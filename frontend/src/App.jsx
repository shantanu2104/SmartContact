import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { getContacts, addContact, deleteContact } from "./services/api";

function App() {
  const [contacts, setContacts] = useState([]);

const fetchContacts = async () => {
  const res = await getContacts();
  setContacts(res); // ✅ not res.data
};

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleAdd = async (data) => {
    await addContact(data);
    fetchContacts();
  };

  const handleDelete = async (id) => {
    await deleteContact(id);
    fetchContacts();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          Contact Manager
        </h1>

        <ContactForm onAdd={handleAdd} />
        <ContactList contacts={contacts} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
