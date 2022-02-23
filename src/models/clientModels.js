const connect = require('./connection');

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
  const emailUser = await connection().then((db) => db
    .collection('client').findOne({ email }));
  return emailUser;
};

const updateClient = async (id, name, email, password, role) => {
  if (!ObjectId.isValid(id))
    return null;

  const db = await connect();
  await db.collection('client')
    .updateOne({ _id: ObjectId(id) }, { $set: { name, email, password, role } })

  return { id, name, email, password, role };
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
