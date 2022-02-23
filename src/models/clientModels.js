const connect = require('./connection');
const { ObjectId } = require('mongodb');

const getAllClients = async () => {
  const db = await connect();
  const people = await db.collection('client').find().toArray();

  return people;
}

const getClientById = async (id) => {
  if (!ObjectId.isValid(id))
    return null;

  const db = await connect();
  return await db.collection('client').findOne(ObjectId(id))
}

const createClient = async ({ name, email, password }) => {
  const { insertedId } = await connect().then((db) => db
    .collection('client').insertOne({ name, email, password, role: 'user' }));
  return { name, email, role: 'user', _id: insertedId };
}

const findByEmailClient = async (email) => { // função que verifica se existe o e-mail do usuário
  const emailUser = await connect().then((db) => db
    .collection('client').findOne({ email }));
  return emailUser;
};

const updateClient = async (id, name, email, password) => {
  if (!ObjectId.isValid(id))
    return null;

  const db = await connect();
  const updateInfos = await db.collection('client')
    .updateOne({ _id: ObjectId(id) }, { $set: { name, email, password } });

  console.log(updateInfos);

  return updateInfos;
}

const excludeClient = async (id) => {
  if (!ObjectId.isValid(id))
    return null;

  const db = await connect();
  await db.collection('client').deleteOne({ _id: ObjectId(id) });
}

module.exports = {
  getAllClients,
  getClientById,
  createClient,
  findByEmailClient,
  updateClient,
  excludeClient
}
