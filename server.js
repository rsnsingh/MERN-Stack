const express = require('express'); 
const mongoose = require('mongoose') 
const cors = require('cors'); 
 
const app = express(); 
app.use(cors()); 
 
// Connect to MongoDB 
mongoose.connect('mongodb://localhost:27017/studentdb') 
  .then(() => console.log('MongoDB Connected')) 
  .catch(err => console.error(err)); 
 
// Define Student schema 
const studentSchema = new mongoose.Schema({   
  rollno: Number,   
  name: String,   
  course: String,   
  semester: Number 
}); 
 
const Student = mongoose.model('Student', studentSchema,'students'); 
 
// Sample route: get all students 
app.get('/students', async (req, res) => {   
  const students = await Student.find();   
  res.json(students); 
}); 

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
