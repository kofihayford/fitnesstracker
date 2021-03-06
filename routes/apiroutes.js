// getLastWorkout, PUT and POST Routes need to be build 

const express = require("express");
const router = express.Router();
const Workout = require("../models/workouts")

//request the last workout
router.get("/workouts", (req, res) => {
    Workout.find({})
        .then((results) => {
            // console.log(results, "this is our location")
            res.json(results)
        }).catch(err => {
            console.log(err)
        })
})

router.put("/workouts/:id", (req, res) => {
    console.log(req.params, 'this our frontend body')
    Workout.findByIdAndUpdate(req.params.id, {
        $set: {
            exercises: req.body,
        }
    }
    )
        .then(results => {
            // removing anything from arr 
            // putting req.body into new arr 

            res.json(results)
        }).catch(err => {
            console.log(err)
        })
})

router.post("/workouts/", (req, res) => {
    console.log(req.body, 'this our frontend body')
    //var 
    let testData = [req.body]
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    let newDate = new Date()

    console.log(newDate)

    Workout.create({ exercises: testData, day: newDate })
        /*
        
    
        */
        .then(results => {
            // removing anything from arr 
            // putting req.body into new arr 

            res.json(results)
        }).catch(err => {
            console.log(err)
        })
})

router.get("/workouts/range", (req, res) => {
    Workout.aggregate([
        //use unwind to destructure the array so we can extract and then use dot notation to grab the actual items from the array. 

        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" },
                totalWeight: { $sum: "$exercises.weight" },
            }
        }

    ])
        .then(results => {
            console.log(results, 'this is our results incoming ')
            res.json(results)
        }).catch(err => {
            console.log(err)
        })
})

module.exports = router

