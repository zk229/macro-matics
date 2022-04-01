const { Workout } = require("../models");

const workoutData = [
    {
        date: "2022-03-29",
        calories: 400,
        user_id: 1
    }
];

const seedWorkout = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkout;