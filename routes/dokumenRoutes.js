const router = require('express').Router();
const DokumenController = require('../controllers/dokumenController');
const { uploadDokumen } = require('../helpers/uploads');
const auth = require('../middlewares/auth');
const authorizedAdmin = require('../middlewares/autorizedAdmin');

router.get('/:id', DokumenController.getDokumenById);
router.post('/upload', auth, uploadDokumen.single("dokumen"), DokumenController.uploadDokumen);
router.patch('/caleg/:id', auth, DokumenController.uploadDokumenCaleg);
router.patch('/:id', auth, authorizedAdmin, DokumenController.updateStatusDokumen);

module.exports = router;