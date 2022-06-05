const express = require('express');

const { validation, ctrlWrapper } = require('../../middlewares');
const { joiRegisterSchema, joiLoginSchema } = require('../../models/user');
const { auth: ctrl } = require('../../controllers');

const router = express.Router();

router.post(
  '/register',
  validation(joiRegisterSchema),
  ctrlWrapper(ctrl.register)
);

router.post('/login', validation(joiLoginSchema), ctrl.login);

module.exports = router;
