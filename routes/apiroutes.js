// getLastWorkout, PUT and POST Routes need to be build 

const express = require("express");
const router = express.Router();
const Workout = require("../models/workouts")

//request the last workout
router.get("/workouts", (req, res) => {
    Workout.find({}, function (err, data) {
        if (!err) {
            res.json(data)
        }
    }).then((results) => {
        console.log(results, "this is our location")
        res.json(results)
    }).catch(err => {
        console.log(err)
    })
})

router.put("/workouts/:id", (req, res) => {
    console.log(req.params)
    Workout.findByIdAndUpdate({ _id: req.params.id })
        .then(results => {
            res.json(results)
        }).catch(err => {
            console.log(err)
        })
})

module.exports = router