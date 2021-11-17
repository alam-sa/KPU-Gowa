const router = require('express').Router();
const UserController = require('../controllers/userController');

router.post('/login', UserController.login);
router.post('/addAdmin', UserController.addAdmin);

module.exports = router;