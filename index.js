const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

require("dotenv").config();
const Port = process.env.PORT;

const auth_routes = require("./Routers/Auth/auth.router");
const products_routes = require("./Routers/Products/Products");
const users_routes = require("./Routers/Users/user.router");
const cart_routes = require("./Routers/cart/cart.router");
const connectedDB = require("./config/db");

app.use(express.json());

connectedDB();

app.get("/", (req, res) => {
  return res.status(400).json({
    status_code: 200,
    message: "WELCOME",
    data: null,
  });
});

app.use("/api/v1/auth", auth_routes);
app.use("/api/v1/products", products_routes);
app.use("/api/v1/users", users_routes);
app.use("/api/v1/cart", cart_routes);

// app.listen(Port, () => {
//   console.log(`server is running on port ${Port}`);
// });

module.exports = app;
