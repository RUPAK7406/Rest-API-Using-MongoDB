  
const router = require('express').Router();
const contactController = require('../controllers/contactController');

router.route('/')
    .get(contactController.index)
    .post(contactController.new);
router.route('/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

module.exports = router;