const { User } = require('../../models');

const router = require('express').Router();

router.get('/login', (req, res) => {
    res.send('<h1>hiiii</h1>')
});


router.get('/', async (req, res) => {
    //fetching data from table
    try {
        const userData = await User.findAll();
        res.json(userData);

    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('/', async (req, res) => {
    //fetching data from table
    try {
        const userData = await User.create(
            req.body
        );
        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;

            res.json(userData);
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/logout', async (req, res) => {
    // check if someone is currently logged in

    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(200).end();
        })
    }
})

router.post('/login', async (req, res) => {
    // check if username exists

    try {
        // find a single user within User table
        let user = await User.findOne({
            where: {
                username: req.body.username
            }
        })
        if (user === false) {
            res.status(500).json(err);
            return
        }
        let validPassword = user.checkPassword(req.body.password)
        if (validPassword === false) {
            res.status(500).json(err);
            return
        }
        req.session.save(() => {
            req.session.userId = user.id;
            req.session.username = user.username;
            req.session.loggedIn = true;

            res.json(user);
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;