import { useState } from "react";

const ContactList = ({ contacts, onDelete }) => {
  const [showToast, setShowToast] = useState(false);

  const handleDelete = async (id) => {
    await onDelete(id);

    // show delete notification
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      {/*  NOTIFICATION */}
      {showToast && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition">
           Contact deleted successfully
        </div>
      )}

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Saved Contacts
        </h2>

        {contacts.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            No contacts found
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700 text-sm uppercase">
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">Phone</th>
                  <th className="px-4 py-3 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {contacts.map((c) => (
                  <tr
                    key={c._id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-3 font-medium text-gray-800">
                      {c.name}
                    </td>

                    <td className="px-4 py-3 text-gray-600">
                      {c.email || "—"}
                    </td>

                    <td className="px-4 py-3 text-gray-600">
                      {c.phone}
                    </td>

                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => handleDelete(c._id)}
                        className="text-red-600 hover:text-red-800 font-medium transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactList;
