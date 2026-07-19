const Product = require("../../models/Products.model");

const GetProducts = async (req, res) => {
  const { name, price, description } = req.body;
  console.log(req.body);

  if (!name || !price || !description) {
    return res.status(401).json({
      status_code: 401,
      message: "all fields required",
      data: null,
    });
  }

  const checkProduct = await Product.findOne({ name });

  if (checkProduct) {
    return res.status(401).json({
      status_code: 401,
      message: "Product already exists",
    });
  }

  const product = await Product.create({
    name,
    price,
    description,
  });

  return res.status(201).json({
    status_code: 201,
    message: "Product added successfully",
    data: product,
  });
};

module.exports = GetProducts;
