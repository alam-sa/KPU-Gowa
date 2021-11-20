const authorizedAdmin = async (req, res, next) => {
  try {
    if (req.decoded.userLevelId) {
      next();
    } else {
      throw { name: "Forbidden", message: "Tidak dapat diakses!"}
    }
  }catch(err) {
    console.log(err);
    next(err)
  }
}

module.exports = authorizedAdmin