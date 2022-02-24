const ingredientModels = require('../models/ingredientsModels');

const getAllIngredients = async () => {
  const ingredients = await ingredientModels.getAllIngredients();
  return ingredients;
};

const getIngredientById = async (id) => {
  const clients = await ingredientModels.getIngredientById(id);
  return clients;
};

const createIngredients = async (name, quantity) => {
  const registered = await ingredientModels.createIngredients(name, quantity);
  return registered;
};

const updateIngredient = async (id, name, quantity) => {
  const updated = await ingredientModels.updateIngredient(id, name, quantity);
  return updated;
};

const excludeIngredient = async (id) => {
  const exclude = await ingredientModels.excludeIngredient(id);
  return exclude;
};

module.exports = {
  getAllIngredients,
  getIngredientById,
  createIngredients,
  updateIngredient,
  excludeIngredient,
};
