const express = require("express");
const ctrl = require("../../controllers/contacts");
const validation = require("../../middlewares/validation");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");
const { addSchema, updateSchema, updateFavoriteSchema } = require("../../models/contact");
const router = express.Router();

router.get("/", ctrlWrapper(ctrl.listContacts));
router.get("/:id", ctrlWrapper(ctrl.getById));
router.post("/", validation(addSchema), ctrlWrapper(ctrl.addContact));
router.delete("/:id", ctrlWrapper(ctrl.removeContact));
router.put("/:id", validation(updateSchema), ctrlWrapper(ctrl.updateContact));
router.patch(
  "/:id/favorite",
  validation(updateFavoriteSchema),
  ctrlWrapper(ctrl.updateStatus)
);

module.exports = router;
