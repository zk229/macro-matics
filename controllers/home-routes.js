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
    res.render("add-meal", { loggedIn: req.session.loggedIn });
});

router.get("/add-workout", auth, (req, res) => {
    res.render("add-workout", { loggedIn: req.session.loggedIn });
});

router.get("/view-stats", auth, async (req, res) => {
    const date = DateTime.now().toISODate();
    res.redirect("/view-stats/" + date)
});

router.get("/view-stats/:date", auth, async (req, res) => {
    const date = req.params.date;
    console.log(date);
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
    let difference = 0;
    meals.forEach(element => difference += element.calories);
    workouts.forEach(element => difference -= element.calories);
    const isPositive = difference > 0;
    res.render("view-stats", { meals, workouts, difference: Math.abs(difference), isPositive, loggedIn: req.session.loggedIn });
});

module.exports = router;