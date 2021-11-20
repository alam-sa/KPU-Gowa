const router = require('express').Router();
const PartaiController = require('../controllers/partaiController');
const { uploadLogo } = require('../helpers/uploads');
const authorizedAdmin = require('../middlewares/autorizedAdmin');

router.get('/', PartaiController.getAllPartai);
router.post('/add', authorizedAdmin, PartaiController.addPartai);
router.post('/logo/upload', uploadLogo.single('logo'), PartaiController.uploadLogo);
router.put('/update/:id', PartaiController.update)

module.exports = router;