const mongoose = require("mongoose");

const Cart = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    products: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },
    count: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("carts", Cart);
