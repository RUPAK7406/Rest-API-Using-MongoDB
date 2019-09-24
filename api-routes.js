const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Hurray welcome to rest API!'
    });
});

var contactController = require('./contactController');

router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

module.exports = router;
