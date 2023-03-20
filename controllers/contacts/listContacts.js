const { Contact } = require("../../models/contact");

const listContacts = async (req, res) => {
  const { _id } = req.user;
  const result = await Contact.find({ owner: _id });
  res.json(result);
};

module.exports = listContacts;
