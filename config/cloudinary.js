const cloudinary = require("cloudinary").v2;

const cloud_name = process.env.CLOUD_NAME;
const api_key = process.env.API_KEYS;
const api_secret = process.env.API_SECRET;

// console.log(process.env.CLOUD_NAME);
// console.log(process.env.API_KEYS);
// console.log(process.env.API_SECRET);

cloudinary.config({
cloud_name,
api_key,
api_secret,
});

module.exports = cloudinary;
