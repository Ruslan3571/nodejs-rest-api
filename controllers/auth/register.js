const bcrypt = require("bcryptjs");
const { Conflict } = require("http-errors");
const { User } = require("../../models");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`Email in use`);
  }

  const hashPassword = await bcrypt.hash(password, bcrypt.genSaltSync(10));
  const result = await User.create({ name, email, password: hashPassword });
  res.status(201).json({
    user: {
      name: result.name,
      email: result.email,
    },
  });
};

module.exports = register;