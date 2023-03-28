const express = require("express");
const { contacts: ctrl } = require("../../controllers");
const { validation, ctrlWrapper, verify, upload } = require("../../middlewares");
const { addSchema, updateSchema, updateFavoriteSchema } = require("../../models");

const router = express.Router();

router.get("/", verify, ctrlWrapper(ctrl.listContacts));
router.get("/:id", ctrlWrapper(ctrl.getById));
router.post(
  "/",
  upload.single("image"),
  verify,
  validation(addSchema),
  ctrlWrapper(ctrl.addContact)
);
router.delete("/:id", ctrlWrapper(ctrl.removeContact));
router.put("/:id", validation(updateSchema), ctrlWrapper(ctrl.updateContact));
router.patch(
  "/:id/favorite",
  validation(updateFavoriteSchema),
  ctrlWrapper(ctrl.updateStatus)
);

module.exports = router;
