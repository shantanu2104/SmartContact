import axios from "axios";

const API_URL = "https://smart-contact-d76a.vercel.app/api/contacts";

export const getContacts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addContact = async (data) => {
  const res = await axios.post(API_URL, data, {
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
};

export const deleteContact = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
