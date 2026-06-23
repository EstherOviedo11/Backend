const express = require('express');
const router = express.Router();

const pagoscontroller = require('../controllers/pagoscontroller');
router.get('/', pagoscontroller.list);
router.post('/', pagoscontroller.save);
router.delete('/:idpago', pagoscontroller.delete);
router.get('/:idpago', pagoscontroller.edit);
router.post('/:idpago', pagoscontroller.update);

module.exports = router;