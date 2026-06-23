const express = require('express');
const router = express.Router();

const formapagocontroller = require('../controllers/formapagocontroller');
router.get('/', formapagocontroller.list);
router.post('/', formapagocontroller.save);
router.delete('/:idfpago', formapagocontroller.delete);
router.get('/:idfpago', formapagocontroller.edit);
router.post('/:idfpago', formapagocontroller.update);

module.exports = router;