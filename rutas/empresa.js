const express = require('express');
const router = express.Router();

const empresacontroller = require('../controllers/empresacontroller');
router.get('/', empresacontroller.list);
router.post('/', empresacontroller.save);
router.delete('/:idempresa', empresacontroller.delete);
router.get('/:idempresa', empresacontroller.edit);
router.post('/:idempresa', empresacontroller.update);

module.exports = router;
