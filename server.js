//Declare the basic required variables 
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
require("dotenv").config()

// Assign port 
const PORT = process.env.PORT || 3000;
const htmlRoutes = require("./routes/htmlroutes")
const workRouter = require("./routes/apiroutes")
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use("/", htmlRoutes)
app.use("/api", workRouter)

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
).then(function () {
    console.log(`connected to server`)
});

app.listen(PORT, function () {
    console.log(`listening on port: ${PORT}`)
})
