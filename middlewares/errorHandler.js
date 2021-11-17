function errorHandler(err, req, res, next) {
  switch (err.name) {
    case 'SequelizeValidationError':
      res.status(400).json({ message: [err.errors[0].message] });
      break;
    case 'SequelizeUniqueConstraintError':
      res.status(400).json({ message: ['Email already registered!'] });
      break;
    case 'BadRequest':
      res.status(400).json({ message: [err.message] })
      break;
    case 'Unauthorized':
      res.status(401).json({ message: [err.message] })
      break;
    case 'Forbidden':
      res.status(403).json({ message: [err.message] })
      break;
    case 'NotFound':
      res.status(404).json({ message: [err.message] })
      break;
    case 'DatabaseFailure':
      res.status(500).json({ message: [err.message] })
      break;
    default:
      res.status(500).json({ message: ['Internal Server Error'] })
      break;
  }
}

module.exports = errorHandler;