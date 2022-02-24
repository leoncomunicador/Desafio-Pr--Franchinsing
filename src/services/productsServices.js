const productsModels = require('../models/productsModels');

const getAllProducts = async () => {
  const ingredients = await productsModels.getAllProducts();
  return ingredients;
};

const getProductsId = async (id) => {
  const product = await productsModels.getProductsId(id);
  return product;
};

const updateProduct = async (id, name, quantity, price) => {
  const updated = await productsModels.updateProduct(id, name, quantity, price);
  return updated;
};

const excludeProduct = async (id) => {
  const exclude = await productsModels.excludeProduct(id);
  return exclude;
};

module.exports = {
  getAllProducts,
  getProductsId,
  updateProduct,
  excludeProduct,
};
