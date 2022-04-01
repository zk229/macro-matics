const router = require("express").Router();
const { Meal } = require("../../models");


router.get("/", (req, res) => {
  Meal.findAll()
    .then((dbMealData) => res.json(dbMealData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Meal.create({
    name: req.body.name,
    date: req.body.date,
    calories: req.body.calories,
    protein: req.body.protein,
    carbs: req.body.carbs,
    fat: req.body.fat,
    user_id: req.body.user_id
  })
    .then((dbMealData) => res.json(dbMealData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
})



module.exports = router;