const router = require('express').Router();
const clientControllers = require('../controllers/clientControllers');

// const middleware = require('../middlewares/validateRegister');

router.post('/', clientControllers.clientLogin);

module.exports = router;
