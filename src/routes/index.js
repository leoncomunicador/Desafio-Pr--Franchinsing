const clients = require('./clientRoutes');
const clientLogin = require('./clientLoginRoutes');
const recipes = require('./recipesRoutes');
const products = require('./productsRoutes');

module.exports = {
  clients,
  clientLogin,
  recipes,
  products,
}
