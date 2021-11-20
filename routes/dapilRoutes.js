const router = require('express').Router();
const DapilController = require('../controllers/dapilController');
const authorizedAdmin = require('../middlewares/autorizedAdmin');
const auth = require('../middlewares/auth');

router.post('/', DapilController.addDapil);

module.exports = router;