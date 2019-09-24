const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Hurray welcome to rest API!'
    });
});

const contacts = require('./contacts');

router.use('/contacts', contacts);



module.exports = router;
