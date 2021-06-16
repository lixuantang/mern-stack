import mongoose from "mongoose";

//create an instant for mongoose.schema
const studentSchema = mongoose.Schema({
  //define schema
  regNo: Number,
  studentName: String,
  grade: String,
  section: {
    type: String,
    default: "A",
  },
});

//create model
//model syntax: mongoose.model(modelName, schema)
const student = mongoose.model("student", studentSchema);

//export model
export default student;
