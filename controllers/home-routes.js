const router = require("express").Router();
const { DateTime } = require("luxon");
const auth = require("../utils/auth");
const { User, Meal, Workout } = require("../models");

router.get("/", async (req, res) => {
    try {
        res.render("homepage", { loggedIn: req.session.loggedIn, name: req.session.name });
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
  
    res.render('login');
});

router.get("/add-meal", auth, (req, res) => {
    res.render("add-meal");
});

router.get("/add-workout", auth, (req, res) => {
    res.render("add-workout");
});

router.get("/view-stats", auth, async (req, res) => {
    const date = DateTime.now().toISODate();
    let meals = await Meal.findAll({
        where: {
            date: date,
            user_id: req.session.user.id
        }
    });
    meals = meals.map((meal) => meal.get({ plain: true }));
    let workouts = await Workout.findAll({
        where: {
            date: date,
            user_id: req.session.user.id
        }
    });
    workouts = workouts.map((workout) => workout.get({ plain: true }));
    console.log(meals);
    res.render("view-stats", { meals, workouts });
});

module.exports = router;