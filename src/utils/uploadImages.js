const Cloudinary = require('cloudinary');

const cloudinary = Cloudinary.v2;

const CONFIG = process.env;

cloudinary.config({
    cloud_name: CONFIG.CLOUDINARY_CLOUD_NAME,
    api_key: CONFIG.CLOUDINARY_API_KEY,
    api_secret: CONFIG.CLOUDINARY_API_SECRET
});

module.exports = cloudinary;