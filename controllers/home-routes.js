const router = require("express").Router();

const auth = require("../utils/auth");

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
})

module.exports = router;