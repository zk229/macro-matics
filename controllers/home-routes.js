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

  module.exports = router;