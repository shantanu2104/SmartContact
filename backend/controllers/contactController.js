const Contact = require("../models/Contact");

exports.createContact = async (req, res) => {
  const contact = await Contact.create(req.body);
  res.status(201).json(contact);
};

exports.getContacts = async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.json(contacts);
};

exports.deleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: "Contact deleted" });
};
