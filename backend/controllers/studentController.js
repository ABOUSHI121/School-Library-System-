const Student = require('../models/Student');

// Add a new student
exports.addStudent = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  try {
    const newStudent = new Student({
      firstName,
      lastName,
      email,
    });
    const student = await newStudent.save();
    res.json(student);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all students
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
