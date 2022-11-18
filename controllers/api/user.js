const router = requires ('express').Router();

router.get('/', async (req, res) => {
    res.render('login');
});

module.exports = router;