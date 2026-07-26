const Product = require("../../models/Products.model");

const AddProducts = async (req, res) => {
    
    const { name, price, description } = req.body;
  // console.log(req.body);

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
      message: "product already exist",
      data: null,
    });
  }

  console.log(checkProduct);


  await Product.create({
    name,
    price,
    description
  })

  return res.status(201).json({
      status_code: 201,
      message: "product added successfully",
  });
  
  return res.status(500).json({
    status_code: 500,
    message: "internal server error",
    data: null,
  });


};
module.exports = AddProducts;






