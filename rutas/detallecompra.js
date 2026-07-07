const express = require('express');
const router = express.Router();

const detallecompracontroller = require('../controllers/detallecompracontroller');
router.get('/', detallecompracontroller.list);
router.post('/', detallecompracontroller.save);
router.delete('/:iddetcomp', detallecompracontroller.delete);
router.get('/:iddetcomp', detallecompracontroller.edit);
router.post('/:iddetcomp', detallecompracontroller.update);

module.exports = router;