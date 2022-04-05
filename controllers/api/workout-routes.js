const router = require("express").Router();
const { Workout } = require("../../models");

router.get("/", (req, res) => {
  Workout.findAll()
    .then((dbWorkoutData) => res.json(dbWorkoutData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Workout.create({
    name: req.body.name,
    date: req.body.date,
    calories: req.body.calories,
    user_id: req.body.user_id,
  })
    .then((dbWorkoutData) => res.json(dbWorkoutData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
