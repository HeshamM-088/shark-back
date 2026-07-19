const express = require("express");
const router = express.Router();
const register = require("../../controller/Auth/register/register");
const login = require("../../controller/auth/login/login");
const upload = require("../../middleware/multer");
// const name = require("../../controller/Auth/register/name_user");
// const email = require("../../controller/Auth/register/email_user");
// const phone = require("../../controller/Auth/register/phone_user");
// const password = require("../../controller/Auth/register/password_user");
// const resPassword = require("../../controller/Auth/register/res-Password");

router.use("/", (req, res, next) => {
  next();
  // const role = req.headers.authorization;
  // console.log(role);

  // if(role == "admin"){
  //    next()
  // }else{
  //      res.status(403).json({
  //         "error":403,
  //         "message": "access drop"
  //     })

  // }
});

router.post("/register", upload.single("image"), register);
router.post("/login", login);

module.exports = router;
