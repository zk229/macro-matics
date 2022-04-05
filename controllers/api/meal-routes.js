const router = require("express").Router();
const { Meal } = require("../../models");


router.get("/",  async (req, res) => {
  try {
    const dbMealData = await Meal.findAll();
    res.status(200).json(dbMealData);
  }
  catch (err) {
    res.status(500).json(err); 
  }
});

router.get("/:id", async (req, res) => {
  try {
    const dbMealData = await Meal.findByPk(req.params.id);
    if(!dbMealData) {
      res.status(404).json({ message: "No meal with that id found!" });
      return;
    }
    res.status(200).json(dbMealData);
  }
  catch (err) {
    res.status(500).json(err); 
  }
});

router.post("/", async (req, res) => {
  try {
    const dbMealData = await Meal.create({
      name: req.body.name,
      date: req.body.date,
      calories: req.body.calories,
      protein: req.body.protein,
      carbs: req.body.carbs,
      fat: req.body.fat,
      user_id: req.body.user_id
    });
    res.status(200).json(dbMealData);
  }
  catch (err) {
    res.status(500).json(err); 
  }
});

router.put("/:id", async (req, res) => {
  try {
    const mealData = await Meal.findByPk(req.params.id);
    if(!mealData) {
      res.status(404).json({ message: "No meal with that id found!" });
      return;
    }
    mealData.set({
      name: req.body.name,
      date: req.body.date,
      calories: req.body.calories,
      protein: req.body.protein,
      carbs: req.body.carbs,
      fat: req.body.fat,
      user_id: req.body.user_id
    });
    await mealData.save();
    res.status(200).json(mealData);
  }
  catch (err) {
    res.status(500).json(err);    
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const mealData = await Meal.destroy({
      where: {
        id: req.params.id 
      }
    });
    
    if(!mealData) {
      res.status(404).json({ message: "No meal with that id found!" }); 
      return;
    }
    res.status(200).json(mealData);
  }
  catch (err) {
    res.status(500).json(err); 
  }
});

module.exports = router;
