const express = require("express");
const router = express.Router();
//instruct which directory to send the request to
const path = require("path")

//request the latt workout
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))

})

module.exports = router