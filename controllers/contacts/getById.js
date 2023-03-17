const { Contact } = require("../../models/contact");

const getById = async (req, res) => {
 
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    return res.status(404).json({ message: "Not found" });
  }
  res.json(result);
};

module.exports = getById;
