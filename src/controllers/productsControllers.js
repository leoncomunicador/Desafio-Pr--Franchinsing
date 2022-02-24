const productsServices = require('../services/productsServices');

const getAllProducts = async (_req, res) => {
  const products = await productsServices.getAllProducts()
  return res.status(200).json(products)
};

const getProductsId = async (req, res) => {
  const { id } = req.params;
  const product = await productsServices.getProductsId(id);
  return res.status(200).json(product);
};

const updateProduct = async (req, res) => {
  const { name, quantity, price } = req.body;
  const updated = await productsServices.updateProduct(name, quantity, price);
  return res.status(200).json(updated);
};

const excludeProduct = async (req, res) => {
  const { id } = req.params;
  await productsServices.excludeProduct(id);
  return res.status(204).end();
};

module.exports = {
  getAllProducts,
  getProductsId,
  updateProduct,
  excludeProduct,
};
