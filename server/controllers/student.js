import StudentData from "../models/student.js";

//callback function
//get request: read
export const getStudents = async (req, res) => {
  try {
    //go to the student model and find all the student that is available
    const allStudents = await StudentData.find();
    // send allStudent to the client
    //200: ok
    res.status(200).json(allStudents);
  } catch (error) {
    //404: not found
    res.status(404).json({ error: error.message });
  }
};

//post request: update
//if we have got a request from the client side to create a student
//we get the request and store the data into the database
export const createStudent = async (req, res) => {
  const student = req.body;
  console.log(req.body);

  //new model(variable)
  const newStudent = new StudentData(student);

  try {
    await newStudent.save();
    //once succesfully saved, give a response
    //201: created
    res.status(201).json(newStudent);
  } catch (error) {
    //409: conflict
    res.status(409).json({ error: error.message });
  }
};
