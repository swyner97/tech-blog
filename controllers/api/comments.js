const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    const body = req.body;
    setences = body.split('. ');

    Comment.create({ body: joinArr, useId: req.session.userId, postId: req.body.postId })
    .then(commentNewPost => {
        res.json(commentNewPOst)
    })
})


module.exports = router