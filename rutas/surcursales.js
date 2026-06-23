const express = require('express');
const router = express.Router();

const sucursalescontroller = require('../controllers/sucursalescontroller');
router.get('/', sucursalescontroller.list);
router.post('/', sucursalescontroller.save);
router.delete('/:idsuc', sucursalescontroller.delete);
router.get('/:idsuc', sucursalescontroller.edit);
router.post('/:idsuc', sucursalescontroller.update);

module.exports = router;