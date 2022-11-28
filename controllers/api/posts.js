const router = require('express').Router();
const { Post } = require('../../models/')

// THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
// WHEN I click on an existing blog post
// THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
// WHEN I enter a comment and click on the submit button while signed in
// THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created


// post a post
router.post('/', async (req, res) => {
    const body = req.body;

    try {
        const newPost = await Post.create({ ...body, userId: req.session.userId });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(500).json(err)
    }
})

// get all posts
router.get('/dashboard/posts', async (req, res) => {
    try {
        const allPosts = await Post.findAll();
        res.json(allPosts)
    } catch (err) {
        res.status(500).json(err)
    }
})

// show single post
module.exports = router;