const router = require('express').Router();
const calegRoute = require('./calegRoutes');
const dapilRoute = require('./dapilRoutes');
const parpolUserRoute = require('./parpolUserRoutes');
const partaiRoute = require('./partaiRoutes');
const userRoute = require('./userRoutes');
const dokumenRoute = require('./dokumenRoutes');
const auth = require('../middlewares/auth');

const ZipcodeController = require('../controllers/zipcodeController')

router.get('/region', ZipcodeController.getRegion);
router.get('/provinces', ZipcodeController.getProvince);

router.use('/caleg', calegRoute);
router.use('/parpolUser', parpolUserRoute);
router.use('/user', userRoute);
router.use('/dapil', dapilRoute);
router.use('/partai', partaiRoute);
router.use('/dokumen', dokumenRoute)

module.exports = router;