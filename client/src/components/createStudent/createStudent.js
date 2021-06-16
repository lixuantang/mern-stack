//TextField code copied from @material-ui
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Create() {
  const classes = useStyles();

  //useState is a react hook. You pass the initial state to this function and it returns a variable with the current state value and update the value
  //so when we add new things to the textfield, it will be updated
  //useState syntax: [current state, function that updates it] = useState(initial state)
  //we declare a state variable called student, and set it to initial state.
  //React will remember its current value and provide the most recent one to our function.
  //If we wanna update the current student, we can call setStudent.
  const [student, setStudent] = useState({
    //this is the intial state
    regNo: 0,
    studentName: "",
    grade: "",
    section: "",
  });

  const createStudent = () => {
    //when onClick happens, we want to send data to the backend
    //A library, Axios: to send data from the frontend to backend.
    //Client is running on 3000, server is running on 5000 port.
    // /students
    console.log(student);
    let jsonString = JSON.stringify( student );
    console.log(jsonString)
    axios.post("http://localhost:5000/students", jsonString, {
    header: {
    'Content-Type':  'application/x-www-form-urlencoded'
    }});
  };

  //onChange handler syntax: onChange={handleChange function}
  //handleChange function syntax: function handleChange(e) {console.log(e.target.value)}
  return (
    <>
      <h2>Create Student</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Registeration No."
          variant="outlined"
          value={student.regNo}
          onChange={(e) => {
            setStudent({ ...student, regNo: e.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={student.studentName}
          onChange={(e) => {
            setStudent({ ...student, studentName: e.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Grade"
          variant="outlined"
          value={student.grade}
          onChange={(e) => {
            setStudent({ ...student, grade: e.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Section"
          variant="outlined"
          value={student.section}
          onChange={(e) => {
            setStudent({ ...student, section: e.target.value });
          }}
        />
        {/* createStudent is a function */}
        <Button variant="contained" color="primary" onClick={createStudent}>
          Create
        </Button>
      </form>
    </>
  );
}
