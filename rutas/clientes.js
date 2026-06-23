const express = require('express');
const router = express.Router();

const clientescontroller = require('../controllers/clientescontroller');
router.get('/', clientescontroller.list);
router.post('/', clientescontroller.save);
router.delete('/:num_clie', clientescontroller.delete);
router.get('/:num_clie', clientescontroller.edit);
router.post('/:num_clie', clientescontroller.update);

module.exports = router;