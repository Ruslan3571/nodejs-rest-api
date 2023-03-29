const express = require("express");
const { ctrlWrapper, validation, verify, upload } = require("../../middlewares");
const { auth: ctrl } = require("../../controllers");
const { registerSchema, loginSchema } = require("../../models");

const router = express.Router();

router.post("/register", validation(registerSchema), ctrlWrapper(ctrl.register));
router.post("/login", validation(loginSchema), ctrlWrapper(ctrl.login));
router.get("/logout", verify, ctrlWrapper(ctrl.logout));
router.get("/current", verify, ctrlWrapper(ctrl.getCurrent));
router.patch("/avatars", verify, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar));
router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));
router.post("/verify", ctrlWrapper(ctrl.resendEmail));

module.exports = router;
