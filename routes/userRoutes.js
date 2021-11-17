const router = require('express').Router();
const UserController = require('../controllers/userController');
const authorizedAdmin = require('../middlewares/autorizedAdmin');
const auth = require('../middlewares/auth');

router.post('/login', UserController.login);
router.use(auth);
router.post('/addAdmin', authorizedAdmin, UserController.addAdmin);
router.patch('/status/:id', authorizedAdmin, UserController.updateIsActive);

module.exports = router;