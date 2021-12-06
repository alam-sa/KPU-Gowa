const router = require('express').Router();
const CalegController = require('../controllers/calegController');
const { uploadProfil } = require('../helpers/uploads');
const auth = require('../middlewares/auth');
const authorizedAdmin = require('../middlewares/autorizedAdmin');

router.post('/register', CalegController.register);
router.post('/login', CalegController.login);
router.get('/', auth, CalegController.getAll);
router.get('/user', auth, CalegController.getCalegLogin);
router.get('/:id', auth, CalegController.getCalegData);
router.post('/image/upload', auth, uploadProfil.single('image'), CalegController.uploadImage);
router.patch('/profil', auth, CalegController.updateProfil);
router.patch('/status/:id', auth, authorizedAdmin, CalegController.updateStatus);
router.delete('/:id', auth, authorizedAdmin, CalegController.deleteUser)

module.exports = router;