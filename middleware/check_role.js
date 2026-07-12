const { jwtDecode } = require("jwt-decode");
const responseToFront = require("../Helpers/response");

const check_role = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    // console.log(token);

    const secret = process.env.SECRET_KEY;
    const { role } = jwtDecode(token, secret);

    if (role == "admin") {
      next();
    } else {
      res.status(201).json(responseToFront(201, "un auth", null));
    }
  } catch (e) {
    res.status(402).json({
      status_code: 402,
      message: e.message,
      data: null,
    });
  }
};

module.exports = check_role;
