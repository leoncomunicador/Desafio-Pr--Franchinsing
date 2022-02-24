const router = require('express').Router();
const rescue = require('express-rescue');

const ingredientsControllers = require('../controllers/ingredientsControllers');

router.get('/:id', rescue(ingredientsControllers.getIngredientById));

router.get('/', rescue(ingredientsControllers.getAllIngredients));

router.post('/', rescue(ingredientsControllers.createIngredients));

router.put('/:id', rescue(ingredientsControllers.updateIngredient));

router.delete('/:id', rescue(ingredientsControllers.deleteIngredient));

module.exports = router;
