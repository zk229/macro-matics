const router = require("express").Router();

const auth = require("../utils/auth");

router.get('/login', (req, res) => {
    console.log("test");
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
  
    res.render('login');
});

  module.exports = router;