const router = require('express').Router();
const { Post, Comment, User } = require('../models/');
// const { Post, Comment, User } = require('../views/layouts/main.handlebars');


router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.get('/', (req, res) => {
  res.render('home')
})


router.get('/dashboard', (req, res) => {
  res.render('dashboard')
})



// // get single post
// router.get('/post/:id', async (req, res) => {
//   try {
//     const postData = await Post.findByPk(req.params.id, {
//       include: [
//         User,
//         {
//           model: Comment,
//           include: [User],
//         },
//       ],
//     });

//     if (postData) {
//       const post = postData.get({ plain: true });

//       res.render('single-post', { post });
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

// router.get('/signup', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('signup');
// });

module.exports = router;
