const express = require("express");
const router = express.Router();
//instruct which directory to send the request to
const path = require("path")

//request the last workout
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))

})

//view the stats of the workouts so far
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))

})

module.exports = router