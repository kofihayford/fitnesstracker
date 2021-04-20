//Declare the basic required variables 
const express = require("express");
const mongoose = requre("mongoose");
const logger = require("morgan");

// Assign port 
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }))


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workoutdatabase',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
);
