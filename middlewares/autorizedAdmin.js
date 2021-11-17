const authorizedAdmin = async (req, res, next) => {
  try {
    if (req.decoded.userLevelId === 1) {
      next();
    } else {
      throw { name: "Forbidden", message: "Tidak dapat diakses!"}
    }
  }catch(err) {
    next(err)
  }
}

module.exports = authorizedAdmin