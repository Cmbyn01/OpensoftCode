const multer = require('multer');
const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).single('videos');

module.exports = multerUploads;
