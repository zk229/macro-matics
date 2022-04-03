const { Meal } = require("../models");

const mealData = [
    {
        name: "Supreme Pizza",
        date: "2022-03-29",
        calories: 800,
        protein: 15,
        carbs: 35,
        fat: 15,
        user_id: 1
    }
];

const seedMeal = () => Meal.bulkCreate(mealData);

module.exports = seedMeal;