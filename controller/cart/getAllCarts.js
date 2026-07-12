const responseToFront = require("../../Helpers/response");
const CartSchema = require("../../models/cart.model");

const getAllCarts = async (req, res) => {
  try {
    const cartItems = await CartSchema.find()
      .populate("user", "name _id")
      .populate("products");

    console.log(cartItems);
  } catch (e) {
    res.status(404).json(responseToFront(404, "not empty", null));
  }
};

module.exports = getAllCarts;
