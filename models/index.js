const { Contact, addSchema, updateSchema, updateFavoriteSchema } = require("./contact");
const { User, registerSchema, loginSchema } = require("./user");

module.exports = {
  Contact,
  addSchema,
  updateSchema,
  updateFavoriteSchema,
  User,
  registerSchema,
  loginSchema,
};
