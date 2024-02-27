const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        msg: 'this works',
        page: 'main page'
    });
});

router.get('/about', (req, res) => {
    res.json({
        msg: 'this works',
        page: 'about page'
    });
});

module.exports = router;