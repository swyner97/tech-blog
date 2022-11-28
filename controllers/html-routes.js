const router = require('express').Router();
const { Post, Comment, User } = require('../models/');
// const { Post, Comment, User } = require('../views/layouts/main.handlebars');


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});


router.get('/', (req, res) => {
  res.render('home')
})


router.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

module.exports = router;
