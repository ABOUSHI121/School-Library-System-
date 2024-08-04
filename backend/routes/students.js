const express = require('express');
const router = express.Router();
const { addStudent, getStudents } = require('../controllers/studentController');
const auth = require('../middleware/auth');

// @route    POST api/students
// @desc     Add a new student
// @access   Private
router.post('/', auth, addStudent);

// @route    GET api/students
// @desc     Get all students
// @access   Private
router.get('/', auth, getStudents);

module.exports = router;
