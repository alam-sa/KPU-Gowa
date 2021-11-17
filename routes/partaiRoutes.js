const router = require('express').Router();
const PartaiController = require('../controllers/partaiController');
const autorizedAdmin = require('../middlewares/autorizedAdmin');

router.get('/', PartaiController.getAllPartai);
router.post('/add', autorizedAdmin, PartaiController.addPartai)

module.exports = router;