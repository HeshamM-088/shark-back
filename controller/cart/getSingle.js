const CartSchema = require("../../models/cart.model");

const gitSingleCart = async (req, res) => {
  try {
    const { id } = req.user;

    const data = await CartSchema.find({ user: id }).populate(
      "products",
      "title",
    );

    console.log(data);

    // return res.status(200).json({});
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "cant get data cart",
    });
  }
};

module.exports = gitSingleCart;
