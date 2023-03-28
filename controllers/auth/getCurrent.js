const { User } = require("../../models");

const getCurrent = async (req, res) => {
  const { email } = req.user;
  const user = await User.findOne({ email });

  res.json({
    email: user.email,
    subscription: user.subscription,
  });
};

module.exports = getCurrent;
