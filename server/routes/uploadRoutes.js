const express = require('express');
const upload = require('../utils/multerConfig');
const { uploadAudio } = require('../controllers/uploadController');

const router = express.Router();

router.post('/upload', upload.single('audio'), uploadAudio);

module.exports = router;