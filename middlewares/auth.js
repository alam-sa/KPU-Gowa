const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
  try {
    const access_token = req.headers.access_token;
    const decoded = jwt.verify(access_token, process.env.SECRET_KEY);
    req.decoded = decoded
    next()
  } catch (err) {
    next({ name: 'Unauthorized', message: 'Invalid User!' })
  }
}



module.exports = auth