const router = require('express').Router();
const auth = require('../middlewares/auth');
const ParpolUserController = require('../controllers/parpolUserController');
const authorizedAdmin = require('../middlewares/autorizedAdmin');
const authorizedSuperAdmin = require('../middlewares/autorizedSuperAdmin');

router.post('/login', ParpolUserController.login);
router.get('/superAdmin', auth, authorizedAdmin, ParpolUserController.getSuperAdmin);
router.post('/superAdmin/:partaiId', auth, authorizedAdmin, ParpolUserController.addSuperadminParpol)
router.delete('/:id', auth, authorizedSuperAdmin, ParpolUserController.deleteUser)

module.exports = router;