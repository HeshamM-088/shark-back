const express = require("express");
const ifLogin = require("../../middleware/ifLogin");
const addToCart = require("../../controller/cart/addToCart");
const getSingleCart = require("../../controller/cart/getSingle");
const check_role = require("../../middleware/check_role");
const getAllCarts = require("../../controller/cart/getAllCarts");

const router = express.Router();

router.get("/:id", ifLogin, getSingleCart);

router.get("/", check_role, getAllCarts);

router.post("/", ifLogin, addToCart);

module.exports = router;
