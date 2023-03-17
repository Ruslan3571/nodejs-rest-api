const { Contact } = require("../../models/contact");

const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { favorite } = req.body;
  const result = await Contact.findByIdAndUpdate(id, {favorite}, {
    new: true,
  });
  if (!result) {
    return res.status(404).json({ message: "Not found" });
  }
  res.status(200).json(result);
};

module.exports = updateStatus;
