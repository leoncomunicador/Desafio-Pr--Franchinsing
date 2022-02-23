const clientServices = require('../services/clientServices');

const hasEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(401).json({
      message: 'All fields must be filled',
    });
  }
  next();
};

const hasPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(401).json({
      message: 'All fields must be filled',
    });
  }
  next();
};

const isValidEmail = async (req, res, next) => {
  const { email } = req.body;
  const userEmail = await clientServices.findByEmail(email);
  if (!userEmail || userEmail.email !== email) {
    return res.status(401).json({
      message: 'Incorrect username or password',
    });
  }
  next();
};

const isValidPassword = async (req, res, next) => {
  const { email, password } = req.body;
  const userPassword = await clientServices.findByEmail(email);

  if (!userPassword || userPassword.password !== password) {
    return res.status(401).json({
      message: 'Incorrect username or password',
    });
  }
  next();
};

const verifyValidateClient = [
  hasEmail,
  hasPassword,
  isValidEmail,
  isValidPassword,
];

module.exports = {
  verifyValidateClient,
};