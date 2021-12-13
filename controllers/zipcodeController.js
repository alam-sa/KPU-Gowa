const json = require('../asset/zipcode-data.json');
const parsedData = JSON.parse(JSON.stringify(json));

class ZipcodeController {
  static async getRegion(req, res, next) {
    // Zipcode input from request body
    const { province, city } = req.query;
    // const input = Number(req.query.zipcode);
    try {
      let result;
      if (province) {
        // Declare variable container for data mapping result
        let mapData = [];
        // Mapping data from JSON File
        await parsedData.map(element => {
          if (element.province === province) {
            mapData.push(element.city);
          };
        });
        if (!mapData.length) throw {
          name: 'NotFound',
          message: 'Data not found, please input a valid province!'
        };
        // Filter mapped data for unique value
        result = [...new Set(mapData)];
      };
      if (city) {
        // Declare variable container for data mapping result
        let mapData = [];
        // Mapping data from JSON File
        await parsedData.map(element => {
          if (element.city === city) {
            mapData.push(element.district);
          };
        });
        if (!mapData.length) throw {
          name: 'NotFound',
          message: 'Data not found, please input a valid city!'
        };
        // Filter mapped data for unique value
        result = [...new Set(mapData)];
      };
      res.status(200).json(result);
    } catch (err) {
      // Error catcher to pass on error handler
      next(err);
    }
  };
  static async getProvince(req, res, next) {
    try {
      // Declare variable container for data mapping result
      let mapData = [];
      // Mapping data from JSON File
      await parsedData.map(data => {
        mapData.push(data.province);
      });
      // Filter mapped data for unique value
      const result = [...new Set(mapData)]
      // Send filtered data
      res.status(200).json(result);
    } catch (err) {
      // Error catcher to be sent to error handler
      next(err);
    };
  };
}


module.exports = ZipcodeController