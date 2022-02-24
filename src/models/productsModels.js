const connect = require('./connect');
const { ObjectId } = require('mongodb');

const getAllProducts = async () => {
  const products = await connect()
    .then((db) => db.collection('products').find().toArray());
 
  return products;
};

const getProductsId = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const product = await connect()
    .then((db) => db.collection('products').findOne(ObjectId(id)));
  return product;
};


const updateProduct = async (id, name, quantity, price) => {
  await connect()
    .then((db) => db
      .collection('ingredients')
      .updateOne({ _id: ObjectId(id) }, { $set: { name, quantity, price } }));
  
  const updatedProduct = getProductsId(id)
  return updatedProduct;
};

const excludeProduct = async (id) => {
  const exclude = await connect()
    .then((db) => db
      .collection('ingredients')
      .deleteOne({ _id: ObjectId(id) }));
  return exclude;
};


module.exports = {
  getAllProducts,
  getProductsId,
  updateProduct,
  excludeProduct,
};
