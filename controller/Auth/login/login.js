const { request } = require("express");
const User = require("../../../models/user.model");
const bcrypt = require("bcrypt");
const sign = require("jwt-encode");

const login = async (req, res) => {
  const { email, password } = req.body;
  const checkUser = await User.findOne({ email });
  const SECRET_KEY = process.env.SECRET_KEY;

  const authPassword = await bcrypt.compare(password, checkUser.password);
  console.log(authPassword);

  const JWT = await sign(
    {
      role: checkUser.role,
      name: checkUser.name,
      email: checkUser.email,
      image: checkUser.image,
      id: checkUser._id,
    },
    SECRET_KEY,
  );

  // res.cookie('token', 'JWT', { domain: 'www.back.com', path: '/*', secure: true });

  return res.status(201).json({
    status_code: 201,
    message: "login success",
    data: {
      token: JWT,
    },
  });
};
module.exports = login;
