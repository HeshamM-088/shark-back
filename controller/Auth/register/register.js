const Product = require("../../../models/user.model");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  // console.log(req.body);

  const image = req.file?.path;
  // console.log(req.file);

  if (!name || !email || !password) {
    return res.status(401).json({
      status_code: 401,
      message: "all fields required",
      data: null,
    });
  }

  const checkUser = await Product.findOne({ email });

  if (checkUser) {
    return res.status(401).json({
      status_code: 401,
      message: "user already exist",
      data: null,
    });
  }

  console.log(checkUser);

  const hashedPassword = await bcrypt.hash(password, 7);

  await Product.create({
    name,
    email,
    password: hashedPassword,
    image,
  });

  return res.status(201).json({
    status_code: 201,
    message: "user added successfully",
  });
};
module.exports = register;
