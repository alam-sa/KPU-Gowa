const router = require('express').Router();
const calegRoute = require('./calegRoutes');
const dapilRoute = require('./dapilRoutes');
const parpolUserRoute = require('./parpolUserRoutes');
const partaiRoute = require('./partaiRoutes');
const userRoute = require('./userRoutes');

router.use('/caleg', calegRoute);
router.use('/dapil', dapilRoute);
router.use('/parpolUser', parpolUserRoute);
router.use('/partai', partaiRoute);
router.use('/user', userRoute);

module.exports = router;