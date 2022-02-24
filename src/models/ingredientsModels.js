const connect = require('./connection');
const { ObjectId } = require('mongodb');

const getAllIngredients = async () => {
  const ingredients = await connection()
    .then((db) => db.collection('ingredients').find().toArray());
 
  return ingredients;
};

const getIngredientById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const ingredient = await connection()
    .then((db) => db.collection('ingredients').findOne(ObjectId(id)));
  return ingredient;
};

const createIngredients = async (name, quantity) => {
  const { insertedId: _id } = await connection().then((db) => db.collection('ingredients')
    .insertOne({ name, quantity }));

  return {_id, name, quantity}
};

const updateIngredient = async (id, name, quantity) => {
  await connection()
    .then((db) => db
      .collection('ingredients')
      .updateOne({ _id: ObjectId(id) }, { $set: { name, quantity } }));
  
  const updatedIngredient = getIngredientById(id)
  return updatedIngredient;
};

const excludeIngredient = async (id) => {
  const exclude = await connection()
    .then((db) => db
      .collection('ingredients')
      .deleteOne({ _id: ObjectId(id) }));
  return exclude;
};


module.exports = {
  getAllIngredients,
  getIngredientById,
  createIngredients,
  updateIngredient,
  excludeIngredient,
};
