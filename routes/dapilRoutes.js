const router = require('express').Router();
const DapilController = require('../controllers/dapilController');

router.post('/', DapilController.addDapil);

module.exports = router;