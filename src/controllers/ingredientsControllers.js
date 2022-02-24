const ingredienServices = require('../services/ingredienServices');

const getAllIngredients = async (_req, res) => {
  const ingredients = await ingredienServices.getAllIngredients()
  return res.status(200).json(ingredients)
};

const getIngredientById = async (req, res) => {
  const { id } = req.params;
  const ingredient = await ingredienServices.getIngredientById(id);
  return res.status(200).json(ingredient);
};

const createIngredients = async (req, res) => {
  const { name, quantity } = req.body;
  const created = await ingredienServices.createIngredients(name, quantity);
  return res.status(201).json(created);
};

const updateIngredient = async (req, res) => {
  const { name, quantity } = req.body;
  const created = await ingredienServices.updateIngredient(name, quantity);
  return res.status(201).json(created);
};

const excludeIngredient = async (req, res) => {
  const { id } = req.params;
  await ingredienServices.excludeIngredient(id);
  return res.status(409).end();
};

module.exports = {
  getAllIngredients,
  getIngredientById,
  createIngredients,
  updateIngredient,
  excludeIngredient,
};
