const express = require('express');
const router = express.Router();
const data = require('../controllers/data');

router.get('/', data.index);


module.exports = router;