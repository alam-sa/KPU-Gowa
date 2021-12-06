const router = require('express').Router();
const UserController = require('../controllers/userController');
const authorizedAdmin = require('../middlewares/autorizedAdmin');
const authorizedSuperAdmin = require('../middlewares/autorizedSuperAdmin');
const auth = require('../middlewares/auth');

router.post('/login', UserController.login);
router.get('/', auth, authorizedAdmin, UserController.getAllAdmin);
router.post('/addAdmin', auth, authorizedAdmin, UserController.addAdmin);
router.patch('/status/:id', auth, authorizedAdmin, UserController.updateIsActive);
router.delete('/:id', auth, authorizedSuperAdmin, UserController.deleteUser);

module.exports = router;