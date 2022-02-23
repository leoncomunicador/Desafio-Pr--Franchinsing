const clientServices = require('../services/clientServices');
const verifyToken = require('../auth/jwtFunctions');

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
  if (
    !email
    || !email.includes('@')
    || !email.includes('.com')
  ) {
 return res.status(400).json({
    message: 'Invalid entries. Try again.',
  }); 
}
  next();
};

const isUnicEmail = async (req, res, next) => {
  const { email } = req.body;
  const userEmail = await clientServices.findByEmail(email);

  if (userEmail) {
    return res.status(409).json({
      message: 'Email already registered',
    });
  }
  next();
};

const isValidPassword = async (req, res, next) => {
  const { email, password } = req.body;
  // const userPassword = await clientServices.findByEmail(email);
  const minPassword = 6;

  if (!password || password.length < minPassword) {
    return res.status(401).json({
      message: 'Password must be at least 6 characters',
    });
  }
  next();
};

const tokenIsValid = async (req, res, next) => {
  try {
    const { authorization: token } = req.headers;
    verifyToken.verify(token);
  } catch (error) {
    if (error) {
      return res.status(401).json({
        message: 'jwt malformed',
      });
    }
  }
  next();
};

const verifyValidateClient = [
  hasEmail,
  hasPassword,
  isValidEmail,
  isUnicEmail,
  isValidPassword,
];


module.exports = {
  verifyValidateClient,
  tokenIsValid,
};