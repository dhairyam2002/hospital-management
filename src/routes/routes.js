const express = require('express');
const {validateBody} = require("../middlewares/bodyValidators");
const Controllers = require('../controllers/controllers');
const router = express.Router();
const multer = require('../utils/MulterConfig');
const getPsychiatrist  = require('../controllers/controllers');



router.route('/register/patient').post(multer.single('patient_photo'), validateBody, Controllers.registerPatient);

router.route('/details/psychiatrist').get(Controllers.getPsychiatrist);


module.exports = router;