const express = require('express');
const router = express.Router();
const employmentController = require('../controllers/userController');

router.post('/employments', employmentController.createEmployment);

router.get('/employments', employmentController.getEmployments);

router.get('/employments/:id', employmentController.getEmploymentById);

router.put('/employments/:id', employmentController.updateEmployment);

router.delete('/employments/:id', employmentController.deleteEmployment);

module.exports = router;