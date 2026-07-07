const express = require('express');
const router = express.Router();

const encabezadocompracontroller = require('../controllers/encabezadocompracontroller');
router.get('/', encabezadocompracontroller.list);
router.post('/', encabezadocompracontroller.save);
router.delete('/:num_compra', encabezadocompracontroller.delete);
router.get('/:num_compra', encabezadocompracontroller.edit);
router.post('/:num_compra', encabezadocompracontroller.update);

module.exports = router;
