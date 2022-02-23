const clientServices = require('../services/clientServices');

const getAllClients = async (req, res) => {
  const people = await clientServices.getAllClients();
  return res.status(200).json(people);
};

const getClientById = async (req, res) => {
  const { id } = req.params;
  const person = await clientServices.getClientById(id);
  return res.status(200).json(person);
};

const createClient = async (req, res) => {
  const data = req.body;
  const newClient = await clientServices.createClient(data);
  return res.status(201).json(newClient);
};


const clientLogin = async (req, res) => {
  const { email, password } = req.body;

  const token = await clientServices.loginClient(email, password);

  res.status(200).json(token);
};

const updateClient = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  const client = await clientServices.updateClient(id, name, email, password);

  res.status(200).json(client);
}

const excludeClient = async (req, res) => {
  const { id } = req.params;

  await clientServices.excludeClient(id);

  res.status(204).end();
}

module.exports = {
  getAllClients,
  getClientById,
  createClient,
  clientLogin,
  updateClient,
  excludeClient,
}
