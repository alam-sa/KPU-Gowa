const router = require('express').Router();
const CalegController = require('../controllers/calegController');

router.post('/register', CalegController.register);

module.exports = router;