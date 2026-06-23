const express = require('express');
const router = express.Router();

const empleadoscontroller = require('../controllers/empleadoscontroller');
router.get('/', empleadoscontroller.list);
router.post('/', empleadoscontroller.save);
router.delete('/:idemp', empleadoscontroller.delete);
router.get('/:idemp', empleadoscontroller.edit);
router.post('/:idemp', empleadoscontroller.update);

module.exports = router;