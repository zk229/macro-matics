const User = require("./User");
const Meal = require("./Meal");
const Workout = require("./Workout");

User.hasMany(Meal, {
    foreignKey: "user_id"
});

Meal.belongsTo(User, {
    foreignKey: "user_id"
});

User.hasMany(Workout, {
    foreignKey: "user_id"
});

Workout.belongsTo(User, {
    foreignKey: "user_id"
});

module.exports = { User, Meal, Workout };