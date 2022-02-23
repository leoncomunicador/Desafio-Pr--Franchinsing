const router = require('express').Router();

const clientControllers = require('../controllers/clientControllers');

router.post('/', clientControllers.createClient)

module.exports = router;
