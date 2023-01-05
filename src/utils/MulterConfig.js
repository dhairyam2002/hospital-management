const Multer = require('multer');

const storage = Multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './uploads')
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + file.originalname);
    }
})


const multer = Multer({
    storage: storage,
    limit: 50*1024*1024
})

module.exports = multer;