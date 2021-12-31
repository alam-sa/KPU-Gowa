const router = require('express').Router();
const CalegController = require('../controllers/calegController');
const { uploadProfil } = require('../helpers/uploads');
const auth = require('../middlewares/auth');
const authorizedAdmin = require('../middlewares/autorizedAdmin');

router.post('/register', CalegController.register);
router.post('/login', CalegController.login);
router.get('/all', CalegController.getAll);
router.get('/filter/verified', auth, CalegController.getAllVerified);
router.get('/filter/register', auth, CalegController.getAllRegister);
router.get('/filter/validasi', auth, CalegController.getAllValidate);

router.get('/filter/verified/:partaiId', auth, CalegController.getAllParpolVerified);
router.get('/filter/register/:partaiId', auth, CalegController.getAllParpolRegister);
router.get('/filter/validasi/:partaiId', auth, CalegController.getAllParpolValidate);

router.get('/user', auth, CalegController.getCalegLogin);
router.get('/data/:id', auth, CalegController.getCalegData);
router.post('/image/upload', auth, uploadProfil.single('image'), CalegController.uploadImage);
router.patch('/profil', auth, CalegController.updateProfil);
router.patch('/status/:id', auth, CalegController.updateStatus);
router.patch('/noUrut/:id', auth, CalegController.updateNoUrut);
router.delete('/:id', auth, authorizedAdmin, CalegController.deleteUser);

// router.get('/:id', auth, CalegController.getCalegById);

module.exports = router;