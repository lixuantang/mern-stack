//import all the dependencies we have installed
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import studentRoutes from "./routes/student.js";

//whenever we call app, it will equal to express
const app = express();

//set up cors
app.use(cors());

//set up body-parser to send request properly
// app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

//app.use() function is used to mount the specified middleware function at the path which is being specified.
//syntax: app.use(path, callback)
//path: the path for which the middleware function is being called.
//    : the path for all the routes in the student.js file.
//callback: middleware function
app.use("/students", studentRoutes);

//connect with MongoDB Atlas
const CONNECTION_URL =
  "mongodb+srv://alyssa:Tt13097939@cluster0.riufa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//Assign Port
//process.env.PORT || 5000 means: whatever is in the environment variable PORT, or 5000.
const PORT = process.env.PORT || 5000;

//mongoose connect function
//since this is a function, it will return a promise.
//if the promise is resolved, then it will execute the .then callback function.
//if not resolved, it will execute .catch callback function.
mongoose
  .connect(CONNECTION_URL, {
    //we kept these 2 true because we wanna avoid the warnings and errors in the console
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Connection is established and running on port: ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);
