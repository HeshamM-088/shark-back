const userSchema = require("../../models/user.model");

const getAllUSers = async (req, res) => {
  const users = await userSchema.find({}, "name description");

  res.status(200).json({
    status_code: 200,
    message: "done",
    data: users,
  });
};

module.exports = getAllUSers;
