const clientServices = require('../services/clientServices');

const createClient = async (req, res) => {
  const data = req.body;
  const newClient = await clientServices.createClient(data);
  return res.status(201).json(newClient);
};


module.exports = {
  createClient,
}
