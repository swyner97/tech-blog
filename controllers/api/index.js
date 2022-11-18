const router = require('express').Router();

const userRoutes = require('./user.js');
const postsRoutes = require('./posts.js');
const commentsRoutes = require('./comments.js');

// set the url address of where the routers will run their code
router.use('/user', userRoutes)
router.use('/post', postsRoutes)
router.use('/comments', commentsRoutes)

module.exports = router;