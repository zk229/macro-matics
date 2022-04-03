const sequelize = require("../config/connection");
const seedUser = require("./userData");
const seedMeal = require("./mealData");
const seedWorkout = require("./workoutData");

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedMeal();

    await seedWorkout();

    process.exit(0);
}

seedAll();