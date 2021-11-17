const router = require('express').Router();
const ParpolUserController = require('../controllers/parpolUserController');
const authorizedAdmin = require('../middlewares/autorizedAdmin');
const auth = require('../middlewares/auth');

router.use(auth);
router.get('/superAdmin', authorizedAdmin, ParpolUserController.getSuperAdmin);
router.post('/superAdmin/:partaiId', authorizedAdmin, ParpolUserController.addSuperadminParpol)

module.exports = router;