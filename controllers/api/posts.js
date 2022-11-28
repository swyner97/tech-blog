const router = require('express').Router();
const { Post } = require('../../models/');
const { findByPk } = require('../../models/User');

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
router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.findAll();
        res.json(allPosts)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const [affectedRows] = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// get single post
router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          User,
          {
            model: Comment,
            include: [User],
          },
        ],
      });
  
      if (postData) {
        const post = postData.get({ plain: true });
  
        res.render('single-post', { post });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

// delete post 
router.delete('/:id', async (req, res) => {
    try {
        const [affectedRows] = Post.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }

})

module.exports = router;