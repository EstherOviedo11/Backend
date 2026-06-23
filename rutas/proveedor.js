const express = require('express');
const router = express.Router();

const proveedorcontroller = require('../controllers/proveedorcontroller');
router.get('/', proveedorcontroller.list);
router.post('/', proveedorcontroller.save);
router.delete('/:idprov', proveedorcontroller.delete);
router.get('/:idprov', proveedorcontroller.edit);
router.post('/:idprov', proveedorcontroller.update);

module.exports = router;