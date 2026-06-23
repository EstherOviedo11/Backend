const express = require('express');
const router = express.Router();

const productocontroller = require('../controllers/productocontroller');
router.get('/', productocontroller.list);
router.post('/', productocontroller.save);
router.delete('/:num_prod', productocontroller.delete);
router.get('/:num_prod', productocontroller.edit);
router.post('/:num_prod', productocontroller.update);

module.exports = router;