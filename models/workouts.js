const mongoose = require("mongoose")
const { Schema } = require("mongoose");


const workoutSchema = new Schema({
    day: { type: String },
    exercises: []
})

module.exports = mongoose.model('Workouts', workoutSchema)


//FOR REFERENCE
// day: new Date(new Date().setDate(new Date().getDate() - 2)),
// exercises: [
//   {
//     type: "resistance",
//     name: "Military Press",
//     duration: 20,
//     weight: 300,
//     reps: 10,
//     sets: 4
//   }
// ]