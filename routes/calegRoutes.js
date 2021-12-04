const router = require('express').Router();
const CalegController = require('../controllers/calegController');
const { uploadProfil } = require('../helpers/uploads');
const auth = require('../middlewares/auth');
const authorizedAdmin = require('../middlewares/autorizedAdmin');

router.post('/register', CalegController.register);
router.post('/login', CalegController.login);
router.use(auth);
router.get('/:status', CalegController.getAllByStatus)
router.get('/:id', CalegController.getCalegData);
router.post('/image/upload', uploadProfil.single('image'), CalegController.uploadImage);
router.patch('/profil', CalegController.updateProfil);
router.patch('/status/:id', authorizedAdmin, CalegController.updateStatus);
router.delete('/:id', authorizedAdmin, CalegController.deleteUser)

module.exports = router;