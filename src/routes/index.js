const clients = require('./clientRoutes');
const clientLogin = require('./clientLoginRoutes');
const recipes = require('./recipesRoutes');
const ingredients = require('./ingredientsRoutes');

module.exports = {
  clients,
  clientLogin,
  recipes,
  ingredients
}
