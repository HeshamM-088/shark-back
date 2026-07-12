const express = require("express");
const router = express.Router();
const Product = require("../../controller/Products/Add_Products");
const Products = require("../../controller/Products/Get_all_products");

router.use("/" , ( req, res, next )=>{
    next();
});

router.post( "/" , Product  );
router.get( "/" , Products  );

module.exports = router;