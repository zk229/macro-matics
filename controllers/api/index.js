const router = require("express").Router();

const userRoutes = require("./user-routes");
const mealRoutes = require("./meal-routes");
const workoutRoutes = require("./workout-routes");

router.use("/users", userRoutes);
router.use("/meal", mealRoutes);
router.use("/workout", workoutRoutes);

module.exports = router;