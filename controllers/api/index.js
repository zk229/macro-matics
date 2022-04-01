const router = require("express").Router();

const userRoutes = require("./user-routes");
const mealRoutes = require("./meal-routes");

router.use("/users", userRoutes);
router.use("/meal", mealRoutes);

module.exports = router;