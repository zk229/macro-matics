const router = require("express").Router();
const { Workout } = require("../../models");


router.get("/",  async (req, res) => {
  try {
    const workoutData = await Workout.findAll();
    res.status(200).json(workoutData);
  }
  catch (err) {
    res.status(500).json(err); 
  }
});

router.get("/:id", async (req, res) => {
  try {
    const workoutData = await Workout.findByPk(req.params.id);
    if(!workoutData) {
      res.status(404).json({ message: "No workout with that id found!" });
      return;
    }
    res.status(200).json(workoutData);
  }
  catch (err) {
    res.status(500).json(err); 
  }
});

router.post("/", async (req, res) => {
  const myId = req.session.user.id || req.body.user_id;
  try {
    const workoutData = await Workout.create({
      date: req.body.date,
      calories: req.body.calories,
      user_id: myId
    });
    res.status(200).json(workoutData);
  }
  catch (err) {
    res.status(500).json(err); 
  }
});

router.put("/:id", async (req, res) => {
  try {
    const workoutData = await Workout.findByPk(req.params.id);
    if(!workoutData) {
      res.status(404).json({ message: "No workout with that id found!" });
      return;
    }
    workoutData.set({
      date: req.body.date,
      calories: req.body.calories,
      user_id: req.body.user_id
    });
    await workoutData.save();
    res.status(200).json(workoutData);
  }
  catch (err) {
    res.status(500).json(err);    
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const workoutData = await Workout.destroy({
      where: {
        id: req.params.id 
      }
    });
    
    if(!workoutData) {
      res.status(404).json({ message: "No workout with that id found!" }); 
      return;
    }
    res.status(200).json(workoutData);
  }
  catch (err) {
    res.status(500).json(err); 
  }
});

module.exports = router;
