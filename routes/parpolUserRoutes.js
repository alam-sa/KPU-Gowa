const router = require('express').Router();
const auth = require('../middlewares/auth');
const ParpolUserController = require('../controllers/parpolUserController');
const authorizedAdmin = require('../middlewares/autorizedAdmin');
const authorizedSuperAdmin = require('../middlewares/autorizedSuperAdmin');

router.post('/login', ParpolUserController.login);
router.use(auth)
router.get('/superAdmin', authorizedAdmin, ParpolUserController.getSuperAdmin);
router.post('/superAdmin/:partaiId', authorizedAdmin, ParpolUserController.addSuperadminParpol)
router.delete('/:id', authorizedSuperAdmin, ParpolUserController.deleteUser)

module.exports = router;