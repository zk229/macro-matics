const router = require('express').Router();

const mealRoutes = require('./meal-routes.js');

router.use('/meal', mealRoutes);

module.exports = router;