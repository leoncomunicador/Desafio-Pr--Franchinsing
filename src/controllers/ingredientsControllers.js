const ingredientsServices = require('../services/ingredientsServices');

const getAllIngredients = async (_req, res) => {
  const ingredients = await ingredientsServices.getAllIngredients()
  return res.status(200).json(ingredients)
};

const getIngredientById = async (req, res) => {
  const { id } = req.params;
  const ingredient = await ingredientsServices.getIngredientById(id);
  return res.status(200).json(ingredient);
};

const createIngredients = async (req, res) => {
  const { name, quantity } = req.body;
  const created = await ingredientsServices.createIngredients(name, quantity);
  return res.status(201).json(created);
};

const updateIngredient = async (req, res) => {
  const { name, quantity } = req.body;
  const created = await ingredientsServices.updateIngredient(name, quantity);
  return res.status(201).json(created);
};

const excludeIngredient = async (req, res) => {
  const { id } = req.params;
  await ingredientsServices.excludeIngredient(id);
  return res.status(409).end();
};

module.exports = {
  getAllIngredients,
  getIngredientById,
  createIngredients,
  updateIngredient,
  excludeIngredient,
};
