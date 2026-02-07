const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  const users = await User.findAll({ attributes: { exclude: ["password"] } });
  res.json(users);
};
