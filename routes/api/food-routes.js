const router = require("express").Router();
const { Food } = require("../../models");


router.get("/", (req, res) => {
  Food.findAll
    .then((dbFoodData) => res.json(dbFoodData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Food.create({
    name: req.body.name,
    calories: req.body.calories,
    protien: req.body.protien,
    carbs: req.body.carbs,
    fat: req.body.fat
  })
    .then((dbFoodData) => res.json(dbFoodData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
})

module.exports = router;