const express = require('express');
const router = express.Router();

const encabezadoventacontroller = require('../controllers/encabezado_ventacontroller');
router.get('/', encabezadoventacontroller.list);
router.post('/', encabezadoventacontroller.save);
router.delete('/:num_venta', encabezadoventacontroller.delete);
router.get('/:num_venta', encabezadoventacontroller.edit);
router.post('/:num_venta', encabezadoventacontroller.update);

module.exports = router;