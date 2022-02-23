const clientModels = require('../models/clientModels');

const getAllClients = async () => {
  const people = await clientModels.getAllClients();

  return people;
};

const getClientById = async (id) => {
  const person = await clientModels.getClientById(id);

  return person;
};

const createClient = async (data) => {
  const person = await clientModels.createClient(data);

  return person;
}

const findByEmail = async (email) => {
  const userEmail = await clientModels.findByEmailClient(email);
  return userEmail;
};

const updateClient = async (id, data) => {
  const person = await clientModels.updateClient(id, data);

  return person;
}

const excludeClient = async (id) => {
  await clientModels.updateClient(id);
}

module.exports = {
  getAllClients,
  getClientById,
  createClient,
  findByEmail,
  updateClient,
  excludeClient,
}