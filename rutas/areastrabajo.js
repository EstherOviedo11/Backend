const express = require('express');
const router = express.Router();

const areastrabajocontroller = require('../controllers/areastrabajocontroller');
router.get('/', areastrabajocontroller.list);
router.post('/', areastrabajocontroller.save);
router.delete('/:idarea', areastrabajocontroller.delete);
router.get('/:idarea', areastrabajocontroller.edit);
router.post('/:idarea', areastrabajocontroller.update);

module.exports = router;