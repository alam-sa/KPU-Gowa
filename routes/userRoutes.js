const router = require('express').Router();
const UserController = require('../controllers/userController');
const authorizedAdmin = require('../middlewares/autorizedAdmin');
const authorizedSuperAdmin = require('../middlewares/autorizedSuperAdmin');
const auth = require('../middlewares/auth');

router.post('/login', UserController.login);
router.use(auth);
router.get('/', authorizedAdmin, UserController.getAllAdmin);
router.post('/addAdmin', authorizedAdmin, UserController.addAdmin);
router.patch('/status/:id', authorizedAdmin, UserController.updateIsActive);
router.delete('/:id', authorizedSuperAdmin, UserController.deleteUser);

module.exports = router;