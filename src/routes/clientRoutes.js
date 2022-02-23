const router = require('express').Router();
const clientControllers = require('../controllers/clientControllers');

const middleware = require('../middlewares/validateRegister');

router.get('/', clientControllers.getAllClients);
router.get('/:id', clientControllers.getClientById);
router.post('/', middleware.verifyValidateClient, clientControllers.createClient);
router.put('/:id', middleware.tokenIsValid, clientControllers.updateClient);
router.delete('/:id', middleware.tokenIsValid, clientControllers.excludeClient);

module.exports = router;
