const clientModels = require('../models/clientModels');
const { create } = require('../auth/jwtFunctions');

const getAllClients = async (data) => {
  const people = await clientModels.getAllClients(data);

  return people;
};

const getClientById = async (id) => {
  const person = await clientModels.getClientById(id);

  return person;
};

const loginClient = async (email, password) => {
  const client = await clientModels.findByEmailClient(email, password);
  const token = create(client);
  return token;
}

const createClient = async (data) => {
  const person = await clientModels.createClient(data);

  return person;
}

const findByEmail = async (email) => {
  const userEmail = await clientModels.findByEmailClient(email);
  return userEmail;
};

const updateClient = async (id, name, email, password) => {
  const person = await clientModels.updateClient(id, name, email, password);
  console.log(person);
  return person;
}

const excludeClient = async (id) => {
  await clientModels.excludeClient(id);
}

module.exports = {
  getAllClients,
  getClientById,
  loginClient,
  createClient,
  findByEmail,
  updateClient,
  excludeClient,
}