const router = require('express').Router();
const auth = require('../middlewares/auth');
const ParpolUserController = require('../controllers/parpolUserController');
const authorizedAdmin = require('../middlewares/autorizedAdmin');
const authorizedSuperAdmin = require('../middlewares/autorizedSuperAdmin');

router.post('/login', ParpolUserController.login);
router.get('/superAdmin', auth, authorizedAdmin, ParpolUserController.getSuperAdmin);
router.get('/all/:partaiId', auth, ParpolUserController.getAllAdminParpol);
router.post('/superAdmin/:partaiId', auth, authorizedAdmin, ParpolUserController.addSuperadminParpol)
router.post('/admin/:partaiId', auth, ParpolUserController.addAdminParpol)
router.delete('/:id', auth, authorizedSuperAdmin, ParpolUserController.deleteUser)

router.patch('/status/:id', auth, ParpolUserController.updateIsActive);

module.exports = router;