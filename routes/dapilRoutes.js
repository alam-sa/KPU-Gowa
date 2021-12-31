const router = require('express').Router();
const DapilController = require('../controllers/dapilController');
const authorizedAdmin = require('../middlewares/autorizedAdmin');
const auth = require('../middlewares/auth');

router.get('/', DapilController.getAllDapils)
router.post('/', auth, authorizedAdmin, DapilController.addDapil);
router.delete('/:id', auth, DapilController.deleteDapil);

module.exports = router;