const router = require('express').Router();
const PartaiController = require('../controllers/partaiController');
const { uploadLogo } = require('../helpers/uploads');
const auth = require('../middlewares/auth');
const authorizedAdmin = require('../middlewares/autorizedAdmin');

router.get('/', PartaiController.getAllPartai);
router.post('/add', auth, authorizedAdmin, PartaiController.addPartai);
router.post('/logo/upload', auth, uploadLogo.single('logo'), PartaiController.uploadLogo);
router.put('/update/:id', auth, PartaiController.update);
router.delete('/:id', auth, authorizedAdmin, PartaiController.deletePartai);

module.exports = router;