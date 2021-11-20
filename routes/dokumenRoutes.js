const router = require('express').Router();
const DokumenController = require('../controllers/dokumenController');
const { uploadDokumen } = require('../helpers/uploads');
const authorizedAdmin = require('../middlewares/autorizedAdmin');

router.post('/upload', uploadDokumen.single("dokumen"), DokumenController.uploadDokumen);
router.patch('/caleg', DokumenController.uploadDokumenCaleg);
router.patch('/:id', authorizedAdmin, DokumenController.updateStatusDokumen);

module.exports = router;