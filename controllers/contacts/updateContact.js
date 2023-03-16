const { Contact } = require("../../models/contact");

const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!result) {
    return res.status(404).json({ message: "Not found" });
  }
  res.status(200).json(result);
};

module.exports = updateContact;
