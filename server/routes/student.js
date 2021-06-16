import express from "express";
import { getStudents, createStudent } from "../controllers/student.js";
// import student from "../models/student.js";
//initialize router
const router = express.Router();

//add routes
//syntax: router.get(path,callback)
router.get("/", getStudents);
//router.get("/", (req, res) => {
//res.send("Router is working");
//});
//post: send data
router.post("/", createStudent);

//export the router
export default router;
